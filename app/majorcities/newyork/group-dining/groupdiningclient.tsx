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
  "headline": "Group Dining in NYC: Shared Tables & Festive Feasts",
  "description": "A curated guide to group dining in New York City, highlighting family-style restaurants, lively communal tables, and festive spots perfect for gatherings.",
  "author": {
    "@type": "Organization",
    "name": "Travel America",
    "url": "https://www.travelamerica.work"
  },
  "datePublished": "2025-10-19",
  "image": "https://www.travelamerica.work/data/majorcities/assets/nyc-group-dining.png",
  "articleSection": ["Family Style", "Communal Tables", "Festive Gatherings"],
  "mainEntity": [
    {
      "@type": "Restaurant",
      "name": "Carmine’s Italian Restaurant",
      "servesCuisine": "Italian Family Style",
      "address": { "@type": "PostalAddress", "addressLocality": "New York", "addressRegion": "NY" }
    },
    {
      "@type": "Restaurant",
      "name": "Kang Ho Dong Baekjeong",
      "servesCuisine": "Korean BBQ",
      "address": { "@type": "PostalAddress", "addressLocality": "New York", "addressRegion": "NY" }
    },
    {
      "@type": "Restaurant",
      "name": "Jing Fong",
      "servesCuisine": "Chinese Dim Sum",
      "address": { "@type": "PostalAddress", "addressLocality": "New York", "addressRegion": "NY" }
    },
    {
      "@type": "Restaurant",
      "name": "Roberta’s",
      "servesCuisine": "Wood-Fired Pizza",
      "address": { "@type": "PostalAddress", "addressLocality": "Brooklyn", "addressRegion": "NY" }
    },
    {
      "@type": "Restaurant",
      "name": "Beer Authority",
      "servesCuisine": "Gastropub",
      "address": { "@type": "PostalAddress", "addressLocality": "New York", "addressRegion": "NY" }
    },
    {
      "@type": "Restaurant",
      "name": "The Smith",
      "servesCuisine": "American Brasserie",
      "address": { "@type": "PostalAddress", "addressLocality": "New York", "addressRegion": "NY" }
    },
    {
      "@type": "Restaurant",
      "name": "Keens Steakhouse",
      "servesCuisine": "Steakhouse",
      "address": { "@type": "PostalAddress", "addressLocality": "New York", "addressRegion": "NY" }
    },
    {
      "@type": "Restaurant",
      "name": "Han Dynasty",
      "servesCuisine": "Sichuan Chinese",
      "address": { "@type": "PostalAddress", "addressLocality": "New York", "addressRegion": "NY" }
    },
    {
      "@type": "Restaurant",
      "name": "La Esquina",
      "servesCuisine": "Mexican",
      "address": { "@type": "PostalAddress", "addressLocality": "New York", "addressRegion": "NY" }
    }
  ]
};
    const schema1 = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the best restaurants in NYC for group dining?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Popular group-friendly restaurants in NYC include Carmine’s Italian Restaurant for family-style dining, Jing Fong for dim sum, and Keens Steakhouse for classic steakhouse gatherings."
      }
    },
    {
      "@type": "Question",
      "name": "Do NYC restaurants offer private rooms for large groups?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, many restaurants such as The Smith and Keens Steakhouse offer private dining rooms or sections that can be reserved for large parties."
      }
    },
    {
      "@type": "Question",
      "name": "Can I book group dining reservations online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most NYC restaurants allow group reservations through platforms like OpenTable or directly on their websites. For very large groups, it’s best to call the restaurant directly."
      }
    },
    {
      "@type": "Question",
      "name": "Which cuisines are best for sharing with groups?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Family-style Italian, Korean BBQ, dim sum, and wood-fired pizza are especially popular for group dining because they emphasize shared plates and communal tables."
      }
    },
    {
      "@type": "Question",
      "name": "Are there budget-friendly group dining options in NYC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, places like Roberta’s in Brooklyn for pizza, Han Dynasty for Sichuan dishes, and La Esquina for Mexican food offer affordable menus that work well for groups."
      }
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
                <p>Discover New York City’s iconic food scene: fresh bagels at sunrise, sizzling Brooklyn steaks, classic foldable pizza slices, and vibrant breweries offering craft beer and group‑friendly experiences across the boroughs.</p>
                </div>
        </section>
        <section className={styles.splitSection}>
                
                <div className={styles.imageWrapper}>
                <Image
                    src="/data/majorcities/newyork/assets/group/food/nyc-group-food.png"
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
                
                <Link href="/majorcities/newyork/group-itinerary" className={styles.ctaButton}>
                    Plan Your NYC Itinerary
                </Link>
                </div>
        </section>
        <section className={styles.splitSection}>
                
                <div className={styles.textWrapper}>
                <h2 className={styles.heading}>Slices, Sips, and Stories: New York’s Flavorful Journey</h2>
                <p className={styles.subheading}>🏙️ New York pizza slice culture defines the city, with every best NYC pizza spot offering an authentic thin crust pie. From Brooklyn pizza legends to the iconic Joe’s Pizza, travelers search for the famous New York style pizza experience that delivers flavor, tradition, and the perfect foldable slice.</p>
                <p className={styles.subheading}>🍣 NYC’s best mocktails include Beets ’N’ Cream at Bangkok Supper Club, Earhart at Getaway, and Dante’s Virgin Garibaldi — each offering unique flavor profiles that showcase the city’s growing zero‑proof cocktail culture.</p>
                <p className={styles.subheading}>🥟 In New York City, brewery lovers step into a story where history pours from Brooklyn Brewery’s taps, innovation fizzes at Other Half, and Grimm’s sours swirl like alchemy in East Williamsburg transform the city into a living film reel of neighborhoods, flavors, and community</p>
                
                <Link href="/majorcities/newyork/group-landmarks" className={styles.ctaButton}>
                   Explore NYC Landmarks Nearby
                </Link>
                </div>
                <div className={styles.imageWrapper}>
                <Image
                    src="/data/majorcities/newyork/assets/group/food/nyc-group-mocktail.png"
                    alt="Solo traveler enjoying Asian-inspired dishes like ramen and dumplings by a window on a rainy day in New York City, evoking the cozy vibe of DUMBO and Chelsea food halls."
                    width = "640"
                    height = "960"
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
                
                <Link href="/majorcities/newyork/group-travel" className={styles.ctaButton}>
                    Solo Travel Tips for Dining Out
                </Link>
                </div>
        </section>
        <Footer />
        </>
    );
}
