'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { COMPANY_INFO } from '@/lib/constants';
import { getImageUrl } from '@/lib/images';

export const FinalCTA = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={getImageUrl('final-cta-background')}
          alt="Contactez votre électricien"
          fill
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-accent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Lancez Votre Projet Électrique Maintenant
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 mb-12 leading-relaxed">
            Recevez votre chiffrage sans frais sous 48 heures ou appelez-nous
            pour toute urgence, service actif 24/7
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <Link href="/devis-gratuit">
              <Button
                variant="primary"
                size="xl"
                icon={Zap}
                className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100 shadow-2xl"
              >
                Demander mon Estimation Gratuite
              </Button>
            </Link>

            <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}>
              <Button
                variant="outline"
                size="xl"
                icon={Phone}
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-accent shadow-xl"
              >
                Nous Joindre Immédiatement
              </Button>
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white">
              <div>
                <div className="text-3xl font-bold mb-1">&lt; 2h</div>
                <div className="text-white/80 text-sm">Délai d&apos;Arrivée Urgence</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">48h</div>
                <div className="text-white/80 text-sm">Chiffrage Sans Frais</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-white/80 text-sm">Clients Satisfaits</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
