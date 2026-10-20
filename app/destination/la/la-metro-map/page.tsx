export const metadata = {
  title: 'LA Metro Map: Rail Lines, Stations & Visitor Guide | Travels Americas',
  description: 'View the LA Metro map and plan trips to Hollywood, Santa Monica and other destinations. Find rail lines, transfers, fare information and LAX connections.',
  alternates: { canonical: 'https://www.travelsamericas.com/destination/la/la-metro-map' },
  openGraph: { title: 'LA Metro Map: Rail Lines, Stations & Visitor Guide | Travels Americas', description: 'View the LA Metro map and plan trips to Hollywood, Santa Monica and other destinations. Find rail lines, transfers, fare information and LAX connections.', url: 'https://www.travelsamericas.com/destination/la/la-metro-map', type: 'article' },
};
import LAMetroMapClient from './lametromapclient';

export default function LAMetroMapPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
        { "@type": "ListItem", "position": 2, "name": "Los Angeles", "item": "https://www.travelsamericas.com/destination/la" },
        { "@type": "ListItem", "position": 3, "name": "LA Metro Map & Guide", "item": "https://www.travelsamericas.com/destination/la/la-metro-map" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "LA Metro Map: Rail Lines, Stations & Visitor Guide | Travels Americas",
      "description": "View the LA Metro map and plan trips to Hollywood, Santa Monica and other destinations. Find rail lines, transfers, fare information and LAX connections.",
      "url": "https://www.travelsamericas.com/destination/la/la-metro-map",
      "inLanguage": "en-US",
      "publisher": { "@type": "Organization", "name": "Travels Americas", "url": "https://www.travelsamericas.com" },
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LAMetroMapClient />
    </>
  );
}
