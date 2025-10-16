import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, MapPin, Calendar } from 'lucide-react';
import { PAGE_METADATA } from '@/lib/metadata';
import { Button } from '@/components/ui/Button';
import { getImageUrl } from '@/lib/images';

export const metadata = PAGE_METADATA.realisations;

// Projets de réalisation
const PROJECTS = [
  {
    id: 1,
    title: 'Installation Électrique Complète - Maison Neuve',
    category: 'Installation Neuve',
    location: 'Dudelange',
    date: 'Décembre 2024',
    image: getImageUrl('realisation-installation-neuve'),
    description: 'Installation électrique complète pour une maison de 150m². Tableau électrique, câblage, prises, interrupteurs, éclairage LED.',
    achievements: [
      'Conformité NF C 15-100',
      'Attestation Consuel délivrée',
      'Installation domotique intégrée',
      'Éclairage LED économique',
    ],
  },
  {
    id: 2,
    title: 'Mise aux Normes - Appartement Ancien',
    category: 'Mise aux Normes',
    location: 'Thionville',
    date: 'Novembre 2024',
    image: getImageUrl('realisation-mise-aux-normes'),
    description: 'Rénovation complète de l\'installation électrique d\'un appartement de 80m². Remplacement tableau obsolète, mise à la terre.',
    achievements: [
      'Sécurisation totale de l\'installation',
      'Remplacement tableau électrique',
      'Installation disjoncteurs différentiels',
      'Mise à la terre complète',
    ],
  },
  {
    id: 3,
    title: 'Borne de Recharge Voiture Électrique',
    category: 'Borne de Recharge',
    location: 'Yutz',
    date: 'Octobre 2024',
    image: getImageUrl('realisation-borne-recharge'),
    description: 'Installation d\'une wallbox 7.4kW pour recharge de véhicule électrique. Certification IRVE, éligible aux aides de l\'État.',
    achievements: [
      'Wallbox 7.4kW Schneider',
      'Certification IRVE',
      'Pilotage par smartphone',
      'Aides de l\'État obtenues',
    ],
  },
  {
    id: 4,
    title: 'Domotique et Éclairage Intelligent',
    category: 'Domotique',
    location: 'Cattenom',
    date: 'Septembre 2024',
    image: getImageUrl('realisation-domotique'),
    description: 'Installation système domotique complet pour maison de 200m². Contrôle éclairage, volets, chauffage via smartphone.',
    achievements: [
      'Compatible Alexa & Google Home',
      'Scénarios automatisés',
      'Économie d\'énergie 25%',
      'Contrôle à distance',
    ],
  },
  {
    id: 5,
    title: 'Dépannage Urgence - Panne Électrique Totale',
    category: 'Dépannage d\'Urgence',
    location: 'Dudelange',
    date: 'Décembre 2024',
    image: getImageUrl('realisation-depannage-urgence'),
    description: 'Intervention d\'urgence dimanche soir pour panne électrique totale. Diagnostic et réparation en moins de 2 heures.',
    achievements: [
      'Intervention en 1h30',
      'Court-circuit identifié',
      'Réparation immédiate',
      'Installation sécurisée',
    ],
  },
  {
    id: 6,
    title: 'Éclairage LED Design - Restaurant',
    category: 'Éclairage LED',
    location: 'Entrange',
    date: 'Août 2024',
    image: getImageUrl('realisation-eclairage-led'),
    description: 'Installation éclairage LED design pour restaurant 120m². Spots encastrés, rubans LED, éclairage d\'ambiance modulable.',
    achievements: [
      'Éclairage modulable 3 ambiances',
      'Réduction consommation 70%',
      'Design moderne haut de gamme',
      'Durée de vie 25 ans',
    ],
  },
];

const CATEGORIES = [
  'Tous les Projets',
  'Installation Neuve',
  'Mise aux Normes',
  'Borne de Recharge',
  'Domotique',
  'Dépannage d\'Urgence',
  'Éclairage LED',
];

export default function RealisationsPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            Nos Réalisations
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Découvrez nos projets électriques réalisés à Dudelange et dans toute la
            Bouches-du-Rhône. Travail soigné et conforme aux normes.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-extrabold text-primary mb-2">500+</div>
              <div className="text-gray-600 font-medium">Projets Réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-primary mb-2">100%</div>
              <div className="text-gray-600 font-medium">Conformité NF C 15-100</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-primary mb-2">5/5</div>
              <div className="text-gray-600 font-medium">Satisfaction Client</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-primary mb-2">10 ans</div>
              <div className="text-gray-600 font-medium">Garantie Décennale</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  category === 'Tous les Projets'
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-primary/10 hover:text-primary shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <article
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} - Électricien Dudelange`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-accent text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{project.date}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
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
            Votre Projet Électrique Nous Attend
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Rejoignez nos centaines de clients satisfaits. Obtenez votre devis gratuit
            sous 48h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis-gratuit">
              <Button variant="accent" size="xl">Obtenir mon Devis Gratuit</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="xl">Nous Contacter</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
