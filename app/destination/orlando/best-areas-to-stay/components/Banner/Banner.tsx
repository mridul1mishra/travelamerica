import styles from './Banner.module.css';

interface BannerProps {
  cityName: string;
  cityHref: string;
  description: string;
  guideBullets?: string[];
}

const DEFAULT_BULLETS = [
  "The safest neighborhoods for solo travelers",
  "Where to stay for nightlife, food, or budget",
  "Areas to avoid (and why)",
  "How to choose based on your travel style",
  "Local tips most tourists miss",
];

export default function Banner({ cityName, cityHref, description, guideBullets = DEFAULT_BULLETS }: BannerProps) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.hero}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span>›</span>
          <a href={cityHref}>{cityName}</a>
          <span>›</span>
          <span className={styles.current}>Best Areas to Stay</span>
        </nav>

        <div className={styles.herocontent}>
          <h1>Best Areas to Stay in {cityName}</h1>
          <p>{description}</p>
        </div>

        <div className={styles.infobox}>
          <h2><span className={styles.infoicon}>ℹ</span>In this guide, you&apos;ll learn:</h2>
          <ul>
            {guideBullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>

        <div className={styles.envelopebottom}></div>
      </div>
    </section>
  );
}
