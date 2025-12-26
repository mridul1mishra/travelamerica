import styles from "./SectionSafestNeighborhoods.module.css";
import { Lightbulb } from "lucide-react";
type TipBoxProps = { children: React.ReactNode; };
export default function TipBox({ children }: TipBoxProps) {
  return (
    <div className={styles.tipBox}>
      <Lightbulb className={styles.icon} />
      <p>{children}</p>
    </div>
  );
}
