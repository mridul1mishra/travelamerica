import Link from 'next/link';
import styles from './Neighborhood.module.css';

type NeighborhoodGuideCTAProps = {
  interest?: string;
}

export default function NeighborhoodGuideCTA({interest}: NeighborhoodGuideCTAProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        Ready to narrow down the best area for your trip?
      </h2>

      <p className={styles.copy}>
        Use our planning tools and itineraries to find neighborhoods and
        experiences that fit your schedule, interests, and travel style.
      </p>

      <div className={styles.actions}>
        <Link
          href="/destination/nyc#planning-intent"
          className={styles.primary}
        >
          Find the best area for your trip
        </Link>

        <Link
          href="/destination/new-york-city/itineraries"
          className={styles.secondary}
        >
          View NYC itineraries
        </Link>
      </div>
    </section>
  );
}