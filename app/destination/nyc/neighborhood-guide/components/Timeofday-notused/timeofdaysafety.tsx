// components/TimeOfDaySafety.tsx
import React from "react";
import styles from "./TimeOfDaySafety.module.css";

type TimeBlock = {
  label: string;
  lighting: string;
  footTraffic: string;
  vibe: string;
};

type Props = {
  times: TimeBlock[];
};

export function TimeOfDaySafety({ times }: Props) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Time‑of‑Day Safety Differences</h2>
        <p className={styles.subheading}>
          NYC shifts throughout the day — lighting, foot traffic, and overall vibe
          change how a neighborhood feels when you're exploring solo.
        </p>

        <div className={styles.timeline}>
          {times.map((t) => (
            <div key={t.label} className={styles.card}>
              <h3 className={styles.label}>{t.label}</h3>

              <div className={styles.row}>
                <span className={styles.tag}>Lighting</span>
                <p>{t.lighting}</p>
              </div>

              <div className={styles.row}>
                <span className={styles.tag}>Foot Traffic</span>
                <p>{t.footTraffic}</p>
              </div>

              <div className={styles.row}>
                <span className={styles.tag}>Vibe</span>
                <p>{t.vibe}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
