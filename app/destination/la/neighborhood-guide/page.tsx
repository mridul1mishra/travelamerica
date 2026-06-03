export const metadata = {
  title: "LA Neighborhood Guide 2026 | Which Area Is Right?",
  description: "Complete guide to LA neighborhoods — Silver Lake, Venice, DTLA, Beverly Hills, Koreatown and more. Which area fits you.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/la/neighborhood-guide' },
  openGraph: { title: 'Los Angeles Neighborhood Guide 2026', description: 'What every LA neighborhood is really like — the honest guide for visitors.', url: 'https://www.travelsamericas.com/destination/la/neighborhood-guide', type: 'website' },
};
import LANeighborhoodGuideClient from './laneighborhoodguideclient';

export default function LANeighborhoodGuidePage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
        { "@type": "ListItem", "position": 2, "name": "Los Angeles", "item": "https://www.travelsamericas.com/destination/la" },
        { "@type": "ListItem", "position": 3, "name": "Neighborhood Guide", "item": "https://www.travelsamericas.com/destination/la/neighborhood-guide" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "LA Neighborhood Guide 2026 | Which Area Is Right?",
      "description": "Complete guide to LA neighborhoods — Silver Lake, Venice, DTLA, Beverly Hills, Koreatown and more. Which area fits you.",
      "url": "https://www.travelsamericas.com/destination/la/neighborhood-guide",
      "inLanguage": "en-US",
      "publisher": { "@type": "Organization", "name": "Travels Americas", "url": "https://www.travelsamericas.com" },
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LANeighborhoodGuideClient />
    </>
  );
}
