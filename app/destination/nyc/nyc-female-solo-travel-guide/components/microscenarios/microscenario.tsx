"use client";

import { useState } from "react";
import styles from "./MicroScenarios.module.css";

interface MicroScenario {
  question: string;
  answer: string[];
}

interface MicroScenariosProps {
  items: MicroScenario[];
}

export default function MicroScenarios({ items }: MicroScenariosProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="micro-scenarios" className={styles.wrapper}>
      <h2 className={styles.title}>What To Do If…</h2>

      {items.map((item, i) => (
        <div key={i} className={styles.card}>
          <button
            className={styles.question}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            {item.question}
            <span className={styles.icon}>{openIndex === i ? "−" : "+"}</span>
          </button>

          {openIndex === i && (
            <ul className={styles.answer}>
              {item.answer.map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
}
