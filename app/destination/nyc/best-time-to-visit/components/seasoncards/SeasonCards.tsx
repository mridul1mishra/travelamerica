import styles from './SeasonCards.module.css';

const seasons = [
  {
    name: 'Spring',
    months: 'March – May',
    emoji: '🌸',
    color: '#e8f5e9',
    accent: '#2e7d32',
    verdict: '⭐ Best for first-timers',
    summary: 'Cherry blossoms in Central Park and Brooklyn Botanic Garden. Rising temperatures, comfortable walking weather. Crowds manageable. Hotel rates moderate — 10–20% above winter lows.',
    highlights: ['Cherry blossom peak: mid-April', 'Fleet Week: late May', 'NYC Half Marathon: March', 'Tribeca Film Festival: April'],
    watch: 'Spring rain in March–April — pack a compact umbrella.',
  },
  {
    name: 'Summer',
    months: 'June – August',
    emoji: '☀️',
    color: '#fff3e0',
    accent: '#e65100',
    verdict: '🎉 Best for free events',
    summary: 'The most generous free outdoor calendar of the year. Shakespeare in the Park, SummerStage concerts, free outdoor movies. Also the hottest, most crowded, and most expensive window.',
    highlights: ['4th of July fireworks (Macy\'s)', 'Shakespeare in the Park', 'US Open: late August', 'NYC Pride: June'],
    watch: 'July–August humidity is brutal. Plan indoor breaks around midday.',
  },
  {
    name: 'Fall',
    months: 'September – November',
    emoji: '🍁',
    color: '#fff8e1',
    accent: '#e65100',
    verdict: '🏆 Locals\' favourite season',
    summary: 'NYC\'s cultural calendar resets with new Broadway shows, exhibitions, and restaurant openings. Fall foliage peaks mid-to-late October in Central Park and Prospect Park. Warm days, cool evenings.',
    highlights: ['US Open Finals: September', 'Fashion Week: September', 'NYC Film Festival: October', 'NYC Marathon: first Sunday in November'],
    watch: 'Late November around Thanksgiving — hotel prices spike 30–40%.',
  },
  {
    name: 'Winter',
    months: 'December – February',
    emoji: '❄️',
    color: '#e3f2fd',
    accent: '#1565c0',
    verdict: '💰 Best value: Jan–Feb',
    summary: 'December is cinematic — Rockefeller tree, holiday markets, window displays — but expensive. January and February are the mirror opposite: cheapest hotels of the year, thin crowds, and a city that\'s fully open.',
    highlights: ['Rockefeller tree lighting: Dec', 'Bryant Park Winter Village: Dec–Jan', 'NYC Restaurant Week: January', 'Fashion Week: February'],
    watch: 'Christmas–New Year week: hotel prices spike 40–60% and Times Square is impassable.',
  },
];

export default function SeasonCards() {
  return (
    <section className={styles.section} id="seasons">
      <div className={styles.container}>
        <h2 className={styles.title}>Season by Season</h2>
        <p className={styles.subtitle}>What each season is actually like — beyond the weather.</p>
        <div className={styles.grid}>
          {seasons.map((s) => (
            <div key={s.name} className={styles.card} style={{ background: s.color, borderTop: `4px solid ${s.accent}` }}>
              <div className={styles.cardHeader}>
                <span className={styles.emoji}>{s.emoji}</span>
                <div>
                  <h3 className={styles.seasonName}>{s.name}</h3>
                  <p className={styles.months}>{s.months}</p>
                </div>
              </div>
              <div className={styles.verdict} style={{ color: s.accent }}>{s.verdict}</div>
              <p className={styles.summary}>{s.summary}</p>
              <div className={styles.highlights}>
                <p className={styles.highlightsLabel}>Key events:</p>
                <ul className={styles.highlightList}>
                  {s.highlights.map((h) => <li key={h}>{h}</li>)}
                </ul>
              </div>
              <div className={styles.watch}>
                <span className={styles.watchIcon}>👀</span>
                <span>{s.watch}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
