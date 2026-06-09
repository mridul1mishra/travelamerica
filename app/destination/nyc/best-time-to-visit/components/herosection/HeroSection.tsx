import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <a href="/">Home</a><span>›</span>
          <a href="/destination/nyc">New York City</a><span>›</span>
          <span className={styles.current}>Best Time to Visit</span>
        </nav>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.badge}>2026 Travel Guide</div>
            <h1>Best Time to Visit New York City</h1>
            <p className={styles.subtitle}>
              A month-by-month guide to weather, crowds, hotel rates, and the events that define each season — so you can choose the trip that matches what you want.
            </p>
            <div className={styles.heroButtons}>
              <a href="#seasons" className={`${styles.btn} ${styles.primary}`}>By Season</a>
              <a href="#months" className={`${styles.btn} ${styles.secondary}`}>Month by Month</a>
              <a href="#traveler-types" className={`${styles.btn} ${styles.secondary}`}>By Traveler Type</a>
            </div>
            <p className={styles.updated}>Updated for 2026</p>
          </div>
          <div className={styles.heroBestWorst}>
            <div className={styles.pickCard + ' ' + styles.best}>
              <span className={styles.pickEmoji}>✅</span>
              <div className={styles.pickLabel}>Best Months</div>
              <div className={styles.pickValue}>April – May</div>
              <div className={styles.pickSub}>& Sep – Oct</div>
            </div>
            <div className={styles.pickCard + ' ' + styles.budget}>
              <span className={styles.pickEmoji}>💰</span>
              <div className={styles.pickLabel}>Best Value</div>
              <div className={styles.pickValue}>Jan – Feb</div>
              <div className={styles.pickSub}>30–40% cheaper</div>
            </div>
            <div className={styles.pickCard + ' ' + styles.avoid}>
              <span className={styles.pickEmoji}>⚠️</span>
              <div className={styles.pickLabel}>Most Crowded</div>
              <div className={styles.pickValue}>Jul – Aug</div>
              <div className={styles.pickSub}>& Christmas week</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
