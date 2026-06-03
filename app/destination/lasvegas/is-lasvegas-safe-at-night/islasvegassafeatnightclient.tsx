"use client";
import Link from "next/link";
import Header from "../../../components/Header/header";
import Footer from "@/app/components/Header/Footer/footer";
import styles from "@/app/destination/city-hub.module.css";

const nightSafety = [
  { title: "The Strip at Night: Generally Safe", blurb: "Las Vegas Blvd between Mandalay Bay and the Stratosphere is heavily policed and surveilled 24 hours. It is one of the most monitored stretches of public space in America. Pickpocketing and aggressive solicitation exist but violent crime against tourists on the main Strip is rare. Stay on the main boulevard — avoid the side streets and parking lots behind the casinos after midnight." },
  { title: "Fremont Street After Dark", blurb: "The Fremont Street Experience covered area (the four-block LED canopy) is safe, well-lit, and has security presence. The problem is what lies beyond it — do not walk more than 2 blocks north or east of Fremont St at night. Rideshare between the Strip and Downtown rather than walking the connecting roads at night." },
  { title: "Casino Security Works in Your Favour", blurb: "Every major casino has floor security, surveillance cameras, and uniformed guards. Inside a casino property you are in one of the safest environments in the city. If you feel unsafe at any point, walk into the nearest casino lobby — staff are trained to handle security concerns and the premises are monitored 24 hours." },
  { title: "What to Actually Watch For", blurb: "Pickpockets in dense crowds (New Year's Eve, major fight weekends). Overly aggressive street performers and card slappers — keep moving. Taxi and rideshare overcharging — always confirm your fare before getting in. Drink spiking is rare but real — keep drinks covered at clubs. ATM skimmers on off-brand casino-floor ATMs — use bank ATMs or the hotel cashier cage." },
  { title: "Getting Back to Your Hotel Safely", blurb: "Request your Uber or Lyft from inside the casino or hotel lobby, not from the street. Verify the driver's name, plate, and car model before getting in. If you are intoxicated, ask hotel staff to help you get a rideshare or book a taxi through the concierge. Never accept lifts from people approaching you on the street offering transport." },
  { title: "Off-Strip Areas at Night", blurb: "Areas west of I-15 at night, the blocks around the Greyhound station, and parts of East Las Vegas (east of Maryland Pkwy) are not tourist areas and have higher crime rates. There is no tourist reason to visit these areas after dark. Stick to the Strip, Fremont Street, and the well-lit hotel corridors between them." },
];

export default function IsLasVegasSafeAtNightClient() {
  return (
    <main>
      <Header image="/data/majorcities/lasvegas/assets/lasvegas.jpeg" bannerText="Is Las Vegas Safe at Night?" />
      <section className={styles.hero}>
        <h1>Is Las Vegas Safe at Night? Honest 2026 Guide</h1>
        <p>The Strip is one of the most monitored and policed public spaces in America. Las Vegas is safe at night for tourists who stay in the main tourist corridors — and riskier in specific off-Strip areas that tourists have no reason to visit.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/lasvegas/safety-guide" className={styles.primaryCta}>Full safety guide</Link>
          <Link href="/destination/lasvegas/best-areas-to-stay" className={styles.secondaryCta}>Best areas to stay</Link>
        </div>
      </section>
      <section className={styles.section} aria-labelledby="night-safety-lv">
        <h2 id="night-safety-lv" className={styles.sectionTitle}>Las Vegas Nighttime Safety</h2>
        <p className={styles.sectionIntro}>Six things to know about safety in Las Vegas after dark.</p>
        <div className={styles.grid}>
          {nightSafety.map(({ title, blurb }) => (
            <article key={title} className={styles.card}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{blurb}</p>
            </article>
          ))}
        </div>
      </section>
      <section className={`${styles.section} ${styles.altBg}`} aria-labelledby="emergency-lv-night">
        <h2 id="emergency-lv-night" className={styles.sectionTitle}>Emergency Numbers</h2>
        <div className={styles.grid}>
          <article className={styles.card}><h3 className={styles.cardTitle}>Emergency</h3><p className={styles.cardBody}>911 — police, fire, ambulance</p></article>
          <article className={styles.card}><h3 className={styles.cardTitle}>Non-Emergency Police</h3><p className={styles.cardBody}>(702) 828-3111 — LVMPD non-emergency line</p></article>
          <article className={styles.card}><h3 className={styles.cardTitle}>University Medical Center</h3><p className={styles.cardBody}>1800 W Charleston Blvd — nearest Level 1 trauma center</p></article>
        </div>
      </section>
      <Footer />
    </main>
  );
}
