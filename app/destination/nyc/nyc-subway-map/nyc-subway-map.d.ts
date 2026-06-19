export interface HeroSection {
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  supportingText: string;
  badges?: string[];
}

export interface MapSection {
  imageUrl: string;
  alt: string;
  caption: string;
  downloadLabel: string;
}

export interface QuickNavItem {
  label: string;
  anchor: string;
}

export interface RouteScenario {
  title: string;
  bullets: string[];
}

export interface EtiquetteSection {
  do: string[];
  dont: string[];
}

export interface AppRecommendation {
  name: string;
  benefit: string;
  platforms: string[];
}

export interface DownloadItem {
  label: string;
  file: string;
}

export interface AccessibilityItem {
  title: string;
  content: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface RelatedLink {
  label: string;
  url: string;
}

/**
 * Reusable base for all high‑intent utility pages.
 * Extend this for future pages like:
 * - NYC Subway Safety
 * - NYC Airport Transfers
 * - NYC Neighborhood Map
 */
export interface HighIntentPageBase {
  hero: HeroSection;
  map: MapSection;
  quickNav: QuickNavItem[];
  howToRead: string[];
  routes: RouteScenario[];
  safety: string[];
  etiquette: EtiquetteSection;
  apps: AppRecommendation[];
  downloads: DownloadItem[];
  accessibility: AccessibilityItem[];
  mistakes: string[];
  faq: FAQItem[];
  relatedLinks: RelatedLink[];
}

/**
 * Specific interface for the NYC Subway Map page.
 * Currently identical to HighIntentPageBase,
 * but defined separately for future extensibility.
 */
export interface NYCSubwayMapPage extends HighIntentPageBase {}
