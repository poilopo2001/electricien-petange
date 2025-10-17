import React from 'react';
import Link from 'next/link';
import { Zap, Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '@/lib/constants';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white/20 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg">Électricien</span>
                <span className="text-sm text-white/80">Pétange</span>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-4">
              Professionnel de l&apos;électricité à Pétange. Service d&apos;urgence 24/7, installations complètes,
              conformité normative. Plus de {currentYear - COMPANY_INFO.yearFounded} années d&apos;expertise
              pour les particuliers et entreprises du sud Luxembourg.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Nos Services</h3>
            <ul className="space-y-2">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/${service.slug}`}
                    className="text-white/80 hover:text-white transition-colors block"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-white/80 hover:text-white transition-colors block"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/nos-services"
                  className="text-white/80 hover:text-white transition-colors block"
                >
                  Nos Services
                </Link>
              </li>
              <li>
                <Link
                  href="/realisations"
                  className="text-white/80 hover:text-white transition-colors block"
                >
                  Réalisations
                </Link>
              </li>
              <li>
                <Link
                  href="/devis-gratuit"
                  className="text-white/80 hover:text-white transition-colors block"
                >
                  Devis Gratuit
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-white transition-colors block"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-white/80 hover:text-white transition-colors block"
                >
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-confidentialite"
                  className="text-white/80 hover:text-white transition-colors block"
                >
                  Politique de Confidentialité
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">
                  {COMPANY_INFO.address.street}<br />
                  {COMPANY_INFO.address.postalCode} {COMPANY_INFO.address.city}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
                  className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors"
                >
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors"
                >
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div className="text-white/80">
                  <p>Lun-Ven: {COMPANY_INFO.openingHours.weekday}</p>
                  <p>Sam: {COMPANY_INFO.openingHours.saturday}</p>
                  <p>Dim: {COMPANY_INFO.openingHours.sunday}</p>
                  {COMPANY_INFO.emergency24 && (
                    <p className="text-accent font-semibold mt-1">Astreinte 24/7</p>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {currentYear} {COMPANY_INFO.name}. Tous droits réservés.
              {COMPANY_INFO.siret && (
                <span className="ml-2">SIRET: {COMPANY_INFO.siret}</span>
              )}
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-white/60">
              <span>✓ Technicien Certifié</span>
              <span>✓ Protection Décennale</span>
              <span>✓ RC Professionnelle</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
