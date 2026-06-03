"use client";
import Link from "next/link";
import Header from "../../../components/Header/header";
import Footer from "@/app/components/Header/Footer/footer";
import styles from "@/app/destination/city-hub.module.css";

const neighborhoods = [
  { name: "Mid-Strip", vibe: "The centre of everything — Bellagio, Cosmopolitan, Aria, Vdara, Park MGM, and the T-Mobile Arena all sit here. Walking distance to the majority of shows, restaurants, and free attractions. Most expensive but zero logistics: you never need a car.", bestFor: "First-timers, short trips, anyone who wants maximum convenience" },
  { name: "South Strip", vibe: "Mandalay Bay, Luxor, Excalibur, MGM Grand. Cheaper than mid-Strip by $30–$60/night. A 15–20 min walk north to the Bellagio, or a $10 Uber. Good balance of access and price. The T-Mobile Arena events draw crowds on this end.", bestFor: "Budget-conscious travelers, groups, families" },
  { name: "North Strip", vibe: "Stratosphere (now renamed Strat), Circus Circus, Resorts World. Furthest from the action — 25-min walk or short cab to mid-Strip. Cheapest Strip rooms, often under $50/night on weekdays. The Strat tower and thrill rides are unique to this end.", bestFor: "Very budget stays, travelers who Uber everywhere" },
  { name: "Downtown / Fremont Street", vibe: "Old Vegas. The Fremont Street Experience LED canopy covers four blocks with free nightly light shows. Hotels like the Golden Nugget are $40–$80 cheaper than Strip equivalents. Grittier and more local. 15 min by car from mid-Strip.", bestFor: "Repeat visitors, budget travelers, those who want the vintage Vegas vibe" },
  { name: "Summerlin", vibe: "Upscale west-side suburb. Red Rock Canyon is 15 min away. Downtown Summerlin outdoor mall, quiet residential streets, and family-oriented. Requires a car for everything. None of the casino energy.", bestFor: "Families, hikers, week-long stays away from the Strip" },
  { name: "Henderson", vibe: "Suburb 20 min southeast. Lake Las Vegas resort area, quieter casinos (Green Valley Ranch, Sunset Station), and residential calm. A car is essential. Airport proximity makes it convenient for early flights.", bestFor: "Longer stays, families, travelers mixing Vegas with outdoor recreation" },
  { name: "Arts District (18b)", vibe: "Small creative cluster just west of DTLA Vegas. Independent galleries, coffee shops, food trucks, and the First Friday monthly art walk. Boutique hotels are emerging here. Very walkable within its few blocks, but isolated from Strip action.", bestFor: "Creative travelers, repeat visitors, those who want local character" },
];

export default function LasVegasNeighborhoodGuideClient() {
  return (
    <main>
      <Header image="/data/majorcities/lasvegas/assets/lasvegas.jpeg" bannerText="Las Vegas Neighborhood Guide" />
      <div className={styles.slimCta}>
        <span className={styles.slimCtaText}>Find hotels in your preferred Las Vegas area →</span>
        <Link href="/destination/lasvegas/bookings?tab=hotels" className={styles.slimCtaBtn}>Browse hotels</Link>
      </div>
      <section className={styles.hero}>
        <h1>Las Vegas Neighborhood Guide</h1>
        <p>Las Vegas is more than the Strip — but where you stay shapes your entire trip. Mid-Strip is the default for a reason; Downtown is worth understanding; the suburbs exist for everyone else. Here is the full breakdown.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/lasvegas/best-areas-to-stay" className={styles.primaryCta}>Best areas to stay</Link>
          <Link href="/destination/lasvegas/safety-guide" className={styles.secondaryCta}>Las Vegas safety guide</Link>
        </div>
      </section>
      <section className={styles.section} aria-labelledby="neighborhoods-lv">
        <h2 id="neighborhoods-lv" className={styles.sectionTitle}>Las Vegas Areas Explained</h2>
        <p className={styles.sectionIntro}>Seven areas covering the full range of where visitors stay — and what each is actually like.</p>
        <div className={styles.grid}>
          {neighborhoods.map(({ name, vibe, bestFor }) => (
            <article key={name} className={styles.card}>
              <h3 className={styles.cardTitle}>{name}</h3>
              <p className={styles.cardBody}>{vibe}</p>
              <p className={styles.cardMeta}>Best for: {bestFor}</p>
            </article>
          ))}
        </div>
      </section>
      <div className={styles.bookingStrip}>
        <h2>Book hotels in the right Las Vegas area</h2>
        <p>Compare Strip, Downtown, and off-Strip hotels — live prices and real reviews.</p>
        <Link href="/destination/lasvegas/bookings?tab=hotels" className={styles.bookingBtn}>Browse Las Vegas hotels</Link>
      </div>
      <Footer />
    </main>
  );
}
