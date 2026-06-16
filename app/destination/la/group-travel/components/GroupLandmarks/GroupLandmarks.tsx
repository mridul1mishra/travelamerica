import Image from 'next/image';
import styles from '../../lagrouptravel.module.css';

export default function GroupLandmarks() {
  return (
    <>
      <section id="landmarks" className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/losangeles/assets/group/group-travel-la-1280x853.jpg"
            alt="Route map of Los Angeles attractions for group travelers, including Hollywood, Griffith Observatory, and Santa Monica."
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Hollywood &amp; Central LA: The Things Worth Doing as a Group</h2>
          <p className={styles.subheading}>🚶‍♂️ Start with the big ones. Universal Studios Hollywood is a full day, so buy group tickets in advance — group rates save 20%+ and Express passes keep a crowd moving. The Warner Bros. Studio Tour runs 3.5 hours and is excellent for TV and film fans who want something guided together.</p>
          <p className={styles.subheading}>📸 For something more active, escape rooms in WeHo and Hollywood cater to groups of 6–10 and are an easy team activity. Comedy clubs on the Sunset Strip — the Laugh Factory and the Comedy Store — take group reservations if you book ahead.</p>
          <p className={styles.subheading}>🧭 To wind down, Griffith Observatory gives the whole group the city skyline without anyone paying admission, and Barnsdall Art Park is a flat, easy stroll with views if you want a quieter afternoon.</p>
        </div>
      </section>

      <section className={styles.splitSection}>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>The Coast: Beach Days and Things to Do by Season</h2>
          <p className={styles.subheading}>🚶‍♂️ Walk or cycle the Santa Monica to Venice path — about 20 minutes by bike at a group pace, and it puts the ocean beside you the whole way. You come out near the boardwalk, the cafes, and Abbot Kinney.</p>
          <p className={styles.subheading}>📸 The season changes what&apos;s on. In summer there are group surf lessons in Santa Monica (from $100/person) and beach fire pits at sunset (permit required, $45); in spring and fall the weather is mild and the coastal path is far less crowded than peak July.</p>
          <p className={styles.subheading}>🧭 Year-round, the Santa Monica Pier and Venice Boardwalk are free and easy for a group — bike rentals, street performers, and plenty of casual food spots where everyone can order their own.</p>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/losangeles/assets/group/group-travel-la-coast-1280x853.jpg"
            alt="Friends enjoying the Santa Monica beach waterfront with the pier in the background"
            fill
            className={styles.mapImage}
          />
        </div>
      </section>

      <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/losangeles/assets/group/group-travel-la-small-downtown.webp"
            alt="Group of travelers exploring Downtown LA highlights from Grand Central Market to The Broad and the Arts District"
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Downtown LA: Markets, Museums, and Game Nights</h2>
          <p className={styles.subheading}>🏟️ If you can line the trip up with a Dodgers or Lakers home game, group tickets are some of the better value in the city. Crypto.com Arena and Dodger Stadium both handle large groups, and rideshare drop-off beats fighting for parking.</p>
          <p className={styles.subheading}>🚶‍♀️ Grand Central Market is DTLA&apos;s food hall and, locals will tell you, the easiest place to feed a crowd — everyone picks their own stall and meets at a shared table. Book nothing; just show up off-peak.</p>
          <p className={styles.subheading}>🧭 For something quieter, The Broad is a quick, free-admission contemporary art stop (reserve ahead), and the Arts District galleries like Hauser &amp; Wirth rarely get crowded. Both are easy add-ons if you&apos;ve got a half day spare.</p>
        </div>
      </section>
    </>
  );
}
