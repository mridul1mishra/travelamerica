import Link from "next/link";
import styles from "./Banner.module.css";

interface BannerProps {
  cityName: string;
  cityHref: string;
  description: string;
  guideBullets?: string[];
}

const DEFAULT_BULLETS = [
  "The safest neighborhoods for solo travelers",
  "Where to stay for nightlife, food, or budget",
  "Areas to avoid and why",
  "How to choose based on your travel style",
  "Local tips most tourists miss",
];

export default function Banner({ cityName, cityHref, description, guideBullets = DEFAULT_BULLETS }: BannerProps) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.hero}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href={cityHref}>{cityName}</Link>
          <span>/</span>
          <span className={styles.current}>Best Areas to Stay</span>
        </nav>

        <div className={styles.herocontent}>
          <p className={styles.eyebrow}>Los Angeles stay guide</p>
          <h1>Best Areas to Stay in {cityName}</h1>
          <p>{description}</p>
        </div>

        <aside className={styles.infobox} aria-label="What this page helps you decide">
          <h2>Use this page to decide</h2>
          <ul>
            {guideBullets.slice(0, 4).map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
