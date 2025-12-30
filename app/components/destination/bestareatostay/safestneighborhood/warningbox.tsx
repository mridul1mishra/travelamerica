import styles from "./SectionSafestNeighborhoods.module.css";
import { AlertTriangle } from "lucide-react";

type WarningBoxProps = { children: React.ReactNode; };

export default function WarningBox({ children }: WarningBoxProps) {
  return (
    <div className={styles.warningBox}>
      <AlertTriangle className={styles.icon} />
      <p>{children}</p>
    </div>
  );
}
