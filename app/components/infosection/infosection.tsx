import Link from "next/link";
import styles from "./InfoSection.module.css";
import { InfoSectionProps } from "@/app/models/infosectionprops";

export default function InfoSection({ sections }: InfoSectionProps) {
  return (
    <>
      {sections.map((section) => (
        <section key={section.id} id={section.id} className={styles.section}>
          <h2>{section.title}</h2>

          <p className={styles.summary}>{section.summary}</p>

          <ul className={styles.list}>
            {section.bullets.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <Link href={section.link} className={styles.readMore}>
            Read full guide →
          </Link>
        </section>
      ))}
    </>
  );
}
