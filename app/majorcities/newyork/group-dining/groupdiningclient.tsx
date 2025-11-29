"use client";
import { useParams } from "next/navigation";
import Header from "../../../components/Header/header";
import Link from 'next/link';
import Image from 'next/image';
import styles from './groupdining.module.css';
import Footer from "@/app/components/Header/Footer/footer";
export default function GroupDiningClientPage() {
    
    const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Solo Dining, NYC Style: Cozy Counters & Elegant Bars",
  "description": "A curated guide to solo dining in New York City, featuring ramen counters, elegant bars, and local flavor spots.",
  "author": {
    "@type": "Organization",
    "name": "Travel America"
  },
  "datePublished": "2025-10-19",
  "image": "https://www.travelamerica.work/data/majorcities/assets/nyc-solo-dining.png",
  "articleSection": ["Fast & Flavorful", "Bar Dining", "Local Flavor"],
  "mainEntity": [
    {
      "@type": "Restaurant",
      "name": "Ichiran Ramen",
      "servesCuisine": "Japanese Ramen",
      "address": { "@type": "PostalAddress", "addressLocality": "New York", "addressRegion": "NY" }
    },
    {
      "@type": "Restaurant",
      "name": "Mimi Cheng’s Dumplings",
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
      "name": "Murray’s Bagels",
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

    return(
        <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
        <Header image={`/data/majorcities/newyork/assets/nyc-solo-dining.png`} bannerText="Hero banner showcasing NYC solo dining experience for travelers" />
        <section className={styles.splitSection} style={{textAlign: "center" }}>
                <div style={{ width: "100%", textAlign: "center" }}>
                <h1  className={styles.sectionheading}>Discover Group Dining in NYC!</h1>
                <p>From tucked‑away corners perfect for solo explorers to sprawling tables built for groups, New York City’s food scene adapts to every traveller. Group dining here means more than just eating — it’s about sharing the city itself.</p>
                </div>
        </section>
        <section className={styles.splitSection}>
                
                <div className={styles.imageWrapper}>
                <Image
                    src="/data/majorcities/newyork/assets/asian-food-rainy-day-solo-dining-new-york-city.png"
                    alt="Table with pizza, pasta, taco, and soda overlooking the Empire State Building in New York City, capturing a solo traveler’s cozy dining experience"
                    fill
                    className={styles.mapImage}
                />
                </div>
                <div className={styles.textWrapper}>
                <h2 className={styles.heading}>Group Dining, Best steak house Brooklyn</h2>
                <p>Brooklyn boasts some of the best steak houses.</p>
                <p className={styles.subheading}>🍜 Peter Luger Ribeye delivers bold flavor, marbling, and tenderness, making it a favorite for group dining travelers. French steak frites Brooklyn at Le Relais de Venise L’Entrecôte brings classic French charm to the borough’s dining scene, perfect for shared experiences.</p>
                <p className={styles.subheading}>🍷 Brooklyn creamed spinach, truffle baked macaroni, steakhouse potato gratin, and onion rings are classic steak sides preferred by travelers.</p>
                <p className={styles.subheading}>🥯 Group travelers in Brooklyn savor Junior’s Cheesecake, indulge in Brooklyn Blackout Cake, and share Bananas Foster French Toast after steakhouse dinners.</p>
                
                <Link href="/majorcities/newyork/solo-itinerary" className={styles.ctaButton}>
                    Plan Your NYC Itinerary
                </Link>
                </div>
        </section>
        <section className={styles.splitSection}>
                
                <div className={styles.textWrapper}>
                <h2 className={styles.heading}>Flavor Hopping: NYC’s Most Delicious Food Hall Stops</h2>
                <p>Anyone who says that money cannot buy happiness has clearly never spent their money on pizza.</p>
                <p className={styles.subheading}>🏙️ New York pizza slice culture defines the city, with every best NYC pizza spot offering an authentic thin crust pie. From Brooklyn pizza legends to the iconic Joe’s Pizza, travelers search for the famous New York style pizza experience that delivers flavor, tradition, and the perfect foldable slice.</p>
                <p className={styles.subheading}>🍣 <strong>Midtown’s Best Counter Culture -</strong> Hop to Grand Central for Roberta’s pizza, Takumi Tacos, and Blue Bottle coffee in a compact, solo-friendly space.</p>
                <p className={styles.subheading}>🥟 <strong>Chelsea Market: A Flavorful Finale -</strong> End with iconic tacos, hand-pulled noodles, and sweet treats in one of NYC’s most vibrant food halls.</p>
                
                <Link href="/majorcities/newyork/landmark" className={styles.ctaButton}>
                   Explore NYC Landmarks Nearby
                </Link>
                </div>
                <div className={styles.imageWrapper}>
                <Image
                    src="/data/majorcities/newyork/assets/nyc-asian-food-hall-solo-dining-rainy-day-dumbo-chelsea.png"
                    alt="Solo traveler enjoying Asian-inspired dishes like ramen and dumplings by a window on a rainy day in New York City, evoking the cozy vibe of DUMBO and Chelsea food halls."
                    fill
                    className={styles.mapImage}
                />
                </div>
        </section>
        <section className={styles.splitSection}>
                <div className={styles.imageWrapper}>
                <Image
                    src="/data/majorcities/newyork/assets/nyc-bagel-collage-murrays-blackseed-solo-dining.png"
                    alt="Collage of New York City bagels including smoked salmon, rainbow, and sesame varieties from iconic shops like Murray’s and Black Seed, highlighting solo dining culture."
                    fill
                    className={styles.mapImage}
                />
                </div>
                <div className={styles.textWrapper}>
                <h2 className={styles.heading}>Bite Into the Bagel Capital</h2>
                <p className={styles.subheading}>🥯 <strong>Tradition in Every Bite -</strong>Iconic shops like Murray’s, Ess-a-Bagel, and Absolute Bagels serve traditional, hand-rolled bagels with timeless toppings.</p>
                <p className={styles.subheading}>🧈 <strong>Artisan Bagels & Inventive Toppings -</strong> Black Seed, Bagel Pub, and Utopia Bagels offer inventive flavors, wood-fired styles, and viral-worthy creations.</p>
                <p className={styles.subheading}>🗺️ <strong>Solo Bites & Schmear -</strong>Hudson Bagel, Apollo Bagels, and Tompkins Square Bagels provide cozy counters and outdoor seating — perfect for solo snacking.</p>
                
                <Link href="/majorcities/newyork/solo-travel" className={styles.ctaButton}>
                    Solo Travel Tips for Dining Out
                </Link>
                </div>
        </section>
        <Footer />
        </>
    );
}
