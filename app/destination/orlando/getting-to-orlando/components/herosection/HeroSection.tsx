import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <a href="/">Home</a><span>›</span>
          <a href="/destination/orlando">Orlando</a><span>›</span>
          <span className={styles.current}>Getting to Orlando</span>
        </nav>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.badge}>✈️ Airports & Arrival · 2026</div>
            <h1>Getting to Orlando</h1>
            <p className={styles.subtitle}>
              MCO handles most visitors, SFB suits certain low-cost routes, and Brightline connects South Florida by rail. Here&apos;s how to arrive — and how to reach the parks from each.
            </p>
            <div className={styles.heroButtons}>
              <a href="#mco" className={`${styles.btn} ${styles.primary}`}>MCO Airport</a>
              <a href="#sfb" className={`${styles.btn} ${styles.secondary}`}>Sanford (SFB)</a>
              <a href="#brightline" className={`${styles.btn} ${styles.secondary}`}>Brightline Train</a>
            </div>
            <p className={styles.updated}>Updated for 2026</p>
          </div>
          <div className={styles.heroHighlights}>
            {[
              { emoji: '✈️', text: 'MCO — main hub, 20–25 min to Disney World' },
              { emoji: '🛫', text: 'SFB — Allegiant hub, 45 miles north of Disney' },
              { emoji: '🚆', text: 'Brightline — train from Miami/Fort Lauderdale to MCO' },
              { emoji: '🚗', text: 'Rental car recommended for most Orlando trips' },
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
