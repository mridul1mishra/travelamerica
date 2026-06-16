import { LANDMARKS } from './landmarks-data';
export const metadata = {
  title: "Las Vegas Landmarks 2026 | Iconic Sights & Tips",
  description: "The most iconic Las Vegas landmarks — Bellagio Fountains, High Roller, Fremont Street, Neon Museum, and what's worth it.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/lasvegas/landmark' },
  openGraph: { title: 'Las Vegas Landmarks 2026', description: 'Las Vegas\'s most iconic landmarks — what to expect and the honest cost breakdown.', url: 'https://www.travelsamericas.com/destination/lasvegas/landmark', type: 'article' },
};
import LasVegasLandmarkClient from './lasvegaslandmarkclient';


// Schema markup (moved from client component)
const article = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Las Vegas Landmarks Guide: Top Must-See Sights with Hours, Prices & Tips",
  "description": "Practical guide to Las Vegas\'s top landmarks — Fountains of Bellagio, the Strip, High Roller, Fremont Street, Sphere, the Neon Museum and more. Hours, prices, and how to get there.",
  "url": "https://www.travelsamericas.com/destination/lasvegas/landmark",
  "inLanguage": "en-US",
  "image": "https://www.travelsamericas.com/data/majorcities/lasvegas/assets/lasvegas-landmarks-banner.png",
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
  "name": "Las Vegas Tourist Attractions",
  "itemListElement": LANDMARKS.map((l, i) => ({
    "@type": "TouristAttraction",
    "name": l.name,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": l.address,
      "addressLocality": "Las Vegas",
      "addressRegion": "NV",
      "addressCountry": "US",
    },
    "position": i + 1,
  })),
};

const itemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Top Las Vegas Landmarks Solo Travel Guide",
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
      "name": "What Las Vegas landmarks are most worth visiting on a first trip?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For a first Las Vegas trip, prioritize: a night walk of the Strip with the free Fountains of Bellagio, the High Roller observation wheel at sunset, Fremont Street Experience downtown for the light canopy, Sphere's exterior and the 'Welcome to Fabulous Las Vegas' sign for photos, and at least one day trip to Hoover Dam or Red Rock Canyon. That's a comfortable 3-4 day itinerary."
      },
    },
    {
      "@type": "Question",
      "name": "Which Las Vegas landmarks are free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A lot of the best ones: the Fountains of Bellagio, walking the Strip itself, the Bellagio Conservatory, the Fremont Street Experience light shows, the exterior of Sphere (the Exosphere LED), and the 'Welcome to Fabulous Las Vegas' sign. Hoover Dam's exterior and Memorial Bridge walkway are also free. You can fill an entire evening with free spectacles in Las Vegas."
      },
    },
    {
      "@type": "Question",
      "name": "Is the High Roller or the STRAT SkyPod the better view?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The High Roller (550 ft) puts you right over the center Strip for the classic neon view and is best at sunset. The STRAT SkyPod (1,149 ft) is much taller, at the quieter north end, with shorter lines and an open-air deck plus thrill rides. For the iconic Strip backdrop, choose the High Roller; for the highest panorama and fewer crowds, choose the STRAT."
      },
    },
    {
      "@type": "Question",
      "name": "Do I need a car to see Las Vegas landmarks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not for the Strip and downtown - the RTC Deuce bus runs Las Vegas Blvd 24/7, the Monorail parallels the east side, and most resorts connect by pedestrian bridges. You will want a car, rideshare, or a guided tour for the day trips: Hoover Dam (~45 min) and Red Rock Canyon (~30 min) have no transit service."
      },
    },
    {
      "@type": "Question",
      "name": "How much time do Las Vegas landmarks take to visit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Free Strip spectacles (Bellagio fountains, Sphere exterior, the Welcome sign) are 15-30 minute stops. The High Roller and STRAT take about an hour each. The Neon Museum and Fremont Street run 1-1.5 hours. Hoover Dam and Red Rock Canyon are half-day trips once you factor in driving. Don't over-schedule - the Strip's distances and the desert heat slow everything down."
      },
    },
    {
      "@type": "Question",
      "name": "Which Las Vegas landmark is best for solo travelers specifically?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The High Roller observation wheel - solo riders simply share a glass pod, so there's no single-traveler premium, and the sunset rotation over the Strip is a highlight. The Fremont Street Experience is the runner-up: hours of free live music and light shows in a crowded, easy-to-wander setting where being alone is completely natural."
      },
    },
  ],
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
    { "@type": "ListItem", "position": 2, "name": "Las Vegas", "item": "https://www.travelsamericas.com/destination/lasvegas/" },
    { "@type": "ListItem", "position": 3, "name": "Landmarks", "item": "https://www.travelsamericas.com/destination/lasvegas/landmark" },
  ],
};

export default function LasVegasLandmarkPage() {
  return <LasVegasLandmarkClient />;
}
