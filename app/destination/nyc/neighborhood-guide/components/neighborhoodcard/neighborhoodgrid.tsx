import React from "react";
import styles from "./neighborhood.module.css";
import { NeighborhoodCard, Neighborhood } from "./neighborhoodcard";

type Props = {
  neighborhoods: Neighborhood[];
};

export function NeighborhoodGrid({ neighborhoods }: Props) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Neighborhood‑by‑Neighborhood Breakdown</h2>

        <div className={styles.grid}>
          {neighborhoods.map((n) => (
            <NeighborhoodCard key={n.name} {...n} />
          ))}
        </div>
      </div>
    </section>
  );
}
