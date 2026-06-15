import styles from './MonthGrid.module.css';

const months = [
  { name: 'January', short: 'Jan', temp: '18–23°C', crowd: 1, price: 1, emoji: '🌤️', highlight: 'EPCOT Festival of the Arts begins, lowest crowds of year', verdict: 'best-value' },
  { name: 'February', short: 'Feb', temp: '19–24°C', crowd: 1, price: 1, emoji: '🌸', highlight: 'EPCOT Festival of the Arts, Presidents\' Day brief spike', verdict: 'best-value' },
  { name: 'March', short: 'Mar', temp: '21–27°C', crowd: 5, price: 4, emoji: '🎒', highlight: 'Spring break peak, EPCOT Flower & Garden Festival begins', verdict: 'avoid' },
  { name: 'April', short: 'Apr', temp: '23–28°C', crowd: 3, price: 3, emoji: '🌺', highlight: 'EPCOT Flower & Garden Festival, spring break subsides', verdict: 'good' },
  { name: 'May', short: 'May', temp: '26–31°C', crowd: 2, price: 2, emoji: '☀️', highlight: 'Sweet spot: school in session, not yet summer heat/crowds', verdict: 'best' },
  { name: 'June', short: 'Jun', temp: '28–33°C', crowd: 4, price: 4, emoji: '⛈️', highlight: 'Summer crowds build, afternoon storms begin, hurricane season', verdict: 'avoid' },
  { name: 'July', short: 'Jul', temp: '29–34°C', crowd: 5, price: 5, emoji: '🥵', highlight: 'Busiest month of year, daily thunderstorms, extreme heat', verdict: 'avoid' },
  { name: 'August', short: 'Aug', temp: '29–33°C', crowd: 4, price: 4, emoji: '🌀', highlight: 'Hurricane risk peaks, crowds ease in last weeks as school starts', verdict: 'avoid' },
  { name: 'September', short: 'Sep', temp: '27–31°C', crowd: 2, price: 2, emoji: '🎃', highlight: 'Mickey\'s Not-So-Scary Halloween Party begins, crowds drop', verdict: 'best' },
  { name: 'October', short: 'Oct', temp: '23–28°C', crowd: 2, price: 2, emoji: '🍂', highlight: 'EPCOT Food & Wine Festival, Halloween events, shorter waits', verdict: 'best' },
  { name: 'November', short: 'Nov', temp: '19–25°C', crowd: 2, price: 3, emoji: '🦃', highlight: 'Early Nov still low-crowd; Thanksgiving week spikes sharply', verdict: 'good' },
  { name: 'December', short: 'Dec', temp: '16–22°C', crowd: 4, price: 5, emoji: '🎄', highlight: 'Christmas overlays at all parks, peak crowds Dec 26–Jan 2', verdict: 'holiday' },
];

const verdictLabel: Record<string, string> = {
  best: 'Best',
  'best-value': 'Best Value',
  good: 'Good',
  avoid: 'Peak / Avoid',
  holiday: 'Festive',
};

function Dots({ count, max = 5, color }: { count: number; max?: number; color: string }) {
  return (
    <div className={styles.dots}>
      {Array.from({ length: max }).map((_, i) => (
        <span key={i} className={styles.dot} style={{ background: i < count ? color : '#e0e0e0' }} />
      ))}
    </div>
  );
}

export default function MonthGrid() {
  return (
    <section className={styles.section} id="months">
      <div className={styles.container}>
        <h2 className={styles.title}>Month-by-Month Guide</h2>
        <p className={styles.subtitle}>Temperatures, crowd levels, prices, and the key event in each month.</p>

        <div className={styles.legend}>
          <span className={`${styles.legendItem} ${styles.best}`}>Best</span>
          <span className={`${styles.legendItem} ${styles.bestValue}`}>Best Value</span>
          <span className={`${styles.legendItem} ${styles.good}`}>Good</span>
          <span className={`${styles.legendItem} ${styles.holiday}`}>Festive</span>
          <span className={`${styles.legendItem} ${styles.avoid}`}>Peak / Avoid</span>
        </div>

        <div className={styles.grid}>
          {months.map((m) => (
            <div key={m.name} className={`${styles.card} ${styles[m.verdict]}`}>
              <div className={styles.cardTop}>
                <span className={styles.emoji}>{m.emoji}</span>
                <div>
                  <div className={styles.monthName}>{m.name}</div>
                  <div className={styles.temp}>{m.temp}</div>
                </div>
                <span className={`${styles.verdictBadge} ${styles[m.verdict + 'Badge']}`}>
                  {verdictLabel[m.verdict]}
                </span>
              </div>
              <div className={styles.indicators}>
                <div className={styles.indicator}>
                  <span className={styles.indicatorLabel}>Crowds</span>
                  <Dots count={m.crowd} color="#ef4444" />
                </div>
                <div className={styles.indicator}>
                  <span className={styles.indicatorLabel}>Prices</span>
                  <Dots count={m.price} color="#f59e0b" />
                </div>
              </div>
              <p className={styles.highlight}>{m.highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
