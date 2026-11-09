import Link from "next/link";
import SafetyHeroImage from "./SafetyHeroImage";
import styles from "./safetyhero.module.css";

export default function SafetyHero() {
  return (
    <header className={styles.header}>
      <div className={styles.copy}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">›</span>
          <Link href="/destination/orlando">Orlando</Link>
          <span aria-hidden="true">›</span>
          <span aria-current="page">Orlando Safety Guide</span>
        </nav>
        <p className={styles.eyebrow}>Orlando safety guide</p>
        <h1 id="orlando-safety-title" tabIndex={-1}>Orlando Travel Safety Guide for Visitors</h1>
        <p className={styles.introduction}>
          Enjoy Orlando with a little preparation. Know what to check before booking, how to plan your journeys and what to watch for along the way. Find practical advice on hotel locations, driving, ticket offers, Florida heat and getting help when you need it.
        </p>
        <p className={styles.topics}>General trip precautions · Heat · Driving · Emergency planning</p>
        <div className={styles.actions}>
          <Link className={styles.primaryButton} href="#stay">
            See safe-area hotels
          </Link>
          <Link className={styles.secondaryButton} href="/destination/orlando/is-orlando-safe-at-night">
            Orlando night-safety guide
          </Link>
        </div>
        <div className={styles.contextLine}>
          <span>Last updated October 31, 2026</span>
          <span>No safety guarantee</span>
          <span>Official source links included</span>
        </div>
      </div>
      <SafetyHeroImage />
    </header>
  );
}
