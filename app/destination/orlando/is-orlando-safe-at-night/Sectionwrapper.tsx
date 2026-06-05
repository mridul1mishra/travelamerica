"use client";

import styles from "./Sectionwrapper.module.css";
import { ReactNode } from "react";


interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
}

export default function SectionWrapper({ id, children }: SectionWrapperProps) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.container}>{children}</div>
    </section>
  );
}
