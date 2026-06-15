import styles from './FreeCategories.module.css';

const parks = [
  { name: 'Lake Eola Park', detail: 'Orlando\'s most beloved park — free 0.9-mile loop around the lake with the iconic Linton E. Allen Memorial Fountain. Playgrounds, swan boat docks, and amphitheatre. Sunday Farmers Market starts here.', tag: 'All year' },
  { name: 'Mead Botanical Garden', detail: '48 acres of Florida native plants, wetlands, and bird habitats. Completely free and open daily. Excellent for birding and a calm escape from the theme park corridor.', tag: 'All year' },
  { name: 'Kraft Azalea Garden', detail: 'Hidden gem in Winter Park: free lakefront garden with ancient cypress trees, a Venetian loggia, and sweeping views across Lake Maitland. Stunning at sunrise.', tag: 'All year' },
  { name: 'Tibet-Butler Preserve', detail: '0.75-mile free boardwalk through Florida pine flatwoods, scrub, and wetlands. Alligators, sandhill cranes, and native wildlife common year-round. Managed by Orange County.', tag: 'All year' },
  { name: 'Lake Apopka Wildlife Drive', detail: 'One of Florida\'s top birding sites — free entry for pedestrians and cyclists. October through March: massive flocks of wading birds, white pelicans, and raptors at the North Shore restoration area.', tag: 'Oct–Mar best' },
  { name: 'Cady Way Trail', detail: '7-mile paved trail connecting Cady Way Park to the Orlando Urban Trail. Free and open daily — passes parks, neighbourhoods, and peaceful greenways west of downtown.', tag: 'All year' },
];

const iconic = [
  { name: 'Disney Springs', detail: 'Walt Disney World\'s free shopping, dining, and entertainment district. No theme park ticket or reservation needed. Free parking in the Lime and Orange garages. Live music on weekend evenings.', tag: '🆓 Always Free' },
  { name: 'Universal CityWalk', detail: 'Free entry to Universal\'s outdoor entertainment district. No park ticket required. Restaurants, shops, live entertainment, and street performers — especially lively on weekend evenings.', tag: '🆓 Always Free' },
  { name: 'Lake Eola Farmers Market', detail: 'Every Sunday morning. One of Orlando\'s most beloved weekly events — free to attend. Local produce, craft vendors, food trucks, and live music along the Lake Eola waterfront.', tag: '🆓 Every Sunday' },
  { name: 'Rollins College Campus Walk', detail: 'Free to explore the grounds of Florida\'s oldest university — Spanish Mediterranean architecture on the shores of Lake Virginia in Winter Park. Beautiful and walkable in under 30 minutes.', tag: '🆓 Always Free' },
  { name: 'ICON Park (ground level)', detail: 'The I-Drive entertainment district is free to walk. Street-level entertainment, food options, and views of the Wheel without paying for the observation deck. Best explored in the evening.', tag: '🆓 Walk is free' },
  { name: 'Orange County Regional History Center', detail: 'Downtown Orlando museum in a restored 1927 courthouse. Free on Second Sundays 1–5pm. Covers Florida\'s history from pre-Columbian times through the theme park era.', tag: '🆓 2nd Sundays' },
];

const neighborhoods = [
  { name: 'Winter Park', detail: 'Park Avenue boutiques, lakefront parks, Rollins College, and Kraft Azalea Garden. The most walkable and beautiful neighbourhood near Orlando. Free to explore all day.' },
  { name: 'Mills 50 District', detail: 'Orlando\'s international district: Vietnamese restaurants, indie shops, murals, and authentic local character. Walk Colonial Drive between Mills and 50 (Orange Avenue).' },
  { name: 'Thornton Park', detail: 'Victorian cottages, brick streets, and restaurant patios steps from Lake Eola. Low-key neighbourhood with boutique shops and a neighbourhood feel you won\'t find on I-Drive.' },
  { name: 'College Park', detail: 'Edgewater Drive through College Park is lined with local restaurants, bookshops, and no chain stores. A real neighbourhood that Orlando locals actually use.' },
  { name: 'SODO District', detail: 'South of Downtown: emerging arts scene, warehouse murals, boutique fitness, and local dining. Walk Orange Avenue south of the city centre for a different side of Orlando.' },
];

export default function FreeCategories() {
  return (
    <>
      {/* Parks */}
      <section className={styles.section} id="parks">
        <div className={styles.container}>
          <h2 className={styles.title}>🌿 Parks & Nature</h2>
          <p className={styles.subtitle}>Orlando has more free green space and wildlife access than most visitors discover.</p>
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
          <p className={styles.subtitle}>The Orlando experiences that cost nothing — and are worth every minute.</p>
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
          <p className={styles.subtitle}>Orlando beyond the resort corridor — real neighbourhoods worth exploring.</p>
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
