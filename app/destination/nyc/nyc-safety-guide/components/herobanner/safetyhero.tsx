import styles from "./safetyhero.module.css";

export default function SafetyHero() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.hero}>
        
        {/* Breadcrumb */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span>›</span>
          <a href="/destination/solo-trip-to-nyc">Solo Trip to NYC</a>
          <span>›</span>
          <span className={styles.current}>NYC Safety Guide</span>
        </nav>

        {/* Title + Subtitle */}
        <div className={styles.heroContent}>
          <h1>Is New York City Safe for Tourists in 2026? Complete Safety Guide</h1>
          <p className={styles.subtitle}>
            Honest, practical NYC safety tips for tourists, solo travelers, and first-time visitors- based on real situation you'll face in New York City.
          </p>

          <p className={styles.topics}>
            Neighborhoods · Scams · Transit · Emergencies · Female Travelers · Videos
          </p>
        </div>

        {/* Info Section */}
        <div className={styles.infoBox}>
          <h2>
            <span className={styles.infoIcon}>ℹ</span>
            In this NYC safety guide, you’ll learn:
          </h2>

          <ul>
            <li>Which New York City neighborhoods are safest for tourists-and which to avoid at night</li>
            <li>How Safe the NYC subway is in 2026(and how to ride it confidentally)</li>
            <li>Common tourists scams in New York City-and how to spot them fast</li>
            <li>Safetytips for solo and solo female travelers visiting NYC</li>
            <li>Real-world NYC safety scenarios explained with short videos</li>
          </ul>
        </div>

        {/* Envelope Bottom */}
        <div className={styles.envelopeBottom}></div>
      </div>
    </section>
  );
}
