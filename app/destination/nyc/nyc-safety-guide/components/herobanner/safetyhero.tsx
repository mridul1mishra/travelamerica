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
          <h1>NYC Safety Guide</h1>
          <p className={styles.subtitle}>
            Must-know safety tips and solo travel advice for New York City
          </p>

          <p className={styles.topics}>
            Neighborhoods · Scams · Transit · Emergencies · Female Travelers · Videos
          </p>
        </div>

        {/* Info Section */}
        <div className={styles.infoBox}>
          <h2>
            <span className={styles.infoIcon}>ℹ</span>
            In this guide, you’ll learn:
          </h2>

          <ul>
            <li>Neighborhoods to stay in—and ones to avoid at night</li>
            <li>Proven ways to outsmart common tourist scams</li>
            <li>How to ride the subway alone (and confidently)</li>
            <li>Safety best practices for solo female travelers</li>
            <li>Short videos on New York safety in different scenarios</li>
          </ul>
        </div>

        {/* Envelope Bottom */}
        <div className={styles.envelopeBottom}></div>
      </div>
    </section>
  );
}
