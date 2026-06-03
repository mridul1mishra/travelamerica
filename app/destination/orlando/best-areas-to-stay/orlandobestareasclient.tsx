// Server Component — no hooks used.
import Link from "next/link";
import Header from "../../../components/Header/header";
import Footer from "@/app/components/Header/Footer/footer";
import styles from "@/app/destination/city-hub.module.css";

const areas = [
  { name: "On-Site Disney Resorts (Best for Disney-Only Trips)", vibe: "Disney's Value ($120–$180/night), Moderate ($200–$280), and Deluxe ($350–$600+) resorts. All get 30-min Early Park Entry every day — at Disney's scale this is genuinely valuable. Free Skyliner, buses, and monorail to all parks.", bestFor: "Disney-focused trips, families, guests wanting to maximize park time" },
  { name: "Hotel Plaza Blvd / Lake Buena Vista (Best Value Near Disney)", vibe: "8 hotels directly on Disney property (Hilton, Marriott, etc.) but not Disney-owned. Free Disney shuttle. 10-min drive to parks. 30–50% cheaper than Disney resorts. No Early Entry perk.", bestFor: "Budget-conscious Disney visitors, families wanting good value" },
  { name: "Universal On-Site Hotels (Best for Universal Trips)", vibe: "Loews Hard Rock, Portofino Bay, Royal Pacific. All get 1-hour Early Park Admission to Harry Potter and other select attractions — this is highly valuable on busy days. Walk to Universal's parks.", bestFor: "Universal-focused trips, Harry Potter fans, couples" },
  { name: "International Drive (I-Drive)", vibe: "Dense hotel corridor with restaurants, mini-golf, Icon Park. 10 min by car to Universal, 20 min to Disney. Budget to mid-range options. Walkable to dining and ICON Park. Can feel touristy.", bestFor: "Budget trips, flexible itineraries, visitors splitting time across parks" },
  { name: "Kissimmee", vibe: "South of Disney — vacation homes and budget hotels. Perfect for large groups or families renting a house with a pool. Requires a car. 15 min to Disney World gates.", bestFor: "Large families, groups, budget vacation rentals" },
  { name: "Downtown Orlando", vibe: "30 min from Disney, 25 min from Universal. Local restaurants, Lake Eola park, craft bars. No theme park convenience but authentic city character.", bestFor: "Repeat visitors, longer trips, guests spending time beyond the parks" },
];

const tips = [
  "Disney Early Park Entry (30 min) is included with all Disney resort stays — it allows you to ride headliner attractions before queues build. Worth the premium for 4+ day Disney trips.",
  "Universal's Express Pass (separate purchase, $80–$130/day) lets you skip main queues — it's cheaper than booking an on-site hotel just for Early Entry.",
  "I-Drive hotels often include free shuttles to both Disney and Universal. Confirm before booking.",
  "Kissimmee vacation homes average $60–$100/night per bedroom — significantly cheaper than hotels for groups of 4+.",
];

export default function OrlandoBestAreasClient() {
  return (
    <main>
      <Header image="/data/majorcities/orlando/assets/orlando.webp" bannerText="Best Areas to Stay in Orlando" />
      <div className={styles.slimCta}>
        <span className={styles.slimCtaText}>Compare live hotel prices across all Orlando areas →</span>
        <Link href="/destination/orlando/bookings?tab=hotels" className={styles.slimCtaBtn}>Browse hotels</Link>
      </div>
      <section className={styles.hero}>
        <h1>Best Areas to Stay in Orlando</h1>
        <p>Where you stay in Orlando determines your entire logistics. On-site Disney and Universal hotels offer real perks but cost significantly more. This guide explains exactly when those perks are worth it.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/orlando/bookings?tab=hotels" className={styles.primaryCta}>Compare hotel prices</Link>
          <Link href="/destination/orlando/safety-guide" className={styles.secondaryCta}>Orlando safety guide</Link>
        </div>
      </section>
      <section className={styles.section} aria-labelledby="areas-orl">
        <h2 id="areas-orl" className={styles.sectionTitle}>Orlando Areas Compared</h2>
        <p className={styles.sectionIntro}>Six areas — on-site, near-park, and off-park options honestly compared.</p>
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
      <section className={`${styles.section} ${styles.altBg}`} aria-labelledby="tips-orl">
        <h2 id="tips-orl" className={styles.sectionTitle}>Hotel Booking Tips for Orlando</h2>
        <div className={styles.grid}>
          {tips.map((tip, i) => (<article key={i} className={styles.card}><p className={styles.cardBody}>{tip}</p></article>))}
        </div>
      </section>
      <div className={styles.bookingStrip}>
        <h2>Find the right Orlando hotel</h2>
        <p>On-site, near-park, and budget options — compare live prices.</p>
        <Link href="/destination/orlando/bookings?tab=hotels" className={styles.bookingBtn}>Browse Orlando hotels</Link>
      </div>
      <Footer />
    </main>
  );
}
