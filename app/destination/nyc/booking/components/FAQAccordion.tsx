import styles from "./FAQAccordion.module.css";

type FAQItem = { question: string; answer: string };

export default function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  if (!faqs.length) return null;
  return (
    <section className={styles.wrapper} aria-label="Frequently asked questions">
      <div className={styles.heading}>
        <p className={styles.eyebrow}>Before you book</p>
        <h2>Frequently asked questions</h2>
      </div>
      <div className={styles.accordion}>
        {faqs.map((item) => (
          <details key={item.question} className={styles.item}>
            <summary className={styles.question}>
              <span>{item.question}</span>
              <span className={styles.arrow} aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m6 9 6 6 6-6" /></svg>
              </span>
            </summary>
            <p className={styles.answer}>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
