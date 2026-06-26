import SoloTripNYCClient from "./solotriptonycclient";

export const generateMetadata = () => ({
  title: "Solo Trip to NYC Guide: Safety, Best Areas to Stay, Budget Tips & Itinerary",
  description: "Planning a solo trip to NYC? Learn where to stay, how to ride the subway safely, what to avoid, airport transfer options, budget tips, and the best things to do alone in New York City.",
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "https://www.travelsamericas.com/destination/nyc/solo-trip-to-nyc"
  },
  twitter: {
    card: "summary_large_image",
    title: "Solo Trip to NYC Guide: Safety, Best Areas to Stay, Budget Tips & Itinerary",
    description: "Planning a solo trip to NYC? Learn where to stay, how to ride the subway safely, what to avoid, airport transfer options, budget tips, and the best things to do alone in New York City.",
    images: ["https://www.travelsamericas.com/social/solo-trip-to-nyc-gritty.png"]
  },
  openGraph: {
    title: "Solo Trip to NYC Guide: Safety, Best Areas to Stay, Budget Tips & Itinerary",
    description: "Planning a solo trip to NYC? Learn where to stay, how to ride the subway safely, what to avoid, airport transfer options, budget tips, and the best things to do alone in New York City.",
    url: "https://www.travelsamericas.com/destination/nyc/solo-trip-to-nyc",
    type: "article",
    siteName: "Travels Americas",
    images: [{ url: "https://www.travelsamericas.com/social/solo-trip-to-nyc-gritty.png", width: 1200, height: 630 }]
  }
});

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Solo Trip to NYC Guide: Safety, Best Areas to Stay, Budget Tips & Itinerary",
  description: "Plan your solo trip to NYC with safe areas, subway tips, airport transfer options, scam warnings, budget timing, and a practical itinerary.",
  dateModified: "2026-06-26",
  author: {
    "@type": "Person",
    name: "Travels Americas Editorial Team",
    url: "https://www.travelsamericas.com/about"
  },
  publisher: {
    "@type": "Organization",
    name: "Travels Americas",
    logo: {
      "@type": "ImageObject",
      url: "https://www.travelsamericas.com/logo.png"
    }
  },
  mainEntityOfPage: "https://www.travelsamericas.com/destination/nyc/solo-trip-to-nyc"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is NYC safe for solo travelers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. New York City is generally a strong solo-travel destination when you stay in busy, well-lit areas, choose a practical neighborhood, and follow basic subway and street-safety habits."
      }
    },
    {
      "@type": "Question",
      name: "Where should I stay in NYC as a solo traveler?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "First-time solo travelers usually do best in convenient, transit-rich areas such as the Upper West Side, Midtown, Brooklyn Heights, or Long Island City."
      }
    },
    {
      "@type": "Question",
      name: "Is MetroCard still the best option for tourists?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MetroCard sales and refills ended on January 1, 2026, and OMNY contactless payment is the standard way for most visitors to ride the subway and local buses."
      }
    },
    {
      "@type": "Question",
      name: "How can I save money on NYC transit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use the same OMNY card or device for every ride. After 12 paid subway or local-bus rides in a 7-day period, additional eligible rides are free for that week."
      }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "NYC Travel",
      item: "https://www.travelsamericas.com/destination/nyc"
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Solo Trip to NYC",
      item: "https://www.travelsamericas.com/destination/nyc/solo-trip-to-nyc"
    }
  ]
};

export default async function SoloTripToNYC() {
  return (
    <>
      <script id="schema-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="schema-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SoloTripNYCClient />
    </>
  );
}
