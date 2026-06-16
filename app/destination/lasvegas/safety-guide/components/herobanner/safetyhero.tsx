import Link from "next/link";
import styles from "./safetyhero.module.css";

export default function SafetyHero() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.hero}>

        {/* Breadcrumb */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>›</span>
          <a href="/destination/lasvegas/solo-trip-to-lasvegas">Solo Trip to Las Vegas</a>
          <span>›</span>
          <span className={styles.current}>Las Vegas Safety Guide</span>
        </nav>

        {/* Title + Subtitle */}
        <div className={styles.heroContent}>
          <h1>Is Las Vegas Safe for Tourists in 2026? Complete Safety Guide</h1>
          <p className={styles.subtitle}>
            Honest, practical Las Vegas safety tips for tourists, solo travelers, and first-time visitors- based on real situations you&rsquo;ll face on and off the Strip.
          </p>

          <p className={styles.topics}>
            The Strip · Downtown/Fremont · Scams · Extreme Heat · Rideshare · Casino Floor
          </p>
        </div>

        {/* Info Section */}
        <div className={styles.infoBox}>
          <h2>
            <span className={styles.infoIcon}>ℹ</span>
            In this Las Vegas safety guide, you&rsquo;ll learn:
          </h2>

          <ul>
            <li>Which Las Vegas areas are safest for tourists-and where to be careful off-Strip after dark</li>
            <li>The common Vegas scams-timeshare pitches, club promoters, and casino-floor ATMs</li>
            <li>How to handle extreme desert heat that can be a real summer risk</li>
            <li>Safety tips for solo and solo female travelers visiting Las Vegas</li>
            <li>Rideshare, the RTC Deuce bus, and the Monorail explained simply</li>
          </ul>
        </div>

        {/* Envelope Bottom */}
        <div className={styles.envelopeBottom}></div>
      </div>
    </section>
  );
}
