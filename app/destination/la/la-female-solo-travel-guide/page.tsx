export const metadata = {
  title: "LA Female Solo Travel Guide 2026 | Safe & Honest",
  description: "Female solo travel guide for Los Angeles — safest neighborhoods, solo dining, nightlife safety, and transport tips.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/la/la-female-solo-travel-guide' },
  openGraph: { title: 'LA Female Solo Travel Guide 2026', description: 'Honest guide for women traveling solo to Los Angeles — safety, neighborhoods, and practical advice.', url: 'https://www.travelsamericas.com/destination/la/la-female-solo-travel-guide', type: 'website' },
};
import LAFemaleSoloClient from './lafemalesolotravelguideclient';

export default function LAFemaleSoloPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
        { "@type": "ListItem", "position": 2, "name": "Los Angeles", "item": "https://www.travelsamericas.com/destination/la" },
        { "@type": "ListItem", "position": 3, "name": "Female Solo Travel Guide", "item": "https://www.travelsamericas.com/destination/la/la-female-solo-travel-guide" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "LA Female Solo Travel Guide 2026 | Safe & Honest",
      "description": "Female solo travel guide for Los Angeles — safest neighborhoods, solo dining, nightlife safety, and transport tips.",
      "url": "https://www.travelsamericas.com/destination/la/la-female-solo-travel-guide",
      "inLanguage": "en-US",
      "publisher": { "@type": "Organization", "name": "Travels Americas", "url": "https://www.travelsamericas.com" },
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LAFemaleSoloClient />
    </>
  );
}
