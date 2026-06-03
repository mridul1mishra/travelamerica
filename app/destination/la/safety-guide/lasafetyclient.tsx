// Server Component — no hooks used.
import Link from "next/link";
import Header from "../../../components/Header/header";
import Footer from "@/app/components/Header/Footer/footer";
import styles from "@/app/destination/city-hub.module.css";

const safetyTopics = [
  { title: "Safe Tourist Areas", blurb: "Santa Monica, Beverly Hills, West Hollywood, Bel Air, and the major tourist corridors of Hollywood Blvd are well-patrolled and safe during the day and most evenings. These areas have a visible police and security presence." },
  { title: "Areas to Avoid", blurb: "Skid Row (between 3rd–7th St and San Pedro–Alameda in DTLA) has a significant homeless encampment and should be avoided on foot. Compton, Watts, and parts of South LA are higher-crime residential areas that tourists have no reason to visit." },
  { title: "Car Break-Ins: The Biggest Real Risk", blurb: "Car break-ins are the most common crime tourists experience in LA. Never leave anything visible in a parked car — not a bag, a jacket, or a charger. Use hotel parking or attended lots near tourist sites. Smash-and-grabs happen in seconds even in broad daylight." },
  { title: "Driving & Road Safety", blurb: "LA traffic is relentless. Google Maps underestimates commute times. DUI checkpoints are common on Friday and Saturday nights. Car insurance is mandatory — confirm your rental coverage. Pedestrians do not have right-of-way in practice despite what the law says." },
  { title: "Common Tourist Scams", blurb: "Fake celebrity tour operators near the Walk of Fame charge $50+ for worthless map tours. Aggressive CD hustlers on Hollywood Blvd. Parking lot attendants who quote one price then charge another — always get the rate confirmed in writing or use app-based parking (SpotHero, ParkWhiz)." },
  { title: "Earthquake Awareness", blurb: "LA is in an active seismic zone. Minor tremors are common. In a quake: drop, cover, and hold on under a table or against an interior wall. Stay away from windows. Most hotel rooms have an emergency card with instructions — read it on arrival." },
];

export default function LASafetyClient() {
  return (
    <main>
      <Header image="/data/majorcities/losangeles/assets/losangeles.webp" bannerText="Los Angeles Safety Guide" />
      <section className={styles.hero}>
        <h1>Is Los Angeles Safe? Honest 2026 Guide</h1>
        <p>LA is safe for tourists in the major visitor areas. The risks are specific — car break-ins, a few neighborhoods to avoid on foot, and driving in heavy traffic. This guide tells you exactly what to watch for.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/la/best-areas-to-stay" className={styles.primaryCta}>Where to stay safely</Link>
          <Link href="/destination/la/bookings" className={styles.secondaryCta}>Book your trip</Link>
        </div>
      </section>
      <section className={styles.section} aria-labelledby="safety-topics-la">
        <h2 id="safety-topics-la" className={styles.sectionTitle}>LA Safety: What You Need to Know</h2>
        <p className={styles.sectionIntro}>Six things that actually matter for tourist safety in Los Angeles.</p>
        <div className={styles.grid}>
          {safetyTopics.map(({ title, blurb }) => (
            <article key={title} className={styles.card}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{blurb}</p>
            </article>
          ))}
        </div>
      </section>
      <section className={`${styles.section} ${styles.altBg}`} aria-labelledby="emergency-la">
        <h2 id="emergency-la" className={styles.sectionTitle}>Emergency Numbers</h2>
        <div className={styles.grid}>
          <article className={styles.card}><h3 className={styles.cardTitle}>Emergency</h3><p className={styles.cardBody}>911 — police, fire, ambulance</p></article>
          <article className={styles.card}><h3 className={styles.cardTitle}>Non-Emergency Police</h3><p className={styles.cardBody}>(877) 275-5273 — LAPD non-emergency line</p></article>
          <article className={styles.card}><h3 className={styles.cardTitle}>Nearest Trauma Center</h3><p className={styles.cardBody}>Cedars-Sinai Medical Center: 8700 Beverly Blvd, West Hollywood — Level 1 trauma center</p></article>
        </div>
      </section>
      <Footer />
    </main>
  );
}
