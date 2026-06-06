import styles from "./herobanner.module.css";

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
          <span className={styles.current}>Female Solo Travel Guide</span>
        </nav>

        {/* Title + Subtitle */}
        <div className={styles.heroContent}>
          <h1>Female Solo Travel Guide</h1>
          <p className={styles.subtitle}>
            Practical, Orlando-specific safety advice for women exploring the parks and the city alone.
          </p>

          <p className={styles.topics}>
            Areas · Scams · Transit · Heat · Emergencies · Female Travelers
          </p>
        </div>

        {/* Info Section */}
        <div className={styles.infoBox}>
          <h2>
            <span className={styles.infoIcon}>ℹ</span>
            In this guide, you'll learn:
          </h2>

          <ul>
            <li>Which areas to base yourself in — and ones to skip after dark</li>
            <li>Proven ways to outsmart common tourist scams</li>
            <li>How to get around safely by rideshare, trolley, and car</li>
            <li>Safety best practices for solo female travelers in Orlando</li>
          </ul>
        </div>

        {/* Envelope Bottom */}
        <div className={styles.envelopeBottom}></div>
      </div>
    </section>
  );
}
