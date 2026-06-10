export const metadata = {
  title: "Solo Trip to Las Vegas 2026 | Complete Guide",
  description: "Everything you need for a solo trip to Las Vegas — when to go, where to stay, how to get around, and safety tips.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/lasvegas/solo-trip-to-lasvegas' },
  openGraph: { title: 'Solo Trip to Las Vegas 2026 | Complete Guide', description: 'Complete guide for solo travelers visiting Las Vegas — honest, practical, no fluff.', url: 'https://www.travelsamericas.com/destination/lasvegas/solo-trip-to-lasvegas', type: 'article' },
};
import SoloTripToLasVegasClient from './solotriptolasvegasclient';

export default function SoloTripToLasVegasPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
        { "@type": "ListItem", "position": 2, "name": "Las Vegas", "item": "https://www.travelsamericas.com/destination/lasvegas" },
        { "@type": "ListItem", "position": 3, "name": "Solo Trip to Las Vegas", "item": "https://www.travelsamericas.com/destination/lasvegas/solo-trip-to-lasvegas" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Solo Trip to Las Vegas 2026 | Complete Guide",
      "description": "Everything you need for a solo trip to Las Vegas — when to go, where to stay, how to get around, and safety tips.",
      "url": "https://www.travelsamericas.com/destination/lasvegas/solo-trip-to-lasvegas",
      "inLanguage": "en-US",
      "publisher": { "@type": "Organization", "name": "Travels Americas", "url": "https://www.travelsamericas.com" },
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SoloTripToLasVegasClient />
    </>
  );
}
