export const metadata = {
  title: 'Las Vegas Group Travel Guide 2026 | Tips for Groups of 4–20',
  description: 'Planning a group trip to Las Vegas? Covers group hotels, activities, transport, bachelor and bachelorette tips, and managing logistics on the Strip.',
  alternates: { canonical: 'https://www.travelsamericas.com/destination/lasvegas/group-travel' },
  openGraph: { title: 'Las Vegas Group Travel Guide 2026', description: 'How to plan a group trip to Las Vegas — hotels, activities, transport and logistics.', url: 'https://www.travelsamericas.com/destination/lasvegas/group-travel', type: 'website' },
};
import LasVegasGroupTravelClient from './lasvegasgrouptravelclient';

export default function LasVegasGroupTravelPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
        { "@type": "ListItem", "position": 2, "name": "Las Vegas", "item": "https://www.travelsamericas.com/destination/lasvegas" },
        { "@type": "ListItem", "position": 3, "name": "Group Travel Guide", "item": "https://www.travelsamericas.com/destination/lasvegas/group-travel" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Las Vegas Group Travel Guide 2026 | Tips for Groups of 4–20",
      "description": "Planning a group trip to Las Vegas? Covers group hotels, activities, transport, bachelor and bachelorette tips, and managing logistics on the Strip.",
      "url": "https://www.travelsamericas.com/destination/lasvegas/group-travel",
      "inLanguage": "en-US",
      "publisher": { "@type": "Organization", "name": "Travels Americas", "url": "https://www.travelsamericas.com" },
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LasVegasGroupTravelClient />
    </>
  );
}
