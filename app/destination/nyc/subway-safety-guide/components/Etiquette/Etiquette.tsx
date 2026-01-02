import styles from "./Etiquette.module.css";
import type { Etiquette as EtiquetteType } from "../types-subwaySafetyGuide";

interface Props {
  data: EtiquetteType;
}

export default function Etiquette({ data }: Props) {
  const {
    platform_etiquette,
    train_etiquette,
    rush_hour_rules,
    unspoken_norms,
  } = data;

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Subway Etiquette</h2>

      <div className={styles.section}>
        <h3 className={styles.heading}>Platform Etiquette</h3>
        <p className={styles.text}>{platform_etiquette}</p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.heading}>Train Etiquette</h3>
        <p className={styles.text}>{train_etiquette}</p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.heading}>Rush Hour Rules</h3>
        <p className={styles.text}>{rush_hour_rules}</p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.heading}>Unspoken Norms</h3>
        <p className={styles.text}>{unspoken_norms}</p>
      </div>
    </section>
  );
}
