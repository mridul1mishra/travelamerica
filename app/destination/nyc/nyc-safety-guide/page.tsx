

export const metadata = {
  title: "NYC Solo Female Safety Guide 2026 | Tips, Areas & Scenarios",
  description: "A practical NYC safety guide for solo women. Learn safe areas, subway tips, night safety, and what to do in real situations.", 
  alternates: { 
    canonical: "https://www.travelamerica.work/destination/nyc/nyc-solo-female-travel-safety-guide"
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
    title: "NYC Solo Female Travel Safety Guide (2026)", 
    description: "A calm, practical, scenario-based NYC safety guide for solo female travelers. Learn safe areas, subway safety, night safety, and what to do in real situations.", 
    url: "https://www.travelamerica.work/destination/nyc/nyc-solo-female-travel-safety-guide", 
    siteName: "Travel America", 
    type: "article", 
    locale: "en_US", 
    images: [ { 
      url: "https://www.travelamerica.work/data/majorcities/newyork/assets/safety/nyc-safety-guide.png", 
      width: 1200, 
      height: 630, 
      alt: "NYC Solo Female Travel Safety Guide" 
    } 
  ] 
},

  twitter: { 
    card: "summary_large_image", 
    title: "NYC Solo Female Travel Safety Guide (2026)", 
    description: "Practical, scenario-based safety advice for solo women navigating New York City confidently.", 
    images: [
    "https://www.travelamerica.work/data/majorcities/newyork/assets/safety/nyc-safety-guide.png"
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
      "name": "Is New York City safe for solo travelers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, NYC is generally safe for solo travelers who stay aware and follow basic precautions. Stick to well-lit streets, avoid isolated areas late at night, and trust your instincts."
      }
    },
    {
      "@type": "Question",
      "name": "Which NYC neighborhoods should I avoid at night?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Avoid desolate areas in the far west of Midtown, parts of the South Bronx, and isolated industrial zones in Brooklyn. Stick to populated, well-lit areas."
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
