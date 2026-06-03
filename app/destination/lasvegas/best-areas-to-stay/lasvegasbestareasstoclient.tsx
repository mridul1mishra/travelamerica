// Server Component — no hooks used.
import Link from "next/link";
import Header from "../../../components/Header/header";
import Footer from "@/app/components/Header/Footer/footer";
import styles from "@/app/destination/city-hub.module.css";

const areas = [
  { name: "Mid-Strip (Best Overall)", vibe: "Cosmopolitan, Aria, Bellagio, Park MGM. Walking distance to the majority of shows, restaurants, and the Bellagio fountains. Most expensive but zero logistics.", bestFor: "First-timers, short trips, anyone wanting maximum convenience" },
  { name: "South Strip", vibe: "Mandalay Bay, Luxor, MGM Grand. Cheaper than mid-Strip. 15-min walk to center action or $10 Uber. Good for budget-conscious travelers who don't mind the walk.", bestFor: "Budget travelers, groups, families" },
  { name: "North Strip", vibe: "Stratosphere, Circus Circus area. Quietest and cheapest part of the Strip. Further from the action — a 25-min walk or short cab to mid-Strip.", bestFor: "Very budget stays, travelers who plan to Uber everywhere" },
  { name: "Downtown / Fremont Street", vibe: "Low nightly rates ($40–$80 cheaper than Strip equivalents). Fremont Street Experience is the centrepiece. Older, grittier, more local. 15 min by car from the Strip.", bestFor: "Repeat visitors, budget travelers, those who want a different Vegas vibe" },
  { name: "Henderson", vibe: "Suburb 20 min from the Strip. Residential, family-friendly, Lake Las Vegas nearby. Requires a car. Much quieter.", bestFor: "Families, outdoor activities, week-long stays" },
  { name: "Summerlin (West Las Vegas)", vibe: "Upscale suburb. Red Rock Canyon access. Peaceful, away from casino energy. Downtown Summerlin outdoor mall is nearby.", bestFor: "Hiking, nature, quieter stays" },
];

const quickTips = [
  "Resort fees ($35–$50/night) are charged on top of room rates at all Strip hotels. Always calculate the full nightly cost.",
  "On-Strip hotels can offer free parking — call ahead. Most now charge $15–$25/day.",
  "Weekday rates are 30–50% cheaper than weekends. Monday–Thursday is the sweet spot.",
  "Booking directly through hotel sites often beats OTAs, especially for upgrades and fee waivers.",
];

export default function LasVegasBestAreasClient() {
  return (
    <main>
      <Header image="/data/majorcities/lasvegas/assets/lasvegas.webp" bannerText="Best Areas to Stay in Las Vegas" />
      <div className={styles.slimCta}>
        <span className={styles.slimCtaText}>Compare live hotel prices across the Strip and Downtown →</span>
        <Link href="/destination/lasvegas/bookings?tab=hotels" className={styles.slimCtaBtn}>Browse hotels</Link>
      </div>
      <section className={styles.hero}>
        <h1>Best Areas to Stay in Las Vegas</h1>
        <p>Where you stay in Vegas determines your entire experience. Mid-Strip maximizes convenience but costs more; Downtown saves money but adds logistics. Here is the honest breakdown.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/lasvegas/bookings?tab=hotels" className={styles.primaryCta}>Compare hotel prices</Link>
          <Link href="/destination/lasvegas/safety-guide" className={styles.secondaryCta}>Las Vegas safety guide</Link>
        </div>
      </section>
      <section className={styles.section} aria-labelledby="areas-lv">
        <h2 id="areas-lv" className={styles.sectionTitle}>Las Vegas Areas Compared</h2>
        <p className={styles.sectionIntro}>Six distinct areas — what each is actually like and who it suits.</p>
        <div className={styles.grid}>
          {areas.map(({ name, vibe, bestFor }) => (
            <article key={name} className={styles.card}>
              <h3 className={styles.cardTitle}>{name}</h3>
              <p className={styles.cardBody}>{vibe}</p>
              <p className={styles.cardMeta}>Best for: {bestFor}</p>
            </article>
          ))}
        </div>
      </section>
      <section className={`${styles.section} ${styles.altBg}`} aria-labelledby="tips-lv">
        <h2 id="tips-lv" className={styles.sectionTitle}>Hotel Booking Tips for Las Vegas</h2>
        <div className={styles.grid}>
          {quickTips.map((tip, i) => (
            <article key={i} className={styles.card}>
              <p className={styles.cardBody}>{tip}</p>
            </article>
          ))}
        </div>
      </section>
      <div className={styles.bookingStrip}>
        <h2>Find the right Las Vegas hotel</h2>
        <p>Compare Strip, Downtown, and off-Strip hotels — live prices and real reviews.</p>
        <Link href="/destination/lasvegas/bookings?tab=hotels" className={styles.bookingBtn}>Browse Las Vegas hotels</Link>
      </div>
      <Footer />
    </main>
  );
}
