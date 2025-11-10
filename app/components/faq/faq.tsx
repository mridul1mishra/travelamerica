import "./faq.css"; // keep your CSS
type FAQItem = {
  question: string;
  answer: string;
};
type FAQProps = {
  groupedFaqs: Record<string, FAQItem[]>;
};
export default function FAQ({ groupedFaqs }: FAQProps){
    return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      {Object.entries(groupedFaqs).map(([group, items]) => (
        <div key={group} className="faq-group">
          <h3 className="faq-group-title">{group}</h3>
          {items.map((item, index) => (
            <details key={index}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      ))}
    </section>
  );
}
