export const metadata = {
  title: "Solo Trip to Orlando 2026 | Complete Guide",
  description: "Complete guide to a solo trip to Orlando — when to go, where to stay, theme park tips for solo visitors, and safety.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/orlando/solo-trip-to-orlando' },
  openGraph: { title: 'Solo Trip to Orlando 2026 | Complete Guide', description: 'Complete guide for solo travelers visiting Orlando — honest, practical, parks and beyond.', url: 'https://www.travelsamericas.com/destination/orlando/solo-trip-to-orlando', type: 'website' },
};
import SoloTripToOrlandoClient from './solotriptoorlandoclient';

export default function SoloTripToOrlandoPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
        { "@type": "ListItem", "position": 2, "name": "Orlando", "item": "https://www.travelsamericas.com/destination/orlando" },
        { "@type": "ListItem", "position": 3, "name": "Solo Trip to Orlando", "item": "https://www.travelsamericas.com/destination/orlando/solo-trip-to-orlando" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Solo Trip to Orlando 2026 | Complete Guide",
      "description": "Complete guide to a solo trip to Orlando — when to go, where to stay, theme park tips for solo visitors, and safety.",
      "url": "https://www.travelsamericas.com/destination/orlando/solo-trip-to-orlando",
      "inLanguage": "en-US",
      "publisher": { "@type": "Organization", "name": "Travels Americas", "url": "https://www.travelsamericas.com" },
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SoloTripToOrlandoClient />
    </>
  );
}
