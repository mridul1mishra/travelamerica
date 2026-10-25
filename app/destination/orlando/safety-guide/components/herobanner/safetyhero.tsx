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
          <h1>Orlando Travel Safety Guide for Visitors</h1>
          <p className={styles.subtitle}>
            Practical guidance on Florida heat, driving, protecting your belongings, tourist scams, and emergency resources for your Orlando trip.
          </p>

          <p className={styles.topics}>
            Scams · Heat · Driving · Emergencies · Solo Travelers
          </p>
        </div>

        {/* Info Section */}
        <div className={styles.infoBox}>
          <h2>
            <span className={styles.infoIcon}>ℹ</span>
            In this Orlando safety guide, you'll learn:
          </h2>

          <ul>
            <li>How to check current local safety information for your itinerary</li>
            <li>How to handle the Florida heat safely at the parks in 2026</li>
            <li>Common tourist scams in Orlando — and how to spot them fast</li>
            <li>Driving, parking, and rideshare basics around the parks and I-4</li>
            <li>Safety tips for solo and solo female travelers visiting Orlando</li>
          </ul>
        </div>

        {/* Envelope Bottom */}
        <div className={styles.envelopeBottom}></div>
      </div>
    </section>
  );
}
