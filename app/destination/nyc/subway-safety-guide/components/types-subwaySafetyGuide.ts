export interface Breadcrumb {
  label: string;
  slug: string;
}

export interface Hero {
  title: string;
  subtitle: string;
  hero_image: string;
  breadcrumbs: Breadcrumb[];
  updated_on: string; // ISO date
}

export interface WhyTrustThisGuide {
  author_expertise: string;
  local_insights: string;
  safety_framework: string;
  data_sources: string[];
  editorial_standards: string;
}

export interface CorePrinciple {
  icon: string;
  title: string;
  description: string;
}

export interface PeakOffPeak {
  peak: string;
  off_peak: string;
}

export interface SubwayBasics {
  how_the_system_works: string;
  peak_vs_off_peak: PeakOffPeak;
  fare_basics: string;
  station_layouts: string;
  train_types: string;
}

export interface Persona {
  id: string;
  top_concerns: string[];
  recommended_behaviors: string[];
  avoid_list: string[];
  confidence_boosters: string[];
}

export interface Scenario {
  scenario_title: string;
  what_to_do: string[];
  what_to_avoid?: string[];
  pro_tips?: string;
  map_or_visual?: string;
}

export interface NeighborhoodNote {
  area_name: string;
  lines: string[];
  peak_safety_notes: string;
  late_night_notes: string;
  transfer_complexity: string;
  avoid_times?: string;
}

export interface ToolApp {
  name: string;
  description: string;
}

export interface BehavioralCues {
  green_flags: string[];
  red_flags: string[];
}

export interface EmergencyPlaybook {
  if_you_feel_unsafe: string[];
  if_someone_harasses_you: string[];
  if_you_get_lost: string[];
  if_your_phone_dies: string[];
  if_service_stops: string[];
}

export interface Etiquette {
  platform_etiquette: string;
  train_etiquette: string;
  rush_hour_rules: string;
  unspoken_norms: string;
}

export interface Checklist {
  essentials: string[];
  safety_items: string[];
  digital_tools: string[];
  what_not_to_carry: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface InternalLink {
  label: string;
  href: string;
}

export interface FooterCTA {
  text: string;
  button_label: string;
  button_link: string;
}

export interface SubwaySafetyGuide {
  hero: Hero;
  why_trust_this_guide: WhyTrustThisGuide;
  core_principles: CorePrinciple[];
  subway_basics: SubwayBasics;
  personas: Persona[];
  scenarios: Scenario[];
  neighborhood_notes: NeighborhoodNote[];
  tools_and_apps: ToolApp[];
  behavioral_cues: BehavioralCues;
  emergency_playbook: EmergencyPlaybook;
  etiquette: Etiquette;
  checklist: Checklist;
  faq: FAQ[];
  internal_links: InternalLink[];
  footer_cta: FooterCTA;
}
