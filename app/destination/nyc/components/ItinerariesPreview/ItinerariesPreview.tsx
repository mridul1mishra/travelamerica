"use client";

import styles from "../../nyc.module.css";

export default function ItinerariesPreview() {
  return (
    <section className={styles.itineraries}>
      <h2>Sample Itineraries</h2>

      <button className={styles.primary}>
        Get a personalized NYC itinerary
      </button>
    </section>
  );
}
