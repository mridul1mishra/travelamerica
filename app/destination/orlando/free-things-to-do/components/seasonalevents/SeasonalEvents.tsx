import styles from './SeasonalEvents.module.css';

const events = [
  {
    season: 'Fall & Holiday Season',
    emoji: '🎃',
    color: '#fff7ed',
    accent: '#ea580c',
    items: [
      { name: 'Mickey\'s Not-So-Scary Halloween Party', detail: 'Separate-ticket event at Magic Kingdom on select nights September–October. Fireworks from the party are sometimes visible from outside the park — check current viewing areas at Disney Springs.' },
      { name: 'Universal\'s Halloween Horror Nights', detail: 'Separate-ticket event on select nights September–November. One of the country\'s most acclaimed haunted events. Disney Springs provides a free viewing area for some of Universal\'s sky elements on clear nights.' },
      { name: 'EPCOT International Food & Wine Festival', detail: 'Runs late August through November. The outdoor kitchens and garden areas are included with regular park admission (not free), but the festival atmosphere spreads into surrounding resort areas.' },
      { name: 'SeaWorld\'s Howl-O-Scream', detail: 'Fall haunt event at SeaWorld. Separate ticket required, but advance deals are often available. One of the better-value Halloween events in the Orlando area.' },
      { name: 'Disney Springs Holiday Entertainment', detail: 'Free festive entertainment, seasonal decor, and live music at Disney Springs from late November through early January. No ticket required — parking is free.' },
    ],
  },
  {
    season: 'Year-Round',
    emoji: '🗓️',
    color: '#f0fdf4',
    accent: '#059669',
    items: [
      { name: 'Lake Eola Farmers Market', detail: 'Every Sunday morning around Lake Eola Park (downtown Orlando). Free to attend. Local produce, crafts, food trucks, and live music. One of Orlando\'s most beloved weekly events.' },
      { name: 'Milk District Art Strolls (First Fridays)', detail: 'Free monthly art walks along the Milk District on First Fridays. Galleries, studios, food vendors, and live music along the E. Robinson St corridor. Free parking available.' },
      { name: 'Disney Springs Live Entertainment', detail: 'Free live music and street performances at Disney Springs on weekend evenings year-round. Check the Disney Springs entertainment schedule online for current performers and times.' },
      { name: 'EPCOT International Festival of the Arts', detail: 'Runs January–February. Included with park admission — not free, but one of the most popular EPCOT festivals. Visual arts, culinary arts, and live performances across the park.' },
      { name: 'Orlando Museum of Art Third Thursday', detail: 'Free admission at the Orlando Museum of Art on Third Thursdays 6–9pm. Often includes live music, themed programming, and a social atmosphere. Check OMA\'s schedule for current dates.' },
    ],
  },
];

export default function SeasonalEvents() {
  return (
    <section className={styles.section} id="events">
      <div className={styles.container}>
        <h2 className={styles.title}>🎉 Free & Low-Cost Events</h2>
        <p className={styles.subtitle}>Orlando&apos;s calendar has more free events than most visitors discover.</p>
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
