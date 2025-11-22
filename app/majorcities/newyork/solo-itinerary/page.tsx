export const generateMetadata = () => ({
  title: '3-Day Solo Travel Itinerary for New York | Travel America',
  description:  'Explore NYC solo with this 3-day itinerary covering landmarks, neighborhoods, and Brooklyn vibes.',
  alternates: {
      canonical: 'https://www.travelamerica.work/majorcities/newyork/solo-itinerary',
    },
});

import SoloItineraryClient from './soloitineraryclient';

export default function SoloItineraryPage() {
  return <SoloItineraryClient />;
}