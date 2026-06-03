// Server Component — no hooks used.
import Link from "next/link";
import Header from "../../../components/Header/header";
import Footer from "@/app/components/Header/Footer/footer";
import styles from "@/app/destination/city-hub.module.css";

const landmarks = [
  { title: "Bellagio Fountains", blurb: "Free and spectacular. Performances run every 30 min in the afternoon and every 15 min from 8pm. The best viewing spot is the bridge on Las Vegas Blvd directly in front of the Bellagio. The Sunday afternoon show set to operatic music is a particular highlight. Never pay for a 'fountain view' restaurant table — the bridge is better.", cost: "Free" },
  { title: "Fremont Street Experience", blurb: "A 1,500-foot LED canopy covering the original casino corridor in Downtown Vegas. Free light shows play every hour after dark, synced to music. The SlotZilla zip line runs directly under the canopy ($35–$60). Best visited on a Friday or Saturday night for maximum energy. The Human Cannonball show is a weekend-only spectacle.", cost: "Free (zip line extra)" },
  { title: "High Roller Observation Wheel", blurb: "At 167m, one of the tallest Ferris wheels in the world. The 30-min rotation gives panoramic views of the entire Las Vegas Valley — best at sunset (book the golden-hour slot). Happy Hour pods with an open bar are available ($45–$57). Book in advance online for $5–$10 off the walk-up price.", cost: "$30–$57" },
  { title: "Neon Museum", blurb: "An outdoor boneyard of decommissioned iconic casino signs — the old Stardust, Moulin Rouge, and original Vegas neon. The guided daytime tour ($20) is informative; the Neon Boneyard self-guided evening experience ($25–$28, book ahead) with golden-hour light is genuinely beautiful. A different Vegas than the Strip.", cost: "$20–$28 (book ahead)" },
  { title: "Hoover Dam", blurb: "30 minutes from the Strip via US-93. The exterior is free to view from the pedestrian walkway — allow 45 min. The guided powerplant tour ($30) goes inside the dam and turbine room and is worth it if engineering interests you. The Mike O'Callaghan–Pat Tillman Memorial Bridge viewpoint is the best photography spot.", cost: "Free exterior / $30 tour" },
  { title: "Mirage Volcano", blurb: "The free outdoor volcano in front of The Mirage erupts nightly at 8pm and 9pm (weather permitting) with fire and dramatic sound effects. One of the Strip's enduring free spectacles. Best viewed from the sidewalk on Las Vegas Blvd directly in front of the property. Crowd gathers 10 min before showtime.", cost: "Free" },
];

export default function LasVegasLandmarkClient() {
  return (
    <main>
      <Header image="/data/majorcities/lasvegas/assets/lasvegas.webp" bannerText="Las Vegas Landmarks" />
      <div className={styles.slimCta}>
        <span className={styles.slimCtaText}>Book skip-the-line tickets and guided Las Vegas tours →</span>
        <Link href="/destination/lasvegas/bookings?tab=activities" className={styles.slimCtaBtn}>Browse tours</Link>
      </div>
      <section className={styles.hero}>
        <h1>Las Vegas Landmarks</h1>
        <p>Las Vegas has free world-class spectacles alongside paid attractions — knowing which are worth the price is half the battle. This guide covers all six major landmarks with honest costs and the tips that actually matter.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/lasvegas/bookings?tab=activities" className={styles.primaryCta}>Book landmark tours</Link>
          <Link href="/destination/lasvegas/itinerary" className={styles.secondaryCta}>See 3-day itinerary</Link>
        </div>
      </section>
      <section className={styles.section} aria-labelledby="landmarks-lv">
        <h2 id="landmarks-lv" className={styles.sectionTitle}>Las Vegas Iconic Landmarks</h2>
        <p className={styles.sectionIntro}>Six landmarks every visitor should know — with honest costs and the tips that change the experience.</p>
        <div className={styles.grid}>
          {landmarks.map(({ title, blurb, cost }) => (
            <article key={title} className={styles.card}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{blurb}</p>
              <p className={styles.cardMeta}>{cost}</p>
            </article>
          ))}
        </div>
      </section>
      <div className={styles.bookingStrip}>
        <h2>Book Las Vegas tours and experiences</h2>
        <p>Skip-the-line tickets and guided tours for Las Vegas sights.</p>
        <Link href="/destination/lasvegas/bookings?tab=activities" className={styles.bookingBtn}>Browse Las Vegas activities</Link>
      </div>
      <Footer />
    </main>
  );
}
