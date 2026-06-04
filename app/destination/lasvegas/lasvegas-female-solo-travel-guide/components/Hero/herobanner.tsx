import styles from "./herobanner.module.css";

export default function SafetyHero() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.hero}>

        {/* Breadcrumb */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span>›</span>
          <a href="/destination/lasvegas/solo-trip-to-lasvegas">Solo Trip to Las Vegas</a>
          <span>›</span>
          <span className={styles.current}>Female Solo Travel Guide</span>
        </nav>

        {/* Title + Subtitle */}
        <div className={styles.heroContent}>
          <h1>Female Solo Travel Guide</h1>
          <p className={styles.subtitle}>
            Practical, Las Vegas‑specific safety advice for women exploring Las Vegas alone.
          </p>

          <p className={styles.topics}>
            The Strip · Casinos · Drink Safety · Nightlife · Rideshare · Female Travelers
          </p>
        </div>

        {/* Info Section */}
        <div className={styles.infoBox}>
          <h2>
            <span className={styles.infoIcon}>ℹ</span>
            In this guide, you’ll learn:
          </h2>

          <ul>
            <li>Where to stay on the Strip—and which areas to avoid at night</li>
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
