import Script from "next/script";

export const generateMetadata = () => ({
  title: 'Solo Trip to NYC 2026: What First-Timers Need to Know',
  description:  'A practical NYC solo travel guide: safest areas, transit tips, daily costs, and a 3-day itinerary. Written for first-timers who want honest answers, not hype.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
      canonical: 'https://www.travelsamericas.com/destination/nyc/solo-trip-to-nyc',
    },
    twitter: {
    card: "summary_large_image",
    title: 'Solo Trip to NYC 2026: What First-Timers Need to Know',
    description:  'A practical NYC solo travel guide: safest areas, transit tips, daily costs, and a 3-day itinerary. Written for first-timers who want honest answers, not hype.',
    images: ["https://www.travelsamericas.com/social/solo-trip-to-nyc-gritty.png"]
  }
});


import SoloTripNYCClient from './solotriptonycclient';
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Solo Trip to NYC (2026 Guide): Safety, Best Areas, Itinerary & Tips",
  "description": "Plan your solo trip to NYC with safe areas, transit tips, a 3‑day itinerary, and what to avoid.",
  "author": {
    "@type": "Person",
    "name": "Travels Americas Editorial Team"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Travels Americas",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.travelsamericas.com/logo.png"
    }
  },
  "mainEntityOfPage": "https://www.travelsamericas.com/destination/nyc/solo-trip-to-nyc"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is NYC safe for solo travelers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. NYC is one of the safest major U.S. cities when you stay in well‑lit areas, choose safe neighborhoods, and follow basic transit habits."
      }
    },
    {
      "@type": "Question",
      "name": "Where should I stay in NYC as a solo traveler?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Popular safe areas include the Upper West Side, Midtown, Brooklyn Heights, and Long Island City."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Plan a Solo Trip to NYC",
  "description": "A simple step‑by‑step guide to planning a safe and enjoyable solo trip to New York City.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Choose a safe neighborhood",
      "text": "Pick areas like the Upper West Side, Midtown, or Brooklyn Heights for comfort and walkability."
    },
    {
      "@type": "HowToStep",
      "name": "Plan your transit strategy",
      "text": "Use the subway during the day, avoid empty cars, and choose rideshare late at night."
    }
  ]
};
export default async function SoloTripToNYC() {
  

  return (
  <>
      {/* Schema blocks */}
      <script id="schema-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}/>
      <script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}/>
      <script id="schema-howto" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}/>
      
  <SoloTripNYCClient />
  </>
);
  
}
