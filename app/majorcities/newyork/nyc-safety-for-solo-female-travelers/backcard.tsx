import { Scenario } from '@/app/models/scenario';
import styles from './nycsafetysolofemaletravelers.module.css';

export function BackCard({ scenario }: { scenario: Scenario }) {
  return (
    <div className={styles["safety-cards-row"]}>
      <div className={styles["safety-card"]}>
        <div className={`${styles["safety-card__block"]} ${styles["safety-card__block--do"]}`}>
          <h3>✅ WHAT TO DO</h3>
          <ul>
            {scenario.do.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>

        <div className={`${styles["safety-card__block"]} ${styles["safety-card__block--dont"]}`}>
          <h3>🚫 WHAT NOT TO DO</h3>
          <ul>
            {scenario.dont.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>

        <div className={styles["safety-card__anchor"]}>
          <h3>🛡️ SAFETY ANCHOR</h3>
          <p>{scenario.anchor}</p>
        </div>
      </div>
    </div>
  );
}
