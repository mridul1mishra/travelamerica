import { useState } from "react";
import styles from "./neighborhood.module.css";
import type { NeighborhoodNote } from "../types-subwaySafetyGuide";

interface Props {
  items: NeighborhoodNote[];
}

export default function NeighborhoodNotes({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Neighborhood‑Specific Notes</h2>

      <div className={styles.accordion}>
        {items.map((note, index) => (
          <div key={index} className={styles.item}>
            <button
              className={styles.header}
              onClick={() => toggle(index)}
              aria-expanded={openIndex === index}
            >
              <span>{note.area_name}</span>
              <span className={styles.icon}>
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className={styles.content}>
                <p className={styles.label}>Lines:</p>
                <p className={styles.text}>{note.lines.join(", ")}</p>

                <p className={styles.label}>Peak Safety Notes:</p>
                <p className={styles.text}>{note.peak_safety_notes}</p>

                <p className={styles.label}>Late‑Night Notes:</p>
                <p className={styles.text}>{note.late_night_notes}</p>

                <p className={styles.label}>Transfer Complexity:</p>
                <p className={styles.text}>{note.transfer_complexity}</p>

                {note.avoid_times && (
                  <>
                    <p className={styles.label}>Avoid Times:</p>
                    <p className={styles.text}>{note.avoid_times}</p>
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
