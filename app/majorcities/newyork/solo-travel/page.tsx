export const generateMetadata = () => ({
  title: 'Solo Travel NYC: Safety, Itinerary & Neighborhood Tips',
  description:  'Plan your NYC solo travel with a 3-day itinerary, safety tips, gear checklist, and smart navigation tools.',
  keywords: ["solo travel NYC", "things to do alone in NYC", "NYC solo travel tips"],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
      canonical: 'https://www.travelamerica.work/majorcities/newyork/solo-travel',
    },
    twitter: {
    card: "summary_large_image",
    title: "3-Day NYC Group Travel Itinerary",
    description: "Plan the perfect 3-day NYC trip for groups with museums, parks, Broadway, and a Hudson River dinner cruise.",
    images: ["https://yourwebsite.com/images/nyc-group-itinerary-day3-dinner-cruise-dancing.png"]
  }
});

import SoloTravelClient from './solotravelclient';

export default function SoloTravelPage() {
  return <SoloTravelClient />;
}