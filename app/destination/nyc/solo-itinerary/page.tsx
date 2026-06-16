export const generateMetadata = () => ({
  title: "NYC Solo Itinerary 2026: 3-Day Plan with Safe Areas & Local Tips",
  description:  "A 3-day NYC solo itinerary for 2026 — where to stay, what to skip, how much to budget, and the neighborhoods that actually work for solo travelers.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
      canonical: 'https://www.travelsamericas.com/destination/nyc/solo-itinerary',
    },
    twitter: {
    card: "summary_large_image",
    title: "NYC Solo Itinerary 2026: 3-Day Plan with Safe Areas & Local Tips",
    description: "A 3-day NYC solo itinerary for 2026 — where to stay, what to skip, how much to budget, and the neighborhoods that actually work for solo travelers.",
    images: ["https://www.travelsamericas.com/data/majorcities/newyork/assets/solo-travel-itinerary.png"]
  },
  openGraph: {
    title: "NYC Solo Itinerary 2026: 3-Day Plan with Safe Areas & Local Tips",
    description: "A 3-day NYC solo itinerary for 2026 — where to stay, what to skip, how much to budget, and the neighborhoods that actually work for solo travelers.",
    url: 'https://www.travelsamericas.com/destination/nyc/solo-itinerary',
    type: 'article',
    siteName: 'Travels Americas',
    images: [{ url: "https://www.travelsamericas.com/data/majorcities/newyork/assets/solo-travel-itinerary.png", width: 1200, height: 630 }],
  }
});

import nycItineraryFaq from '@/content/destination/nyc/solo-itinerary/faq/itineraryfaq.json';
import SoloItineraryClient from './soloitineraryclient';


// Schema markup (moved from client component)
const schema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "name": "Solo Travel Itinerary for New York City",
  "description": "Explore NYC solo with this 3-day itinerary covering landmarks, neighborhoods, and Brooklyn vibes.",
  "touristType": {"@type": "Audience", "name": "Solo Travelers" },
  "about": [{"@type": "Thing","name": "Solo Travel" }, {"@type": "Place", "name": "New York City"}],
  "mainEntityOfPage": {
"@type": "WebPage",
"name": "Solo NYC Travel Itinerary",
"url": "https://www.travelsamericas.com/destination/nyc/solo-itinerary"
  },
  "image": {
"@type": "ImageObject",
"url": "https://www.travelsamericas.com/data/majorcities/newyork/assets/solo-travel-itinerary.png",
"height": 600,
"width": 1200
  },
  "provider": {
"@type": "Organization",
"name": "Travels Americas",
"url": "https://www.travelsamericas.com",
"logo": "https://www.travelsamericas.com/data/logo3.png"
  }
};

const schema1 = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
{
  "@type": "Question",
  "name": "Is New York City safe for solo travelers?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Yes, NYC is generally safe for solo travelers if you stay aware of your surroundings, avoid isolated areas late at night, and use common sense in busy neighborhoods."
  }
},
{
  "@type": "Question",
  "name": "What is the best 3-day solo itinerary for New York City?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "A popular 3-day solo itinerary includes: Day 1 exploring Manhattan landmarks like Times Square and Central Park, Day 2 visiting museums and neighborhoods such as SoHo and Greenwich Village, and Day 3 discovering Brooklyn highlights like the Brooklyn Bridge and DUMBO."
  }
},
{
  "@type": "Question",
  "name": "Which neighborhoods are best for solo travelers in NYC?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Midtown Manhattan, Greenwich Village, and Williamsburg are great for solo travelers thanks to their walkability, vibrant food scenes, and safe, lively atmosphere."
  }
},
{
  "@type": "Question",
  "name": "What are the best food spots for solo travelers in NYC?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Solo travelers often enjoy casual yet iconic spots like Katz’s Delicatessen, Joe’s Pizza, and Chelsea Market, where dining alone feels natural and welcoming."
  }
},
{
  "@type": "Question",
  "name": "How can solo travelers get around NYC easily?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "The subway is the fastest and most affordable way to get around NYC. Solo travelers should buy a MetroCard or OMNY tap card, and use apps like Google Maps for navigation."
  }
}
  ]
};

const schema3 = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Experience NYC in 3 Days as a Solo Traveler",
  "description": "Step-by-step solo travel itinerary for exploring New York City in three days.",
  "totalTime": "P3D",
  "supply": [
    { "@type": "HowToSupply", "name": "MetroCard or OMNY pass" },
    { "@type": "HowToSupply", "name": "Comfortable walking shoes" },
    { "@type": "HowToSupply", "name": "Portable charger" }
  ],
  "tool": [
    { "@type": "HowToTool", "name": "Citymapper or Transit App" },
    { "@type": "HowToTool", "name": "NYC Ferry" }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "Day 1: Explore Midtown & Central Park",
      "text": "Visit Times Square, catch a Broadway show, and enjoy a solo walk through Central Park."
    },
    {
      "@type": "HowToStep",
      "name": "Day 2: Discover NYC’s History",
      "text": "Take a ferry to the Statue of Liberty and Ellis Island, then visit the 9/11 Memorial & Museum."
    },
    {
      "@type": "HowToStep",
      "name": "Day 3: Museums & Local Dining",
      "text": "Spend the day at The Met or MoMA, then enjoy solo-friendly dining spots like ramen counters or cozy cafés."
    }
  ]
};

const schema4 = {
  "@context": "https://schema.org",
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
      "name": "New York",
      "item": "https://www.travelsamericas.com/destination/nyc/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Solo Travel",
      "item": "https://www.travelsamericas.com/destination/nyc/solo-trip-to-nyc"
    }
  ]
};

const schema2 = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "NYC Solo Traveler 3-Day Itinerary",
  "itemListOrder": "Ordered",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Day 1: Times Square, Broadway, and Central Park",
      "description": "Start your solo trip with iconic sights, a Broadway show, and a peaceful walk in Central Park."
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Day 2: Statue of Liberty, Ellis Island, and 9/11 Memorial",
      "description": "Explore NYC’s history and resilience with visits to Liberty Island, Ellis Island Immigration Museum, and the 9/11 Memorial."
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Day 3: Museums and Local Dining",
      "description": "Spend the day at The Met or MoMA, then enjoy solo-friendly dining spots like ramen counters or cozy cafés."
    }
  ]
};

export default async function SoloItineraryPage() {
  return <SoloItineraryClient grouped={nycItineraryFaq} />;
}
