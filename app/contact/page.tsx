import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { MultiStepForm } from '@/components/forms/MultiStepForm';
import { COMPANY_INFO } from '@/lib/constants';
import { PAGE_METADATA } from '@/lib/metadata';

export const metadata = PAGE_METADATA.contact;

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
            Contactez-Nous
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Obtenez votre devis gratuit en moins de 48h ou appelez-nous pour une urgence 24/7
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <MultiStepForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Phone */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">Téléphone</h3>
                  <a
                    href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
                    className="text-primary hover:text-accent font-semibold transition-colors text-lg"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                  <p className="text-sm text-gray-600 mt-1">
                    Urgence 24/7 disponible
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-primary hover:text-accent transition-colors break-all"
                  >
                    {COMPANY_INFO.email}
                  </a>
                  <p className="text-sm text-gray-600 mt-1">
                    Réponse sous 24h
                  </p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">Adresse</h3>
                  <p className="text-gray-700">
                    {COMPANY_INFO.address.street}
                    <br />
                    {COMPANY_INFO.address.postalCode} {COMPANY_INFO.address.city}
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">Horaires</h3>
                  <div className="space-y-1 text-sm text-gray-700">
                    <p>Lun-Ven: {COMPANY_INFO.openingHours.weekday}</p>
                    <p>Samedi: {COMPANY_INFO.openingHours.saturday}</p>
                    <p>Dimanche: {COMPANY_INFO.openingHours.sunday}</p>
                    {COMPANY_INFO.emergency24 && (
                      <p className="text-accent font-semibold mt-2">
                        ⚡ Urgences 24/7
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-4">Zone d&apos;Intervention</h3>
              <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                <p className="text-gray-500">
                  Pétange et 30km alentours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
