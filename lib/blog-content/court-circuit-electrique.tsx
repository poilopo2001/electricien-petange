import React from 'react';
import Link from 'next/link';
import { AlertTriangle, Flame, CheckCircle2 } from 'lucide-react';

export const CourtCircuitElectriqueContent = () => {
  return (
    <>
      <h2>Qu&apos;est-ce qu&apos;un Court-Circuit Électrique ?</h2>

      <p>
        Un court-circuit se produit lorsque le courant électrique emprunte un chemin anormal, créant
        un passage direct entre la phase et le neutre sans passer par un appareil. Cette anomalie
        provoque une surcharge instantanée qui peut être extrêmement dangereuse.
      </p>

      <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
        <div className="flex items-start space-x-3">
          <Flame className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-bold text-red-900 mb-2">🔥 DANGER IMMÉDIAT</h3>
            <p className="text-red-800 mb-2 font-semibold">
              Un court-circuit peut provoquer un incendie en quelques secondes !
            </p>
            <p className="text-red-800 mb-0">
              Si vous voyez des étincelles, sentez une odeur de brûlé ou constatez de la fumée,
              coupez immédiatement le disjoncteur général et appelez les pompiers (18) puis un électricien.
            </p>
          </div>
        </div>
      </div>

      <h2>Les Signes d&apos;un Court-Circuit</h2>

      <h3>Signes Immédiats (Urgence Absolue)</h3>
      <div className="bg-red-100 p-6 rounded-lg my-6">
        <ul className="space-y-2">
          <li className="flex items-start space-x-2">
            <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
            <span className="text-red-900"><strong>Étincelles ou flash lumineux</strong> au niveau des prises ou du tableau</span>
          </li>
          <li className="flex items-start space-x-2">
            <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
            <span className="text-red-900"><strong>Odeur de plastique brûlé</strong> forte et persistante</span>
          </li>
          <li className="flex items-start space-x-2">
            <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
            <span className="text-red-900"><strong>Fumée</strong> sortant d&apos;une prise ou du tableau</span>
          </li>
          <li className="flex items-start space-x-2">
            <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
            <span className="text-red-900"><strong>Bruit de détonation</strong> ou claquement fort</span>
          </li>
          <li className="flex items-start space-x-2">
            <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
            <span className="text-red-900"><strong>Traces noires ou brûlures</strong> sur prises ou interrupteurs</span>
          </li>
        </ul>
      </div>

      <h3>Signes Avant-Coureurs</h3>
      <ul>
        <li>
          <Link href="/blog/disjoncteur-qui-saute-causes-solutions">Disjoncteur qui saute</Link> fréquemment sans raison apparente
        </li>
        <li>Lumières qui vacillent ou clignotent</li>
        <li>
          <Link href="/blog/prise-electrique-chauffe">Prises ou interrupteurs chauds au toucher</Link>
        </li>
        <li>
          Léger <Link href="/blog/tableau-electrique-bruit-que-faire">grésillement dans les murs ou le tableau</Link>
        </li>
        <li>Appareils qui s&apos;éteignent spontanément</li>
      </ul>

      <h2>Les Causes Principales d&apos;un Court-Circuit</h2>

      <h3>1. Isolation des Câbles Endommagée (40% des cas)</h3>
      <p><strong>Causes :</strong></p>
      <ul>
        <li>Vieillissement naturel des câbles (plus de 20 ans)</li>
        <li>Rongeurs qui rongent les gaines isolantes</li>
        <li>Perçage accidentel d&apos;un câble (travaux)</li>
        <li>Humidité qui dégrade l&apos;isolation</li>
        <li>Surchauffe répétée des câbles</li>
      </ul>

      <h3>2. Appareil Électrique Défectueux (30% des cas)</h3>
      <p><strong>Appareils à risque :</strong></p>
      <ul>
        <li>Vieux électroménagers (+ de 10 ans)</li>
        <li>Rallonges et multiprises usées</li>
        <li>Chargeurs de téléphone bas de gamme</li>
        <li>Appareils de chauffage mobiles</li>
        <li>Outils électroportatifs endommagés</li>
      </ul>

      <h3>3. Mauvaise Installation Électrique (20% des cas)</h3>
      <ul>
        <li>Connexions mal serrées dans le tableau</li>
        <li>Fils dénudés en contact</li>
        <li>Bricolage électrique par non-professionnel</li>
        <li>Surcharge de prises (trop d&apos;appareils branchés)</li>
      </ul>

      <h3>4. Infiltration d&apos;Eau (10% des cas)</h3>
      <ul>
        <li>Fuite d&apos;eau sur installation électrique</li>
        <li>Inondation touchant des prises basses</li>
        <li>Humidité dans murs touchant les câbles</li>
        <li>Condensation dans tableau électrique</li>
      </ul>

      <h2>Que Faire en Cas de Court-Circuit ?</h2>

      <div className="bg-gray-50 p-6 rounded-xl my-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">🚨 Procédure d&apos;Urgence</h3>
        <ol className="space-y-4">
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
            <div>
              <strong className="text-red-900">COUPEZ L&apos;ÉLECTRICITÉ IMMÉDIATEMENT</strong>
              <p className="text-gray-700 mt-1">Baissez le disjoncteur général. Ne touchez à rien d&apos;autre !</p>
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
            <div>
              <strong className="text-red-900">SI FUMÉE OU FEU</strong>
              <p className="text-gray-700 mt-1">Appelez les pompiers (18) AVANT tout ! Évacuez la zone.</p>
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
            <div>
              <strong className="text-red-900">DÉBRANCHEZ L&apos;APPAREIL SUSPECT</strong>
              <p className="text-gray-700 mt-1">Si vous savez quel appareil a causé le problème, débranchez-le (une fois l&apos;électricité coupée).</p>
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
            <div>
              <strong className="text-red-900">APPELEZ UN ÉLECTRICIEN 24/7</strong>
              <p className="text-gray-700 mt-1">Ne tentez JAMAIS de réparer vous-même. Un professionnel doit diagnostiquer.</p>
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">5</span>
            <div>
              <strong className="text-red-900">NE RÉARMEZ PAS LE DISJONCTEUR</strong>
              <p className="text-gray-700 mt-1">Attendez l&apos;électricien. Réarmer peut aggraver les dégâts ou causer un incendie.</p>
            </div>
          </li>
        </ol>
      </div>

      <h2>Les Dangers d&apos;un Court-Circuit</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200">
          <h3 className="font-bold text-red-900 mb-3 text-lg">🔥 Risque d&apos;Incendie</h3>
          <p className="text-red-800 text-sm">
            Un court-circuit génère une chaleur intense (plusieurs centaines de degrés) qui peut
            enflammer les matériaux isolants en quelques secondes. <strong>25% des incendies domestiques</strong> sont d&apos;origine électrique.
          </p>
        </div>

        <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200">
          <h3 className="font-bold text-red-900 mb-3 text-lg">⚡ Risque d&apos;Électrocution</h3>
          <p className="text-red-800 text-sm">
            Les câbles endommagés peuvent mettre sous tension des parties métalliques normalement isolées.
            Toucher un appareil défectueux peut être mortel.
          </p>
        </div>

        <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200">
          <h3 className="font-bold text-red-900 mb-3 text-lg">💥 Explosion</h3>
          <p className="text-red-800 text-sm">
            Dans certains cas, l&apos;arc électrique peut provoquer une explosion, notamment si
            des gaz inflammables sont présents ou si le tableau électrique n&apos;est pas conforme.
          </p>
        </div>

        <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200">
          <h3 className="font-bold text-red-900 mb-3 text-lg">📱 Destruction d&apos;Appareils</h3>
          <p className="text-red-800 text-sm">
            La surtension causée par un court-circuit peut détruire instantanément vos appareils
            électroniques : ordinateurs, TV, électroménager coûteux.
          </p>
        </div>
      </div>

      <h2>Comment Prévenir les Courts-Circuits ?</h2>

      <h3>✅ Vérifications Régulières</h3>
      <ul>
        <li><strong>Inspection annuelle</strong> par un électricien certifié</li>
        <li><strong>Test des disjoncteurs différentiels</strong> (bouton TEST) tous les mois</li>
        <li><strong>Vérification visuelle</strong> des prises et interrupteurs chaque trimestre</li>
        <li><strong>Contrôle des appareils</strong> - Jetez tout matériel endommagé</li>
      </ul>

      <h3>✅ Bonnes Pratiques au Quotidien</h3>
      <ul>
        <li>Ne surchargez pas les multiprises (max 3500W)</li>
        <li>Débranchez les appareils inutilisés</li>
        <li>Remplacez immédiatement les rallonges abîmées</li>
        <li>N&apos;utilisez que des chargeurs certifiés CE</li>
        <li>Éloignez les câbles des sources de chaleur</li>
        <li>Protégez les prises accessibles aux enfants</li>
      </ul>

      <h3>✅ Mise aux Normes NF C 15-100</h3>
      <p>
        Une <Link href="/mise-aux-normes-tableau-electrique">installation conforme</Link> réduit drastiquement les risques. Les points essentiels :
      </p>
      <ul>
        <li><strong>Disjoncteurs différentiels 30mA</strong> - Détectent les fuites de courant</li>
        <li><strong>Mise à la terre obligatoire</strong> - Évacue les courants de défaut</li>
        <li><strong>Sections de câbles adaptées</strong> - Évite la surchauffe</li>
        <li><strong>Protection par disjoncteurs</strong> - Un par circuit</li>
        <li><strong>Parafoudre</strong> - Protège contre les surtensions</li>
      </ul>

      <p>
        <Link href="/mise-aux-normes-tableau-electrique" className="text-primary hover:text-accent font-semibold">
          → Découvrez notre service de mise aux normes électriques
        </Link>
      </p>

      <h2>Intervention d&apos;Urgence à Dudelange</h2>

      <div className="bg-gradient-accent text-white p-8 rounded-2xl my-8">
        <h3 className="text-2xl font-bold mb-4">⚡ Électricien d&apos;Urgence 24/7</h3>
        <p className="mb-6 text-lg">
          Court-circuit, odeur de brûlé, étincelles ?{' '}
          <Link href="/depannage-electrique-urgence" className="text-white underline font-bold">
            Notre service d&apos;urgence
          </Link>{' '}
          intervient 24/7. <strong>N&apos;attendez pas !</strong>
        </p>
        <ul className="space-y-3">
          <li className="flex items-center space-x-3">
            <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
            <span><strong>Intervention en moins de 2h</strong> sur Dudelange</span>
          </li>
          <li className="flex items-center space-x-3">
            <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
            <span>Diagnostic complet de votre installation</span>
          </li>
          <li className="flex items-center space-x-3">
            <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
            <span>Réparation sécurisée et conforme aux normes</span>
          </li>
          <li className="flex items-center space-x-3">
            <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
            <span>Garantie décennale</span>
          </li>
        </ul>
      </div>

      <h2>FAQ - Questions Fréquentes</h2>

      <div className="space-y-6 my-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-2">Un court-circuit peut-il se produire sans que je m&apos;en rende compte ?</h3>
          <p className="text-gray-700 mb-0">
            Non, un court-circuit provoque toujours un déclenchement immédiat du disjoncteur. Si votre installation
            est aux normes, le disjoncteur différentiel coupe en quelques millisecondes. C&apos;est pourquoi il est vital
            d&apos;avoir une installation conforme.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-2">Puis-je utiliser un extincteur sur un feu d&apos;origine électrique ?</h3>
          <p className="text-gray-700 mb-0">
            OUI, mais UNIQUEMENT un extincteur CO2 (classe E) ou poudre ABC. JAMAIS d&apos;eau ! Coupez d&apos;abord
            l&apos;électricité si possible. En cas de doute, évacuez et appelez les pompiers (18).
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-2">Mon assurance couvre-t-elle les dégâts causés par un court-circuit ?</h3>
          <p className="text-gray-700 mb-0">
            Généralement oui, si vous avez une assurance multirisques habitation. Elle couvre les dommages aux biens
            et parfois le remplacement des appareils. Conservez tous les justificatifs et faites constater les dégâts
            par un électricien certifié.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-2">Combien coûte la réparation après un court-circuit ?</h3>
          <p className="text-gray-700 mb-0">
            Cela dépend des dégâts : de 150€ (simple remplacement de prise) à plusieurs milliers d&apos;euros
            (refonte complète de l&apos;installation). Un diagnostic précis est nécessaire.
            <Link href="/devis-gratuit" className="text-primary hover:text-accent font-semibold ml-1">Demandez un devis gratuit</Link>.
          </p>
        </div>
      </div>

      <p className="text-lg font-semibold mt-8 text-center bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
        ⚠️ Un court-circuit est une urgence électrique. Ne prenez aucun risque :
        appelez immédiatement un électricien professionnel !
      </p>
    </>
  );
};
