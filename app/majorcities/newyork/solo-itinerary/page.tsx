export const generateMetadata = () => ({
  title: '3-Day Solo Travel Itinerary for New York | Travel America',
  description:  'Explore NYC solo with this 3-day itinerary covering landmarks, neighborhoods, and Brooklyn vibes.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
      canonical: 'https://www.travelamerica.work/majorcities/newyork/solo-itinerary',
    },
    twitter: {
    card: "summary_large_image",
    title: "3-Day NYC Group Travel Itinerary",
    description: "Plan the perfect 3-day NYC trip for groups with museums, parks, Broadway, and a Hudson River dinner cruise.",
    images: ["https://yourwebsite.com/images/nyc-group-itinerary-day3-dinner-cruise-dancing.png"]
  }
});

import SoloItineraryClient from './soloitineraryclient';

export default function SoloItineraryPage() {
  return <SoloItineraryClient />;
}