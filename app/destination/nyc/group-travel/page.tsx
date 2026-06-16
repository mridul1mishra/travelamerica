export const generateMetadata = () => ({
  title: 'NYC Group Travel Guide 2026: Itinerary, Landmarks & Dining',
  description: "The complete NYC group travel guide — a 3-day itinerary, top landmarks by borough, and dining tips for groups.",
  alternates: {
      canonical: 'https://www.travelsamericas.com/destination/nyc/group-travel',
    },
    robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "NYC Group Travel Guide 2026: Itinerary, Landmarks & Dining",
    description: "The complete NYC group travel guide — a 3-day itinerary, top landmarks by borough (Manhattan, Brooklyn, Bronx), group dining picks, plus safety and packing tips.",
    images: ["https://www.travelsamericas.com/data/majorcities/newyork/assets/group/nyc-group-travel-packing-flatlay-essentials.webp"]
  },
  openGraph: {
    title: 'NYC Group Travel Guide 2026: Itinerary, Landmarks & Dining',
    description: "The complete NYC group travel guide — a 3-day itinerary, top landmarks by borough, and dining tips for groups.",
    url: 'https://www.travelsamericas.com/destination/nyc/group-travel',
    type: 'article',
    siteName: 'Travels Americas',
    images: [{ url: "https://www.travelsamericas.com/data/majorcities/newyork/assets/group/nyc-group-travel-packing-flatlay-essentials.webp", width: 1200, height: 630 }],
  }
});

import GroupTravelClient from './grouptravelclient';


// Schema markup (moved from client component)
const schema5 = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Keep a Group Together in New York City",
  "description": "Practical steps for group travelers to navigate New York City using public transport, meeting points, and shared apps.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Set a meeting point at every stop",
      "text": "Pick a specific corner or subway exit at each location so no one is lost when the group splits."
    },
    {
      "@type": "HowToStep",
      "name": "Put everyone on OMNY",
      "text": "Each person taps their own card or phone — no more shared MetroCards and no queuing at the machine."
    },
    {
      "@type": "HowToStep",
      "name": "Use the same maps app",
      "text": "Citymapper or the MTA app — so everyone's directions match and no one is following a different route."
    },
    {
      "@type": "HowToStep",
      "name": "Avoid rush-hour choke points",
      "text": "Don't move the whole group through Times Square or Penn Station between 7–9 AM or 5–7 PM — that's where groups get separated."
    },
    {
      "@type": "HowToStep",
      "name": "Plan routes with group-friendly apps",
      "text": "Use apps like Google Maps, Citymapper, or Transit to coordinate subway, bus, ferry, and walking routes."
    },
    {
      "@type": "HowToStep",
      "name": "Book charter buses or vans for large groups",
      "text": "For large groups, reserve charter buses or vans to travel smoothly between major landmarks."
    },
    {
      "@type": "HowToStep",
      "name": "Walk together in safe, central areas",
      "text": "Explore neighborhoods such as Central Park, SoHo, and Brooklyn Heights on foot, staying together and designating meeting points."
    }
  ]
};

const schema4 = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "NYC Group Travel Checklist",
  "itemListOrder": "Unordered",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Portable chargers for multiple devices" },
    { "@type": "ListItem", "position": 2, "name": "Group ID copies or shared emergency contacts" },
    { "@type": "ListItem", "position": 3, "name": "OMNY passes for all members" },
    { "@type": "ListItem", "position": 4, "name": "Shared first aid kit and basic medicines" },
    { "@type": "ListItem", "position": 5, "name": "Group coordination apps (WhatsApp, Citymapper, MTA app)" },
    { "@type": "ListItem", "position": 6, "name": "Pre-arranged meeting points at every stop" },
    { "@type": "ListItem", "position": 7, "name": "Broadway group booking through Broadway Inbound" },
    { "@type": "ListItem", "position": 8, "name": "Restaurant reservations for groups of 6+ at least 2 weeks ahead" }
  ]
};

const schema3 = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What's the minimum group size for Broadway discounts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most Broadway shows define group sales at 10 or more, though minimums vary by show — some run up to 20 (Hamilton's group minimum is 20). Book through Broadway Inbound or the show's Broadway.org page."
      }
    },
    {
      "@type": "Question",
      "name": "Do NYC museums offer group rates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — the Met, MoMA, and others offer group entry that skips the ticket line. Book in advance through each museum's group sales page."
      }
    },
    {
      "@type": "Question",
      "name": "Best NYC neighborhoods for a group to stay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Midtown for transit access and Broadway proximity; Brooklyn (Williamsburg or Downtown Brooklyn) for more space, better food options, and competitive prices."
      }
    }
  ]
};

const schema2 = {
"@context": "https://schema.org",
"@type": "BlogPosting",
"mainEntityOfPage": {
  "@type": "WebPage",
  "@id": "https://www.travelsamericas.com/destination/nyc/group-travel"
},
"headline": "NYC Group Travel Guide 2026: Itinerary, Landmarks, Dining & Broadway",
"description": "Everything your group needs for New York City — a 3-day itinerary, the best landmarks by borough, where to eat as a crowd, and Broadway group tickets.",
"keywords": ["Group travel NYC", "NYC group itinerary", "Broadway group tickets", "NYC group dining", "Citymapper", "OMNY", "NYC group travel"],
"image": {
  "@type": "ImageObject",
  "url": "https://www.travelsamericas.com/data/majorcities/newyork/assets/safetybanner.webp",
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
  { "@type": "Place", "name": "New York City" }
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
    "name": "New York",
    "item": "https://www.travelsamericas.com/destination/nyc/"
  },
  {
    "@type": "ListItem",
    "position": 4,
    "name": "Group Travel",
    "item": "https://www.travelsamericas.com/destination/nyc/group-travel"
  }
]
};

export default function GroupItineraryPage() {
  return <GroupTravelClient />;
}
