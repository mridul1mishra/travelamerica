import { LANDMARKS } from './landmarks-data';

export const generateMetadata = () => ({
  title: 'NYC Landmarks Guide: 9 Must-See Sights with Hours, Prices & Tips',
  description: "Practical guide to NYC's 9 top landmarks — Statue of Liberty, Empire State Building, Central Park, Brooklyn Bridge. Hours, prices, and subway directions.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.travelsamericas.com/destination/nyc/landmark',
  },
  twitter: {
    card: "summary_large_image",
    title: "NYC Landmarks Guide: 9 Must-See Sights with Hours, Prices & Tips",
    description: "Practical guide to NYC's 9 top landmarks — Statue of Liberty, Empire State Building, Central Park, Brooklyn Bridge. Hours, prices, and subway directions.",
    images: ["https://www.travelsamericas.com/data/majorcities/newyork/assets/statue-of-liberty.webp"]
  },
  openGraph: {
    title: 'NYC Landmarks Guide: 9 Must-See Sights with Hours, Prices & Tips',
    description: "Practical guide to NYC's 9 top landmarks — Statue of Liberty, Empire State Building, Central Park, Brooklyn Bridge. Hours, prices, and subway directions.",
    url: 'https://www.travelsamericas.com/destination/nyc/landmark',
    type: 'article',
    siteName: 'Travels Americas',
    images: [{ url: "https://www.travelsamericas.com/data/majorcities/newyork/assets/statue-of-liberty.webp", width: 1200, height: 630 }],
  }
});

import LandmarkClientPage from './landmarkclient';


// Schema markup (moved from client component)
const article = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "NYC Landmarks Guide: 9 Must-See Sights with Hours, Prices & Tips",
  "description": "Practical guide to New York City\'s 9 top landmarks — Statue of Liberty, Empire State Building, Central Park, Brooklyn Bridge and more. Hours, prices, and subway directions.",
  "url": "https://www.travelsamericas.com/destination/nyc/landmark",
  "inLanguage": "en-US",
  "image": "https://www.travelsamericas.com/data/majorcities/newyork/assets/statue-of-liberty.webp",
  "author": { "@type": "Organization", "name": "Travels Americas", "url": "https://www.travelsamericas.com" },
  "publisher": {
    "@type": "Organization",
    "name": "Travels Americas",
    "logo": { "@type": "ImageObject", "url": "https://www.travelsamericas.com/logo.png" },
  },
  "datePublished": "2025-10-05",
  "dateModified": "2026-06-03",
};

const touristAttractions = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "NYC Tourist Attractions",
  "itemListElement": LANDMARKS.map((l, i) => ({
    "@type": "TouristAttraction",
    "name": l.name,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": l.address,
      "addressLocality": "New York",
      "addressRegion": "NY",
      "addressCountry": "US",
    },
    "position": i + 1,
  })),
};

const itemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Top NYC Landmarks Solo Travel Guide",
  "itemListOrder": "Unordered",
  "itemListElement": LANDMARKS.map((l, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "name": l.name,
    "description": l.whatToDo,
  })),
};

const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What NYC landmarks are most worth visiting on a first trip?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For a first NYC trip, prioritize: Statue of Liberty + Ellis Island (half day), Empire State Building or Top of the Rock for skyline views (pick one), the 9/11 Memorial & Museum, Central Park, the Brooklyn Bridge walk, and a Broadway show. That's a comfortable 4-5 day itinerary."
      },
    },
    {
      "@type": "Question",
      "name": "Should I visit the Empire State Building or Top of the Rock?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Top of the Rock is generally recommended over the Empire State Building for first-time visitors because the Empire State Building is in the view from Top of the Rock (you can't see it from Empire State because you're standing on it). Empire State is iconic; Top of the Rock is the better photo."
      },
    },
    {
      "@type": "Question",
      "name": "Is the Statue of Liberty crown worth booking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The crown access is a separate timed ticket that usually books out 2-3 months ahead, requires climbing 354 narrow stairs with no elevator, and the view from inside the crown is small. Most visitors are better served by the standard ferry plus grounds and pedestal access. Skip the crown unless you specifically want to say you did it."
      },
    },
    {
      "@type": "Question",
      "name": "Are there any free NYC landmarks worth visiting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes: Central Park, the Brooklyn Bridge walk, the 9/11 Memorial plaza (the museum is paid), the Staten Island Ferry (free, passes the Statue of Liberty), Grand Central Terminal, the New York Public Library's main branch, Bryant Park, the High Line, Washington Square Park, and Times Square at night. You can have an excellent NYC day for $0."
      },
    },
    {
      "@type": "Question",
      "name": "How much time do NYC landmarks take to visit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Plan for half a day per major attraction (Statue of Liberty, 9/11 Museum, Met Museum) and 1-2 hours per observation deck (Empire State, Top of the Rock). Free walking landmarks (Brooklyn Bridge, High Line, Central Park sections) can be combined into single-day routes. Don't try to do more than two paid attractions in a day - logistics and lines make it exhausting."
      },
    },
    {
      "@type": "Question",
      "name": "Which NYC landmark is best for solo travelers specifically?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Metropolitan Museum of Art on a Friday or Saturday evening (open until 9 PM, dramatically less crowded than daytime). Museums are the ideal solo activity because there's no pace negotiation, no awkwardness eating alone, and you can leave whenever. The Met's rooftop bar at sunset, in season, is one of NYC's best solo experiences."
      },
    },
  ],
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
    { "@type": "ListItem", "position": 2, "name": "New York", "item": "https://www.travelsamericas.com/destination/nyc/" },
    { "@type": "ListItem", "position": 3, "name": "Landmarks", "item": "https://www.travelsamericas.com/destination/nyc/landmark" },
  ],
};

export default function LandmarkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractions) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <LandmarkClientPage />
    </>
  );
}
