"use client";

import { useState } from "react";
import styles from "./scenariosection.module.css";

interface Props {
  title: string;
  content: string[];
}

export default function ScenarioCard({ title, content }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.card}>
      <button
        className={styles.header}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{title}</span>
        <span className={styles.icon}>{open ? "⌃" : ">"}</span>
      </button>

      {open && (
        <div className={styles.body}>
          <ul>
            {content.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
