"use client";
import { useState } from "react";
import styles from "./flipcard.module.css";

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
}

export default function FlipCard({ front, back }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={styles["flip-card"]}>
      <div
        className={`${styles["flip-card__inner"]} ${
          flipped ? styles["is-flipped"] : ""
        }`}
        onClick={() => setFlipped(!flipped)}
      >
        <div className={styles["flip-card__front"]}>{front}</div>
        <div className={styles["flip-card__back"]}>{back}</div>
      </div>
    </div>
  );
}