import router from "next/router";
import type { HeroSection } from "../../nyc-subway-map";
import styles from "./herobanner.module.css";

export default function Hero({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  supportingText,
  badges
}: HeroSection) {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>

        <p className={styles.subtitle}>{subtitle}</p>

        <div className={styles.actions}>
          <button className={styles.primaryBtn} onClick={() => router.push("/destination/nyc/nyc-subway-map/full")}>{ctaPrimary}</button>
          <a href="/data/majorcities/newyork/assets/map/nyc-subway-map.pdf" download className={styles.secondaryBtn} > {ctaSecondary} </a>
        </div>

        <p className={styles.supporting}>{supportingText}</p>

        {badges && badges.length > 0 && (
          <div className={styles.badges}>
            {badges.map((badge, index) => (
              <span key={index} className={styles.badge}>
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
