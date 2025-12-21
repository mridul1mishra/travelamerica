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
                    <li>Move calmly to another car</li>
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
            <div className={styles["safety-front-card"]} style={{ background: "#FFFBE8" }}>

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
        <div className={styles["safety-card"]} style={{ background: "#FFFBE8" }}>
        <div className={`${styles["safety-card__block"]} ${styles["safety-card__block--do"]}`}>
            <h3>✅ WHAT TO DO</h3>
                <ul>
                    <li>Order a rideshare from inside</li>
                    <li>Check the license plate</li>
                    <li>Sit behind the driver and share your trip</li>
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
            <div className={styles["safety-front-card"]} style={{ background: "#FFFBE8" }}>
                
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
        <div className={styles["safety-card"]} style={{ background: "#FFFBE8" }}>
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
            <div className={styles["safety-front-card"]} style={{ background: "#FFFBE8" }}>
                
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
        <div className={styles["safety-card"]} style={{ background: "#FFFBE8" }}>
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
        
    <section className={styles["safety-section"]}>
        <h2 className={styles["safety-section__title"]}>
            AVOID MANIPULATION (Scams + Approaches)
        </h2>
        <div className={styles["cards-row"]}>
        <div className={styles["flip-card"]}>
        <div className={`${styles["flip-card__inner"]} ${flipped ? styles["is-flipped"] : ""}`}  onClick={() => setFlipped(!flipped)}>
        <div className={styles["flip-card__front"]}>
            <div className={styles["safety-front-card"]} style={{ background: "#E8FFF2" }}>

                <div className={styles["safety-front-card__icon"]}>
                    🚇
                </div>

                <div className={styles["safety-front-card__content"]}>
                    <h3 className={styles["safety-front-card__scenario"]}>
                    Times Square “Free Gift” Scam
                    </h3>

                    <p className={styles["safety-front-card__description"]}>
                    Someone tries to hand you a CD, bracelet, or “free” item.
                    </p>
                </div>
                
            <div className={styles["safety-front-card__footer"]}>
                Tap to flip →
            </div>
        </div>
        </div>
            <div className={styles["flip-card__back"]}>
        <div className={styles["safety-cards-row"]}>
        <div className={styles["safety-card"]} style={{ background: "#E8FFF2" }}>
        <div className={`${styles["safety-card__block"]} ${styles["safety-card__block--do"]}`}>
            <h3>✅ WHAT TO DO</h3>
                <ul>
                    <li>Keep walking  </li>
                    <li>Keep your hands close</li>
                    <li>Stay aware of your bag</li>
                </ul>
        </div>
        <div className={`${styles["safety-card__block"]} ${styles["safety-card__block--dont"]}`}>
            <h3>🚫 WHAT NOT TO DO</h3>
            <ul>
            <li>Don’t take the item </li>
            <li>Don’t pose for photos </li>
            <li>Don’t open your bag</li>
            </ul>
        </div>

        <div className={`${styles["safety-card__anchor"]}`}>
            <h3>🛡️ SAFETY ANCHOR</h3>
            <p>Ignoring them is normal — locals do it every day.</p>
        </div>
        </div>
        </div>
        
        
        </div>    
        </div>
        </div>
        
        
        <div className={styles["flip-card"]}>
        <div className={`${styles["flip-card__inner"]} ${flipped ? styles["is-flipped"] : ""}`}  onClick={() => setFlipped(!flipped)}>
        <div className={styles["flip-card__front"]}>
            <div className={styles["safety-front-card"]} style={{ background: "#E8FFF2" }}>
                
                <div className={styles["safety-front-card__icon"]}>
                    🚇
                </div>

                <div className={styles["safety-front-card__content"]}>
                    <h3 className={styles["safety-front-card__scenario"]}>
                    Aggressive Street Approach
                    </h3>

                    <p className={styles["safety-front-card__description"]}>
                    Someone tries to distract, pressure, or corner you.
                    </p>
                </div>
                
            <div className={styles["safety-front-card__footer"]}>
                Tap to flip →
            </div>
        </div>
        </div>
            <div className={styles["flip-card__back"]}>
        <div className={styles["safety-cards-row"]}>
        <div className={styles["safety-card"]} style={{ background: "#E8FFF2" }}>
        <div className={`${styles["safety-card__block"]} ${styles["safety-card__block--do"]}`}>
            <h3>✅ WHAT TO DO</h3>
                <ul>
                    <li>Walk with purpose  </li>
                    <li>Say “No, thank you” without stopping</li>
                    <li>Change direction</li>
                </ul>
        </div>
        <div className={`${styles["safety-card__block"]} ${styles["safety-card__block--dont"]}`}>
            <h3>🚫 WHAT NOT TO DO</h3>
            <ul>
            <li>Don’t explain</li>
            <li>Don’t stop</li>
            <li>Don’t engage</li>
            </ul>
        </div>

        <div className={`${styles["safety-card__anchor"]}`}>
            <h3>🛡️ SAFETY ANCHOR</h3>
            <p>NYC rewards confidence — pace and direction matter</p>
        </div>
        </div>
        </div>
        
        
        </div>    
        </div>
        </div>
        <div className={styles["flip-card"]}>
        <div className={`${styles["flip-card__inner"]} ${flipped ? styles["is-flipped"] : ""}`}  onClick={() => setFlipped(!flipped)}>
        <div className={styles["flip-card__front"]}>
            <div className={styles["safety-front-card"]} style={{ background: "#E8FFF2" }}>
                
                <div className={styles["safety-front-card__icon"]}>
                    🚇
                </div>

                <div className={styles["safety-front-card__content"]}>
                    <h3 className={styles["safety-front-card__scenario"]}>
                    Fake Ticket or Donation Scam
                    </h3>

                    <p className={styles["safety-front-card__description"]}>
                    Someone claims to sell tickets or collect donations
                    </p>
                </div>
                
            <div className={styles["safety-front-card__footer"]}>
                Tap to flip →
            </div>
        </div>
        </div>
            <div className={styles["flip-card__back"]}>
        <div className={styles["safety-cards-row"]}>
        <div className={styles["safety-card"]} style={{ background: "#E8FFF2" }}>
        <div className={`${styles["safety-card__block"]} ${styles["safety-card__block--do"]}`}>
            <h3>✅ WHAT TO DO</h3>
                <ul>
                    <li>Buy tickets only from official booths</li>
                    <li>Walk away immediately</li>
                    <li>Keep your bag closed</li>
                </ul>
        </div>
        <div className={`${styles["safety-card__block"]} ${styles["safety-card__block--dont"]}`}>
            <h3>🚫 WHAT NOT TO DO</h3>
            <ul>
            <li>Don’t show your wallet</li>
            <li>Don’t give cash</li>
            </ul>
        </div>

        <div className={`${styles["safety-card__anchor"]}`}>
            <h3>🛡️ SAFETY ANCHOR</h3>
            <p>If it’s not from an official counter, it’s not real</p>
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
            RECOVER SAFELY (Emergencies + Theft)
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
                    Phone Theft
                    </h3>

                    <p className={styles["safety-front-card__description"]}>
                    A grab‑and‑run theft or distraction scam.
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
                    <li>Use another device to lock your phone</li>
                    <li>Contact your hotel</li>
                    <li>File a police report and contact your insurance provider</li>
                </ul>
        </div>
        <div className={`${styles["safety-card__block"]} ${styles["safety-card__block--dont"]}`}>
            <h3>🚫 WHAT NOT TO DO</h3>
            <ul>
            
            <li>Don’t chase</li>
            <li>Don’t confront</li>
            </ul>
        </div>

        <div className={`${styles["safety-card__anchor"]}`}>
            <h3>🛡️ SAFETY ANCHOR</h3>
            <p>NYC police handle phone theft daily — the system is built for this.</p>
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
                    Taxi Route Changes Unexpectedly
                    </h3>

                    <p className={styles["safety-front-card__description"]}>
                    The driver deviates from the expected path.
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
                    <li>Ask calmly: “Is there a reason for the route change?” </li>
                    <li>Share your live location</li>
                    <li>Request drop‑off at the next safe corner</li>
                </ul>
        </div>
        <div className={`${styles["safety-card__block"]} ${styles["safety-card__block--dont"]}`}>
            <h3>🚫 WHAT NOT TO DO</h3>
            <ul>
            <li>Don’t stay silent if uneasy</li>
            <li>Don’t accuse aggressively</li>
            </ul>
        </div>

        <div className={`${styles["safety-card__anchor"]}`}>
            <h3>🛡️ SAFETY ANCHOR</h3>
            <p>Most route changes are due to traffic — communication resets control.</p>
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
                    Feeling Followed
                    </h3>

                    <p className={styles["safety-front-card__description"]}>
                     You notice the same person behind you for several blocks.
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
                    <li>Enter a store or hotel lobby</li>
                    <li>Cross the street or call someone</li>
                    <li>Change direction</li>
                </ul>
        </div>
        <div className={`${styles["safety-card__block"]} ${styles["safety-card__block--dont"]}`}>
            <h3>🚫 WHAT NOT TO DO</h3>
            <ul>
            <li>Don’t confront </li>
            <li>Don’t walk into isolated areas </li>
            <li>Don’t head directly to your hotel</li>
            </ul>
        </div>

        <div className={`${styles["safety-card__anchor"]}`}>
            <h3>🛡️ SAFETY ANCHOR</h3>
            <p>Stepping into a business instantly breaks the pattern.</p>
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
