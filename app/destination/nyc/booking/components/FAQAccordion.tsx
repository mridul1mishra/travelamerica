"use client";

import { useState } from "react";
import styles from "./FAQAccordion.module.css";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  faqs: FAQItem[];
};

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.wrapper}>
      <h2>Frequently Asked Questions</h2>
      <div className={styles.accordion}>
        {faqs.map((item, index) => (
          <div key={item.question} className={styles.item}>
            <button
              className={styles.question}
              onClick={() => toggle(index)}
              aria-expanded={openIndex === index}
              type="button"
            >
              <span>{item.question}</span>
              <span className={`${styles.arrow} ${openIndex === index ? styles.open : ""}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <path
                    d="M8 10l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>

            <div className={`${styles.answerWrapper} ${openIndex === index ? styles.show : ""}`}>
              <p className={styles.answer}>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
