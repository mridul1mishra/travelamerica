import Link from 'next/link';
import styles from './hero.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.heading}>New York City Travel Guide</h1>

      <p className={styles.description} style={{ fontWeight: 500, marginBottom: "0.5rem" }}>
        For first-timers, solo travelers, and anyone who wants the practical version.
      </p>

      <p className={styles.description}>
        Real planning for a real NYC trip — where to stay, how long to go,
        what's worth your time, and what to skip. Built from actual visits, not marketing copy.
      </p>

      <div className={styles.ctas}>
        <Link href="#planning-intent" className={styles.primaryCta}>
          Start planning your NYC trip
        </Link>

        <Link
          href="/destination/nyc/neighborhood-guide"
          className={styles.secondaryCta}
        >
          See top neighborhoods
        </Link>
      </div>

      <p style={{ marginTop: "1rem", fontSize: "0.85rem", color: "#666" }}>
        Updated for 2026
      </p>
    </section>
  );
}
