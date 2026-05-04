import React from "react";
import styles from "./cautionarea.module.css";

type Area = {
  name: string;
  reason: string;
  notes: string[];
  tag?: string; // e.g., "Consider with caution"
};

type Props = {
  areas: Area[];
};

export function CautionAreas({ areas }: Props) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Areas Not Ideal for First‑Time Solo Travelers</h2>
        <p className={styles.subheading}>
          These neighborhoods aren’t unsafe — they simply offer less predictability for
          first‑time solo travelers due to quieter blocks, limited transit access, or
          inconsistent foot traffic. Use this as a comfort‑based guide, not a warning.
        </p>

        <div className={styles.grid}>
          {areas.map((area) => (
            <div key={area.name} className={styles.card}>
              <div className={styles.headerRow}>
                <h3 className={styles.title}>{area.name}</h3>
                {area.tag && <span className={styles.tag}>{area.tag}</span>}
              </div>

              <p className={styles.reason}>{area.reason}</p>

              <ul className={styles.list}>
                {area.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
