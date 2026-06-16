export const metadata = {
  title: "Best Food in Las Vegas 2026 | On & Off the Strip",
  description: "Where to eat in Las Vegas — celebrity chef restaurants, cheap eats, best buffets, and the spots locals actually go.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/lasvegas/food' },
  openGraph: { title: 'Best Food in Las Vegas 2026', description: 'Honest Las Vegas food guide — celebrity restaurants, best buffets, cheap eats and where to splurge.', url: 'https://www.travelsamericas.com/destination/lasvegas/food', type: 'article' },
};
import LasVegasFoodClient from './lasvegasfoodclient';


// Schema markup (moved from client component)
const Article = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Where to Eat in Las Vegas: The 2026 Food Guide",
  "description": "Where to eat in Las Vegas — celebrity-chef restaurants, the best buffets, off-Strip gems in Chinatown and the Arts District, food halls, cheap eats, and price ranges. A 2026 Las Vegas food guide.",
  "author": {
"@type": "Organization",
"name": "Travels Americas"
  },
  "datePublished": "2025-10-19",
  "dateModified": "2026-06-03",
  "publisher": {
"@type": "Organization",
"name": "Travels Americas",
"logo": { "@type": "ImageObject", "url": "https://www.travelsamericas.com/logo.png" }
  },
  "image": "https://www.travelsamericas.com/data/majorcities/lasvegas/assets/group/food/lasvegas-group-food.png",
  "articleSection": ["Celebrity Chefs", "Buffets", "Off-Strip", "Food Halls", "Cheap Eats"],
  "mainEntity": [
{
  "@type": "Restaurant",
  "name": "Joël Robuchon",
  "servesCuisine": "French Tasting Menu",
  "address": { "@type": "PostalAddress", "addressLocality": "Las Vegas", "addressRegion": "NV" }
},
{
  "@type": "Restaurant",
  "name": "Bacchanal Buffet",
  "servesCuisine": "Buffet",
  "address": { "@type": "PostalAddress", "addressLocality": "Las Vegas", "addressRegion": "NV" }
},
{
  "@type": "Restaurant",
  "name": "Secret Pizza",
  "servesCuisine": "Pizza",
  "address": { "@type": "PostalAddress", "addressLocality": "Las Vegas", "addressRegion": "NV" }
},
{
  "@type": "Restaurant",
  "name": "Carson Kitchen",
  "servesCuisine": "Contemporary American",
  "address": { "@type": "PostalAddress", "addressLocality": "Las Vegas", "addressRegion": "NV" }
},
{
  "@type": "Restaurant",
  "name": "Raku",
  "servesCuisine": "Japanese Izakaya",
  "address": { "@type": "PostalAddress", "addressLocality": "Las Vegas", "addressRegion": "NV" }
},
{
  "@type": "Restaurant",
  "name": "Eataly Las Vegas",
  "servesCuisine": "Italian Food Hall",
  "address": { "@type": "PostalAddress", "addressLocality": "Las Vegas", "addressRegion": "NV" }
},
{
  "@type": "Restaurant",
  "name": "The Peppermill Restaurant & Fireside Lounge",
  "servesCuisine": "American Diner",
  "address": { "@type": "PostalAddress", "addressLocality": "Las Vegas", "addressRegion": "NV" }
},
{
  "@type": "Restaurant",
  "name": "Tacos El Gordo",
  "servesCuisine": "Mexican Tacos",
  "address": { "@type": "PostalAddress", "addressLocality": "Las Vegas", "addressRegion": "NV" }
},
{
  "@type": "Restaurant",
  "name": "Esther's Kitchen",
  "servesCuisine": "Italian",
  "address": { "@type": "PostalAddress", "addressLocality": "Las Vegas", "addressRegion": "NV" }
}
  ]
};

const FAQPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
{
  "@type": "Question",
  "name": "Where should I eat in Las Vegas for the first time?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Do one celebrity-chef room (Nobu or Bavette's), one buffet (Wicked Spoon or Bacchanal), and one off-Strip local spot (Raku in Chinatown or Esther's Kitchen in the Arts District)."
  }
},
{
  "@type": "Question",
  "name": "What food is Las Vegas famous for?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Celebrity-chef restaurants, all-you-can-eat buffets, 24-hour dining, and a serious off-Strip scene in Chinatown along Spring Mountain Road."
  }
},
{
  "@type": "Question",
  "name": "Do I need reservations at Las Vegas restaurants?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "For celebrity-chef dinners (Joël Robuchon, Nobu, Bavette's) book 2–4 weeks ahead. Buffets, food halls, and late-night spots are mostly walk-up."
  }
},
{
  "@type": "Question",
  "name": "What's the best cheap eat in Las Vegas right now?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Secret Pizza on the 3rd-floor mezzanine of The Cosmopolitan ($6–$9 a slice, no signage), In-N-Out near the Strip, and Tacos El Gordo for late-night al pastor."
  }
},
{
  "@type": "Question",
  "name": "Where can solo diners find fast and flavorful meals in Las Vegas?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Secret Pizza at The Cosmopolitan, Eggslut for breakfast, and the counters at Eataly's stations all work for a quick solo meal where a table for one is normal."
  }
},
{
  "@type": "Question",
  "name": "Which Las Vegas restaurants offer stylish bar dining for solo guests?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Bavette's, Carson Kitchen Downtown, and Raku in Chinatown all serve the full menu at the bar, which is the best seat when you're on your own."
  }
},
{
  "@type": "Question",
  "name": "What are the best off-Strip restaurants in Las Vegas?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Spring Mountain Road (Chinatown) is the city's real food destination — Raku, Lotus of Siam, and dozens of Asian spots. The Arts District has Esther's Kitchen, and Downtown has Carson Kitchen."
  }
},
{
  "@type": "Question",
  "name": "Which Las Vegas buffets are still worth it?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Wicked Spoon at The Cosmopolitan ($32–$50) for quality, Bacchanal Buffet at Caesars ($50–$70) for the famous spread, and off-Strip casino buffets (Palace Station, Gold Coast) for old-school value."
  }
},
{
  "@type": "Question",
  "name": "Where can I find good late-night food in Las Vegas?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "The Peppermill is a 24-hour Strip diner open since 1972, Secret Pizza runs until 3am, and Tacos El Gordo serves until 4am on weekends."
  }
}
  ]
};

const howto = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Eat Well in Las Vegas",
  "description": "A practical guide to eating well in Las Vegas — from celebrity-chef rooms and buffets to off-Strip gems, food halls, cheap eats, and late-night dining.",
  "supply": [
    { "@type": "HowToSupply", "name": "Rideshare app or Strip monorail pass" },
    { "@type": "HowToSupply", "name": "Camera or smartphone for food photos" },
    { "@type": "HowToSupply", "name": "Cash or card for quick bites" }
  ],
  "tool": [
    { "@type": "HowToTool", "name": "Google Maps or Transit app" },
    { "@type": "HowToTool", "name": "OpenTable or Resy for reservations" }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "Eat the Las Vegas classics",
      "text": "Do one celebrity-chef room, one buffet plate, and a slice of Secret Pizza at The Cosmopolitan — the trio that sums up modern Vegas eating."
    },
    {
      "@type": "HowToStep",
      "name": "Pick a neighborhood to eat your way through",
      "text": "Spring Mountain Road (Chinatown) for the best Asian food, the Arts District for Esther's Kitchen and craft spots, Downtown/Fremont for Carson Kitchen and Container Park."
    },
    {
      "@type": "HowToStep",
      "name": "Use food halls for groups or indecision",
      "text": "Eataly at Park MGM, Block 16 at The Venetian, or Proper Eats at Aria — everyone gets what they want at one table."
    },
    {
      "@type": "HowToStep",
      "name": "Book splurge restaurants early",
      "text": "Joël Robuchon, Nobu, and Bavette's release reservations 2–4 weeks ahead and fill on weekends. Set an alarm."
    },
    {
      "@type": "HowToStep",
      "name": "Fast & Flavorful Solo Dining",
      "text": "Start with Secret Pizza, Eggslut, or an Eataly counter for quick meals with counter seating."
    },
    {
      "@type": "HowToStep",
      "name": "Bar Dining with Style",
      "text": "Sit at the bar at Bavette's, Carson Kitchen, or Raku; they serve the full menu there."
    },
    {
      "@type": "HowToStep",
      "name": "Get a late-night meal",
      "text": "The Peppermill runs 24 hours, Secret Pizza until 3am, and Tacos El Gordo serves al pastor until 4am on weekends."
    }
  ]
};

const itemlist ={
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Las Vegas Food Guide: Restaurants, Buffets & Where to Eat",
  "itemListOrder": "Unordered",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Las Vegas Dishes to Eat at Least Once",
      "description": "A celebrity-chef tasting menu, a real buffet plate, Secret Pizza at The Cosmopolitan, late-night al pastor at Tacos El Gordo, and a shrimp cocktail Vegas classic."
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Celebrity-Chef Restaurants",
      "description": "Joël Robuchon, Nobu, Bavette's, and Gordon Ramsay outposts — the splurge tier that rewards an early reservation."
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Best Cheap Eats in Las Vegas",
      "description": "Secret Pizza, In-N-Out, Eggslut, and Tacos El Gordo — Strip-area meals under $15."
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Las Vegas Food Halls",
      "description": "Eataly at Park MGM, Block 16 Urban Food Hall at The Venetian, Proper Eats at Aria, and Downtown Container Park."
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Fast & Flavorful Solo Dining",
      "description": "Secret Pizza, Eggslut, and Eataly's counters offer quick meals with counter seating where a table for one is normal."
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Bar Dining with Style",
      "description": "Bavette's, Carson Kitchen, and Raku serve the full menu at the bar, the best seat for one."
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "Off-Strip Gems",
      "description": "Raku and Lotus of Siam in Chinatown, Esther's Kitchen in the Arts District, and Carson Kitchen Downtown."
    },
    {
      "@type": "ListItem",
      "position": 8,
      "name": "The Best Buffets",
      "description": "Wicked Spoon, Bacchanal Buffet, and old-school off-Strip casino buffets for value."
    },
    {
      "@type": "ListItem",
      "position": 9,
      "name": "Late-Night Food",
      "description": "The Peppermill 24-hour diner, Secret Pizza until 3am, and Tacos El Gordo until 4am on weekends."
    }
  ]
};

const breadcrumblist = {
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
      "name": "Food",
      "item": "https://www.travelsamericas.com/destination/lasvegas/food"
    }
  ]
                };

export default function LasVegasFoodPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
        { "@type": "ListItem", "position": 2, "name": "Las Vegas", "item": "https://www.travelsamericas.com/destination/lasvegas" },
        { "@type": "ListItem", "position": 3, "name": "Best Food in Las Vegas", "item": "https://www.travelsamericas.com/destination/lasvegas/food" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Best Food in Las Vegas 2026 | On & Off the Strip",
      "description": "Where to eat in Las Vegas — celebrity chef restaurants, cheap eats, best buffets, and the spots locals actually go.",
      "url": "https://www.travelsamericas.com/destination/lasvegas/food",
      "inLanguage": "en-US",
      "publisher": { "@type": "Organization", "name": "Travels Americas", "url": "https://www.travelsamericas.com" },
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LasVegasFoodClient />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(Article) }}/>
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQPage) }}/>
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howto) }}/>
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemlist) }}/>
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumblist) }}/>
  </>
  );
}
