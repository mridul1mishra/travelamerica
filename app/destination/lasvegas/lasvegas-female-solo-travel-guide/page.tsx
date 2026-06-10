export const metadata = {
  title: "Las Vegas Female Solo Travel Guide 2026",
  description: "Female solo travel guide for Las Vegas — safest areas, nightlife safety, casino tips, transport, and what to expect.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/lasvegas/lasvegas-female-solo-travel-guide' },
  openGraph: { title: 'Las Vegas Female Solo Travel Guide 2026', description: 'Honest guide for women traveling solo to Las Vegas — safety, casinos, nightlife, and practical advice.', url: 'https://www.travelsamericas.com/destination/lasvegas/lasvegas-female-solo-travel-guide', type: 'article' },
};
import LasVegasFemaleSoloClient from './lasvegasfemalesolotravelguideclient';

export default function LasVegasFemaleSoloPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
        { "@type": "ListItem", "position": 2, "name": "Las Vegas", "item": "https://www.travelsamericas.com/destination/lasvegas" },
        { "@type": "ListItem", "position": 3, "name": "Female Solo Travel Guide", "item": "https://www.travelsamericas.com/destination/lasvegas/lasvegas-female-solo-travel-guide" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Las Vegas Female Solo Travel Guide 2026",
      "description": "Female solo travel guide for Las Vegas — safest areas, nightlife safety, casino tips, transport, and what to expect.",
      "url": "https://www.travelsamericas.com/destination/lasvegas/lasvegas-female-solo-travel-guide",
      "inLanguage": "en-US",
      "publisher": { "@type": "Organization", "name": "Travels Americas", "url": "https://www.travelsamericas.com" },
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LasVegasFemaleSoloClient />
    </>
  );
}
