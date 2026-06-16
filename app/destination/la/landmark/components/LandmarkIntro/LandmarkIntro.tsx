import { LANDMARKS } from '../../landmarks-data';
import styles from '../../lalandmark.module.css';

export default function LandmarkIntro() {
  return (
    <section className={styles.intro} style={{ textAlign: "center" }}>
      <h1 className={styles.sectionheading}>LA Landmarks: A Practical Solo Traveler Guide</h1>
      <p className={styles.introLead}>
        Real visitor information for the 9 Los Angeles landmarks first-time and solo
        travelers actually want. Each entry includes the address, how to get there by
        transit, current hours, approximate ticket price, time to allocate, and a
        solo-specific tip. Verify hours and ticket prices on the venue&apos;s own site
        before going &mdash; LA attractions change schedules seasonally.
      </p>
      <nav aria-label="Jump to landmark" className={styles.jumpnav}>
        {LANDMARKS.map((l) => (
          <a key={l.id} href={`#${l.id}`} className={styles.jumpLink}>{l.name}</a>
        ))}
      </nav>
    </section>
  );
}
