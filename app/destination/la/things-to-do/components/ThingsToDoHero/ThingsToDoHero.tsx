import Image from 'next/image';
import Link from 'next/link';
import styles from '../../lathingstodo.module.css';

export default function ThingsToDoHero() {
  return (
    <>
      <section className={styles.banner}>
        <Image
          src="/data/majorcities/losangeles/assets/losangeles.webp"
          alt="Experiences and activities in Los Angeles"
          fill
          priority
          className={styles.bannerImage}
        />
      </section>
      <section className={styles.hero}>
        <h1>Things to Do in Los Angeles</h1>
        <p>
          Los Angeles spreads across the coast, the hills, and the basin, so the
          experience changes a lot depending on what you want to focus on.
          Understanding this helps you choose where to stay and how to plan your
          days around the city&apos;s traffic.
        </p>
        <div className={styles.heroCtas}>
          <Link href="/destination/la/bookings?tab=activities&from=things-to-do" className={styles.primaryCta}>
            Book tickets &amp; tours
          </Link>
          <Link href="/destination/la/itinerary" className={styles.secondaryCta}>
            See 3-day itinerary
          </Link>
        </div>
      </section>
    </>
  );
}
