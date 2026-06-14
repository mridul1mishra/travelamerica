export const metadata = {
  title: "Las Vegas Solo Itinerary 2026 | 3-Day Plan",
  description: "Best 3-day Las Vegas itinerary for solo travelers — Strip walks, shows, Hoover Dam, and Fremont Street on your own.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/lasvegas/solo-itinerary' },
  openGraph: { title: 'Las Vegas Solo Travel Itinerary 2026', description: '3-day solo Las Vegas itinerary built around real logistics and solo-friendly pacing.', url: 'https://www.travelsamericas.com/destination/lasvegas/solo-itinerary', type: 'article' },
};
import lvItineraryFaq from '@/content/destination/lasvegas/solo-itinerary/faq/itineraryfaq.json';
import LasVegasSoloItineraryClient from './lasvegassoloitineraryclient';

export default async function LasVegasSoloItineraryPage() {
  return <LasVegasSoloItineraryClient grouped={lvItineraryFaq} />;
}
