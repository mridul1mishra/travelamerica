/* -------------------------------------------------------
   1. Hero Section (HeroSafety)
------------------------------------------------------- */
export interface HeroSafetyProps {
  title: string;
  subtitle: string;
  heroImage: string;
  trustBadges?: string[];
}

/* -------------------------------------------------------
   2. Safety Verdict Snapshot (SafetyMeter)
------------------------------------------------------- */
export interface SafetyMeterProps {
  overallRating: string;
  meterScore: number;
  quickSummary: string;
  bestFor: string[];
  avoidIf: string[];
}

/* -------------------------------------------------------
   3. NYC Night Safety Map (NeighborhoodSafetyGrid)
------------------------------------------------------- */
export interface NeighborhoodSafetyItem {
  name: string;
  safetyLevel: string;
  why: string;
  bestTimeToVisit: string | null;
  avoidAfter: string | null;
  notes?: string | null;
}

export interface NeighborhoodSafetyGridProps {
  neighborhoods: NeighborhoodSafetyItem[];
}

/* -------------------------------------------------------
   4. Night Scenarios (ScenarioCards)
------------------------------------------------------- */
export interface ScenarioCard {
  title: string;
  riskLevel: string;
  whatToExpect: string;
  howToStaySafe: string[];
  bestFor: string;
  avoidIf: string;
}

export interface ScenarioCardsProps {
  scenarios: ScenarioCard[];
}

/* -------------------------------------------------------
   5. Persona‑Driven Safety Advice (PersonaSafetyBlocks)
------------------------------------------------------- */
export interface PersonaSafetyBlock {
  personaName: string;
  topConcerns: string[];
  recommendedNeighborhoods: string[];
  avoidZones: string[];
  nightTips: string[];
}

export interface PersonaSafetyBlocksProps {
  personas: PersonaSafetyBlock[];
}

/* -------------------------------------------------------
   6. NYC Night Safety Principles (CorePrinciples)
------------------------------------------------------- */
export interface SafetyPrinciple {
  title: string;
  description: string;
  example: string;
}

export interface CorePrinciplesProps {
  principles: SafetyPrinciple[];
}

/* -------------------------------------------------------
   7. Transit Safety at Night (TransitSafety)
------------------------------------------------------- */
export interface TransitModeSafety {
  riskLevel: string;
  bestHours: string | null;
  avoidHours: string | null;
  tips: string[];
  recommendedRoutes?: string[] | null;
}

export interface TransitSafetyProps {
  subway: TransitModeSafety;
  bus?: TransitModeSafety;
  rideshare?: TransitModeSafety;
  yellowCabs?: TransitModeSafety;
  walking?: TransitModeSafety;
}

/* -------------------------------------------------------
   8. Neighborhood Deep Dives (NeighborhoodCards)
------------------------------------------------------- */
export interface NeighborhoodCard {
  name: string;
  nightVibe: string;
  safetyRating: string;
  safeSpots: string[];
  avoidSpots: string[];
  idealFor: string;
  notFor: string;
}

export interface NeighborhoodCardsProps {
  neighborhoods: NeighborhoodCard[];
}

/* -------------------------------------------------------
   9. Emergency & Local Resources (EmergencyBlock)
------------------------------------------------------- */
export interface EmergencyBlockProps {
  call911: string;
  call311: string;
  nypdPrecinctLocator: string;
  nypdPrecinctLocatorText: string; 
  nearestHospital: string;
  subwayHelpPoints: string;
  lateNightTransportLinks?: string[];
}

/* -------------------------------------------------------
   10. FAQ (FAQAccordion)
------------------------------------------------------- */
export interface FAQItem {
  question: string;
  answer: string;
  relatedLinks?: string[];
}

export interface FAQAccordionProps {
  faqs: FAQItem[];
}

/* -------------------------------------------------------
   11. Internal Linking Block (InterlinkingGrid)
------------------------------------------------------- */
export interface InterlinkItem {
  title: string;
  url: string;
}

export interface InterlinkingGridProps {
  links: InterlinkItem[];
}

/* -------------------------------------------------------
   12. Why Trust This Guide (TrustBlock)
------------------------------------------------------- */
export interface TrustBlockProps {
  methodology: string;
  localInsights: string;
  dataSources: string[];
  editorialProcess: string;
  
}

/* -------------------------------------------------------
   13. Full Page Type (Optional)
------------------------------------------------------- */
export interface IsNycSafeAtNightPage {
  heroSafety: HeroSafetyProps;
  safetyMeter: SafetyMeterProps;
  neighborhoodSafetyGrid: NeighborhoodSafetyItem[];
  scenarioCards: ScenarioCard[];
  personaSafetyBlocks: PersonaSafetyBlock[];
  corePrinciples: SafetyPrinciple[];
  transitSafety: TransitSafetyProps;
  neighborhoodCards: NeighborhoodCard[];
  emergencyBlock: EmergencyBlockProps;
  faq: FAQItem[];
  interlinkingGrid: InterlinkItem[];
  trustBlock: TrustBlockProps;
}
