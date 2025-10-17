import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import { PAGE_METADATA } from '@/lib/metadata';
import { Button } from '@/components/ui/Button';

export const metadata = PAGE_METADATA.services;

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            Nos Services Électriques
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            De l&apos;urgence au projet d&apos;installation complet, nous intervenons pour tous vos
            besoins électriques à Pétange et environs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => (
              <article
                key={service.slug}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={`${service.title} - Électricien Pétange`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {service.priceRange && (
                    <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                      {service.priceRange}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Benefits */}
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link href={`/${service.slug}`}>
                    <Button
                      variant="primary"
                      size="md"
                      icon={ArrowRight}
                      iconPosition="right"
                      className="w-full"
                    >
                      En Savoir Plus
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Vous Ne Trouvez Pas Votre Service ?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet spécifique
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis-gratuit">
              <Button variant="accent" size="lg">Devis Gratuit</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">Nous Contacter</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
