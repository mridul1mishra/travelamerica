export const generateMetadata = () => ({
  title: 'Solo Travel NYC: Safety, Itinerary & Neighborhood Tips',
  description:  'Plan your NYC solo travel with a 3-day itinerary, safety tips, gear checklist, and smart navigation tools.',
  keywords: ["solo travel NYC", "things to do alone in NYC", "NYC solo travel tips"],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
      canonical: 'https://www.travelamerica.work/majorcities/newyork/nyc-safety-solo-travelers-action-guide',
    },
    twitter: {
    card: "summary_large_image",
    title: "Solo Travel NYC: Safety, Itinerary & Neighborhood Tips",
    description: "Plan your NYC solo travel with a 3-day itinerary, safety tips, gear checklist, and smart navigation tools.",
    images: ["https://www.travelamerica.work/data/majorcities/newyork/assets/safetybanner.png"]
  }
});

import NYCSafetySoloTravelersActionGuide from './nycsafetysolotravelersactionguideclient';

export default function SoloTravelPage() {
  return <NYCSafetySoloTravelersActionGuide />;
}
