import styles from "./coreprinciples.module.css";
import type { CorePrinciple } from "../types-subwaySafetyGuide";
import { FaEye, FaMapMarkerAlt, FaLightbulb, FaShieldAlt, FaTools } from "react-icons/fa";

interface Props {
  items: CorePrinciple[];
}

const iconMap: Record<string, React.ReactNode> = {
  awareness: <FaEye />,
  positioning: <FaMapMarkerAlt />,
  instincts: <FaLightbulb />,
  "minimize-risk": <FaShieldAlt />,
  tools: <FaTools />
};


export default function CorePrinciples({ items }: Props) {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Core Safety Principles</h2>

      <div className={styles.grid}>
        {items.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{iconMap[item.icon]}</div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
