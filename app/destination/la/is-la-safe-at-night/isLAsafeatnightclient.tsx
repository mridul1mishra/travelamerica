// Server Component — no hooks used.
import Link from "next/link";
import Header from "../../../components/Header/header";
import Footer from "@/app/components/Header/Footer/footer";
import styles from "@/app/destination/city-hub.module.css";

const nightSafety = [
  { title: "Safe After Dark: Tourist Areas", blurb: "Santa Monica (Third Street Promenade and the pier area), West Hollywood (Sunset Strip), Beverly Hills, Hollywood Blvd (the well-lit tourist corridor), and the DTLA Arts District are all comfortable after dark with normal street awareness. These areas have foot traffic, open businesses, and security presence at night." },
  { title: "Use Rideshare After 10pm", blurb: "The single most effective safety measure in LA at night is using Uber or Lyft instead of walking to unfamiliar areas. LA's car culture means most locals drive or rideshare at night — pedestrians in residential areas after dark can attract unwanted attention. Rideshare from venue to hotel whenever in doubt." },
  { title: "Areas to Avoid at Night", blurb: "Skid Row (east of Main St between 3rd and 7th in DTLA). Parts of Hollywood east of Highland Ave. North of Sunset in parts of East Hollywood. South of the 10 freeway in many parts of South LA. Compton, Watts, and Inglewood at night unless you know them. None of these areas need to be visited by tourists." },
  { title: "Car Safety at Night", blurb: "Never leave anything in your car at night — not a bag, charger, or jacket. Use well-lit parking lots or attended valet rather than dark street parking. Lock your doors immediately when you get in. Carjackings at traffic lights are rare but occur — keep your phone off your lap at red lights in lower-traffic areas." },
  { title: "Parking Structure Safety", blurb: "Multi-story parking structures in DTLA and some parts of Hollywood can feel isolated late at night. Stick to the elevator rather than stairwells. Park near the elevator on higher floors. If anything feels wrong, go back to the venue and ask staff to walk with you. Trust your instincts." },
  { title: "Beach Areas at Night", blurb: "Venice Beach boardwalk is not recommended for solo walking after 10pm — the homeless population increases and lighting is poor in sections. Santa Monica Pier and Promenade are fine until closing time (varies). Malibu beaches are isolated at night — only visit with others and let someone know where you are." },
];

export default function IsLASafeAtNightClient() {
  return (
    <main>
      <Header image="/data/majorcities/losangeles/assets/losangeles.webp" bannerText="Is LA Safe at Night?" />
      <section className={styles.hero}>
        <h1>Is LA Safe at Night? Honest 2026 Guide</h1>
        <p>LA is safe at night in the major tourist areas — and riskier in specific corridors that tourists have no reason to visit. This guide gives you the honest breakdown by neighborhood and situation.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/la/safety-guide" className={styles.primaryCta}>Full LA safety guide</Link>
          <Link href="/destination/la/best-areas-to-stay" className={styles.secondaryCta}>Best areas to stay</Link>
        </div>
      </section>
      <section className={styles.section} aria-labelledby="night-safety-la">
        <h2 id="night-safety-la" className={styles.sectionTitle}>LA Nighttime Safety: What to Know</h2>
        <p className={styles.sectionIntro}>Six topics that cover the specific nighttime risks in Los Angeles — and how to avoid them.</p>
        <div className={styles.grid}>
          {nightSafety.map(({ title, blurb }) => (
            <article key={title} className={styles.card}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{blurb}</p>
            </article>
          ))}
        </div>
      </section>
      <section className={`${styles.section} ${styles.altBg}`} aria-labelledby="emergency-la-night">
        <h2 id="emergency-la-night" className={styles.sectionTitle}>Emergency Numbers</h2>
        <div className={styles.grid}>
          <article className={styles.card}><h3 className={styles.cardTitle}>Emergency</h3><p className={styles.cardBody}>911 — police, fire, ambulance</p></article>
          <article className={styles.card}><h3 className={styles.cardTitle}>Non-Emergency Police</h3><p className={styles.cardBody}>(877) 275-5273 — LAPD non-emergency line</p></article>
          <article className={styles.card}><h3 className={styles.cardTitle}>Rideshare Safety</h3><p className={styles.cardBody}>Both Uber and Lyft have in-app emergency buttons that share your location with 911 — use them if needed</p></article>
        </div>
      </section>
      <Footer />
    </main>
  );
}
