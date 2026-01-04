import styles from "./ScenarioList.module.css";
import type { Scenario } from "../types-subwaySafetyGuide";

interface Props {
  scenarios: Scenario[];
}

export default function ScenarioList({ scenarios }: Props) {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Real‑World Scenarios</h2>

      <div className={styles.grid}>
        {scenarios.map((scenario, index) => (
          <AccordionCard key={index} scenario={scenario} />
        ))}
      </div>
    </section>
  );
}
