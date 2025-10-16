/**
 * Configuration centralisée de toutes les images du site
 * Chaque image a un prompt AI contextualisé pour une génération cohérente
 */

export interface ImageConfig {
  id: string;
  prompt: string;
  size: '1024x1024' | '1024x768' | '1920x1080' | '800x600';
  guidance_scale?: number;
  context: string; // Description du contexte pour référence
}

/**
 * Images pour les sections de la Homepage
 */
export const HOMEPAGE_IMAGES: Record<string, ImageConfig> = {
  hero: {
    id: 'hero-background',
    prompt: 'Professional electrician working on modern electrical panel in clean residential home, high-quality lighting, professional photography, modern French house interior, safety equipment visible, photo-realistic, 4k quality',
    size: '1920x1080',
    guidance_scale: 3.5,
    context: 'Background de la section Hero (homepage)',
  },
  finalCTA: {
    id: 'final-cta-background',
    prompt: 'Modern electrical installation in luxury home, LED lighting system, clean professional workspace, electrician tools neatly organized, bright natural lighting, professional photography, French residential interior',
    size: '1920x1080',
    guidance_scale: 3.5,
    context: 'Background de la section CTA finale (homepage)',
  },
};

/**
 * Images pour chaque service
 */
export const SERVICE_IMAGES: Record<string, ImageConfig> = {
  depannageUrgence: {
    id: 'service-depannage-urgence',
    prompt: 'Emergency electrician responding to urgent electrical call, professional in safety vest, electrical tools, residential French house, night time intervention, emergency lighting, professional photo-realistic quality',
    size: '1024x768',
    guidance_scale: 3,
    context: 'Service: Dépannage Électrique d\'Urgence 24/7',
  },
  installationComplete: {
    id: 'service-installation-complete',
    prompt: 'Professional electrician installing complete electrical system in new French house construction, modern electrical panel installation, cable management, clean professional workspace, natural daylight, high-quality photography',
    size: '1024x768',
    guidance_scale: 3,
    context: 'Service: Installation Électrique Complète',
  },
  miseAuxNormes: {
    id: 'service-mise-aux-normes',
    prompt: 'Electrician upgrading old electrical panel to modern safety standards, before and after comparison visible, French residential electrical box, professional safety equipment, detailed technical work, professional photography',
    size: '1024x768',
    guidance_scale: 3,
    context: 'Service: Mise aux Normes & Tableau Électrique',
  },
  borneRecharge: {
    id: 'service-borne-recharge',
    prompt: 'Modern electric vehicle charging station (wallbox) installed on French house garage wall, sleek design, electric car charging cable connected, professional installation, clean residential setting, bright natural lighting',
    size: '1024x768',
    guidance_scale: 3,
    context: 'Service: Borne de Recharge Voiture Électrique',
  },
  domotique: {
    id: 'service-domotique',
    prompt: 'Smart home automation system, modern touch control panel on wall, smart lighting controls, connected home devices, French modern interior, tablet showing home automation app, professional installation, high-tech ambiance',
    size: '1024x768',
    guidance_scale: 3,
    context: 'Service: Domotique & Maison Connectée',
  },
  eclairageLED: {
    id: 'service-eclairage-led',
    prompt: 'Modern LED lighting installation in French home, recessed LED spotlights in ceiling, LED strips accent lighting, warm ambient lighting, professional electrician installing lights, contemporary interior design, high-quality photography',
    size: '1024x768',
    guidance_scale: 3,
    context: 'Service: Éclairage LED & Design',
  },
};

/**
 * Images pour les pages de services individuelles
 */
export const SERVICE_PAGE_IMAGES: Record<string, ImageConfig> = {
  depannageUrgenceHero: {
    id: 'service-page-depannage-hero',
    prompt: 'Professional electrician in emergency intervention at night, safety vest and helmet, electrical fault diagnosis with professional tools, French residential building, emergency vehicle lights in background, dramatic lighting, photo-realistic',
    size: '1920x1080',
    guidance_scale: 3.5,
    context: 'Hero image page Dépannage Urgence',
  },
  installationHero: {
    id: 'service-page-installation-hero',
    prompt: 'Wide angle view of electrician installing complete electrical system in new construction, modern French house interior, clean professional cables organization, electrical panel installation, bright professional workspace, architectural photography',
    size: '1920x1080',
    guidance_scale: 3.5,
    context: 'Hero image page Installation Complète',
  },
  miseAuxNormesHero: {
    id: 'service-page-mise-aux-normes-hero',
    prompt: 'Close-up of professional electrician hands working on modern electrical safety panel, technical precision work, safety compliance certification visible, professional tools, French electrical standards, high-detail professional photography',
    size: '1920x1080',
    guidance_scale: 3.5,
    context: 'Hero image page Mise aux Normes',
  },
  borneRechargeHero: {
    id: 'service-page-borne-recharge-hero',
    prompt: 'Modern electric vehicle charging at home wallbox station, French suburban house driveway, professional installation visible, electric car connected and charging, sunset lighting, lifestyle photography, eco-friendly ambiance',
    size: '1920x1080',
    guidance_scale: 3.5,
    context: 'Hero image page Borne de Recharge',
  },
  domotiqueHero: {
    id: 'service-page-domotique-hero',
    prompt: 'Futuristic smart home control center, multiple screens showing home automation, modern French living room with smart devices, voice assistant visible, ambient LED lighting, high-tech professional installation, luxury interior design photography',
    size: '1920x1080',
    guidance_scale: 3.5,
    context: 'Hero image page Domotique',
  },
  eclairageLEDHero: {
    id: 'service-page-eclairage-led-hero',
    prompt: 'Stunning LED lighting installation showcase in modern French home, multiple lighting layers, recessed spots, LED strips, pendant lights, warm and cool zones, professional design, architectural interior photography, evening ambiance',
    size: '1920x1080',
    guidance_scale: 3.5,
    context: 'Hero image page Éclairage LED',
  },
};

/**
 * Images pour la page Réalisations
 */
export const REALISATIONS_IMAGES: Record<string, ImageConfig> = {
  projet1: {
    id: 'realisation-installation-neuve',
    prompt: 'Complete electrical installation finished in brand new French house, modern electrical panel perfectly organized, cable management, professional finish, clean white walls, residential interior, professional photography, success project',
    size: '1024x768',
    guidance_scale: 3,
    context: 'Réalisation: Installation Électrique Complète',
  },
  projet2: {
    id: 'realisation-mise-aux-normes',
    prompt: 'Before and after electrical panel upgrade in French apartment, old panel replaced with modern safety system, professional work comparison, electrical certification document visible, professional photography',
    size: '1024x768',
    guidance_scale: 3,
    context: 'Réalisation: Mise aux Normes Appartement',
  },
  projet3: {
    id: 'realisation-borne-recharge',
    prompt: 'Newly installed electric vehicle charging station on French house exterior wall, modern wallbox design, cable holder, professional installation finish, electric car parked nearby, satisfied homeowner in background, daytime photography',
    size: '1024x768',
    guidance_scale: 3,
    context: 'Réalisation: Borne de Recharge Installée',
  },
  projet4: {
    id: 'realisation-domotique',
    prompt: 'Smart home automation system fully operational in French modern home, control panels, smart lighting responding to commands, connected devices, professional installation, happy family using smart home features, lifestyle photography',
    size: '1024x768',
    guidance_scale: 3,
    context: 'Réalisation: Système Domotique Complet',
  },
  projet5: {
    id: 'realisation-depannage',
    prompt: 'Electrician successfully fixing electrical fault in French home, problem resolved, homeowner relieved and happy, professional tools, electrical panel working properly, emergency intervention completed, professional documentation',
    size: '1024x768',
    guidance_scale: 3,
    context: 'Réalisation: Dépannage Urgence Résolu',
  },
  projet6: {
    id: 'realisation-eclairage-restaurant',
    prompt: 'Beautiful LED lighting design installed in French restaurant dining area, multiple lighting zones, warm ambiance, recessed spotlights, LED accent lighting, modern interior design, evening atmosphere, customers enjoying, architectural photography',
    size: '1024x768',
    guidance_scale: 3,
    context: 'Réalisation: Éclairage LED Restaurant',
  },
};

/**
 * Images pour les articles de blog
 */
export const BLOG_IMAGES: Record<string, ImageConfig> = {
  disjoncteurSaute: {
    id: 'blog-disjoncteur-saute',
    prompt: 'Close-up of French electrical panel with circuit breaker in OFF position, professional electrician hand pointing at tripped breaker, residential fuse box, clean modern panel, educational photo, professional lighting',
    size: '1024x768',
    guidance_scale: 3,
    context: 'Article blog: Disjoncteur qui saute',
  },
  panneTotale: {
    id: 'blog-panne-totale',
    prompt: 'Dark French house interior during power outage, person holding flashlight looking at electrical panel, emergency situation, dramatic lighting, realistic home environment, problem-solving moment',
    size: '1024x768',
    guidance_scale: 3,
    context: 'Article blog: Panne électrique totale',
  },
  courtCircuit: {
    id: 'blog-court-circuit',
    prompt: 'Electrical short circuit sparks danger, burnt electrical outlet with scorch marks, damaged wiring visible, safety warning concept, close-up photography, dramatic lighting showing electrical hazard',
    size: '1024x768',
    guidance_scale: 3,
    context: 'Article blog: Court-circuit électrique',
  },
  tableauBruit: {
    id: 'blog-tableau-bruit',
    prompt: 'Professional electrician using sound detection equipment near electrical panel, listening to abnormal noise in fuse box, diagnostic tool, safety inspection, professional troubleshooting scene',
    size: '1024x768',
    guidance_scale: 3,
    context: 'Article blog: Tableau électrique qui fait du bruit',
  },
  priseChauffe: {
    id: 'blog-prise-chauffe',
    prompt: 'Overheating electrical outlet with heat waves effect, wall socket showing signs of overload, hand hovering to feel heat, danger warning visualization, close-up detail, safety hazard concept',
    size: '1024x768',
    guidance_scale: 3,
    context: 'Article blog: Prise électrique qui chauffe',
  },
};

/**
 * Mapping des IDs vers les URLs d'images
 * Ces URLs seront générées par le script de génération d'images
 */
export const IMAGE_URLS: Record<string, string> = {
  // Homepage
  'hero-background': '/generated-images/hero-background.png',
  'final-cta-background': '/generated-images/final-cta-background.png',

  // Services (cards)
  'service-depannage-urgence': '/generated-images/service-depannage-urgence.png',
  'service-installation-complete': '/generated-images/service-installation-complete.png',
  'service-mise-aux-normes': '/generated-images/service-mise-aux-normes.png',
  'service-borne-recharge': '/generated-images/service-borne-recharge.png',
  'service-domotique': '/generated-images/service-domotique.png',
  'service-eclairage-led': '/generated-images/service-eclairage-led.png',

  // Services (pages hero)
  'service-page-depannage-hero': '/generated-images/service-page-depannage-hero.png',
  'service-page-installation-hero': '/generated-images/service-page-installation-hero.png',
  'service-page-mise-aux-normes-hero': '/generated-images/service-page-mise-aux-normes-hero.png',
  'service-page-borne-recharge-hero': '/generated-images/service-page-borne-recharge-hero.png',
  'service-page-domotique-hero': '/generated-images/service-page-domotique-hero.png',
  'service-page-eclairage-led-hero': '/generated-images/service-page-eclairage-led-hero.png',

  // Réalisations
  'realisation-installation-neuve': '/generated-images/realisation-installation-neuve.png',
  'realisation-mise-aux-normes': '/generated-images/realisation-mise-aux-normes.png',
  'realisation-borne-recharge': '/generated-images/realisation-borne-recharge.png',
  'realisation-domotique': '/generated-images/realisation-domotique.png',
  'realisation-depannage-urgence': '/generated-images/realisation-depannage.png',
  'realisation-eclairage-led': '/generated-images/realisation-eclairage-restaurant.png',

  // Blog
  'blog-disjoncteur-saute': '/generated-images/blog-disjoncteur-saute.png',
  'blog-panne-totale': '/generated-images/blog-panne-totale.png',
  'blog-court-circuit': '/generated-images/blog-court-circuit.png',
  'blog-tableau-bruit': '/generated-images/blog-tableau-bruit.png',
  'blog-prise-chauffe': '/generated-images/blog-prise-chauffe.png',
};

/**
 * Fonction helper pour obtenir l'URL d'une image
 */
export function getImageUrl(imageId: string): string {
  return IMAGE_URLS[imageId] || '/images/placeholder.png';
}

/**
 * Fonction helper pour obtenir toutes les configurations d'images
 */
export function getAllImageConfigs(): ImageConfig[] {
  return [
    ...Object.values(HOMEPAGE_IMAGES),
    ...Object.values(SERVICE_IMAGES),
    ...Object.values(SERVICE_PAGE_IMAGES),
    ...Object.values(REALISATIONS_IMAGES),
    ...Object.values(BLOG_IMAGES),
  ];
}
