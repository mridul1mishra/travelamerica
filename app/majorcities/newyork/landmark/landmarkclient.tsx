"use client";
import { useParams } from "next/navigation";
import Header from "../../../components/Header/header";
import Link from 'next/link';
import Image from 'next/image';
import styles from './landmark.module.css';
import Footer from "@/app/components/Header/Footer/footer";
export default function LandmarkPage() {
    const schema = {
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
    const schema1 = {
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

    return(
        <>
        
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema1) }}/>
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
          <Link href="/majorcities/newyork/solo-itinerary" className={styles.ctaButton}>
            Add to Your NYC Itinerary
          </Link>
        </div>
      </section>
      <section className={styles.splitSection}>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Brooklyn: Creative corners, solo rhythm, local soul.</h2>
          <p className={styles.subheading}>🚶‍♂️Brooklyn invites solo travelers to roam creative streets, linger in indie bookstores, savor skyline views from Dumbo, and reflect in Prospect Park. It’s soulful, walkable, and full of unexpected solo moments.</p>
          <p className={styles.subheading}>📸 Brooklyn rewards solo travelers with creative freedom, walkable neighborhoods, and soulful spaces. Explore indie shops, quiet parks, and vibrant cafés—no schedule, no pressure, just your rhythm and the borough’s pulse.</p>
          <p  className={styles.subheading}>🧭 Brooklyn unfolds best with flexible plans—loop through creative hubs, pause in parks, stay near transit, and explore cafés by vibe. Modular itineraries make solo discovery easy, soulful, and self-paced.</p>
          <Link href="/majorcities/newyork/solo-travel" className={styles.ctaButton}>
            Solo Travel Tips for Exploring Safely
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
function capitalizeWords(str: string) {
  return str
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}