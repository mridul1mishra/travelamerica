import SectionWrapper from '../../Sectionwrapper';
import { useState } from "react";
import styles from "./FAQ.module.css";
import type { FAQ as FAQType } from "../types-metroSafetyGuide";

interface Props {
  items: FAQType[];
}

export default function FAQ({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionWrapper id="faq">
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Frequently Asked Questions</h2>

      <div className={styles.accordion}>
        {items.map((faq, index) => (
          <div key={index} className={styles.item}>
            <button
              className={styles.header}
              onClick={() => toggle(index)}
              aria-expanded={openIndex === index}
            >
              <span>{faq.question}</span>
              <span className={styles.icon}>
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className={styles.content}>
                <p className={styles.answer}>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
    </SectionWrapper>
  );
}
