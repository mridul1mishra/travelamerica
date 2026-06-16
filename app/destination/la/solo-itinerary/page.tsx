export const metadata = {
  title: 'Solo Trip to Los Angeles: 3-Day Itinerary 2026',
  description: "Planning a solo trip to LA? Day-by-day itinerary for solo travelers — safe neighborhoods, solo dining, and transport tips.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/la/solo-itinerary' },
  openGraph: { title: 'Solo Trip to Los Angeles: 3-Day Itinerary', description: 'A practical solo travel itinerary for LA — safe areas, solo-friendly activities, and honest logistics.', url: 'https://www.travelsamericas.com/destination/la/solo-itinerary', type: 'article' },
};
import laItineraryFaq from '@/content/destination/la/solo-itinerary/faq/itineraryfaq.json';
import LASoloItineraryClient from './lasoloitineraryclient';


// Schema markup (moved from client component)
const schema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "name": "Solo Travel Itinerary for Los Angeles",
  "description": "Explore LA solo with this 3-day itinerary covering Griffith Observatory, the beaches, the Getty, and Downtown's Arts District — with honest car and rideshare notes.",
  "touristType": {"@type": "Audience", "name": "Solo Travelers" },
  "about": [{"@type": "Thing","name": "Solo Travel" }, {"@type": "Place", "name": "Los Angeles"}],
  "mainEntityOfPage": {
"@type": "WebPage",
"name": "Solo LA Travel Itinerary",
"url": "https://www.travelsamericas.com/destination/la/solo-itinerary"
  },
  "image": {
"@type": "ImageObject",
"url": "https://www.travelsamericas.com/data/majorcities/losangeles/assets/solo-travel-itinerary.png",
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
  "name": "Is Los Angeles safe for solo travelers?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Yes, LA is safe for solo travelers who stick to well-trafficked areas like Santa Monica, Los Feliz, the Arts District, and Beverly Hills, avoid walking long distances after dark, and use rideshare rather than waiting at empty bus stops late at night."
  }
},
{
  "@type": "Question",
  "name": "What is the best 3-day solo itinerary for Los Angeles?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "A popular 3-day solo itinerary includes: Day 1 Griffith Observatory, Los Feliz and Silver Lake; Day 2 Venice Beach and Santa Monica by bike; and Day 3 the Getty Center plus Downtown's Grand Central Market and Arts District."
  }
},
{
  "@type": "Question",
  "name": "Which neighborhoods are best for solo travelers in LA?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Los Feliz, Silver Lake, Santa Monica, Abbot Kinney in Venice, and the Downtown Arts District are great for solo travelers thanks to their walkability, counter-style dining, and lively but safe daytime atmosphere."
  }
},
{
  "@type": "Question",
  "name": "What are the best food spots for solo travelers in LA?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Solo travelers eat well at counter and bar seats like Grand Central Market in DTLA, Gjusta in Venice, Bay Cities Italian Deli in Santa Monica, and the bar at Rustic Canyon."
  }
},
{
  "@type": "Question",
  "name": "How can solo travelers get around LA easily?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "LA is car and rideshare dependent. Most solo travelers rent a car or budget for Uber and Lyft between neighborhoods, then walk within each area. The Metro rail covers some routes (DTLA, Hollywood, Santa Monica) but distances between sights are large."
  }
}
  ]
};

const schema3 = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Experience LA in 3 Days as a Solo Traveler",
  "description": "Step-by-step solo travel itinerary for exploring Los Angeles in three days.",
  "totalTime": "P3D",
  "supply": [
    { "@type": "HowToSupply", "name": "Rental car or rideshare budget" },
    { "@type": "HowToSupply", "name": "Comfortable walking shoes" },
    { "@type": "HowToSupply", "name": "Sunscreen and a portable charger" }
  ],
  "tool": [
    { "@type": "HowToTool", "name": "Uber or Lyft app" },
    { "@type": "HowToTool", "name": "Google Maps" }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "Day 1: Griffith, Los Feliz & Silver Lake",
      "text": "Hike to Griffith Observatory, walk Los Feliz Village, and have dinner at a bar seat in Silver Lake."
    },
    {
      "@type": "HowToStep",
      "name": "Day 2: Venice & Santa Monica",
      "text": "Rent a bike, ride the coastal path between Santa Monica and Venice, and watch sunset from the pier."
    },
    {
      "@type": "HowToStep",
      "name": "Day 3: The Getty & Downtown",
      "text": "Visit the Getty Center at opening, then explore Grand Central Market, The Broad, and the Arts District."
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
      "name": "Los Angeles",
      "item": "https://www.travelsamericas.com/destination/la/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Solo Travel",
      "item": "https://www.travelsamericas.com/destination/la/solo-trip-to-la"
    }
  ]
};

const schema2 = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "LA Solo Traveler 3-Day Itinerary",
  "itemListOrder": "Ordered",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Day 1: Griffith Observatory, Los Feliz & Silver Lake",
      "description": "Start your solo trip with a hike to the observatory, walkable Los Feliz Village, and solo-friendly dining in Silver Lake."
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Day 2: Venice Beach & Santa Monica",
      "description": "Cycle the coastal path between Santa Monica and Venice, eat at counter spots on Abbot Kinney, and watch sunset from the pier."
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Day 3: The Getty & Downtown Arts District",
      "description": "Spend the morning at the free Getty Center, then explore Grand Central Market, The Broad, and the Arts District galleries."
    }
  ]
};

export default async function LASoloItineraryPage() {
  return <LASoloItineraryClient grouped={laItineraryFaq} />;
}
