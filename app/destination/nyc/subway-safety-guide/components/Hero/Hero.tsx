import styles from "./Hero.module.css";
import type { Hero as HeroType } from "../types-subwaySafetyGuide";

export default function Hero({ title, subtitle, hero_image, breadcrumbs, updated_on }: HeroType) {
  return (
    <header className={styles.heroWrapper}>
      <nav className={styles.breadcrumbs}>
        {breadcrumbs.map((b, i) => (
          <span key={i}>
            <a href={b.slug} className={styles.breadcrumbLink}>
              {b.label}
            </a>
            {i < breadcrumbs.length - 1 && <span className={styles.separator}>→</span>}
          </span>
        ))}
      </nav>

      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>

      <img
        src={hero_image}
        alt="NYC Subway"
        className={styles.heroImage}
      />

      <p className={styles.updatedOn}>Updated on {updated_on}</p>
    </header>
  );
}
