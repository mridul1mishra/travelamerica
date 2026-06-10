export const generateMetadata = () => ({
  title: "Solo Trip to NYC 2026 | 3-Day Safety & Budget Guide",
  description:  "Explore NYC solo with confidence. 2026 guide covering safety tips, smart budgeting, local vibes, and a 3-day itinerary.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
      canonical: 'https://www.travelsamericas.com/destination/nyc/solo-itinerary',
    },
    twitter: {
    card: "summary_large_image",
    title: "3-Day Solo Travel Itinerary for New York | Travels Americas",
    description: "Explore NYC solo with this 3-day itinerary covering landmarks, neighborhoods, and Brooklyn vibes.",
    images: ["https://www.travelsamericas.com/data/majorcities/newyork/assets/solo-travel-itinerary.png"]
  },
  openGraph: {
    title: "Solo Trip to NYC 2026 | 3-Day Safety & Budget Guide",
    description: "Explore NYC solo with confidence. 2026 guide covering safety tips, smart budgeting, local vibes, and a 3-day itinerary.",
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
