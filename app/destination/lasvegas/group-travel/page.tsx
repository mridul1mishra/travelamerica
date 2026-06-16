export const metadata = {
  title: 'Las Vegas Group Travel Guide 2026 | Tips for Groups of 4–20',
  description: 'Planning a group trip to Las Vegas? Covers group hotels, activities, transport, bachelor and bachelorette tips, and managing logistics on the Strip.',
  alternates: { canonical: 'https://www.travelsamericas.com/destination/lasvegas/group-travel' },
  openGraph: { title: 'Las Vegas Group Travel Guide 2026', description: 'How to plan a group trip to Las Vegas — hotels, activities, transport and logistics.', url: 'https://www.travelsamericas.com/destination/lasvegas/group-travel', type: 'article' },
};
import LasVegasGroupTravelClient from './lasvegasgrouptravelclient';


// Schema markup (moved from client component)
const schema5 = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Keep a Group Together in Las Vegas",
  "description": "Practical steps for group travelers to move around Las Vegas using the Monorail, vans, meeting points, and shared apps.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Set a meeting point inside every resort",
      "text": "Casino floors are huge and disorienting — pick a specific landmark (a fountain, a valet, a named bar) at each property so no one is lost when the group splits."
    },
    {
      "@type": "HowToStep",
      "name": "Use the Monorail for Strip hops",
      "text": "The Las Vegas Monorail runs behind the east-side resorts for about $5 a ride or $15 a day — faster than walking the full Strip and cheaper than ride-share surge."
    },
    {
      "@type": "HowToStep",
      "name": "Rent a van for off-Strip trips",
      "text": "For Hoover Dam, Red Rock, or the Grand Canyon, book a 7- or 12-seat van so the whole group travels together instead of splitting across ride-shares."
    },
    {
      "@type": "HowToStep",
      "name": "Charter a party bus or limo for the night out",
      "text": "For a bachelor/bachelorette night or club crawl, a party bus or limo keeps the group together and skips taxi-line chaos between venues."
    },
    {
      "@type": "HowToStep",
      "name": "Book shows and club tables as one block",
      "text": "Reserve Cirque shows, VIP tables, and pool cabanas together 4–6 weeks out so the whole group is seated in the same section."
    },
    {
      "@type": "HowToStep",
      "name": "Split costs from day one",
      "text": "Use Splitwise or Venmo and account for resort fees so there's no ambiguity about who owes what."
    },
    {
      "@type": "HowToStep",
      "name": "Hydrate and pace the group",
      "text": "The desert heat and late nights wear groups down — carry water, plan a midday break, and don't over-schedule the daytime."
    }
  ]
};

const schema4 = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Las Vegas Group Travel Checklist",
  "itemListOrder": "Unordered",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Portable chargers for multiple devices" },
    { "@type": "ListItem", "position": 2, "name": "Group ID copies or shared emergency contacts" },
    { "@type": "ListItem", "position": 3, "name": "Monorail day passes or a van/charter booking for the whole group" },
    { "@type": "ListItem", "position": 4, "name": "Shared first aid kit, sunscreen, and water bottles for the desert heat" },
    { "@type": "ListItem", "position": 5, "name": "Group coordination apps (WhatsApp, Google Maps, Splitwise)" },
    { "@type": "ListItem", "position": 6, "name": "Pre-arranged meeting points at huge resorts like the Cosmopolitan or Caesars" },
    { "@type": "ListItem", "position": 7, "name": "Show, club table, and pool party bookings made 4–6 weeks ahead" },
    { "@type": "ListItem", "position": 8, "name": "Restaurant reservations booked a week ahead for groups of 8+" }
  ]
};

const schema3 = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What's the best way for a group to get around Las Vegas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Strip is walkable for most groups, but distances are longer than they look. For Strip-to-Strip hops the Las Vegas Monorail is cheapest ($5/ride or about $15 a day pass). For off-Strip trips like Hoover Dam or Red Rock, rent a 7- or 12-seat van ($80–$150/day) and designate one driver, or book a charter van with driver from around $400/day. Party buses and limos are the move for a bachelor/bachelorette night."
      }
    },
    {
      "@type": "Question",
      "name": "Where should a large group stay in Las Vegas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mid-Strip properties (Cosmopolitan, Aria, Vdara) have the best group suite inventory — call the hotel directly for blocks of 5+ rooms to get group rates 15–25% below rack. For 12+, a villa rental in Summerlin or Henderson ($500–$1,500/night for the whole house) often beats multiple hotel rooms. Always factor in resort fees ($35–$50/night per room) before comparing."
      }
    },
    {
      "@type": "Question",
      "name": "What group activities work best in Las Vegas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cirque du Soleil group bookings (10+ save about 20%), pool parties at Encore Beach Club, VIP table service at XS, Hakkasan or Omnia, helicopter tours to the Grand Canyon West Rim, racing at the Las Vegas Speedway, cooking classes, and downtown escape rooms all take group reservations. Book shows, clubs and dinners 4–6 weeks ahead."
      }
    }
  ]
};

const schema2 = {
"@context": "https://schema.org",
"@type": "BlogPosting",
"mainEntityOfPage": {
  "@type": "WebPage",
  "@id": "https://www.travelsamericas.com/destination/lasvegas/group-travel"
},
"headline": "Las Vegas Group Travel Guide 2026: Itinerary, Strip Stays, Shows & Dining",
"description": "Everything your group needs for Las Vegas — a 3-day itinerary, group-friendly Strip hotels and suites, where to eat as a crowd, shows and clubs, plus bachelor/bachelorette logistics.",
"keywords": ["Group travel Las Vegas", "Las Vegas group itinerary", "bachelorette Las Vegas", "Las Vegas group dining", "Las Vegas Monorail", "party bus Las Vegas", "Las Vegas group travel"],
"image": {
  "@type": "ImageObject",
  "url": "https://www.travelsamericas.com/data/majorcities/lasvegas/assets/group/lasvegas-group-travel-packing-flatlay-essentials.webp",
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
  { "@type": "Place", "name": "Las Vegas" }
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
    "name": "Las Vegas",
    "item": "https://www.travelsamericas.com/destination/lasvegas/"
  },
  {
    "@type": "ListItem",
    "position": 4,
    "name": "Group Travel",
    "item": "https://www.travelsamericas.com/destination/lasvegas/group-travel"
  }
]
};

export default function LasVegasGroupTravelPage() {
  return <LasVegasGroupTravelClient />;
}
