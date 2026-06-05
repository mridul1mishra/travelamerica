import Image from "next/image";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.herocontainer}>
        <div className={styles.herotext}>
          <h1>Solo Trip to New York City: First-Time Traveler Guide</h1>
          <p className={styles.subtext}>Safe, confident, and stress‑free solo travel in NYC.</p>

          <div className={styles.herobuttons}>
            <a href="/destination/nyc/nyc-safety-guide" className={`${styles.btn} ${styles.primary}`}>Start with Safety </a>
            <a href="/destination/nyc/landmark" className={`${styles.btn} ${styles.secondary}`}>Where to Stay</a>
          </div>

          <p className={styles.updated}>Updated for 2025</p>
        </div>

        <div className={styles.heroImage}>
          <div className={styles.imagePlaceholder}>
            <div className={styles.heroImageWrapper}>
              <Image src="/destination/nyc-travel-editorial-collage-new.png" alt="New York City skyline" fill style={{ objectFit: "contain" }} fetchPriority="high"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
