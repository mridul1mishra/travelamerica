"use client"
import { useState } from "react";
import styles from "./FAQAccordion.module.css";
import type { FAQAccordionProps } from "../typesafeatnight";

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Frequently Asked Questions</h2>

        <div className={styles.accordion}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.item}>
              <button
                className={styles.question}
                onClick={() => toggle(index)}
              >
                {faq.question}
                <span className={styles.icon}>
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className={styles.answer}>
                  <p>{faq.answer}</p>

                  {faq.relatedLinks && faq.relatedLinks.length > 0 && (
                    <ul className={styles.links}>
                      {faq.relatedLinks.map((link, i) => (
                        <li key={i}>
                          <a href={link} className={styles.link}>
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
