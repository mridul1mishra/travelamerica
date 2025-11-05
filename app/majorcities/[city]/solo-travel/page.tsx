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
    return(
        <>
        <Header image={`/data/majorcities/${city}/assets/safetybanner.png`} bannerText={city && !citiesWithoutBanner.includes(city) ? `Solo and Safe Travel Newyork!` : ""} />
        <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/newyork/assets/safetyandnavigation.png"
            alt="Day 1 NYC Route Map"
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Orientation - Scout before you go</h2>
          <p className={styles.subheading}><strong>Urban vigilance.</strong> Stay alert in Midtown and Bronx after dark; explore Upper West Side, Brooklyn Heights, Astoria. Walk briskly, stay aware. For help, dial 911 or 311; top hospitals include Mount Sinai and Bellevue.</p>
          <p className={styles.subheading}><strong>Urban preparedness</strong> Pack a portable charger, ID/passport copies, and a basic first aid kit. Preload your MetroCard or OMNY for smooth subway access — NYC demands readiness, speed, and smart gear.</p>
          <p className={styles.subheading}><strong>Smart navigation.</strong>Use Citymapper, Transit App, and NYC Ferry for smooth navigation. Stay in safe, central hotels with 24/7 security. Plan routes, avoid rush hour transfers, and explore walkable neighborhoods like SoHo.</p>
          <Link href="/majorcities/newyork/solo-itinerary" className={styles.ctaButton}>
            Start Your NYC Itinerary
          </Link>
        </div>
        </section>
        <section className={`${styles.splitSection} ${styles.mobileImageFirst}`}>        
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Travel Checklist - Ready, set, roam.</h2>
          <p className={styles.subheading}><strong>🧼 Pack Essential</strong>Pack a high-capacity charger, backup cables, and transit apps. Bring sanitizer, lip balm, and travel-size toiletries. Add SIM or adapter if international. Don’t forget meds, wipes, and noise-canceling earbuds.</p>
          <p className={styles.subheading}><strong>🧥 Pack Comfort</strong>Pack layered outfits and walking shoes for NYC’s shifting weather. Bring a compact umbrella, seasonal extras like gloves or sunscreen, and breathable fabrics to stay comfortable across boroughs and changing conditions.</p>
          <p className={styles.subheading}><strong>🎒 Pack Smart</strong>Carry your ID, hotel details, and key cards in a secure crossbody bag. Pack water, snacks, a journal, and a foldable tote for flexibility on the go. Add smart navigation tools like a compact compass, AirTag, or tile tracker to stay oriented and safeguard your essentials.x`</p>
          <Link href="/majorcities/newyork/food" className={styles.ctaButton}>
            Where to Eat Solo in NYC
          </Link>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/newyork/assets/packingtips.png"
            alt="Packing Tips"
            fill
            className={styles.mapImage}
          />
        </div>
        </section>
        <section className={styles.splitSection}>
          <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/newyork/assets/activitysafety.png"
            alt="Safety tips"
            fill
            className={styles.mapImage}
          />
        </div>        
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Smart steps make fearless journeys.</h2>
          <p className={styles.subheading}><strong>🎭</strong>Stay alert in crowded areas, secure valuables in a crossbody bag, and avoid isolated spots after dark. Follow signage, respect weather conditions, and use official services for ferries and observatories.</p>
          <p className={styles.subheading}><strong>🛍️</strong>Stay aware in busy markets and crowded eateries. Keep bags zipped, avoid flashing valuables, and use contactless payments. Stick to well-lit streets, verify rooftop access, and trust your instincts when solo.</p>
          <p className={styles.subheading}><strong>🎶</strong>Stay aware in crowds, keep valuables secure, use official transport, and stick with well-lit routes. Confirm venue rules, hydrate, and trust your instincts</p>
          <Link href="/majorcities/newyork/landmark" className={styles.ctaButton}>
            Top Landmarks for Solo Travelers
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