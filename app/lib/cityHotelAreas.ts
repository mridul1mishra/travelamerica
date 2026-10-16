// Shared helpers for safety-article hotel links. Area names must match
// reviewed hotel neighborhoods so the hotel page filter returns real results.
// These are hotel-planning areas, not safety ratings or amenity assignments.
export type HotelAreaChoice = { label: string; areas: string[] };
export type SafetyHotelCity = "orlando" | "lasvegas" | "la";

export function cityHotelUrl(city: SafetyHotelCity, from: string, areas: string[] = []) {
  const params = new URLSearchParams({ from });
  if (areas.length) params.set("areas", areas.join("|"));
  return `/destination/${city}/hotel?${params}`;
}

// Same slug rule as NeighborhoodHotelLink so GA cta_id values stay comparable.
export function ctaSlug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export function uniqueAreas(choices: HotelAreaChoice[]) {
  return Array.from(new Set(choices.flatMap(choice => choice.areas)));
}
