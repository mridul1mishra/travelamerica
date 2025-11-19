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
    return(
        <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema2) }}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema1) }}/>
        <Header image={`/data/majorcities/${city}/assets/safetybanner.png`} bannerText={city && !citiesWithoutBanner.includes(city) ? (<span style={{ color: '#1A2A3A', fontWeight: '600', fontSize: '40px' }}>Solo Travel in NYC: Safe Itinerary, <br />Packing Tips and Best Landmarks!</span>) : ""} />
        <section className={styles.splitSection} style={{ paddingTop: "175px", textAlign: "center" }}>
                <div style={{ width: "100%", textAlign: "center" }}>
                <h1  className={styles.sectionheading}>Solo Travel in NYC: Safe Itinerary,<br />Packing Tips and Best Landmarks!</h1>
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