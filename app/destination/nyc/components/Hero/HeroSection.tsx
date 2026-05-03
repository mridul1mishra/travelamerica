import Link from 'next/link';
import styles from './hero.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.heading}>New York City Travel Guide</h1>

      <p className={styles.description}>Your complete guide to planning the perfect New York City trip.</p>

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
    </section>
  );
}
