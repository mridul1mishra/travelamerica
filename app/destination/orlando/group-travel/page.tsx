export const metadata = {
  title: "Orlando Group Travel Guide 2026 | Theme Park Tips",
  description: "Planning a group trip to Orlando? Covers group hotels, park ticket strategies, transport logistics, and cost splitting.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/orlando/group-travel' },
  openGraph: { title: 'Orlando Group Travel Guide 2026', description: 'How to plan a group trip to Orlando — hotels, park tickets, transport and logistics.', url: 'https://www.travelsamericas.com/destination/orlando/group-travel', type: 'article' },
};
import OrlandoGroupTravelClient from './orlandogrouptravelclient';

export default function OrlandoGroupTravelPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
        { "@type": "ListItem", "position": 2, "name": "Orlando", "item": "https://www.travelsamericas.com/destination/orlando" },
        { "@type": "ListItem", "position": 3, "name": "Group Travel Guide", "item": "https://www.travelsamericas.com/destination/orlando/group-travel" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Orlando Group Travel Guide 2026 | Theme Park Tips",
      "description": "Planning a group trip to Orlando? Covers group hotels, park ticket strategies, transport logistics, and cost splitting.",
      "url": "https://www.travelsamericas.com/destination/orlando/group-travel",
      "inLanguage": "en-US",
      "publisher": { "@type": "Organization", "name": "Travels Americas", "url": "https://www.travelsamericas.com" },
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <OrlandoGroupTravelClient />
    </>
  );
}
