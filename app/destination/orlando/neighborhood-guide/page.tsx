export const metadata = {
  title: "Orlando Neighborhood Guide 2026 | Where to Stay",
  description: "Guide to Orlando neighborhoods — International Drive, Lake Buena Vista, Kissimmee, Downtown Orlando, and what each offers.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/orlando/neighborhood-guide' },
  openGraph: { title: 'Orlando Neighborhood Guide 2026', description: 'Honest breakdown of every major Orlando neighborhood for visitors.', url: 'https://www.travelsamericas.com/destination/orlando/neighborhood-guide', type: 'website' },
};
import OrlandoNeighborhoodGuideClient from './orlandoneighborhoodguideclient';

export default function OrlandoNeighborhoodGuidePage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
        { "@type": "ListItem", "position": 2, "name": "Orlando", "item": "https://www.travelsamericas.com/destination/orlando" },
        { "@type": "ListItem", "position": 3, "name": "Neighborhood Guide", "item": "https://www.travelsamericas.com/destination/orlando/neighborhood-guide" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Orlando Neighborhood Guide 2026 | Where to Stay",
      "description": "Guide to Orlando neighborhoods — International Drive, Lake Buena Vista, Kissimmee, Downtown Orlando, and what each offers.",
      "url": "https://www.travelsamericas.com/destination/orlando/neighborhood-guide",
      "inLanguage": "en-US",
      "publisher": { "@type": "Organization", "name": "Travels Americas", "url": "https://www.travelsamericas.com" },
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <OrlandoNeighborhoodGuideClient />
    </>
  );
}
