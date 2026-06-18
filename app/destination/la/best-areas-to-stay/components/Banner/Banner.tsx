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

const BEST_FOR = [
  { area: "Santa Monica", fit: "first-timers" },
  { area: "WeHo", fit: "nightlife" },
  { area: "Hollywood", fit: "sightseeing" },
  { area: "DTLA", fit: "value" },
];

export default function Banner({ cityName, cityHref, description, guideBullets = DEFAULT_BULLETS }: BannerProps) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.hero}>
        <svg className={styles.skyline} viewBox="0 0 260 100" aria-hidden="true" focusable="false">
          <path className={styles.hills} d="M8 76 C45 52 76 68 108 47 C145 23 182 54 252 30" />
          <path className={styles.sun} d="M202 28a13 13 0 1 1-26 0 13 13 0 0 1 26 0Z" />
          <path
            className={styles.buildings}
            d="M96 75V43h15v32m7 0V31h18v44m8 0V52h13v23m7 0V24h23v51m8 0V39h16v36m8 0V47h20v28"
          />
          <path className={styles.palms} d="M39 76V44M39 44c-12-8-18-6-25 2M39 44c-11 1-17 6-20 15M39 44c9-9 18-9 28-2M39 44c10 3 15 9 18 19M63 76V54M63 54c-8-6-14-5-20 1M63 54c-8 1-12 5-15 12M63 54c7-7 14-7 22-1M63 54c8 3 11 7 13 15" />
          <path className={styles.baseline} d="M14 76h230" />
        </svg>

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

        <div className={styles.bestForStrip} aria-label="Quick neighborhood matches">
          {BEST_FOR.map((item) => (
            <span key={item.area}>
              <strong>{item.area}</strong>
              {item.fit}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
