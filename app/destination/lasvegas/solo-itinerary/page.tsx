export const metadata = {
  title: "Las Vegas Solo Itinerary 2026 | 3-Day Plan",
  description: "Best 3-day Las Vegas itinerary for solo travelers — Strip walks, shows, Hoover Dam, and Fremont Street on your own.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/lasvegas/solo-itinerary' },
  openGraph: { title: 'Las Vegas Solo Travel Itinerary 2026', description: '3-day solo Las Vegas itinerary built around real logistics and solo-friendly pacing.', url: 'https://www.travelsamericas.com/destination/lasvegas/solo-itinerary', type: 'article' },
};
import lvItineraryFaq from '@/content/destination/lasvegas/solo-itinerary/faq/itineraryfaq.json';
import LasVegasSoloItineraryClient from './lasvegassoloitineraryclient';


// Schema markup (moved from client component)
const schema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "name": "Solo Travel Itinerary for Las Vegas",
  "description": "Explore Las Vegas solo with this 3-day itinerary covering the Strip, Fremont Street, the Arts District and Chinatown, plus a day trip to Hoover Dam or Red Rock Canyon — with honest solo-safety and transit notes.",
  "touristType": {"@type": "Audience", "name": "Solo Travelers" },
  "about": [{"@type": "Thing","name": "Solo Travel" }, {"@type": "Place", "name": "Las Vegas"}],
  "mainEntityOfPage": {
"@type": "WebPage",
"name": "Solo Las Vegas Travel Itinerary",
"url": "https://www.travelsamericas.com/destination/lasvegas/solo-itinerary"
  },
  "image": {
"@type": "ImageObject",
"url": "https://www.travelsamericas.com/data/majorcities/lasvegas/assets/solo-travel-itinerary.png",
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
  "name": "Is Las Vegas safe for solo travelers?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Yes, Las Vegas is one of the easiest cities to visit solo. The Strip and Fremont Street are well-lit, busy and heavily monitored late into the night. Stay aware on the casino floors, keep an eye on your drinks, and use rideshare rather than walking long, empty stretches of Las Vegas Blvd after dark."
  }
},
{
  "@type": "Question",
  "name": "What is the best 3-day solo itinerary for Las Vegas?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "A popular 3-day solo itinerary includes: Day 1 walking the Strip with the Bellagio fountains and a Cirque du Soleil show; Day 2 Downtown and Fremont Street plus the off-Strip Arts District and Chinatown; and Day 3 a day trip to Hoover Dam or Red Rock Canyon."
  }
},
{
  "@type": "Question",
  "name": "Which areas are best for solo travelers in Las Vegas?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "The central Strip, the Fremont Street Experience downtown, the 18b Arts District, and Spring Mountain Road (Chinatown) are great for solo travelers thanks to their walkability, counter-style dining, and lively but safe atmosphere."
  }
},
{
  "@type": "Question",
  "name": "What are the best food spots for solo travelers in Las Vegas?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Solo travelers eat well at counter and bar seats like the Cosmopolitan and Proper Eats food halls on the Strip, the outdoor stalls on Fremont Street, ramen and pho counters in Chinatown, and brunch spots like EATT in the Arts District."
  }
},
{
  "@type": "Question",
  "name": "How can solo travelers get around Las Vegas easily?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Walk the Strip itself — it is self-contained and pedestrian-friendly. The Las Vegas Monorail runs behind the east-side resorts, and the Deuce bus covers Las Vegas Blvd to Downtown. Use Uber or Lyft for Hoover Dam, Red Rock Canyon, the Arts District and Chinatown, where distances are too far to walk. There is no subway."
  }
}
  ]
};

const schema3 = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Experience Las Vegas in 3 Days as a Solo Traveler",
  "description": "Step-by-step solo travel itinerary for exploring Las Vegas in three days.",
  "totalTime": "P3D",
  "supply": [
    { "@type": "HowToSupply", "name": "Rideshare budget for off-Strip trips" },
    { "@type": "HowToSupply", "name": "Comfortable walking shoes" },
    { "@type": "HowToSupply", "name": "Water, sunscreen and a portable charger" }
  ],
  "tool": [
    { "@type": "HowToTool", "name": "Uber or Lyft app" },
    { "@type": "HowToTool", "name": "Google Maps" }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "Day 1: Walk the Strip",
      "text": "Walk Las Vegas Blvd at your own pace, catch the Bellagio fountains, and book a solo single seat at a Cirque du Soleil show."
    },
    {
      "@type": "HowToStep",
      "name": "Day 2: Downtown & Off-Strip",
      "text": "See the Fremont Street Experience, then rideshare to the 18b Arts District and Chinatown for solo-friendly counter dining."
    },
    {
      "@type": "HowToStep",
      "name": "Day 3: Hoover Dam or Red Rock",
      "text": "Take a morning trip to Hoover Dam or the Red Rock Canyon loop, then finish at the Neon Museum or High Roller at sunset."
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
      "name": "Las Vegas",
      "item": "https://www.travelsamericas.com/destination/lasvegas/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Solo Travel",
      "item": "https://www.travelsamericas.com/destination/lasvegas/solo-trip-to-lasvegas"
    }
  ]
};

const schema2 = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Las Vegas Solo Traveler 3-Day Itinerary",
  "itemListOrder": "Ordered",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Day 1: The Strip at Your Own Pace",
      "description": "Walk the Strip end to end, watch the free Bellagio fountains, and catch a Cirque du Soleil show with an easy solo single seat."
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Day 2: Fremont Street, the Arts District & Chinatown",
      "description": "Explore Downtown and the Fremont Street Experience, then go off-Strip to the 18b Arts District and Chinatown for counter dining."
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Day 3: Hoover Dam or Red Rock Canyon Day Trip",
      "description": "Take a half-day trip to Hoover Dam or the Red Rock Canyon scenic loop, then close out at the Neon Museum or High Roller wheel."
    }
  ]
};

export default async function LasVegasSoloItineraryPage() {
  return <LasVegasSoloItineraryClient grouped={lvItineraryFaq} />;
}
