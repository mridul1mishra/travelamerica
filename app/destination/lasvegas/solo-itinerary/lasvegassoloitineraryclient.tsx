"use client";
import Header from "../../../components/Header/header";
import Image from 'next/image';
import styles from './lasvegassoloitinerary.module.css';
import Footer from "@/app/components/Header/Footer/footer";
import BookingCTA from '@/app/components/destination/BookingCTA/BookingCTA';
import FAQ from "@/app/components/faq/faq";

interface FaqItem {
  id?: string;
  question: string;
  answer: string;
}

// Define props for the component
interface SoloItineraryClientProps {
  grouped: Record<string, FaqItem[]>;
}

export default function LasVegasSoloItineraryClient({ grouped }: SoloItineraryClientProps) {

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
      <section className={`${styles.splitSection} ${styles.introSection}`}>
        <div className={styles.introContent}>
          <h1 className={styles.sectionheading}>3-Day Solo Travel Itinerary for Las Vegas</h1>
          <p className={styles.introText}>A solo-friendly route built around walkable days, easy food stops, safe late-night movement, and one desert escape.</p>
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
          <p className={styles.bodyText}>Ease in on foot — the Strip is self-contained and made for solo wandering, with no compromises on pace.</p>
          <ul className={styles.itineraryList}>
              <li><span className={styles.itineraryLabel}>Morning</span> Bellagio Conservatory, then walk north toward the Venetian.</li>
              <li><span className={styles.itineraryLabel}>Afternoon</span> Caesars Forum Shops or the High Roller sunset slot.</li>
              <li><span className={styles.itineraryLabel}>Evening</span> Cirque du Soleil, then an easy solo bar-seat dinner.</li>
              <li><span className={styles.itineraryLabel}>Getting around</span> Walk the Strip; use the Monorail for longer east-side hops.</li>
          </ul>
        </div>
      </section>
      <section className={styles.splitSection}>
          <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Day 2: Fremont Street, Arts District & Chinatown</h2>
          <p className={styles.bodyText}>Get off the Strip. Today is old-school Downtown plus the local, low-key side of Vegas.</p>
          <ul className={styles.itineraryList}>
              <li><span className={styles.itineraryLabel}>Morning</span> Brunch in the Arts District.</li>
              <li><span className={styles.itineraryLabel}>Afternoon</span> Chinatown counter seats for ramen, pho, or bubble tea.</li>
              <li><span className={styles.itineraryLabel}>Evening</span> Fremont Street light show and casual food stalls.</li>
              <li><span className={styles.itineraryLabel}>Getting around</span> Rideshare between Downtown, Chinatown, and 18b.</li>
          </ul>
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
          <p className={styles.bodyText}>Escape the neon for a few hours — desert and canyon scenery are a short rideshare or drive away.</p>
          <ul className={styles.itineraryList}>
              <li><span className={styles.itineraryLabel}>Morning</span> Hoover Dam exterior walk or powerplant tour.</li>
              <li><span className={styles.itineraryLabel}>Alternative</span> Red Rock Canyon scenic loop and short trails.</li>
              <li><span className={styles.itineraryLabel}>Evening</span> Return for Wicked Spoon and a final fountain walk.</li>
              <li><span className={styles.itineraryLabel}>Solo tip</span> Bring water, sunscreen, and pre-plan your ride.</li>
          </ul>
        </div>
      </section>
      <FAQ groupedFaqs={grouped}/>
      <BookingCTA variant="full" text="Find the right hotel for your stay" href="/destination/lasvegas/bookings?tab=hotels&from=solo-itinerary" label="Book this trip" />
      <Footer />
    </div>
    </>
);
}
