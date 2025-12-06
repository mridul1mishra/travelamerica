import styles from './nycsafetysolotravelers.module.css';
import Header from "../../../components/Header/header";
import Image from 'next/image';
import Link from 'next/link';

export default async function NYCSafetySolTravelersClient () {
return(
    <>
    <Header image={`/data/majorcities/newyork/assets/solo‑nyc‑safety‑banner‑updated‑traveler.png`} bannerText="Updated NYC solo travel safety banner with new traveler in backpack and phone" />
      <section className={styles.splitSection} style={{  textAlign: "center" }}>
                <div style={{ width: "100%", textAlign: "center" }}>
                <h1  className={styles.sectionheading}>Is NYC Safe for Solo Travelers?</h1>
                <p className={styles.subheading}>From bustling neighborhoods to midnight subway rides, from rooftop nights to hidden corners—Your Solo Traveler’s Compass unfolds NYC’s safety story like a citywide screenplay, giving you the confidence to explore every scene on your own terms.</p>
                </div>
      </section>  
      <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image src="/data/majorcities/newyork/assets/solo‑nightlife‑safety‑nyc‑illustration.png" alt="Solo traveler in NYC nightlife scene" fill className={styles.mapImage}/>
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
      <section className={styles.splitSection}>
          <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Solo Travel NYC: Smart Transport Moves for Every Ride</h2>
          <p className={styles.subheading}>Every ride in New York tells a story—whether underground, on the streets, or in the choices you make. With a little awareness, each move becomes part of a safer, more confident journey.</p>
          <ul className={styles.itineraryList}>
              <li className={styles.subheading}>🚇 Subway: Stick to well‑lit, populated cars; avoid empty ones late at night.</li>
              <li className={styles.subheading}>🚕 Getting around: Ride‑share offers tracking and cashless convenience; taxis remain reliable at airports and busy hubs.</li>
              <li className={styles.subheading}>🧭 Awareness: Plan routes ahead, keep belongings close, and trust your instincts when choosing transport.</li>
          </ul>
          <Link href="/majorcities/newyork/landmark" className={styles.ctaButton}>
            Subway Safety Tips for Solo Travelers
          </Link>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/newyork/assets/solo‑nyc‑transport‑safety‑hands‑closeup.png"
            alt="Close-up of solo traveler’s hand with phone in NYC night transport scene"
            fill
            className={styles.mapImage}
          />
        </div>  
      </section>
      <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image src="/data/majorcities/newyork/assets/solo‑nyc‑nightlife‑broadway‑safety.png" 
          alt="Solo traveler’s hand with cocktail in NYC Broadway nightlife scene" fill className={styles.mapImage}/>
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>NYC Nightlife for Solo Travelers</h2>
          <p className={styles.subheading}>New York doesn’t dim after dark — it shifts. For solo travelers, the city’s energy becomes more intimate, more electric, and more yours. Whether you’re chasing rooftop views, jazz rhythms, or a quiet cocktail with skyline glow, this guide maps the safest spots where going solo feels effortless, natural, and unforgettable.</p>
          <ul className={styles.itineraryList}>
              <li className={styles.subheading}>🪑 <b>Choose smart venues & seating</b> → Stick to lively, well‑lit spots like rooftop bars, Broadway shows, and jazz clubs. In food halls or markets, sit near crowds or staff so you feel comfortable and secure.</li>
              <li className={styles.subheading}>🚇 <b>Plan ahead & travel safely</b> → Know your route home before heading out, pair nightlife with safe late‑night transit options, and keep valuables minimal and close at hand.</li>
              <li className={styles.subheading}>📱 <b>Stay connected & trust yourself</b> → Share your evening plan with a friend or use a check‑in app, and always trust your instincts — if a place feels off, move on.</li>
          </ul>
          <Link href="/majorcities/newyork/landmark" className={styles.ctaButton}>
            Safest Neighborhoods in NYC for Solo Travel
          </Link>
        </div>
      </section>
    </>
);
}