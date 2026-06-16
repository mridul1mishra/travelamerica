import Link from "next/link";
import styles from "./herobanner.module.css";

export default function SafetyHero() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.hero}>

        {/* Breadcrumb */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>&#x203A;</span>
          <a href="/destination/lasvegas/solo-trip-to-lasvegas">Solo Trip to Las Vegas</a>
          <span>&#x203A;</span>
          <span className={styles.current}>Female Solo Travel Guide</span>
        </nav>

        {/* Title + Subtitle */}
        <div className={styles.heroContent}>
          <h1>Female Solo Travel Guide</h1>
          <p className={styles.subtitle}>
            Practical, Las Vegas&#x2011;specific safety advice for women exploring Las Vegas alone.
          </p>

          <p className={styles.topics}>
            The Strip &middot; Casinos &middot; Drink Safety &middot; Nightlife &middot; Rideshare &middot; Female Travelers
          </p>
        </div>

        {/* Info Section */}
        <div className={styles.infoBox}>
          <h2>
            <span className={styles.infoIcon}>&#x2139;</span>
            In this guide, you&rsquo;ll learn:
          </h2>

          <ul>
            <li>Where to stay on the Strip&mdash;and which areas to avoid at night</li>
            <li>Drink safety in casinos, clubs, and pool parties</li>
            <li>How to use rideshare smartly and walk the Strip confidently</li>
            <li>Safety best practices for solo female travelers</li>
          </ul>
        </div>

        {/* Envelope Bottom */}
        <div className={styles.envelopeBottom}></div>
      </div>
    </section>
  );
}
