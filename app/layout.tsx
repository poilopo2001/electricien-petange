import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { generateLocalBusinessSchema } from '@/lib/schema';
import { COMPANY_INFO } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://elec-dudelange.lu'),
  title: {
    default: 'Électricien Pétange | Dépannage 24/7 | Intervention < 2h',
    template: '%s | Électricien Pétange',
  },
  description:
    'Électricien professionnel à Pétange. Dépannage électrique d\'urgence 24/7, installation complète, mise aux normes. Intervention rapide en moins de 2h. Devis gratuit.',
  keywords: [
    'électricien Pétange',
    'dépannage électrique Pétange',
    'électricien urgence L-3401',
    'installation électrique Bouches-du-Rhône',
    'mise aux normes électrique',
    'borne recharge Pétange',
  ],
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://elec-dudelange.lu',
    siteName: COMPANY_INFO.name,
    title: 'Électricien Pétange | Dépannage 24/7',
    description: 'Intervention rapide en moins de 2h. Dépannage, installation, mise aux normes. Devis gratuit.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Électricien Pétange',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Électricien Pétange | Dépannage 24/7',
    description: 'Intervention rapide en moins de 2h. Dépannage, installation, mise aux normes.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://elec-dudelange.lu',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = generateLocalBusinessSchema();

  return (
    <html lang="fr">
      <head>
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
