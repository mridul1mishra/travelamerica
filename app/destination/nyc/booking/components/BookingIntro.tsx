import styles from "./BookingIntro.module.css";

export default function BookingIntro() {
  return (
    <section className={styles.intro}>
      <h2 className={styles.heading}>Book your New York City trip</h2>
      <p className={styles.text}>
        NYC hotels price unpredictably - the same room can swing 40% depending on the week.
        Avoid booking over major events (UN General Assembly in September, NYC Marathon in
        November, Fashion Week in February and September). Mid-January through March and
        late August are the lowest-demand windows; expect 25-35% below peak rates.
      </p>
      <ul className={styles.list}>
        <li>
          <strong>Flights:</strong> JFK and EWR typically beat LGA on international and long-haul routes.
          Book 6-8 weeks ahead for domestic, 10-14 weeks for transatlantic.
        </li>
        <li>
          <strong>Hotels:</strong> Stay near a subway express stop (1/2/3 on the West Side; 4/5/6 on
          the East Side; A/C/E for Midtown West) - you&apos;ll save time every day.
        </li>
        <li>
          <strong>Activities:</strong> Book Empire State Building and Statue of Liberty ferry tickets at
          least 3-5 days ahead. TKTS in Times Square sells same-day Broadway discounts from 30-50% off.
        </li>
      </ul>
    </section>
  );
}
