import styles from './SoloOrlandoQa.module.css';

export default function SoloOrlandoQa() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Essential Solo Travel Tips for Orlando</h2>

      <article className={styles.card}>
        <h3 className={styles.question}>Can You Travel to Orlando Alone?</h3>
        <p className={styles.answer}>
          Yes — Orlando is very manageable as a solo destination. The theme parks run
          efficiently for single visitors, single-rider lines cut wait times significantly,
          and the city&apos;s tourism infrastructure means hotels, transport, and dining are all
          set up to handle solo travellers without any friction.
        </p>
      </article>

      <article className={styles.card}>
        <h3 className={styles.question}>Solo Trip to Orlando: What You Should Know</h3>
        <p className={styles.answer}>
          A solo Orlando trip works best when you choose a base that matches your
          priorities: International Drive for walkable access to attractions, Disney
          property for seamless park visits, or downtown for a local neighbourhood feel.
          Sorting out transport early — rental car, rideshare, or staying on-property —
          is the single biggest decision that shapes the whole trip.
        </p>
      </article>

      <article className={styles.card}>
        <h3 className={styles.question}>Is Orlando Safe for Solo Female Travellers (2025&ndash;2026)?</h3>
        <p className={styles.answer}>
          Yes, Orlando is generally safe for solo female travellers in 2025&ndash;2026,
          especially within the tourist corridors of I-Drive, Disney, and Universal.
          Standard precautions apply after dark: stick to well-lit, busy areas,
          use rideshare rather than walking alone at night, and trust hotel security
          over Airbnb for your first visit.
        </p>
      </article>

      <article className={styles.card}>
        <h3 className={styles.question}>Is Orlando Good for Solo Travel?</h3>
        <p className={styles.answer}>
          Orlando is excellent for solo travel if you lean into what it does best:
          theme parks, food culture, and outdoor springs. The main trade-off is that
          it&apos;s a family-oriented destination, so you&apos;ll want to mix in some
          adult-focused venues — CityWalk, the Milk District, and Audubon Park &mdash;
          to balance the itinerary and meet other travellers.
        </p>
      </article>
    </section>
  );
}
