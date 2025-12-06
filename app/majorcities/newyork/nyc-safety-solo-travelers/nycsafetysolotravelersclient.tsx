import styles from './nycsafetysolotravelers.module.css';
import Header from "../../../components/Header/header";
import Image from 'next/image';
import Link from 'next/link';

export default async function NYCSafetySolTravelersClient () {
return(
    <>
    <Header image={`/data/majorcities/newyork/assets/solo-travel-itinerary.png`} bannerText="Solo Travel Itinerary for New York City" />
      <section className={styles.splitSection} style={{  textAlign: "center" }}>
                <div style={{ width: "100%", textAlign: "center" }}>
                <h1  className={styles.sectionheading}>Is NYC Safe for Solo Travelers?</h1>
                <p className={styles.subheading}>From bustling neighborhoods to midnight subway rides, from rooftop nights to hidden corners—Your Solo Traveler’s Compass unfolds NYC’s safety story like a citywide screenplay, giving you the confidence to explore every scene on your own terms.</p>
                </div>
      </section>  
      <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image src="/data/majorcities/newyork/assets/daysolonew.png" alt="Map of solo travel route through Central Park and Rockefeller Center in NYC" fill className={styles.mapImage}/>
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Exploring New York Solo: Confidence Starts Here</h2>
          <ul className={styles.itineraryList}>
              <li className={styles.subheading}>🗽New York City is one of the busiest cities in the world—safe overall, but it demands awareness. Tourist hubs like Midtown, Upper West Side, and Williamsburg are well‑patrolled and lively at all hours. Still, solo travelers should avoid empty subway cars late at night and be cautious of ticket resellers in Times Square.</li>
              <li className={styles.subheading}>🛡️NYC is safer than many U.S. cities, but petty theft remains the main risk. Crowds provide both protection and pickpocket opportunities, while strong police presence and surveillance in tourist areas add an extra layer of security for solo travelers</li>
              <li className={styles.subheading}>🌆NYC has many lively areas for solo travelers like the Upper West Side, Midtown, and Williamsburg. Some quieter neighborhoods can feel less secure late at night, so it’s best to stick to well‑lit, populated routes.</li>
          </ul>
          <Link href="/majorcities/newyork/landmark" className={styles.ctaButton}>
            Safest Neighborhoods in NYC for Solo Travel
          </Link>
        </div>
      </section>
    </>
);
}