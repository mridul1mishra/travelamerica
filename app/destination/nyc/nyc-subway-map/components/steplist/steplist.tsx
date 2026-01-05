import React from "react";
import styles from "./StepList.module.css";

interface StepListProps {
  title?: string;
  steps: string[];
}

export function StepList({ title = "How to Read the Map", steps }: StepListProps) {
  return (
    <section className={styles.wrapper} id="how-to-read">
      <h2 className={styles.heading}>{title}</h2>

      <ul className={styles.list}>
        {steps.map((step, index) => (
          <li key={index} className={styles.item}>
            <span className={styles.number}>{index + 1}</span>
            <p className={styles.text}>{step}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
