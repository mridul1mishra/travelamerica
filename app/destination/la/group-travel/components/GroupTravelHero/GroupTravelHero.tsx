import styles from '../../lagrouptravel.module.css';

export default function GroupTravelHero() {
  return (
    <section className={styles.splitSection} style={{ textAlign: "center" }}>
      <div style={{ width: "100%", textAlign: "center" }}>
        <h1 className={styles.sectionheading}>LA Group Travel Guide 2026</h1>
        <p>
          Everything your group needs for Los Angeles — a 3-day itinerary, the best things to do as
          a crowd, where to eat as a group, plus transport logistics and packing tips so everyone
          stays connected and has a good time.
        </p>
        <nav aria-label="Jump to section" style={{ marginTop: "1rem" }}>
          <a href="#itinerary" className={styles.ctaButton} style={{ marginRight: "0.5rem" }}>
            3-Day Itinerary
          </a>
          <a href="#landmarks" className={styles.ctaButton} style={{ marginRight: "0.5rem" }}>
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
