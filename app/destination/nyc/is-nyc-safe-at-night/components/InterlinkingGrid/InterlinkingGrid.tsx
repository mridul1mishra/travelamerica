import styles from "./InterlinkingGrid.module.css";
import type { InterlinkingGridProps } from "../typesafeatnight";

export default function InterlinkingGrid({ links }: InterlinkingGridProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Related NYC Guides</h2>

        <div className={styles.grid}>
          {links.map((link, index) => (
            <a key={index} href={link.url} className={styles.card}>
              <h3 className={styles.title}>{link.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
