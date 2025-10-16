import React from 'react';
import Link from 'next/link';
import { AlertTriangle, Volume2, CheckCircle2 } from 'lucide-react';

export const TableauElectriqueBruitContent = () => {
  return (
    <>
      <h2>Un Tableau Électrique Silencieux est un Tableau Sain</h2>

      <p>
        Votre tableau électrique ne devrait émettre AUCUN bruit dans des conditions normales de fonctionnement.
        Tout grésillement, bourdonnement, cliquetis ou sifflement indique un problème potentiellement dangereux
        qui nécessite une attention immédiate.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8 rounded-r-lg">
        <div className="flex items-start space-x-3">
          <Volume2 className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-bold text-yellow-900 mb-2">⚠️ Attention</h3>
            <p className="text-yellow-800 mb-0">
              Un tableau électrique qui fait du bruit peut indiquer un risque d&apos;incendie imminent.
              Ne l&apos;ignorez jamais et faites intervenir un électricien rapidement.
            </p>
          </div>
        </div>
      </div>

      <h2>Les Différents Types de Bruits et Leur Signification</h2>

      <h3>1. Grésillement ou Crépitement (⚠️ URGENT)</h3>
      <div className="bg-red-50 p-6 rounded-lg my-4">
        <p><strong className="text-red-900">Son :</strong> <em>&quot;Gzzz gzzz gzzz&quot;</em> continu ou intermittent</p>
        <p><strong className="text-red-900">Cause probable :</strong></p>
        <ul className="text-red-900">
          <li>
            <Link href="/blog/court-circuit-electrique-dangers-intervention" className="text-red-900 underline font-semibold">
              Arc électrique
            </Link> dans le tableau
          </li>
          <li>Connexion desserrée qui chauffe</li>
          <li>Contact défaillant dans un disjoncteur</li>
        </ul>
        <p><strong className="text-red-900">Danger :</strong> TRÈS ÉLEVÉ - Risque d&apos;incendie imminent</p>
        <p><strong className="text-red-900">Action :</strong> Coupez le disjoncteur général et appelez un électricien en urgence</p>
      </div>

      <h3>2. Bourdonnement Sourd (⚠️ IMPORTANT)</h3>
      <div className="bg-orange-50 p-6 rounded-lg my-4">
        <p><strong className="text-orange-900">Son :</strong> <em>&quot;Hmmmm&quot;</em> grave et continu (comme un transformateur)</p>
        <p><strong className="text-orange-900">Cause probable :</strong></p>
        <ul className="text-orange-900">
          <li>Surcharge électrique sur un ou plusieurs circuits</li>
          <li>Disjoncteur sous-dimensionné</li>
          <li>Contacteur jour/nuit usé</li>
          <li>Bobine de télérupteur défectueuse</li>
        </ul>
        <p><strong className="text-orange-900">Danger :</strong> MOYEN - Usure prématurée et risque de panne</p>
        <p><strong className="text-orange-900">Action :</strong> Faites diagnostiquer sous 48h</p>
      </div>

      <h3>3. Cliquetis ou Tic-Tac (ℹ️ À SURVEILLER)</h3>
      <div className="bg-blue-50 p-6 rounded-lg my-4">
        <p><strong className="text-blue-900">Son :</strong> <em>&quot;Clic clic&quot;</em> régulier</p>
        <p><strong className="text-blue-900">Cause probable :</strong></p>
        <ul className="text-blue-900">
          <li>Contacteur chauffe-eau qui commute (normal)</li>
          <li>Télérupteur qui s&apos;active (normal si vous appuyez sur interrupteur)</li>
          <li>Relais de domotique en fonctionnement</li>
        </ul>
        <p><strong className="text-blue-900">Danger :</strong> FAIBLE à NUL si lié à un équipement actif</p>
        <p><strong className="text-blue-900">Action :</strong> Normal si occasionnel. Anormal si continu → vérification nécessaire</p>
      </div>

      <h3>4. Sifflement Aigu (⚠️ IMPORTANT)</h3>
      <div className="bg-orange-50 p-6 rounded-lg my-4">
        <p><strong className="text-orange-900">Son :</strong> <em>&quot;Sssssiiii&quot;</em> aigu</p>
        <p><strong className="text-orange-900">Cause probable :</strong></p>
        <ul className="text-orange-900">
          <li>Variation de fréquence du courant</li>
          <li>Disjoncteur électronique défectueux</li>
          <li>Transformateur en surcharge</li>
        </ul>
        <p><strong className="text-orange-900">Danger :</strong> MOYEN</p>
        <p><strong className="text-orange-900">Action :</strong> Diagnostic professionnel recommandé</p>
      </div>

      <h3>5. Claquement Sec (🚨 URGENCE)</h3>
      <div className="bg-red-50 p-6 rounded-lg my-4">
        <p><strong className="text-red-900">Son :</strong> <em>&quot;CLAC !&quot;</em> fort et soudain</p>
        <p><strong className="text-red-900">Cause probable :</strong></p>
        <ul className="text-red-900">
          <li>Court-circuit en cours</li>
          <li>Arc électrique violent</li>
          <li>Disjoncteur qui déclenche sous forte charge</li>
        </ul>
        <p><strong className="text-red-900">Danger :</strong> TRÈS ÉLEVÉ</p>
        <p><strong className="text-red-900">Action :</strong> Intervention IMMÉDIATE - Ne réarmez pas</p>
      </div>

      <h2>Les Causes Principales des Bruits dans le Tableau</h2>

      <h3>1. Connexions Desserrées (40% des cas)</h3>
      <p>
        Avec le temps et les variations de température, les connexions peuvent se desserrer.
        Le contact imparfait crée une résistance qui génère de la chaleur et des arcs électriques.
      </p>
      <p><strong>Pourquoi c&apos;est dangereux :</strong></p>
      <ul>
        <li>Température pouvant atteindre 300-400°C</li>
        <li>Inflammation possible des matériaux isolants</li>
        <li>Fusion des bornes et court-circuit</li>
      </ul>

      <h3>2. Surcharge Électrique</h3>
      <p>
        Trop d&apos;appareils sur un circuit font vibrer les composants du tableau (effet magnétique).
        Le bourdonnement indique que le disjoncteur travaille à sa limite. Cela peut mener à une{' '}
        <Link href="/blog/panne-electrique-totale-que-faire">panne électrique totale</Link>.
      </p>

      <h3>3. Équipement Vétuste ou Défectueux</h3>
      <p>
        Les disjoncteurs, contacteurs et télérupteurs ont une durée de vie limitée (15-20 ans).
        L&apos;usure mécanique crée des jeux et des vibrations bruyantes.
      </p>

      <h3>4. Mauvaise Qualité du Courant</h3>
      <p>
        Des harmoniques ou variations de tension (liées au réseau ou équipements perturbateurs)
        peuvent faire vibrer les composants magnétiques.
      </p>

      <h2>Diagnostic : Identifier la Source du Bruit</h2>

      <div className="bg-gray-50 p-6 rounded-xl my-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">🔍 Méthode de Localisation</h3>
        <ol className="space-y-4">
          <li>
            <strong>Ouvrez la porte du tableau</strong> (n&apos;ouvrez JAMAIS le capot de protection interne)
          </li>
          <li>
            <strong>Écoutez attentivement</strong> - Le bruit vient-il d&apos;un disjoncteur spécifique ?
          </li>
          <li>
            <strong>Notez le contexte</strong> :
            <ul className="mt-2 space-y-1">
              <li>- Le bruit est-il permanent ou intermittent ?</li>
              <li>- Se produit-il quand vous allumez certains appareils ?</li>
              <li>- Augmente-t-il en soirée (heures de pointe) ?</li>
            </ul>
          </li>
          <li>
            <strong>Vérifiez la chaleur</strong> (SANS toucher) - Sentez-vous de la chaleur excessive ?
          </li>
          <li>
            <strong>Photographiez le tableau</strong> - Utile pour l&apos;électricien</li>
        </ol>
      </div>

      <h2>Que Faire en Cas de Bruit Anormal ?</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
          <h3 className="font-bold text-green-900 mb-3 flex items-center space-x-2">
            <CheckCircle2 className="h-5 w-5" />
            <span>✅ À FAIRE</span>
          </h3>
          <ul className="space-y-2 text-green-900 text-sm">
            <li>✓ Noter l&apos;heure et la fréquence du bruit</li>
            <li>✓ Identifier les appareils en fonctionnement</li>
            <li>✓ Prendre des photos du tableau</li>
            <li>✓ Contacter un électricien certifié</li>
            <li>✓ Réduire la charge électrique en attendant</li>
            <li>✓ Surveiller l&apos;évolution du bruit</li>
          </ul>
        </div>

        <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200">
          <h3 className="font-bold text-red-900 mb-3 flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5" />
            <span>❌ À NE PAS FAIRE</span>
          </h3>
          <ul className="space-y-2 text-red-900 text-sm">
            <li>✗ Ouvrir le capot de protection du tableau</li>
            <li>✗ Toucher les composants internes</li>
            <li>✗ Resserrer soi-même les connexions</li>
            <li>✗ Ignorer le problème en espérant qu&apos;il parte</li>
            <li>✗ Ajouter une charge supplémentaire</li>
            <li>✗ Masquer le bruit (ruban adhésif, etc.)</li>
          </ul>
        </div>
      </div>

      <h2>Prévention : Éviter les Bruits de Tableau</h2>

      <h3>Entretien Préventif Recommandé</h3>
      <ul>
        <li><strong>Vérification annuelle</strong> par un électricien certifié</li>
        <li><strong>Resserrage des connexions</strong> tous les 5 ans minimum</li>
        <li><strong>Remplacement préventif</strong> des composants de plus de 20 ans</li>
        <li><strong>Thermographie infrarouge</strong> pour détecter les points chauds</li>
      </ul>

      <h3>Mise aux Normes NF C 15-100</h3>
      <p>
        Un tableau aux normes réduit drastiquement les risques de bruits anormaux grâce à :
      </p>
      <ul>
        <li>Disjoncteurs de qualité avec connexions vissées</li>
        <li>Dimensionnement correct des circuits</li>
        <li>Borniers de répartition professionnels</li>
        <li>Sections de câbles adaptées (moins de chauffe)</li>
      </ul>

      <p>
        <Link href="/mise-aux-normes-tableau-electrique" className="text-primary hover:text-accent font-semibold">
          → Faites mettre votre tableau aux normes
        </Link>
      </p>

      <h2>Intervention Professionnelle à Dudelange</h2>

      <div className="bg-gradient-accent text-white p-8 rounded-2xl my-8">
        <h3 className="text-2xl font-bold mb-4">🔧 Diagnostic et Réparation</h3>
        <p className="mb-6">
          Nos{' '}
          <Link href="/depannage-electrique-urgence" className="text-white underline font-bold">
            électriciens d&apos;urgence
          </Link>{' '}
          diagnostiquent et réparent tous les problèmes de tableaux électriques :
        </p>
        <ul className="space-y-3">
          <li className="flex items-center space-x-3">
            <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
            <span>Diagnostic thermographique infrarouge</span>
          </li>
          <li className="flex items-center space-x-3">
            <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
            <span>Resserrage et sécurisation des connexions</span>
          </li>
          <li className="flex items-center space-x-3">
            <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
            <span>Remplacement des composants défectueux</span>
          </li>
          <li className="flex items-center space-x-3">
            <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
            <span>Mise aux normes complète si nécessaire</span>
          </li>
          <li className="flex items-center space-x-3">
            <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
            <span>Intervention 24/7 en cas d&apos;urgence</span>
          </li>
        </ul>
      </div>

      <h2>FAQ - Questions Fréquentes</h2>

      <div className="space-y-6 my-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-2">Mon tableau fait un léger bourdonnement la nuit, est-ce normal ?</h3>
          <p className="text-gray-700 mb-0">
            Si le bruit coïncide avec le démarrage de votre chauffe-eau (heures creuses), c&apos;est le contacteur
            jour/nuit qui commute. C&apos;est normal. Si le bourdonnement est permanent, faites vérifier.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-2">Combien coûte la réparation d&apos;un tableau qui fait du bruit ?</h3>
          <p className="text-gray-700 mb-0">
            Simple resserrage : 80-150€. Remplacement d&apos;un disjoncteur : 100-250€. Rénovation complète du tableau :
            800-2000€ selon taille. Un diagnostic précis est nécessaire.
            <Link href="/devis-gratuit" className="text-primary hover:text-accent font-semibold ml-1">Demandez un devis</Link>.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-2">Le bruit peut-il disparaître de lui-même ?</h3>
          <p className="text-gray-700 mb-0">
            NON. Un bruit anormal ne disparaît jamais spontanément. Au contraire, il a tendance à s&apos;aggraver.
            Plus vous attendez, plus les dégâts et les coûts de réparation augmentent.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-2">Mon tableau a plus de 20 ans et commence à faire du bruit, que faire ?</h3>
          <p className="text-gray-700 mb-0">
            C&apos;est le signe que votre tableau arrive en fin de vie. Nous recommandons un remplacement complet
            pour bénéficier des dernières normes de sécurité et éviter une panne grave.
          </p>
        </div>
      </div>

      <p className="text-lg font-semibold mt-8 text-center bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
        🔊 Un tableau électrique bruyant n&apos;est JAMAIS normal. Plus vous intervenez tôt,
        plus la réparation sera simple et économique !
      </p>
    </>
  );
};
