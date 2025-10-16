# 🎨 Guide de Génération d'Images AI

Ce guide explique comment générer toutes les images du site avec l'API Volcano Engine (Seedream AI).

## 📋 Table des Matières
- [Configuration](#configuration)
- [Images Configurées](#images-configurées)
- [Utilisation du Script](#utilisation-du-script)
- [Personnalisation des Prompts](#personnalisation-des-prompts)
- [Troubleshooting](#troubleshooting)

---

## ⚙️ Configuration

### 1. Vérifier le fichier `.env.local`

Le fichier `.env.local` doit contenir votre clé API :

```env
ARK_API_KEY=c893e3a2-3f22-476c-99bf-e4da9009d5f9
ARK_API_URL=https://ark.cn-beijing.volces.com/api/v3/images/generations
ARK_MODEL=seedream-3-0-t2i-250415
```

### 2. Installer les dépendances

```bash
npm install dotenv
```

---

## 🖼️ Images Configurées

Le fichier `lib/images.ts` contient **24 images** organisées par section :

### Homepage (2 images)
- **hero-background** (1920x1080) : Background de la section Hero
- **final-cta-background** (1920x1080) : Background du CTA final

### Services - Cards (6 images - 1024x768)
1. **service-depannage-urgence** : Dépannage d'urgence 24/7
2. **service-installation-complete** : Installation électrique complète
3. **service-mise-aux-normes** : Mise aux normes & tableau
4. **service-borne-recharge** : Borne de recharge VE
5. **service-domotique** : Domotique & maison connectée
6. **service-eclairage-led** : Éclairage LED design

### Services - Pages Hero (6 images - 1920x1080)
1. **service-page-depannage-hero**
2. **service-page-installation-hero**
3. **service-page-mise-aux-normes-hero**
4. **service-page-borne-recharge-hero**
5. **service-page-domotique-hero**
6. **service-page-eclairage-led-hero**

### Réalisations (6 images - 1024x768)
1. **realisation-installation-neuve**
2. **realisation-mise-aux-normes**
3. **realisation-borne-recharge**
4. **realisation-domotique**
5. **realisation-depannage**
6. **realisation-eclairage-restaurant**

---

## 🚀 Utilisation du Script

### Lister toutes les images disponibles

```bash
node scripts/generate-images.js --list
```

### Générer UNE image spécifique

```bash
node scripts/generate-images.js --id=hero-background
```

Exemples :
```bash
# Hero de la homepage
node scripts/generate-images.js --id=hero-background

# Service dépannage urgence (card)
node scripts/generate-images.js --id=service-depannage-urgence

# Page service dépannage (hero)
node scripts/generate-images.js --id=service-page-depannage-hero

# Réalisation
node scripts/generate-images.js --id=realisation-borne-recharge
```

### Générer TOUTES les images (⚠️ 24 images)

```bash
node scripts/generate-images.js --all
```

**Note** : La génération de toutes les images prend environ **50 minutes** (2 secondes de pause entre chaque image pour éviter le rate limiting).

---

## 🎯 Personnalisation des Prompts

### Modifier un prompt

Éditez le fichier `lib/images.ts` :

```typescript
export const SERVICE_IMAGES: Record<string, ImageConfig> = {
  depannageUrgence: {
    id: 'service-depannage-urgence',
    prompt: 'VOTRE NOUVEAU PROMPT ICI...', // ← Modifier ici
    size: '1024x768',
    guidance_scale: 3,
    context: 'Service: Dépannage Électrique d\'Urgence 24/7',
  },
  // ...
};
```

### Tailles disponibles

- **1024x1024** : Carré (idéal pour avatars, logos)
- **1024x768** : Paysage standard (cards de services, réalisations)
- **1920x1080** : Full HD (hero sections, backgrounds)
- **800x600** : Petit format (si besoin)

### Guidance Scale

Le `guidance_scale` contrôle la fidélité au prompt :
- **1-2** : Plus créatif, moins fidèle
- **3-4** : Équilibré (recommandé)
- **5-7** : Très fidèle au prompt

---

## 📂 Organisation des Fichiers

Après génération, les images seront stockées dans :

```
public/
└── generated-images/
    ├── hero-background.png
    ├── service-depannage-urgence.png
    ├── service-page-depannage-hero.png
    ├── realisation-installation-neuve.png
    └── ... (24 images au total)
```

---

## 🔄 Workflow Recommandé

### Méthode 1 : Générer Progressivement

1. **Tester avec 1 image** pour valider le rendu :
   ```bash
   node scripts/generate-images.js --id=hero-background
   ```

2. **Vérifier le résultat** dans `public/generated-images/`

3. **Ajuster le prompt** dans `lib/images.ts` si nécessaire

4. **Régénérer** l'image jusqu'à satisfaction

5. **Répéter** pour les autres images

### Méthode 2 : Génération Complète

Si les prompts vous conviennent :

```bash
node scripts/generate-images.js --all
```

Allez prendre un café ☕ (50 minutes d'attente)

---

## 🎨 Conseils pour de Meilleurs Prompts

### ✅ Bonnes Pratiques

- **Être spécifique** : "Professional electrician in safety vest" plutôt que "electrician"
- **Ajouter le contexte** : "in modern French house", "residential interior"
- **Qualité photo** : "professional photography", "photo-realistic", "4k quality"
- **Ambiance** : "natural lighting", "bright workspace", "evening ambiance"
- **Style** : "architectural photography", "lifestyle photography"

### ❌ À Éviter

- Prompts trop vagues : "electrical work"
- Texte dans l'image : "sign saying...", "text on wall..."
- Éléments impossibles : "flying electrician"
- Contradictions : "dark lighting" + "bright workspace"

### 📝 Template de Prompt Efficace

```
[Sujet principal] [Action] [Environnement],
[Détails techniques], [Ambiance/Lighting],
[Style photo], [Qualité]
```

Exemple :
```
Professional electrician installing modern electrical panel
in French residential home, clean organized cables,
natural daylight, professional photography, 4k quality
```

---

## 🔍 Troubleshooting

### Erreur : "ARK_API_KEY non définie"

**Solution** : Vérifiez que `.env.local` existe et contient la clé API.

### Erreur : "ENOTFOUND ark.cn-beijing.volces.com"

**Solution** : Problème de connexion internet ou URL incorrecte. Vérifiez votre connexion.

### Erreur : "401 Unauthorized"

**Solution** : Clé API invalide ou expirée. Vérifiez votre clé dans le dashboard Volcano Engine.

### Erreur : "Rate limit exceeded"

**Solution** : Attendez quelques minutes. Le script a une pause de 2s entre chaque image, mais l'API peut avoir d'autres limites.

### Image générée ne correspond pas au prompt

**Solutions** :
1. Augmenter le `guidance_scale` (ex: 4 au lieu de 3)
2. Rendre le prompt plus spécifique
3. Ajouter des mots-clés de qualité : "professional", "high-quality", "detailed"
4. Régénérer plusieurs fois (variabilité AI)

### Image de mauvaise qualité

**Solutions** :
1. Utiliser une taille plus grande : `1920x1080` au lieu de `1024x768`
2. Ajouter "4k quality", "professional photography", "high-resolution"
3. Augmenter le `guidance_scale`

---

## 📊 Coûts & Limites API

### Volcano Engine (Seedream)

Consultez la documentation officielle pour :
- Quota gratuit (si applicable)
- Tarification par image
- Limites de requêtes (rate limiting)

**Estimation** : 24 images × coût unitaire

---

## 🔄 Mettre à Jour les Images dans le Code

Une fois les images générées, elles sont automatiquement disponibles via :

```typescript
import { getImageUrl } from '@/lib/images';

// Dans un composant
<Image
  src={getImageUrl('hero-background')}
  alt="Hero"
  fill
/>
```

Les URLs sont déjà configurées dans `lib/images.ts` :

```typescript
export const IMAGE_URLS: Record<string, string> = {
  'hero-background': '/generated-images/hero-background.png',
  // ... toutes les autres
};
```

---

## 📞 Support

**Problème avec le script ?**
1. Vérifiez les logs de sortie
2. Testez avec une seule image d'abord
3. Vérifiez que le dossier `public/generated-images/` existe

**Problème avec l'API ?**
1. Consultez la documentation Volcano Engine
2. Vérifiez votre quota/crédits
3. Testez avec curl :

```bash
curl -X POST https://ark.cn-beijing.volces.com/api/v3/images/generations \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer c893e3a2-3f22-476c-99bf-e4da9009d5f9" \
  -d '{
    "model": "seedream-3-0-t2i-250415",
    "prompt": "test image",
    "response_format": "url",
    "size": "1024x1024",
    "guidance_scale": 3,
    "watermark": false
  }'
```

---

**Développé avec 🎨 AI Image Generation via Volcano Engine**
