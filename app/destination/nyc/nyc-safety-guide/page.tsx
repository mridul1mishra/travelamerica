export const metadata = {
  title: "Is New York City Safe for Tourists in 2026? Safety Tips and What to know",
  description: "Planning a trip to New York City? Learn how safe New York city is for tourist in 2026, which areas are safest, and practical tips to stay confident while visiting.", 
  
  alternates: { 
    canonical: "https://www.travelamerica.work/destination/nyc/nyc-safety-guide"
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
    title: "NYC Safety Guide (2026)", 
    description: "Navigate NYC confidently with a practical, scenario-based safety guide — neighborhoods, subway tips, scams, and emergency steps.", 
    url: "https://www.travelamerica.work/destination/nyc/nyc-safety-guide", 
    siteName: "Travel America", 
    type: "article", 
    locale: "en_US", 
    images: [ 
      { 
        url: "nyc-safety-guide-og.png", 
        width: 1200, 
        height: 630, 
        alt: "Minimalist NYC skyline with bold title: NYC Safety Guide"
      } 
    ] 
  },

  twitter: { 
    card: "summary_large_image", 
    title: "NYC Safety Guide (2026)", 
    description: "A calm, practical NYC safety guide for solo travelers — neighborhoods, subway safety, scams, and emergency steps.", 
    images: [
      "\data\metadataimage\nyc-safety-guide-og.png"
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
  "url": "https://yourdomain.com/destination/nyc/nyc-safety-guide",
  "inLanguage": "en-US",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Your Brand Name",
    "url": "https://yourdomain.com"
  },
  "author": {
    "@type": "Organization",
    "name": "Your Brand Name"
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
      "item": "https://www.travelamerica.com/majorcities/newyork"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "New York City",
      "item": "https://www.travelamerica.work/destination/nyc/solo-trip-to-nyc"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "NYC Safety Guide",
      "item": "https://www.travelamerica.work/destination/nyc/nyc-safety-guide"
    }
  ]
}
const WebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "NYC Safety Guide for Solo Travelers",
  "url": "https://www.travelamerica.work/destination/nyc/nyc-safety-guide",
  "description": "A calm, practical NYC safety guide for solo travelers with tips, scenarios, and neighborhood insights.",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Travel America",
    "url": "https://www.travelamerica.work"
  }
}



  return (
  <>
  <script id="nyc-safety-guide-schema" type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify([GuideSchema, FAQSchema, BreadCrumbList, WebPage ])}} />
  <NYCSafetyGuideClient />
  </>
);
  
}
