export const metadata = {
  title: "Is New York Safe to Visit in 2026? Honest Safety Guide + Neighborhood Breakdown",
  description: "Is NYC safe? Real answer: yes, but here's the breakdown by neighborhood. Skip the tourism board fluff — actual street-level advice for first-time visitors.",
  alternates: { 
    canonical: "https://www.travelsamericas.com/destination/nyc/nyc-safety-guide"
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxImagePreview: "large",
      maxSnippet: -1,
      maxVideoPreview: -1
    }
  },

  openGraph: { 
    title: "Is NYC Safe in 2026? An Honest, Local's Take", 
    description: "Yes, NYC is safe — but with caveats. Get the real picture: which neighborhoods to trust, subway safety tips, scams to dodge, and what to do in an emergency.", 
    url: "https://www.travelsamericas.com/destination/nyc/nyc-safety-guide", 
    siteName: "Travels Americas", 
    type: "article", 
    locale: "en_US", 
    images: [ 
      { 
        url: "/data/metadataimage/nyc-safety-guide-og.webp", 
        width: 1200, 
        height: 630, 
        alt: "Minimalist NYC skyline with bold title: NYC Safety Guide"
      } 
    ] 
  },

  twitter: { 
    card: "summary_large_image", 
    title: "Is NYC Safe in 2026? An Honest, Local's Take", 
    description: "Yes, NYC is safe — but with caveats. Get the real picture: which neighborhoods to trust, subway safety tips, scams to dodge, and what to do in an emergency.", 
    images: [
      "/data/metadataimage/nyc-safety-guide-og.webp"
    ] 
  }
};




import NYCSafetyGuideClient from './nycsafetyguideclient';

export default function NYCSafetyGuide() {
  const GuideSchema = {
  "@context": "https://schema.org",
  "@type": "Guide",
  "name": "NYC Safety Guide for Solo Travelers",
  "description": "A practical, scenario-based safety guide for navigating New York City confidently.",
  "url": "https://www.travelsamericas.com/destination/nyc/nyc-safety-guide",
  "inLanguage": "en-US",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Travels Americas",
    "url": "https://www.travelsamericas.com"
  },
  "author": {
    "@type": "Organization",
    "name": "Travels Americas"
  }
}
  const FAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is New York City safe for tourists in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, NYC is generally safe for tourists in 2026 when basic precautions are followed. Most visitors stay in busy areas, use public transit safetly, and have trouble-free trips."
      }
    },
    {
      "@type": "Question",
      "name": "Which NYC neighborhoods should tourists avoid at night?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tourists should be cautious in unfamiliar or poorly lit areas late at night. Popular central neighborhoods are generally safe, but staying in populated areas and following local guidance is recommended"
      }
    },
    {
      "@type": "Question",
      "name": "Is the NYC subway safe at night?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Generally yes, but avoid empty platforms and late-night transfers in less busy stations. Wait near the conductor’s car."
      }
    },
    {
      "@type": "Question",
      "name": "Should I use rideshare or yellow cabs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both are safe. Rideshare apps offer tracking and driver info, while yellow cabs are regulated and easy to hail in Manhattan."
      }
    }
  ]
}
  const BreadCrumbList = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Destinations",
      "item": "https://www.travelsamericas.com/destination/nyc"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "New York City",
      "item": "https://www.travelsamericas.com/destination/nyc/solo-trip-to-nyc"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "NYC Safety Guide",
      "item": "https://www.travelsamericas.com/destination/nyc/nyc-safety-guide"
    }
  ]
}
const WebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "NYC Safety Guide for Solo Travelers",
  "url": "https://www.travelsamericas.com/destination/nyc/nyc-safety-guide",
  "description": "A calm, practical NYC safety guide for solo travelers with tips, scenarios, and neighborhood insights.",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Travels Americas",
    "url": "https://www.travelsamericas.com"
  }
}



  return (
  <>
  <script id="nyc-safety-guide-schema" type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify([GuideSchema, FAQSchema, BreadCrumbList, WebPage ])}} />
  <NYCSafetyGuideClient />
  </>
);
  
}
