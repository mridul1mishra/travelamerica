export const metadata = {
  title: "LA Group Travel Guide 2026 | Tips for Groups of 4–20",
  description: "Planning a group trip to LA? Covers group hotels, activities, transport logistics, and how to split costs without drama.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/la/group-travel' },
  openGraph: { title: 'Los Angeles Group Travel Guide 2026', description: 'How to plan a group trip to LA — transport, accommodation, activities and logistics.', url: 'https://www.travelsamericas.com/destination/la/group-travel', type: 'article' },
};
import LAGroupTravelClient from './lagrouptravelclient';


// Schema markup (moved from client component)
const schema5 = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Navigate LA Smoothly as a Group Traveler",
  "description": "Step-by-step guide for group travelers to get around Los Angeles using rentals, rideshare, and smart planning.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Plan routes with traffic-aware apps",
      "text": "Use Google Maps or Waze to coordinate driving routes and avoid LA's notorious traffic between attractions."
    },
    {
      "@type": "HowToStep",
      "name": "Rent a minivan for the group",
      "text": "For 6+ people, book a 7-seat minivan in advance so the whole group travels together instead of splitting across rideshares."
    },
    {
      "@type": "HowToStep",
      "name": "Charter a van with a driver for large groups",
      "text": "For groups of 12 or more, reserve a charter van with a driver from around $400/day to move between landmarks without parking headaches."
    },
    {
      "@type": "HowToStep",
      "name": "Use the Metro E Line for one corridor",
      "text": "The Metro E (Expo) Line connects DTLA to Santa Monica for $1.75 — useful for that single corridor when driving and parking are a hassle."
    },
    {
      "@type": "HowToStep",
      "name": "Coordinate rideshare for smaller splits",
      "text": "When the group splits by interest, use Uber or Lyft for flexible point-to-point trips and meet back at a set midpoint."
    },
    {
      "@type": "HowToStep",
      "name": "Budget and prepay for parking",
      "text": "Parking is the recurring cost in LA — budget $15–$30 per stop and load it onto one card so the group isn't sorting payments at every garage."
    },
    {
      "@type": "HowToStep",
      "name": "Avoid rush-hour driving",
      "text": "Plan routes to skip the 7–10 AM and 3–7 PM crush on the 101 and 405 freeways when moving the whole group."
    },
    {
      "@type": "HowToStep",
      "name": "Stay central with parking included",
      "text": "Choose a house or hotel with on-site parking and easy freeway access so the group can regroup and head out quickly."
    }
  ]
};

const schema4 = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "LA Group Travel Logistics & Packing Checklist",
  "itemListOrder": "Unordered",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Portable chargers for multiple devices" },
    { "@type": "ListItem", "position": 2, "name": "Group ID copies or shared emergency contacts" },
    { "@type": "ListItem", "position": 3, "name": "Minivan rental or charter van booking for the whole group" },
    { "@type": "ListItem", "position": 4, "name": "Shared first aid kit, sunscreen, and water bottles" },
    { "@type": "ListItem", "position": 5, "name": "Group coordination apps (WhatsApp, Google Maps, Waze)" },
    { "@type": "ListItem", "position": 6, "name": "Pre-arranged meeting points at sprawling spots like the Getty or Santa Monica Pier" },
    { "@type": "ListItem", "position": 7, "name": "Parking budget of $15–$30 per stop loaded onto one card" },
    { "@type": "ListItem", "position": 8, "name": "Restaurant reservations booked a week ahead for groups of 8+" }
  ]
};

const schema3 = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best way for a group to get around Los Angeles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LA has no reliable transit for groups visiting attractions. For 6+ people, rent a 7-seat minivan ($80–$130/day) or a charter van with driver (from $400/day) for 12+. Designate one driver and budget $15–$30 per stop for parking."
      }
    },
    {
      "@type": "Question",
      "name": "Where should a large group stay in LA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A 4-bedroom house in Silver Lake or Los Feliz sleeps 8 for $300–$500/night, often cheaper per person than two hotel rooms. DTLA hotels offer the best per-person value with large suites and a central location."
      }
    },
    {
      "@type": "Question",
      "name": "What group activities work best in LA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Universal Studios Hollywood (group rates save 20%+), the Warner Bros. Studio Tour, escape rooms in WeHo and Hollywood, group surf lessons in Santa Monica, and Sunset Strip comedy clubs all take group reservations."
      }
    }
  ]
};

const schema2 = {
"@context": "https://schema.org",
"@type": "BlogPosting",
"mainEntityOfPage": {
  "@type": "WebPage",
  "@id": "https://www.travelsamericas.com/destination/la/group-travel"
},
"headline": "Group Travel in LA: Logistics, Group Activities & Itinerary Planning",
"description": "Explore Los Angeles as a group — van rentals and rideshare logistics, group-friendly venues, and a 3-day itinerary built for crowds.",
"keywords": ["Group travel LA", "Los Angeles itinerary", "group van rental LA", "group activities Los Angeles", "LA group travel", "things to do as a group LA"],
"image": {
  "@type": "ImageObject",
  "url": "https://www.travelsamericas.com/data/majorcities/losangeles/assets/group/la-group-travel-packing-flatlay-essentials.webp",
  "height": 600,
  "width": 1200
},
"author": {
  "@type": "Organization",
  "name": "Travels Americas"
},
"publisher": {
  "@type": "Organization",
  "name": "Travels Americas",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.travelsamericas.com/logo.png"
  }
},
"datePublished": "2025-11-29",
"dateModified": "2026-06-03",
"about": [
  { "@type": "Thing", "name": "Group Travel" },
  { "@type": "Place", "name": "Los Angeles" }
]
};

const schema1 = {
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
    "name": "Major Cities",
    "item": "https://www.travelsamericas.com/majorcities/"
  },
  {
    "@type": "ListItem",
    "position": 3,
    "name": "Los Angeles",
    "item": "https://www.travelsamericas.com/destination/la/"
  },
  {
    "@type": "ListItem",
    "position": 4,
    "name": "Group Travel",
    "item": "https://www.travelsamericas.com/destination/la/group-travel"
  }
]
};

export default function LAGroupTravelPage() {
  // Render the JSON-LD. These schemas were defined but never output before.
  const schemas = [schema1, schema2, schema3, schema4, schema5];
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <LAGroupTravelClient />
    </>
  );
}
