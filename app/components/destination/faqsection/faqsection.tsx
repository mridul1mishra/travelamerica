import { useState } from "react";
import { FAQItem, FAQAccordionProps } from "@/app/models/destination/faqprops";
import styles from "./faqsection.module.css";

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className={styles.wrapper}>
      <h2>Frequently Asked Questions</h2>

      <div className={styles.accordion}>
        {faqs.map((item, i) => (
          <div key={item.question} className={styles.item}>
            <button
              className={styles.question}
              onClick={() => toggle(i)}
              aria-expanded={openIndex === i}
            >
              <span>{item.question}</span>
              <span
                className={`${styles.arrow} ${
                  openIndex === i ? styles.open : ""
                }`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <path d="M8 10l4 4 4-4" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </button>

            <div
              className={`${styles.answerWrapper} ${
                openIndex === i ? styles.show : ""
              }`}
            >
              <p className={styles.answer}>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
