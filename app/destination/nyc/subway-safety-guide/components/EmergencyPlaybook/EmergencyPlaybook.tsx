import styles from "./EmergencyPlaybook.module.css";
import type { EmergencyPlaybook as EmergencyPlaybookType } from "../types-subwaySafetyGuide";

interface Props {
  data: EmergencyPlaybookType;
}

export default function EmergencyPlaybook({ data }: Props) {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Emergency Playbook</h2>

      <div className={styles.section}>
        <h3 className={styles.heading}>If You Feel Unsafe</h3>
        <ul className={styles.list}>
          {data.if_you_feel_unsafe.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <h3 className={styles.heading}>If Someone Harasses You</h3>
        <ul className={styles.list}>
          {data.if_someone_harasses_you.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <h3 className={styles.heading}>If You Get Lost</h3>
        <ul className={styles.list}>
          {data.if_you_get_lost.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <h3 className={styles.heading}>If Your Phone Dies</h3>
        <ul className={styles.list}>
          {data.if_your_phone_dies.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <h3 className={styles.heading}>If Service Stops</h3>
        <ul className={styles.list}>
          {data.if_service_stops.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
