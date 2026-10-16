import type { HotelAreaChoice } from "./cityHotelAreas";

// Names match content/cities/orlando/hotel-neighborhood-assignments.json.
const iDrive = "International Drive / Universal Blvd";
const universal = "Universal Orlando Resort area";
const seaWorld = "SeaWorld / South International Drive";
const lakeBuenaVista = "Disney Springs / Lake Buena Vista";
const disneyResorts = "Bonnet Creek / Walt Disney World resorts";
const downtown = "Downtown Orlando";
const airport = "Orlando International Airport area";

export const orlandoHotelAreaPresets: HotelAreaChoice[] = [
  { label: "I-Drive & convention stays", areas: [iDrive] },
  { label: "Universal visits", areas: [universal, iDrive] },
  { label: "Disney visits", areas: [lakeBuenaVista, disneyResorts] },
  { label: "SeaWorld visits", areas: [seaWorld] },
  { label: "Downtown stays", areas: [downtown] },
  { label: "Airport stays", areas: [airport] },
];

// Recommended-areas module shown after the hero on both Orlando safety pages.
export const orlandoRecommendedHotelAreas: HotelAreaChoice[] = [
  { label: "International Drive", areas: [iDrive] },
  { label: "Disney Springs / Lake Buena Vista", areas: [lakeBuenaVista, disneyResorts] },
  { label: "Universal area", areas: [universal] },
];

// Keyed by the safety-guide neighborhood card name. Kissimmee has no reviewed
// hotels yet, so it intentionally has no link.
export const orlandoSafetyGuideHotelAreas: Record<string, HotelAreaChoice> = {
  "International Drive (I-Drive)": { label: "International Drive", areas: [iDrive] },
  "Disney Springs / Lake Buena Vista": { label: "Disney Springs / Lake Buena Vista", areas: [lakeBuenaVista, disneyResorts] },
  "Downtown Orlando": { label: "Downtown Orlando", areas: [downtown] },
};

// Keyed by the night-guide area id. Winter Park and Kissimmee have no
// reviewed hotels yet, so they intentionally have no link.
export const orlandoNightHotelAreas: Record<string, HotelAreaChoice> = {
  "international-drive-universal": { label: "I-Drive and Universal Blvd", areas: [iDrive, universal] },
  "convention-center": { label: "the convention-center district", areas: [iDrive] },
  seaworld: { label: "SeaWorld and south I-Drive", areas: [seaWorld] },
  "universal-resort": { label: "the Universal area", areas: [universal] },
  "disney-springs": { label: "Disney Springs and Lake Buena Vista", areas: [lakeBuenaVista] },
  "disney-resorts": { label: "Disney-area resorts", areas: [disneyResorts] },
  downtown: { label: "Downtown Orlando", areas: [downtown] },
  airport: { label: "the airport area", areas: [airport] },
};
