export const metadata = {
  title: 'Is Orlando Safe for Tourists? 2026 Safety Guide',
  description: 'Honest Orlando safety guide — which areas to avoid, theme park safety, Florida heat and sun tips, tourist scams, and what solo travelers should know.',
  alternates: { canonical: 'https://www.travelsamericas.com/destination/orlando/safety-guide' },
  openGraph: { title: 'Is Orlando Safe in 2026?', description: 'Real Orlando safety advice for tourists — areas, scams, heat, and driving.', url: 'https://www.travelsamericas.com/destination/orlando/safety-guide', type: 'website' },
};
import OrlandoSafetyClient from './orlandosafetyclient';

export default function OrlandoSafetyPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
        { "@type": "ListItem", "position": 2, "name": "Orlando", "item": "https://www.travelsamericas.com/destination/orlando" },
        { "@type": "ListItem", "position": 3, "name": "Safety Guide", "item": "https://www.travelsamericas.com/destination/orlando/safety-guide" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Is Orlando Safe for Tourists? 2026 Safety Guide",
      "description": "Honest Orlando safety guide — which areas to avoid, theme park safety, Florida heat and sun tips, tourist scams, and what solo travelers should know.",
      "url": "https://www.travelsamericas.com/destination/orlando/safety-guide",
      "inLanguage": "en-US",
      "publisher": { "@type": "Organization", "name": "Travels Americas", "url": "https://www.travelsamericas.com" },
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <OrlandoSafetyClient />
    </>
  );
}
