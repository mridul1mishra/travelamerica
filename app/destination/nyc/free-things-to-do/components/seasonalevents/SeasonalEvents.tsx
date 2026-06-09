import styles from './SeasonalEvents.module.css';

const events = [
  {
    season: 'Summer',
    emoji: '☀️',
    color: '#fff7ed',
    accent: '#ea580c',
    items: [
      { name: 'Shakespeare in the Park', detail: 'Free outdoor Shakespeare at Central Park\'s Delacorte Theater. Reserve tickets free online, released 7 days ahead.' },
      { name: 'SummerStage Concerts', detail: 'Free and low-cost concerts across all NYC parks. Central Park Rumsey Playfield is the flagship; borough-wide events run all summer.' },
      { name: 'Bryant Park Movies', detail: 'Free outdoor film screenings Monday evenings. Arrive by 5pm to secure a lawn spot for the 8pm showing.' },
      { name: 'NYC Philharmonic in the Parks', detail: 'Free outdoor concerts in parks across all five boroughs, typically July.' },
      { name: 'Met Opera in the Parks', detail: 'Free opera performances in parks citywide, late June to mid-July.' },
    ],
  },
  {
    season: 'Year-Round',
    emoji: '🗓️',
    color: '#f0fdf4',
    accent: '#059669',
    items: [
      { name: 'First Saturdays at Brooklyn Museum', detail: 'Free 5–11pm with live music, dancing, and full museum access. One of the best free nights out in the city.' },
      { name: 'Chelsea Gallery Openings', detail: 'Thursday evenings, 18th–27th Streets off 10th & 11th Ave. Dozens of galleries open with free admission and wine.' },
      { name: 'NYC Marathon Viewing', detail: 'Free to watch the entire route. Best spots: Brooklyn miles 8–13 and First Avenue, Manhattan (miles 16–18). First Sunday in November.' },
      { name: 'Bryant Park (All Year)', detail: 'Free chess, croquet, fitness classes, and — in winter — free ice skating (skate rental is paid).' },
      { name: 'Central Park Guided Tours', detail: 'Central Park Conservancy offers free guided walking tours on weekends. Check their website for schedule.' },
    ],
  },
];

export default function SeasonalEvents() {
  return (
    <section className={styles.section} id="events">
      <div className={styles.container}>
        <h2 className={styles.title}>🎉 Free Events</h2>
        <p className={styles.subtitle}>NYC&apos;s free event calendar is genuinely world-class — especially in summer.</p>
        <div className={styles.grid}>
          {events.map((s) => (
            <div key={s.season} className={styles.card} style={{ background: s.color, borderTop: `3px solid ${s.accent}` }}>
              <div className={styles.cardHeader}>
                <span className={styles.emoji}>{s.emoji}</span>
                <h3 className={styles.season} style={{ color: s.accent }}>{s.season}</h3>
              </div>
              <div className={styles.items}>
                {s.items.map((item) => (
                  <div key={item.name} className={styles.eventItem}>
                    <h4 className={styles.eventName}>{item.name}</h4>
                    <p className={styles.eventDetail}>{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
