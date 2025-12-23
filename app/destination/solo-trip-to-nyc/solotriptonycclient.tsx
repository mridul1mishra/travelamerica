"use client";
import styles from './solotriptonyc.module.css';
import { useState } from "react";
import Image from "next/image";
import QuickActionBar from '@/app/components/quickactionbar/quickactionbar';
import sectionsData from "@/app/data/destination/infosection.json";
import getaroundData from "@/app/data/destination/gettingaround.json";
import InfoSection from '@/app/components/infosection/infosection';
import neighborhoodsData  from "@/app/data/destination/neighborhoods.json";
import BestNeighborhoodsGrid from '@/app/components/BestNeighborhoodGrid/bestneighborhoodgrid';
import itineraryData from "@/app/data/destination/itinerary.json";
import { ItineraryProps } from "@/app/models/itinerary";
import ThreeDayItinerary from '@/app/components/itinerary/itinerary';
import femaleSoloData from "@/app/data/destination/femalesolo.json";
import FemaleSoloTiles from "@/app/components/Solofemaletravel/solofemaletravel";
import { FemaleSoloData } from "@/app/models/femalesolo";
import Footer from '@/app/components/Header/Footer/footer';



export default function SoloTripNYCClient() {
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
                <Image src="/data/logo.webp" alt="Travel Americas Logo" width={150} height={150}  sizes="(max-width: 768px) 100px, 150px" fetchPriority="high"/>
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
           <li style={{ cursor: "pointer" }}><a href="/majorcities/newyork">New York</a></li>
           <li style={{ cursor: "pointer" }}><a href="/majorcities/losangeles">Los Angeles</a></li>
           <li style={{ cursor: "pointer" }}><a href="/majorcities/lasvegas">Las Vegas</a></li>
           <li style={{ cursor: "pointer" }}><a href="/majorcities/orlando">Orlando</a></li> 
          </ul>
        </nav>
        </section>
        <section className={styles.hero}>
            <div className={styles.herocontainer}>            
                <div className={styles.herotext}>
                    <h1>NYC Solo Travel Guide</h1>
                    <p className={styles.subtext}>Safe, confident, and stress‑free solo travel in NYC.</p>

                    <div className={styles.herobuttons}>
                        <a href="/majorcities/newyork/nyc-safety-solo-travelers" className={`${styles.btn} ${styles.primary}`}>Start with Safety </a>
                        <a href="/majorcities/newyork/landmark" className={`${styles.btn} ${styles.secondary}`}>Where to Stay</a>
                    </div>

                    <p className={styles.updated}>Updated for 2025</p>
                </div>

                
                <div className={styles.heroImage}>
                <div className={styles.imagePlaceholder}>
                    <div className={styles.heroImageWrapper}>
                        <Image src="/destination/nyc-travel-editorial-collage-new.png" alt="Travel Americas Logo" fill style={{ objectFit: "contain" }} fetchPriority="high"/>
                
                    </div>
                </div>
                </div>

            </div>
        </section>
        <QuickActionBar />
        <InfoSection sections={sectionsData.sections} />
        <BestNeighborhoodsGrid  neighborhoods={neighborhoodsData.neighborhoods}  ctaLink="/majorcities/newyork/landmark"/>
        <InfoSection sections={getaroundData.sections} />
        <ThreeDayItinerary days={data.days} ctaLink="/majorcities/newyork/solo-itinerary" />
        <FemaleSoloTiles tiles={femaleSolo.tiles}  ctaLink={femaleSolo.ctaLink} />
        <Footer></Footer>

        </>
    );
}