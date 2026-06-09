import styles from './MuseumTable.module.css';

const alwaysFree = [
  { name: 'MoMA PS1', detail: 'Fully free for all visitors as of January 2026 — contemporary and modern art', location: 'Long Island City, Queens' },
  { name: 'National Museum of the American Indian', detail: 'Smithsonian affiliate; significant permanent collection in a Beaux-Arts landmark', location: 'Financial District' },
  { name: 'American Folk Art Museum', detail: 'Permanent collection of outsider and folk art; consistently excellent', location: 'Upper West Side' },
  { name: '9/11 Memorial Plaza', detail: 'Reflecting pools marking the Twin Towers footprints; museum is paid', location: 'Lower Manhattan' },
  { name: 'NYC Public Library Main Branch', detail: 'Reading rooms, free exhibitions, and one of the city\'s most beautiful interiors', location: 'Midtown (42nd St)' },
];

const freeHours = [
  { name: 'MoMA (Manhattan)', hours: 'Fri 4–8pm', who: 'NY State residents', location: 'Midtown, 53rd St' },
  { name: 'Whitney Museum of American Art', hours: 'Fri 7–10pm + 2nd Sundays', who: 'Everyone', location: 'Meatpacking District' },
  { name: 'Brooklyn Museum', hours: 'First Saturdays 5–11pm', who: 'Everyone', location: 'Prospect Heights, Brooklyn' },
  { name: 'Museum of Arts & Design (MAD)', hours: 'Thursdays 6–9pm', who: 'Everyone', location: 'Columbus Circle' },
  { name: 'The Met Cloisters', hours: 'Pay-what-you-wish anytime', who: 'Everyone (suggested $30)', location: 'Fort Tryon Park, Washington Heights' },
  { name: 'Queens Museum', hours: 'Pay-what-you-wish; kids 12 & under free', who: 'Always', location: 'Flushing Meadows, Queens' },
];

export default function MuseumTable() {
  return (
    <section className={styles.section} id="museums">
      <div className={styles.container}>
        <h2 className={styles.title}>🖼️ Museums with Free Entry</h2>
        <p className={styles.subtitle}>Always free, or free on specific days — all worth a visit.</p>

        <h3 className={styles.subheading}>Always Free</h3>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Museum</th>
                <th>What You Get</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {alwaysFree.map((m, i) => (
                <tr key={m.name} className={i % 2 === 0 ? styles.rowEven : ''}>
                  <td className={styles.musName}>{m.name}</td>
                  <td>{m.detail}</td>
                  <td className={styles.location}>{m.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className={`${styles.subheading} ${styles.subheadingMt}`}>Free on Specific Days / Hours</h3>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Museum</th>
                <th>Free Hours</th>
                <th>Who</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {freeHours.map((m, i) => (
                <tr key={m.name} className={i % 2 === 0 ? styles.rowEven : ''}>
                  <td className={styles.musName}>{m.name}</td>
                  <td><span className={styles.hoursBadge}>{m.hours}</span></td>
                  <td>{m.who}</td>
                  <td className={styles.location}>{m.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.tip}>
          <span className={styles.tipIcon}>💡</span>
          <span>Free museum hours fill up fast. Arrive right at opening, or 1 hour before closing to beat the crowd.</span>
        </div>
      </div>
    </section>
  );
}
