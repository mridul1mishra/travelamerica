import styles from './TravelerTypes.module.css';

const types = [
  { emoji: '🗽', label: 'First-Time Visitor', months: 'April or May', why: 'Beautiful, walkable, and not yet in peak-tourist mode. Cherry blossoms in April, perfect outdoor dining in May.' },
  { emoji: '💰', label: 'Budget Traveler', months: 'January or February', why: 'Accept the cold, gain 30–40% off hotels and a genuinely quieter city. Every indoor attraction fully open.' },
  { emoji: '🎭', label: 'Culture & Events', months: 'September or October', why: 'The most packed cultural calendar of the year. New Broadway seasons, new exhibitions, new restaurant openings.' },
  { emoji: '🎄', label: 'Holiday Magic', months: 'Early–mid December', why: 'Before Christmas week, when prices spike. The decorations are up, crowds are festive but not yet overwhelming.' },
  { emoji: '👨‍👩‍👧‍👦', label: 'Families with Kids', months: 'June or September', why: 'Parks are active, kids\' programming is at its best. June is warm; September has thinner crowds after Labor Day.' },
  { emoji: '👩', label: 'Solo Female Traveler', months: 'May or September', why: 'Long daylight hours, warm but not oppressive, outdoor dining and evening walks feel safe and natural.' },
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
