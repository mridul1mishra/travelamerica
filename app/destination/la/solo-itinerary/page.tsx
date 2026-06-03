export const metadata = {
  title: 'Solo Trip to Los Angeles: 3-Day Itinerary 2026',
  description: "Planning a solo trip to LA? Day-by-day itinerary for solo travelers — safe neighborhoods, solo dining, and transport tips.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/la/solo-itinerary' },
  openGraph: { title: 'Solo Trip to Los Angeles: 3-Day Itinerary', description: 'A practical solo travel itinerary for LA — safe areas, solo-friendly activities, and honest logistics.', url: 'https://www.travelsamericas.com/destination/la/solo-itinerary', type: 'website' },
};
import LASoloItineraryClient from './lasoloitineraryclient';

export default function LASoloItineraryPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
        { "@type": "ListItem", "position": 2, "name": "Los Angeles", "item": "https://www.travelsamericas.com/destination/la" },
        { "@type": "ListItem", "position": 3, "name": "Solo Itinerary", "item": "https://www.travelsamericas.com/destination/la/solo-itinerary" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Solo Trip to Los Angeles: 3-Day Itinerary 2026",
      "description": "Planning a solo trip to LA? Day-by-day itinerary for solo travelers — safe neighborhoods, solo dining, and transport tips.",
      "url": "https://www.travelsamericas.com/destination/la/solo-itinerary",
      "inLanguage": "en-US",
      "publisher": { "@type": "Organization", "name": "Travels Americas", "url": "https://www.travelsamericas.com" },
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LASoloItineraryClient />
    </>
  );
}
