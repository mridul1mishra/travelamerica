export const metadata = {
  title: "Solo Trip to LA 2026 | Everything You Need to Know",
  description: "Planning your first solo trip to Los Angeles? Complete guide covering when to go, where to stay, transport, and safety.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/la/solo-trip-to-la' },
  openGraph: { title: 'Solo Trip to LA 2026 | Complete Guide', description: 'Everything a first-time solo traveler needs to know about visiting Los Angeles.', url: 'https://www.travelsamericas.com/destination/la/solo-trip-to-la', type: 'article' },
};
import SoloTripToLAClient from './solotriptolaclient';

export default function SoloTripToLAPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
        { "@type": "ListItem", "position": 2, "name": "Los Angeles", "item": "https://www.travelsamericas.com/destination/la" },
        { "@type": "ListItem", "position": 3, "name": "Solo Trip to LA", "item": "https://www.travelsamericas.com/destination/la/solo-trip-to-la" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Solo Trip to LA 2026 | Everything You Need to Know",
      "description": "Planning your first solo trip to Los Angeles? Complete guide covering when to go, where to stay, transport, and safety.",
      "url": "https://www.travelsamericas.com/destination/la/solo-trip-to-la",
      "inLanguage": "en-US",
      "publisher": { "@type": "Organization", "name": "Travels Americas", "url": "https://www.travelsamericas.com" },
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SoloTripToLAClient />
    </>
  );
}
