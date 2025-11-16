export const generateMetadata = () => ({
  title: 'Solo Travel NYC: Safety, Itinerary & Neighborhood Tips',
  description:  'Plan your NYC solo travel with a 3-day itinerary, safety tips, gear checklist, and smart navigation tools.',
  keywords: ["solo travel NYC", "things to do alone in NYC", "NYC solo travel tips"],
  alternates: {
      canonical: 'https://www.travelamerica.work/majorcities/newyork/solo-travel',
    },
});

import SoloTravelClient from './solotravelclient';

export default function SoloTravelPage() {
  return <SoloTravelClient />;
}