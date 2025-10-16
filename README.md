# ⚡ Site Web Électricien Dudelange

Site Next.js 14+ professionnel pour entreprise locale d'électricité à Dudelange. Design moderne, mobile-first, ultra-rapide et optimisé SEO local.

## 🚀 Fonctionnalités

### ✨ Pages Principales
- ✅ **Homepage** : Hero section animée, stats, services, témoignages, FAQ, CTA final
- ✅ **Nos Services** : Grille complète des 6 services
- ✅ **Pages Services Individuelles** : Pages détaillées pour chaque service avec FAQ
- ✅ **Contact** : Formulaire multi-étapes avec validation Zod
- ✅ **Devis Gratuit** : Page conversion optimisée
- ✅ **Réalisations** : Galerie de projets avec filtres par catégorie
- ✅ **Mentions Légales** : Page complète conforme RGPD
- ✅ **Politique de Confidentialité** : Page RGPD détaillée

### 🎨 Design System
- **Palette de couleurs** :
  - Primary (Bleu professionnel) : `#1a5490`
  - Accent (Orange conversion) : `#ff8c42`
- **Typographie** : Inter avec échelle modulaire
- **Composants réutilisables** : Buttons, Inputs, Accordion, Select
- **Animations** : Framer Motion pour scroll reveal et micro-interactions

### 📱 Navigation Optimisée
- **Mega Menu Desktop** : Menu services en 2 colonnes avec CTA et trust signals
- **Menu Mobile Conversion** : Design optimisé avec CTAs multiples et trust badges
- **Sticky Bottom Bar Mobile** : 3 actions principales toujours visibles

### 🛠️ Stack Technique
- **Framework** : Next.js 14.2+ (App Router)
- **Langage** : TypeScript (Mode Strict)
- **Styling** : Tailwind CSS 3.4+
- **Animations** : Framer Motion 12+
- **Icônes** : Lucide React
- **Formulaires** : React Hook Form + Zod
- **Images** : Next/Image optimisé

### 🔍 SEO Avancé
- Metadata centralisée pour toutes les pages
- Structured Data (JSON-LD) : LocalBusiness, Service, FAQPage, BreadcrumbList
- Sitemap.xml complet
- Robots.txt optimisé
- Images optimisées avec alt text SEO-friendly
- URLs SEO-friendly

## 📦 Installation

### Prérequis
- Node.js 18+ installé
- npm ou yarn

### Étapes d'Installation

1. **Cloner ou extraire le projet**
```bash
cd "electricien depan hattange grande"
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer le serveur de développement**
```bash
npm run dev
```

4. **Ouvrir dans le navigateur**
```
http://localhost:3000
```

## ⚙️ Configuration

### 1. Informations de l'Entreprise

Modifier le fichier `lib/constants.ts` pour personnaliser :

```typescript
export const COMPANY_INFO = {
  name: 'Électricien Dudelange',
  legalName: '[NOM_ENTREPRISE]',        // ← À REMPLACER
  phone: '+33 3 82 XX XX XX',           // ← À REMPLACER
  email: 'contact@elec-dudelange.lu', // ← À REMPLACER
  address: {
    street: '[ADRESSE]',                // ← À REMPLACER
    city: 'Dudelange',
    postalCode: 'L-3401',
    country: 'Luxembourg',
    region: 'Bouches-du-Rhône',
  },
  yearFounded: 2010,                    // ← À REMPLACER
  siret: '[SIRET]',                     // ← À REMPLACER
  // ...
};
```

### 2. Metadata & SEO

Modifier `lib/metadata.ts` pour ajuster :
- Titres des pages
- Descriptions meta
- Mots-clés
- URL canonique (remplacer `elec-dudelange.lu`)

### 3. Images

**Pour la Production** :
- Remplacer les URLs Unsplash dans `lib/constants.ts` par vos propres images
- Placer vos images dans le dossier `public/images/`
- Format recommandé : WebP ou AVIF pour la performance

**Images nécessaires** :
- Logo entreprise : `public/logo.png`
- Favicon : `public/favicon.ico`
- OG Image (réseaux sociaux) : `public/og-image.jpg` (1200x630px)
- Photos services (6 images)
- Photos réalisations (6+ images)

### 4. Google Analytics (Optionnel)

Ajouter dans `app/layout.tsx` :
```tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
```

## 🏗️ Structure du Projet

```
elec-dudelange-grande/
├── app/                          # Pages Next.js (App Router)
│   ├── layout.tsx               # Layout racine avec Header/Footer
│   ├── page.tsx                 # Homepage
│   ├── [slug]/page.tsx          # Pages services dynamiques
│   ├── nos-services/page.tsx    # Liste des services
│   ├── contact/page.tsx         # Contact avec formulaire
│   ├── devis-gratuit/page.tsx   # Page conversion
│   ├── realisations/page.tsx    # Galerie projets
│   ├── mentions-legales/page.tsx
│   ├── politique-confidentialite/page.tsx
│   └── globals.css              # Styles globaux Tailwind
│
├── components/
│   ├── ui/                      # Composants UI de base
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Textarea.tsx
│   │   ├── Select.tsx
│   │   └── Accordion.tsx
│   ├── layout/                  # Composants layout
│   │   ├── Header.tsx           # Navigation + Mega Menu
│   │   └── Footer.tsx
│   ├── sections/                # Sections homepage
│   │   ├── Hero.tsx
│   │   ├── StatsBar.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── ProcessTimeline.tsx
│   │   ├── Testimonials.tsx
│   │   └── FinalCTA.tsx
│   └── forms/
│       └── MultiStepForm.tsx    # Formulaire 4 étapes
│
├── lib/
│   ├── constants.ts             # Données de l'entreprise
│   ├── types.ts                 # Types TypeScript
│   ├── metadata.ts              # SEO centralisé
│   ├── schema.ts                # JSON-LD schemas
│   └── utils.ts                 # Fonctions utilitaires
│
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── images/                  # Vos images
│
├── tailwind.config.js           # Configuration Tailwind
├── next.config.mjs              # Configuration Next.js
└── package.json
```

## 🎨 Composants Principaux

### Header avec Mega Menu
- Navigation desktop avec mega menu 2 colonnes
- Menu mobile full-screen avec CTAs
- Sticky bottom bar mobile (Appeler, Devis, Contact)

### MultiStepForm (4 Étapes)
1. Type de projet (sélection visuelle)
2. Détails (urgence, surface, budget)
3. Message descriptif
4. Coordonnées + consentement RGPD

### Sections Homepage
- **Hero** : Animation Framer Motion, gradient overlay, CTAs multiples
- **StatsBar** : 4 statistiques clés avec icônes animées
- **ServicesGrid** : 6 services en grid responsive avec hover effects
- **ProcessTimeline** : Timeline verticale du processus en 6 étapes
- **Testimonials** : 6 avis clients avec système de notation
- **FAQ** : Accordion animé avec 6 questions

## 📱 Responsive Design

### Breakpoints Tailwind
- **Mobile** : < 640px
- **Tablet** : 640px - 1024px
- **Desktop** : ≥ 1024px

### Mobile-First
Toutes les sections sont conçues mobile-first avec des améliorations progressives pour desktop.

## 🚀 Déploiement

### Sur Vercel (Recommandé)

1. **Créer un compte Vercel** : https://vercel.com

2. **Connecter votre repository Git**
   - GitHub / GitLab / Bitbucket

3. **Configuration automatique**
   - Vercel détecte automatiquement Next.js
   - Build command : `npm run build`
   - Output directory : `.next`

4. **Variables d'environnement** (si nécessaire)
   - Ajouter dans Vercel Dashboard > Settings > Environment Variables

5. **Déployer**
   - Push sur la branche `main` = déploiement automatique

### Build de Production Local

```bash
npm run build
npm start
```

## 🔧 Scripts Disponibles

```bash
npm run dev      # Développement (localhost:3000)
npm run build    # Build de production
npm start        # Serveur de production
npm run lint     # Linter ESLint
```

## ✅ Checklist Avant Production

### Contenu
- [ ] Remplacer `[NOM_ENTREPRISE]`, `[SIRET]`, `[ADRESSE]`
- [ ] Mettre à jour téléphone et email
- [ ] Remplacer toutes les images Unsplash
- [ ] Vérifier les textes de tous les services
- [ ] Personnaliser les témoignages clients
- [ ] Ajouter vos vraies réalisations

### SEO
- [ ] Changer l'URL de base partout (`elec-dudelange.lu`)
- [ ] Vérifier les metadata de chaque page
- [ ] Tester le sitemap.xml
- [ ] Valider les structured data (Google Rich Results Test)
- [ ] Ajouter Google Search Console

### Légal
- [ ] Vérifier mentions légales (nom, SIRET, etc.)
- [ ] Compléter la politique de confidentialité si cookies tiers
- [ ] Ajouter un bandeau cookies si nécessaire

### Performance
- [ ] Optimiser toutes les images (WebP/AVIF)
- [ ] Tester sur PageSpeed Insights
- [ ] Vérifier la compatibilité mobile (Google Mobile-Friendly Test)

### Sécurité
- [ ] Configurer HTTPS (automatique sur Vercel)
- [ ] Vérifier les headers de sécurité
- [ ] Tester les formulaires (protection spam)

## 🎯 Optimisations Performances

### Images Next/Image
Toutes les images utilisent le composant `<Image />` de Next.js :
- Lazy loading automatique
- Redimensionnement responsive
- Formats modernes (WebP, AVIF)
- Priority pour la hero image

### Code Splitting
- Server Components par défaut
- Client Components seulement pour l'interactivité
- Dynamic imports pour les composants lourds

### Animations
- Framer Motion avec lazy loading
- CSS animations pour les effets simples
- Reduced motion support

## 📞 Support & Contact

Pour toute question sur le code :
- Consulter la documentation Next.js : https://nextjs.org/docs
- Tailwind CSS : https://tailwindcss.com/docs
- Framer Motion : https://www.framer.com/motion/

## 📄 Licence

Ce projet est développé pour **Électricien Dudelange**. Tous droits réservés.

---

**Développé avec ⚡ Next.js 14 + TypeScript + Tailwind CSS**
