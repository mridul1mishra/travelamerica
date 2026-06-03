// Centralised booking types — previously redeclared in each of the 4 city booking client files.
// Import from here instead of redefining per-city.

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
