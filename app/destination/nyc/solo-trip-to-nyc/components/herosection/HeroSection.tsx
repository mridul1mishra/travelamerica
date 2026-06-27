import Image from "next/image";
import Link from "next/link";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.herocontainer}>
        <div className={styles.herotext}>
          <h1>Solo Trip to NYC</h1>
          <p className={styles.subtext}>
            NYC is one of the easiest U.S. cities to enjoy alone: transit runs all day, solo dining is normal, and busy streets make first-time exploring feel less exposed. Plan around well-lit neighborhoods, simple subway routes, and a few smart scam checks, and a solo trip feels confident instead of complicated.
          </p>

          <div className={styles.herobuttons}>
            <Link href="/destination/nyc/nyc-safety-guide" className={`${styles.btn} ${styles.primary}`}>Start with safety</Link>
            <Link href="#neighborhoods" className={`${styles.btn} ${styles.secondary}`}>Where to stay</Link>
          </div>

          <div className={styles.jumpLinks} aria-label="Solo NYC guide sections">
            <Link href="#safety">Safety</Link>
            <Link href="#neighborhoods">Where to stay</Link>
            <Link href="#transport">Getting around</Link>
            <Link href="#airport-transfer">Airports</Link>
            <Link href="#itinerary">Itinerary</Link>
          </div>

          <p className={styles.updated}>By Manisha Shukla · Last updated June 27, 2026</p>
        </div>

        <div className={styles.heroImage}>
          <div className={styles.imagePlaceholder}>
            <div className={styles.heroImageWrapper}>
              <Image src="/destination/nyc-travel-editorial-collage-new.png" alt="New York City skyline" fill style={{ objectFit: "contain" }} fetchPriority="high" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
