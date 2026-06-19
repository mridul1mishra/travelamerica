import styles from "./Etiquette.module.css";
import type { Etiquette as EtiquetteType } from "../types-subwaySafetyGuide";
import { FaSubway, FaUserFriends, FaClock, FaEyeSlash } from "react-icons/fa";

interface Props {
  data: EtiquetteType;
}

export default function Etiquette({ data }: Props) {
  const {
  platform_etiquette: platformEtiquetteList,
  train_etiquette: trainEtiquetteList,
  rush_hour_rules: rushHourRulesList,
  unspoken_norms: unspokenNormsList,
} = data;


  return (
    <section className={styles.wrapper}>
  <h2 className={styles.title}>Subway Etiquette</h2>

  <div className={styles.grid}>
    <div className={styles.item}>
      <h3 className={styles.heading}><FaSubway className={styles.icon} />Platform Etiquette</h3>
      <ul className={styles.list}>
        {platformEtiquetteList.map((item, index) => (
          <li key={index} className={styles.text}>{item}</li>
        ))}
      </ul>
    </div>

    <div className={styles.item}>
      <h3 className={styles.heading}><FaUserFriends className={styles.icon} />Train Etiquette</h3>
      <ul className={styles.list}>
        {trainEtiquetteList.map((item, index) => (
          <li key={index} className={styles.text}>{item}</li>
        ))}
      </ul>
    </div>

    <div className={styles.item}>
      <h3 className={styles.heading}><FaClock className={styles.icon} />Rush Hour Rules</h3>
      <ul className={styles.list}>
        {rushHourRulesList.map((item, index) => (
          <li key={index} className={styles.text}>{item}</li>
        ))}
      </ul>
    </div>

    <div className={styles.item}>
      <h3 className={styles.heading}><FaEyeSlash className={styles.icon} />Unspoken Norms</h3>
      <ul className={styles.list}>
        {unspokenNormsList.map((item, index) => (
          <li key={index} className={styles.text}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
</section>


  );
}
