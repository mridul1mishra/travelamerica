import { LineBadgeProps } from "@/app/models/destination/subwayprops";
import styles from "./transitaccess.module.css";

export function LineBadge({ line }: LineBadgeProps) {
  const className = line.replace(/\s+/g, '-');
  return (
    <span className={`${styles["line-badge"]} ${styles[`line-${className}`]}`}>
      {line}
    </span>
  );
}
