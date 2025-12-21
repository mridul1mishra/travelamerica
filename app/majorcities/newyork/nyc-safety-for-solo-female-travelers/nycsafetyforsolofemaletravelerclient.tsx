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
        <div className={styles["flip-card"]}>
        <div className={`${styles["flip-card__inner"]} ${flipped ? styles["is-flipped"] : ""}`}  onClick={() => setFlipped(!flipped)}>
        <div className={styles["flip-card__front"]}>
            <div className={styles["safety-front-card"]}>
                <div className={styles["safety-front-card__body"]}>
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
                </div>
            <div className={styles["safety-front-card__footer"]}>
                Tap to flip →
            </div>
        </div>
        </div>
            <div className={styles["flip-card__back"]}>
        <div className={styles["safety-cards-row"]}>
        <div className={styles["safety-card"]}>
        <div className={`${styles["safety-card__block"]} ${styles["safety-card__block--do"]}`}>
            <h3>✅ WHAT TO DO</h3>
                <ul>
                    <li>Choose the car with people</li>
                    <li>Stand near the door or conductor’s window</li>
                    <li>Keep your bag in front</li>
                    <li>Stay aware at each stop</li>
                </ul>
        </div>
        <div className={`${styles["safety-card__block"]} ${styles["safety-card__block--dont"]}`}>
            <h3>🚫 WHAT NOT TO DO</h3>
            <ul>
            <li>Don’t enter an empty car</li>
            <li>Don’t sit in the far corner</li>
            <li>Don’t use noise‑canceling headphones</li>
            </ul>
        </div>

        <div className={`${styles["safety-card__anchor"]}`}>
            <h3>🛡️ SAFETY ANCHOR</h3>
            <p>Most NYC rides are uneventful — choosing a populated car keeps you safe.</p>
        </div>
        </div>
        </div>
        
        
        </div>    
        </div>
        </div>

    </section>
    
    <Footer />    
    </>
);
}
