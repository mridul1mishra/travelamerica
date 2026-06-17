import styles from "../../lagrouptravel.module.css";

export default function GroupTravelHero() {
  return (
    <section className={styles.introSection}>
      <div className={styles.introCard}>
        <p className={styles.eyebrow}>LA Group Travel Guide</p>
        <h1 className={styles.sectionheading}>LA Group Travel Guide 2026</h1>
        <p className={styles.introText}>
          Everything your group needs for Los Angeles: a 3-day itinerary, the best things to do as a
          crowd, where to eat as a group, plus transport logistics and packing tips so everyone stays
          connected.
        </p>
        <nav aria-label="Jump to section" className={styles.introActions}>
          <a href="#itinerary" className={styles.ctaButton}>
            3-Day Itinerary
          </a>
          <a href="#landmarks" className={styles.ctaButton}>
            Things to Do
          </a>
          <a href="#dining" className={styles.ctaButton}>
            Dining
          </a>
        </nav>
      </div>
    </section>
  );
}
