import Link from 'next/link';
import styles from './hero.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.heading}>Orlando Travel Guide</h1>

      <p className={styles.description} style={{ fontWeight: 500, marginBottom: "0.5rem" }}>
        For first-timers, families, and anyone who wants the practical version.
      </p>

      <p className={styles.description}>
        Real planning for a real Orlando trip — which parks are worth it, where to stay,
        how many days you need, and what to skip. Built from actual visits, not marketing copy.
      </p>

      <div className={styles.ctas}>
        <Link href="#planning-intent" className={styles.primaryCta}>
          Start planning your Orlando trip
        </Link>

        <Link href="/destination/orlando/neighborhood-guide" className={styles.secondaryCta}>
          See top areas to stay
        </Link>
      </div>

      <p style={{ marginTop: "1rem", fontSize: "0.85rem", color: "#666" }}>
        Updated for 2026
      </p>
    </section>
  );
}
