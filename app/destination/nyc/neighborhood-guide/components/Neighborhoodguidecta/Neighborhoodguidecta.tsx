import Link from 'next/link';
import styles from './Neighborhood.module.css';

type NeighborhoodGuideCTAProps = {
  tripType?: string;
  interest?: string;
}

export default function NeighborhoodGuideCTA({tripType, interest}: NeighborhoodGuideCTAProps) {
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
          href="/destination/nyc/best-areas-to-stay"
          className={styles.primary}
        >
          Find the best area for your trip
        </Link>

        <Link
          href="/destination/nyc/solo-itinerary"
          className={styles.secondary}
        >
          View NYC itineraries
        </Link>
      </div>
    </section>
  );
}