import styles from './TravelerTypes.module.css';

const types = [
  { emoji: '🎢', label: 'Theme Park Maximiser', months: 'September or October', why: 'Shortest wait times of the year after Labor Day. Both Disney and Universal Halloween events are in full swing, and EPCOT Food & Wine Festival adds extra park value.' },
  { emoji: '💰', label: 'Budget Traveler', months: 'January or February', why: 'Lowest hotel rates of the year, off-site properties especially competitive. Park wait times are at their shortest, so you get more done per day without Lightning Lane extras.' },
  { emoji: '👨‍👩‍👧‍👦', label: 'Families Tied to School', months: 'Late May or early June', why: 'School is just out, crowds haven\'t yet hit peak summer levels, and the parks are in full summer-event mode. Avoids the worst of July\'s extreme heat and capacity crowds.' },
  { emoji: '💑', label: 'Couples / Adults', months: 'May or early November', why: 'Weekday visits in May or early November offer the best park experience for adults: shorter waits, pleasant temperatures, and the full event calendar without holiday pricing.' },
  { emoji: '🗺️', label: 'First-Time Visitor', months: 'May or October', why: 'First-timers benefit most from manageable crowds and comfortable weather. October adds Halloween atmosphere; May is warm without the oppressive heat and daily storms of summer.' },
  { emoji: '👩', label: 'Solo Traveler', months: 'January or September', why: 'Solo visitors can move faster through the parks and take advantage of single-rider lines. January and September offer the clearest paths through attractions with the fewest delays.' },
];

export default function TravelerTypes() {
  return (
    <section className={styles.section} id="traveler-types">
      <div className={styles.container}>
        <h2 className={styles.title}>Best Time by Traveler Type</h2>
        <p className={styles.subtitle}>The right month depends on who you are and what you want from the trip.</p>
        <div className={styles.grid}>
          {types.map((t) => (
            <div key={t.label} className={styles.card}>
              <span className={styles.emoji}>{t.emoji}</span>
              <h4 className={styles.label}>{t.label}</h4>
              <div className={styles.monthsBadge}>{t.months}</div>
              <p className={styles.why}>{t.why}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
