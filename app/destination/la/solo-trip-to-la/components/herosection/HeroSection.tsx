import Image from "next/image";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.herocontainer}>
        <div className={styles.herotext}>
          <p className={styles.eyebrow}>Solo Travel in Los Angeles</p>
          <h1>A first-timer&apos;s guide to doing LA alone, without wasting days in traffic.</h1>
          <p className={styles.subtext}>
            Where to stay, how to get around, what to do first, and the parts of LA that actually
            work when you are traveling solo.
          </p>

          <div className={styles.herobuttons}>
            <a href="#quick-verdict" className={`${styles.btn} ${styles.primary}`}>
              Start planning
            </a>
            <a href="/destination/la/best-areas-to-stay" className={`${styles.btn} ${styles.secondary}`}>
              Compare areas
            </a>
          </div>

          <p className={styles.updated}>Updated for 2026 · built for first-time solo travelers</p>
        </div>

        <div className={styles.heroImage}>
          <div className={styles.imagePlaceholder}>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/data/majorcities/losangeles/assets/solo-travel-itinerary.png"
                alt="Solo traveler overlooking Los Angeles from Griffith Observatory"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
