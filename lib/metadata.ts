import { Metadata } from 'next';
import { COMPANY_INFO } from './constants';

const baseUrl = 'https://elec-dudelange.lu';

export const PAGE_METADATA = {
  home: {
    title: `Électricien Dudelange | Dépannage 24/7 | Intervention < 2h`,
    description: `Électricien professionnel à Dudelange. Dépannage électrique d'urgence 24/7, installation complète, mise aux normes. Intervention rapide en moins de 2h. Devis gratuit. ${COMPANY_INFO.yearFounded} ans d'expérience.`,
    keywords: [
      'électricien Dudelange',
      'dépannage électrique Dudelange',
      'électricien urgence L-3401',
      'installation électrique Bouches-du-Rhône',
      'mise aux normes électrique',
      'borne recharge Dudelange',
    ],
    openGraph: {
      title: `Électricien Dudelange | Dépannage 24/7`,
      description: 'Intervention rapide en moins de 2h. Dépannage, installation, mise aux normes. Devis gratuit.',
      url: baseUrl,
      siteName: COMPANY_INFO.name,
      locale: 'fr_FR',
      type: 'website',
    },
  } as Metadata,

  services: {
    title: `Nos Services Électriques | ${COMPANY_INFO.name}`,
    description: 'Découvrez tous nos services : dépannage 24/7, installation électrique, mise aux normes, borne de recharge, domotique, éclairage LED. Électriciens qualifiés à Dudelange.',
    openGraph: {
      title: 'Nos Services Électriques | Dudelange',
      description: 'Dépannage, installation, mise aux normes, borne de recharge, domotique, éclairage LED.',
      url: `${baseUrl}/nos-services`,
    },
  } as Metadata,

  contact: {
    title: `Contact & Devis Gratuit | ${COMPANY_INFO.name}`,
    description: `Contactez votre électricien à Dudelange. Devis gratuit sous 48h. Urgence 24/7 disponible. Tél: ${COMPANY_INFO.phone}. Réponse garantie en moins de 2h.`,
    openGraph: {
      title: 'Contact & Devis Gratuit | Électricien Dudelange',
      description: 'Devis gratuit sous 48h. Urgence 24/7. Réponse garantie en 2h.',
      url: `${baseUrl}/contact`,
    },
  } as Metadata,

  realisations: {
    title: `Nos Réalisations | Projets Électriques à Dudelange`,
    description: 'Découvrez nos réalisations électriques : installations complètes, rénovations, mises aux normes, bornes de recharge. Photos avant/après de nos projets à Dudelange et environs.',
    openGraph: {
      title: 'Nos Réalisations | Électricien Dudelange',
      description: 'Photos avant/après de nos projets électriques réalisés.',
      url: `${baseUrl}/realisations`,
    },
  } as Metadata,

  devisGratuit: {
    title: `Devis Gratuit en 48h | ${COMPANY_INFO.name}`,
    description: 'Obtenez votre devis électrique gratuit et sans engagement en moins de 48h. Formulaire rapide en 3 minutes. Électricien professionnel à Dudelange.',
    openGraph: {
      title: 'Devis Gratuit en 48h | Électricien Dudelange',
      description: 'Devis gratuit et sans engagement. Réponse en 48h maximum.',
      url: `${baseUrl}/devis-gratuit`,
    },
  } as Metadata,
};

export function generateServiceMetadata(
  title: string,
  description: string,
  slug: string
): Metadata {
  return {
    title: `${title} | ${COMPANY_INFO.name}`,
    description: `${description} Expert électricien à Dudelange. Devis gratuit. Intervention rapide.`,
    openGraph: {
      title: `${title} | Dudelange`,
      description: description,
      url: `${baseUrl}/${slug}`,
      type: 'website',
    },
    alternates: {
      canonical: `${baseUrl}/${slug}`,
    },
  };
}
