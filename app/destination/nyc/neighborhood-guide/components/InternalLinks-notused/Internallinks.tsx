import React from "react";
import styles from "./interlinks.module.css";

type LinkItem = {
  title: string;
  description: string;
  href: string;
};

type Props = {
  links: LinkItem[];
};

export function InternalLinks({ links }: Props) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Supporting Guides</h2>
        <p className={styles.subheading}>
          Explore related guides that help you navigate NYC with clarity and confidence.
        </p>

        <div className={styles.grid}>
          {links.map((link) => (
            <a key={link.title} href={link.href} className={styles.card}>
              <h3 className={styles.title}>{link.title}</h3>
              <p className={styles.description}>{link.description}</p>
              <span className={styles.cta}>Read Guide →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
