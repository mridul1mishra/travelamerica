"use client";
import { useParams } from "next/navigation";
import Header from "../../../components/Header/header";
import Link from 'next/link';
import Image from 'next/image';
import styles from './lasvegassoloitinerary.module.css';
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

export default async function LasVegasSoloItineraryClient({ grouped }: SoloItineraryClientProps) {

    const schema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "name": "Solo Travel Itinerary for Las Vegas",
  "description": "Explore Las Vegas solo with this 3-day itinerary covering the Strip, Fremont Street, the Arts District and Chinatown, plus a day trip to Hoover Dam or Red Rock Canyon — with honest solo-safety and transit notes.",
  "touristType": {"@type": "Audience", "name": "Solo Travelers" },
  "about": [{"@type": "Thing","name": "Solo Travel" }, {"@type": "Place", "name": "Las Vegas"}],
  "mainEntityOfPage": {
    "@type": "WebPage",
    "name": "Solo Las Vegas Travel Itinerary",
    "url": "https://www.travelsamericas.com/destination/lasvegas/solo-itinerary"
  },
  "image": {
    "@type": "ImageObject",
    "url": "https://www.travelsamericas.com/data/majorcities/lasvegas/assets/solo-travel-itinerary.png",
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
      "name": "Is Las Vegas safe for solo travelers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Las Vegas is one of the easiest cities to visit solo. The Strip and Fremont Street are well-lit, busy and heavily monitored late into the night. Stay aware on the casino floors, keep an eye on your drinks, and use rideshare rather than walking long, empty stretches of Las Vegas Blvd after dark."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best 3-day solo itinerary for Las Vegas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A popular 3-day solo itinerary includes: Day 1 walking the Strip with the Bellagio fountains and a Cirque du Soleil show; Day 2 Downtown and Fremont Street plus the off-Strip Arts District and Chinatown; and Day 3 a day trip to Hoover Dam or Red Rock Canyon."
      }
    },
    {
      "@type": "Question",
      "name": "Which areas are best for solo travelers in Las Vegas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The central Strip, the Fremont Street Experience downtown, the 18b Arts District, and Spring Mountain Road (Chinatown) are great for solo travelers thanks to their walkability, counter-style dining, and lively but safe atmosphere."
      }
    },
    {
      "@type": "Question",
      "name": "What are the best food spots for solo travelers in Las Vegas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Solo travelers eat well at counter and bar seats like the Cosmopolitan and Proper Eats food halls on the Strip, the outdoor stalls on Fremont Street, ramen and pho counters in Chinatown, and brunch spots like EATT in the Arts District."
      }
    },
    {
      "@type": "Question",
      "name": "How can solo travelers get around Las Vegas easily?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Walk the Strip itself — it is self-contained and pedestrian-friendly. The Las Vegas Monorail runs behind the east-side resorts, and the Deuce bus covers Las Vegas Blvd to Downtown. Use Uber or Lyft for Hoover Dam, Red Rock Canyon, the Arts District and Chinatown, where distances are too far to walk. There is no subway."
      }
    }
  ]
};
const schema2 = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Las Vegas Solo Traveler 3-Day Itinerary",
  "itemListOrder": "Ordered",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Day 1: The Strip at Your Own Pace",
      "description": "Walk the Strip end to end, watch the free Bellagio fountains, and catch a Cirque du Soleil show with an easy solo single seat."
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Day 2: Fremont Street, the Arts District & Chinatown",
      "description": "Explore Downtown and the Fremont Street Experience, then go off-Strip to the 18b Arts District and Chinatown for counter dining."
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Day 3: Hoover Dam or Red Rock Canyon Day Trip",
      "description": "Take a half-day trip to Hoover Dam or the Red Rock Canyon scenic loop, then close out at the Neon Museum or High Roller wheel."
    }
  ]
};
const schema3 = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Experience Las Vegas in 3 Days as a Solo Traveler",
  "description": "Step-by-step solo travel itinerary for exploring Las Vegas in three days.",
  "totalTime": "P3D",
  "supply": [
    { "@type": "HowToSupply", "name": "Rideshare budget for off-Strip trips" },
    { "@type": "HowToSupply", "name": "Comfortable walking shoes" },
    { "@type": "HowToSupply", "name": "Water, sunscreen and a portable charger" }
  ],
  "tool": [
    { "@type": "HowToTool", "name": "Uber or Lyft app" },
    { "@type": "HowToTool", "name": "Google Maps" }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "Day 1: Walk the Strip",
      "text": "Walk Las Vegas Blvd at your own pace, catch the Bellagio fountains, and book a solo single seat at a Cirque du Soleil show."
    },
    {
      "@type": "HowToStep",
      "name": "Day 2: Downtown & Off-Strip",
      "text": "See the Fremont Street Experience, then rideshare to the 18b Arts District and Chinatown for solo-friendly counter dining."
    },
    {
      "@type": "HowToStep",
      "name": "Day 3: Hoover Dam or Red Rock",
      "text": "Take a morning trip to Hoover Dam or the Red Rock Canyon loop, then finish at the Neon Museum or High Roller at sunset."
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
      "name": "Las Vegas",
      "item": "https://www.travelsamericas.com/destination/lasvegas/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Solo Travel",
      "item": "https://www.travelsamericas.com/destination/lasvegas/solo-trip-to-lasvegas"
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
      <Header image={`/data/majorcities/lasvegas/assets/solo-travel-itinerary.png`} bannerText="Solo Travel Itinerary for Las Vegas" variant="wide" />
      <BookingCTA variant="slim" text="Book hotels for your Las Vegas trip →" href="/destination/lasvegas/bookings?tab=hotels&from=solo-itinerary" label="Book this trip" />
      <section className={styles.splitSection} style={{  textAlign: "center" }}>
                <div style={{ width: "100%", textAlign: "center" }}>
                <h1  className={styles.sectionheading}>3-Day Solo Travel Itinerary for Las Vegas</h1>
                </div>
      </section>
      <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/lasvegas/assets/daysololasvegas.png"
            alt="Map of solo travel route along the Las Vegas Strip from the Bellagio to the Venetian"
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Day 1: The Strip at Your Own Pace</h2>
          <p className={styles.subheading}>Ease in on foot — the Strip is self-contained and made for solo wandering, with no compromises on pace.</p>
          <ul className={styles.itineraryList}>
              <li className={styles.subheading}>🌅Morning: Walk Las Vegas Blvd south to north — Bellagio conservatory to the Venetian (~2 miles)
              <p className={styles.description}>The Bellagio conservatory and the Venetian Grand Canal are both free. Start early to beat the heat and crowds.</p>
              </li>

              <li className={styles.subheading}>☀️Afternoon: Bellagio fountains from the Las Vegas Blvd bridge → lunch at the Cosmopolitan food hall
              <p className={styles.description}>The fountains perform every 15 minutes after noon — arrive a few minutes early and stand near the rail.</p>
              </li>
              <li className={styles.subheading}>☀️Midday: Caesars Forum Shops or the High Roller observation wheel at the LINQ
              <p className={styles.description}>The High Roller sunset slot is a great solo experience — you share a pod with strangers who are happy to chat.</p>
              </li>
              <li className={styles.subheading}>🌙Evening: Cirque du Soleil show — O at Bellagio or Kà at MGM Grand
              <p className={styles.description}>Solo single tickets are the easiest to grab, and bar seats at any Strip restaurant need no reservation.</p>
              </li>
              <li className={styles.subheading}>🚶Getting around: Walk the Strip; use the Monorail behind the east-side resorts for longer hops
              <p className={styles.description}>Solo tip: The Strip is among the safest places to be alone in Vegas day or night — busy, lit, and heavily monitored.</p>
              </li>
          </ul>
          <Link href="/destination/lasvegas/solo-trip-to-lasvegas" className={styles.ctaButton}>
            Solo Trip to Las Vegas Guide
          </Link>
        </div>
      </section>
      <section className={styles.splitSection}>
          <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Day 2: Fremont Street, Arts District & Chinatown</h2>
          <p className={styles.subheading}>Get off the Strip. Today is old-school Downtown plus the local, low-key side of Vegas.</p>
          <ul className={styles.itineraryList}>
              <li className={styles.subheading}>🌅Morning: Coffee and brunch in the 18b Arts District — Makers & Finders or EATT</li>
              <li className={styles.subheading}>☀️Midday: Wander Arts District galleries on Main St, then the Neon Museum boneyard (book ahead)</li>
              <li className={styles.subheading}>☀️Afternoon: Rideshare to Chinatown on Spring Mountain Rd — ramen, pho and bubble tea at counter seats</li>
              <li className={styles.subheading}>🌙Evening: Fremont Street Experience — the free hourly LED light show and outdoor food stalls</li>
              <li className={styles.subheading}>🚗Getting around: Rideshare between the Arts District, Chinatown and Downtown — too far to walk between them</li>
          </ul>
          <Link href="/destination/lasvegas/best-areas-to-stay" className={styles.ctaButton}>
            Best areas for solo travelers in Las Vegas
          </Link>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/lasvegas/assets/day2solo.png"
            alt="Scenic view of the Fremont Street Experience and Downtown Las Vegas featured in the Day 2 solo travel itinerary"
            fill
            className={styles.mapImage}
          />
        </div>
      </section>
      <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/lasvegas/assets/day3.png"
            alt="Day 3 solo travel highlights near Las Vegas featuring Hoover Dam and Red Rock Canyon"
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Day 3: Hoover Dam or Red Rock Canyon</h2>
          <p className={styles.subheading}>Escape the neon for a few hours — desert and canyon scenery are a short rideshare or drive away.</p>
          <ul className={styles.itineraryList}>
              <li className={styles.subheading}>🌅Morning: Hoover Dam (30 min via US-93) — the self-guided exterior walk is free; the $30 powerplant tour is worth it</li>
              <li className={styles.subheading}>☀️Midday: Lunch in Boulder City — a quiet, casino-free Nevada town with a good diner scene</li>
              <li className={styles.subheading}>☀️Alternative: Red Rock Canyon 13-mile scenic loop ($15 vehicle entry) with short solo-friendly trails</li>
              <li className={styles.subheading}>🌙Evening: Back to the Strip — Wicked Spoon buffet, then a last walk past the fountains</li>
              <li className={styles.subheading}>🚗Solo tip: Bring water and sunscreen for the desert; book a rideshare or rental car as there is no transit to the dam or canyon</li>
          </ul>
          <Link href="/destination/lasvegas/food" className={styles.ctaButton}>
            Best Food Stops Along the Route
          </Link>
        </div>
      </section>
      <FAQ groupedFaqs={grouped}/>
      <BookingCTA variant="full" text="Find the right hotel for your stay" href="/destination/lasvegas/bookings?tab=hotels&from=solo-itinerary" label="Book this trip" />
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
