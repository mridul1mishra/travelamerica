import styles from './SavingsTips.module.css';

const tips = [
  { icon: '🚢', tip: 'Start with the Staten Island Ferry on day one.', detail: 'Free, reliable, and gives you immediate harbour perspective on the city. Run 24/7 so it fits any schedule.' },
  { icon: '📍', tip: 'NYC Public Library is your free base.', detail: 'Free WiFi, clean restrooms, air conditioning, charging stations, and some of the most beautiful architecture in Midtown — all free to walk in.' },
  { icon: '🕔', tip: 'Arrive right at opening for free museum hours.', detail: 'MoMA\'s Friday evenings get crowded by 6pm. Arrive at 4pm or after 7:30pm for the best experience.' },
  { icon: '🌤️', tip: 'Plan free outdoor activities for mornings.',  detail: 'Parks and outdoor spaces are best early — cooler, less crowded, better light for photography.' },
  { icon: '🎨', tip: 'Chelsea gallery openings: Thursday evenings.', detail: 'Walk 18th–27th Streets between 10th and 11th Avenue. Dozens of world-class galleries are free and open, often with wine.' },
  { icon: '🗺️', tip: 'The Public Art Fund has a free map of current installations.', detail: 'NYC\'s rotating public art program places significant work in Times Square, parks, and public plazas. Updated regularly at publicartfund.org.' },
];

export default function SavingsTips() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.callout}>
          <span className={styles.calloutIcon}>💡</span>
          <div>
            <p className={styles.calloutText}>
              A genuinely great day in New York City — Staten Island Ferry, Central Park, Brooklyn Bridge walk, DUMBO, Prospect Park, and a free museum — can cost <strong>under $15 including subway fares.</strong>
            </p>
          </div>
        </div>

        <h2 className={styles.title}>Practical Tips for a Free NYC Day</h2>
        <div className={styles.grid}>
          {tips.map((t) => (
            <div key={t.tip} className={styles.card}>
              <span className={styles.icon}>{t.icon}</span>
              <h4 className={styles.tipTitle}>{t.tip}</h4>
              <p className={styles.detail}>{t.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
