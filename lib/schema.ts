import { COMPANY_INFO } from './constants';

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    name: COMPANY_INFO.name,
    description: 'Électricien professionnel à Pétange. Dépannage 24/7, installation, mise aux normes.',
    image: 'https://electricien-petange.lu/logo.png',
    '@id': 'https://electricien-petange.lu',
    url: 'https://electricien-petange.lu',
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.address.street,
      addressLocality: COMPANY_INFO.address.city,
      postalCode: COMPANY_INFO.address.postalCode,
      addressRegion: COMPANY_INFO.address.region,
      addressCountry: COMPANY_INFO.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: COMPANY_INFO.coordinates.lat,
      longitude: COMPANY_INFO.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '17:00',
      },
    ],
    priceRange: '$$',
    areaServed: {
      '@type': 'City',
      name: 'Pétange',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '87',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services Électriques',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Dépannage Électrique d\'Urgence 24/7',
            description: 'Intervention rapide en moins de 2h',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Installation Électrique Complète',
            description: 'Installation conforme NF C 15-100',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mise aux Normes',
            description: 'Mise en conformité installation électrique',
          },
        },
      ],
    },
  };
}

export function generateServiceSchema(
  serviceName: string,
  description: string,
  priceRange?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceName,
    provider: {
      '@type': 'Electrician',
      name: COMPANY_INFO.name,
      telephone: COMPANY_INFO.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: COMPANY_INFO.address.city,
        postalCode: COMPANY_INFO.address.postalCode,
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Pétange',
    },
    description: description,
    ...(priceRange && {
      offers: {
        '@type': 'Offer',
        price: priceRange,
        priceCurrency: 'EUR',
      },
    }),
  };
}

export function generateFAQSchema(faqItems: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
