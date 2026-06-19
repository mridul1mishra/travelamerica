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
  "How to choose based on subway access",
  "Local tips most tourists miss",
];

const BEST_FOR = [
  { area: "Upper West Side", fit: "safest" },
  { area: "Midtown East", fit: "first-timers" },
  { area: "Williamsburg", fit: "nightlife" },
  { area: "Long Island City", fit: "value" },
];

export default function Banner({
  cityName,
  cityHref,
  description,
  guideBullets = DEFAULT_BULLETS,
}: BannerProps) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.hero}>
        <svg className={styles.skyline} viewBox="0 0 260 100" aria-hidden="true" focusable="false">
          <path className={styles.river} d="M15 83 C50 72 82 89 117 78 C153 67 190 86 245 73" />
          <path
            className={styles.buildings}
            d="M32 76V51h13v25m8 0V38h17v38m8 0V58h12v18m8 0V31h20v45m9 0V43h15v33m9 0V23h22v53m10 0V48h16v28m9 0V36h18v40"
          />
          <path className={styles.spire} d="M161 23V10M155 23l6-13 6 13" />
          <path className={styles.bridge} d="M25 78h70M35 78l22-25 22 25M57 53v25M38 67h38" />
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
          <p className={styles.eyebrow}>New York City stay guide</p>
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
