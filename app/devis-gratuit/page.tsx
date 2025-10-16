import React from 'react';
import { CheckCircle } from 'lucide-react';
import { MultiStepForm } from '@/components/forms/MultiStepForm';
import { PAGE_METADATA } from '@/lib/metadata';

export const metadata = PAGE_METADATA.devisGratuit;

export default function DevisGratuitPage() {
  return (
    <div className="pt-24 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
            Devis Gratuit en 48h
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Remplissez le formulaire ci-dessous et recevez votre devis détaillé sous 48 heures maximum
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            <div className="flex items-center justify-center space-x-2 bg-white rounded-lg p-4 shadow-md">
              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
              <span className="text-sm font-semibold text-gray-900">100% Gratuit</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white rounded-lg p-4 shadow-md">
              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
              <span className="text-sm font-semibold text-gray-900">Sans Engagement</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white rounded-lg p-4 shadow-md">
              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
              <span className="text-sm font-semibold text-gray-900">Réponse en 48h</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="max-w-4xl mx-auto">
          <MultiStepForm />
        </div>

        {/* Additional Info */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <p className="text-gray-600">
            Besoin d&apos;une intervention urgente ? Appelez-nous directement au{' '}
            <a href="tel:+33382XXXXXX" className="text-primary font-bold hover:text-accent">
              +33 3 82 XX XX XX
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
