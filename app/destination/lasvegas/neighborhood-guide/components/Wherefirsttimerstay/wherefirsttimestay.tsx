import styles from './wherefirsttimerstay.module.css';

export default function WhereFirstTimersStay() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Where First‑Time Visitors Usually Stay</h2>

      <p className={styles.copy}>
        Mid-Strip for first visits. The Cosmopolitan, Aria, and Park MGM are the best-positioned
        hotels — walkable to the Bellagio, the High Roller, and the best restaurants without needing
        a rideshare for most evenings. Room rates swing dramatically: $80–$120/night on weekdays,
        $250–$400/night on weekends for the same room. Book weekday stays to maximize value.
      </p>

      <p className={styles.copy}>
        For solo travelers: Mid-Strip hotel bars are genuinely welcoming for solo guests. The
        Cosmopolitan&rsquo;s Chandelier Bar, Wynn&rsquo;s casino floor bars, and the bar programs at most
        Aria restaurants have counter seating built for one. Solo bar dining at a celebrity-chef
        room is one of the best value moves on the Strip — often same-day availability and no
        group minimum.
      </p>

      <p className={styles.subtle}>
        Budget pick: Downtown/Fremont Street runs 50–60% less than equivalent Strip properties
        on weekends. The Golden Nugget and Downtown Grand are the best anchors, with the Fremont
        Street Experience right outside and a 10-minute rideshare to Mid-Strip.
      </p>
    </section>
  );
}
