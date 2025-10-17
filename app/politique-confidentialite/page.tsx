import React from 'react';
import Link from 'next/link';
import { Shield, Eye, Lock, UserCheck, Database, FileText } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

export const metadata = {
  title: 'Politique de Confidentialité | Électricien Pétange',
  description: 'Politique de confidentialité et protection des données personnelles du site Électricien Pétange.',
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="pt-24 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="h-10 w-10 text-primary" />
              <h1 className="text-4xl font-extrabold text-gray-900">
                Politique de Confidentialité
              </h1>
            </div>
            <p className="text-lg text-gray-600">
              Dernière mise à jour : Janvier 2025
            </p>
          </div>

          <div className="prose max-w-none">
            {/* Introduction */}
            <section className="mb-8">
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed">
                  <strong>{COMPANY_INFO.name}</strong> accorde une grande importance à la
                  protection de vos données personnelles. Cette politique de confidentialité
                  vous informe de la manière dont nous collectons, utilisons, stockons et
                  protégeons vos données conformément au Règlement Général sur la Protection
                  des Données (RGPD).
                </p>
              </div>
            </section>

            {/* Responsable du traitement */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <UserCheck className="h-6 w-6 text-primary mr-2" />
                Responsable du Traitement des Données
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Raison sociale :</strong> {COMPANY_INFO.legalName || '[NOM_ENTREPRISE]'}
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Adresse :</strong> {COMPANY_INFO.address.street}, {COMPANY_INFO.address.postalCode} {COMPANY_INFO.address.city}
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Email :</strong> {COMPANY_INFO.email}
                </p>
                <p className="text-gray-700">
                  <strong>Téléphone :</strong> {COMPANY_INFO.phone}
                </p>
              </div>
            </section>

            {/* Données collectées */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Database className="h-6 w-6 text-primary mr-2" />
                Données Personnelles Collectées
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nous collectons les données personnelles suivantes lorsque vous utilisez notre
                site ou nos services :
              </p>

              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Via les formulaires de contact et devis :
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Nom et prénom</li>
                    <li>Adresse email</li>
                    <li>Numéro de téléphone</li>
                    <li>Code postal</li>
                    <li>Type de projet électrique</li>
                    <li>Message ou description du projet</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Données de navigation automatiquement collectées :
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Adresse IP</li>
                    <li>Type de navigateur</li>
                    <li>Pages visitées et temps passé</li>
                    <li>Données de géolocalisation approximative</li>
                    <li>Système d&apos;exploitation</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Finalités */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Eye className="h-6 w-6 text-primary mr-2" />
                Finalités de la Collecte
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vos données personnelles sont collectées et traitées pour les finalités suivantes :
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary font-bold text-sm">1</span>
                  </div>
                  <div>
                    <strong className="text-gray-900">Traitement de vos demandes :</strong>
                    <span className="text-gray-700"> Répondre à vos demandes de contact, devis ou informations</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary font-bold text-sm">2</span>
                  </div>
                  <div>
                    <strong className="text-gray-900">Gestion de la relation client :</strong>
                    <span className="text-gray-700"> Suivi de vos projets et interventions</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary font-bold text-sm">3</span>
                  </div>
                  <div>
                    <strong className="text-gray-900">Amélioration de nos services :</strong>
                    <span className="text-gray-700"> Analyse de l&apos;utilisation du site pour améliorer l&apos;expérience utilisateur</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary font-bold text-sm">4</span>
                  </div>
                  <div>
                    <strong className="text-gray-900">Obligations légales :</strong>
                    <span className="text-gray-700"> Respect des obligations comptables, fiscales et réglementaires</span>
                  </div>
                </li>
              </ul>
            </section>

            {/* Base légale */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="h-6 w-6 text-primary mr-2" />
                Base Légale du Traitement
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le traitement de vos données repose sur :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Votre consentement</strong> : lors de la soumission de formulaires</li>
                <li><strong>L&apos;exécution d&apos;un contrat</strong> : pour la réalisation de prestations électriques</li>
                <li><strong>Nos intérêts légitimes</strong> : amélioration de nos services et sécurité du site</li>
                <li><strong>Obligations légales</strong> : conservation des documents comptables et fiscaux</li>
              </ul>
            </section>

            {/* Durée de conservation */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Durée de Conservation des Données
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Type de données</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Durée</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-700">Demandes de devis non converties</td>
                      <td className="px-6 py-4 text-sm text-gray-700">3 ans</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-700">Données clients (contrats signés)</td>
                      <td className="px-6 py-4 text-sm text-gray-700">10 ans (garantie décennale)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-700">Données de navigation (cookies)</td>
                      <td className="px-6 py-4 text-sm text-gray-700">13 mois</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-700">Documents comptables</td>
                      <td className="px-6 py-4 text-sm text-gray-700">10 ans (obligation légale)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Partage des données */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Partage de Vos Données Personnelles
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vos données personnelles ne sont <strong>jamais vendues</strong> à des tiers. Elles peuvent être partagées uniquement avec :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Prestataires techniques</strong> : hébergement du site (Vercel), analytics (si applicable)</li>
                <li><strong>Sous-traitants</strong> : uniquement si nécessaire pour l&apos;exécution de prestations</li>
                <li><strong>Autorités légales</strong> : sur demande judiciaire ou administrative</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Tous nos partenaires sont contractuellement tenus de respecter la confidentialité
                et la sécurité de vos données conformément au RGPD.
              </p>
            </section>

            {/* Sécurité */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Lock className="h-6 w-6 text-primary mr-2" />
                Sécurité de Vos Données
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées
                pour protéger vos données contre :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>L&apos;accès non autorisé</li>
                <li>La perte, l&apos;altération ou la divulgation</li>
                <li>Les attaques malveillantes</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Nos mesures incluent : connexion HTTPS sécurisée, hébergement sécurisé,
                sauvegardes régulières, accès restreint aux données.
              </p>
            </section>

            {/* Vos droits */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Vos Droits (RGPD)
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                  <h3 className="font-bold text-gray-900 mb-2">✓ Droit d&apos;accès</h3>
                  <p className="text-sm text-gray-700">Obtenir une copie de vos données personnelles</p>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                  <h3 className="font-bold text-gray-900 mb-2">✓ Droit de rectification</h3>
                  <p className="text-sm text-gray-700">Corriger vos données inexactes ou incomplètes</p>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                  <h3 className="font-bold text-gray-900 mb-2">✓ Droit à l&apos;effacement</h3>
                  <p className="text-sm text-gray-700">Supprimer vos données (droit à l&apos;oubli)</p>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                  <h3 className="font-bold text-gray-900 mb-2">✓ Droit d&apos;opposition</h3>
                  <p className="text-sm text-gray-700">Vous opposer au traitement de vos données</p>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                  <h3 className="font-bold text-gray-900 mb-2">✓ Droit à la portabilité</h3>
                  <p className="text-sm text-gray-700">Récupérer vos données dans un format lisible</p>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                  <h3 className="font-bold text-gray-900 mb-2">✓ Droit de limitation</h3>
                  <p className="text-sm text-gray-700">Limiter le traitement de vos données</p>
                </div>
              </div>

              <div className="mt-6 bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-3">Comment exercer vos droits ?</h3>
                <p className="text-gray-700 mb-3">
                  Pour exercer l&apos;un de ces droits, contactez-nous :
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>📧 <strong>Email :</strong> {COMPANY_INFO.email}</li>
                  <li>📞 <strong>Téléphone :</strong> {COMPANY_INFO.phone}</li>
                  <li>✉️ <strong>Courrier :</strong> {COMPANY_INFO.address.street}, {COMPANY_INFO.address.postalCode} {COMPANY_INFO.address.city}</li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  Nous nous engageons à répondre dans un délai maximum d&apos;1 mois. Une pièce
                  d&apos;identité pourra être demandée pour vérifier votre identité.
                </p>
              </div>
            </section>

            {/* Cookies */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Cookies et Technologies Similaires
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Notre site utilise des cookies pour améliorer votre expérience de navigation et
                analyser l&apos;utilisation du site.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Types de cookies utilisés :</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Cookies essentiels</strong> : nécessaires au fonctionnement du site</li>
                  <li>• <strong>Cookies analytiques</strong> : statistiques de visite (anonymisées)</li>
                  <li>• <strong>Cookies de performance</strong> : optimisation de l&apos;expérience utilisateur</li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  Vous pouvez à tout moment désactiver les cookies dans les paramètres de votre
                  navigateur. Notez que cela peut affecter certaines fonctionnalités du site.
                </p>
              </div>
            </section>

            {/* Réclamation */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Droit de Réclamation
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Si vous estimez que vos droits ne sont pas respectés, vous avez le droit
                d&apos;introduire une réclamation auprès de la CNIL (Commission Nationale de
                l&apos;Informatique et des Libertés) :
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>CNIL</strong></p>
                <p className="text-gray-700 mb-2">3 Place de Fontenoy - TSA 80715</p>
                <p className="text-gray-700 mb-2">75334 PARIS CEDEX 07</p>
                <p className="text-gray-700 mb-2">Téléphone : 01 53 73 22 22</p>
                <p className="text-gray-700">
                  Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr</a>
                </p>
              </div>
            </section>

            {/* Modifications */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Modifications de la Politique
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Nous nous réservons le droit de modifier cette politique de confidentialité à
                tout moment. Toute modification sera publiée sur cette page avec une mise à jour
                de la date. Nous vous encourageons à consulter régulièrement cette page pour
                rester informé de nos pratiques en matière de protection des données.
              </p>
            </section>

            {/* Contact */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Nous Contacter
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pour toute question concernant cette politique de confidentialité ou le
                traitement de vos données personnelles :
              </p>
              <div className="bg-primary/5 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  📧 <strong>Email :</strong> {COMPANY_INFO.email}
                </p>
                <p className="text-gray-700 mb-2">
                  📞 <strong>Téléphone :</strong> {COMPANY_INFO.phone}
                </p>
                <p className="text-gray-700">
                  ✉️ <strong>Adresse :</strong> {COMPANY_INFO.address.street}, {COMPANY_INFO.address.postalCode} {COMPANY_INFO.address.city}
                </p>
              </div>
            </section>

            {/* Footer */}
            <div className="mt-12 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-2">
                Dernière mise à jour : Janvier 2025
              </p>
              <p className="text-sm text-gray-600">
                Consultez également nos{' '}
                <Link href="/mentions-legales" className="text-primary hover:underline font-semibold">
                  Mentions Légales
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
