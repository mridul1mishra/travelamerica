import styles from "./Interlink.module.css";
import type { InternalLink } from "../types-subwaySafetyGuide";

interface Props {
  items: InternalLink[];
}

export default function InternalLinks({ items }: Props) {
  return (
    <nav className={styles.wrapper} aria-label="Page Navigation">
      <h2 className={styles.title}>On This Page</h2>

      <ul className={styles.list}>
        {items.map((link, index) => (
          <li key={index} className={styles.item}>
            <a href={link.href} className={styles.link}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
