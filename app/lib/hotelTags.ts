export const HOTEL_TAGS = {
  SafeArea: "Safe area",
  NearSubway: "Near subway",
  FirstTimeVisitor: "First-time visitors",
  SoloTraveler: "Solo travelers",
  FamilyFriendly: "Family friendly",
  BestValue: "Best value",
  NearTransit: "Near transit",
  CityCenter: "City centre",
  BudgetFriendly: "Budget friendly",
  Premium: "Premium",
  Luxury: "Luxury",
  NightlifeAccess: "Nightlife access",
  WalkableArea: "Walkable area",
  BusinessFriendly: "Business friendly",
  EditorsChoice: "Editor's choice",
  CouplesFriendly: "Couples friendly",
} as const;

export type HotelTag = keyof typeof HOTEL_TAGS;

export const OPTIONAL_HOTEL_TAGS = [
  "SoloTraveler", "FamilyFriendly", "NightlifeAccess", "NearTransit",
  "WalkableArea", "BusinessFriendly", "EditorsChoice", "CouplesFriendly",
] as const satisfies readonly HotelTag[];
