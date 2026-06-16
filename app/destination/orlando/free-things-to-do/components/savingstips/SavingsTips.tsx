import styles from './SavingsTips.module.css';

const tips = [
  { icon: '🏰', tip: 'Disney Springs is your free base.', detail: 'No ticket, no reservation, free parking. Use it for evening entertainment, character sightings, and live music. Some resort restaurants require reservations but there\'s always walkup availability at quick-service spots.' },
  { icon: '🚌', tip: 'Ride Disney\'s resort transportation for free.', detail: 'Disney\'s internal bus, monorail, and boat network is free and surprisingly enjoyable. Tell the gate you have a dining reservation — many resort lobbies and their lakefront views are worth a stop.' },
  { icon: '🛒', tip: 'A grocery run changes the economics of an Orlando trip.', detail: 'A Publix, Walmart, or Whole Foods run for breakfast items, snacks, and water bottles can cut your daily food spend significantly. Most vacation rentals have kitchens. Even a hotel with a fridge helps.' },
  { icon: '💧', tip: 'Water bottles are refilled for free at every theme park.', detail: 'Disney, Universal, and SeaWorld all refill water bottles at quick-service restaurants at no charge. In Florida heat, staying hydrated is essential — this one tip easily saves $15–20 per person per day.' },
  { icon: '🅿️', tip: 'Free parking exists — if you know where to look.', detail: 'Disney Springs parking is free all day in all garages. Universal CityWalk has free parking for the first 3 hours (after 6pm). Lake Eola Park, Kraft Azalea Garden, and most nature parks have free lots.' },
  { icon: '🎫', tip: 'Never buy theme park tickets from unofficial booths.', detail: 'I-Drive is lined with booths offering "discounted" park tickets attached to timeshare presentations. Always buy directly from official park websites. Third-party resellers exist, but stick to well-known names like Undercover Tourist for savings.' },
];

export default function SavingsTips() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.callout}>
          <span className={styles.calloutIcon}>💡</span>
          <div>
            <p className={styles.calloutText}>
              A genuinely free day in Orlando — Disney Springs, Lake Eola Park, Tibet-Butler Preserve, Kraft Azalea Garden, and a Sunday Farmers Market visit — can cost <strong>under $20 including fuel and a snack.</strong>
            </p>
          </div>
        </div>

        <h2 className={styles.title}>Practical Tips for Cutting Orlando Costs</h2>
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
