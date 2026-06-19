import styles from "./PersonaBlock.module.css";
import type { Persona } from "../types-subwaySafetyGuide";

interface Props {
  personas: Persona[];
}

export default function PersonaBlock({ personas }: Props) {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Persona‑Based Safety Tips</h2>

      <div className={styles.grid}>
        {personas.map((persona) => (
          <div key={persona.id} className={styles.card}>
            <h3 className={styles.personaName}>
              {persona.id.replace(/_/g, " ")}
            </h3>

            <div className={styles.section}>
              <h4 className={styles.heading}>Top Concerns</h4>
              <ul className={styles.list}>
                {persona.top_concerns.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.section}>
              <h4 className={styles.heading}>Recommended Behaviors</h4>
              <ul className={styles.list}>
                {persona.recommended_behaviors.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.section}>
              <h4 className={styles.heading}>Avoid</h4>
              <ul className={styles.list}>
                {persona.avoid_list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.section}>
              <h4 className={styles.heading}>Confidence Boosters</h4>
              <ul className={styles.list}>
                {persona.confidence_boosters.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
