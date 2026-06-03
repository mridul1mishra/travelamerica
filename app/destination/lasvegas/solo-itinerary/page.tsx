export const metadata = {
  title: "Las Vegas Solo Itinerary 2026 | 3-Day Plan",
  description: "Best 3-day Las Vegas itinerary for solo travelers — Strip walks, shows, Hoover Dam, and Fremont Street on your own.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/lasvegas/solo-itinerary' },
  openGraph: { title: 'Las Vegas Solo Travel Itinerary 2026', description: '3-day solo Las Vegas itinerary built around real logistics and solo-friendly pacing.', url: 'https://www.travelsamericas.com/destination/lasvegas/solo-itinerary', type: 'website' },
};
import LasVegasSoloItineraryClient from './lasvegassoloitineraryclient';

export default function LasVegasSoloItineraryPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
        { "@type": "ListItem", "position": 2, "name": "Las Vegas", "item": "https://www.travelsamericas.com/destination/lasvegas" },
        { "@type": "ListItem", "position": 3, "name": "Solo Itinerary", "item": "https://www.travelsamericas.com/destination/lasvegas/solo-itinerary" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Las Vegas Solo Itinerary 2026 | 3-Day Plan",
      "description": "Best 3-day Las Vegas itinerary for solo travelers — Strip walks, shows, Hoover Dam, and Fremont Street on your own.",
      "url": "https://www.travelsamericas.com/destination/lasvegas/solo-itinerary",
      "inLanguage": "en-US",
      "publisher": { "@type": "Organization", "name": "Travels Americas", "url": "https://www.travelsamericas.com" },
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LasVegasSoloItineraryClient />
    </>
  );
}
