import styles from './MonthGrid.module.css';

const months = [
  { name: 'January', short: 'Jan', temp: '0–5°C', crowd: 1, price: 1, emoji: '❄️', highlight: 'Post-holiday deals, Restaurant Week', verdict: 'best-value' },
  { name: 'February', short: 'Feb', temp: '0–7°C', crowd: 1, price: 1, emoji: '🧣', highlight: 'Fashion Week, Valentine\'s events', verdict: 'best-value' },
  { name: 'March', short: 'Mar', temp: '4–13°C', crowd: 2, price: 2, emoji: '🌱', highlight: 'St. Patrick\'s Day Parade, cherry blossoms begin', verdict: 'good' },
  { name: 'April', short: 'Apr', temp: '10–18°C', crowd: 3, price: 3, emoji: '🌸', highlight: 'Cherry blossoms peak, Tribeca Film Fest', verdict: 'best' },
  { name: 'May', short: 'May', temp: '15–23°C', crowd: 3, price: 3, emoji: '☀️', highlight: 'Fleet Week, best walking weather', verdict: 'best' },
  { name: 'June', short: 'Jun', temp: '20–28°C', crowd: 4, price: 4, emoji: '🌞', highlight: 'NYC Pride, SummerStage begins', verdict: 'good' },
  { name: 'July', short: 'Jul', temp: '23–30°C', crowd: 5, price: 5, emoji: '🏖️', highlight: '4th of July fireworks, Shakespeare in the Park', verdict: 'avoid' },
  { name: 'August', short: 'Aug', temp: '22–29°C', crowd: 5, price: 5, emoji: '🥵', highlight: 'US Open begins, Coney Island', verdict: 'avoid' },
  { name: 'September', short: 'Sep', temp: '17–24°C', crowd: 3, price: 4, emoji: '🍂', highlight: 'US Open Finals, Fashion Week', verdict: 'best' },
  { name: 'October', short: 'Oct', temp: '11–18°C', crowd: 3, price: 3, emoji: '🍁', highlight: 'Fall foliage, Halloween Parade, NYFF', verdict: 'best' },
  { name: 'November', short: 'Nov', temp: '5–13°C', crowd: 3, price: 3, emoji: '🦃', highlight: 'Macy\'s Thanksgiving Parade, holiday markets open', verdict: 'good' },
  { name: 'December', short: 'Dec', temp: '0–8°C', crowd: 4, price: 5, emoji: '🎄', highlight: 'Rockefeller tree, Radio City, holiday markets', verdict: 'holiday' },
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
