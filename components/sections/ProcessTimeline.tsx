'use client';

import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { PROCESS_STEPS } from '@/lib/constants';

export const ProcessTimeline = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Comment Nous Intervenons
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un processus transparent et efficace pour votre sérénité
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {PROCESS_STEPS.map((step, index) => {
            const IconComponent = Icons[step.icon as keyof typeof Icons] as React.ElementType;
            const isLast = index === PROCESS_STEPS.length - 1;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative flex gap-6 pb-12"
              >
                {/* Vertical Line */}
                {!isLast && (
                  <div className="absolute left-[31px] top-16 bottom-0 w-0.5 bg-gradient-primary" />
                )}

                {/* Number Badge */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg">
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-white border-2 border-primary rounded-full flex items-center justify-center text-xs font-bold text-primary">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
