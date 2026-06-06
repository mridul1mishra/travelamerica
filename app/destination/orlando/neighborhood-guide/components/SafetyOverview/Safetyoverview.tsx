import Link from 'next/link';
import styles from './Safetyoverview.module.css';

export default function SafetyOverview() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        Neighborhood Safety for Visitors
      </h2>

      <p className={styles.copy}>
        Most areas visitors spend time in around Orlando — the resort corridors,
        International Drive, Disney Springs, and Universal CityWalk — are busy,
        well‑lit, and heavily staffed throughout the day and evening.
      </p>

      <p className={styles.copy}>
        Like any large metro area, staying aware of your surroundings and choosing
        well‑connected, lit corridors goes a long way toward feeling comfortable while
        exploring, especially after dark.
      </p>

      <p className={styles.subtle}>
        For a deeper look at safety tips, nighttime travel, and driving advice, you can
        explore our dedicated Orlando safety guide.
      </p>

      <div className={styles.linkWrap}>
        <Link
          href="/destination/orlando/safety-guide"
          className={styles.link}
        >
          Read the Orlando Safety Guide →
        </Link>
      </div>
    </section>
  );
}
