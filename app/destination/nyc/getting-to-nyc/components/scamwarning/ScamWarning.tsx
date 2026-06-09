import styles from './ScamWarning.module.css';

const scams = [
  { icon: '🚫', title: 'Gypsy Cabs', desc: 'Anyone approaching you inside the terminal offering a ride. Not a licensed taxi. No meter. Will overcharge. Always walk to the official taxi stand.' },
  { icon: '⚠️', title: 'Rigged Meters', desc: 'Confirm the taxi meter starts at the standard rate. From JFK, the flat rate to Manhattan is $70 — if they try to meter it or quote more, exit the cab.' },
  { icon: '📱', title: 'Rideshare Surge', desc: 'Always check the fare estimate in both Uber and Lyft before confirming. If one is surging, the other often isn\'t. The subway or Uber Shuttle is usually faster and cheaper during surge.' },
  { icon: '💼', title: 'Baggage Theft', desc: 'Keep your bag within sight at all times in airports and on transit. Consider an AirTag in checked luggage. Lock zippers on carry-ons in crowded areas.' },
  { icon: '🏨', title: 'Unofficial Shuttles', desc: 'Use only the official shuttle desks inside the terminal (GO Airlink, SuperShuttle). Unofficial drivers may accept payment and disappear. Confirm all details before paying.' },
];

export default function ScamWarning() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.alertBanner}>
          <span className={styles.alertIcon}>⚠️</span>
          <div>
            <h3 className={styles.alertTitle}>Airport Scams to Avoid</h3>
            <p className={styles.alertText}>
              The most common NYC airport scam is the &ldquo;gypsy cab&rdquo; — an unofficial driver approaching
              you inside baggage claim asking &ldquo;need a ride?&rdquo; These are unregulated and will
              overcharge. Always walk to the official taxi stand or rideshare pickup zone.
            </p>
          </div>
        </div>

        <div className={styles.scamsGrid}>
          {scams.map((s) => (
            <div key={s.title} className={styles.scamCard}>
              <span className={styles.scamIcon}>{s.icon}</span>
              <h4 className={styles.scamTitle}>{s.title}</h4>
              <p className={styles.scamDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
