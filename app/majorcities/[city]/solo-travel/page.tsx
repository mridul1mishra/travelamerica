export const generateMetadata = () => ({
  title: 'Solo Travel NYC: Tips, Itinerary & Safe Neighbourhoods | Travel America',
  description:  'Plan your NYC solo travel with a 3-day itinerary, safety tips, gear checklist, and smart navigation tools.',
  keywords: ["solo travel NYC", "things to do alone in NYC", "NYC solo travel tips"]
});

import SoloTravelClient from './solotravelclient';

export default function SoloTravelPage() {
  return <SoloTravelClient />;
}