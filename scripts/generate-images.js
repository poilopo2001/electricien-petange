/**
 * Script de génération d'images AI via l'API Volcano Engine
 * Usage: node scripts/generate-images.js [--all | --id=IMAGE_ID]
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Charger les variables d'environnement
require('dotenv').config({ path: '.env.local' });

const ARK_API_KEY = process.env.ARK_API_KEY;
const ARK_API_URL = process.env.ARK_API_URL || 'https://ark.cn-beijing.volces.com/api/v3/images/generations';
const ARK_MODEL = process.env.ARK_MODEL || 'seedream-3-0-t2i-250415';

// Dossier de destination pour les images générées
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'generated-images');

// Créer le dossier s'il n'existe pas
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log(`✓ Dossier créé: ${OUTPUT_DIR}`);
}

// Importer la configuration des images
const imagesConfig = require('../lib/images.ts');

/**
 * Fonction pour générer une image via l'API Volcano Engine
 */
async function generateImage(config) {
  return new Promise((resolve, reject) => {
    // Convertir les tailles en format Seedream 4.0
    let sizeFormat = config.size;
    if (config.size === '1920x1080' || config.size === '1024x768') {
      sizeFormat = '2K'; // Format pour Seedream 4.0
    } else if (config.size === '1024x1024') {
      sizeFormat = '1K';
    }

    const data = JSON.stringify({
      model: ARK_MODEL,
      prompt: config.prompt,
      sequential_image_generation: 'disabled',
      response_format: 'url',
      size: sizeFormat,
      stream: false,
      watermark: false, // PAS de watermark
    });

    const url = new URL(ARK_API_URL);
    const options = {
      hostname: url.hostname,
      port: 443,
      path: url.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ARK_API_KEY}`,
        'Content-Length': data.length,
      },
    };

    const req = https.request(options, (res) => {
      let body = '';

      res.on('data', (chunk) => {
        body += chunk;
      });

      res.on('end', () => {
        try {
          const response = JSON.parse(body);

          if (response.data && response.data.length > 0) {
            const imageUrl = response.data[0].url;
            resolve({ imageUrl, config });
          } else {
            reject(new Error(`Aucune image générée: ${body}`));
          }
        } catch (error) {
          reject(new Error(`Erreur de parsing JSON: ${error.message}\nRéponse: ${body}`));
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(data);
    req.end();
  });
}

/**
 * Télécharger une image depuis une URL
 */
async function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(OUTPUT_DIR, filename);
    const file = fs.createWriteStream(filepath);

    https.get(url, (response) => {
      response.pipe(file);

      file.on('finish', () => {
        file.close();
        resolve(filepath);
      });
    }).on('error', (error) => {
      fs.unlink(filepath, () => {}); // Supprimer le fichier en cas d'erreur
      reject(error);
    });
  });
}

/**
 * Générer toutes les images
 */
async function generateAllImages() {
  console.log('🎨 Génération de toutes les images du site...\n');

  const allConfigs = [
    ...Object.values(imagesConfig.HOMEPAGE_IMAGES),
    ...Object.values(imagesConfig.SERVICE_IMAGES),
    ...Object.values(imagesConfig.SERVICE_PAGE_IMAGES),
    ...Object.values(imagesConfig.REALISATIONS_IMAGES),
  ];

  console.log(`Total d'images à générer: ${allConfigs.length}\n`);

  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < allConfigs.length; i++) {
    const config = allConfigs[i];
    const progress = `[${i + 1}/${allConfigs.length}]`;

    console.log(`${progress} Génération de: ${config.id}`);
    console.log(`   Context: ${config.context}`);
    console.log(`   Size: ${config.size}`);
    console.log(`   Prompt: ${config.prompt.substring(0, 80)}...`);

    try {
      // Générer l'image
      const { imageUrl } = await generateImage(config);
      console.log(`   ✓ Image générée: ${imageUrl}`);

      // Télécharger l'image
      const filename = `${config.id}.png`;
      const filepath = await downloadImage(imageUrl, filename);
      console.log(`   ✓ Sauvegardée: ${filepath}`);
      console.log('');

      successCount++;

      // Pause de 2 secondes entre chaque requête pour éviter le rate limiting
      await new Promise(resolve => setTimeout(resolve, 2000));

    } catch (error) {
      console.error(`   ✗ Erreur: ${error.message}`);
      console.log('');
      errorCount++;
    }
  }

  console.log('\n📊 Résumé:');
  console.log(`   ✓ Succès: ${successCount}`);
  console.log(`   ✗ Erreurs: ${errorCount}`);
  console.log(`   📁 Dossier: ${OUTPUT_DIR}`);
}

/**
 * Générer une image spécifique par ID
 */
async function generateImageById(imageId) {
  console.log(`🎨 Génération de l'image: ${imageId}\n`);

  const allConfigs = {
    ...imagesConfig.HOMEPAGE_IMAGES,
    ...imagesConfig.SERVICE_IMAGES,
    ...imagesConfig.SERVICE_PAGE_IMAGES,
    ...imagesConfig.REALISATIONS_IMAGES,
  };

  const config = Object.values(allConfigs).find(c => c.id === imageId);

  if (!config) {
    console.error(`✗ Image non trouvée: ${imageId}`);
    console.log('\nImages disponibles:');
    Object.values(allConfigs).forEach(c => {
      console.log(`   - ${c.id}`);
    });
    return;
  }

  console.log(`Context: ${config.context}`);
  console.log(`Size: ${config.size}`);
  console.log(`Prompt: ${config.prompt}\n`);

  try {
    // Générer l'image
    const { imageUrl } = await generateImage(config);
    console.log(`✓ Image générée: ${imageUrl}`);

    // Télécharger l'image
    const filename = `${config.id}.png`;
    const filepath = await downloadImage(imageUrl, filename);
    console.log(`✓ Sauvegardée: ${filepath}`);

  } catch (error) {
    console.error(`✗ Erreur: ${error.message}`);
  }
}

/**
 * Lister toutes les images configurées
 */
function listAllImages() {
  console.log('📋 Liste de toutes les images configurées:\n');

  const sections = {
    'Homepage': imagesConfig.HOMEPAGE_IMAGES,
    'Services (Cards)': imagesConfig.SERVICE_IMAGES,
    'Services (Pages Hero)': imagesConfig.SERVICE_PAGE_IMAGES,
    'Réalisations': imagesConfig.REALISATIONS_IMAGES,
  };

  Object.entries(sections).forEach(([sectionName, images]) => {
    console.log(`\n📁 ${sectionName}`);
    console.log('─'.repeat(50));
    Object.values(images).forEach(img => {
      console.log(`\n   ID: ${img.id}`);
      console.log(`   Context: ${img.context}`);
      console.log(`   Size: ${img.size}`);
    });
  });

  console.log('\n');
}

// Main
(async () => {
  if (!ARK_API_KEY) {
    console.error('✗ Erreur: ARK_API_KEY non définie dans .env.local');
    process.exit(1);
  }

  const args = process.argv.slice(2);

  if (args.includes('--list')) {
    listAllImages();
  } else if (args.includes('--all')) {
    await generateAllImages();
  } else {
    const idArg = args.find(arg => arg.startsWith('--id='));
    if (idArg) {
      const imageId = idArg.split('=')[1];
      await generateImageById(imageId);
    } else {
      console.log('Usage:');
      console.log('  node scripts/generate-images.js --all              # Générer toutes les images');
      console.log('  node scripts/generate-images.js --id=IMAGE_ID     # Générer une image spécifique');
      console.log('  node scripts/generate-images.js --list            # Lister toutes les images disponibles');
      console.log('\nExemples:');
      console.log('  node scripts/generate-images.js --id=hero-background');
      console.log('  node scripts/generate-images.js --id=service-depannage-urgence');
    }
  }
})();
