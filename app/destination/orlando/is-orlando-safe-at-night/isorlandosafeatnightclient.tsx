"use client";
import Link from "next/link";
import Header from "../../../components/Header/header";
import Footer from "@/app/components/Header/Footer/footer";
import styles from "@/app/destination/city-hub.module.css";

const nightSafety = [
  { title: "Theme Park Areas: Very Safe After Dark", blurb: "Disney Springs, Universal CityWalk, and the resort corridors surrounding both parks are extremely safe at night — security is heavy, the areas are well-lit, and foot traffic is consistent until midnight. Disney's EPCOT and Hollywood Studios run evening events regularly. Theme park hotels have 24-hour security. These are among the safest environments for tourists anywhere in Florida." },
  { title: "International Drive at Night", blurb: "The main I-Drive tourist corridor is safe at night within the well-lit commercial stretch (roughly from Sand Lake Rd to Universal Blvd). ICON Park, the dinner shows, and hotel lobbies keep the area active until midnight. Avoid the northern sections of I-Drive (above Sand Lake) and the side streets after dark. Use the I-Ride Trolley or rideshare rather than walking between distant hotels at night." },
  { title: "Downtown Orlando at Night", blurb: "Orange Avenue in Downtown Orlando is an active bar and restaurant district that is generally safe within the well-trafficked blocks. Stick to the main strip. Avoid the blocks east of Orange Ave and north of Colonial Dr after midnight. Downtown feels noticeably quieter than a major US city nightlife district — it is manageable with basic awareness." },
  { title: "Areas to Avoid at Night", blurb: "Pine Hills (northwest Orlando) has elevated crime rates and is not a tourist area. Parts of the South Orange/Holden Ave corridor. Isolated sections of US-192 in Kissimmee — the budget motel strips with poor lighting and no foot traffic. These areas have no tourist sights and visitors have no reason to be there after dark." },
  { title: "Car Safety at Night", blurb: "Florida has a high rate of vehicle break-ins. Never leave anything visible in a parked car — at theme parks, shopping centres, or hotels. Use the hotel's covered parking where available. Lock doors immediately when entering the vehicle. Carjackings are rare in tourist areas but occur in isolated parking lots — park near the entrance and under lights." },
  { title: "Florida Wildlife at Night", blurb: "A genuine Orlando-specific consideration: alligators are present in any body of water in Florida, including hotel ponds and drainage areas. Do not approach water edges at night in natural settings. Burmese pythons are present in remote areas but not in tourist zones. Mosquitoes are heavy from May–October — carry repellent for any outdoor evening activity." },
];

export default function IsOrlandoSafeAtNightClient() {
  return (
    <main>
      <Header image="/data/majorcities/orlando/assets/orlando.jpeg" bannerText="Is Orlando Safe at Night?" />
      <section className={styles.hero}>
        <h1>Is Orlando Safe at Night? Honest 2026 Guide</h1>
        <p>Orlando's tourist areas — Disney, Universal, and I-Drive — are extremely safe at night. The risks are in specific non-tourist corridors that visitors have no reason to visit. This guide gives you the honest breakdown.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/orlando/safety-guide" className={styles.primaryCta}>Full safety guide</Link>
          <Link href="/destination/orlando/best-areas-to-stay" className={styles.secondaryCta}>Best areas to stay</Link>
        </div>
      </section>
      <section className={styles.section} aria-labelledby="night-safety-or">
        <h2 id="night-safety-or" className={styles.sectionTitle}>Orlando Nighttime Safety</h2>
        <p className={styles.sectionIntro}>Six things to know about safety in Orlando after dark.</p>
        <div className={styles.grid}>
          {nightSafety.map(({ title, blurb }) => (
            <article key={title} className={styles.card}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{blurb}</p>
            </article>
          ))}
        </div>
      </section>
      <section className={`${styles.section} ${styles.altBg}`} aria-labelledby="emergency-or-night">
        <h2 id="emergency-or-night" className={styles.sectionTitle}>Emergency Numbers</h2>
        <div className={styles.grid}>
          <article className={styles.card}><h3 className={styles.cardTitle}>Emergency</h3><p className={styles.cardBody}>911 — police, fire, ambulance</p></article>
          <article className={styles.card}><h3 className={styles.cardTitle}>Non-Emergency Police</h3><p className={styles.cardBody}>(407) 836-4357 — Orange County Sheriff non-emergency</p></article>
          <article className={styles.card}><h3 className={styles.cardTitle}>Nearest Trauma Center</h3><p className={styles.cardBody}>Orlando Regional Medical Center: 52 W Underwood St — Level 1 trauma center</p></article>
        </div>
      </section>
      <Footer />
    </main>
  );
}
