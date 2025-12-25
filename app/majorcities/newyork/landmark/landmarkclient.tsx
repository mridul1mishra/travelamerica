"use client";
import { useParams } from "next/navigation";
import Header from "../../../components/Header/header";
import Link from 'next/link';
import Image from 'next/image';
import styles from './landmark.module.css';
import Footer from "@/app/components/Header/Footer/footer";
export default function LandmarkPage() {
    const historicallandmarks = {
  "@context": "https://schema.org",
  "@type": "LandmarksOrHistoricalBuildings",
  "name": "Statue of Liberty",
  "description": "The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor.",
  "image": "https://www.travelamerica.work/data/majorcities/newyork/assets/statue-of-liberty.jpg",
  "url": "https://www.travelamerica.work/majorcities/newyork/landmark",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Liberty Island",
    "addressLocality": "New York",
    "addressRegion": "NY",
    "postalCode": "10004",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "40.6892",
    "longitude": "-74.0445"
  },
  "touristType": "Solo Travelers"
};
    const faqpage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What makes Manhattan ideal for solo travelers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Manhattan offers iconic views, peaceful strolls in Central Park, sensory immersion in Times Square, and quiet reflection at The Met and MoMA. Its walkable streets, reliable transit, and cozy cafés make it safe, spontaneous, and perfect for solo discovery."
      }
    },
    {
      "@type": "Question",
      "name": "How can solo travelers enjoy spontaneity in Manhattan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Solo travelers can explore museums, cafés, and vibrant streets at their own pace. Manhattan’s walkable landmarks and central stays allow flexible itineraries without rigid plans, offering freedom to wander and reflect."
      }
    },
    {
      "@type": "Question",
      "name": "Why is Brooklyn a great destination for solo travelers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Brooklyn invites solo travelers to roam creative streets, linger in indie bookstores, savor skyline views from Dumbo, and reflect in Prospect Park. Its soulful, walkable neighborhoods and vibrant cafés make it ideal for self-paced exploration."
      }
    },
    {
      "@type": "Question",
      "name": "How can solo travelers plan flexible itineraries in Brooklyn?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Brooklyn unfolds best with modular itineraries. Solo travelers can loop through creative hubs, pause in parks, stay near transit, and explore cafés by vibe, making discovery easy and soulful."
      }
    },
    {
      "@type": "Question",
      "name": "What makes visiting the Statue of Liberty special for solo travelers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standing solo beneath the Statue of Liberty offers a cinematic, introspective experience. Ferry rides, skyline views, and quiet reflection make it empowering, peaceful, and perfect for solo photo ops."
      }
    },
    {
      "@type": "Question",
      "name": "How should solo travelers plan a visit to the Statue of Liberty?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Solo travelers can plan morning ferries, skyline loops, and nearby solo-friendly cafés. Pairing the visit with Lower Manhattan walks creates a seamless itinerary for reflection and exploration."
      }
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
      "item": "https://www.travelamerica.work/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "New York",
      "item": "https://www.travelamerica.work/majorcities/newyork/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Solo Travel",
      "item": "https://www.travelamerica.work/majorcities/newyork/landmark"
    }
  ]
};
const itemlist = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "NYC Solo Traveler Landmarks & Borough Highlights",
  "itemListOrder": "Unordered",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Empire State Building",
      "description": "Iconic views from the Empire State Building, bold and cinematic for solo discovery."
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Central Park",
      "description": "Peaceful strolls and reflective walks in Central Park, endlessly walkable for solo travelers."
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Times Square",
      "description": "Sensory immersion in Times Square’s lights and energy, perfect for spontaneous solo photo ops."
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "The Met & MoMA",
      "description": "Quiet reflection and cultural immersion at The Met and MoMA, ideal for flexible solo itineraries."
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Brooklyn Creative Streets",
      "description": "Roam indie bookstores, soulful cafés, and skyline views from Dumbo for unexpected solo moments."
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Prospect Park",
      "description": "Reflect in Prospect Park’s walkable, soulful spaces with freedom to explore at your own pace."
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "Statue of Liberty",
      "description": "Stand solo beneath the Statue of Liberty, enjoy ferry views, skyline moments, and quiet reflection."
    },
    {
      "@type": "ListItem",
      "position": 8,
      "name": "Lower Manhattan Walks",
      "description": "Pair a Statue of Liberty visit with Lower Manhattan walks, skyline loops, and solo-friendly cafés."
    }
  ]
};
const howto = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Explore NYC Landmarks as a Solo Traveler",
  "description": "Step-by-step guide for solo travelers to experience Manhattan, Brooklyn, and iconic landmarks like the Statue of Liberty.",
  "totalTime": "P3D",
  "supply": [
    { "@type": "HowToSupply", "name": "MetroCard or OMNY pass" },
    { "@type": "HowToSupply", "name": "Comfortable walking shoes" },
    { "@type": "HowToSupply", "name": "Portable charger" },
    { "@type": "HowToSupply", "name": "Camera or smartphone for photo ops" }
  ],
  "tool": [
    { "@type": "HowToTool", "name": "Citymapper or Google Maps" },
    { "@type": "HowToTool", "name": "NYC Ferry" }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "Discover Manhattan Icons",
      "text": "Visit the Empire State Building for panoramic views, stroll through Central Park, immerse yourself in Times Square, and reflect at The Met or MoMA."
    },
    {
      "@type": "HowToStep",
      "name": "Capture Solo Moments",
      "text": "Take spontaneous photo ops in walkable streets, enjoy cozy cafés, and explore cultural immersion at your own pace."
    },
    {
      "@type": "HowToStep",
      "name": "Roam Brooklyn’s Creative Streets",
      "text": "Explore indie bookstores, skyline views from Dumbo, Prospect Park’s soulful spaces, and vibrant cafés."
    },
    {
      "@type": "HowToStep",
      "name": "Experience the Statue of Liberty",
      "text": "Stand solo beneath the Statue of Liberty, enjoy ferry rides with skyline views, and pair the visit with Lower Manhattan walks."
    },
    {
      "@type": "HowToStep",
      "name": "Plan Flexible Itineraries",
      "text": "Use apps to design modular routes, stay near transit, and explore museums, cafés, and neighborhoods without rigid schedules."
    }
  ]
};

return(
        <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(historicallandmarks) }}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howto) }}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemlist) }}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqpage) }}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumblist) }}/>
       <Header image={`/data/majorcities/newyork/assets/statue-of-liberty.jpg`} bannerText="Solo Travel in New York City – Landmark Guide!" />
       <section className={styles.splitSection} style={{ textAlign: "center" }}>
                <div style={{ width: "100%", textAlign: "center" }}>
                <h1  className={styles.sectionheading}>Solo Travel in New York City – Landmark Guide!</h1>
                </div>
      </section> 
       <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/newyork/assets/solo-travel-manhattan-landmarks.png"
            alt="Route map of Manhattan landmarks for solo travelers, including Times Square, Central Park, and Empire State Building."
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Manhattan: Bold streets, solo thrills, endless discovery.</h2>
          <p className={styles.subheading}>🚶‍♂️Manhattan invites solo discovery—iconic views from the Empire State, peaceful strolls in Central Park, sensory immersion in Times Square, and quiet reflection at The Met and MoMA. Bold, cinematic, endlessly walkable.</p>
          <p className={styles.subheading}>📸 Manhattan suits solo travelers with walkable streets, reliable transit, endless sights, and cozy cafés. It’s safe, spontaneous, and full of energy—ideal for unplanned detours, solo photo ops, and cultural immersion.</p>
          <p  className={styles.subheading}>🧭 Manhattan invites solo spontaneity with walkable landmarks, flexible itineraries, and central stays. Explore museums, cafés, and vibrant streets at your own pace—no rigid plans, just freedom to wander and reflect.</p>
          <Link href="/destination/nyc/solo-trip-to-nyc" className={styles.ctaButton}>
            Plan Your NYC Solo Trip
          </Link>
        </div>
      </section>
      <section className={styles.splitSection}>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Brooklyn: Creative corners, solo rhythm, local soul.</h2>
          <p className={styles.subheading}>🚶‍♂️Brooklyn invites solo travelers to roam creative streets, linger in indie bookstores, savor skyline views from Dumbo, and reflect in Prospect Park. It’s soulful, walkable, and full of unexpected solo moments.</p>
          <p className={styles.subheading}>📸 Brooklyn rewards solo travelers with creative freedom, walkable neighborhoods, and soulful spaces. Explore indie shops, quiet parks, and vibrant cafés—no schedule, no pressure, just your rhythm and the borough’s pulse.</p>
          <p  className={styles.subheading}>🧭 Brooklyn unfolds best with flexible plans—loop through creative hubs, pause in parks, stay near transit, and explore cafés by vibe. Modular itineraries make solo discovery easy, soulful, and self-paced.</p>
          <Link href="/majorcities/newyork/solo-itinerary" className={styles.ctaButton}>
            Add to Your NYC Itinerary
          </Link>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/newyork/assets/solo-traveler-manhattan-bridge-sunset-new-york-cityscape.png"
            alt="Solo traveler enjoying sunset near Manhattan Bridge in New York City, with skyline and cobblestone path in view"
            fill
            className={styles.mapImage}
          />
        </div>
      </section>
      <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/newyork/assets/solo-traveler-statue-of-liberty-waterfront-new-york-city.png"
            alt="Solo traveler standing by the waterfront in New York City, looking at the Statue of Liberty on an overcast day with boats and skyline in the background."
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Statue of Liberty: Stand solo in the shadow of freedom.</h2>
          <p className={styles.subheading}>🗽Stand solo beneath the Statue of Liberty and feel the scale of freedom. Ferry views, skyline moments, and quiet reflection make this landmark a cinematic, introspective experience for solo travelers.</p>
          <p className={styles.subheading}>🚶‍♀️ Visiting the Statue of Liberty alone means no distractions—just your thoughts, the wind, and the skyline. It’s empowering, peaceful, and perfect for solo photo ops and personal reflection.</p>
          <p  className={styles.subheading}>🧭 Plan your visit with morning ferries, skyline loops, and nearby solo-friendly cafés. Stay central, time it right, and pair it with Lower Manhattan walks for a seamless solo itinerary.</p>
          <Link href="/majorcities/newyork/food" className={styles.ctaButton}>
            Best Eats Near These Landmarks
          </Link>
        </div>
      </section>
       <Footer />
       </>
    )
}
