import { DisjoncteurQuiSauteContent } from './disjoncteur-qui-saute';
import { PanneElectriqueTotaleContent } from './panne-electrique-totale';
import { CourtCircuitElectriqueContent } from './court-circuit-electrique';
import { TableauElectriqueBruitContent } from './tableau-electrique-bruit';
import { PriseElectriqueChauffeeContent } from './prise-electrique-chauffe';

/**
 * Mapping des slugs d'articles vers leurs composants de contenu
 */
export const BLOG_CONTENT_COMPONENTS: Record<string, React.ComponentType> = {
  'disjoncteur-qui-saute-causes-solutions': DisjoncteurQuiSauteContent,
  'panne-electrique-totale-que-faire': PanneElectriqueTotaleContent,
  'court-circuit-electrique-dangers-intervention': CourtCircuitElectriqueContent,
  'tableau-electrique-bruit-que-faire': TableauElectriqueBruitContent,
  'prise-electrique-qui-chauffe-danger': PriseElectriqueChauffeeContent,
};

/**
 * Récupère le composant de contenu pour un article donné
 */
export function getBlogContentComponent(slug: string): React.ComponentType | null {
  return BLOG_CONTENT_COMPONENTS[slug] || null;
}
