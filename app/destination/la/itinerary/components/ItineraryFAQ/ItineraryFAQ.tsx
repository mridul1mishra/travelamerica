const faqs = [
  {
    q: "Is 3 days enough for Los Angeles?",
    a: "Three days covers the core highlights — Griffith, the Getty, Venice, and DTLA — but LA is a city that rewards longer stays. With 3 days, pick one side of the city (Westside or Eastside) and go deep rather than trying to cover everything.",
  },
  {
    q: "Do I need a car for this itinerary?",
    a: "This itinerary is designed for drivers but is adaptable. Day 1 (Hollywood/Griffith) works by Uber. Day 2 (Santa Monica/Venice) is best by bike or Uber. Day 3 (Getty/DTLA) requires a car for the Getty — the free shuttle from UCLA is the alternative.",
  },
  {
    q: "What is the best area to stay for this itinerary?",
    a: "West Hollywood or Silver Lake puts you central to all three days. Santa Monica is ideal if you prioritise the beach. Avoid DTLA as a base unless you're specifically there for a conference or event.",
  },
  {
    q: "How much does this 3-day LA trip cost?",
    a: "Budget traveller: $120–160/day (hostel, Metro + one Uber, taco meals, free sites). Mid-range: $220–320/day (3-star hotel, rental car, one sit-down meal). Most attractions on this itinerary are free — the Getty, Griffith Observatory, and beaches charge nothing for entry.",
  },
];

export default function ItineraryFAQ() {
  return (
    <section
      aria-labelledby="la-itinerary-faq"
      style={{ maxWidth: "800px", margin: "48px auto", padding: "0 16px" }}
    >
      <h2
        id="la-itinerary-faq"
        style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "16px" }}
      >
        LA Itinerary — Frequently Asked Questions
      </h2>
      {faqs.map(({ q, a }) => (
        <details key={q} style={{ borderBottom: "1px solid #eee", padding: "12px 0" }}>
          <summary style={{ fontWeight: 600, cursor: "pointer", fontSize: "0.95rem" }}>
            {q}
          </summary>
          <p style={{ marginTop: "8px", color: "#444", fontSize: "0.9rem", lineHeight: 1.6 }}>
            {a}
          </p>
        </details>
      ))}
    </section>
  );
}
