export const metadata = {
  title: "LA Group Travel Guide 2026 | Tips for Groups of 4–20",
  description: "Planning a group trip to LA? Covers group hotels, activities, transport logistics, and how to split costs without drama.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/la/group-travel' },
  openGraph: { title: 'Los Angeles Group Travel Guide 2026', description: 'How to plan a group trip to LA — transport, accommodation, activities and logistics.', url: 'https://www.travelsamericas.com/destination/la/group-travel', type: 'website' },
};
import LAGroupTravelClient from './lagrouptravelclient';

export default function LAGroupTravelPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
        { "@type": "ListItem", "position": 2, "name": "Los Angeles", "item": "https://www.travelsamericas.com/destination/la" },
        { "@type": "ListItem", "position": 3, "name": "Group Travel Guide", "item": "https://www.travelsamericas.com/destination/la/group-travel" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "LA Group Travel Guide 2026 | Tips for Groups of 4–20",
      "description": "Planning a group trip to LA? Covers group hotels, activities, transport logistics, and how to split costs without drama.",
      "url": "https://www.travelsamericas.com/destination/la/group-travel",
      "inLanguage": "en-US",
      "publisher": { "@type": "Organization", "name": "Travels Americas", "url": "https://www.travelsamericas.com" },
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LAGroupTravelClient />
    </>
  );
}
