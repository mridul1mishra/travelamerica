import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <a href="/">Home</a><span>›</span>
          <a href="/destination/nyc">New York City</a><span>›</span>
          <span className={styles.current}>Free Things to Do</span>
        </nav>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.badge}>🆓 Completely Free · 2026</div>
            <h1>Free Things to Do in New York City</h1>
            <p className={styles.subtitle}>
              Parks, museums with free hours, the Staten Island Ferry, iconic walks, and seasonal events — all at zero cost. A genuinely great day in NYC can cost under $15.
            </p>
            <div className={styles.heroButtons}>
              <a href="#parks" className={`${styles.btn} ${styles.primary}`}>Parks & Outdoors</a>
              <a href="#museums" className={`${styles.btn} ${styles.secondary}`}>Free Museums</a>
              <a href="#events" className={`${styles.btn} ${styles.secondary}`}>Free Events</a>
            </div>
            <p className={styles.updated}>Updated for 2026</p>
          </div>
          <div className={styles.heroHighlights}>
            {[
              { emoji: '⛴️', text: 'Staten Island Ferry — free, 24/7, Statue of Liberty views' },
              { emoji: '🌿', text: 'Central Park — 843 acres, entirely free to explore' },
              { emoji: '🖼️', text: 'MoMA PS1 — fully free as of January 2026' },
              { emoji: '🎵', text: 'Free concerts all summer in Central Park' },
            ].map((h) => (
              <div key={h.text} className={styles.highlightItem}>
                <span>{h.emoji}</span>
                <span>{h.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
