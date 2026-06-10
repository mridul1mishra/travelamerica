export const metadata = {
  title: "Orlando Female Solo Travel Guide 2026",
  description: "Female solo travel guide for Orlando — safest areas, solo theme park tips, nightlife safety, and transport advice.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/orlando/orlando-female-solo-travel-guide' },
  openGraph: { title: 'Orlando Female Solo Travel Guide 2026', description: 'Honest guide for women traveling solo to Orlando — safety, parks, and practical advice.', url: 'https://www.travelsamericas.com/destination/orlando/orlando-female-solo-travel-guide', type: 'article' },
};
import OrlandoFemaleSoloClient from './orlandofemalesolotravelguideclient';

export default function OrlandoFemaleSoloPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
        { "@type": "ListItem", "position": 2, "name": "Orlando", "item": "https://www.travelsamericas.com/destination/orlando" },
        { "@type": "ListItem", "position": 3, "name": "Female Solo Travel Guide", "item": "https://www.travelsamericas.com/destination/orlando/orlando-female-solo-travel-guide" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Orlando Female Solo Travel Guide 2026",
      "description": "Female solo travel guide for Orlando — safest areas, solo theme park tips, nightlife safety, and transport advice.",
      "url": "https://www.travelsamericas.com/destination/orlando/orlando-female-solo-travel-guide",
      "inLanguage": "en-US",
      "publisher": { "@type": "Organization", "name": "Travels Americas", "url": "https://www.travelsamericas.com" },
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <OrlandoFemaleSoloClient />
    </>
  );
}
