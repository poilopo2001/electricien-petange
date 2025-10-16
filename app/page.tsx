'use client';

import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { StatsBar } from '@/components/sections/StatsBar';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { Testimonials } from '@/components/sections/Testimonials';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Accordion } from '@/components/ui/Accordion';
import { FAQ_ITEMS } from '@/lib/constants';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Stats Bar */}
      <StatsBar />

      {/* Services Grid */}
      <ServicesGrid />

      {/* Process Timeline */}
      <ProcessTimeline />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Questions Fréquentes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tout ce que vous devez savoir sur nos services électriques
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Accordion items={FAQ_ITEMS} />
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </>
  );
}
