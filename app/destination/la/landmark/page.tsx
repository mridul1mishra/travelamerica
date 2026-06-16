import { LANDMARKS } from './landmarks-data';
export const metadata = {
  title: 'Los Angeles Landmarks 2026 | Iconic Sights & Honest Tips',
  description: "The most iconic Los Angeles landmarks — Hollywood Sign, Griffith Observatory, Santa Monica Pier, Getty, and honest tips.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/la/landmark' },
  openGraph: { title: 'Los Angeles Landmarks 2026', description: 'LA\'s most iconic landmarks — what to expect and how to visit each one properly.', url: 'https://www.travelsamericas.com/destination/la/landmark', type: 'article' },
};
import LALandmarkClient from './lalandmarkclient';


// Schema markup (moved from client component)
const article = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "LA Landmarks Guide: Top Must-See Sights with Hours, Prices & Tips",
  "description": "Practical guide to Los Angeles\'s top landmarks — Griffith Observatory, the Getty Center, Hollywood Walk of Fame, Santa Monica Pier and more. Hours, prices, and how to get there.",
  "url": "https://www.travelsamericas.com/destination/la/landmark",
  "inLanguage": "en-US",
  "image": "https://www.travelsamericas.com/data/majorcities/losangeles/assets/losangeles.webp",
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
  "name": "LA Tourist Attractions",
  "itemListElement": LANDMARKS.map((l, i) => ({
    "@type": "TouristAttraction",
    "name": l.name,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": l.address,
      "addressLocality": "Los Angeles",
      "addressRegion": "CA",
      "addressCountry": "US",
    },
    "position": i + 1,
  })),
};

const itemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Top Los Angeles Landmarks Solo Travel Guide",
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
      "name": "What LA landmarks are most worth visiting on a first trip?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For a first Los Angeles trip, prioritize: Griffith Observatory (free, best city view), the Getty Center (free art on a hilltop), Santa Monica Pier and Venice Beach for the coast, the Hollywood Walk of Fame and TCL Chinese Theatre, and a view of the Hollywood Sign from Griffith or Lake Hollywood Park. The Broad and Union Station round out a strong 3-4 day itinerary."
      },
    },
    {
      "@type": "Question",
      "name": "Can you walk up to the Hollywood Sign?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The Hollywood Sign is fenced off and monitored, and you cannot legally reach the letters on foot. The best views are from Griffith Observatory (free), Lake Hollywood Park, or the Mt. Lee trails for the closest legal vantage. Skip the overpriced 'Hollywood Sign tour' vans - the free viewpoints are better."
      },
    },
    {
      "@type": "Question",
      "name": "Are any LA landmarks free to visit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes - many of LA's best are free: Griffith Observatory (free admission), the Getty Center (free, pay only for parking), the Broad (free general admission with a timed reservation), the Hollywood Walk of Fame, Santa Monica Pier and Venice Beach boardwalks, Union Station and Olvera Street, and LACMA's 'Urban Light' installation out front. You can have an excellent LA day for the cost of parking or a Metro fare."
      },
    },
    {
      "@type": "Question",
      "name": "Do I need a car to see LA landmarks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not entirely. The Metro E (Expo) Line reaches Santa Monica, the B (Red) Line reaches Hollywood, and Union Station ties downtown landmarks (The Broad, Grand Central Market, Olvera Street) together. Griffith Observatory and the Getty need a bus-plus-walk or rideshare for the final hill. A car helps for the Westside and beaches, but a transit-plus-rideshare mix covers most landmarks."
      },
    },
    {
      "@type": "Question",
      "name": "How much time do LA landmarks take to visit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Plan a half day for big museums (the Getty, LACMA) and 2-3 hours for Griffith Observatory. Beach landmarks (Santa Monica Pier, Venice) take 1.5-2.5 hours each. LA traffic is the real time cost - cluster landmarks by region (Hollywood/Griffith, the Westside/beaches, downtown) rather than crisscrossing the city in one day."
      },
    },
    {
      "@type": "Question",
      "name": "Which LA landmark is best for solo travelers specifically?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Griffith Observatory in the evening - free entry, easy and safe to do alone, public telescopes on clear nights, and the best city-lights view in LA. The Getty Center is the runner-up: free, self-paced, and ideal for a solo museum afternoon with no pace negotiation and easy solo dining at the cafe."
      },
    },
  ],
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
    { "@type": "ListItem", "position": 2, "name": "Los Angeles", "item": "https://www.travelsamericas.com/destination/la/" },
    { "@type": "ListItem", "position": 3, "name": "Landmarks", "item": "https://www.travelsamericas.com/destination/la/landmark" },
  ],
};

export default function LALandmarkPage() {
  return <LALandmarkClient />;
}
