import Link from 'next/link';
import styles from './hero.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.heading}>Los Angeles Travel Guide</h1>

      <p className={styles.description} style={{ fontWeight: 500, marginBottom: "0.5rem" }}>
        For first-timers, solo travelers, and anyone who wants the practical version.
      </p>

      <p className={styles.description}>
        Real planning for LA — where to actually stay, how to get around,
        and what the city is like beyond the Hollywood clichés. Built from actual visits, not marketing copy.
      </p>

      <div className={styles.ctas}>
        <Link href="#planning-intent" className={styles.primaryCta}>
          Start planning your LA trip
        </Link>

        <Link
          href="/destination/la/neighborhood-guide"
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
