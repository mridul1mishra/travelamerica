import React from "react";
import styles from "./safetygrid.module.css";

type Area = {
  name: string;
  comfort: string;
  tags: string[];
};

type SafetyGridProps = {
  areas: Area[];
};

export function SafetyGrid({ areas }: SafetyGridProps) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.heading}>NYC Safety at a Glance</h2>
        <p className={styles.subheading}>
          A quick, visual snapshot of major NYC neighborhoods — how they feel,
          how busy they get, and what solo travelers typically experience.
        </p>

        <div className={styles.grid}>
          {areas.map((area) => (
            <div key={area.name} className={`${styles.card} ${styles[area.comfort]}`}>
              <h3 className={styles.areaName}>{area.name}</h3>

              <div className={styles.tags}>
                {area.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <span className={styles.comfortLabel}>
                {area.comfort === "high" && "Comfort Zone: High"}
                {area.comfort === "medium" && "Comfort Zone: Medium"}
                {area.comfort === "low" && "Comfort Zone: Variable"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
