import type { ReactNode } from "react";
import styles from "./neighborhoodsafety.module.css";

interface Props {
  name: string;
  safetyLevel: string;
  tips: string[];
  /** Optional hotel link for this area (see AreaHotelLink). */
  children?: ReactNode;
}

export default function NeighborhoodSafetyCard({ name, safetyLevel, tips, children }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>{name}</h3>
        <span className={`${styles.badge} ${styles[safetyLevel.toLowerCase()]}`}>
          {safetyLevel}
        </span>
      </div>

      <ul className={styles.tips}>
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
      {children}
    </div>
  );
}
