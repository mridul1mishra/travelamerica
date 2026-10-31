import Link from "next/link";
import styles from "./safetyhero.module.css";

export default function SafetyHero() {
  return (
    <header className={styles.header}>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">›</span>
        <Link href="/destination/orlando">Orlando</Link>
        <span aria-hidden="true">›</span>
        <span aria-current="page">Orlando Safety Guide</span>
      </nav>
      <h1>Orlando Travel Safety Guide for Visitors</h1>
      <p className={styles.introduction}>
        Planning an Orlando trip? Start with the places you will visit, how you will travel between them and the precautions your itinerary needs. This guide covers area context, belongings, scams, driving and parking, heat precautions and emergency planning. For detailed evening routes and return transport, use our <Link href="/destination/orlando/is-orlando-safe-at-night">Orlando night-safety guide</Link>.
      </p>
      <p className={styles.topics}>General trip precautions · Heat · Driving · Emergency planning</p>
    </header>
  );
}

export function SafetyIntroChecklist() {
  return (
    <section className={styles.checklist} aria-labelledby="safety-guide-checklist-title">
      <p id="safety-guide-checklist-title" className={styles.checklistTitle}>
        <span className={styles.infoIcon} aria-hidden="true">i</span>
        In this Orlando safety guide
      </p>
      <ul>
        <li>How to assess the area around your accommodation and planned stops.</li>
        <li>Practical precautions for belongings, bookings, driving and transport.</li>
        <li>Heat and sun precautions for daytime outings.</li>
        <li>What to do if plans go wrong and where to find emergency resources.</li>
      </ul>
    </section>
  );
}
