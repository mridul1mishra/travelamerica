import Image from 'next/image';
import styles from '../../lagrouptravel.module.css';

export default function GroupItinerary() {
  return (
    <>
      <section id="itinerary" className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/losangeles/images/day1_hollywood_highs_group_vibes.png"
            alt="Day 1 LA group itinerary map featuring the Hollywood Walk of Fame, Griffith Observatory, Los Feliz, and the Sunset Strip"
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Day 1: Hollywood Highs, Group Vibes</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li className={styles.subheading}>🌅Begin on the Hollywood Walk of Fame for coffee and the obligatory photos at the TCL Chinese Theatre, then drive up to Griffith Observatory before the midday crowds. Parking is $10 and the panorama of the Hollywood Sign and the whole basin is the best free view in the city — a good spot to figure out the rest of the day together.</li>
            <li className={styles.subheading}>☀️Los Feliz is an easy lunch stop where everyone can pick something different on Vermont Ave without a reservation. From there it&apos;s a short drive to Barnsdall Art Park for a flat, free garden walk with city views — do as much or as little as the group wants before heading back into town.</li>
            <li className={styles.subheading}>🌙Have dinner in West Hollywood — plenty of Sunset Strip spots take a group of six or more if you call ahead. Then catch a show at the Laugh Factory or the Comedy Store; book seats together in advance, since walk-up group tickets are hard to find. It&apos;s the kind of night everyone talks about afterward.</li>
          </ul>
        </div>
      </section>

      <section className={styles.splitSection}>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Day 2: Coast, Boardwalk &amp; Camaraderie</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li className={styles.subheading}>🌅Start the morning at the Santa Monica Pier, then rent bikes along Ocean Ave ($15–$25/hr) and cycle the flat coastal path south toward Venice Beach. It&apos;s easy to keep a group together and there&apos;s good cheap food the whole way if anyone gets hungry.</li>
            <li className={styles.subheading}>☀️Spend the afternoon on the Venice Beach Boardwalk — street performers, Muscle Beach, and the market. Abbot Kinney Blvd is one block east for better lunch options. Don&apos;t try to do the whole 22-mile coastal route; turn back when the group has had enough.</li>
            <li className={styles.subheading}>🌙Head back to Santa Monica for sunset at the pier, then dinner one block east of the Third Street Promenade on 2nd or 4th Street for fewer crowds. The bars around Main Street are within a few blocks of each other, so it&apos;s easy to keep the group together.</li>
          </ul>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/losangeles/assets/group/la-group-itinerary-day2-santa-monica-venice-coast.png"
            alt="Scene-based illustration of a group cycling the Santa Monica to Venice Beach coastal path with the pier and boardwalk in the background"
            fill
            className={styles.mapImage}
          />
        </div>
      </section>

      <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/losangeles/assets/group/la-group-itinerary-day3-getty-downtown-arts-district.png"
            alt="Scene-based illustration of Day 3 LA group itinerary with friends at the Getty Center terrace and the Downtown LA skyline"
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Day 3: Art, Downtown, and Companionship</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li className={styles.subheading}>🌅Take it slower on the last day. Start at the Getty Center when it opens — admission is free, parking is $20, and arriving by 10am beats the fill-up. The tram up, the collection, and the garden terrace views are an easy hour or two for a group.</li>
            <li className={styles.subheading}>☀️Drive to Downtown LA for lunch at Grand Central Market, where everyone picks their own stall — ideal for a crowd. If the group still wants art, The Broad is close by (book ahead, $18) and the spiral collection moves quickly as a group.</li>
            <li className={styles.subheading}>🌙End in the Arts District — gallery walks at Hauser &amp; Wirth are free, and dinner at Bestia is excellent if you book ahead. For a cheaper, livelier finish, Tacos 1986 does $5 tacos with a line worth waiting in. Book the sit-down spots ahead on weekends.</li>
          </ul>
        </div>
      </section>
    </>
  );
}
