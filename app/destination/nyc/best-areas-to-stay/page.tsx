import Script from "next/script";

export const generateMetadata = () => ({
  title: 'Best Areas to Stay in NYC 2026: Safest & Most Convenient',
  description:  'Find the best areas to stay in NYC for safety, convenience, and first‑time visitors. Compare top neighborhoods with pros, cons, and transit tips.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
      canonical: 'https://www.travelamerica.work/destination/solo-trip-to-nyc',
    },
    twitter: {
    card: "summary_large_image",
    title: 'Best Areas to Stay in NYC 2026: Safest & Most Convenient',
    description:  'Find the best areas to stay in NYC for safety, convenience, and first‑time visitors. Compare top neighborhoods with pros, cons, and transit tips.',
    images: ["https://www.travelamerica.work/social/solo-trip-to-nyc-gritty.png"]
  }
});


import BestAreatoStatyClient from './bestareastostayclient';

export default async function SoloTripToNYC() {
  const schemaObject = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Best Areas to Stay in NYC (2026): Safest & Most Convenient Neighborhoods",
  "description": "Find the best areas to stay in NYC for 2026, with safe, convenient neighborhoods ideal for solo and first-time travelers. Compare pros, cons, vibes, and subway access.",
  "author": {
    "@type": "Person",
    "name": "Mridul"
  },
  "datePublished": "2026-01-01",
  "mainEntity": {
    "@type": "ItemList",
    "name": "Best Areas to Stay in NYC",
    "itemListOrder": "https://schema.org/ItemListOrderAscending",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Upper West Side",
        "description": "Safest and calmest NYC neighborhood for solo travelers, with excellent walkability and access to Central Park."
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Midtown East",
        "description": "Convenient and transit-rich area ideal for first-time visitors who want fast access to major attractions."
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Williamsburg",
        "description": "Trendy, youthful neighborhood with great food, nightlife, and easy access to Manhattan via the L train."
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Long Island City",
        "description": "Affordable, quiet, and modern neighborhood with skyline views and quick subway access to Manhattan."
      }
    ]
  }
};


  return (
  <>
      {/* Schema blocks */}
  <BestAreatoStatyClient />
    <Script id="schema-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObject) }}/>
      
  </>
);
  
}
