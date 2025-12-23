export interface ItineraryDay {
  day: string;
  bullets: string[];
}

export interface ItineraryProps {
  days: ItineraryDay[];
  ctaLink: string;
}
