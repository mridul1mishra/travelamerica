export const metadata = {
  title: 'Is Las Vegas Safe? 2026 Safety Guide for Tourists',
  description: 'Honest Las Vegas safety guide — which areas to avoid, common tourist scams, Strip safety at night, extreme heat tips, and what to do in an emergency.',
  alternates: { canonical: 'https://www.travelsamericas.com/destination/lasvegas/safety-guide' },
  openGraph: { title: 'Is Las Vegas Safe in 2026?', description: 'Real Las Vegas safety advice — scams, neighborhoods, heat, and nightlife safety.', url: 'https://www.travelsamericas.com/destination/lasvegas/safety-guide', type: 'website' },
};
import LasVegasSafetyClient from './lasvegassafetyclient';

export default function LasVegasSafetyPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
        { "@type": "ListItem", "position": 2, "name": "Las Vegas", "item": "https://www.travelsamericas.com/destination/lasvegas" },
        { "@type": "ListItem", "position": 3, "name": "Safety Guide", "item": "https://www.travelsamericas.com/destination/lasvegas/safety-guide" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Is Las Vegas Safe? 2026 Safety Guide for Tourists",
      "description": "Honest Las Vegas safety guide — which areas to avoid, common tourist scams, Strip safety at night, extreme heat tips, and what to do in an emergency.",
      "url": "https://www.travelsamericas.com/destination/lasvegas/safety-guide",
      "inLanguage": "en-US",
      "publisher": { "@type": "Organization", "name": "Travels Americas", "url": "https://www.travelsamericas.com" },
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LasVegasSafetyClient />
    </>
  );
}
