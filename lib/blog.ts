/**
 * Types et données pour le blog
 */

export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  readTime: number; // en minutes
  publishedAt: string; // Format: YYYY-MM-DD
  image: string;
  keywords: string[];
  content: {
    sections: BlogSection[];
  };
  hasContentComponent?: boolean; // Indique qu'un composant de contenu React existe
}

export interface BlogSection {
  type: 'heading' | 'paragraph' | 'list' | 'alert' | 'cta' | 'faq';
  content: string | string[] | FAQItem[];
  level?: number; // Pour les headings (2, 3, 4)
  alertType?: 'danger' | 'warning' | 'info' | 'success'; // Pour les alerts
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const BLOG_CATEGORIES = [
  'Dépannage Urgence',
  'Sécurité Électrique',
  'Normes & Réglementation',
  'Conseils & Astuces',
  'Économies d\'Énergie',
] as const;

/**
 * Liste de tous les articles de blog
 */
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'disjoncteur-qui-saute-causes-solutions',
    title: 'Disjoncteur qui Saute : 7 Causes et Solutions Immédiates',
    metaDescription: 'Votre disjoncteur saute régulièrement ? Découvrez les 7 causes principales et les solutions pour y remédier. Intervention 24/7 à Dudelange.',
    excerpt: 'Un disjoncteur qui saute régulièrement est un problème électrique courant mais qui ne doit pas être pris à la légère. Découvrez les causes et solutions.',
    category: 'Dépannage Urgence',
    readTime: 8,
    publishedAt: '2024-12-15',
    image: '/generated-images/blog-disjoncteur-saute.png',
    keywords: [
      'disjoncteur qui saute',
      'pourquoi mon disjoncteur saute',
      'disjoncteur saute régulièrement',
      'disjoncteur déclenche',
      'électricien Dudelange',
    ],
    content: {
      sections: [], // Contenu rendu par le composant React
    },
    hasContentComponent: true, // Indique qu'un composant de contenu existe
  },
  {
    slug: 'panne-electrique-totale-que-faire',
    title: 'Panne Électrique Totale : Que Faire en Attendant l\'Électricien ?',
    metaDescription: 'Plus d\'électricité dans toute la maison ? Découvrez les gestes à faire en urgence et quand appeler un électricien à Dudelange.',
    excerpt: 'Une panne électrique totale peut survenir à tout moment. Voici les bons réflexes à avoir et quand faire appel à un professionnel.',
    category: 'Dépannage Urgence',
    readTime: 6,
    publishedAt: '2024-12-14',
    image: '/generated-images/blog-panne-totale.png',
    keywords: [
      'panne électrique totale',
      'plus d\'électricité maison',
      'coupure électricité',
      'dépannage électrique urgence',
      'électricien urgence Bouches-du-Rhône',
    ],
    content: {
      sections: [],
    },
  },
  {
    slug: 'court-circuit-electrique-dangers-intervention',
    title: 'Court-Circuit Électrique : Dangers et Intervention d\'Urgence',
    metaDescription: 'Odeur de brûlé, étincelles, disjoncteur qui saute ? Reconnaissez les signes d\'un court-circuit et réagissez rapidement. Électricien 24/7.',
    excerpt: 'Un court-circuit est une situation dangereuse qui nécessite une intervention rapide. Apprenez à le reconnaître et à réagir correctement.',
    category: 'Sécurité Électrique',
    readTime: 7,
    publishedAt: '2024-12-13',
    image: '/generated-images/blog-court-circuit.png',
    keywords: [
      'court-circuit maison',
      'court-circuit électrique',
      'odeur de brûlé électricité',
      'étincelles prises électriques',
      'danger électrique maison',
    ],
    content: {
      sections: [],
    },
  },
  {
    slug: 'tableau-electrique-bruit-que-faire',
    title: 'Tableau Électrique qui Fait du Bruit : Faut-il S\'inquiéter ?',
    metaDescription: 'Grésillement, bourdonnement ou claquement dans votre tableau électrique ? Découvrez ce que ces bruits signifient et quand agir.',
    excerpt: 'Un tableau électrique qui fait du bruit n\'est jamais normal. Découvrez les différents types de bruits et leur signification.',
    category: 'Sécurité Électrique',
    readTime: 6,
    publishedAt: '2024-12-12',
    image: '/generated-images/blog-tableau-bruit.png',
    keywords: [
      'tableau électrique bruit',
      'grésillement électrique',
      'bourdonnement tableau électrique',
      'bruit disjoncteur',
      'tableau électrique qui grésille',
    ],
    content: {
      sections: [],
    },
  },
  {
    slug: 'prise-electrique-qui-chauffe-danger',
    title: 'Prise Électrique qui Chauffe : Danger et Solutions Rapides',
    metaDescription: 'Une prise électrique chaude est un danger d\'incendie. Découvrez pourquoi votre prise chauffe et comment résoudre ce problème rapidement.',
    excerpt: 'Une prise qui chauffe est un signal d\'alarme à ne jamais ignorer. Voici pourquoi c\'est dangereux et comment réagir.',
    category: 'Sécurité Électrique',
    readTime: 7,
    publishedAt: '2024-12-11',
    image: '/generated-images/blog-prise-chauffe.png',
    keywords: [
      'prise qui chauffe',
      'prise électrique chaude',
      'prise électrique danger',
      'multiprise qui chauffe',
      'surchauffe prise électrique',
    ],
    content: {
      sections: [],
    },
  },
];

/**
 * Récupérer un article par son slug
 */
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

/**
 * Récupérer tous les articles d'une catégorie
 */
export function getBlogPostsByCategory(category: string): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.category === category);
}

/**
 * Récupérer les articles les plus récents
 */
export function getRecentBlogPosts(limit: number = 3): BlogPost[] {
  return [...BLOG_POSTS]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}
