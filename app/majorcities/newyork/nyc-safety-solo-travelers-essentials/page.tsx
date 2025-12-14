export const generateMetadata = () => ({
  title: 'NYC Solo Travel Safety: Culture, Tech & Belongings',
  description:  'Solo travelers in NYC: blend in, protect valuables, and use smart tech for a safe adventure.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
      canonical: 'https://www.travelamerica.work/majorcities/newyork/nyc-solo-travel-safety',
    },
    twitter: {
    card: "summary_large_image",
    title: "Is NYC Safe for Solo Travelers? Nightlife, Transport & Neighborhood Tips",
    description: "Solo travelers in NYC: blend in, protect valuables, and use smart tech for a safe adventure.",
    images: ["https://www.travelamerica.work/data/majorcities/newyork/assets/nyc-solo-travel-safety-banner.png"]
  }
});

import { getFaqItinerary } from '@/app/lib/FaqData';
import NYCSoloTravelSafetyClient from './nycsolotravelsafetyclient';

export default async function NYCSolotravelSafetyPage() {
  const { faqTravelHubData } = await getFaqItinerary();
  return <NYCSoloTravelSafetyClient />;
}