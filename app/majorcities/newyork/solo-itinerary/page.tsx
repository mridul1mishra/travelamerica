export const generateMetadata = () => ({
  title: 'Solo Trip to NYC: 2026 Safety, Budget & 3‑Day Vibe Guide | Travel America',
  description:  'Explore NYC solo with confidence. This 2026 guide covers safety tips, smart budgeting, local vibes, and a smooth 3‑day plan for first‑time solo travelers',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
      canonical: 'https://www.travelamerica.work/majorcities/newyork/solo-itinerary',
    },
    twitter: {
    card: "summary_large_image",
    title: "3-Day Solo Travel Itinerary for New York | Travel America",
    description: "Explore NYC solo with this 3-day itinerary covering landmarks, neighborhoods, and Brooklyn vibes.",
    images: ["https://www.travelamerica.work/data/majorcities/newyork/assets/solo-travel-itinerary.png"]
  }
});

import { getFaqItinerary } from '@/app/lib/FaqData';
import SoloItineraryClient from './soloitineraryclient';

export default async function SoloItineraryPage() {
  const { faqTravelHubData } = await getFaqItinerary();
  return <SoloItineraryClient grouped={faqTravelHubData} />;
}
