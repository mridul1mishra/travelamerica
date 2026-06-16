import Link from "next/link";
import styles from "@/app/destination/city-hub.module.css";

export default function ItineraryHero() {
  return (
    <section className={styles.hero}>
      <h1>Los Angeles 3-Day Itinerary</h1>
      <p>
        A practical day-by-day plan covering Hollywood, Griffith Observatory, Venice Beach, the Getty,
        and Downtown LA. Built around real travel logistics — driving times, parking costs, and what
        actually fits in a day.
      </p>
      <div className={styles.heroCtas}>
        <Link href="/destination/la/bookings?tab=activities" className={styles.primaryCta}>
          Book tickets &amp; tours
        </Link>
        <Link href="/destination/la/best-areas-to-stay" className={styles.secondaryCta}>
          Where to stay
        </Link>
      </div>
    </section>
  );
}
