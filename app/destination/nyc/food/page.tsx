export const generateMetadata = () => ({
  title: "Best Food in NYC 2026: Restaurants, Food Halls & Where to Eat",
  description: "Where to eat in New York City — best restaurants by cuisine and neighborhood, food halls, pizza, bagels, and price ranges. A 2026 NYC food guide.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.travelsamericas.com/destination/nyc/food',
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Food in NYC 2026: Restaurants, Food Halls & Where to Eat",
    description: "Where to eat in New York City — best restaurants by cuisine and neighborhood, food halls, pizza, bagels, and price ranges.",
    images: ["https://www.travelsamericas.com/data/majorcities/newyork/assets/nyc-solo-dining.webp"],
  },
  openGraph: {
    title: "Best Food in NYC 2026: Restaurants, Food Halls & Where to Eat",
    description: "Where to eat in New York City — best restaurants by cuisine and neighborhood, food halls, pizza, bagels, and price ranges. A 2026 NYC food guide.",
    url: 'https://www.travelsamericas.com/destination/nyc/food',
    type: 'article',
    siteName: 'Travels Americas',
    images: [{ url: "https://www.travelsamericas.com/data/majorcities/newyork/assets/nyc-solo-dining.webp", width: 1200, height: 630 }],
  }
});

import FoodClientPage from './foodclient';


// Schema markup (moved from client component)
const Article = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Where to Eat in New York City: The 2026 Food Guide",
  "description": "Where to eat in New York City — best restaurants by cuisine and neighborhood, food halls, pizza, bagels, and price ranges. A 2026 NYC food guide.",
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
  "image": "https://www.travelsamericas.com/data/majorcities/assets/nyc-solo-dining.webp",
  "articleSection": ["Restaurants", "Food Halls", "Pizza", "Bagels", "Solo Dining"],
  "mainEntity": [
{
  "@type": "Restaurant",
  "name": "Ichiran Ramen",
  "servesCuisine": "Japanese Ramen",
  "address": { "@type": "PostalAddress", "addressLocality": "New York", "addressRegion": "NY" }
},
{
  "@type": "Restaurant",
  "name": "Mimi Cheng's Dumplings",
  "servesCuisine": "Chinese Dumplings",
  "address": { "@type": "PostalAddress", "addressLocality": "New York", "addressRegion": "NY" }
},
{
  "@type": "Restaurant",
  "name": "Shake Shack",
  "servesCuisine": "American Burgers",
  "address": { "@type": "PostalAddress", "addressLocality": "New York", "addressRegion": "NY" }
},
{
  "@type": "Restaurant",
  "name": "The Modern",
  "servesCuisine": "Contemporary American",
  "address": { "@type": "PostalAddress", "addressLocality": "New York", "addressRegion": "NY" }
},
{
  "@type": "Restaurant",
  "name": "Estela",
  "servesCuisine": "Modern American",
  "address": { "@type": "PostalAddress", "addressLocality": "New York", "addressRegion": "NY" }
},
{
  "@type": "Restaurant",
  "name": "Café Sabarsky",
  "servesCuisine": "Austrian Café",
  "address": { "@type": "PostalAddress", "addressLocality": "New York", "addressRegion": "NY" }
},
{
  "@type": "Restaurant",
  "name": "Murray's Bagels",
  "servesCuisine": "Bagels",
  "address": { "@type": "PostalAddress", "addressLocality": "New York", "addressRegion": "NY" }
},
{
  "@type": "Restaurant",
  "name": "Grand Central Oyster Bar",
  "servesCuisine": "Seafood",
  "address": { "@type": "PostalAddress", "addressLocality": "New York", "addressRegion": "NY" }
},
{
  "@type": "Restaurant",
  "name": "Joe Allen",
  "servesCuisine": "American",
  "address": { "@type": "PostalAddress", "addressLocality": "New York", "addressRegion": "NY" }
}
  ]
};

const FAQPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
{
  "@type": "Question",
  "name": "Where should I eat in NYC for the first time?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Hit one classic (Katz's or Joe's Pizza), one neighborhood (Chinatown or the West Village), and one food hall (Chelsea Market or Time Out Market)."
  }
},
{
  "@type": "Question",
  "name": "What food is NYC famous for?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Pizza, bagels, pastrami, dim sum, and cheesecake — plus a global restaurant scene that spans every cuisine."
  }
},
{
  "@type": "Question",
  "name": "Do I need reservations at NYC restaurants?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "For the splurge and buzzy mid-range spots, yes — often 28 days ahead. Food halls, slice shops, and bagel counters are walk-up."
  }
},
{
  "@type": "Question",
  "name": "What's the best pizza in NYC right now?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Una Pizza Napoletana (whole Neapolitan pies), L'Industrie (best slice), and Mama's Too (squares) are the current critics' picks."
  }
},
{
  "@type": "Question",
  "name": "Where can solo diners find fast and flavorful meals in NYC?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Ichiran has private single booths built for eating alone. Mimi Cheng's and Shake Shack are counter spots where a table for one is normal."
  }
},
{
  "@type": "Question",
  "name": "Which NYC restaurants offer stylish bar dining for solo guests?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "The Modern, Estela and Café Sabarsky all serve their full menu at the bar, which is the best seat when you're on your own."
  }
},
{
  "@type": "Question",
  "name": "What are good spots for solo dining near Broadway theaters?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Murray's Bagels, the Grand Central Oyster Bar and Joe Allen all sit near the theaters and work for a quick bite before a show or a late one after."
  }
},
{
  "@type": "Question",
  "name": "Which bagel shops in NYC serve traditional hand-rolled bagels?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Murray's, Ess-a-Bagel and Absolute hand-roll and boil their bagels the old way. Order it with a schmear and skip the toaster."
  }
},
{
  "@type": "Question",
  "name": "Where can I find artisan bagels with inventive toppings?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Black Seed makes Montreal-style bagels in a wood-fired oven, Apollo built a cult following, and Utopia in Queens is worth the trek."
  }
}
  ]
};

const howto = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Eat Well in New York City",
  "description": "A practical guide to eating well in NYC — from iconic dishes and restaurant picks to food halls, pizza, bagels, and solo dining.",
  "supply": [
    { "@type": "HowToSupply", "name": "MetroCard or OMNY pass" },
    { "@type": "HowToSupply", "name": "Camera or smartphone for food photos" },
    { "@type": "HowToSupply", "name": "Cash or card for quick bites" }
  ],
  "tool": [
    { "@type": "HowToTool", "name": "Google Maps or Citymapper" },
    { "@type": "HowToTool", "name": "Resy or OpenTable for reservations" }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "Eat the NYC classics",
      "text": "Start with a proper slice (fold it in half — that's how it's eaten here), a hand-rolled bagel with schmear, and pastrami on rye at Katz's."
    },
    {
      "@type": "HowToStep",
      "name": "Pick a neighborhood to eat your way through",
      "text": "The West Village for date-night spots, Chinatown/LES for cheap classics, Williamsburg for pizza and bars, Flushing for the best Chinese food in the city."
    },
    {
      "@type": "HowToStep",
      "name": "Use food halls for groups or indecision",
      "text": "Chelsea Market, Time Out Market in DUMBO, or the Grand Central Dining Concourse — everyone gets what they want at one table."
    },
    {
      "@type": "HowToStep",
      "name": "Book splurge restaurants early",
      "text": "Carbone, Lilia, and other hard books release reservations up to 28 days ahead and fill in minutes. Set an alarm."
    },
    {
      "@type": "HowToStep",
      "name": "Fast & Flavorful Solo Dining",
      "text": "Start with Ichiran Ramen, Mimi Cheng's Dumplings, or Shake Shack for quick meals with counter seating or solo booths."
    },
    {
      "@type": "HowToStep",
      "name": "Bar Dining with Style",
      "text": "Sit at the bar at The Modern, Estela, or Café Sabarsky; they serve the full menu there."
    },
    {
      "@type": "HowToStep",
      "name": "Get a proper bagel",
      "text": "Murray's, Ess-a-Bagel, and Absolute hand-roll and boil theirs the old way. Order with a schmear — don't ask them to toast it."
    }
  ]
};

const itemlist ={
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "NYC Food Guide: Restaurants, Food Halls & Where to Eat",
  "itemListOrder": "Unordered",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "NYC Dishes to Eat at Least Once",
      "description": "A proper slice folded in half, a hand-rolled bagel with schmear, pastrami on rye at Katz's, dim sum at Nom Wah, and a black-and-white cookie."
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Special-Occasion Restaurants",
      "description": "Semma, Carbone, Le Bernardin, Eleven Madison Park — the splurge tier that requires planning and early reservations."
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Best Pizza in NYC",
      "description": "Una Pizza Napoletana, Mama's Too, L'Industrie, Joe's Pizza, and Prince Street Pizza."
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "NYC Food Halls",
      "description": "Chelsea Market, Time Out Market DUMBO, Grand Central Dining Concourse, Gotham West Market, Essex Market, Smorgasburg."
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Fast & Flavorful Solo Dining",
      "description": "Ichiran Ramen, Mimi Cheng's Dumplings, and Shake Shack offer quick meals with counter seating or solo booths."
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Bar Dining with Style",
      "description": "The Modern, Estela, and Café Sabarsky serve the full menu at the bar, the best seat for one."
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "Near the Theaters",
      "description": "Murray's Bagels, Grand Central Oyster Bar, and Joe Allen work for a quick bite before or after a show."
    },
    {
      "@type": "ListItem",
      "position": 8,
      "name": "The Classic Bagels",
      "description": "Murray's, Ess-a-Bagel, and Absolute hand-roll and boil theirs the old way."
    },
    {
      "@type": "ListItem",
      "position": 9,
      "name": "The Newer Bagel Crowd",
      "description": "Black Seed goes Montreal-style with a wood-fired oven; Apollo and Utopia have their fans."
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
      "name": "New York",
      "item": "https://www.travelsamericas.com/destination/nyc/"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Food",
      "item": "https://www.travelsamericas.com/destination/nyc/food"
    }
  ]
                };

export default function FoodPage() {
  // Render the JSON-LD. These schemas were defined but never output before.
  const schemas = [Article, FAQPage, howto, itemlist, breadcrumblist];
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <FoodClientPage />
    </>
  );
}
