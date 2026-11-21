import Link from "next/link";
import styles from "./editorial.module.css";
import Byline from "@/app/components/Byline/Byline";

// Copy revised after an outside fact-check against attraction and operator sites.
// Re-confirm before deploy: Met admission categories, sightseeing pass names and
// terms (CityPASS, C3, Go City), and Empire State Building reservation rules.
// Add first-hand notes where possible.
export default function ToursGuide() {
  return (
    <section className={styles.wrap} aria-labelledby="nyc-tours-heading">
      <h2 id="nyc-tours-heading">Planning NYC tours and tickets without overbooking</h2>
      <Byline updated="November 2026" />
      <p className={styles.lead}>
        Some major New York attractions use timed entry, and popular time slots can sell out in
        advance, especially at busy times. Booking rules vary, so check the attraction&apos;s official
        site before you build the rest of the day around it.
      </p>

      <div className={styles.block}>
        <h3>Book ahead, or decide on the day?</h3>
        <ul className={styles.list}>
          <li>
            <strong>Consider booking ahead:</strong> timed observation decks, a specific Broadway
            performance you do not want to miss, and museums that recommend or require reservations.
            At the Empire State Building, timed reservations are required, and the attraction
            recommends booking sunrise and sunset visits early. Sunrise experiences are offered only
            on select dates.
          </li>
          <li>
            <strong>Check individually:</strong> museum and self-guided-tour policies vary. The Met
            does not require advance tickets, while other attractions recommend advance booking or
            use timed admission.
          </li>
        </ul>
      </div>

      <aside className={styles.experience} aria-labelledby="nyc-edge-heading">
        <h3 id="nyc-edge-heading">Our experience: visiting Edge at Hudson Yards</h3>
        <p>
          We visited Edge in July 2026. We booked on our phones once we were at Hudson Yards, paid
          around $46 per person, and arrived about five minutes before our scheduled entry time. The
          entrance is on Level 4 of The Shops &amp; Restaurants at Hudson Yards and was easy to find.
          Check-in took only a minute or two, including scanning our mobile tickets and a brief
          security check.
        </p>
        <p>
          A 52-second elevator ride took us up 100 stories to the outdoor sky deck. We took in the
          360-degree views of the skyline, took plenty of photos and walked out onto the glass floor.
          Seeing the city lit up at night was one of the highlights of our trip.
        </p>
        <p>
          <strong>Our tip:</strong> we did not book a sunset slot, but if you can, book one in
          advance. The view feels different after dark, when the skyline lights up, and a sunset
          entry lets you see both daylight and nighttime views.
        </p>
      </aside>

      <div className={styles.block}>
        <h3>Choose by what you want from the day</h3>
        <ul className={styles.list}>
          <li>
            <strong>First visit:</strong> as a planning rule of thumb, one observation deck, one major
            museum and a neighborhood walk can fit into a day if the locations work well together and
            you leave enough time for travel.
          </li>
          <li>
            <strong>Rainy day:</strong> the Metropolitan Museum of Art, the American Museum of Natural
            History and the Guggenheim are major indoor attractions.
          </li>
          <li>
            <strong>Families:</strong> the American Museum of Natural History can fit into a half day
            if you focus on a few priority halls, but allow longer if you want to explore widely. The
            Bronx Zoo is in the Bronx. From Midtown, allowing around an hour door to door by public
            transit is a useful planning estimate, although actual times vary by route, starting
            point, traffic and service conditions. Because of the journey and the size of the zoo,
            consider giving it a substantial part of the day.
          </li>
          <li>
            <strong>On a budget:</strong> start with our{" "}
            <Link href="/destination/nyc/free-things-to-do">free things to do in NYC</Link>.
          </li>
        </ul>
      </div>

      <div className={styles.block}>
        <h3>Check before you pay</h3>
        <ul className={styles.list}>
          <li>
            Check exactly what admission or experiences the ticket includes. For an audio or
            self-guided tour, confirm whether attraction admission is included or needs to be booked
            separately.
          </li>
          <li>
            Check the exact time slot, meeting or entry point, and the cancellation, refund and
            rescheduling terms.
          </li>
          <li>
            Museum admission rules vary. At the Met, pay-what-you-wish admission is available to New
            York State residents and to students from New York, New Jersey and Connecticut. New Jersey
            and Connecticut students must get that admission in person with a valid student ID; online
            pay-what-you-wish purchases require a New York State billing address. Check the
            Met&apos;s official site for current admission categories and other exemptions.
          </li>
          <li>
            Sightseeing passes use different models. Current options include New York CityPASS and New
            York C3 by CityPASS, plus Go City&apos;s Essentials, Explorer and All-Inclusive passes.
            Compare the pass with the direct-ticket cost of the attractions you actually plan to
            visit, taking into account any discounts you qualify for, the pass validity period and
            reservation requirements. Check the operator&apos;s official site for current inclusions
            and terms.
          </li>
          <li>
            As a planning rule of thumb, avoid putting timed reservations too close together. Leave
            enough time for the visit itself, queues and travel between locations.
          </li>
        </ul>
        <p className={styles.links}>
          Keep planning: <Link href="/destination/nyc/things-to-do">Things to do in NYC</Link> ·{" "}
          <Link href="/destination/nyc/landmark">Top NYC landmarks</Link> ·{" "}
          <Link href="/destination/nyc/solo-itinerary">Solo itinerary</Link>
        </p>
      </div>
    </section>
  );
}
