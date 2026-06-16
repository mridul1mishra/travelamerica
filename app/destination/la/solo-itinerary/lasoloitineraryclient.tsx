"use client";
import { useParams } from "next/navigation";
import Header from "../../../components/Header/header";
import Link from 'next/link';
import Image from 'next/image';
import styles from './lasoloitinerary.module.css';
import Footer from "@/app/components/Header/Footer/footer";
import BookingCTA from '@/app/components/destination/BookingCTA/BookingCTA';
import FAQ from "@/app/components/faq/faq";
import { getFaq, getFaqItinerary } from "@/app/lib/FaqData";

interface FaqItem {
  id?: string;
  question: string;
  answer: string;
}

// Define props for the component
interface SoloItineraryClientProps {
  grouped: Record<string, FaqItem[]>;
}

export default async function LASoloItineraryClient({ grouped }: SoloItineraryClientProps) {

    const schema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "name": "Solo Travel Itinerary for Los Angeles",
  "description": "Explore LA solo with this 3-day itinerary covering Griffith Observatory, the beaches, the Getty, and Downtown's Arts District — with honest car and rideshare notes.",
  "touristType": {"@type": "Audience", "name": "Solo Travelers" },
  "about": [{"@type": "Thing","name": "Solo Travel" }, {"@type": "Place", "name": "Los Angeles"}],
  "mainEntityOfPage": {
    "@type": "WebPage",
    "name": "Solo LA Travel Itinerary",
    "url": "https://www.travelsamericas.com/destination/la/solo-itinerary"
  },
  "image": {
    "@type": "ImageObject",
    "url": "https://www.travelsamericas.com/data/majorcities/losangeles/assets/solo-travel-itinerary.png",
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
      "name": "Is Los Angeles safe for solo travelers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, LA is safe for solo travelers who stick to well-trafficked areas like Santa Monica, Los Feliz, the Arts District, and Beverly Hills, avoid walking long distances after dark, and use rideshare rather than waiting at empty bus stops late at night."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best 3-day solo itinerary for Los Angeles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A popular 3-day solo itinerary includes: Day 1 Griffith Observatory, Los Feliz and Silver Lake; Day 2 Venice Beach and Santa Monica by bike; and Day 3 the Getty Center plus Downtown's Grand Central Market and Arts District."
      }
    },
    {
      "@type": "Question",
      "name": "Which neighborhoods are best for solo travelers in LA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los Feliz, Silver Lake, Santa Monica, Abbot Kinney in Venice, and the Downtown Arts District are great for solo travelers thanks to their walkability, counter-style dining, and lively but safe daytime atmosphere."
      }
    },
    {
      "@type": "Question",
      "name": "What are the best food spots for solo travelers in LA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Solo travelers eat well at counter and bar seats like Grand Central Market in DTLA, Gjusta in Venice, Bay Cities Italian Deli in Santa Monica, and the bar at Rustic Canyon."
      }
    },
    {
      "@type": "Question",
      "name": "How can solo travelers get around LA easily?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LA is car and rideshare dependent. Most solo travelers rent a car or budget for Uber and Lyft between neighborhoods, then walk within each area. The Metro rail covers some routes (DTLA, Hollywood, Santa Monica) but distances between sights are large."
      }
    }
  ]
};
const schema2 = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "LA Solo Traveler 3-Day Itinerary",
  "itemListOrder": "Ordered",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Day 1: Griffith Observatory, Los Feliz & Silver Lake",
      "description": "Start your solo trip with a hike to the observatory, walkable Los Feliz Village, and solo-friendly dining in Silver Lake."
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Day 2: Venice Beach & Santa Monica",
      "description": "Cycle the coastal path between Santa Monica and Venice, eat at counter spots on Abbot Kinney, and watch sunset from the pier."
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Day 3: The Getty & Downtown Arts District",
      "description": "Spend the morning at the free Getty Center, then explore Grand Central Market, The Broad, and the Arts District galleries."
    }
  ]
};
const schema3 = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Experience LA in 3 Days as a Solo Traveler",
  "description": "Step-by-step solo travel itinerary for exploring Los Angeles in three days.",
  "totalTime": "P3D",
  "supply": [
    { "@type": "HowToSupply", "name": "Rental car or rideshare budget" },
    { "@type": "HowToSupply", "name": "Comfortable walking shoes" },
    { "@type": "HowToSupply", "name": "Sunscreen and a portable charger" }
  ],
  "tool": [
    { "@type": "HowToTool", "name": "Uber or Lyft app" },
    { "@type": "HowToTool", "name": "Google Maps" }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "Day 1: Griffith, Los Feliz & Silver Lake",
      "text": "Hike to Griffith Observatory, walk Los Feliz Village, and have dinner at a bar seat in Silver Lake."
    },
    {
      "@type": "HowToStep",
      "name": "Day 2: Venice & Santa Monica",
      "text": "Rent a bike, ride the coastal path between Santa Monica and Venice, and watch sunset from the pier."
    },
    {
      "@type": "HowToStep",
      "name": "Day 3: The Getty & Downtown",
      "text": "Visit the Getty Center at opening, then explore Grand Central Market, The Broad, and the Arts District."
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
      "name": "Los Angeles",
      "item": "https://www.travelsamericas.com/destination/la/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Solo Travel",
      "item": "https://www.travelsamericas.com/destination/la/solo-trip-to-la"
    }
  ]
};

    return(
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema1) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema3) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema4) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema2) }}/>
    <div className="App">
      <Header image={`/data/majorcities/losangeles/assets/solo-travel-itinerary.png`} bannerText="Solo Travel Itinerary for Los Angeles" variant="wide" />
      <BookingCTA variant="slim" text="Book hotels for your Los Angeles trip →" href="/destination/la/bookings?tab=hotels&from=solo-itinerary" label="Book this trip" />
      <section className={styles.splitSection} style={{  textAlign: "center" }}>
                <div style={{ width: "100%", textAlign: "center" }}>
                <h1  className={styles.sectionheading}>3-Day Solo Travel Itinerary for Los Angeles</h1>
                </div>
      </section>
      <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/losangeles/assets/daysololosangeles.png"
            alt="Map of solo travel route through Griffith Observatory, Los Feliz, and Silver Lake in LA"
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Day 1: Griffith, Los Feliz & Silver Lake</h2>
          <p className={styles.subheading}>Ease into LA with its most walkable corner — earn a view, then wander streets you can actually do on foot.</p>
          <ul className={styles.itineraryList}>
              <li className={styles.subheading}>🌅Morning: Griffith Observatory (hike up from the Greek Theatre lot, ~30 min)
              <p className={styles.description}>Free entry. Arrive before 10am to beat the tour groups and earn the city view.</p>
              </li>

              <li className={styles.subheading}>☀️Afternoon: Los Feliz Village → coffee at Courage Bagels or Sqirl
              <p className={styles.description}>One of LA's rare proper walking streets — independent shops along Vermont Ave.</p>
              </li>
              <li className={styles.subheading}>☀️Midday: Stroll the Silver Lake Reservoir loop
              <p className={styles.description}>Flat, scenic, and pleasant at dusk — easy to do solo at your own pace.</p>
              </li>
              <li className={styles.subheading}>🌙Evening: Dinner at the bar — Bar Moruno or Alimento in Silver Lake
              <p className={styles.description}>Great solo dining energy at the counter, safe and lively.</p>
              </li>
              <li className={styles.subheading}>🚗Getting around: Drive or rideshare to the observatory lot
              <p className={styles.description}>Solo tip: Griffith and Los Feliz are among the safest areas to walk alone in LA — start here to find your feet.</p>
              </li>
          </ul>
          <Link href="/destination/la/solo-trip-to-la" className={styles.ctaButton}>
            Solo Trip to LA Guide
          </Link>
        </div>
      </section>
      <section className={styles.splitSection}>
          <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Day 2: Venice Beach & Santa Monica</h2>
          <p className={styles.subheading}>Trade the car for a bike. Today is all coast — flat path, ocean on your right the whole way.</p>
          <ul className={styles.itineraryList}>
              <li className={styles.subheading}>🌅Morning: Rent a bike in Santa Monica ($15–$25/hr) and ride south to Venice</li>
              <li className={styles.subheading}>☀️Midday: Venice Boardwalk → lunch at the Gjusta counter on Abbot Kinney</li>
              <li className={styles.subheading}>☀️Afternoon: Back to Santa Monica — Third Street Promenade or a quiet swim at Annenberg Beach House</li>
              <li className={styles.subheading}>🌙Evening: Sunset from Santa Monica Pier, then a bar seat at Rustic Canyon</li>
              <li className={styles.subheading}>🚗Getting around: Park once in Santa Monica and bike the rest — no rideshare needed all day</li>
          </ul>
          <Link href="/destination/la/neighborhood-guide" className={styles.ctaButton}>
            Best neighborhoods for solo travelers in LA
          </Link>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/losangeles/assets/day2solo.png"
            alt="Scenic view of Venice Beach and the Santa Monica Pier featured in the Day 2 solo travel itinerary"
            fill
            className={styles.mapImage}
          />
        </div>
      </section>
      <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/losangeles/assets/day3.png"
            alt="Day 3 solo travel highlights in Los Angeles featuring the Getty Center and Downtown Arts District"
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Day 3: The Getty & Downtown Arts District</h2>
          <p className={styles.subheading}>Hilltop art in the morning, downtown grit in the afternoon — two very different sides of LA in one day.</p>
          <ul className={styles.itineraryList}>
              <li className={styles.subheading}>🌅Morning: The Getty Center — free admission, $20 parking, arrive at the 10am opening</li>
              <li className={styles.subheading}>☀️Midday: Drive to DTLA → lunch at a stall bar in Grand Central Market</li>
              <li className={styles.subheading}>☀️Afternoon: The Broad (book ahead, free-to-$18) → Arts District murals on Mateo St</li>
              <li className={styles.subheading}>🌙Evening: Coffee at Endorffeine, then a gallery walk from Hauser & Wirth</li>
              <li className={styles.subheading}>🚗Solo tip: Stick to Grand Ave and the Arts District core — avoid walking more than a few blocks east of Main St after dark</li>
          </ul>
          <Link href="/destination/la/food" className={styles.ctaButton}>
            Best Food Stops Along the Route
          </Link>
        </div>
      </section>
      <FAQ groupedFaqs={grouped}/>
      <BookingCTA variant="full" text="Find the right hotel for your LA stay" href="/destination/la/bookings?tab=hotels&from=solo-itinerary" label="Book your trip" />
      <Footer />
    </div>
    </>
);
}
function capitalizeWords(str: string) {
  return str
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}
