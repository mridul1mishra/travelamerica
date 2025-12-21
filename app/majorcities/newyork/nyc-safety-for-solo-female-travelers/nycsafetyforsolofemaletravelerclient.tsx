"use client";
import styles from './nycsafetysolofemaletravelers.module.css';
import Header from "../../../components/Header/header";
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/app/components/Header/Footer/footer';
import { useState } from 'react';

export default function NYCsafetyforsolofemaletravelerclient() {
    const [flipped, setFlipped] = useState(false);
return(    
    <>
    <Header image={`/data/majorcities/newyork/assets/nyc-solo-female-traveler-night-safety-banner.jpeg`} bannerText="NYC solo travel safety guide — neighborhood tips, subway awareness, exits, and time cues" />
    <section className={styles.splitSection} style={{  textAlign: "center" }}>
                <div style={{ width: "100%", textAlign: "center" }}>
                <h1  className={styles.sectionheading}>NYC Safety Scenarios for Solo Female Travelers</h1>
                <p className={styles.subheading}>Real‑world situations, clear actions, and calm guidance to help you move confidently through New York City.</p>
                </div>
    </section>
    <section className={styles["safety-section"]}>
        <h2 className={styles["safety-section__title"]}>
            Subway Scenario: Uncomfortable Passenger
        </h2>
        <div className={styles["safety-front-card"]}>
            <div className={styles["safety-front-card__icon"]}>
                🚇
            </div>

            <div className={styles["safety-front-card__content"]}>
                <h3 className={styles["safety-front-card__scenario"]}>
                Entering a Subway Car at Night
                </h3>

                <p className={styles["safety-front-card__description"]}>
                It’s 10:45 PM. A train arrives. One car is empty; the next is moderately full
                </p>
            </div>
            <div className={styles["safety-front-card__footer"]}>
                Tap to flip →
            </div>
        </div>
        <div className={styles["safety-cards-row"]}>
        <div className={styles["safety-card"]}>
        <div className={`${styles["safety-card__block"]} ${styles["safety-card__block--do"]}`}>
            <h3>✅ WHAT TO DO</h3>
                <ul>
                    <li>Move calmly to another car at the next stop</li>
                    <li>Stand near the door or conductor’s window</li>
                    <li>Keep your attention up and your bag in front</li>
                </ul>
        </div>
        <div className={`${styles["safety-card__block"]} ${styles["safety-card__block--dont"]}`}>
            <h3>🚫 WHAT NOT TO DO</h3>
            <ul>
            <li>Don’t engage</li>
            <li>Don’t film them</li>
            <li>Don’t confront</li>
            </ul>
        </div>

        <div className={`${styles["safety-card__anchor"]}`}>
            <h3>🛡️ SAFETY ANCHOR</h3>
            <p>“Changing cars is normal in NYC—riders do it all the time.”</p>
        </div>
        </div>
        
        
        </div>    
        

    </section>
    
    <Footer />    
    </>
);
}