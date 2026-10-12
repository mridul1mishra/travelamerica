import type { ReactNode } from "react";
import styles from "./HotelFilterPanel.module.css";

export default function HotelFilterGroup({ enabled, title, selected, defaultOpen = false, children }: {
  enabled: boolean; title: string; selected?: number; defaultOpen?: boolean; children: ReactNode;
}) {
  if (!enabled) return children;
  return <details className={styles.group} open={defaultOpen || undefined}>
    <summary><span>{title}</span>{Boolean(selected) && <small>{selected} selected</small>}</summary>
    <div className={styles.groupContent}>{children}</div>
  </details>;
}
