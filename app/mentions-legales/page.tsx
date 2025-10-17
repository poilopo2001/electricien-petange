import React from 'react';
import Link from 'next/link';
import { Building, Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

export const metadata = {
  title: 'Mentions Légales | Électricien Pétange',
  description: 'Mentions légales du site Électricien Pétange. Informations légales et conditions d\'utilisation.',
};

export default function MentionsLegalesPage() {
  return (
    <div className="pt-24 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Header */}
          <h1 className="text-4xl font-extrabold text-gray-900 mb-8">
            Mentions Légales
          </h1>

          <div className="prose max-w-none">
            {/* Éditeur du site */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Building className="h-6 w-6 text-primary mr-2" />
                Éditeur du Site
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg space-y-3">
                <p>
                  <strong>Raison sociale :</strong> {COMPANY_INFO.legalName || '[NOM_ENTREPRISE]'}
                </p>
                <p>
                  <strong>Forme juridique :</strong> [SARL / EURL / Auto-entrepreneur]
                </p>
                <p>
                  <strong>SIRET :</strong> {COMPANY_INFO.siret || '[SIRET]'}
                </p>
                <p>
                  <strong>Numéro de TVA intracommunautaire :</strong> [TVA]
                </p>
                <p className="flex items-start space-x-2">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Adresse :</strong><br />
                    {COMPANY_INFO.address.street}<br />
                    {COMPANY_INFO.address.postalCode} {COMPANY_INFO.address.city}<br />
                    {COMPANY_INFO.address.country}
                  </span>
                </p>
                <p className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>
                    <strong>Téléphone :</strong> {COMPANY_INFO.phone}
                  </span>
                </p>
                <p className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>
                    <strong>Email :</strong> {COMPANY_INFO.email}
                  </span>
                </p>
                <p>
                  <strong>Responsable de publication :</strong> [NOM_RESPONSABLE]
                </p>
              </div>
            </section>

            {/* Hébergement */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Hébergement du Site
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>Hébergeur :</strong> Vercel Inc.</p>
                <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
                <p><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://vercel.com</a></p>
              </div>
            </section>

            {/* Propriété intellectuelle */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Propriété Intellectuelle
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                L&apos;ensemble de ce site relève de la législation française et internationale sur
                le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de
                reproduction sont réservés, y compris pour les documents téléchargeables et les
                représentations iconographiques et photographiques.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                La reproduction de tout ou partie de ce site sur un support électronique quel
                qu&apos;il soit est formellement interdite sauf autorisation expresse du directeur de
                la publication.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Les marques et logos figurant sur le site sont déposés par {COMPANY_INFO.name} ou
                éventuellement par un de ses partenaires. Toute reproduction totale ou partielle
                de ces marques ou logos, effectuée à partir des éléments du site sans
                l&apos;autorisation expresse de {COMPANY_INFO.name} est prohibée.
              </p>
            </section>

            {/* Protection des données */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Protection des Données Personnelles
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Conformément à la loi n° 78-17 du 6 janvier 1978 relative à l&apos;informatique, aux
                fichiers et aux libertés, modifiée par la loi n° 2004-801 du 6 août 2004, et au
                Règlement Général sur la Protection des Données (RGPD) du 27 avril 2016, vous
                disposez d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition
                aux données personnelles vous concernant.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pour exercer ce droit, vous pouvez nous contacter :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Par email : {COMPANY_INFO.email}</li>
                <li>Par courrier : {COMPANY_INFO.address.street}, {COMPANY_INFO.address.postalCode} {COMPANY_INFO.address.city}</li>
                <li>Par téléphone : {COMPANY_INFO.phone}</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Pour en savoir plus sur la gestion de vos données personnelles, consultez notre{' '}
                <Link href="/politique-confidentialite" className="text-primary hover:underline font-semibold">
                  Politique de Confidentialité
                </Link>.
              </p>
            </section>

            {/* Cookies */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le site peut être amené à vous demander l&apos;acceptation des cookies pour des
                besoins de statistiques et d&apos;affichage. Un cookie est une information déposée
                sur votre disque dur par le serveur du site que vous visitez.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Il contient plusieurs données qui sont stockées sur votre ordinateur dans un
                simple fichier texte auquel un serveur accède pour lire et enregistrer des
                informations. Certaines parties de ce site ne peuvent être fonctionnelles sans
                l&apos;acceptation de cookies.
              </p>
            </section>

            {/* Responsabilité */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Limitation de Responsabilité
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Les informations contenues sur ce site sont aussi précises que possible et le site
                est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes,
                des omissions ou des lacunes.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Si vous constatez une lacune, erreur ou ce qui paraît être un dysfonctionnement,
                merci de bien vouloir le signaler par email à {COMPANY_INFO.email}, en décrivant
                le problème de la manière la plus précise possible.
              </p>
              <p className="text-gray-700 leading-relaxed">
                {COMPANY_INFO.name} décline toute responsabilité :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                <li>En cas de dommages directs ou indirects causés au matériel de l&apos;utilisateur lors de l&apos;accès au site</li>
                <li>En cas d&apos;utilisation anormale ou d&apos;une exploitation illicite du site</li>
                <li>Pour tout dysfonctionnement du réseau Internet empêchant le bon déroulement de la connexion</li>
              </ul>
            </section>

            {/* Liens hypertextes */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Liens Hypertextes
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le site peut contenir des liens hypertextes vers d&apos;autres sites présents sur le
                réseau Internet. Les liens vers ces autres ressources vous font quitter le site.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Il est possible de créer un lien vers la page de présentation de ce site sans
                autorisation expresse de {COMPANY_INFO.name}. Aucune autorisation ou demande
                d&apos;information préalable ne peut être exigée par l&apos;éditeur à l&apos;égard d&apos;un site
                qui souhaite établir un lien vers le site de l&apos;éditeur. Il convient toutefois
                d&apos;afficher ce site dans une nouvelle fenêtre du navigateur.
              </p>
            </section>

            {/* Droit applicable */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Droit Applicable et Juridiction
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Tout litige en relation avec l&apos;utilisation du site{' '}
                <strong>elec-dudelange.lu</strong> est soumis au droit français. L&apos;utilisateur
                ainsi que {COMPANY_INFO.name} acceptent de se soumettre à la compétence exclusive
                des tribunaux français en cas de litige.
              </p>
            </section>

            {/* Credits */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Crédits
              </h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>Conception et réalisation :</strong> Site développé avec Next.js et Tailwind CSS
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                <strong>Photos :</strong> Unsplash (Photos libres de droits)
              </p>
            </section>

            {/* Date de mise à jour */}
            <div className="mt-12 pt-6 border-t border-gray-200 text-sm text-gray-500">
              <p>Dernière mise à jour : Janvier 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
