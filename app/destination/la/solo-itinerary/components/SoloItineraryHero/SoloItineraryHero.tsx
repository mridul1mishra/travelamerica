import styles from "../../lasoloitinerary.module.css";

export default function SoloItineraryHero() {
  return (
    <section className={styles.introSection}>
      <div className={styles.introCard}>
        <p className={styles.eyebrow}>LA Solo Itinerary</p>
        <h1 className={styles.sectionheading}>3-Day Solo Itinerary for Los Angeles</h1>
        <p className={styles.introText}>
          Three days, three very different sides of LA — a hilltop view to start, a coastal bike ride
          in the middle, and an art-and-food finish in the city core. No car rental required for days
          two and three.
        </p>
      </div>
    </section>
  );
}
