"use client";
import { useParams } from "next/navigation";
import Header from "../../../components/Header/header";
import Link from 'next/link';
import Image from 'next/image';
import styles from './groupitinerary.module.css';
import Footer from "@/app/components/Header/Footer/footer";

export default function GroupItineraryClient() {
    const BlogPosting = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "3-Day New York City Group Travel Itinerary",
  "description": "Plan the perfect 3-day NYC trip for groups with museums, parks, Broadway, and a Hudson River dinner cruise.",
  "author": {
    "@type": "Organization",
    "name": "Travel America"
  },
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "TouristAttraction",
        "position": 1,
        "name": "Metropolitan Museum of Art",
        "description": "Quiet reflection in timeless galleries."
      },
      {
        "@type": "TouristAttraction",
        "position": 2,
        "name": "Central Park",
        "description": "Tree-lined paths and lakeside views."
      },
      {
        "@type": "TouristAttraction",
        "position": 3,
        "name": "Guggenheim Museum",
        "description": "Modern art in iconic spiral galleries."
      },
      {
        "@type": "TouristAttraction",
        "position": 4,
        "name": "Frick Collection",
        "description": "Intimate encounters with European masterpieces."
      },
      {
        "@type": "Event",
        "position": 5,
        "name": "Hudson River Dinner Cruise",
        "description": "Group dancing, skyline views, and shared plates."
      }
    ]
  }
};
    const FAQPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best 3-day itinerary in New York City for groups?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A popular 3-day group itinerary includes Day 1 exploring Times Square, Broadway, and Central Park; Day 2 visiting the Statue of Liberty, Ellis Island, and the 9/11 Memorial; and Day 3 enjoying museums like the Met or MoMA followed by group dining in Midtown."
      }
    },
    {
      "@type": "Question",
      "name": "How can large groups travel around New York City?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Groups can use charter buses, subway passes, or rideshare vans. Walking tours are also a great option for exploring neighborhoods together."
      }
    },
    {
      "@type": "Question",
      "name": "Are there group discounts for NYC attractions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, attractions like the Statue of Liberty, Empire State Building, and museums often provide discounted rates for groups of 10 or more. Booking in advance is recommended."
      }
    },
    {
      "@type": "Question",
      "name": "What are good group dining options in New York City?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Family-style restaurants such as Carmine’s, Korean BBQ spots like Kang Ho Dong Baekjeong, and dim sum halls like Jing Fong are ideal for group dining."
      }
    },
    {
      "@type": "Question",
      "name": "How should groups plan accommodations for a 3-day NYC trip?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Groups often book hotels with central locations near Midtown or Downtown. Options like suite-style hotels or boutique stays with communal spaces work well for group travelers."
      }
    }
  ]
};
const BreadcrumbList = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.travelamerica.work/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Major Cities",
      "item": "https://www.travelamerica.work/majorcities/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "New York",
      "item": "https://www.travelamerica.work/majorcities/newyork/"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Solo Travel",
      "item": "https://www.travelamerica.work/majorcities/newyork/group-itinerary"
    }
  ]
                };
const itemlist = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "3-Day New York City Group Travel Itinerary",
  "itemListOrder": "Ordered",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Day 1: Manhattan Highlights",
      "description": "Start in Times Square with coffee and photos, head to Rockefeller Center’s Top of the Rock for skyline views, explore Chelsea Market and the High Line in the afternoon, then enjoy dinner in Hell’s Kitchen followed by a Broadway show."
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Day 2: Cultural Immersion",
      "description": "Begin in Harlem at the Apollo Theater, explore Chinatown and Little Italy, then visit MoMA, the Natural History Museum, the Tenement Museum, and the Whitney. End the evening with Times Square’s neon spectacle, a Broadway show, and live music in the East Village."
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Day 3: Art, Nature & Relaxation",
      "description": "Start at the Metropolitan Museum of Art, stroll through Central Park, then visit the Guggenheim Museum and the Frick Collection. Conclude with a Hudson River dinner cruise, blending dining, skyline views, and shared group moments."
    }
  ]
};

const HowTo = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Experience New York City in 3 Days as a Group Traveler",
  "description": "Step-by-step guide for groups to explore New York City landmarks, cultural highlights, and shared experiences over three days.",
  "totalTime": "P3D",
  "supply": [
    { "@type": "HowToSupply", "name": "Group MetroCards or OMNY passes" },
    { "@type": "HowToSupply", "name": "Portable chargers and shared first aid kit" },
    { "@type": "HowToSupply", "name": "Group itinerary and reservation details" }
  ],
  "tool": [
    { "@type": "HowToTool", "name": "Google Maps or Citymapper" },
    { "@type": "HowToTool", "name": "NYC Ferry and charter buses" }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "Day 1: Manhattan Highlights",
      "text": "Begin in Times Square with coffee and photos, head to Rockefeller Center’s Top of the Rock for skyline views, explore Chelsea Market and the High Line in the afternoon, then enjoy dinner in Hell’s Kitchen followed by a Broadway show."
    },
    {
      "@type": "HowToStep",
      "name": "Day 2: Cultural Immersion",
      "text": "Start in Harlem at the Apollo Theater, explore Chinatown and Little Italy, then visit MoMA, the Natural History Museum, the Tenement Museum, and the Whitney. End the evening with Times Square’s neon spectacle, a Broadway show, and live music in the East Village."
    },
    {
      "@type": "HowToStep",
      "name": "Day 3: Art, Nature & Relaxation",
      "text": "Visit the Metropolitan Museum of Art, stroll through Central Park, then explore the Guggenheim Museum and the Frick Collection. Conclude with a Hudson River dinner cruise, blending dining, skyline views, and shared group moments."
    }
  ]
};


    return(
        <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BlogPosting) }}/>        
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemlist) }}/>        
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQPage) }}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HowTo) }}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BreadcrumbList) }}/>
        <div className="App">
            <Header image={`/data/majorcities/newyork/assets/group/nyc-group-itinerary-brooklyn-bridge-sunset.jpg`} bannerText="Group of friends sharing tacos and coffee on a rooftop terrace overlooking Brooklyn Bridge and East River at sunset in NYC" />
            <section className={styles.splitSection} style={{ textAlign: "center" }}>
                <div style={{ width: "100%", textAlign: "center" }}>
                    <h1  className={styles.sectionheading}>3 Days in New York City!</h1>
                    <p>Step into New York with friends or fellow travelers — from Broadway nights to museum mornings, Central Park strolls to a Hudson River dinner cruise. This 3‑day itinerary blends culture, connection, and skyline views, giving groups the perfect balance of discovery and relaxation</p>
                </div>
            </section>  
            <section className={styles.splitSection}>
                <div className={styles.imageWrapper}>
                <Image src="/data/majorcities/newyork/assets/group/nyc-group-itinerary-day1-times-square-chelsea-market-broadway.png" alt="Day 1 NYC group itinerary map featuring Times Square, Top of the Rock, Chelsea Market, High Line, Hell’s Kitchen, and Broadway highlights"
                    fill className={styles.mapImage}/>
                </div>
                <div className={styles.textWrapper}>
                <h2 className={styles.heading}>Day 1: Broadway Nights, Group Delights</h2>
                <p className={styles.subheading}></p>
                <ul className={styles.itineraryList}>
                    <li className={styles.subheading}>🌅Start your 3‑day New York group itinerary in Times Square, where friends grab coffee, snap photos, and soak in the neon buzz. Head to Rockefeller Center’s Top of the Rock for panoramic skyline views — perfect for group shots and planning the day ahead.</li>
                    <li className={styles.subheading}>☀️Chelsea Market anchors the afternoon with bustling halls, artisan shops, and local flavors. Groups then wander toward the High Line, where elevated paths and skyline views spark playful energy. Friends savor tacos, travelers capture stylish photos, and families pause for street performances—shared laughter and spontaneous moments leave everyone energized for the evening ahead.</li>
                    <li className={styles.subheading}>🌙Cap off the night with dinner in Hell’s Kitchen. Friends can enjoy hearty meals, shared plates, or cocktails before heading to a  Broadway show. As the lights dim 🎶, anticipation builds, and the shared awe of the performance unifies the group — ending the Day 1 with laughter, wonder, and lasting connection.</li>
                </ul>
                <Link href="/majorcities/newyork/group-dining" className={styles.ctaButton}>
                    NYC group travel safety tips
                </Link>
                </div>
            </section>
            <section className={styles.splitSection}>
          <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Day 2: Culture, Landmarks & Camaraderie</h2>
          <p className={styles.subheading}></p>
          <ul className={styles.itineraryList}>
              <li className={styles.subheading}>🌅 Harlem sets the tone with the Apollo Theater and street art celebrating jazz heritage. Chinatown’s markets and park games immerse visitors in tradition, while Little Italy’s churches, shops, and performances add historic charm, weaving culture into a shared group experience.</li>
              <li className={styles.subheading}>☀️The afternoon highlights New York’s cultural landmarks. At MoMA, groups pause before Starry Night, sharing quiet awe. The Natural History Museum shifts the mood with towering dinosaurs and immersive planetarium shows. The Tenement Museum reveals immigrant resilience, while the Whitney inspires reflection on modern American art, weaving culture into a shared group journey.</li>
              <li className={styles.subheading}>🌙As night falls, Times Square glows with neon spectacle and street performers. A Broadway show fills the evening with shared awe and applause. The group then drifts into the East Village, where live music and eclectic bars extend the rhythm of discovery, closing Day 2 with camaraderie.</li>
              
          </ul>
          <Link href="/majorcities/newyork/group-landmarks" className={styles.ctaButton}>
            Best neighborhoods for Group travelers in NYC
          </Link>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/newyork/assets/group/nyc-group-itinerary-day2-harlem-museums-east-village.png"
            alt="Scene-based illustration of group interaction at Natural History Museum with kids pointing at dinosaur skeleton and adults reacting with playful awe"
            fill
            className={styles.mapImage}
          />
        </div>  
            </section>
            <section className={styles.splitSection}>
                <div className={styles.imageWrapper}>
                <Image src="/data/majorcities/newyork/assets/group/nyc-group-itinerary-day3-dinner-cruise-dancing-manhattan.png" alt="Scene-based illustration of Day 3 NYC group itinerary with friends dancing on a Hudson River dinner cruise, Manhattan skyline, and live jazz band"
                    fill className={styles.mapImage}/>
                </div>
                <div className={styles.textWrapper}>
                <h2 className={styles.heading}>Day 3: Culture, Cruise, and Companionship</h2>
                <p className={styles.subheading}></p>
                <ul className={styles.itineraryList}>
                    <li className={styles.subheading}>🌅After the excitement of Broadway and the East Village, Day 3 begins at a gentler pace. Groups step into the Metropolitan Museum of Art, where timeless galleries invite quiet reflection and awe. A short walk into Central Park offers tree‑lined paths and lakeside views, creating a restorative balance of art and nature to ease into the day.</li>
                    <li className={styles.subheading}>☀️The afternoon continues with New York museums, offering groups a reflective pace after the city’s energy. At the Guggenheim Museum, modern art unfolds within its iconic spiral galleries, while the Frick Collection provides intimate encounters with European masterpieces. Together, these cultural landmarks enrich the group travel itinerary in NYC, balancing discovery with relaxation.</li>
                    <li className={styles.subheading}>🌙On the third evening in New York, the pace stays gentle. Groups gather at a Hudson River dinner cruise, where city lights shimmer across the water and conversation flows easily. Solo travelers find quiet reflection on deck, couples enjoy intimate skyline views, and larger groups share laughter over shared plates. The evening blends dining, scenery, and calm energy, ensuring the New York group travel itinerary ends with balance and memorable moments.</li>
                </ul>
                <Link href="/majorcities/newyork/group-travel" className={styles.ctaButton}>
                    Explore Your Solo Trip Plan
                </Link>
                </div>
            </section>
      <Footer />  
    </div>
    </>
    );
}