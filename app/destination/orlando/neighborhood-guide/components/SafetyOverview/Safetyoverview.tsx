import Link from 'next/link';
import styles from './Safetyoverview.module.css';

export default function SafetyOverview() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        Neighborhood Safety for Visitors
      </h2>

      <p className={styles.copy}>
        The main tourist corridors — Disney property, Universal, International Drive, and Disney
        Springs — are heavily staffed and safe at all hours. Theme park security is extensive, and
        the resort corridors have consistent lighting and foot traffic well into the evening.
      </p>

      <p className={styles.copy}>
        For solo travelers: International Drive has variable blocks. The ICON Park area and the
        stretch near Sand Lake Road are comfortable for solo evening walks; the blocks north of
        Universal toward Oak Ridge Road are less polished and worth avoiding after dark. Use
        rideshare rather than walking between hotels and restaurants once it gets late — distances
        on I-Drive are longer than they look on the map. Downtown Orlando's Church Street and
        Thornton Park areas are fine for solo evenings; Winter Park's Park Avenue is one of the
        most comfortable solo dining stretches in the metro.
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
