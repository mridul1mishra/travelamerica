import styles from "./Hero.module.css";
import type { Hero as HeroType } from "../types-subwaySafetyGuide";

export default function Hero({ title, subtitle, hero_image, breadcrumbs, updated_on }: HeroType) {
  return (
     <div className={styles.heroContainer}>
      <nav className={styles.breadcrumbs}>
        {breadcrumbs.map((b, i) => {
          const isLast = i === breadcrumbs.length - 1;
          return(
          <span key={i}>
            <a
          href={b.slug}
          className={isLast ? styles.currentBreadcrumb : styles.breadcrumbLink}
        >
          {b.label}
        </a>
            
            {!isLast && <span className={styles.separator}>→</span>}
          </span>
        );
        })}
      </nav>

      <h1 className={styles.title}>{title}</h1>
      <p >{subtitle}</p>

      <img
        src={hero_image}
        alt="NYC Subway"
        className={styles.heroImage}
      />

      <p className={styles.updatedOn}>Updated on {updated_on}</p>
    </div>
  );
}
