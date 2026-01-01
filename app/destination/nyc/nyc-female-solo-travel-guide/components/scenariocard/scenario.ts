export type ScenarioCategory =
  | "Street"
  | "Transit"
  | "Accommodation"
  | "Social";

export interface Scenario {
  id: number;
  title: string;
  content: string[];
  category: ScenarioCategory;
}

export const SCENARIOS: readonly Scenario[] = [
  // STREET
  {
    id: 1,
    title: "Walking Alone at Night",
    content: [
      "Stick to well-lit avenues instead of side streets",
      "Walk with purpose and steady pace",
      "Cross early if a block feels off",
      "Keep your phone in hand and location shared"
    ],
    category: "Street"
  },
  {
    id: 2,
    title: "Someone Approaches You for Money",
    content: [
      "Keep a neutral expression and avoid prolonged engagement",
      "Use a short line like “Sorry, can’t help”",
      "Maintain your pace — don’t stop walking",
      "Move toward a store or group if uncomfortable"
    ],
    category: "Street"
  },
  {
    id: 3,
    title: "Feeling Followed",
    content: [
      "Change direction or cross the street",
      "Enter a store, café, or well-lit space",
      "Avoid looking back repeatedly",
      "Call or pretend to call someone"
    ],
    category: "Street"
  },
  {
    id: 4,
    title: "Navigating Empty Streets",
    content: [
      "Stay near open businesses or busier corners",
      "Avoid construction zones and dim blocks",
      "Walk confidently even if unsure",
      "Keep valuables out of sight"
    ],
    category: "Street"
  },

  // TRANSIT
  {
    id: 5,
    title: "Late-Night Subway Platform",
    content: [
      "Stand near the conductor’s car",
      "Avoid empty cars even if convenient",
      "Keep your bag in front",
      "Screenshot your route + exits"
    ],
    category: "Transit"
  },
  {
    id: 6,
    title: "Confusing Subway Exits",
    content: [
      "Step aside without blocking flow",
      "Recheck exits using Live View",
      "Follow crowds toward main streets",
      "Avoid asking strangers for directions"
    ],
    category: "Transit"
  },
  {
    id: 7,
    title: "Rideshare Pickup on a Quiet Street",
    content: [
      "Match plate, model, and driver photo",
      "Sit behind the driver",
      "Share your trip with someone",
      "Track the route on your phone"
    ],
    category: "Transit"
  },
  {
    id: 8,
    title: "Bus Stop With Low Foot Traffic",
    content: [
      "Stand near other riders or well-lit areas",
      "Keep headphones in but no music",
      "Avoid isolated shelters",
      "Move to a busier corner if needed"
    ],
    category: "Transit"
  },

  // ACCOMMODATION
  {
    id: 9,
    title: "Hotel Check-In at Night",
    content: [
      "Ask staff to write your room number",
      "Wait for an empty elevator if someone feels off",
      "Keep your keycard out of sight",
      "Stay aware in quiet hallways"
    ],
    category: "Accommodation"
  },
  {
    id: 10,
    title: "Entering Your Room",
    content: [
      "Check the peephole before entering",
      "Lock deadbolt + latch immediately",
      "Inspect the room quickly (bathroom, closet)",
      "Keep curtains closed at night"
    ],
    category: "Accommodation"
  },
  {
    id: 11,
    title: "Unexpected Knock on the Door",
    content: [
      "Don’t open the door without confirming",
      "Call the front desk to verify",
      "Speak through the door if needed",
      "Ignore if unsure — safety first"
    ],
    category: "Accommodation"
  },
  {
    id: 12,
    title: "Airbnb or Rental Stay",
    content: [
      "Verify host identity through the app",
      "Check all locks and windows",
      "Avoid sharing your plans with neighbors",
      "Keep valuables in a single secure spot"
    ],
    category: "Accommodation"
  },

  // SOCIAL
  {
    id: 13,
    title: "Unwanted Conversation",
    content: [
      "Use short, closed-ended replies",
      "Avoid sharing personal details",
      "Pivot direction or enter a store",
      "Use a neutral exit line like “Running late”"
    ],
    category: "Social"
  },
  {
    id: 14,
    title: "Persistent Stranger",
    content: [
      "Stop responding and change pace",
      "Move toward a group or staff member",
      "Enter a café or store",
      "Call someone to create social pressure"
    ],
    category: "Social"
  },
  {
    id: 15,
    title: "Someone Asking Personal Questions",
    content: [
      "Deflect with vague answers",
      "Avoid revealing hotel or itinerary",
      "Change the subject or disengage",
      "Walk away confidently"
    ],
    category: "Social"
  },
  {
    id: 16,
    title: "Social Settings (Bars, Cafés)",
    content: [
      "Choose visible seating",
      "Keep your drink in sight",
      "Use AirPods as a boundary",
      "Decline invitations with “I’m waiting for someone”"
    ],
    category: "Social"
  }
] as const;
