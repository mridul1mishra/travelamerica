import { LineBadgeProps } from "@/app/models/destination/subwayprops";
import styles from "./subwayaccess.module.css";

export function LineBadge({ line }: LineBadgeProps) {
  return (
    <span className={`${styles["line-badge"]} ${styles[`line-${line}`]}`}>
      {line}
    </span>
  );
}
