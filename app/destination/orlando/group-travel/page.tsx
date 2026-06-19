export const metadata = {
  title: "Orlando Group Travel Guide 2026 | Theme Park Tips",
  description: "Planning a group trip to Orlando? Covers group hotels, park ticket strategies, transport logistics, and cost splitting.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/orlando/group-travel' },
  openGraph: { title: 'Orlando Group Travel Guide 2026', description: 'How to plan a group trip to Orlando — hotels, park tickets, transport and logistics.', url: 'https://www.travelsamericas.com/destination/orlando/group-travel', type: 'article' },
};
import OrlandoGroupTravelClient from './orlandogrouptravelclient';


// Schema markup (moved from client component)
const schema5 = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Keep a Group Together in Orlando",
  "description": "Practical steps for group travelers to navigate Orlando's theme parks and resort areas using park transport, meeting points, and shared apps.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Set a meeting point at each park entrance",
      "text": "Agree on a specific gate or landmark at every venue so no one gets separated when the group spreads out."
    },
    {
      "@type": "HowToStep",
      "name": "Install My Disney Experience and Universal apps",
      "text": "Get everyone on the same app before arrival so you can share Lightning Lane passes, reservations, and meet-up locations in real time."
    },
    {
      "@type": "HowToStep",
      "name": "Use the Disney Skyliner and resort buses",
      "text": "Disney's complimentary transport connects resorts to parks — plan group movement around these free options to avoid parking and traffic."
    },
    {
      "@type": "HowToStep",
      "name": "Book dining reservations 60 days ahead",
      "text": "Disney and Universal signature restaurants fill months in advance — book as a group on the same reservation to guarantee you eat together."
    },
    {
      "@type": "HowToStep",
      "name": "Book a van or charter transport for non-park days",
      "text": "For Kennedy Space Center, Everglades airboats, or day trips, a charter van keeps the group together without multiple rental cars."
    }
  ]
};

const schema4 = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Orlando Group Travel Checklist",
  "itemListOrder": "Unordered",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Portable chargers and battery packs for full park days" },
    { "@type": "ListItem", "position": 2, "name": "Group ID copies or shared emergency contacts" },
    { "@type": "ListItem", "position": 3, "name": "My Disney Experience and Universal apps installed for everyone" },
    { "@type": "ListItem", "position": 4, "name": "Shared first aid kit, sunscreen, ponchos, and water bottles" },
    { "@type": "ListItem", "position": 5, "name": "Group coordination apps (WhatsApp, Google Maps)" },
    { "@type": "ListItem", "position": 6, "name": "Pre-arranged meeting points at park entrances and lands" },
    { "@type": "ListItem", "position": 7, "name": "Disney dining reservations booked 60 days ahead for groups" },
    { "@type": "ListItem", "position": 8, "name": "Minivan or charter van booked for non-Disney park days" }
  ]
};

const schema3 = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Disney World offer group discounts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Disney has no standard group discount, but buying date-based tickets in advance locks in lower pricing. Youth, school, and non-profit groups of 10+ qualify for special group rates through Disney's Youth Programs/group sales line, and corporate groups can book private event packages."
      }
    },
    {
      "@type": "Question",
      "name": "What is the minimum group size for Universal Orlando rates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Universal offers group rates for parties of 15 or more — contact their group sales team directly for pricing, typically 15–25% off rack rates. Annual passholder discounts also stack if any members have passes."
      }
    },
    {
      "@type": "Question",
      "name": "Where should a large group stay in Orlando?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A 4–6 bedroom vacation rental with a private pool in Kissimmee or the Four Corners area sleeps 8–12 for $150–$400/night total — usually cheaper than multiple hotel rooms and it adds a kitchen. On-site Disney hotels trade space for free park transport and early entry."
      }
    }
  ]
};

const schema2 = {
"@context": "https://schema.org",
"@type": "BlogPosting",
"mainEntityOfPage": {
  "@type": "WebPage",
  "@id": "https://www.travelsamericas.com/destination/orlando/group-travel"
},
"headline": "Orlando Group Travel Guide 2026: Itinerary, Theme Parks & Dining",
"description": "Everything your group needs for Orlando — a 3-day theme-park itinerary, Disney and Universal group ticket strategies, where to eat as a crowd, and transport and lodging logistics.",
"keywords": ["Group travel Orlando", "Orlando group itinerary", "Disney group tickets", "Universal group rates", "Orlando vacation rentals", "Orlando group dining", "Orlando group travel"],
"image": {
  "@type": "ImageObject",
  "url": "https://www.travelsamericas.com/data/majorcities/orlando/assets/group/orlando-group-travel-packing-flatlay-essentials.webp",
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
"dateModified": "2026-06-15",
"about": [
  { "@type": "Thing", "name": "Group Travel" },
  { "@type": "Place", "name": "Orlando" }
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
    "name": "Orlando",
    "item": "https://www.travelsamericas.com/destination/orlando/"
  },
  {
    "@type": "ListItem",
    "position": 4,
    "name": "Group Travel",
    "item": "https://www.travelsamericas.com/destination/orlando/group-travel"
  }
]
};

export default function OrlandoGroupTravelPage() {
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
      <OrlandoGroupTravelClient />
    </>
  );
}
