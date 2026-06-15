import styles from './MuseumTable.module.css';

const alwaysFree = [
  { name: 'Mead Botanical Garden', detail: '48 acres of Florida native plants, wetlands, and wildlife — open daily', location: 'Winter Park' },
  { name: 'Kraft Azalea Garden', detail: 'Free lakefront garden with ancient cypress trees and Lake Maitland views', location: 'Winter Park' },
  { name: 'Tibet-Butler Preserve', detail: 'Free 0.75-mile boardwalk through Florida wetlands with alligators and birds', location: 'Southwest Orlando' },
  { name: 'Lake Eola Park', detail: 'Free 0.9-mile lakefront loop with fountain, playgrounds, and amphitheatre', location: 'Downtown Orlando' },
  { name: 'Orange Blossom Trail Murals', detail: 'Growing collection of large-scale murals along OBT — free outdoor art walk', location: 'South Orlando' },
];

const freeHours = [
  { name: 'Charles Hosmer Morse Museum of American Art', hours: 'Fri 4–8pm, Nov–Apr', who: 'Everyone', location: 'Winter Park' },
  { name: 'Orange County Regional History Center', hours: '2nd Sundays 1–5pm', who: 'Everyone', location: 'Downtown Orlando' },
  { name: 'Orlando Museum of Art', hours: '3rd Thursdays 6–9pm', who: 'Everyone', location: 'Loch Haven Park' },
  { name: 'Harry P. Leu Gardens', hours: 'First Mondays all day', who: 'Everyone', location: 'North Orlando' },
  { name: 'Rollins Museum of Art', hours: 'Always free (Tues–Sat)', who: 'Everyone', location: 'Winter Park (Rollins College)' },
];

export default function MuseumTable() {
  return (
    <section className={styles.section} id="museums">
      <div className={styles.container}>
        <h2 className={styles.title}>🖼️ Museums & Gardens with Free Entry</h2>
        <p className={styles.subtitle}>Always free, or free on specific days — all worth a visit in Orlando.</p>

        <h3 className={styles.subheading}>Always Free</h3>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Attraction</th>
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
                <th>Museum / Garden</th>
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
          <span>The Morse Museum&apos;s Friday free hours (Nov–Apr) are genuinely worth planning around — it holds the world&apos;s most comprehensive collection of Louis Comfort Tiffany work, including the Tiffany Chapel from the 1893 World&apos;s Fair.</span>
        </div>
      </div>
    </section>
  );
}
