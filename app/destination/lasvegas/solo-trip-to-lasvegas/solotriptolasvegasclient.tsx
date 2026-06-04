"use client";
import styles from './solotriptolasvegas.module.css';
import { useState } from "react";
import Image from "next/image";
import QuickActionBar from '@/app/components/quickactionbar/quickactionbar';
import sectionsData from "@/content/destination/lasvegas/solo-trip-to-lasvegas/infosection.json";
import getaroundData from "@/content/destination/lasvegas/solo-trip-to-lasvegas/gettingaround.json";
import InfoSection from '@/app/components/infosection/infosection';
import neighborhoodsData  from "@/content/destination/lasvegas/solo-trip-to-lasvegas/neighborhoods.json";
import BestNeighborhoodsGrid from '@/app/components/BestNeighborhoodGrid/bestneighborhoodgrid';
import itineraryData from "@/content/destination/lasvegas/solo-trip-to-lasvegas/itinerary.json";
import { ItineraryProps } from "@/app/models/itinerary";
import ThreeDayItinerary from '@/app/components/itinerary/itinerary';
import femaleSoloData from "@/content/destination/lasvegas/solo-trip-to-lasvegas/femalesolo.json";
import FemaleSoloTiles from "@/app/components/Solofemaletravel/solofemaletravel";
import { FemaleSoloData } from "@/app/models/femaleSolo";
import Footer from '@/app/components/Header/Footer/footer';
import { WhyTrustThisGuide } from '@/app/components/destination/whytrustitem/whytrustthisguide';
import lasvegasWhyTrustData from "@/content/destination/lasvegas/solo-trip-to-lasvegas/whyTrustItems/whyTrustItems.json";
import { ScenarioSection } from './components/scenariocard/scenariosection';
import { SubwayAccessSection } from './components/subwayaccess/subwayaccess';
import faqData from "@/content/destination/lasvegas/solo-trip-to-lasvegas/faq/faqsection.json";
import FAQAccordion from '@/app/components/destination/faqsection/faqsection';
import Link from 'next/link';
import SoloLasVegasQa from './components/aisnippet/cardqanda';
import SoloTripNarrative from './components/solotripnarrative/SoloTripNarrative';
import BookingCTA from '@/app/components/destination/BookingCTA/BookingCTA';


export default function SoloTripToLasVegasClient() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  const data = itineraryData as ItineraryProps;
  const femaleSolo = femaleSoloData as FemaleSoloData;
    return(
        <>
        <section className={`${styles.overlayheader} ${styles.scrolled}`}>
        <div className={styles.brandlogo}>
            <a href="/">
                <Image src="/Travels-Americas-logo-horizontal-v3.png" alt="Travels Americas Logo" width={285} height={76}  sizes="(max-width: 768px) 200px, 285px" fetchPriority="high"/>
            </a>
        </div>
        <nav className={styles.mainnav}>
          <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
     ☰
          </button>
          <ul className={`${styles.navlinks} ${isMenuOpen ? styles.active : ""}`}>
            <li className={styles.closebtn}>
              <button onClick={closeMenu} aria-label="Close menu">✕</button>
            </li>
           <li><Link href="/destination/lasvegas/best-areas-to-stay">Best Areas to Stay</Link></li>
          <li><Link href="/destination/lasvegas/solo-trip-to-lasvegas">Solo Trip to Las Vegas</Link></li>
          <li><Link href="/destination/lasvegas/safety-guide">Las Vegas Safety</Link></li>
          <li><Link href="/destination/lasvegas/lasvegas-female-solo-travel-guide">Female Travel Guide</Link></li>
          </ul>
        </nav>
        </section>
        <section className={styles.hero}>
            <div className={styles.herocontainer}>
                <div className={styles.herotext}>
                    <h1>Solo Trip to Las Vegas: First-Time Traveler Guide</h1>
                    <p className={styles.subtext}>Safe, confident, and stress‑free solo travel in Las Vegas.</p>

                    <div className={styles.herobuttons}>
                        <a href="/destination/lasvegas/safety-guide" className={`${styles.btn} ${styles.primary}`}>Start with Safety </a>
                        <a href="/destination/lasvegas/best-areas-to-stay" className={`${styles.btn} ${styles.secondary}`}>Where to Stay</a>
                    </div>

                    <p className={styles.updated}>Updated for 2025</p>
                </div>


                <div className={styles.heroImage}>
                <div className={styles.imagePlaceholder}>
                    <div className={styles.heroImageWrapper}>
                        <Image src="/data/majorcities/lasvegas/assets/lasvegas.webp" alt="Las Vegas Strip skyline" fill style={{ objectFit: "contain" }} fetchPriority="high"/>
                    </div>
                </div>
                </div>

            </div>
        </section>
        <BookingCTA variant="slim" text="Book your Las Vegas trip →" href="/destination/lasvegas/bookings?tab=flights&from=solo-trip-to-lasvegas" label="Book your trip" />
        <QuickActionBar />
        <InfoSection sections={sectionsData.sections} />
        <WhyTrustThisGuide data={lasvegasWhyTrustData} />
        <SoloLasVegasQa />
        <SoloTripNarrative />
        <BestNeighborhoodsGrid  neighborhoods={neighborhoodsData.neighborhoods}  ctaLink="/destination/lasvegas/best-areas-to-stay"/>
        <SubwayAccessSection />
        <InfoSection sections={getaroundData.sections} />
        <ThreeDayItinerary days={data.days} ctaLink="/destination/lasvegas/solo-itinerary" cityName="Las Vegas" />
        <ScenarioSection />
        <FemaleSoloTiles tiles={femaleSolo.tiles}  ctaLink={femaleSolo.ctaLink} cityName="Las Vegas" />
        <FAQAccordion faqs={faqData} />
        <BookingCTA variant="full" text="Start your trip: book flights and hotels" href="/destination/lasvegas/bookings?tab=flights&from=solo-trip-to-lasvegas" label="Book your trip" />
        <Footer></Footer>

        </>
    );
}
