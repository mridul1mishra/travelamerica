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
        <div className={styles["cards-row"]}>
        <div className={styles["flip-card"]}>
        <div className={`${styles["flip-card__inner"]} ${flipped ? styles["is-flipped"] : ""}`}  onClick={() => setFlipped(!flipped)}>
        <div className={styles["flip-card__front"]}>
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
        
        
        <div className={styles["flip-card"]}>
        <div className={`${styles["flip-card__inner"]} ${flipped ? styles["is-flipped"] : ""}`}  onClick={() => setFlipped(!flipped)}>
        <div className={styles["flip-card__front"]}>
            <div className={styles["safety-front-card"]}>
                
                <div className={styles["safety-front-card__icon"]}>
                    🚇
                </div>

                <div className={styles["safety-front-card__content"]}>
                    <h3 className={styles["safety-front-card__scenario"]}>
                    Someone is acting erratic on the train
                    </h3>

                    <p className={styles["safety-front-card__description"]}>
                    A person is pacing, shouting, or behaving unpredictably.
                    </p>
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
                    <li>Move calmly to another car at the next stop</li>
                    <li>Stand near the door</li>
                    <li>Avoid eye contact</li>
                </ul>
        </div>
        <div className={`${styles["safety-card__block"]} ${styles["safety-card__block--dont"]}`}>
            <h3>🚫 WHAT NOT TO DO</h3>
            <ul>
            <li>Engage them</li>
            <li>Film them</li>
            <li>Confront or comment</li>
            </ul>
        </div>

        <div className={`${styles["safety-card__anchor"]}`}>
            <h3>🛡️ SAFETY ANCHOR</h3>
            <p>Changing cars is normal in NYC — riders do it all the time.</p>
        </div>
        </div>
        </div>
        
        
        </div>    
        </div>
        </div>
        <div className={styles["flip-card"]}>
        <div className={`${styles["flip-card__inner"]} ${flipped ? styles["is-flipped"] : ""}`}  onClick={() => setFlipped(!flipped)}>
        <div className={styles["flip-card__front"]}>
            <div className={styles["safety-front-card"]}>
                
                <div className={styles["safety-front-card__icon"]}>
                    🚇
                </div>

                <div className={styles["safety-front-card__content"]}>
                    <h3 className={styles["safety-front-card__scenario"]}>
                    Late‑Night Transfer in a Quiet Station
                    </h3>

                    <p className={styles["safety-front-card__description"]}>
                    You need to switch lines at a station with low foot traffic.
                    </p>
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
                    <li>Stay on the main platform  </li>
                    <li>Stand near the Help Point intercom</li>
                    <li>Move toward groups or well‑lit areas</li>
                </ul>
        </div>
        <div className={`${styles["safety-card__block"]} ${styles["safety-card__block--dont"]}`}>
            <h3>🚫 WHAT NOT TO DO</h3>
            <ul>
            <li>Don’t walk down empty corridors</li>
            <li>Don’t stand alone at the far end</li>
            </ul>
        </div>

        <div className={`${styles["safety-card__anchor"]}`}>
            <h3>🛡️ SAFETY ANCHOR</h3>
            <p>Staying in visible, central areas is the safest choice at night.</p>
        </div>
        </div>
        </div>
        
        
        </div>    
        </div>
        </div>
        
        </div>

    </section>

        <section className={styles["safety-section"]}>
        <h2 className={styles["safety-section__title"]}>
            NAVIGATE SOCIAL SPACES SAFELY (Bars + Nightlife)
        </h2>
        <div className={styles["cards-row"]}>
        <div className={styles["flip-card"]}>
        <div className={`${styles["flip-card__inner"]} ${flipped ? styles["is-flipped"] : ""}`}  onClick={() => setFlipped(!flipped)}>
        <div className={styles["flip-card__front"]}>
            <div className={styles["safety-front-card"]}>

                <div className={styles["safety-front-card__icon"]}>
                    🚇
                </div>

                <div className={styles["safety-front-card__content"]}>
                    <h3 className={styles["safety-front-card__scenario"]}>
                    Leaving a Bar Alone at 1 AM
                    </h3>

                    <p className={styles["safety-front-card__description"]}>
                    You exit a bar and need to get back to your hotel.
                    </p>
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
                    <li>Order a rideshare from inside</li>
                    <li>Check the license plate</li>
                    <li>Sit behind the driver</li>
                    <li>Share your trip</li>
                </ul>
        </div>
        <div className={`${styles["safety-card__block"]} ${styles["safety-card__block--dont"]}`}>
            <h3>🚫 WHAT NOT TO DO</h3>
            <ul>
            <li>Don’t walk home alone </li>
            <li>Don’t wait outside </li>
            <li>Don’t accept rides from strangers</li>
            </ul>
        </div>

        <div className={`${styles["safety-card__anchor"]}`}>
            <h3>🛡️ SAFETY ANCHOR</h3>
            <p>Ordering your ride from indoors removes 90% of nighttime risk.</p>
        </div>
        </div>
        </div>
        
        
        </div>    
        </div>
        </div>
        
        
        <div className={styles["flip-card"]}>
        <div className={`${styles["flip-card__inner"]} ${flipped ? styles["is-flipped"] : ""}`}  onClick={() => setFlipped(!flipped)}>
        <div className={styles["flip-card__front"]}>
            <div className={styles["safety-front-card"]}>
                
                <div className={styles["safety-front-card__icon"]}>
                    🚇
                </div>

                <div className={styles["safety-front-card__content"]}>
                    <h3 className={styles["safety-front-card__scenario"]}>
                    Someone Won’t Leave You Alone in a Bar
                    </h3>

                    <p className={styles["safety-front-card__description"]}>
                    A person keeps approaching or making you uncomfortable.
                    </p>
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
                    <li>Tell the bartender</li>
                    <li>Move to a different area</li>
                    <li>Join another group temporarily</li>
                </ul>
        </div>
        <div className={`${styles["safety-card__block"]} ${styles["safety-card__block--dont"]}`}>
            <h3>🚫 WHAT NOT TO DO</h3>
            <ul>
            <li>Don’t go outside with them </li>
            <li>Don’t accept drinks you didn’t see poured</li>
            </ul>
        </div>

        <div className={`${styles["safety-card__anchor"]}`}>
            <h3>🛡️ SAFETY ANCHOR</h3>
            <p>NYC bartenders are trained to intervene — use them.</p>
        </div>
        </div>
        </div>
        
        
        </div>    
        </div>
        </div>
        <div className={styles["flip-card"]}>
        <div className={`${styles["flip-card__inner"]} ${flipped ? styles["is-flipped"] : ""}`}  onClick={() => setFlipped(!flipped)}>
        <div className={styles["flip-card__front"]}>
            <div className={styles["safety-front-card"]}>
                
                <div className={styles["safety-front-card__icon"]}>
                    🚇
                </div>

                <div className={styles["safety-front-card__content"]}>
                    <h3 className={styles["safety-front-card__scenario"]}>
                    Lost in a Quiet Area at Night
                    </h3>

                    <p className={styles["safety-front-card__description"]}>
                    Google Maps reroutes you down a dim street.
                    </p>
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
                    <li>Turn back toward a main avenue</li>
                    <li>Enter a store or hotel to reorient</li>
                    <li>Switch to a rideshare</li>
                </ul>
        </div>
        <div className={`${styles["safety-card__block"]} ${styles["safety-card__block--dont"]}`}>
            <h3>🚫 WHAT NOT TO DO</h3>
            <ul>
            <li>Don’t continue down the empty block</li>
            <li>Don’t stop in the middle of the street</li>
            </ul>
        </div>

        <div className={`${styles["safety-card__anchor"]}`}>
            <h3>🛡️ SAFETY ANCHOR</h3>
            <p>Avenues are always safer than side streets at night.</p>
        </div>
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
