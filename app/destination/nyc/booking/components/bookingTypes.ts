export type TabKey = "flights" | "hotels" | "activities";

export type FlightRow = {
  airline: { name: string; logo: string };
  departure: { time: string; city: string; date?: string };
  arrival: { time: string; city: string };
  duration: string;
  price: string;
  buttonUrl: string;
  buttonText: string;
  highlight?: boolean;
};

export type Hotel = {
  img: string;
  title: string;
  area?: string;
  rating?: number | null;
  reviews?: number | null;
  price: string;
  url: string;
};

export type Activity = {
  img: string;
  title: string;
  category?: string;
  rating?: number | null;
  reviews?: number | null;
  ranking?: string | null;
  priceLevel?: string | null;
  description?: string;
  url: string;
};

export type RailGuide = { href: string; label: string };
export type RailConfig = {
  nextStep: { label: string; toTab: TabKey };
  guides: RailGuide[];
};
export type RelatedLink = { href: string; label: string };
export type RelatedGroup = { heading: string; links: RelatedLink[] };
export type TabDef = { key: TabKey; label: string; icon: string };

export interface CityBookingConfig {
  cityName: string;
  cityHref: string;
  bookingHref: string;
  headerImage: string;
  bannerText: string;
  headerVariant?: "default" | "wide";
  pageTitle: string;
  tabs: TabDef[];
  tabRail: Record<TabKey, RailConfig>;
  relatedGroups: RelatedGroup[];
  flights: { title: string; header: string[]; rows: FlightRow[] };
  hotels: Hotel[];
  activities: Activity[];
}
