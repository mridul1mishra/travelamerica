import Image from "next/image";
import Link from "next/link";
import styles from "./hero.module.css";
import type { HeroSafetyProps } from "../typesafeatnight";

export default function HeroSafety(props: HeroSafetyProps) {
  const { title, subtitle, heroImage, trustBadges } = props;

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                  <Link href="/">Home</Link>
                  <span>›</span>
                  <Link href="/destination/lasvegas/solo-trip-to-lasvegas">Solo Trip to Las Vegas</Link>
                  <span>›</span>
                  <span className={styles.current}>Is Las Vegas Safe at Night</span>
        </nav>
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroSubtitle}>{subtitle}</p>

        <div className={styles.heroImageWrapper}>
          <Image
            src={heroImage}
            alt="Las Vegas Strip at night"
            fill
            style={{ objectFit: "cover", objectPosition: "center 54%" }}
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
