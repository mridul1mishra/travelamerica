import styles from "./safetyhero.module.css";

export default function SafetyHero() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.hero}>

        {/* Breadcrumb */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span>›</span>
          <a href="/destination/la/solo-trip-to-la">Solo Trip to LA</a>
          <span>›</span>
          <span className={styles.current}>LA Safety Guide</span>
        </nav>

        {/* Title + Subtitle */}
        <div className={styles.heroContent}>
          <h1>Is Los Angeles Safe for Tourists in 2026? Complete Safety Guide</h1>
          <p className={styles.subtitle}>
            Honest, practical LA safety tips for tourists, solo travelers, and first-time visitors- based on real situations you'll face in Los Angeles.
          </p>

          <p className={styles.topics}>
            Neighborhoods · Scams · Driving · Earthquakes · Emergencies · Car Break-Ins
          </p>
        </div>

        {/* Info Section */}
        <div className={styles.infoBox}>
          <h2>
            <span className={styles.infoIcon}>ℹ</span>
            In this LA safety guide, you’ll learn:
          </h2>

          <ul>
            <li>Which Los Angeles neighborhoods are safest for tourists-and which to avoid on foot</li>
            <li>Why car break-ins are the biggest real risk in LA (and how to avoid them)</li>
            <li>Common tourist scams in Los Angeles-and how to spot them fast</li>
            <li>Safety tips for solo and solo female travelers visiting LA</li>
            <li>Driving, traffic, and earthquake awareness explained simply</li>
          </ul>
        </div>

        {/* Envelope Bottom */}
        <div className={styles.envelopeBottom}></div>
      </div>
    </section>
  );
}
