'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Star, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { COMPANY_INFO } from '@/lib/constants';
import { getImageUrl } from '@/lib/images';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={getImageUrl('hero-background')}
          alt="Électricien professionnel Pétange"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Animated Blob Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-accent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-8"
          >
            <Clock className="h-5 w-5 text-accent" />
            <span className="text-white font-semibold">
              Astreinte 24/7 • Arrivée sous 2h
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-extrabold text-white mb-6 leading-none"
          >
            Électricien à<br />
            <span className="text-accent">Pétange</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            Réparations urgentes, installations neuves et conformité réglementaire.
            Plus de {new Date().getFullYear() - COMPANY_INFO.yearFounded} années d&apos;expertise
            au service des habitants et entreprises de la région.
          </motion.p>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-10"
          >
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-accent fill-accent" />
                ))}
              </div>
              <span className="text-white font-semibold">5.0/5 sur Google</span>
            </div>
            <div className="h-6 w-px bg-white/30" />
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-accent" />
              <span className="text-white font-semibold">Garantie Décennale</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/devis-gratuit">
              <Button
                variant="accent"
                size="xl"
                className="w-full sm:w-auto"
              >
                Recevoir mon Estimation Gratuite
              </Button>
            </Link>
            <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}>
              <Button
                variant="outline"
                size="xl"
                className="w-full sm:w-auto bg-white/10 backdrop-blur-md border-white text-white hover:bg-white hover:text-primary"
                icon={Phone}
              >
                {COMPANY_INFO.phone}
              </Button>
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 text-white/70 text-sm"
          >
            ✓ Chiffrage gratuit en 48h • ✓ Réactivité assurée • ✓ Prix clairs et honnêtes
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
