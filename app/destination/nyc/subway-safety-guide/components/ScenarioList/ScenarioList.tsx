import styles from "./ScenarioList.module.css";
import type { Scenario } from "../types-subwaySafetyGuide";

interface Props {
  scenarios: Scenario[];
}

export default function ScenarioList({ scenarios }: Props) {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Real‑World Scenarios</h2>

      <div className={styles.list}>
        {scenarios.map((scenario, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.scenarioTitle}>{scenario.scenario_title}</h3>

            <h4 className={styles.subheading}>What to Do</h4>
            <ul className={styles.bulletList}>
              {scenario.what_to_do.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>

            {scenario.pro_tips && (
              <p className={styles.proTip}>
                <strong>Pro Tip:</strong> {scenario.pro_tips}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
