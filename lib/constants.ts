import { Service, Testimonial, ProcessStep, FAQItem, NavLink } from './types';
import { getImageUrl } from './images';

// Variables globales de l'entreprise
export const COMPANY_INFO = {
  name: 'Électricien Pétange Services',
  legalName: 'Électricien Pétange Services',
  phone: '(+352) 12 34 56 78',
  email: 'contact@electricien-petange.lu',
  address: {
    street: '1 Rue Principale, 4701 Pétange, Luxembourg',
    city: 'Pétange',
    postalCode: 'L-4701',
    country: 'Luxembourg',
    region: "Luxembourg",
  },
  yearFounded: 2010,
  siret: '[SIRET]',
  coordinates: {
    lat: 49.5586,
    lng: 5.8833,
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
    shortDescription: 'Réactivité maximale : un électricien chez vous en moins de 2h à Pétange',
    description: 'Panne électrique à Pétange, Rodange ou Lamadelaine ? Notre service d\'urgence électrique est opérationnel jour et nuit, tous les jours de l\'année. Disjoncteur défaillant, coupure générale, prise qui chauffe ou court-circuit : nous diagnostiquons et réparons sur-le-champ. Votre sécurité est notre priorité absolue.',
    icon: 'Zap',
    benefits: [
      'Électricien sur site sous 120 minutes garanti',
      'Astreinte permanente 7j/7, week-ends et fériés compris',
      'Analyse technique offerte à domicile',
      'Prix annoncé clairement avant toute réparation',
    ],
    priceRange: 'À partir de 80€ (hors fournitures)',
    image: getImageUrl('service-depannage-urgence'),
  },
  {
    slug: 'installation-electrique-neuf-renovation',
    title: 'Installation Électrique Complète',
    shortDescription: 'Câblage intégral pour projets neufs et réhabilitations à Pétange',
    description: 'Vous construisez ou rénovez dans le sud du Luxembourg ? Nous réalisons l\'ensemble de votre réseau électrique selon les normes luxembourgeoises en vigueur. Du plan de câblage initial au raccordement final, chaque étape est pensée pour votre confort et votre sécurité : distribution principale, circuits spécialisés, points lumineux et prises intelligemment positionnés.',
    icon: 'Home',
    benefits: [
      'Respect strict des réglementations luxembourgeoises',
      'Plan électrique adapté à vos besoins spécifiques',
      'Protection décennale incluse',
      'Certificat de conformité délivré',
    ],
    priceRange: '80-120€/m² selon complexité',
    image: getImageUrl('service-installation-complete'),
  },
  {
    slug: 'mise-aux-normes-tableau-electrique',
    title: 'Mise aux Normes & Tableau Électrique',
    shortDescription: 'Sécurisation de vos installations anciennes selon les standards actuels',
    description: 'Votre installation électrique date de plusieurs décennies ? La région du Minett compte de nombreuses habitations dont le réseau électrique nécessite une modernisation. Nous effectuons un contrôle approfondi de votre système existant et procédons à sa remise aux normes : remplacement du coffret électrique dépassé, ajout de protections différentielles, mise à la terre conforme, protection contre les surtensions.',
    icon: 'Shield',
    benefits: [
      'Audit électrique sans frais à votre domicile',
      'Conformité totale avec les réglementations actuelles',
      'Sécurité renforcée pour votre famille',
      'Augmentation de la valeur de votre propriété',
    ],
    priceRange: '800-2500€ selon installation',
    image: getImageUrl('service-mise-aux-normes'),
  },
  {
    slug: 'installation-borne-recharge-voiture-electrique',
    title: 'Borne de Recharge Voiture Électrique',
    shortDescription: 'Équipement wallbox pour véhicules électriques et hybrides rechargeables',
    description: 'Vous roulez électrique ou envisagez de franchir le pas ? Le Luxembourg encourage activement la mobilité verte. Nous installons votre solution de recharge à domicile avec expertise : wallbox performantes jusqu\'à 22kW, compatibles avec tous les constructeurs automobiles (Schneider Electric, Legrand, Hager). Installation éligible aux subventions luxembourgeoises.',
    icon: 'Car',
    benefits: [
      'Technicien qualifié pour infrastructures de recharge',
      'Éligibilité aux aides gouvernementales',
      'Temps de charge divisé par cinq minimum',
      'Gestion intelligente via application mobile',
    ],
    priceRange: '1200-2800€ (aides déduites)',
    image: getImageUrl('service-borne-recharge'),
  },
  {
    slug: 'domotique-maison-connectee',
    title: 'Domotique & Maison Connectée',
    shortDescription: 'Automatisation résidentielle pour un habitat intelligent et économe',
    description: 'Transformez votre habitation à Pétange en logement connecté dernière génération. Nos solutions domotiques vous permettent de gérer lumières, température, stores motorisés et appareils électriques depuis n\'importe où. Intégration parfaite avec les assistants vocaux Alexa, Google Home et l\'écosystème Apple HomeKit.',
    icon: 'Smartphone',
    benefits: [
      'Réduction de consommation énergétique de 30% constatée',
      'Pilotage complet depuis votre téléphone',
      'Création de routines automatisées personnalisées',
      'Interopérabilité avec tous les écosystèmes',
    ],
    priceRange: 'À partir de 300€ par pièce',
    image: getImageUrl('service-domotique'),
  },
  {
    slug: 'installation-eclairage-led',
    title: 'Éclairage LED & Design',
    shortDescription: 'Solutions lumineuses LED performantes et esthétiques',
    description: 'L\'éclairage fait toute la différence dans l\'ambiance de votre intérieur. Nous concevons et posons des systèmes LED sur mesure pour tous espaces : spots intégrés au plafond, bandes lumineuses architecturales, luminaires muraux design, éclairage d\'accentuation. Performances énergétiques exceptionnelles garanties.',
    icon: 'Lightbulb',
    benefits: [
      'Division par cinq de votre facture d\'éclairage',
      'Longévité exceptionnelle de 25 ans',
      'Intensité et couleur ajustables',
      'Rendu visuel contemporain assuré',
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
    city: 'Pétange',
    rating: 5,
    comment: 'Panne totale un dimanche en soirée, l\'électricien est arrivé en 90 minutes chrono. Professionnel, efficace, tarif clair dès le départ. Problème réglé rapidement. Je n\'hésiterai pas à refaire appel !',
    service: 'Dépannage d\'urgence',
  },
  {
    id: 2,
    name: 'Pierre Schneider',
    city: 'Bettembourg',
    rating: 5,
    comment: 'Nous avons confié tout le réseau électrique de notre construction neuve. Résultat impeccable, planning respecté à la lettre, installation aux normes. Le coffret est un modèle d\'organisation. Satisfaction totale.',
    service: 'Installation électrique complète',
  },
  {
    id: 3,
    name: 'Sophie Martin',
    city: 'Esch-sur-Alzette',
    rating: 5,
    comment: 'Notre ancienne maison nécessitait une remise aux normes complète. Audit précis, chiffrage transparent, exécution soignée. Nous dormons tranquilles maintenant que tout est sécurisé.',
    service: 'Mise aux normes',
  },
  {
    id: 4,
    name: 'Thomas Weber',
    city: 'Luxembourg-Ville',
    rating: 5,
    comment: 'Excellents conseils pour choisir notre wallbox. Installation soignée, rapide et conforme aux exigences. Notre voiture électrique se recharge maintenant à domicile sans souci.',
    service: 'Borne de recharge',
  },
  {
    id: 5,
    name: 'Isabelle Laurent',
    city: 'Pétange',
    rating: 5,
    comment: 'Remplacement de tous nos éclairages par du LED. L\'ambiance est superbe et notre consommation a chuté significativement. Rapport qualité-prix imbattable.',
    service: 'Éclairage LED',
  },
  {
    id: 6,
    name: 'Jean-Marc Keller',
    city: 'Kayl',
    rating: 5,
    comment: 'Installation domotique pour gérer radiateurs et volets. Mise en route simple, fonctionnement impeccable. Le gain de confort au quotidien est vraiment remarquable !',
    service: 'Domotique',
  },
];

// Processus d'intervention
export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: 'Prise de Contact Rapide',
    description: 'Appelez-nous, envoyez un message ou remplissez notre formulaire en ligne. Réponse assurée en moins de 2 heures pour cerner précisément votre projet.',
    icon: 'Phone',
  },
  {
    number: 2,
    title: 'Visite Technique Gratuite',
    description: 'Nous nous déplaçons chez vous sans frais pour examiner votre installation. Analyse approfondie de vos besoins électriques et de la configuration des lieux.',
    icon: 'Search',
  },
  {
    number: 3,
    title: 'Proposition Tarifaire Complète',
    description: 'Vous recevez sous 48h un chiffrage détaillé de l\'intervention. Chaque ligne est expliquée avec clarté, accompagnée de nos recommandations techniques.',
    icon: 'FileText',
  },
  {
    number: 4,
    title: 'Réalisation des Travaux',
    description: 'Nous intervenons au jour fixé ensemble, équipés de matériel professionnel. Chantier propre et respect total de votre espace de vie.',
    icon: 'Calendar',
  },
  {
    number: 5,
    title: 'Vérification Finale',
    description: 'Contrôle rigoureux de l\'ensemble des travaux réalisés. Essais de sécurité complets et remise de toute la documentation réglementaire.',
    icon: 'CheckCircle',
  },
  {
    number: 6,
    title: 'Suivi et Garanties',
    description: 'Protection décennale applicable sur toutes nos prestations. Notre service client reste disponible pour tout besoin ultérieur.',
    icon: 'Shield',
  },
];

// FAQ
export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Votre service d\'urgence est-il réellement disponible en permanence ?',
    answer: 'Absolument. Notre astreinte électrique fonctionne sans interruption, 24h sur 24 et 7 jours sur 7, y compris durant les week-ends et jours fériés. Nous garantissons l\'arrivée d\'un technicien qualifié à votre domicile à Pétange ou dans les communes voisines en moins de 2 heures.',
  },
  {
    question: 'Quel est le coût d\'une intervention en urgence ?',
    answer: 'Notre tarif de départ pour un dépannage urgent s\'établit à 80€ hors matériel. Ce montant inclut le déplacement ainsi que la première heure de travail. Après évaluation sur site, nous établissons un chiffrage précis que nous vous soumettons avant d\'entreprendre toute réparation.',
  },
  {
    question: 'Disposez-vous des qualifications nécessaires pour les travaux électriques ?',
    answer: 'Nous sommes des professionnels certifiés et qualifiés pour tous types de travaux électriques. L\'ensemble de nos installations respecte scrupuleusement les normes luxembourgeoises et européennes en vigueur. Pour chaque projet neuf ou rénovation importante, nous délivrons les attestations de conformité réglementaires.',
  },
  {
    question: 'Vos prestations sont-elles garanties ?',
    answer: 'Toutes nos interventions bénéficient d\'une garantie décennale complète. Les équipements que nous installons sont également couverts par la garantie fabricant (durée de 2 à 5 ans selon les produits). Vous êtes ainsi parfaitement protégé.',
  },
  {
    question: 'Existe-t-il des subventions pour l\'installation d\'une wallbox ?',
    answer: 'Le Luxembourg propose effectivement des aides financières pour l\'installation de bornes de recharge domestiques. En tant que professionnels qualifiés pour ce type d\'infrastructure, nous vous guidons dans les démarches administratives pour optimiser vos aides.',
  },
  {
    question: 'Sous quel délai puis-je recevoir une estimation tarifaire ?',
    answer: 'Nous établissons et transmettons votre devis complet dans un délai maximum de 48 heures suivant notre visite technique. En situation d\'urgence, nous vous communiquons verbalement une estimation tarifaire immédiate avant de débuter les travaux.',
  },
];

// Stats
export const STATS = [
  { value: '500+', label: 'Projets Achevés avec Succès', icon: 'CheckCircle' },
  { value: '15', label: 'Années d\'Expertise', icon: 'Award' },
  { value: '100%', label: 'Taux de Satisfaction Client', icon: 'ThumbsUp' },
  { value: '<2h', label: 'Temps de Réponse Urgence', icon: 'Clock' },
];
