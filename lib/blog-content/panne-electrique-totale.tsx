import React from 'react';
import Link from 'next/link';
import { AlertTriangle, Phone, CheckCircle2, Lightbulb } from 'lucide-react';

export const PanneElectriqueTotaleContent = () => {
  return (
    <>
      <h2>Panne Électrique Totale : Comprendre la Situation</h2>

      <p>
        Une panne électrique totale dans votre maison est une situation stressante qui peut survenir
        à tout moment. Avant de paniquer, il est essentiel de comprendre si le problème vient de votre
        installation ou du réseau Enedis. Voici comment diagnostiquer et réagir efficacement.
      </p>

      <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-bold text-red-900 mb-2">⚠️ Sécurité Avant Tout</h3>
            <p className="text-red-800 mb-0">
              En cas de panne électrique totale, ne touchez jamais à votre tableau électrique si vous sentez
              une odeur de brûlé, voyez de la fumée ou des traces noires. Appelez immédiatement les pompiers
              (18) et un électricien.
            </p>
          </div>
        </div>
      </div>

      <h2>Première Étape : Identifier la Source du Problème</h2>

      <h3>1. Vérifier si C&apos;est une Panne Générale</h3>

      <p><strong>Comment savoir ?</strong></p>
      <ul>
        <li>Regardez par la fenêtre : les maisons voisines ont-elles de la lumière ?</li>
        <li>Les lampadaires de la rue sont-ils allumés ?</li>
        <li>Sortez dans la rue : l&apos;éclairage public fonctionne-t-il ?</li>
      </ul>

      <p><strong>Si c&apos;est une panne générale :</strong></p>
      <ul>
        <li>Appelez Enedis au <strong>09 72 67 50 57</strong> (numéro non surtaxé)</li>
        <li>Consultez le site Enedis pour voir les pannes signalées dans votre secteur</li>
        <li>Patientez - Enedis intervient généralement dans les 4 heures</li>
        <li>Ne touchez à rien dans votre tableau électrique</li>
      </ul>

      <h3>2. Si C&apos;est une Panne Uniquement Chez Vous</h3>

      <p>Si vos voisins ont de l&apos;électricité mais pas vous, le problème vient de votre installation.</p>

      <h2>Diagnostic Étape par Étape</h2>

      <div className="bg-gray-50 p-6 rounded-xl my-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">✅ Procédure de Vérification</h3>
        <ol className="space-y-4">
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</span>
            <div>
              <strong>Localisez votre tableau électrique</strong>
              <p className="text-gray-600 mt-1">Généralement dans l&apos;entrée, garage ou cuisine. Munissez-vous d&apos;une lampe torche.</p>
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</span>
            <div>
              <strong>Vérifiez le disjoncteur général</strong>
              <p className="text-gray-600 mt-1">C&apos;est le plus gros interrupteur, souvent en haut du tableau. Est-il en position OFF (vers le bas) ?</p>
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</span>
            <div>
              <strong>Si le disjoncteur général est OFF</strong>
              <p className="text-gray-600 mt-1">Votre installation a disjoncté. Passez à l&apos;étape 4.</p>
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">4</span>
            <div>
              <strong>Si le disjoncteur général est ON</strong>
              <p className="text-gray-600 mt-1">Le problème peut venir du compteur Linky ou de l&apos;alimentation EDF. Appelez Enedis.</p>
            </div>
          </li>
        </ol>
      </div>

      <h2>Réarmer Votre Installation en Toute Sécurité</h2>

      <h3>Procédure de Réarmement</h3>

      <ol>
        <li>
          <strong>Débranchez tous les appareils électriques</strong>
          <p>Débranchez physiquement tous les appareils de toutes les pièces : ordinateurs, TV, électroménager, lampes, chargeurs...</p>
        </li>
        <li>
          <strong>Mettez tous les disjoncteurs divisionnaires en position OFF</strong>
          <p>Sur votre tableau, abaissez tous les petits disjoncteurs (ceux qui protègent chaque circuit).</p>
        </li>
        <li>
          <strong>Réarmez le disjoncteur général</strong>
          <p>Relevez le disjoncteur principal en position ON.</p>
        </li>
        <li>
          <strong>Réarmez les disjoncteurs divisionnaires un par un</strong>
          <p>Relevez chaque disjoncteur l&apos;un après l&apos;autre en attendant 30 secondes entre chacun.</p>
        </li>
        <li>
          <strong>Si un disjoncteur refuse de rester enclenché</strong>
          <p>
            C&apos;est sur ce circuit que se trouve le problème.{' '}
            <Link href="/blog/disjoncteur-qui-saute-causes-solutions">Consultez notre guide sur les disjoncteurs qui sautent</Link>,
            laissez-le en position OFF et appelez un électricien.
          </p>
        </li>
        <li>
          <strong>Rebranchez vos appareils progressivement</strong>
          <p>Une fois tous les disjoncteurs relevés, rebranchez vos appareils un par un sur plusieurs heures.</p>
        </li>
      </ol>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
        <div className="flex items-start space-x-3">
          <Lightbulb className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-bold text-blue-900 mb-2">💡 Astuce Pro</h3>
            <p className="text-blue-800 mb-0">
              Prenez une photo de votre tableau électrique quand tout fonctionne (disjoncteurs en position ON).
              En cas de panne, vous saurez rapidement quel disjoncteur a sauté en comparant avec la photo.
            </p>
          </div>
        </div>
      </div>

      <h2>Les Causes Courantes d&apos;une Panne Totale</h2>

      <h3>1. Surcharge Électrique Massive</h3>
      <p>
        Trop d&apos;appareils puissants fonctionnant simultanément (chauffage + four + lave-linge + sèche-linge).
        Le disjoncteur général protège l&apos;installation en coupant tout.
      </p>

      <h3>2. Court-Circuit Important</h3>
      <p>
        Un appareil défectueux ou un contact anormal entre fils peut créer un{' '}
        <Link href="/blog/court-circuit-electrique-dangers-intervention">court-circuit</Link> qui fait tout disjoncter.
        Signes : odeur de brûlé, fumée, traces noires.
      </p>

      <h3>3. Fuite de Courant (Défaut d&apos;Isolation)</h3>
      <p>
        Le disjoncteur différentiel détecte une fuite de courant et coupe tout pour votre sécurité.
        Souvent causé par l&apos;humidité, un câble endommagé ou un appareil vétuste.
      </p>

      <h3>4. Tableau Électrique Vétuste ou Défectueux</h3>
      <p>
        Les tableaux de plus de 15-20 ans peuvent avoir des composants usés qui causent des pannes.
        Si votre{' '}
        <Link href="/blog/tableau-electrique-bruit-que-faire">tableau fait des bruits anormaux</Link>, c&apos;est un signe d&apos;usure.
        Une{' '}
        <Link href="/mise-aux-normes-tableau-electrique">mise aux normes</Link> est alors nécessaire.
      </p>

      <h3>5. Problème sur le Réseau Enedis</h3>
      <p>
        Coupure de câble, transformateur défaillant, travaux sur le réseau. Dans ce cas, seul Enedis peut intervenir.
      </p>

      <h2>Que Faire en Attendant l&apos;Électricien ?</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-3 flex items-center space-x-2">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            <span>À FAIRE</span>
          </h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>✅ Prenez des photos du tableau électrique</li>
            <li>✅ Notez quelle pièce était concernée</li>
            <li>✅ Listez les appareils branchés avant la panne</li>
            <li>✅ Gardez une lampe torche à proximité</li>
            <li>✅ Protégez le contenu de votre réfrigérateur/congélateur</li>
            <li>✅ Débranchez les appareils sensibles (informatique, TV)</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-3 flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            <span>À NE PAS FAIRE</span>
          </h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>❌ Forcer le réarmement répété du disjoncteur</li>
            <li>❌ Ouvrir le tableau électrique (danger !)</li>
            <li>❌ Toucher les fils ou composants électriques</li>
            <li>❌ Utiliser de bougies sans surveillance (risque incendie)</li>
            <li>❌ Laisser le congélateur ouvert</li>
            <li>❌ Tenter des réparations soi-même</li>
          </ul>
        </div>
      </div>

      <h2>Quand Appeler un Électricien d&apos;Urgence ?</h2>

      <p className="font-semibold text-lg mb-4">Contactez immédiatement un électricien si :</p>

      <ul className="space-y-2">
        <li className="flex items-start space-x-2">
          <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
          <span>Le disjoncteur refuse de rester enclenché après plusieurs essais</span>
        </li>
        <li className="flex items-start space-x-2">
          <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
          <span>Vous sentez une odeur de brûlé ou voyez de la fumée</span>
        </li>
        <li className="flex items-start space-x-2">
          <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
          <span>Des traces noires sont visibles sur le tableau ou les prises</span>
        </li>
        <li className="flex items-start space-x-2">
          <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
          <span>Le tableau électrique fait des bruits (grésillement, claquement)</span>
        </li>
        <li className="flex items-start space-x-2">
          <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
          <span>La panne se reproduit régulièrement</span>
        </li>
        <li className="flex items-start space-x-2">
          <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
          <span>Votre installation a plus de 15 ans</span>
        </li>
        <li className="flex items-start space-x-2">
          <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
          <span>Vous avez des personnes fragiles ou du matériel médical électrique</span>
        </li>
      </ul>

      <h2>Prévenir les Pannes Électriques</h2>

      <h3>Entretien Préventif</h3>
      <ul>
        <li><strong>Inspection annuelle</strong> - Faites vérifier votre installation par un professionnel</li>
        <li><strong>Test des disjoncteurs</strong> - Testez le bouton TEST des différentiels tous les 6 mois</li>
        <li><strong>Nettoyage du tableau</strong> - Dépoussiérez régulièrement (électricité coupée)</li>
        <li><strong>Surveillance</strong> - Notez tout comportement anormal (lumières qui vacillent, prises chaudes)</li>
      </ul>

      <h3>Mise aux Normes NF C 15-100</h3>
      <p>
        Si votre installation a plus de 15 ans, une mise aux normes peut être nécessaire.
        Cela comprend :
      </p>
      <ul>
        <li>Remplacement du tableau électrique ancien</li>
        <li>Installation de disjoncteurs différentiels 30mA</li>
        <li>Mise à la terre complète</li>
        <li>Vérification et remplacement des câbles usés</li>
        <li>Protection contre les surtensions (parafoudre)</li>
      </ul>

      <h2>Notre Service d&apos;Intervention Urgente</h2>

      <p>
        <strong>Électricien disponible 24h/24 et 7j/7</strong> à Dudelange et dans un rayon de 30km.
        Notre service de{' '}
        <Link href="/depannage-electrique-urgence">dépannage électrique d&apos;urgence</Link>{' '}
        intervient rapidement pour toute panne :
      </p>

      <div className="bg-gradient-accent text-white p-8 rounded-2xl my-8">
        <h3 className="text-2xl font-bold mb-4">⚡ Intervention d&apos;Urgence</h3>
        <ul className="space-y-3">
          <li className="flex items-center space-x-3">
            <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
            <span><strong>Intervention en moins de 2 heures</strong> sur Dudelange</span>
          </li>
          <li className="flex items-center space-x-3">
            <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
            <span>Diagnostic gratuit de votre panne</span>
          </li>
          <li className="flex items-center space-x-3">
            <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
            <span>Devis transparent avant intervention</span>
          </li>
          <li className="flex items-center space-x-3">
            <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
            <span>Réparation immédiate si possible</span>
          </li>
          <li className="flex items-center space-x-3">
            <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
            <span>Garantie décennale sur tous nos travaux</span>
          </li>
        </ul>
      </div>

      <h2>FAQ - Questions Fréquentes</h2>

      <div className="space-y-6 my-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-2">Pourquoi mon électricité se coupe-t-elle quand il pleut ?</h3>
          <p className="text-gray-700 mb-0">
            L&apos;humidité peut causer des fuites de courant dans une installation vétuste ou mal isolée.
            Le disjoncteur différentiel détecte ces fuites et coupe pour votre sécurité. Une vérification
            de l&apos;isolation est nécessaire.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-2">Combien coûte une intervention pour panne électrique ?</h3>
          <p className="text-gray-700 mb-0">
            Le tarif dépend de l&apos;heure (jour/nuit/week-end) et de la complexité. Comptez entre 80€ et 150€
            pour le déplacement et diagnostic. La réparation est facturée en plus selon les travaux nécessaires.
            <Link href="/contact" className="text-primary hover:text-accent font-semibold ml-1">Contactez-nous</Link> pour un devis.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-2">Que faire si la panne se produit la nuit ou le week-end ?</h3>
          <p className="text-gray-700 mb-0">
            Nos électriciens interviennent 24/7. En cas d&apos;urgence nocturne, appelez-nous immédiatement.
            Si la situation n&apos;est pas dangereuse, vous pouvez attendre le lendemain pour éviter le surcoût
            de nuit.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-2">Mon assurance habitation couvre-t-elle les pannes électriques ?</h3>
          <p className="text-gray-700 mb-0">
            Généralement non, sauf si la panne est causée par un sinistre couvert (foudre, incendie, dégât des eaux).
            Vérifiez votre contrat. Certaines assurances proposent une garantie &quot;panne d&apos;équipement&quot; en option.
          </p>
        </div>
      </div>

      <p className="text-lg font-semibold mt-8">
        Une panne électrique n&apos;est jamais anodine. Pour votre sécurité et celle de votre famille,
        faites appel à un professionnel certifié dès les premiers signes de problème !
      </p>
    </>
  );
};
