import Script from "next/script";

export const generateMetadata = () => ({
  title: 'Solo Trip to NYC (2026 Guide): Safety, Itinerary, Neighborhoods & Tips',
  description:  'Solo Trip to NYC (2026 Guide): Safety, Itinerary, Neighborhoods & Tips',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
      canonical: 'https://www.travelamerica.work/destination/solo-trip-to-nyc',
    },
    twitter: {
    card: "summary_large_image",
    title: 'Solo Trip to NYC (2026 Guide): Safety, Itinerary, Neighborhoods & Tips',
    description:  'Plan your NYC solo trip with safe areas, smart transit tips, and a simple 3‑day itinerary.',
    images: ["https://www.travelamerica.work/social/solo-trip-to-nyc-gritty.png"]
  }
});


import SoloTripNYCClient from './solotriptonycclient';
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Solo Trip to NYC (2025 Guide): Safety, Best Areas, Itinerary & Tips",
  "description": "Plan your solo trip to NYC with safe areas, transit tips, a 3‑day itinerary, and what to avoid.",
  "author": {
    "@type": "Person",
    "name": "Travel America Editorial Team"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Travel America",
    "logo": {
      "@type": "ImageObject",
      "url": "https://yourdomain.com/logo.png"
    }
  },
  "mainEntityOfPage": "https://yourdomain.com/solo-trip-to-nyc"
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
      <script id="schema-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}/>
      <script id="schema-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}/>
      
  <SoloTripNYCClient />
  </>
);
  
}
