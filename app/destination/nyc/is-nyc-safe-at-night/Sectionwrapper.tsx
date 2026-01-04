import styles from "./Sectionwrapper.module.css";
import { ReactNode } from "react";


interface Props {
  children: ReactNode;
  id?: string; // optional anchor for internal links
}

export default function SectionWrapper({ children, id }: Props) {
  return (
    <section id={id} className={styles.wrapper}>
      {children}
    </section>
  );
}
