export const metadata = {
  title: "Orlando Solo Itinerary 2026 | 3-Day Plan",
  description: "Best 3-day Orlando itinerary for solo travelers — theme parks, Kennedy Space Center, and the local scene on your own.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/orlando/solo-itinerary' },
  openGraph: { title: 'Orlando Solo Travel Itinerary 2026', description: '3-day solo Orlando itinerary — parks, space center, and the real city beyond the tourist corridor.', url: 'https://www.travelsamericas.com/destination/orlando/solo-itinerary', type: 'website' },
};
import OrlandoSoloItineraryClient from './orlandosoloitineraryclient';

export default function OrlandoSoloItineraryPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
        { "@type": "ListItem", "position": 2, "name": "Orlando", "item": "https://www.travelsamericas.com/destination/orlando" },
        { "@type": "ListItem", "position": 3, "name": "Solo Itinerary", "item": "https://www.travelsamericas.com/destination/orlando/solo-itinerary" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Orlando Solo Itinerary 2026 | 3-Day Plan",
      "description": "Best 3-day Orlando itinerary for solo travelers — theme parks, Kennedy Space Center, and the local scene on your own.",
      "url": "https://www.travelsamericas.com/destination/orlando/solo-itinerary",
      "inLanguage": "en-US",
      "publisher": { "@type": "Organization", "name": "Travels Americas", "url": "https://www.travelsamericas.com" },
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <OrlandoSoloItineraryClient />
    </>
  );
}
