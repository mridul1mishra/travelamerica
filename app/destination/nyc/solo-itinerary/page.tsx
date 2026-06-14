export const generateMetadata = () => ({
  title: "NYC Solo Itinerary 2026: 3-Day Plan with Safe Areas & Local Tips",
  description:  "A 3-day NYC solo itinerary for 2026 — where to stay, what to skip, how much to budget, and the neighborhoods that actually work for solo travelers.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
      canonical: 'https://www.travelsamericas.com/destination/nyc/solo-itinerary',
    },
    twitter: {
    card: "summary_large_image",
    title: "NYC Solo Itinerary 2026: 3-Day Plan with Safe Areas & Local Tips",
    description: "A 3-day NYC solo itinerary for 2026 — where to stay, what to skip, how much to budget, and the neighborhoods that actually work for solo travelers.",
    images: ["https://www.travelsamericas.com/data/majorcities/newyork/assets/solo-travel-itinerary.png"]
  },
  openGraph: {
    title: "NYC Solo Itinerary 2026: 3-Day Plan with Safe Areas & Local Tips",
    description: "A 3-day NYC solo itinerary for 2026 — where to stay, what to skip, how much to budget, and the neighborhoods that actually work for solo travelers.",
    url: 'https://www.travelsamericas.com/destination/nyc/solo-itinerary',
    type: 'article',
    siteName: 'Travels Americas',
    images: [{ url: "https://www.travelsamericas.com/data/majorcities/newyork/assets/solo-travel-itinerary.png", width: 1200, height: 630 }],
  }
});

import { getFaqItinerary } from '@/app/lib/FaqData';
import SoloItineraryClient from './soloitineraryclient';

export default async function SoloItineraryPage() {
  const { faqTravelHubData } = getFaqItinerary();
  return <SoloItineraryClient grouped={faqTravelHubData} />;
}
