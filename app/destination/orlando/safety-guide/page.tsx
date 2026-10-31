export const metadata = {
  title: 'Orlando Travel Safety Guide: Heat, Driving & Scams',
  description: 'Practical Orlando safety advice for visitors, including Florida heat, driving, protecting your belongings, tourist scams, and emergency resources.',
  alternates: { canonical: 'https://www.travelsamericas.com/destination/orlando/safety-guide' },
  openGraph: { title: 'Orlando Travel Safety Guide: Heat, Driving & Scams', description: 'Practical advice on heat, driving, belongings, scams, and emergency resources for Orlando visitors.', url: 'https://www.travelsamericas.com/destination/orlando/safety-guide', type: 'article' },
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
      "headline": "Orlando Travel Safety Guide for Visitors",
      "description": "Practical Orlando safety advice for visitors, including Florida heat, driving, protecting your belongings, tourist scams, and emergency resources.",
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
