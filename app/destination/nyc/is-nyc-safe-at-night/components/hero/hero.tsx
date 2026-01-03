import Image from "next/image";
import styles from "./hero.module.css";
import type { HeroSafetyProps } from "../typesafeatnight";

export default function HeroSafety(props: HeroSafetyProps) {
  const { title, subtitle, heroImage, trustBadges } = props;

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroSubtitle}>{subtitle}</p>

        <div className={styles.heroImageWrapper}>
          <Image
            src={heroImage}
            alt="NYC skyline at night"
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
