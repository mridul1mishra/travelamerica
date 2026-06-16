import styles from './ArrivalTips.module.css';

const tips = [
  { num: '01', tip: 'Book your rental car before you fly.', detail: 'Orlando is one of the most competitive rental car markets in the US. Rates booked 2–4 weeks ahead are consistently lower than walk-up prices. Pre-pay for the best rates — cancellation is usually free up to pickup time.' },
  { num: '02', tip: 'Budget for tolls — they add up.', detail: 'FL-528 (Beachline Expressway) from MCO to Disney and Universal is a toll road. Florida uses SunPass for electronic tolls; rental cars are enrolled automatically and billed to your card. Expect $5–15 in tolls per day of driving depending on your itinerary.' },
  { num: '03', tip: 'Stop for groceries before checking in.', detail: 'A Publix or Walmart between MCO and the resort areas (along US-192 or I-Drive) saves significantly on breakfasts and snacks. This is worth a 10-minute detour before you reach your hotel.' },
  { num: '04', tip: 'Mears Connect must be booked in advance.', detail: 'Mears Connect (the official Disney-area shuttle replacing Magical Express) does not operate as a walk-up service. Book online at mearstransportation.com before you fly. Shared shuttles can take significantly longer than private transfers.' },
  { num: '05', tip: 'Hotel check-in at Disney resorts allows early luggage drop.', detail: 'If your room is not ready on arrival, Disney resort hotels will store your luggage so you can head straight to a park. Use Disney\'s resort arrival experience — you can even text the app when your room is ready.' },
  { num: '06', tip: 'Peak traffic on I-4 is seriously bad.', detail: 'I-4 through the Orlando corridor (especially between Disney and Universal) is regularly one of the worst-ranked highways in the US for congestion. Add significant buffer time for park-to-park travel during peak hours (8–10am, 5–8pm).' },
];

export default function ArrivalTips() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Pro Tips for a Smooth Orlando Arrival</h2>
        <p className={styles.subtitle}>Six things that make the difference between a frustrating start and an easy one.</p>
        <div className={styles.tipsGrid}>
          {tips.map((t) => (
            <div key={t.num} className={styles.tipCard}>
              <span className={styles.tipNum}>{t.num}</span>
              <h4 className={styles.tipTitle}>{t.tip}</h4>
              <p className={styles.tipDetail}>{t.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
