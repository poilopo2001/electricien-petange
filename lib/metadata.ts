import { Metadata } from 'next';
import { COMPANY_INFO } from './constants';

const baseUrl = 'https://electricien-petange.lu';

export const PAGE_METADATA = {
  home: {
    title: `Électricien Pétange | Urgence 24/7 | Réponse < 2h`,
    description: `Votre électricien à Pétange et dans le sud du Luxembourg. Service d'urgence 24/7, installations neuves, rénovations et mises en conformité. Intervention garantie sous 2 heures. Devis gratuit personnalisé. Plus de ${new Date().getFullYear() - COMPANY_INFO.yearFounded} ans au service des particuliers et entreprises de la région du Minett.`,
    keywords: [
      'électricien Pétange',
      'dépannage électrique Luxembourg',
      'électricien urgence Rodange',
      'installation électrique Lamadelaine',
      'mise aux normes électrique sud Luxembourg',
      'borne recharge Minett',
    ],
    openGraph: {
      title: `Électricien Professionnel à Pétange | Service 24/7`,
      description: 'Dépannage urgent sous 2h, installations conformes, remise aux normes. Votre électricien de confiance dans le sud du Luxembourg.',
      url: baseUrl,
      siteName: COMPANY_INFO.name,
      locale: 'fr_FR',
      type: 'website',
    },
  } as Metadata,

  services: {
    title: `Services Électricité à Pétange | ${COMPANY_INFO.name}`,
    description: 'Gamme complète de prestations électriques : urgences 24/7, pose complète, conformité réglementaire, wallbox voiture électrique, automatisation domotique, solutions LED. Professionnels certifiés dans le sud du Luxembourg.',
    openGraph: {
      title: 'Prestations Électriques Complètes | Pétange & Région',
      description: 'Urgence, installation neuve, modernisation, recharge électrique, maison connectée, luminaires LED.',
      url: `${baseUrl}/nos-services`,
    },
  } as Metadata,

  contact: {
    title: `Nous Contacter | Devis Sans Engagement | ${COMPANY_INFO.name}`,
    description: `Joignez votre électricien à Pétange et alentours. Estimation gratuite transmise sous 48h. Astreinte d'urgence active 24/7. Téléphone: ${COMPANY_INFO.phone}. Engagement de réponse en moins de 2 heures.`,
    openGraph: {
      title: 'Contactez-nous | Chiffrage Gratuit | Électricien Pétange',
      description: 'Estimation sans frais sous 48h. Service d\'urgence 24/7. Retour assuré sous 2h.',
      url: `${baseUrl}/contact`,
    },
  } as Metadata,

  realisations: {
    title: `Portfolio de Projets | Travaux Électriques à Pétange`,
    description: 'Consultez nos réalisations concrètes dans le sud du Luxembourg : câblages complets, réhabilitations, conformité normative, infrastructures de recharge. Documentation photographique avant/après de nos chantiers à Pétange, Rodange et environs.',
    openGraph: {
      title: 'Portfolio Travaux Électriques | Pétange & Alentours',
      description: 'Exemples concrets de nos installations et rénovations avec photos avant/après.',
      url: `${baseUrl}/realisations`,
    },
  } as Metadata,

  devisGratuit: {
    title: `Estimation Gratuite Sous 48h | ${COMPANY_INFO.name}`,
    description: 'Recevez votre chiffrage électrique gratuit sans obligation sous 48 heures maximum. Formulaire en ligne simple, 3 minutes suffisent. Professionnel qualifié à Pétange et dans tout le sud du Luxembourg.',
    openGraph: {
      title: 'Chiffrage Gratuit Rapide | Électricien Pétange',
      description: 'Estimation sans frais ni engagement. Réponse garantie en 48 heures.',
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
    description: `${description} Spécialiste électricité dans le sud du Luxembourg. Chiffrage sans frais. Réactivité assurée.`,
    openGraph: {
      title: `${title} | Pétange & Région`,
      description: description,
      url: `${baseUrl}/${slug}`,
      type: 'website',
    },
    alternates: {
      canonical: `${baseUrl}/${slug}`,
    },
  };
}
