import React from 'react';
import Link from 'next/link';
import { Flame, AlertTriangle, CheckCircle2 } from 'lucide-react';

export const PriseElectriqueChauffeeContent = () => {
  return (
    <>
      <h2>Une Prise Qui Chauffe = Danger d&apos;Incendie</h2>

      <p>
        Une prise électrique ne devrait JAMAIS être chaude au toucher. Une température élevée indique
        un dysfonctionnement qui peut provoquer un incendie en quelques heures. C&apos;est l&apos;une des causes
        principales d&apos;incendies domestiques d&apos;origine électrique.
      </p>

      <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
        <div className="flex items-start space-x-3">
          <Flame className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-bold text-red-900 mb-2">🔥 DANGER IMMÉDIAT</h3>
            <p className="text-red-800 font-semibold mb-2">
              Une prise très chaude (brûlante) peut provoquer un incendie dans les minutes ou heures qui suivent.
            </p>
            <p className="text-red-800 mb-0">
              Si votre prise est brûlante, sentez une odeur de brûlé ou voyez des traces noires :
              <strong> Débranchez IMMÉDIATEMENT, coupez le disjoncteur et appelez un électricien.</strong>
            </p>
          </div>
        </div>
      </div>

      <h2>Identifier le Niveau de Gravité</h2>

      <div className="space-y-4 my-8">
        <div className="bg-yellow-50 border-2 border-yellow-400 p-6 rounded-xl">
          <h3 className="font-bold text-yellow-900 mb-2 flex items-center space-x-2">
            <span className="text-2xl">⚠️</span>
            <span>Prise TIÈDE (Attention)</span>
          </h3>
          <p className="text-yellow-800 mb-2"><strong>Température :</strong> Légèrement plus chaude que la température ambiante</p>
          <p className="text-yellow-800 mb-2"><strong>Gravité :</strong> MOYENNE - À surveiller</p>
          <p className="text-yellow-800 mb-0"><strong>Action :</strong> Réduisez la charge, faites vérifier sous 7 jours</p>
        </div>

        <div className="bg-orange-50 border-2 border-orange-500 p-6 rounded-xl">
          <h3 className="font-bold text-orange-900 mb-2 flex items-center space-x-2">
            <span className="text-2xl">🔥</span>
            <span>Prise CHAUDE (Urgent)</span>
          </h3>
          <p className="text-orange-800 mb-2"><strong>Température :</strong> Inconfortable au toucher, vous devez retirer votre main</p>
          <p className="text-orange-800 mb-2"><strong>Gravité :</strong> ÉLEVÉE - Risque d&apos;incendie</p>
          <p className="text-orange-800 mb-0"><strong>Action :</strong> Débranchez, n&apos;utilisez plus, électricien sous 48h</p>
        </div>

        <div className="bg-red-50 border-2 border-red-600 p-6 rounded-xl">
          <h3 className="font-bold text-red-900 mb-2 flex items-center space-x-2">
            <span className="text-2xl">🚨</span>
            <span>Prise BRÛLANTE (Urgence Absolue)</span>
          </h3>
          <p className="text-red-800 mb-2"><strong>Température :</strong> Impossible de maintenir le contact, risque de brûlure</p>
          <p className="text-red-800 mb-2"><strong>Gravité :</strong> CRITIQUE - Incendie imminent</p>
          <p className="text-red-800 mb-0"><strong>Action :</strong> Coupez disjoncteur MAINTENANT, électricien en urgence 24/7</p>
        </div>
      </div>

      <h2>Les 7 Causes d&apos;une Prise Qui Chauffe</h2>

      <h3>1. Surcharge Électrique (Cause #1)</h3>
      <p>
        Brancher trop d&apos;appareils puissants sur une même prise (via multiprise) dépasse la capacité
        de la prise (16A = 3680W maximum).
      </p>
      <p><strong>Exemple de surcharge courante :</strong></p>
      <ul>
        <li>Multiprise avec : radiateur (2000W) + bouilloire (2200W) + grille-pain (1000W) = 5200W → <strong>DANGER !</strong></li>
        <li>Cuisine : four (3000W) + micro-ondes (1200W) + cafetière (1000W) = 5200W → <strong>DANGER !</strong></li>
      </ul>

      <h3>2. Mauvais Contact dans la Prise</h3>
      <p>
        Une prise usée ou de mauvaise qualité ne serre plus correctement les broches de la fiche.
        Le contact imparfait crée une résistance qui génère de la chaleur, pouvant mener à un{' '}
        <Link href="/blog/court-circuit-electrique-dangers-intervention">court-circuit</Link>.
      </p>
      <p><strong>Signes :</strong></p>
      <ul>
        <li>Fiche qui tient mal, bouge dans la prise</li>
        <li>Prise qui a &quot;du jeu&quot;</li>
        <li>Traces de brûlure autour des trous</li>
      </ul>

      <h3>3. Prise ou Multiprise de Mauvaise Qualité</h3>
      <p>
        Les prises et multiprises premier prix (sans marque, achetées en grande surface) utilisent
        des matériaux de qualité inférieure qui ne supportent pas bien la charge.
      </p>
      <p><strong>Risques des produits bas de gamme :</strong></p>
      <ul>
        <li>Contacts en alliage faible (au lieu de cuivre massif)</li>
        <li>Plastique inflammable (au lieu de matériaux ignifugés)</li>
        <li>Câblage interne sous-dimensionné</li>
      </ul>

      <h3>4. Connexion Défectueuse Derrière la Prise</h3>
      <p>
        Les fils électriques connectés à l&apos;arrière de la prise peuvent se desserrer avec le temps
        (vibrations, chaleur). Un fil mal serré = résistance = chaleur.
      </p>

      <h3>5. Appareil Défectueux</h3>
      <p>
        Un appareil en court-circuit interne ou avec un moteur grippé demande trop de courant,
        ce qui fait chauffer la prise.
      </p>
      <p><strong>Appareils souvent concernés :</strong></p>
      <ul>
        <li>Vieux électroménagers (+ de 10 ans)</li>
        <li>Aspirateurs dont le moteur force</li>
        <li>Radiateurs d&apos;appoint vétustes</li>
        <li>Chargeurs de téléphone contrefaits</li>
      </ul>

      <h3>6. Fil Électrique Trop Fin (Section Inadaptée)</h3>
      <p>
        Si votre installation utilise des câbles de section insuffisante (ancien câblage 1,5mm²
        pour un circuit 16A au lieu de 2,5mm²), le câble chauffe et transmet la chaleur à la prise.
        Une{' '}
        <Link href="/mise-aux-normes-tableau-electrique">mise aux normes</Link> est alors nécessaire.
      </p>

      <h3>7. Prise en Série (Plusieurs Multiprises Branchées)</h3>
      <p>
        Brancher une multiprise sur une autre multiprise est INTERDIT et extrêmement dangereux.
        Chaque connexion ajoute de la résistance et de la chaleur.
      </p>

      <h2>Que Faire Immédiatement ?</h2>

      <div className="bg-gray-50 p-6 rounded-xl my-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">🚨 Procédure d&apos;Urgence</h3>
        <ol className="space-y-4">
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
            <div>
              <strong className="text-red-900">DÉBRANCHEZ IMMÉDIATEMENT</strong>
              <p className="text-gray-700 mt-1">Retirez la fiche de la prise. Si elle est collée par la chaleur, coupez le disjoncteur d&apos;abord.</p>
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
            <div>
              <strong className="text-red-900">COUPEZ LE DISJONCTEUR DU CIRCUIT</strong>
              <p className="text-gray-700 mt-1">Sur votre tableau électrique, baissez le disjoncteur de la pièce concernée.</p>
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
            <div>
              <strong className="text-red-900">LAISSEZ REFROIDIR</strong>
              <p className="text-gray-700 mt-1">Attendez au moins 30 minutes. Ne touchez pas pendant le refroidissement.</p>
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
            <div>
              <strong className="text-red-900">INSPECTEZ LES DÉGÂTS</strong>
              <p className="text-gray-700 mt-1">Traces noires ? Plastique fondu ? Odeur persistante ? Prenez des photos.</p>
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">5</span>
            <div>
              <strong className="text-red-900">APPELEZ UN ÉLECTRICIEN</strong>
              <p className="text-gray-700 mt-1">Ne réutilisez JAMAIS une prise qui a chauffé. Remplacement obligatoire.</p>
            </div>
          </li>
        </ol>
      </div>

      <h2>Prévenir la Surchauffe des Prises</h2>

      <h3>✅ Bonnes Pratiques au Quotidien</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div>
          <h4 className="font-bold text-gray-900 mb-3">Dans la Cuisine</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>✓ 1 appareil puissant par prise (four, micro-ondes, bouilloire)</li>
            <li>✓ Circuit dédié 20A pour four et plaques</li>
            <li>✓ Ne jamais utiliser de multiprise pour gros électroménager</li>
            <li>✓ Débranchez les petits appareils après usage</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-3">Dans le Salon / Bureau</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>✓ Multiprise avec protection surtension certifiée NF</li>
            <li>✓ Max 3500W par multiprise (vérifiez l&apos;étiquette)</li>
            <li>✓ Évitez les multiprises &quot;tour&quot; (nombreuses prises empilées)</li>
            <li>✓ 1 radiateur = 1 prise murale directe</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-3">Dans la Salle de Bain</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>✓ Prises spéciales &quot;salle de bain&quot; avec obturateurs</li>
            <li>✓ Distance minimale de 60cm du bac de douche/baignoire</li>
            <li>✓ Débranchez sèche-cheveux après usage</li>
            <li>✓ Ne jamais utiliser multiprise dans salle de bain</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-3">Chambres / Général</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>✓ Vérifiez régulièrement la température des prises</li>
            <li>✓ Remplacez les prises qui bougent ou sont usées</li>
            <li>✓ Aérez derrière les meubles (circulation d&apos;air)</li>
            <li>✓ Chargeurs de qualité (certifiés CE)</li>
          </ul>
        </div>
      </div>

      <h3>🔍 Inspection Mensuelle Recommandée</h3>
      <ul>
        <li>Touchez vos prises après 1h d&apos;utilisation d&apos;appareils puissants</li>
        <li>Vérifiez l&apos;absence de traces noires ou jaunissement</li>
        <li>Testez la fermeté : une prise ne doit pas bouger</li>
        <li>Sentez : aucune odeur de plastique chaud</li>
      </ul>

      <h2>Remplacement Professionnel Obligatoire</h2>

      <p className="font-semibold text-lg mb-4">
        Une prise qui a chauffé DOIT être remplacée par un{' '}
        <Link href="/depannage-electrique-urgence">électricien professionnel</Link>. Les dommages internes
        (contacts fondus, isolant détérioré) ne sont pas visibles mais rendent la prise dangereuse.
      </p>

      <h3>Ce qu&apos;Inclut le Remplacement</h3>
      <ul>
        <li><strong>Démontage</strong> et inspection de la prise et des câbles</li>
        <li><strong>Vérification</strong> de la section des câbles (2,5mm² minimum pour 16A)</li>
        <li><strong>Test</strong> de la connexion au tableau électrique</li>
        <li><strong>Installation</strong> d&apos;une prise certifiée NF, ignifugée</li>
        <li><strong>Contrôle</strong> du serrage et de la mise à la terre</li>
        <li><strong>Test de charge</strong> après installation</li>
      </ul>

      <h3>Coût du Remplacement</h3>
      <p>
        Remplacement d&apos;une prise simple : <strong>60-120€</strong> (fourniture + main d&apos;œuvre)
        <br />
        Si câblage à refaire : <strong>150-300€</strong>
        <br />
        <Link href="/devis-gratuit" className="text-primary hover:text-accent font-semibold">
          Demandez un devis gratuit →
        </Link>
      </p>

      <h2>Mise aux Normes Électriques</h2>

      <p>
        Si vos prises chauffent régulièrement, c&apos;est souvent le signe d&apos;une installation globalement
        sous-dimensionnée ou vétuste. La norme NF C 15-100 impose :
      </p>

      <ul>
        <li><strong>Circuits dédiés</strong> pour gros consommateurs (four, plaques, lave-linge)</li>
        <li><strong>Câbles 2,5mm²</strong> pour prises 16A</li>
        <li><strong>Prises avec terre obligatoire</strong></li>
        <li><strong>Protection par disjoncteur 16A ou 20A</strong> selon usage</li>
        <li><strong>Nombre minimum de prises par pièce</strong> (5 en cuisine, 3 en chambre, etc.)</li>
      </ul>

      <p>
        <Link href="/mise-aux-normes-tableau-electrique" className="text-primary hover:text-accent font-semibold">
          → Mise aux normes complète de votre installation
        </Link>
      </p>

      <h2>Intervention Rapide à Dudelange</h2>

      <div className="bg-gradient-accent text-white p-8 rounded-2xl my-8">
        <h3 className="text-2xl font-bold mb-4">🔌 Remplacement de Prises Défectueuses</h3>
        <p className="mb-6">
          Prise qui chauffe ? N&apos;attendez pas l&apos;incendie !{' '}
          <Link href="/depannage-electrique-urgence" className="text-white underline font-bold">
            Intervention rapide 7j/7
          </Link>.
        </p>
        <ul className="space-y-3">
          <li className="flex items-center space-x-3">
            <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
            <span><strong>Intervention sous 24h</strong> (urgence sous 2h si nécessaire)</span>
          </li>
          <li className="flex items-center space-x-3">
            <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
            <span>Diagnostic complet de votre installation</span>
          </li>
          <li className="flex items-center space-x-3">
            <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
            <span>Remplacement avec prises certifiées NF</span>
          </li>
          <li className="flex items-center space-x-3">
            <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
            <span>Vérification de conformité incluse</span>
          </li>
          <li className="flex items-center space-x-3">
            <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
            <span>Garantie sur matériel et main d&apos;œuvre</span>
          </li>
        </ul>
      </div>

      <h2>FAQ - Questions Fréquentes</h2>

      <div className="space-y-6 my-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-2">Ma multiprise chauffe un peu, c&apos;est grave ?</h3>
          <p className="text-gray-700 mb-0">
            Si elle est juste tiède après utilisation intensive, c&apos;est acceptable. Si elle est CHAUDE,
            vous êtes en surcharge. Réduisez le nombre d&apos;appareils ou leur puissance cumulée (max 3500W).
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-2">Puis-je continuer à utiliser une prise qui a chauffé si elle a refroidi ?</h3>
          <p className="text-gray-700 mb-0">
            <strong>NON, JAMAIS.</strong> Les dommages internes (contacts oxydés, plastique fragilisé) persistent.
            La prise peut prendre feu lors de la prochaine utilisation. Remplacement obligatoire.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-2">Toutes mes prises sont tièdes, c&apos;est normal ?</h3>
          <p className="text-gray-700 mb-0">
            Non, cela indique probablement un problème au niveau du tableau électrique (connexions desserrées)
            ou un câblage sous-dimensionné. Faites diagnostiquer votre installation rapidement.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-2">Mon chargeur de téléphone chauffe, est-ce dangereux ?</h3>
          <p className="text-gray-700 mb-0">
            Un chargeur certifié peut être tiède en charge rapide (normal). S&apos;il est CHAUD ou sent le plastique brûlé,
            jetez-le immédiatement (risque d&apos;incendie et électrocution). Utilisez uniquement des chargeurs certifiés CE.
          </p>
        </div>
      </div>

      <p className="text-lg font-semibold mt-8 text-center bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
        🔥 Une prise qui chauffe est un signal d&apos;alarme incendie. N&apos;attendez pas qu&apos;il soit trop tard !
        Faites intervenir un électricien certifié dès aujourd&apos;hui.
      </p>
    </>
  );
};
