import styles from "./Etiquette.module.css";
import type { Etiquette as EtiquetteType } from "../types-subwaySafetyGuide";

interface Props {
  data: EtiquetteType;
}

export default function Etiquette({ data }: Props) {
  const {
  platform_etiquette: platformEtiquetteList,
  train_etiquette: trainEtiquetteList,
  rush_hour_rules: rushHourRulesList,
  unspoken_norms: unspokenNormsList,
} = data.etiquette;


  return (
    <section className={styles.wrapper}>
  <h2 className={styles.title}>Subway Etiquette</h2>

  <div className={styles.grid}>
    <div className={styles.item}>
      <h3 className={styles.heading}>Platform Etiquette</h3>
      <ul className={styles.list}>
        {platform_etiquette.map((item, index) => (
          <li key={index} className={styles.text}>{item}</li>
        ))}
      </ul>
    </div>

    <div className={styles.item}>
      <h3 className={styles.heading}>Train Etiquette</h3>
      <ul className={styles.list}>
        {train_etiquette.map((item, index) => (
          <li key={index} className={styles.text}>{item}</li>
        ))}
      </ul>
    </div>

    <div className={styles.item}>
      <h3 className={styles.heading}>Rush Hour Rules</h3>
      <ul className={styles.list}>
        {rush_hour_rules.map((item, index) => (
          <li key={index} className={styles.text}>{item}</li>
        ))}
      </ul>
    </div>

    <div className={styles.item}>
      <h3 className={styles.heading}>Unspoken Norms</h3>
      <ul className={styles.list}>
        {unspoken_norms.map((item, index) => (
          <li key={index} className={styles.text}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
</section>


  );
}
