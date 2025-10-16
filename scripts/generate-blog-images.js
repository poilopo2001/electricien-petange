/**
 * Script pour générer uniquement les images blog
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Charger les variables d'environnement
require('dotenv').config({ path: '.env.local' });

const ARK_API_KEY = process.env.ARK_API_KEY;
const ARK_API_URL = process.env.ARK_API_URL;
const ARK_MODEL = process.env.ARK_MODEL;

const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'generated-images');

// Charger la config des images blog
const BLOG_IMAGES = require('./blog-images-config.js');

/**
 * Fonction pour générer une image via l'API
 */
async function generateImage(config) {
  return new Promise((resolve, reject) => {
    // Convertir les tailles en format Seedream 4.0
    let sizeFormat = config.size;
    if (config.size === '1920x1080' || config.size === '1024x768') {
      sizeFormat = '2K';
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
      watermark: false,
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

          if (response.error) {
            reject(new Error(response.error.message || 'API Error'));
            return;
          }

          if (response.data && response.data.length > 0 && response.data[0].url) {
            const imageUrl = response.data[0].url;
            console.log(`   ✓ Image générée: ${imageUrl}`);
            resolve(imageUrl);
          } else {
            reject(new Error('No image URL in response'));
          }
        } catch (error) {
          reject(error);
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
 * Télécharger et sauvegarder une image
 */
async function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      const filePath = path.join(OUTPUT_DIR, filename);
      const fileStream = fs.createWriteStream(filePath);

      res.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`   ✓ Sauvegardée: ${filePath}\n`);
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(filePath, () => {});
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

/**
 * Générer toutes les images blog
 */
async function generateAllBlogImages() {
  console.log('🎨 Génération des images blog...\n');

  const imageIds = Object.keys(BLOG_IMAGES);
  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < imageIds.length; i++) {
    const imageId = imageIds[i];
    const config = BLOG_IMAGES[imageId];

    console.log(`[${i + 1}/${imageIds.length}] Génération de: ${imageId}`);
    console.log(`   Context: ${config.context}`);
    console.log(`   Size: ${config.size}`);
    console.log(`   Prompt: ${config.prompt.substring(0, 80)}...`);

    try {
      const imageUrl = await generateImage(config);
      await downloadImage(imageUrl, `${imageId}.png`);
      successCount++;
    } catch (error) {
      console.error(`   ✗ Erreur: ${error.message}\n`);
      errorCount++;
    }

    // Pause entre chaque requête (2 secondes)
    if (i < imageIds.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }

  console.log('\n📊 Résumé:');
  console.log(`   ✓ Succès: ${successCount}`);
  console.log(`   ✗ Erreurs: ${errorCount}`);
  console.log(`   📁 Dossier: ${OUTPUT_DIR}`);
}

// Exécuter
generateAllBlogImages().catch(console.error);
