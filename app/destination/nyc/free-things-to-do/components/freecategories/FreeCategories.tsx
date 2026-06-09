import styles from './FreeCategories.module.css';

const parks = [
  { name: 'Central Park', detail: '843 acres — Mall → Bethesda Terrace → Bow Bridge loop (90 min). Free Shakespeare in the Park and SummerStage concerts in summer.', tag: 'All year' },
  { name: 'The High Line', detail: '1.45-mile elevated park on a disused rail line above the West Side. Public art installations year-round. Start at Gansevoort St and walk north.', tag: 'All year' },
  { name: 'Brooklyn Bridge Park', detail: '6 miles of waterfront with the best Manhattan skyline photography angle at Pier 1. The walk across Brooklyn Bridge is also free (30–45 min).', tag: 'All year' },
  { name: 'Governors Island', detail: '172-acre island with Manhattan and Statue of Liberty views. Free weekday ferries before noon from late May–October.', tag: 'May–Oct' },
  { name: 'Prospect Park', detail: '585 acres in Brooklyn — Central Park\'s less-crowded equal. Free Celebrate Brooklyn! concerts in summer at the Bandshell.', tag: 'All year' },
  { name: 'Fort Tryon Park', detail: 'Most elevated park in Manhattan. Heather Garden (largest public garden in the NYC park system). Stunning Hudson River views.', tag: 'All year' },
];

const iconic = [
  { name: 'Staten Island Ferry', detail: 'Free 25-min harbour ride with Statue of Liberty views. Runs 24/7, every day. Departs from Whitehall Terminal, Lower Manhattan.', tag: '🆓 Always Free' },
  { name: 'Brooklyn Bridge Walk', detail: 'Walk from Manhattan to DUMBO — 30–45 min over the bridge, elevated views of both skylines. Best at sunrise or early morning.', tag: '🆓 Always Free' },
  { name: 'Bushwick Collective (Street Art)', detail: 'One of the world\'s largest outdoor murals galleries across several blocks. Takes Jefferson or DeKalb stop (L train).', tag: '🆓 Always Free' },
  { name: 'Times Square', detail: 'Not a tourist trap if you\'re in and out. Best viewed at night when the screens are brightest — 10 minutes is enough.', tag: '🆓 Always Free' },
  { name: 'NYC Public Library (Main Branch)', detail: 'Stunning Beaux-Arts building. Free to enter, explore reading rooms, and see exhibitions. One of the best free indoor stops in cold weather.', tag: '🆓 Always Free' },
  { name: 'Domino Park, Williamsburg', detail: 'Free waterfront park with unobstructed Manhattan skyline views. Open late. Best at sunset.', tag: '🆓 Always Free' },
];

const neighborhoods = [
  { name: 'DUMBO, Brooklyn', detail: 'The most-photographed street in NYC: Manhattan Bridge framing at Washington & Water Street. Brooklyn Bridge Park adjacent.' },
  { name: 'The West Village', detail: 'NYC\'s most beautiful streetscape — brownstones, winding lanes, zero grid. Walk Bleecker, Perry, and Bank Streets without a plan.' },
  { name: 'Harlem', detail: '125th Street, the Apollo Theater facade, Marcus Garvey Park, Hamilton Heights brownstones. Best food for budget if you eat here.' },
  { name: 'Lower East Side', detail: 'History, street art, delis, Essex Market, and the best cheap dumplings in the city at Prosperity Dumpling.' },
  { name: 'Chinatown', detail: 'Canal Street, narrow side streets, the best cheap food in the city. Dense and walkable — rewards slow exploration.' },
];

export default function FreeCategories() {
  return (
    <>
      {/* Parks */}
      <section className={styles.section} id="parks">
        <div className={styles.container}>
          <h2 className={styles.title}>🌿 Parks & Outdoor Spaces</h2>
          <p className={styles.subtitle}>New York has more free green space and waterfront than most visitors expect.</p>
          <div className={styles.grid}>
            {parks.map((p) => (
              <div key={p.name} className={styles.card}>
                <div className={styles.cardTop}>
                  <h3 className={styles.cardName}>{p.name}</h3>
                  <span className={styles.tag}>{p.tag}</span>
                </div>
                <p className={styles.cardDetail}>{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Iconic */}
      <section className={`${styles.section} ${styles.altBg}`} id="iconic">
        <div className={styles.container}>
          <h2 className={styles.title}>⭐ Iconic Free Experiences</h2>
          <p className={styles.subtitle}>The experiences that define New York — and cost nothing.</p>
          <div className={styles.grid}>
            {iconic.map((item) => (
              <div key={item.name} className={`${styles.card} ${styles.iconicCard}`}>
                <div className={styles.cardTop}>
                  <h3 className={styles.cardName}>{item.name}</h3>
                  <span className={`${styles.tag} ${styles.freeTag}`}>{item.tag}</span>
                </div>
                <p className={styles.cardDetail}>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighbourhoods */}
      <section className={styles.section} id="neighborhoods">
        <div className={styles.container}>
          <h2 className={styles.title}>🗺️ Free Neighbourhood Walks</h2>
          <p className={styles.subtitle}>Some of the best free experiences are the neighbourhoods themselves.</p>
          <div className={styles.walkGrid}>
            {neighborhoods.map((n) => (
              <div key={n.name} className={styles.walkCard}>
                <h4 className={styles.walkName}>{n.name}</h4>
                <p className={styles.walkDetail}>{n.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
