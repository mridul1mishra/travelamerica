import styles from "./safetyhero.module.css";

export default function SafetyHero() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.hero}>

        {/* Breadcrumb */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span>›</span>
          <a href="/destination/orlando/solo-trip-to-orlando">Solo Trip to Orlando</a>
          <span>›</span>
          <span className={styles.current}>Orlando Safety Guide</span>
        </nav>

        {/* Title + Subtitle */}
        <div className={styles.heroContent}>
          <h1>Is Orlando Safe for Tourists in 2026? Complete Safety Guide</h1>
          <p className={styles.subtitle}>
            Honest, practical Orlando safety tips for tourists, families, and solo travelers — based on the real situations you'll face around the parks and beyond.
          </p>

          <p className={styles.topics}>
            Areas · Scams · Heat · Driving · Emergencies · Solo Travelers
          </p>
        </div>

        {/* Info Section */}
        <div className={styles.infoBox}>
          <h2>
            <span className={styles.infoIcon}>ℹ</span>
            In this Orlando safety guide, you'll learn:
          </h2>

          <ul>
            <li>Which Orlando areas are safest for tourists — and which to skip after dark</li>
            <li>How to handle the Florida heat safely at the parks in 2026</li>
            <li>Common tourist scams in Orlando — and how to spot them fast</li>
            <li>Driving, parking, and rideshare safety around the parks and I-4</li>
            <li>Safety tips for solo and solo female travelers visiting Orlando</li>
          </ul>
        </div>

        {/* Envelope Bottom */}
        <div className={styles.envelopeBottom}></div>
      </div>
    </section>
  );
}
