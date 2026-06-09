import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span>›</span>
          <a href="/destination/nyc">New York City</a>
          <span>›</span>
          <span className={styles.current}>Getting to NYC</span>
        </nav>

        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.badge}>2026 Airport Guide</div>
            <h1>Getting to NYC from the Airport</h1>
            <p className={styles.subtitle}>
              JFK, LaGuardia, or Newark — every transport option with real 2026
              costs, travel times, and the scams to avoid.
            </p>
            <div className={styles.heroButtons}>
              <a href="#jfk" className={`${styles.btn} ${styles.primary}`}>JFK Guide</a>
              <a href="#lga" className={`${styles.btn} ${styles.secondary}`}>LaGuardia</a>
              <a href="#ewr" className={`${styles.btn} ${styles.secondary}`}>Newark (EWR)</a>
            </div>
            <p className={styles.updated}>Updated for 2026</p>
          </div>

          <div className={styles.heroStats}>
            <div className={styles.statCard}>
              <span className={styles.statIcon}>✈️</span>
              <span className={styles.statValue}>3</span>
              <span className={styles.statLabel}>Major Airports</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statIcon}>🚇</span>
              <span className={styles.statValue}>$2.90</span>
              <span className={styles.statLabel}>Cheapest Option</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statIcon}>⏱️</span>
              <span className={styles.statValue}>45–70</span>
              <span className={styles.statLabel}>Min to Midtown</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statIcon}>🚕</span>
              <span className={styles.statValue}>5+</span>
              <span className={styles.statLabel}>Ways to Travel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
