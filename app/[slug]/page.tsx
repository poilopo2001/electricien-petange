import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle2, Phone, ChevronRight } from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import { generateServiceMetadata } from '@/lib/metadata';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';
import { Button } from '@/components/ui/Button';
import { Accordion } from '@/components/ui/Accordion';
import { getImageUrl } from '@/lib/images';

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) return {};
  return generateServiceMetadata(service.title, service.description, service.slug);
}

// Fonction pour mapper le slug au hero image ID
function getServiceHeroImageId(slug: string): string {
  const heroImageMap: { [key: string]: string } = {
    'depannage-electrique-urgence': 'service-page-depannage-hero',
    'installation-electrique-neuf-renovation': 'service-page-installation-hero',
    'mise-aux-normes-tableau-electrique': 'service-page-mise-aux-normes-hero',
    'installation-borne-recharge-voiture-electrique': 'service-page-borne-recharge-hero',
    'domotique-maison-connectee': 'service-page-domotique-hero',
    'installation-eclairage-led': 'service-page-eclairage-led-hero',
  };
  return heroImageMap[slug] || 'hero-background';
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Accueil', url: 'https://elec-dudelange.lu' },
    { name: 'Services', url: 'https://elec-dudelange.lu/nos-services' },
    { name: service.title, url: `https://elec-dudelange.lu/${service.slug}` },
  ]);

  const serviceSchema = generateServiceSchema(
    service.title,
    service.description,
    service.priceRange
  );

  // FAQ spécifique au service
  const serviceFAQ = [
    {
      question: `Combien coûte ${service.title.toLowerCase()} ?`,
      answer: service.priceRange
        ? `Le tarif pour ${service.title.toLowerCase()} est généralement ${service.priceRange}. Le prix final dépend de plusieurs facteurs comme la complexité du projet, les matériaux utilisés et la surface concernée. Nous vous fournissons toujours un devis détaillé et transparent.`
        : `Le prix varie selon la complexité de votre projet. Contactez-nous pour un devis gratuit et personnalisé.`,
    },
    {
      question: `Quel est le délai pour ${service.title.toLowerCase()} ?`,
      answer: `Le délai d'intervention dépend de l'urgence de votre demande. Pour les urgences, nous intervenons en moins de 2 heures. Pour les projets planifiés, nous convenons ensemble d'une date qui vous convient.`,
    },
    {
      question: `Quelles garanties offrez-vous ?`,
      answer: `Tous nos travaux sont couverts par notre garantie décennale. De plus, le matériel installé bénéficie de la garantie constructeur (2 à 5 ans selon les équipements). Vous bénéficiez également de notre service après-vente réactif.`,
    },
    {
      question: `Faut-il être présent pendant l'intervention ?`,
      answer: `Oui, nous recommandons votre présence au début et à la fin de l'intervention pour discuter de vos besoins et valider le travail effectué. Cependant, des arrangements sont possibles selon votre disponibilité.`,
    },
  ];

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="pt-24 pb-20">
        {/* Breadcrumbs */}
        <div className="bg-gray-50 py-4">
          <div className="container mx-auto px-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-primary">
                Accueil
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/nos-services" className="hover:text-primary">
                Services
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gray-900 font-semibold">{service.title}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-primary text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image
              src={getImageUrl(getServiceHeroImageId(service.slug))}
              alt={service.title}
              fill
              className="object-cover"
              quality={90}
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
                {service.title}
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/devis-gratuit">
                  <Button variant="accent" size="lg">Devis Gratuit</Button>
                </Link>
                <a href="tel:+33382XXXXXX">
                  <Button
                    variant="outline"
                    size="lg"
                    icon={Phone}
                    className="bg-white/10 backdrop-blur-md border-white text-white hover:bg-white hover:text-primary"
                  >
                    Appeler Maintenant
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Benefits */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Avantages de Notre Service
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg"
                    >
                      <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Detailed Description */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Description Détaillée
                </h2>
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Notre équipe d&apos;électriciens qualifiés intervient à Pétange et dans
                    un rayon de 30km. Nous utilisons du matériel professionnel de haute qualité
                    et respectons strictement les normes en vigueur.
                  </p>
                </div>
              </section>

              {/* Pricing */}
              {service.priceRange && (
                <section className="bg-gray-50 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Prix et Estimation
                  </h2>
                  <div className="flex items-baseline space-x-4 mb-4">
                    <span className="text-4xl font-bold text-primary">
                      {service.priceRange}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Le prix final dépend de plusieurs facteurs : complexité du projet,
                    matériaux choisis, surface concernée. Contactez-nous pour un devis
                    personnalisé et gratuit.
                  </p>
                  <Link href="/devis-gratuit">
                    <Button variant="accent" size="lg">Obtenir mon Devis Gratuit</Button>
                  </Link>
                </section>
              )}

              {/* FAQ */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Questions Fréquentes
                </h2>
                <Accordion items={serviceFAQ} />
              </section>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <div className="bg-gradient-primary text-white p-8 rounded-2xl sticky top-24">
                <h3 className="text-2xl font-bold mb-4">Besoin d&apos;Aide ?</h3>
                <p className="text-white/90 mb-6">
                  Contactez-nous pour un devis gratuit ou une intervention d&apos;urgence
                </p>
                <div className="space-y-4">
                  <Link href="/devis-gratuit">
                    <Button
                      variant="accent"
                      size="lg"
                      className="w-full"
                    >
                      Devis Gratuit
                    </Button>
                  </Link>
                  <a
                    href="tel:+33382XXXXXX"
                    className="flex items-center justify-center space-x-2 w-full py-3 bg-white/20 hover:bg-white/30 rounded-lg font-semibold transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    <span>+33 3 82 XX XX XX</span>
                  </a>
                </div>
                <div className="mt-6 pt-6 border-t border-white/20 space-y-2 text-sm text-white/80">
                  <p>✓ Réponse en 48h maximum</p>
                  <p>✓ Intervention rapide</p>
                  <p>✓ Devis transparent</p>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="font-bold text-gray-900 mb-4">Nos Certifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">RGE</div>
                    <div className="text-xs text-gray-600">Certifié</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">10 ans</div>
                    <div className="text-xs text-gray-600">Garantie</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                    <div className="text-xs text-gray-600">Urgence</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">100%</div>
                    <div className="text-xs text-gray-600">Satisfait</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Prêt à Démarrer Votre Projet ?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Obtenez votre devis gratuit en moins de 48h
            </p>
            <Link href="/devis-gratuit">
              <Button variant="accent" size="xl">Obtenir mon Devis Gratuit</Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
