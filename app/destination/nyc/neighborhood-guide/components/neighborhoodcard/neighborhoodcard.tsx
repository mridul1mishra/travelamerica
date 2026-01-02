import React from "react";
import styles from "./neighborhood.module.css";

export type Neighborhood = {
  name: string;
  safetySnapshot: string;
  bestFor: string[];
  watchFors: string[];
  nightSafetyRating: string;
  soloMoves: string[];
};

export function NeighborhoodCard({
  name,
  safetySnapshot,
  bestFor,
  watchFors,
  nightSafetyRating,
  soloMoves,
}: Neighborhood) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{name}</h3>

      <p className={styles.snapshot}>{safetySnapshot}</p>

      <div className={styles.section}>
        <h4 className={styles.label}>Best For</h4>
        <ul className={styles.list}>
          {bestFor.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <h4 className={styles.label}>Watch‑Fors</h4>
        <ul className={styles.list}>
          {watchFors.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <h4 className={styles.label}>Night Safety Rating</h4>
        <span
          className={`${styles.rating} ${
            nightSafetyRating === "High"
              ? styles.high
              : nightSafetyRating === "Medium"
              ? styles.medium
              : styles.variable
          }`}
        >
          {nightSafetyRating}
        </span>
      </div>

      <div className={styles.section}>
        <h4 className={styles.label}>Solo‑Friendly Moves</h4>
        <ul className={styles.list}>
          {soloMoves.map((move) => (
            <li key={move}>{move}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
