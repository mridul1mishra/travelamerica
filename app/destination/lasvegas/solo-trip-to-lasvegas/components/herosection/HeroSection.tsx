import Image from "next/image";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
            <div className={styles.herocontainer}>
                <div className={styles.herotext}>
                    <h1>Solo Trip to Las Vegas: First-Time Traveler Guide</h1>
                    <p className={styles.subtext}>Safe, confident, and stress‑free solo travel in Las Vegas.</p>

                    <div className={styles.herobuttons}>
                        <a href="/destination/lasvegas/safety-guide" className={`${styles.btn} ${styles.primary}`}>Start with Safety </a>
                        <a href="/destination/lasvegas/best-areas-to-stay" className={`${styles.btn} ${styles.secondary}`}>Where to Stay</a>
                    </div>

                    <p className={styles.updated}>Updated for 2025</p>
                </div>


                <div className={styles.heroImage}>
                    <div className={styles.heroImageWrapper}>
                        <Image src="/data/majorcities/lasvegas/assets/lasvegas.webp" alt="Las Vegas Strip skyline" fill style={{ objectFit: "cover", objectPosition: "center" }} fetchPriority="high"/>
                    </div>
                </div>

            </div>
        </section>
      );
}
