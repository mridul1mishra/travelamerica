import { useState } from "react";
import styles from "./faqsection.module.css";

export default function FAQAccordion() {
  const faqs = [
    {
      q: "Is NYC safe for solo travelers?",
      a: "Yes — NYC is one of the safest major cities in the U.S., especially in well‑lit, central neighborhoods. Safety varies by block, so stick to areas with good foot traffic and reliable subway access.",
    },
    {
      q: "Which area is best for first‑time visitors?",
      a: "Midtown East is the best base for first‑timers thanks to its central location, excellent subway lines, and easy access to major attractions.",
    },
    {
      q: "Where should solo female travelers stay in NYC?",
      a: "The Upper West Side and Midtown East are top picks for solo female travelers due to their safety, walkability, and calm evening atmosphere.",
    },
    {
      q: "What is the safest neighborhood in NYC for tourists?",
      a: "The Upper West Side consistently ranks as one of the safest, most comfortable areas for visitors.",
    },
    {
      q: "Where can I stay on a budget near Manhattan?",
      a: "Long Island City offers the best value hotels with fast subway access to Midtown.",
    },
    {
      q: "Is Times Square a good place to stay?",
      a: "It’s convenient but overwhelming — crowded, noisy, and expensive. Most solo travelers prefer calmer neighborhoods.",
    },
  ];

 const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className={styles.wrapper}>
      <h2>Frequently Asked Questions</h2>

      <div className={styles.accordion}>
        {faqs.map((item, i) => (
          <div key={item.q} className={styles.item}>
            <button
              className={styles.question}
              onClick={() => toggle(i)}
              aria-expanded={openIndex === i}
            >
              <span>{item.q}</span>
              <span className={`${styles.arrow} ${openIndex === i ? styles.open : ""}`} > <svg width="20" height="20" viewBox="0 0 24 24"> <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/> <path d="M8 10l4 4 4-4" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round"/> </svg> </span>
            </button>

            <div
              className={`${styles.answerWrapper} ${
                openIndex === i ? styles.show : ""
              }`}
            >
              <p className={styles.answer}>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
