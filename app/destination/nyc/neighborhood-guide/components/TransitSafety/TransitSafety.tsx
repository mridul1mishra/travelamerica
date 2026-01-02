import React from "react";
import styles from "./TransitSafety.module.css";

type TransitBlock = {
  title: string;
  description: string;
  points: string[];
};

type Props = {
  sections: TransitBlock[];
};

export function TransitSafety({ sections }: Props) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Transit Safety by Neighborhood</h2>
        <p className={styles.subheading}>
          How subway stations, walking routes, and rideshare pickups feel across
          different NYC neighborhoods — based on lighting, visibility, and foot traffic.
        </p>

        <div className={styles.grid}>
          {sections.map((sec) => (
            <div key={sec.title} className={styles.card}>
              <h3 className={styles.title}>{sec.title}</h3>
              <p className={styles.description}>{sec.description}</p>

              <ul className={styles.list}>
                {sec.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
