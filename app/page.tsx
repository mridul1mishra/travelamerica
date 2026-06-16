import Home from "./home";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Travels Americas | Discover Iconic Cities to Visit",
  description: "Discover curated city guides for Las Vegas, Orlando, New York, and Los Angeles. Explore culture, food, and attractions.",
  alternates: {
    canonical: "https://www.travelsamericas.com/",
  },
  openGraph: {
    title: "Travels Americas | Discover Iconic Cities to Visit",
    description: "Discover carefully selected city guides for Las Vegas, Orlando, New York, and Los Angeles. Explore culture, food, and attractions with insider insights",
    url: "https://www.travelsamericas.com",
    siteName: "Travels Americas",
    images: [
      {
        url: "https://www.travelsamericas.com/data/home/banner_new.webp",
        width: 1536,
        height: 1024,
        alt: "Travels Americas homepage",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travels Americas | Discover Iconic Cities to Visit",
    description: "Discover carefully selected city guides for Las Vegas, Orlando, New York, and Los Angeles. Explore culture, food, and attractions with insider insights",
    images: ["https://www.travelsamericas.com/data/home/banner_new.webp"],
  },
};


// Schema markup (moved from home.tsx)
const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.travelsamericas.com/travel",
      "url": "https://www.travelsamericas.com/travel",
      "name": "Travel Hub",
      "description": "Your ultimate travel hub with guides, itineraries, landmarks, food, and safety tips for major cities.",
      "inLanguage": "en",
      "isPartOf": {
        "@id": "https://www.travelsamericas.com/#organization"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.travelsamericas.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Travel Hub",
            "item": "https://www.travelsamericas.com/travel"
          }
        ]
      }
    },
    {
      "@type": "Organization",
      "@id": "https://www.travelsamericas.com/#organization",
      "name": "Travels Americas",
      "url": "https://www.travelsamericas.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.travelsamericas.com/data/logo.png"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-737-278-6292",
        "contactType": "customer service",
        "areaServed": "US",
        "availableLanguage": ["en"]
      }
    }
  ]
};

export default function Page() {
  return <Home />;
}
