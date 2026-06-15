import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <a href="/">Home</a><span>›</span>
          <a href="/destination/orlando">Orlando</a><span>›</span>
          <span className={styles.current}>Free Things to Do</span>
        </nav>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.badge}>🆓 Completely Free · 2026</div>
            <h1>Free Things to Do in Orlando</h1>
            <p className={styles.subtitle}>
              Beyond the theme parks: Lake Eola, Disney Springs, Kraft Azalea Garden, nature trails, free museum hours, and neighbourhood walks — all at zero cost.
            </p>
            <div className={styles.heroButtons}>
              <a href="#parks" className={`${styles.btn} ${styles.primary}`}>Parks & Nature</a>
              <a href="#museums" className={`${styles.btn} ${styles.secondary}`}>Free Museums</a>
              <a href="#events" className={`${styles.btn} ${styles.secondary}`}>Free Events</a>
            </div>
            <p className={styles.updated}>Updated for 2026</p>
          </div>
          <div className={styles.heroHighlights}>
            {[
              { emoji: '🏰', text: 'Disney Springs — free entry, live entertainment, no ticket' },
              { emoji: '🌊', text: 'Lake Eola Park — free 0.9-mile lakefront loop' },
              { emoji: '🦋', text: 'Tibet-Butler Preserve — free Florida wetland boardwalk' },
              { emoji: '🎨', text: 'Morse Museum — free Friday evenings, world\'s best Tiffany glass' },
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
