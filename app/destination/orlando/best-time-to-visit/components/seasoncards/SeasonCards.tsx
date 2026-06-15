import styles from './SeasonCards.module.css';

const seasons = [
  {
    name: 'Spring',
    months: 'March – May',
    emoji: '🌸',
    color: '#e8f5e9',
    accent: '#2e7d32',
    verdict: '⚠️ Spring break is peak chaos',
    summary: 'EPCOT\'s Flower & Garden Festival blooms across the park with outdoor kitchens and topiaries. Mid-March through mid-April is spring break season — the parks hit near-summer capacity with long wait times and elevated hotel prices.',
    highlights: ['EPCOT Flower & Garden Festival: March–June', 'Spring break crowds peak: mid-March–mid-April', 'Cheerleading & dance competitions fill hotels', 'May is a sleeper sweet spot — school back, not yet summer'],
    watch: 'The third and fourth weeks of March can rival summer for crowd levels. If visiting in spring, target early March or May.',
  },
  {
    name: 'Summer',
    months: 'June – August',
    emoji: '☀️',
    color: '#fff3e0',
    accent: '#e65100',
    verdict: '🏖️ Busiest & hottest — plan around it',
    summary: 'Parks offer their longest hours and highest energy, but also their highest crowds and prices. Daily afternoon thunderstorms (1–4pm) are virtually guaranteed June through August. Hurricane season begins in June.',
    highlights: ['Extended park hours throughout summer', 'Water parks at full capacity', 'Universal and SeaWorld summer events', 'Hurricane season: June 1 – November 30'],
    watch: 'Mid-July is typically the single busiest week of the year. Heat index can reach 38–41°C. Plan indoor breaks from 1–4pm daily.',
  },
  {
    name: 'Fall',
    months: 'September – November',
    emoji: '🎃',
    color: '#fff8e1',
    accent: '#e65100',
    verdict: '🏆 Best overall season for most visitors',
    summary: 'School returns and crowds drop sharply after Labor Day. September and October offer the best combination of shorter wait times, reasonable prices, and a spectacular events calendar. Hurricane risk is highest in August–September — check forecasts.',
    highlights: ['Mickey\'s Not-So-Scary Halloween Party: select nights, Sept–Oct', 'EPCOT Food & Wine Festival: Aug–Nov', 'Universal\'s Halloween Horror Nights: Sept–Nov', 'Early November: crowds still low, no holiday pricing yet'],
    watch: 'Thanksgiving week (late November) sees a significant crowd and price spike. Hurricane risk is elevated through early October.',
  },
  {
    name: 'Winter',
    months: 'December – February',
    emoji: '❄️',
    color: '#e3f2fd',
    accent: '#1565c0',
    verdict: '💰 Best value: Jan–Feb',
    summary: 'December transforms every park with stunning holiday overlays — but brings the highest crowd and price levels of the year, especially Dec 26–Jan 2. January and February flip to the opposite: the lowest crowds and hotel rates of the year with mild, dry weather.',
    highlights: ['Mickey\'s Very Merry Christmas Party: Nov–Dec (separate ticket)', 'EPCOT Festival of the Holidays: Nov–Jan', 'EPCOT Festival of the Arts: Jan–Feb', 'Martin Luther King weekend: brief January crowd spike'],
    watch: 'The period between Christmas and New Year is the single busiest and most expensive week. Parks can hit capacity before noon.',
  },
];

export default function SeasonCards() {
  return (
    <section className={styles.section} id="seasons">
      <div className={styles.container}>
        <h2 className={styles.title}>Season by Season</h2>
        <p className={styles.subtitle}>What each season is actually like — beyond the weather brochure.</p>
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
