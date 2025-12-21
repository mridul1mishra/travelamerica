"use client";
import { useState } from "react";
import styles from "./flipcard.module.css";

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  isFlipped: boolean;
  onFlip: () => void;
}

export default function FlipCard({ front, back, isFlipped, onFlip }: FlipCardProps) {
  

  return (
    <div className={styles["flip-card"]}>
      <div
        className={`${styles["flip-card__inner"]} ${
          isFlipped  ? styles["is-flipped"] : ""
        }`}
        onClick={onFlip}
      >
        <div className={styles["flip-card__front"]}>{front}</div>
        <div className={styles["flip-card__back"]}>{back}</div>
      </div>
    </div>
  );
}