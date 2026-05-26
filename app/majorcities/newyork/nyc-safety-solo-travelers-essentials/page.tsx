export const generateMetadata = () => ({
  title: 'NYC Solo Travel Safety: Culture, Tech & Belongings',
  description:  'Solo travelers in NYC: blend in, protect valuables, and use smart tech for a safe adventure.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
      canonical: 'https://www.travelsamericas.com/majorcities/newyork/nyc-safety-solo-travelers-essentials',
    },
    twitter: {
    card: "summary_large_image",
    title: "Is NYC Safe for Solo Travelers? Nightlife, Transport & Neighborhood Tips",
    description: "Solo travelers in NYC: blend in, protect valuables, and use smart tech for a safe adventure.",
    images: ["https://www.travelsamericas.com/data/majorcities/newyork/assets/nyc-solo-travel-safety-banner.png"]
  }
});

import { getFaqItinerary } from '@/app/lib/FaqData';
import NYCSoloTravelSafetyClient from './nycsolotravelsafetyclient';

export default async function NYCSolotravelSafetyPage() {
  const { faqTravelHubData } = await getFaqItinerary();
  return <NYCSoloTravelSafetyClient />;
}
