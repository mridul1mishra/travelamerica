export const metadata = {
  title: 'Las Vegas Neighborhood Guide 2026 | Strip, Downtown & Beyond',
  description: "Complete guide to Las Vegas neighborhoods — Mid-Strip, Downtown Fremont, Summerlin, Henderson, and what each area offers.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/lasvegas/neighborhood-guide' },
  openGraph: { title: 'Las Vegas Neighborhood Guide 2026', description: 'Honest breakdown of every major Las Vegas neighborhood for visitors.', url: 'https://www.travelsamericas.com/destination/lasvegas/neighborhood-guide', type: 'article' },
};
import LasVegasNeighborhoodGuideClient from './lasvegasneighborhoodguideclient';

export default function LasVegasNeighborhoodGuidePage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
        { "@type": "ListItem", "position": 2, "name": "Las Vegas", "item": "https://www.travelsamericas.com/destination/lasvegas" },
        { "@type": "ListItem", "position": 3, "name": "Neighborhood Guide", "item": "https://www.travelsamericas.com/destination/lasvegas/neighborhood-guide" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Las Vegas Neighborhood Guide 2026 | Strip, Downtown & Beyond",
      "description": "Complete guide to Las Vegas neighborhoods — Mid-Strip, Downtown Fremont, Summerlin, Henderson, and what each area offers.",
      "url": "https://www.travelsamericas.com/destination/lasvegas/neighborhood-guide",
      "inLanguage": "en-US",
      "publisher": { "@type": "Organization", "name": "Travels Americas", "url": "https://www.travelsamericas.com" },
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LasVegasNeighborhoodGuideClient />
    </>
  );
}
