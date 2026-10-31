import styles from "./safetyhero.module.css";
import Link from "next/link";

export default function SafetyHero() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.hero}>

        {/* Breadcrumb */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>›</span>
          <Link href="/destination/orlando">Orlando</Link>
          <span>›</span>
          <span className={styles.current}>Orlando Safety Guide</span>
        </nav>

        {/* Title + Subtitle */}
        <div className={styles.heroContent}>
          <h1>Orlando Travel Safety Guide for Visitors</h1>
          <p className={styles.subtitle}>
            Planning an Orlando trip? Start with the places you will visit, how you will travel between them and the precautions your itinerary needs. This guide covers area context, belongings, scams, driving and parking, heat precautions and emergency planning. For detailed evening routes and return transport, use our <Link href="/destination/orlando/is-orlando-safe-at-night">Orlando night-safety guide</Link>.
          </p>

          <p className={styles.topics}>
            General trip precautions · Heat · Driving · Emergency planning
          </p>
        </div>

        {/* Info Section */}
        <div className={styles.infoBox}>
          <p className={styles.infoLabel}>
            <span className={styles.infoIcon}>ℹ</span>
            In this Orlando safety guide
          </p>

          <ul>
            <li>How to assess the area around your accommodation and planned stops.</li>
            <li>Practical precautions for belongings, bookings, driving and transport.</li>
            <li>Heat and sun precautions for daytime outings.</li>
            <li>What to do if plans go wrong and where to find emergency resources.</li>
          </ul>
        </div>

        {/* Envelope Bottom */}
        <div className={styles.envelopeBottom}></div>
      </div>
    </section>
  );
}
