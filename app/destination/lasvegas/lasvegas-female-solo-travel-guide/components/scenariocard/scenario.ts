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
      "Stick to the main, well-lit Las Vegas Boulevard",
      "Walk with purpose and a steady pace",
      "Cross early if a block or side street feels off",
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
      "Move toward a casino entrance or group if uncomfortable"
    ],
    category: "Street"
  },
  {
    id: 3,
    title: "Feeling Followed",
    content: [
      "Change direction or cross the street",
      "Walk into the nearest casino — staffed and surveilled 24/7",
      "Avoid looking back repeatedly",
      "Find security or call (or pretend to call) someone"
    ],
    category: "Street"
  },
  {
    id: 4,
    title: "Card Slappers on the Strip",
    content: [
      "Don’t make eye contact or take the cards",
      "Keep walking — don’t slow down or engage",
      "Stay toward the center of the busy sidewalk",
      "Use the elevated pedestrian bridges to skip clusters"
    ],
    category: "Street"
  },

  // TRANSIT
  {
    id: 5,
    title: "Late-Night Walk Down the Strip",
    content: [
      "Stay on the main, well-lit boulevard",
      "Use the elevated pedestrian bridges to cross",
      "Keep your bag zipped and in front",
      "Duck into a casino if anything feels off"
    ],
    category: "Transit"
  },
  {
    id: 6,
    title: "Confusing Casino or Strip Layout",
    content: [
      "Step aside without blocking the flow",
      "Recheck your route using Live View",
      "Follow signs toward the main entrance or Strip",
      "Ask casino security for directions, not strangers"
    ],
    category: "Transit"
  },
  {
    id: 7,
    title: "Rideshare Pickup at Night",
    content: [
      "Request it from inside the hotel or casino lobby",
      "Match the plate, model, and driver photo",
      "Sit in the back and share your trip",
      "Ask who they’re picking up before saying your name"
    ],
    category: "Transit"
  },
  {
    id: 8,
    title: "Monorail or Shuttle With Few Riders",
    content: [
      "Stand near other riders or well-lit areas",
      "Keep headphones in but no music",
      "Avoid isolated platforms late at night",
      "Move to a busier car or stop if needed"
    ],
    category: "Transit"
  },

  // ACCOMMODATION
  {
    id: 9,
    title: "Hotel Check-In at Night",
    content: [
      "Let staff write your room number instead of saying it aloud",
      "Wait for an empty elevator if someone feels off",
      "Keep your keycard out of sight",
      "Stay aware in quiet tower hallways"
    ],
    category: "Accommodation"
  },
  {
    id: 10,
    title: "Entering Your Room",
    content: [
      "Check the peephole before entering",
      "Lock the deadbolt and latch immediately",
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
    title: "Off-Strip Rental Stay",
    content: [
      "Verify the host identity through the app",
      "Check all locks and windows on arrival",
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
      "Pivot direction or step into a casino",
      "Use a neutral exit line like “Running late”"
    ],
    category: "Social"
  },
  {
    id: 14,
    title: "Persistent Stranger at a Bar",
    content: [
      "Stop responding and change your pace",
      "Move to a new seat near the bartender",
      "Ask casino staff to step in",
      "Call someone to create social pressure"
    ],
    category: "Social"
  },
  {
    id: 15,
    title: "Someone Asking Personal Questions",
    content: [
      "Deflect with vague answers",
      "Avoid revealing your hotel or itinerary",
      "Change the subject or disengage",
      "Walk away confidently"
    ],
    category: "Social"
  },
  {
    id: 16,
    title: "Casino Bars & Clubs",
    content: [
      "Choose visible seating",
      "Keep your drink in sight",
      "Pace the free casino drinks",
      "Decline invitations with “I’m waiting for someone”"
    ],
    category: "Social"
  }
] as const;
