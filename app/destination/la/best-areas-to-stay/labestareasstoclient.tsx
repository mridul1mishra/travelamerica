"use client";
import Link from "next/link";
import Header from "../../../components/Header/header";
import Footer from "@/app/components/Header/Footer/footer";
import styles from "@/app/destination/city-hub.module.css";

const areas = [
  { name: "Santa Monica (Best Overall for First-Timers)", vibe: "Beach access, walkable Third Street Promenade, the famous pier, and a safe, well-lit grid. Closest LA gets to a walkable city. Expensive ($200–$400/night for hotels), but you trade car dependency for convenience.", bestFor: "First-timers, couples, anyone wanting beach + walkability" },
  { name: "West Hollywood (WeHo)", vibe: "Sunset Strip, lively nightlife, excellent restaurants, walkable between bars and clubs. LGBTQ+ friendly and very social. Mid-range to expensive hotels ($150–$300). Quieter during the day, buzzing at night.", bestFor: "Nightlife, dining, LGBTQ+ travelers, social trips" },
  { name: "Hollywood", vibe: "Walk of Fame, TCL Chinese Theatre, Griffith Observatory access. Central location. Very touristy and congested. Quality varies wildly by block — stick to hotels on Hollywood Blvd or above. Budget to mid-range ($100–$200).", bestFor: "Sightseeing-focused trips, budget travelers wanting central access" },
  { name: "Silver Lake / Los Feliz", vibe: "Hip, local neighborhood with excellent coffee shops, independent restaurants, and a reservoir walk. No beach access. Requires a car or Uber for most attractions. Airbnbs dominate — hotels are scarce.", bestFor: "Repeat visitors, digital nomads, food and culture travelers" },
  { name: "Downtown LA (DTLA)", vibe: "Grand Central Market, The Broad, Staples Center events, Arts District galleries. Rapidly gentrified with excellent hotel value ($120–$180). Some blocks still rough — stay near Grand Ave or the Arts District, not Skid Row adjacent.", bestFor: "Budget travelers, arts and food focus, concert-goers" },
  { name: "Beverly Hills / Bel Air", vibe: "Rodeo Drive, Mulholland Drive views, ultra-luxury hotels. The safest and most manicured area in LA. Very expensive ($350–$700+/night). Nothing is walkable — you need a car for everything.", bestFor: "Luxury travel, business travel, special occasions" },
];

const quickTips = [
  "LA has no reliable public transit for most tourist attractions. Budget $15–$30/day for Uber or a rental car on top of hotel costs.",
  "Parking in Santa Monica and Beverly Hills can be $25–$40/day. Factor this into hotel cost comparisons.",
  "Weekday rates are typically 20–30% cheaper. Avoid arriving during major awards season (Jan–Mar) when prices spike.",
  "Resort fees are less common than Vegas but do exist — check the full nightly total, not just the base rate.",
];

export default function LABestAreasClient() {
  return (
    <main>
      <Header image="/data/majorcities/losangeles/assets/losangeles.jpeg" bannerText="Best Areas to Stay in Los Angeles" />
      <div className={styles.slimCta}>
        <span className={styles.slimCtaText}>Compare live hotel prices across LA neighborhoods →</span>
        <Link href="/destination/la/bookings?tab=hotels" className={styles.slimCtaBtn}>Browse hotels</Link>
      </div>
      <section className={styles.hero}>
        <h1>Best Areas to Stay in Los Angeles</h1>
        <p>LA is a city of neighborhoods — your choice of base determines how much you spend on transport, how safe you feel walking at night, and what kind of trip you have. Here is the honest breakdown.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/la/bookings?tab=hotels" className={styles.primaryCta}>Compare hotel prices</Link>
          <Link href="/destination/la/safety-guide" className={styles.secondaryCta}>LA safety guide</Link>
        </div>
      </section>
      <section className={styles.section} aria-labelledby="areas-la">
        <h2 id="areas-la" className={styles.sectionTitle}>Los Angeles Areas Compared</h2>
        <p className={styles.sectionIntro}>Six distinct neighborhoods — what each is actually like and who it suits.</p>
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
      <section className={`${styles.section} ${styles.altBg}`} aria-labelledby="tips-la">
        <h2 id="tips-la" className={styles.sectionTitle}>Hotel Booking Tips for Los Angeles</h2>
        <div className={styles.grid}>
          {quickTips.map((tip, i) => (
            <article key={i} className={styles.card}>
              <p className={styles.cardBody}>{tip}</p>
            </article>
          ))}
        </div>
      </section>
      <div className={styles.bookingStrip}>
        <h2>Find the right Los Angeles hotel</h2>
        <p>Compare Santa Monica, Hollywood, WeHo, and DTLA hotels — live prices and real reviews.</p>
        <Link href="/destination/la/bookings?tab=hotels" className={styles.bookingBtn}>Browse Los Angeles hotels</Link>
      </div>
      <Footer />
    </main>
  );
}
