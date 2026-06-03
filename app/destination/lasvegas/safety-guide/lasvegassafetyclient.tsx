// Server Component — no hooks used.
import Link from "next/link";
import Header from "../../../components/Header/header";
import Footer from "@/app/components/Header/Footer/footer";
import styles from "@/app/destination/city-hub.module.css";

const safetyTopics = [
  { title: "The Strip: Mostly Safe, But Stay Alert", blurb: "The main Strip is heavily patrolled and generally safe for tourists. Pickpocketing happens in crowds — use a cross-body bag. Avoid the west side of the Strip (east of the freeway) after midnight. The Strip median is safer than side streets." },
  { title: "Downtown / Fremont: Use Common Sense", blurb: "Fremont Street Experience itself is safe and well-lit. Avoid walking more than 2 blocks north or east of Fremont St after dark. Uber between the Strip and Downtown rather than walking." },
  { title: "Common Tourist Scams", blurb: "CD hustlers (will hand you a CD then demand money), card-slappers on the Strip (girls handing out escort cards — just don't take them), rigged 3-card monte near Fremont. Never hand cash to street performers before agreeing a price." },
  { title: "Extreme Heat (May–September)", blurb: "Las Vegas summer averages 105°F (40°C). Drink a liter of water every 2 hours outdoors. Carry a hat and sunscreen. Avoid outdoor sightseeing between 11am–4pm in summer. Heat stroke is a real risk in the desert." },
  { title: "Driving Safety", blurb: "Nevada has strict DUI laws. Rental cars attract theft — never leave valuables visible. GPS can route you through unfamiliar areas at night. Stick to I-15 and Las Vegas Blvd for main transit." },
  { title: "Casino Floor Safety", blurb: "Keep your chips visible. Never leave drinks unattended. Be cautious with alcohol — casinos offer free drinks to keep you gambling. ATM fees on the casino floor can be $5–$10 per transaction." },
];

export default function LasVegasSafetyClient() {
  return (
    <main>
      <Header image="/data/majorcities/lasvegas/assets/lasvegas.webp" bannerText="Las Vegas Safety Guide" />
      <section className={styles.hero}>
        <h1>Is Las Vegas Safe? Honest 2026 Guide</h1>
        <p>Las Vegas is safe for tourists on the Strip and in major tourist areas. The risks are specific — scams, heat, and straying off the beaten path after midnight. This guide tells you exactly what to watch for.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/lasvegas/best-areas-to-stay" className={styles.primaryCta}>Where to stay safely</Link>
          <Link href="/destination/lasvegas/bookings" className={styles.secondaryCta}>Book your trip</Link>
        </div>
      </section>
      <section className={styles.section} aria-labelledby="safety-topics">
        <h2 id="safety-topics" className={styles.sectionTitle}>Las Vegas Safety: What You Need to Know</h2>
        <p className={styles.sectionIntro}>Six things that actually matter for tourist safety in Las Vegas.</p>
        <div className={styles.grid}>
          {safetyTopics.map(({ title, blurb }) => (
            <article key={title} className={styles.card}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{blurb}</p>
            </article>
          ))}
        </div>
      </section>
      <section className={`${styles.section} ${styles.altBg}`} aria-labelledby="emergency-lv">
        <h2 id="emergency-lv" className={styles.sectionTitle}>Emergency Numbers</h2>
        <div className={styles.grid}>
          <article className={styles.card}><h3 className={styles.cardTitle}>Emergency</h3><p className={styles.cardBody}>911 — police, fire, ambulance</p></article>
          <article className={styles.card}><h3 className={styles.cardTitle}>Non-Emergency Police</h3><p className={styles.cardBody}>(702) 828-3111 — LVMPD non-emergency line</p></article>
          <article className={styles.card}><h3 className={styles.cardTitle}>Nearest Hospital</h3><p className={styles.cardBody}>University Medical Center: 1800 W Charleston Blvd — Level 1 trauma center</p></article>
        </div>
      </section>
      <Footer />
    </main>
  );
}
