import type { HotelAreaChoice } from "./cityHotelAreas";

// Names match content/cities/lasvegas/hotel-neighborhood-assignments.json.
const strip = "The Strip";
const downtown = "Downtown / Fremont Street";
const summerlin = "Summerlin";
const henderson = "Henderson";

export const lasvegasHotelAreaPresets: HotelAreaChoice[] = [
  { label: "Strip stays", areas: [strip] },
  { label: "Downtown & Fremont stays", areas: [downtown] },
  { label: "Summerlin & Red Rock stays", areas: [summerlin] },
  { label: "Henderson stays", areas: [henderson] },
];

// Recommended-areas module shown after the hero on both Las Vegas safety pages.
export const lasvegasRecommendedHotelAreas: HotelAreaChoice[] = [
  { label: "The Strip", areas: [strip] },
  { label: "Downtown / Fremont Street", areas: [downtown] },
];

// Keyed by the safety-guide neighborhood card name. The Arts District has no
// hotels of its own, so its card points to the adjacent Downtown hotels and
// says so in the label.
export const lasvegasSafetyGuideHotelAreas: Record<string, HotelAreaChoice> = {
  "The Strip": { label: "The Strip", areas: [strip] },
  "Downtown / Fremont Street": { label: "Downtown / Fremont Street", areas: [downtown] },
  "Arts District": { label: "Downtown, next to the Arts District", areas: [downtown] },
  Summerlin: { label: "Summerlin", areas: [summerlin] },
  Henderson: { label: "Henderson", areas: [henderson] },
};

// Keyed by the night-guide neighborhood card name.
export const lasvegasNightHotelAreas: Record<string, HotelAreaChoice> = {
  "The Strip (Las Vegas Blvd)": { label: "The Strip", areas: [strip] },
  "Fremont Street (Downtown)": { label: "Downtown / Fremont Street", areas: [downtown] },
};
