import React from "react";
import styles from "./introsection.module.css";

export function IntroSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        {/* Purpose + Lens */}
        <div className={styles.block}>
          <h2 className={styles.heading}>Why Neighborhood Safety Feels Different for Solo Travelers</h2>
          <p className={styles.text}>
            Safety isn’t just about crime stats — it’s about context. Foot traffic, lighting,
            nightlife spillover, and transit access all shape how a neighborhood feels when
            you’re exploring alone. This guide helps you understand those patterns so you can
            choose an area that matches your comfort level and travel style.
          </p>
        </div>

        {/* How to Use This Guide */}
        <div className={styles.block}>
          <h3 className={styles.subheading}>How to Use This Guide</h3>

          <ul className={styles.list}>
            <li>
              <strong>Night Safety Rating:</strong> A comfort‑based indicator of how the area
              typically feels after dark — based on lighting, foot traffic, and overall activity.
            </li>
            <li>
              <strong>Watch‑Fors:</strong> Not warnings — just things to be aware of, like quieter
              blocks, nightlife spillover, or limited late‑night transit.
            </li>
            <li>
              <strong>Solo‑Friendly Moves:</strong> Clear, actionable tips that help you navigate
              confidently — best walking routes, steady‑foot‑traffic areas, and how to return to
              your hotel at night.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
