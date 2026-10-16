import type { HotelAreaChoice } from "./cityHotelAreas";

// Names match content/cities/lasvegas/hotel-neighborhood-assignments.json.
const strip = "The Strip";
const downtown = "Downtown / Fremont Street";

export const lasvegasHotelAreaPresets: HotelAreaChoice[] = [
  { label: "Strip stays", areas: [strip] },
  { label: "Downtown & Fremont stays", areas: [downtown] },
];

// Recommended-areas module shown after the hero on both Las Vegas safety pages.
export const lasvegasRecommendedHotelAreas: HotelAreaChoice[] = [
  { label: "The Strip", areas: [strip] },
  { label: "Downtown / Fremont Street", areas: [downtown] },
];

// Keyed by the safety-guide neighborhood card name. Arts District, Summerlin
// and Henderson have no reviewed hotels yet, so they intentionally have no link.
export const lasvegasSafetyGuideHotelAreas: Record<string, HotelAreaChoice> = {
  "The Strip": { label: "The Strip", areas: [strip] },
  "Downtown / Fremont Street": { label: "Downtown / Fremont Street", areas: [downtown] },
};

// Keyed by the night-guide neighborhood card name.
export const lasvegasNightHotelAreas: Record<string, HotelAreaChoice> = {
  "The Strip (Las Vegas Blvd)": { label: "The Strip", areas: [strip] },
  "Fremont Street (Downtown)": { label: "Downtown / Fremont Street", areas: [downtown] },
};
