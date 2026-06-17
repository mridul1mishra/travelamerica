import styles from "../../lasoloitinerary.module.css";

export default function SoloItineraryHero() {
  return (
    <section className={styles.introSection}>
      <div className={styles.introCard}>
        <p className={styles.eyebrow}>LA Solo Itinerary</p>
        <h1 className={styles.sectionheading}>3-Day Solo Itinerary for Los Angeles</h1>
        <p className={styles.introText}>
          Three days, three different sides of LA: a hilltop view, a coastal bike ride,
          and an art-and-food finish. Each day is clustered so you spend less time crossing town.
        </p>
      </div>
    </section>
  );
}
