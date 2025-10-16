import { Service, Testimonial, ProcessStep, FAQItem, NavLink } from './types';
import { getImageUrl } from './images';

// Variables globales de l'entreprise
export const COMPANY_INFO = {
  name: 'Électricité Dudelange - Elektriker Diddeleng',
  legalName: '[NOM_ENTREPRISE]',
  phone: '+352 51 23 45',
  email: 'contact@elec-dudelange.lu',
  address: {
    street: 'Adresse à compléter, L-3401 Dudelange',
    city: 'Dudelange',
    postalCode: 'L-3401',
    country: 'Luxembourg',
    region: "Luxembourg",
  },
  yearFounded: 2010,
  siret: '[SIRET]',
  coordinates: {
    lat: 49.4833,
    lng: 6.0833,
  },
  openingHours: {
    weekday: '8h00 - 19h00',
    saturday: '9h00 - 17h00',
    sunday: 'Urgences uniquement',
  },
  emergency24: true,
};

// Services proposés
export const SERVICES: Service[] = [
  {
    slug: 'depannage-electrique-urgence',
    title: 'Dépannage Électrique d\'Urgence 24/7',
    shortDescription: 'Intervention rapide en moins de 2h pour tous vos problèmes électriques',
    description: 'Service de dépannage électrique disponible 24h/24 et 7j/7 à Dudelange et environs. Nos électriciens qualifiés interviennent rapidement pour résoudre toutes vos pannes : coupure de courant, disjoncteur qui saute, prise défectueuse, court-circuit.',
    icon: 'Zap',
    benefits: [
      'Intervention en moins de 2 heures',
      'Disponible 24/7 même jours fériés',
      'Diagnostic gratuit sur place',
      'Devis transparent avant intervention',
    ],
    priceRange: 'À partir de 80€ (hors fournitures)',
    image: getImageUrl('service-depannage-urgence'),
  },
  {
    slug: 'installation-electrique-neuf-renovation',
    title: 'Installation Électrique Complète',
    shortDescription: 'Installation électrique pour constructions neuves et rénovations',
    description: 'Installation électrique complète aux normes NF C 15-100 pour maisons neuves, extensions et rénovations. Nous concevons votre installation sur-mesure : tableau électrique, câblage, prises, interrupteurs, éclairage.',
    icon: 'Home',
    benefits: [
      'Installation conforme NF C 15-100',
      'Schéma électrique personnalisé',
      'Garantie décennale',
      'Attestation Consuel fournie',
    ],
    priceRange: '80-120€/m² selon complexité',
    image: getImageUrl('service-installation-complete'),
  },
  {
    slug: 'mise-aux-normes-tableau-electrique',
    title: 'Mise aux Normes & Tableau Électrique',
    shortDescription: 'Mise en conformité de votre installation électrique vétuste',
    description: 'Diagnostic complet de votre installation et mise en conformité selon la norme NF C 15-100. Remplacement de tableau électrique obsolète, installation de disjoncteurs différentiels, terre, parafoudre.',
    icon: 'Shield',
    benefits: [
      'Diagnostic électrique complet offert',
      'Respect strict des normes en vigueur',
      'Amélioration de la sécurité',
      'Valorisation de votre bien immobilier',
    ],
    priceRange: '800-2500€ selon installation',
    image: getImageUrl('service-mise-aux-normes'),
  },
  {
    slug: 'installation-borne-recharge-voiture-electrique',
    title: 'Borne de Recharge Voiture Électrique',
    shortDescription: 'Installation de wallbox et bornes de recharge pour véhicules électriques',
    description: 'Installation professionnelle de bornes de recharge pour voitures électriques et hybrides. Wallbox jusqu\'à 22kW, toutes marques (Schneider, Legrand, Hager). Éligible aux aides de l\'État.',
    icon: 'Car',
    benefits: [
      'Installation certifiée IRVE',
      'Aides financières jusqu\'à 500€',
      'Recharge 5x plus rapide qu\'une prise classique',
      'Pilotage intelligent par smartphone',
    ],
    priceRange: '1200-2800€ (aides déduites)',
    image: getImageUrl('service-borne-recharge'),
  },
  {
    slug: 'domotique-maison-connectee',
    title: 'Domotique & Maison Connectée',
    shortDescription: 'Automatisation et contrôle intelligent de votre installation',
    description: 'Installation de systèmes domotiques pour piloter votre éclairage, chauffage, volets roulants et prises à distance. Compatible avec Alexa, Google Home et Apple HomeKit.',
    icon: 'Smartphone',
    benefits: [
      'Économies d\'énergie jusqu\'à 30%',
      'Contrôle à distance par smartphone',
      'Scénarios personnalisés',
      'Compatible toutes marques',
    ],
    priceRange: 'À partir de 300€ par pièce',
    image: getImageUrl('service-domotique'),
  },
  {
    slug: 'installation-eclairage-led',
    title: 'Éclairage LED & Design',
    shortDescription: 'Installation d\'éclairage LED moderne et économique',
    description: 'Conception et installation de solutions d\'éclairage LED pour intérieur et extérieur : spots encastrés, rubans LED, appliques design, éclairage indirect. Économie d\'énergie garantie.',
    icon: 'Lightbulb',
    benefits: [
      'Réduction de 80% de la consommation',
      'Durée de vie 25 ans',
      'Lumière modulable et colorée',
      'Effet design garanti',
    ],
    priceRange: 'À partir de 45€/point lumineux',
    image: getImageUrl('service-eclairage-led'),
  },
];

// Navigation
export const NAV_LINKS: NavLink[] = [
  { label: 'Accueil', href: '/' },
  {
    label: 'Nos Services',
    href: '/nos-services',
    submenu: SERVICES.map(s => ({ label: s.title, href: `/${s.slug}` })),
  },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'Blog', href: '/blog' },
  { label: 'Devis Gratuit', href: '/devis-gratuit' },
  { label: 'Contact', href: '/contact' },
];

// Témoignages
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Marie Dubois',
    city: 'Dudelange',
    rating: 5,
    comment: 'Intervention ultra rapide pour un dépannage d\'urgence un dimanche soir. Électricien très professionnel, problème résolu en 30 minutes. Prix honnête. Je recommande vivement !',
    service: 'Dépannage d\'urgence',
  },
  {
    id: 2,
    name: 'Pierre Schneider',
    city: 'Bettembourg',
    rating: 5,
    comment: 'Installation complète de notre maison neuve. Travail impeccable, respect des délais et des normes. Le tableau électrique est parfaitement organisé. Très satisfait du résultat.',
    service: 'Installation électrique complète',
  },
  {
    id: 3,
    name: 'Sophie Martin',
    city: 'Esch-sur-Alzette',
    rating: 5,
    comment: 'Mise aux normes de notre vieille installation. Diagnostic complet réalisé, devis détaillé. Travail soigné et propre. Notre installation est maintenant 100% sécurisée.',
    service: 'Mise aux normes',
  },
  {
    id: 4,
    name: 'Thomas Weber',
    city: 'Luxembourg-Ville',
    rating: 5,
    comment: 'Installation d\'une borne de recharge pour notre voiture électrique. Conseils avisés sur le choix de la wallbox. Installation propre et conforme. Parfait !',
    service: 'Borne de recharge',
  },
  {
    id: 5,
    name: 'Isabelle Laurent',
    city: 'Dudelange',
    rating: 5,
    comment: 'Installation d\'éclairage LED dans toute la maison. Le rendu est magnifique et nous avons déjà constaté une baisse de notre facture d\'électricité. Très bon rapport qualité-prix.',
    service: 'Éclairage LED',
  },
  {
    id: 6,
    name: 'Jean-Marc Keller',
    city: 'Kayl',
    rating: 5,
    comment: 'Système domotique installé pour piloter chauffage et volets. Configuration simple, tout fonctionne parfaitement. Le confort au quotidien est incomparable. Excellent service !',
    service: 'Domotique',
  },
];

// Processus d'intervention
export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: 'Demande de Devis',
    description: 'Contactez-nous par téléphone, formulaire ou email. Nous vous répondons sous 2 heures maximum pour comprendre votre besoin.',
    icon: 'Phone',
  },
  {
    number: 2,
    title: 'Diagnostic sur Place',
    description: 'Déplacement gratuit à votre domicile pour évaluer précisément vos besoins. Diagnostic complet de votre installation électrique.',
    icon: 'Search',
  },
  {
    number: 3,
    title: 'Devis Détaillé',
    description: 'Remise d\'un devis transparent et détaillé sous 48h. Explications claires de chaque poste et conseil personnalisé.',
    icon: 'FileText',
  },
  {
    number: 4,
    title: 'Intervention Planifiée',
    description: 'Intervention à la date convenue avec du matériel professionnel. Respect de votre domicile et travail soigné.',
    icon: 'Calendar',
  },
  {
    number: 5,
    title: 'Contrôle Qualité',
    description: 'Vérification complète de l\'installation. Tests de sécurité et remise des documents de conformité (Consuel si nécessaire).',
    icon: 'CheckCircle',
  },
  {
    number: 6,
    title: 'Garantie & SAV',
    description: 'Garantie décennale sur tous nos travaux. Service après-vente réactif pour votre tranquillité d\'esprit.',
    icon: 'Shield',
  },
];

// FAQ
export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Intervenez-vous vraiment 24h/24 et 7j/7 ?',
    answer: 'Oui, notre service de dépannage d\'urgence est disponible 24 heures sur 24, 7 jours sur 7, y compris les week-ends et jours fériés. Un électricien peut intervenir à votre domicile en moins de 2 heures sur Dudelange et les communes environnantes.',
  },
  {
    question: 'Quels sont vos tarifs pour un dépannage d\'urgence ?',
    answer: 'Le tarif de base pour une intervention d\'urgence démarre à 80€ (hors fournitures). Ce tarif comprend le déplacement et la première heure de main d\'œuvre. Un devis précis vous sera communiqué après diagnostic sur place, avant toute intervention.',
  },
  {
    question: 'Êtes-vous certifié pour les installations électriques ?',
    answer: 'Oui, nous sommes électriciens qualifiés et certifiés. Toutes nos installations sont conformes à la norme NF C 15-100 en vigueur. Nous fournissons systématiquement une attestation de conformité Consuel pour les installations neuves ou rénovations complètes.',
  },
  {
    question: 'Proposez-vous une garantie sur vos travaux ?',
    answer: 'Oui, tous nos travaux sont couverts par notre garantie décennale. De plus, nous offrons une garantie constructeur sur le matériel installé (de 2 à 5 ans selon les équipements). Votre installation est assurée et sécurisée.',
  },
  {
    question: 'Puis-je bénéficier d\'aides pour l\'installation d\'une borne de recharge ?',
    answer: 'Oui, l\'installation d\'une borne de recharge pour véhicule électrique est éligible au crédit d\'impôt de 300€ (conditions en vigueur). Nous sommes certifiés IRVE, ce qui est obligatoire pour bénéficier des aides. Nous vous accompagnons dans vos démarches.',
  },
  {
    question: 'Quels sont les délais pour obtenir un devis ?',
    answer: 'Nous nous engageons à vous fournir un devis détaillé sous 48 heures maximum après notre visite de diagnostic. Pour les dépannages urgents, un devis oral vous est communiqué immédiatement sur place avant intervention.',
  },
];

// Stats
export const STATS = [
  { value: '500+', label: 'Interventions Réussies', icon: 'CheckCircle' },
  { value: '15', label: 'Ans d\'Expérience', icon: 'Award' },
  { value: '100%', label: 'Clients Satisfaits', icon: 'ThumbsUp' },
  { value: '<2h', label: 'Délai d\'Intervention Urgence', icon: 'Clock' },
];
