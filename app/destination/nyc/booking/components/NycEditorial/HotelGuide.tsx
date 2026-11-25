import Link from "next/link";
import styles from "./editorial.module.css";
import Byline from "@/app/components/Byline/Byline";

// Sources used for the bookable facts below (re-check before deploy):
// - NYC DCWP rule on hotel fees and card holds, in effect 21 Feb 2026
//   https://www.nyc.gov/site/dca/news/007-26/mamdani-administration-bans-hotel-hidden-fees-and-unexpected-credit-card-holds
// - NYC hotel room occupancy tax, per-room daily charge
//   https://www.nyc.gov/site/finance/business/business-hotel-room-occupancy-tax.page
// - NY State hotel occupancy bulletin, $1.50 per unit per day
//   https://www.tax.ny.gov/pubs_and_bulls/tg_bulletins/st/hotel_and_motel_occupancy.htm
// Neighborhood notes describe location only, not walking distance or safety.
export default function HotelGuide() {
  return (
    <section className={styles.wrap} aria-labelledby="nyc-hotels-heading">
      <h2 id="nyc-hotels-heading">Choosing where to stay in New York</h2>
      <Byline updated="November 2026" />
      <p className={styles.lead}>
        In New York the neighborhood decides more about your trip than the room does. A cheaper
        room an hour from where you plan to spend your days usually costs you more in subway time
        and taxi fares than you saved. Start with the area, then compare rooms inside it.
      </p>

      <div className={styles.cards}>
        <article className={styles.card}>
          <span className={styles.tag}>Manhattan, central</span>
          <h3>Midtown and Times Square</h3>
          <p>
            Where most of the hotels in this list sit. It puts you in the Theater District and near
            Penn Station and Grand Central, so it is the easiest base for day trips out of the city
            and for arriving by train. It is also the busiest and noisiest part of Manhattan, and
            rooms tend to be small for the price.
          </p>
        </article>

        <article className={styles.card}>
          <span className={styles.tag}>Manhattan, uptown</span>
          <h3>Central Park South and the Upper East and West Sides</h3>
          <p>
            Quieter and more residential, along the park. The American Museum of Natural History is
            on the Upper West Side and the Metropolitan Museum of Art on the Upper East Side, so
            this suits a museum-led trip. Expect a longer ride to downtown sights.
          </p>
        </article>

        <article className={styles.card}>
          <span className={styles.tag}>Manhattan, downtown</span>
          <h3>Chelsea, NoMad, Tribeca and the Financial District</h3>
          <p>
            South of Midtown, closer to the High Line, the 9/11 Memorial and the ferries. The
            Financial District is busiest on weekdays and quieter at weekends, which can mean lower
            weekend rates than Midtown for the same standard of room.
          </p>
        </article>
      </div>

      <div className={styles.block}>
        <h3>How we assign Standard, Premium and Luxury</h3>
        <p>
          The tier on each hotel card is our own assessment, not a star rating and not the
          hotel&apos;s own marketing. Each hotel is scored from published hotel and operator
          information, such as the hotel&apos;s own pages. We do not accept payment for inclusion or
          for a higher tier. We score five areas, with these weights:
        </p>
        <ul className={styles.list}>
          <li>
            <strong>Rooms and bathrooms (30%):</strong> from minimal provision to documented
            upgrades in bedding, materials and bathroom fixtures.
          </li>
          <li>
            <strong>Guest service (30%):</strong> from reception and basic housekeeping to a staffed
            concierge, in-room dining and individually tailored help.
          </li>
          <li>
            <strong>Dining (15%):</strong> from no property-run dining to multiple venues and
            in-room dining.
          </li>
          <li>
            <strong>Wellness and facilities (15%):</strong> from no guest facilities to an equipped
            fitness center, a pool or staffed treatments.
          </li>
          <li>
            <strong>Design and finish (10%):</strong> from functional, conventional rooms to
            documented high-quality finishes across the property.
          </li>
        </ul>
        <p>
          Each area is rated from 0 to 4 against a written description, and the ratings combine
          into a score out of 100. A hotel scoring under 50 is labelled <strong>Standard</strong>.
          A score of 50 or more is <strong>Premium</strong>. A score of 75 or more is{" "}
          <strong>Luxury</strong>, but only if the hotel also rates at least 3 out of 4 for both
          rooms and guest service. We assess a hotel&apos;s regular offering across the property, so
          a suite-only or special-floor perk does not raise the label for every room.
        </p>
        <p>
          If we cannot find published information for one of the five areas, we leave that area
          out of the score instead of counting it as zero, and we mark the tier as provisional.
          Treat a provisional tier as a starting point and read the hotel&apos;s own page before
          you book.
        </p>
        <p className={styles.links}>
          Deciding on an area first? See our{" "}
          <Link href="/destination/nyc/best-areas-to-stay">best areas to stay in NYC</Link> and the{" "}
          <Link href="/destination/nyc/neighborhood-guide">neighborhood guide</Link>.
        </p>
      </div>

      <div className={styles.block}>
        <h3>Before you pay</h3>
        <ul className={styles.list}>
          <li>
            <strong>The advertised price should now be the real one.</strong> Since 21 February 2026
            a New York City rule has required hotels to show the total price of a stay, including
            every mandatory fee, in any price they advertise. That covers the charges often called
            destination, resort or hospitality service fees. The rule also covers surprise credit
            card holds and deposits. It is enforced by the city&apos;s Department of Consumer and
            Worker Protection, so if a mandatory fee only appears at checkout, you have grounds to
            query it.
          </li>
          <li>
            <strong>Tax is on top of that.</strong> A New York City stay carries state and local
            sales tax, the city&apos;s hotel room occupancy tax, a city charge of up to $2 per room
            per night, and a state fee of $1.50 per unit per night. Check whether the price you are
            comparing includes them, because booking sites differ.
          </li>
          <li>
            <strong>Check the room size, not just the photo.</strong> New York rooms are small by
            American standards, and a listing that does not give square footage is often one of the
            smaller ones.
          </li>
          <li>
            <strong>Check the cancellation terms and the check-in time</strong> before you book a
            non-refundable rate. If you land in the morning, ask about early check-in or bag
            storage rather than assuming the room will be ready.
          </li>
        </ul>
        <p className={styles.links}>
          Keep planning: <Link href="/destination/nyc/getting-to-nyc">Getting in from the airport</Link> ·{" "}
          <Link href="/destination/nyc/nyc-safety-guide">NYC safety guide</Link> ·{" "}
          <Link href="/destination/nyc/things-to-do">Things to do in NYC</Link>
        </p>
      </div>
    </section>
  );
}
