// Shared location choices for article links and the existing hotel filter.
// These are hotel-planning areas, not safety ratings or amenity assignments.
const downtown = [
  "Downtown / South Park & L.A. LIVE",
  "Downtown / Financial District",
  "Downtown / Bunker Hill",
  "Downtown / Historic Core & Broadway",
  "Little Tokyo",
];

export const laHotelAreaPresets = [
  { label: "Hollywood shows", areas: ["Hollywood"] },
  { label: "L.A. LIVE events", areas: ["Downtown / South Park & L.A. LIVE"] },
  { label: "Downtown stays", areas: downtown },
  { label: "Venice beach stays", areas: ["Venice"] },
  { label: "Universal visits", areas: ["Universal City", "North Hollywood"] },
  { label: "Westside stays", areas: ["Westwood / UCLA", "Century City", "Beverly Grove", "Beverly Hills border / Pico-Robertson", "Bel Air / Brentwood"] },
  { label: "LAX airport stays", areas: ["LAX airport area"] },
];

export const laNightHotelAreas: Record<string, { label: string; areas: string[] }> = {
  hollywood: { label: "Compare Hollywood hotels", areas: ["Hollywood"] },
  downtown: { label: "Compare Downtown hotel locations", areas: downtown },
  "south-park": { label: "Compare South Park and L.A. LIVE hotels", areas: ["Downtown / South Park & L.A. LIVE"] },
  venice: { label: "Compare Venice hotels", areas: ["Venice"] },
  "little-tokyo": { label: "Compare Little Tokyo hotels", areas: ["Little Tokyo"] },
  "universal-city": { label: "Compare Universal City hotels", areas: ["Universal City"] },
};

export function laHotelAreasUrl(areas: string[]) {
  return `/destination/la/hotel?${new URLSearchParams({ from: "is-la-safe-at-night", areas: areas.join("|") })}`;
}
