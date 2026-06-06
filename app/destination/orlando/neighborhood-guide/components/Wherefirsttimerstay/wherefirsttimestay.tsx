import styles from './wherefirsttimerstay.module.css';

export default function WhereFirstTimersStay() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Where First‑Time Visitors Usually Stay</h2>

      <p className={styles.copy}>
        Most first‑time visitors stay near Walt Disney World (Lake Buena Vista) or along
        International Drive, because it keeps park travel times short and puts dining and
        attractions within easy reach.
      </p>

      <p className={styles.copy}>
        Some travelers prefer Kissimmee for budget-friendly vacation homes, or Downtown
        Orlando and Winter Park for a more local, less park-centric feel — all a short
        drive from the main attractions.
      </p>

      <p className={styles.subtle}>
        There's no single &ldquo;best&rdquo; area. The right choice depends on which parks
        you're visiting, your budget, and how much resort convenience you want each day.
      </p>
    </section>
  );
}
