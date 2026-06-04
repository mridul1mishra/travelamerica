export const metadata = {
  title: 'Solo Trip to Los Angeles: 3-Day Itinerary 2026',
  description: "Planning a solo trip to LA? Day-by-day itinerary for solo travelers — safe neighborhoods, solo dining, and transport tips.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/la/solo-itinerary' },
  openGraph: { title: 'Solo Trip to Los Angeles: 3-Day Itinerary', description: 'A practical solo travel itinerary for LA — safe areas, solo-friendly activities, and honest logistics.', url: 'https://www.travelsamericas.com/destination/la/solo-itinerary', type: 'website' },
};
import { getFaqItinerary } from '@/app/lib/FaqData';
import LASoloItineraryClient from './lasoloitineraryclient';

export default async function LASoloItineraryPage() {
  const { faqTravelHubData } = getFaqItinerary();
  return <LASoloItineraryClient grouped={faqTravelHubData} />;
}
