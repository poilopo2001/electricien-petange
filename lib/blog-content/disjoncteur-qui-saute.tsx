import React from 'react';
import Link from 'next/link';
import { AlertTriangle, Zap, CheckCircle2 } from 'lucide-react';

export const DisjoncteurQuiSauteContent = () => {
  return (
    <>
      <h2>Pourquoi Mon Disjoncteur Saute-t-il Régulièrement ?</h2>

      <p>
        Un disjoncteur qui saute est un mécanisme de protection essentiel de votre installation électrique.
        Lorsqu&apos;il se déclenche, c&apos;est qu&apos;il détecte une anomalie potentiellement dangereuse. Comprendre
        les causes permet d&apos;agir rapidement et d&apos;éviter des risques d&apos;incendie ou d&apos;électrocution.
      </p>

      <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-bold text-red-900 mb-2">⚠️ Attention Danger</h3>
            <p className="text-red-800 mb-0">
              Ne jamais forcer le réarmement d&apos;un disjoncteur qui saute répétitivement.
              C&apos;est le signe d&apos;un problème qui nécessite l&apos;intervention d&apos;un électricien professionnel.
            </p>
          </div>
        </div>
      </div>

      <h2>Les 7 Causes Principales d&apos;un Disjoncteur qui Saute</h2>

      <h3>1. Surcharge Électrique</h3>
      <p>
        La cause la plus courante : trop d&apos;appareils branchés simultanément sur le même circuit.
        Votre installation électrique a une capacité limitée (généralement 16A ou 20A par circuit).
      </p>
      <p><strong>Signes caractéristiques :</strong></p>
      <ul>
        <li>Le disjoncteur saute quand vous allumez un appareil supplémentaire</li>
        <li>Cela se produit souvent dans la cuisine ou la salle de bain</li>
        <li>Le problème est plus fréquent en hiver (chauffages d&apos;appoint)</li>
      </ul>
      <p><strong>Solution immédiate :</strong> Débranchez certains appareils et redistribuez-les sur différentes prises.</p>

      <h3>2. Court-Circuit</h3>
      <p>
        Un <Link href="/blog/court-circuit-electrique-dangers-intervention">court-circuit</Link> se produit quand deux fils électriques entrent en contact direct,
        créant un passage anormal du courant. C&apos;est une situation dangereuse qui nécessite une intervention rapide.
      </p>
      <p><strong>Signes caractéristiques :</strong></p>
      <ul>
        <li>Déclenchement instantané du disjoncteur</li>
        <li>Parfois accompagné d&apos;une odeur de brûlé</li>
        <li>Possibles traces noires sur les prises</li>
        <li>Étincelles ou flash lumineux</li>
      </ul>
      <p><strong>Solution :</strong> Coupez immédiatement l&apos;électricité et appelez un électricien. Ne tentez pas de réarmer le disjoncteur.</p>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
        <div className="flex items-start space-x-3">
          <Zap className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-bold text-blue-900 mb-2">💡 Bon à Savoir</h3>
            <p className="text-blue-800 mb-0">
              Un disjoncteur qui saute vous protège ! C&apos;est un mécanisme de sécurité qui évite
              la surchauffe des câbles et les risques d&apos;incendie. Ne le considérez jamais comme une gêne
              mais comme un signal d&apos;alarme.
            </p>
          </div>
        </div>
      </div>

      <h3>3. Appareil Électrique Défectueux</h3>
      <p>
        Un appareil endommagé (machine à laver, réfrigérateur, micro-ondes) peut provoquer
        une fuite de courant ou un court-circuit interne.
      </p>
      <p><strong>Comment identifier l&apos;appareil coupable :</strong></p>
      <ol>
        <li>Débranchez tous les appareils du circuit concerné</li>
        <li>Réarmez le disjoncteur</li>
        <li>Rebranchez les appareils un par un</li>
        <li>L&apos;appareil qui fait sauter le disjoncteur est défectueux</li>
      </ol>
      <p><strong>Solution :</strong> Faites réparer ou remplacer l&apos;appareil défectueux. Ne le rebranchez jamais.</p>

      <h3>4. Disjoncteur Différentiel Trop Sensible ou Défectueux</h3>
      <p>
        Un disjoncteur différentiel de 30mA protège contre les fuites de courant.
        Avec le temps, il peut devenir trop sensible ou se détériorer. Si vous entendez des{' '}
        <Link href="/blog/tableau-electrique-bruit-que-faire">bruits anormaux dans votre tableau</Link>,
        c&apos;est souvent un signe de vieillissement.
      </p>
      <p><strong>Signes :</strong></p>
      <ul>
        <li>Déclenchements intempestifs sans raison apparente</li>
        <li>Le disjoncteur saute par temps humide ou pluvieux</li>
        <li>Déclenchement au démarrage d&apos;appareils pourtant fonctionnels</li>
      </ul>
      <p><strong>Solution :</strong> Test et remplacement du disjoncteur par un professionnel certifié.</p>

      <h3>5. Problème d&apos;Isolation des Câbles</h3>
      <p>
        Les câbles électriques peuvent s&apos;endommager avec le temps (rongeurs, vieillissement, humidité),
        causant des fuites de courant.
      </p>
      <p><strong>Situations à risque :</strong></p>
      <ul>
        <li>Installation électrique de plus de 15 ans</li>
        <li>Maison ancienne avec câblage d&apos;origine</li>
        <li>Présence de rongeurs dans les combles/murs</li>
        <li>Infiltrations d&apos;eau ou humidité</li>
      </ul>
      <p><strong>Solution :</strong> Diagnostic électrique complet et remplacement des câbles endommagés.</p>

      <h3>6. Installation Non Conforme aux Normes NF C 15-100</h3>
      <p>
        Une installation électrique obsolète ou non conforme peut causer des déclenchements répétés.
        La norme NF C 15-100 impose des standards de sécurité précis. Une{' '}
        <Link href="/mise-aux-normes-tableau-electrique">mise aux normes de votre installation</Link>{' '}
        peut résoudre définitivement ces problèmes.
      </p>
      <p><strong>Points de non-conformité fréquents :</strong></p>
      <ul>
        <li>Absence de mise à la terre</li>
        <li>Disjoncteurs sous-dimensionnés pour la charge</li>
        <li>Trop d&apos;appareils sur un même circuit</li>
        <li>Câblage inadapté à la puissance demandée</li>
      </ul>
      <p>
        <strong>Solution :</strong> <Link href="/mise-aux-normes-tableau-electrique" className="text-primary hover:text-accent font-semibold">
          Mise aux normes électriques complète
        </Link>
      </p>

      <h3>7. Conditions Météorologiques (Foudre, Orage)</h3>
      <p>
        Les orages et la foudre peuvent causer des surtensions qui font sauter les disjoncteurs.
        C&apos;est une protection contre les dégâts sur vos équipements.
      </p>
      <p><strong>Solutions préventives :</strong></p>
      <ul>
        <li>Installation d&apos;un parafoudre sur le tableau électrique</li>
        <li>Débranchement des appareils sensibles pendant les orages</li>
        <li>Utilisation de multiprises avec protection surtension</li>
      </ul>

      <h2>Que Faire Quand le Disjoncteur Saute ?</h2>

      <div className="bg-gray-50 p-6 rounded-xl my-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">✅ Procédure Étape par Étape</h3>
        <ol className="space-y-3">
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</span>
            <div>
              <strong>Ne réarmez pas immédiatement</strong> - Attendez quelques minutes pour que les circuits refroidissent
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</span>
            <div>
              <strong>Identifiez le disjoncteur concerné</strong> - Généralement étiqueté par pièce ou fonction
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</span>
            <div>
              <strong>Débranchez les appareils du circuit</strong> - Tous les appareils connectés à ce circuit
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">4</span>
            <div>
              <strong>Réarmez le disjoncteur</strong> - Basculez-le vers le haut (position ON)
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">5</span>
            <div>
              <strong>Si ça tient</strong> - Rebranchez les appareils un par un pour identifier le coupable
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">6</span>
            <div>
              <strong>Si ça saute immédiatement</strong> - Appelez un électricien, il y a un problème dans l&apos;installation
            </div>
          </li>
        </ol>
      </div>

      <h2>Quand Faire Appel à un Électricien Professionnel ?</h2>

      <p>Contactez immédiatement un électricien certifié si :</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="flex items-start space-x-3 bg-white p-4 rounded-lg border border-gray-200">
          <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
          <span>Le disjoncteur saute plusieurs fois par jour</span>
        </div>
        <div className="flex items-start space-x-3 bg-white p-4 rounded-lg border border-gray-200">
          <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
          <span>Vous détectez une odeur de brûlé</span>
        </div>
        <div className="flex items-start space-x-3 bg-white p-4 rounded-lg border border-gray-200">
          <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
          <span>Le disjoncteur est chaud au toucher</span>
        </div>
        <div className="flex items-start space-x-3 bg-white p-4 rounded-lg border border-gray-200">
          <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
          <span>Traces de brûlure sur le tableau électrique</span>
        </div>
        <div className="flex items-start space-x-3 bg-white p-4 rounded-lg border border-gray-200">
          <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
          <span>Le disjoncteur refuse de rester enclenché</span>
        </div>
        <div className="flex items-start space-x-3 bg-white p-4 rounded-lg border border-gray-200">
          <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
          <span>Votre installation a plus de 15 ans</span>
        </div>
      </div>

      <h2>Prévenir les Problèmes de Disjoncteur</h2>

      <p>Pour éviter que votre disjoncteur ne saute :</p>

      <ul>
        <li><strong>Ne surchargez pas les circuits</strong> - Répartissez les appareils puissants sur différentes prises</li>
        <li><strong>Entretenez vos appareils</strong> - Faites vérifier régulièrement les gros électroménagers</li>
        <li><strong>Vérifiez votre tableau électrique</strong> - Au moins une fois par an par un professionnel</li>
        <li><strong>Mettez à niveau si nécessaire</strong> - Les installations de plus de 15 ans doivent être contrôlées</li>
        <li><strong>Installez des protections</strong> - Parafoudre, prises avec protection surtension</li>
      </ul>

      <h2>FAQ - Questions Fréquentes</h2>

      <div className="space-y-6 my-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-2">Puis-je remplacer mon disjoncteur moi-même ?</h3>
          <p className="text-gray-700 mb-0">
            Non, toute intervention sur le tableau électrique doit être réalisée par un électricien certifié.
            C&apos;est obligatoire pour votre sécurité et votre assurance habitation.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-2">Combien coûte le remplacement d&apos;un disjoncteur ?</h3>
          <p className="text-gray-700 mb-0">
            Le remplacement d&apos;un disjoncteur coûte entre 80€ et 200€ selon le type (divisionnaire ou différentiel).
            Contactez-nous pour un <Link href="/devis-gratuit" className="text-primary hover:text-accent font-semibold">devis gratuit</Link>.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-2">Mon disjoncteur saute la nuit, pourquoi ?</h3>
          <p className="text-gray-700 mb-0">
            Souvent dû à un appareil programmé (chauffe-eau, lave-linge) ou un défaut d&apos;isolation qui se manifeste
            avec l&apos;humidité nocturne. Un diagnostic professionnel est recommandé.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-2">Est-ce dangereux si mon disjoncteur saute souvent ?</h3>
          <p className="text-gray-700 mb-0">
            Oui, cela indique un problème dans votre installation électrique. Les risques incluent l&apos;incendie,
            l&apos;électrocution et la détérioration de vos appareils. Faites intervenir un électricien rapidement.
          </p>
        </div>
      </div>

      <h2>Notre Service de Dépannage à Dudelange</h2>

      <p>
        Nos électriciens certifiés interviennent <strong>24h/24 et 7j/7</strong> à Dudelange et dans un rayon de 30km
        (Thionville, Yutz, Cattenom, Entrange). Nous diagnostiquons et résolvons tous vos problèmes de disjoncteurs :
      </p>

      <ul>
        <li>✅ Diagnostic électrique complet de votre installation</li>
        <li>✅ Remplacement de disjoncteurs défectueux</li>
        <li>✅ <Link href="/mise-aux-normes-tableau-electrique">Mise aux normes NF C 15-100</Link></li>
        <li>✅ Rénovation de tableau électrique</li>
        <li>✅ <Link href="/depannage-electrique-urgence">Dépannage électrique d&apos;urgence 24/7</Link></li>
        <li>✅ Garantie décennale sur tous nos travaux</li>
      </ul>

      <p className="text-lg font-semibold mt-8">
        Un disjoncteur qui saute régulièrement n&apos;est jamais normal. Contactez-nous pour un diagnostic gratuit
        et une intervention rapide !
      </p>
    </>
  );
};
