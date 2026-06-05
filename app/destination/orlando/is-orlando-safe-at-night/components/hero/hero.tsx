import Image from "next/image";
import styles from "./hero.module.css";
import type { HeroSafetyProps } from "../typesafeatnight";

export default function HeroSafety(props: HeroSafetyProps) {
  const { title, subtitle, heroImage, trustBadges } = props;

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                  <a href="/">Home</a>
                  <span>›</span>
                  <a href="/destination/orlando/solo-trip-to-orlando">Solo Trip to Orlando</a>
                  <span>›</span>
                  <span className={styles.current}>Is Orlando Safe at Night</span>
        </nav>
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroSubtitle}>{subtitle}</p>

        <div className={styles.heroImageWrapper}>
          <Image
            src={heroImage}
            alt="Orlando at night"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        {trustBadges && trustBadges.length > 0 && (
          <div className={styles.trustBadges}>
            {trustBadges.map((badge, index) => (
              <span key={index} className={styles.trustBadge}>
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
