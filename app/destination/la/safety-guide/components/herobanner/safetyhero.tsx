import Link from "next/link";
import styles from "./safetyhero.module.css";

const SAFETY_FOR = [
  { label: "Tourist corridors", detail: "where to base" },
  { label: "Car break-ins", detail: "main practical risk" },
  { label: "Solo travel", detail: "late-night choices" },
  { label: "Emergencies", detail: "what to know" },
];

const GUIDE_POINTS = [
  "Which LA areas are easiest for tourists to navigate",
  "What risks actually matter: cars, scams, late-night routes",
  "How solo travelers can stay practical without getting paranoid",
  "When to use rideshare, transit, or a hotel base instead",
];

export default function SafetyHero() {
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
          <Link href="/destination/la">Los Angeles</Link>
          <span>/</span>
          <span className={styles.current}>LA Safety Guide</span>
        </nav>

        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Los Angeles safety guide</p>
          <h1>Is Los Angeles Safe for Tourists?</h1>
          <p className={styles.subtitle}>
            A practical guide to the real safety decisions visitors face in LA: where to stay, how to move around,
            and what to avoid in 2026 without overthinking the trip.
          </p>
        </div>

        <aside className={styles.infoBox} aria-label="What this LA safety guide helps you decide">
          <h2>Use this guide to decide</h2>
          <ul>
            {GUIDE_POINTS.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </aside>

        <div className={styles.safetyStrip} aria-label="Quick LA safety focus areas">
          {SAFETY_FOR.map((item) => (
            <span key={item.label}>
              <strong>{item.label}</strong>
              {item.detail}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
