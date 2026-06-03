// Server Component — no hooks used.
import Link from "next/link";
import Header from "../../../components/Header/header";
import Footer from "@/app/components/Header/Footer/footer";
import styles from "@/app/destination/city-hub.module.css";

const safetyTopics = [
  { title: "Orlando Is Generally Very Safe for Tourists", blurb: "The tourist areas — Disney, Universal, I-Drive, Lake Buena Vista — are extremely safe. Heavily staffed, well-lit, and security-conscious. Violent crime affecting tourists is very rare in these zones." },
  { title: "Areas to Be Cautious", blurb: "Avoid Pine Hills (northwest of Downtown) and parts of OBT (Orange Blossom Trail south of I-4) after dark. Downtown Orlando at night requires normal urban awareness — it is safe but not as sanitized as the resort corridors." },
  { title: "Florida Heat and Sun", blurb: "June–September sees 90–95°F (32–35°C) with high humidity. Children and elderly are most at risk. Apply SPF 50 every 2 hours outdoors, drink water constantly, and schedule indoor breaks between 11am–3pm. Heat exhaustion is common at theme parks in summer." },
  { title: "Theme Park Safety Tips", blurb: "Stay with your group — Disney and Universal have dedicated lost child reunification. Report any suspicious behaviour to park security immediately. Never leave belongings unattended by lockers or on rides. Ride warning signs are serious — follow them." },
  { title: "Driving in Orlando", blurb: "I-4 through Orlando is one of the most dangerous interstate sections in the US (heavy traffic, aggressive driving). Rent a car only if you need it — Uber/Lyft are often cheaper for theme park visits. Never leave valuables visible in rental cars." },
  { title: "Tourist Scams", blurb: "Timeshare pitches near the parks offer free tickets in exchange for sitting through a high-pressure presentation — avoid. Unofficial ticket resellers outside parks sell counterfeits. Discount ticket booths on I-Drive are generally legitimate but always verify first." },
];

export default function OrlandoSafetyClient() {
  return (
    <main>
      <Header image="/data/majorcities/orlando/assets/orlando.webp" bannerText="Orlando Safety Guide" />
      <section className={styles.hero}>
        <h1>Is Orlando Safe for Tourists? Honest 2026 Guide</h1>
        <p>The tourist zones in Orlando are among the safest in Florida. The real risks are heat, driving, and a few specific scams targeting visitors. Here is what you actually need to know.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/orlando/best-areas-to-stay" className={styles.primaryCta}>Where to stay safely</Link>
          <Link href="/destination/orlando/bookings" className={styles.secondaryCta}>Book your trip</Link>
        </div>
      </section>
      <section className={styles.section} aria-labelledby="safety-orl">
        <h2 id="safety-orl" className={styles.sectionTitle}>Orlando Safety: What You Need to Know</h2>
        <div className={styles.grid}>
          {safetyTopics.map(({ title, blurb }) => (
            <article key={title} className={styles.card}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{blurb}</p>
            </article>
          ))}
        </div>
      </section>
      <section className={`${styles.section} ${styles.altBg}`} aria-labelledby="emergency-orl">
        <h2 id="emergency-orl" className={styles.sectionTitle}>Emergency Numbers</h2>
        <div className={styles.grid}>
          <article className={styles.card}><h3 className={styles.cardTitle}>Emergency</h3><p className={styles.cardBody}>911 — police, fire, ambulance</p></article>
          <article className={styles.card}><h3 className={styles.cardTitle}>Orange County Sheriff</h3><p className={styles.cardBody}>(407) 836-4357 — non-emergency</p></article>
          <article className={styles.card}><h3 className={styles.cardTitle}>Orlando Health (Main Hospital)</h3><p className={styles.cardBody}>52 W Underwood St — (321) 843-7000</p></article>
        </div>
      </section>
      <Footer />
    </main>
  );
}
