'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Zap } from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import { Button } from '@/components/ui/Button';

export const ServicesGrid = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Notre Gamme de Prestations Électriques
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Du dépannage express aux installations complètes, nous prenons en charge
            l&apos;intégralité de vos besoins en électricité
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-3xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.title} - Électricien Pétange`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {service.priceRange && (
                  <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg">
                    {service.priceRange}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Benefits */}
                <ul className="space-y-2 mb-6">
                  {service.benefits.slice(0, 3).map((benefit, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="flex gap-3">
                  <Link href={`/${service.slug}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      icon={ArrowRight}
                      iconPosition="right"
                    >
                      Détails
                    </Button>
                  </Link>
                  <Link href="/devis-gratuit">
                    <Button
                      variant="accent"
                      size="sm"
                      className="flex-1"
                      icon={Zap}
                    >
                      Chiffrage
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/nos-services">
            <Button variant="primary" size="lg">
              Découvrir Toutes Nos Prestations
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
