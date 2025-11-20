"use client";
import { useParams } from "next/navigation";
import Header from "../../../components/Header/header";
import Link from 'next/link';
import Image from 'next/image';
import styles from './solotrave.module.css';
import Footer from "@/app/components/Header/Footer/footer";
export default function SoloTravelPage() {
    const params = useParams();
    const cityParam = params?.city;
    const city = Array.isArray(cityParam) ? cityParam[0] : cityParam;
    const citiesWithoutBanner = ['lasvegas'];
    
    const schema1 = {
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
      "item": "https://www.travelamerica.work/majorcities/newyork/solo-travel"
    }
  ]
                };
    const schema2 = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.travelamerica.work/majorcities/newyork/solo-travel"
  },
  "headline": "3-Day Solo Travel Itinerary for New York | Travel America",
  "description": "A 3-day solo travel itinerary for NYC with safety tips, local navigation tools, and packing advice.",
  "keywords": ["solo travel NYC", "NYC itinerary", "safe travel tips", "Citymapper", "MetroCard", "NYC solo travel", "things to do alone NYC"],
  "image": {
    "@type": "ImageObject",
    "url": "https://www.travelamerica.work/data/majorcities/newyork/assets/safetybanner.png",
    "height": 600,
    "width": 1200
  },
  "author": {
    "@type": "Organization",
    "name": "Travel America"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Travel America",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.travelamerica.work/logo.png"
    }
  },
  "datePublished": "2025-11-01",
  "about": [
    { "@type": "Thing", "name": "Solo Travel" },
    { "@type": "Place", "name": "New York City" }
  ]
                };
    const schema3 = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is New York City safe for solo travelers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, NYC is generally safe for solo travelers, especially in well-lit areas like Midtown, SoHo, and Brooklyn Heights. Stay alert and avoid isolated zones after dark."
      }
    },
    {
      "@type": "Question",
      "name": "What should I pack for solo travel in NYC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pack a portable charger, ID/passport copies, MetroCard or OMNY, and a basic first aid kit. NYC demands readiness and smart gear."
      }
    },
    {
      "@type": "Question",
      "name": "How do I navigate NYC solo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use Citymapper, Transit App, and NYC Ferry. Stay in central hotels with 24/7 security and avoid rush hour subway transfers."
      }
    }
  ]
};
    const schema4 = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "NYC Solo Travel Safety & Packing Checklist",
  "itemListOrder": "Unordered",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Portable charger" },
    { "@type": "ListItem", "position": 2, "name": "ID/passport copies" },
    { "@type": "ListItem", "position": 3, "name": "MetroCard or OMNY card" },
    { "@type": "ListItem", "position": 4, "name": "Basic first aid kit" },
    { "@type": "ListItem", "position": 5, "name": "Citymapper or Transit App" },
    { "@type": "ListItem", "position": 6, "name": "Stay alert in Midtown and Bronx after dark" }
  ]
};
    const schema5 = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Navigate NYC Safely as a Solo Traveler",
  "description": "Step-by-step guide for solo travelers to navigate New York City using public transport and apps.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Download Citymapper or Transit App",
      "text": "Use these apps to plan subway and bus routes in real time."
    },
    {
      "@type": "HowToStep",
      "name": "Preload your MetroCard or OMNY",
      "text": "Avoid queues and delays by preparing your transit card in advance."
    },
    {
      "@type": "HowToStep",
      "name": "Avoid rush hour transfers",
      "text": "Plan routes to skip crowded stations between 7–9 AM and 5–7 PM."
    },
    {
      "@type": "HowToStep",
      "name": "Stay in safe, central hotels",
      "text": "Choose accommodations with 24/7 security in neighborhoods like SoHo or Brooklyn Heights."
    }
  ]
};

    return(
        <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema5) }}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema4) }}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema3) }}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema2) }}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema1) }}/>
        <Header image={`/data/majorcities/${city}/assets/safetybanner.png`} bannerText={city && !citiesWithoutBanner.includes(city) ? (<span style={{ color: '#1A2A3A', fontWeight: '600', fontSize: '40px' }}>Solo Travel in NYC: Safe Itinerary, <br />Packing Tips and Best Landmarks!</span>) : ""} />
        <section className={styles.splitSection} style={{ paddingTop: "105px", textAlign: "center" }}>
                <div style={{ width: "100%", textAlign: "center" }}>
                <h1  className={styles.sectionheading}>Solo Travel in NYC!</h1>
                <p>Safe Itinerary, Packing Tips and Best Landmarks — Imagine stepping off the subway alone at midnight, with Broadway lights guiding your way. NYC offers solo travelers both excitement and safety — if you know where to go.</p>
                </div>
        </section> 
        <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/newyork/assets/nyc-solo-travel-safety-preparedness-navigation-guide.png"
            alt="Three-panel illustration showing NYC solo travel safety tips: urban vigilance with emergency contacts, preparedness gear like MetroCard and first aid kit, and smart navigation using Citymapper and NYC Ferry apps."
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>NYC Solo Prep for NYC First-Timers</h2>
          <p className={styles.subheading}><strong>Urban vigilance.</strong> Stay alert in Midtown and Bronx after dark; explore Upper West Side, Brooklyn Heights, Astoria. Walk briskly, stay aware. For help, dial 911 or 311; top hospitals include Mount Sinai and Bellevue.</p>
          <p className={styles.subheading}><strong>Urban preparedness</strong> Pack a portable charger, ID/passport copies, and a basic first aid kit. Preload your MetroCard or OMNY for smooth subway access — NYC demands readiness, speed, and smart gear.</p>
          <p className={styles.subheading}><strong>Smart navigation.</strong>Use Citymapper, Transit App, and NYC Ferry for smooth navigation. Stay in safe, central hotels with 24/7 security. Plan routes, avoid rush hour transfers, and explore walkable neighborhoods like SoHo.</p>
          <Link href="/majorcities/newyork/solo-itinerary" className={styles.ctaButton}>
            Solo Travel Safety Tips for NYC
          </Link>
        </div>
        </section>
        <section className={`${styles.splitSection} ${styles.mobileImageFirst}`}>        
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>NYC Solo Travel Gear & Tips</h2>
          <p className={styles.subheading}><strong>🧼 Pack Essential</strong>Pack a high-capacity charger, backup cables, and transit apps. Bring sanitizer, lip balm, and travel-size toiletries. Add SIM or adapter if international. Don’t forget meds, wipes, and noise-canceling earbuds.</p>
          <p className={styles.subheading}><strong>🧥 Pack Comfort</strong>Pack layered outfits and walking shoes for NYC’s shifting weather. Bring a compact umbrella, seasonal extras like gloves or sunscreen, and breathable fabrics to stay comfortable across boroughs and changing conditions.</p>
          <p className={styles.subheading}><strong>🎒 Pack Smart</strong>Carry your ID, hotel details, and key cards in a secure crossbody bag. Pack water, snacks, a journal, and a foldable tote for flexibility on the go. Add smart navigation tools like a compact compass, AirTag, or tile tracker to stay oriented and safeguard your essentials.x`</p>
          <Link href="/majorcities/newyork/food" className={styles.ctaButton}>
            See our full guide to food halls and bagel stops.
          </Link>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/newyork/assets/nyc-solo-travel-packing-guide-essentials-comfort-smart.png"
            alt="Three-part illustration showing NYC solo travel packing tips: essentials like sanitizer and charger, comfort items like layered outfits and umbrella, and smart gear like snacks, journal, and navigation tools."
            fill
            className={styles.mapImage}
          />
        </div>
        </section>
        <section className={styles.splitSection}>
          <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/newyork/assets/activitysafety.png"
            alt="Three-panel illustration showing NYC solo travel safety tips across markets, shopping areas, and events—emphasizing secure bags, contactless payments, official transport, and crowd awareness."
            fill
            className={styles.mapImage}
          />
        </div>        
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Smart Solo Travel Tips for NYC</h2>
          <p className={styles.subheading}><strong>🎭</strong>Stay alert in crowded areas, secure valuables in a crossbody bag, and avoid isolated spots after dark. Follow signage, respect weather conditions, and use official services for ferries and observatories.</p>
          <p className={styles.subheading}><strong>🛍️</strong>Stay aware in busy markets and crowded eateries. Keep bags zipped, avoid flashing valuables, and use contactless payments. Stick to well-lit streets, verify rooftop access, and trust your instincts when solo.</p>
          <p className={styles.subheading}><strong>🎶</strong>Stay aware in crowds, keep valuables secure, use official transport, and stick with well-lit routes. Confirm venue rules, hydrate, and trust your instincts</p>
          <Link href="/majorcities/newyork/landmark" className={styles.ctaButton}>
            Best Neighborhoods for Solo Travelers in New York
          </Link>
        </div>
        
        </section>
        <Footer />
        </>

    );

}
function capitalizeWords(str: string) {
  return str
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}