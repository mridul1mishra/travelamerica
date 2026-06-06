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
    title: "Walking I-Drive After Dark",
    content: [
      "Stay on the main, well-lit drive",
      "Walk with purpose and a steady pace",
      "Cross early if a stretch feels too quiet",
      "Keep your phone in hand and location shared"
    ],
    category: "Street"
  },
  {
    id: 2,
    title: "A Promoter Approaches You",
    content: [
      "Keep a neutral expression and don't slow down",
      "Use a short line like \"No thanks\"",
      "Don't take anything handed to you",
      "Move toward a busy, staffed venue if uncomfortable"
    ],
    category: "Street"
  },
  {
    id: 3,
    title: "Feeling Followed in a Lot",
    content: [
      "Head back into the nearest store or lobby",
      "Find a security guard or staff member",
      "Avoid looking back repeatedly",
      "Call (or pretend to call) someone"
    ],
    category: "Street"
  },
  {
    id: 4,
    title: "Crossing a Big, Dark Parking Area",
    content: [
      "Stick to lit, main walkways",
      "Have your keys ready before you reach the car",
      "Walk confidently even if unsure",
      "Keep valuables out of sight"
    ],
    category: "Street"
  },

  // TRANSIT
  {
    id: 5,
    title: "Waiting for a Late Rideshare",
    content: [
      "Wait inside a lobby until the car arrives",
      "Match the plate, model, and driver photo",
      "Sit in the back and share your trip",
      "Ask who they're picking up before saying your name"
    ],
    category: "Transit"
  },
  {
    id: 6,
    title: "Driving Back to Your Hotel at Night",
    content: [
      "Plan your route before you set off",
      "Keep doors locked and valuables out of view",
      "Park in a lit, attended area",
      "Don't sit in the car on your phone in a dark lot"
    ],
    category: "Transit"
  },
  {
    id: 7,
    title: "The I-Ride Trolley After a Long Day",
    content: [
      "Check the last departure time before you rely on it",
      "Sit near other riders or the driver",
      "Keep your bag in front of you",
      "Switch to rideshare if a stop feels isolated"
    ],
    category: "Transit"
  },
  {
    id: 8,
    title: "Leaving a Park at Closing",
    content: [
      "Exit with the flow of other guests",
      "Use the lit main walkways to the lot or pickup",
      "Request your ride before you reach the zone",
      "Note your parking section to avoid wandering"
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
      "Stay aware in quiet corridors"
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
      "Keep the curtains closed at night"
    ],
    category: "Accommodation"
  },
  {
    id: 11,
    title: "Unexpected Knock on the Door",
    content: [
      "Don't open the door without confirming",
      "Call the front desk to verify",
      "Speak through the door if needed",
      "Ignore if unsure — safety first"
    ],
    category: "Accommodation"
  },
  {
    id: 12,
    title: "Vacation-Home or Off-Site Stay",
    content: [
      "Verify the host through the booking app",
      "Check all locks and windows on arrival",
      "Avoid sharing your plans with neighbors",
      "Keep valuables in a single secure spot"
    ],
    category: "Accommodation"
  },

  // SOCIAL
  {
    id: 13,
    title: "Unwanted Conversation at a Bar",
    content: [
      "Use short, closed-ended replies",
      "Avoid sharing your hotel or itinerary",
      "Move to a seat near the bartender",
      "Use a neutral exit line like \"I'm meeting someone\""
    ],
    category: "Social"
  },
  {
    id: 14,
    title: "Persistent Stranger",
    content: [
      "Stop responding and change your pace",
      "Move toward a group or staff member",
      "Step into a busy, staffed venue",
      "Call someone to create social pressure"
    ],
    category: "Social"
  },
  {
    id: 15,
    title: "Someone Asking Personal Questions",
    content: [
      "Deflect with vague answers",
      "Avoid revealing your hotel or plans",
      "Change the subject or disengage",
      "Walk away confidently"
    ],
    category: "Social"
  },
  {
    id: 16,
    title: "Dinner Shows & CityWalk Bars",
    content: [
      "Choose visible seating",
      "Keep your drink in sight",
      "Know your exit and your ride plan",
      "Decline invitations with \"I'm waiting for someone\""
    ],
    category: "Social"
  }
] as const;
