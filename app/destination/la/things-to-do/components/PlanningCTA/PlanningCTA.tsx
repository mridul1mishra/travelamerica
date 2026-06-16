import Link from 'next/link';
import styles from '../../lathingstodo.module.css';

export default function PlanningCTA() {
  return (
    <section className={styles.cta}>
      <h2>Not sure how to shape your LA experience?</h2>
      <p>
        Tell us what you want to focus on, and we&apos;ll help you plan where to
        stay and how to structure your visit.
      </p>
      <Link href="/destination/la#planning-intent" className={styles.primaryCta}>
        Get help planning my LA trip
      </Link>
    </section>
  );
}
