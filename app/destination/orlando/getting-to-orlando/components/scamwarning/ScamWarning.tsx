import styles from './ScamWarning.module.css';

const scams = [
  { icon: '🎫', title: 'Unofficial Discount Ticket Booths', desc: 'I-Drive is lined with kiosks offering "heavily discounted" park tickets. Many are legitimate resellers, but some are fronts for timeshare presentations or sell non-refundable tickets with strict restrictions. Buy directly from official park websites or established resellers like Undercover Tourist.' },
  { icon: '⌚', title: 'Timeshare-Pitch "Free Tickets"', desc: 'You will be approached with offers of free or discounted park tickets in exchange for attending a "90-minute" resort presentation. These almost always run 3–4 hours and use high-pressure sales tactics. The value is rarely worth your vacation time.' },
  { icon: '🌐', title: 'Fake Official-Looking Websites', desc: 'Dozens of websites impersonate official Disney, Universal, and SeaWorld ticketing. URLs like "disneyworld-tickets.com" or "orlandothemeparks.net" are not official. Always buy from disneyworld.com, universalorlando.com, or seaworld.com directly.' },
  { icon: '🅿️', title: 'Unofficial Off-Site Parking', desc: 'Operators near Disney and Universal offer "official" parking at lower prices. Some are legitimate off-site lots with shuttle service; others are poorly run or simply closer lots than the official garages with extra fees. Confirm shuttle frequency and distance before paying.' },
  { icon: '🚗', title: 'Unmarked Airport Drivers', desc: 'Anyone approaching you inside MCO offering a ride is operating outside of the regulated rideshare and taxi system. Always use the designated Ride App Pickup zones, official taxi stands, or pre-booked shuttles. Never accept an unmetered or unofficial ride.' },
];

export default function ScamWarning() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.alertBanner}>
          <span className={styles.alertIcon}>⚠️</span>
          <div>
            <h3 className={styles.alertTitle}>Orlando Travel Traps to Avoid</h3>
            <p className={styles.alertText}>
              Orlando&apos;s most common visitor trap is the unofficial &ldquo;discount ticket booth&rdquo; — often tied to timeshare presentations or selling tickets with heavy restrictions. Always buy park tickets directly from official park websites. The savings from unofficial sellers rarely outweigh the risks or the strings attached.
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
