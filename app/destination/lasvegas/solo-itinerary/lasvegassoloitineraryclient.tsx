"use client";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import NavigationHeader from "./components/NavigationHeader/NavigationHeader";
import Image from 'next/image';
import styles from './lasvegassoloitinerary.module.css';
import Footer from "@/app/components/Header/Footer/footer";
import BookingCTA from './components/BookingCTA/BookingCTA';
import FAQ from "./components/FAQ/FAQ";

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


    return(
      <>
    <div className="App">
      <NavigationHeader />
      <HeroBanner image={`/data/majorcities/lasvegas/assets/solo-travel-itinerary.png`} bannerText="Solo Travel Itinerary for Las Vegas" variant="wide" />
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
