import Link from "next/link";
import styles from "./editorial.module.css";
import Byline from "@/app/components/Byline/Byline";

// Fact-checked 25 Nov 2026 (7 of 7 claims confirmed from the resorts' own pages).
// Area facts reuse the items already confirmed for /destination/lasvegas/best-areas-to-stay
// (25 Nov 2026): north, mid and south Strip resorts, Downtown, Henderson and Summerlin locations.
// Fee and parking examples reuse the 24 Nov 2026 verification, see
// docs/lasvegas-best-areas-fee-verification-2026-11-24.md:
// - Wynn Las Vegas and Encore: resort fee $55 plus tax per night, includes self-parking up to two vehicles
// - The Venetian: resort fee $55 plus tax; self-parking $20 a day for registered guests
// - Golden Nugget Downtown: free self-parking for registered guests
// - Station Casinos (Red Rock Resort, Green Valley Ranch): $62.15 and $62.70, shown as tax-inclusive
// Sources: wynnlasvegas.com/about-us/resort-information; venetianlasvegas.com hotel terms and parking FAQs;
// goldennugget.com FAQ; stationcasinos.com/fee-inclusions; each Downtown hotel's own site. Re-check fees before each deploy.
// The Las Vegas list has no hotel tiers, so no tier section is shown.
export default function HotelGuide() {
  return (
    <section className={styles.wrap} aria-labelledby="lv-hotels-heading">
      <h2 id="lv-hotels-heading">Choosing where to stay in Las Vegas</h2>
      <Byline updated="November 2026" />
      <p className={styles.lead}>
        In Las Vegas the area you pick decides how you get around, and the resort fee and parking
        decide what a room really costs. Most of the hotels in this list are on the Strip, with a
        few Downtown and in the suburbs of Summerlin and Henderson. Choose the area first, then
        compare hotels inside it.
      </p>

      <div className={styles.cards}>
        <article className={styles.card}>
          <span className={styles.tag}>The Strip</span>
          <h3>North, mid and south Strip</h3>
          <p>
            The Strip is where most of the resorts on this list are. Bellagio, The Cosmopolitan,
            Aria and Park MGM sit together in the middle. Mandalay Bay, Luxor, Excalibur and MGM
            Grand are at the south end, and Resorts World, SAHARA and The STRAT are at the north
            end. Which end you choose changes how far you walk to the places you plan to visit.
          </p>
        </article>
        <article className={styles.card}>
          <span className={styles.tag}>Downtown</span>
          <h3>Downtown and Fremont Street</h3>
          <p>
            Downtown is centered on the Fremont Street Experience and is not on the Strip. Hotels
            here include Golden Nugget, The D, Plaza and Downtown Grand. You will need the Deuce
            bus, a rideshare or a car to reach Strip resorts.
          </p>
        </article>
        <article className={styles.card}>
          <span className={styles.tag}>Suburbs</span>
          <h3>Summerlin and Henderson</h3>
          <p>
            Summerlin is on the west side, with Red Rock Resort and Downtown Summerlin, and Red
            Rock Canyon is nearby. Henderson is southeast of the Strip and has Green Valley Ranch.
            Both are a longer trip from the Strip, so most visitors will want a car or rideshare.
          </p>
        </article>
      </div>

      <div className={styles.block}>
        <h3>Before you pay</h3>
        <ul className={styles.list}>
          <li>
            <strong>Check the resort fee.</strong> Many Las Vegas resorts add a daily resort fee on
            top of the room rate, and the amount and what it covers differ by resort. As the resorts
            list them, checked on November 25, 2026, Wynn Las Vegas and Encore list $55 plus tax per
            night, and say it includes self-parking for up to two vehicles, subject to
            availability. The Venetian lists $55 plus tax per night. Station Casinos lists $62.15
            per night at Red Rock Resort and $62.70 per night at Green Valley Ranch, both tax
            inclusive. Resorts can change these, and offers may waive them, so confirm the total on
            your booking before you pay.
          </li>
          <li>
            <strong>Add parking if you are driving.</strong> The Venetian lists $20 a day for
            self-parking for registered hotel guests, and says Sapphire Rewards members and above
            park free. Golden Nugget Downtown lists complimentary self-parking for registered
            guests, though its valet is charged separately. The same car can cost different amounts
            at different resorts.
          </li>
          <li>
            <strong>Check the cancellation terms and the check-in time</strong> before you book a
            non-refundable rate. If you land in the morning, ask about early check-in or bag
            storage rather than assuming the room will be ready.
          </li>
          <li>
            <strong>Plan how you will get from the airport.</strong> See{" "}
            <Link href="/destination/lasvegas/flight">getting from the airport to your hotel</Link>.
          </li>
        </ul>
        <p className={styles.links}>
          Keep planning: <Link href="/destination/lasvegas/best-areas-to-stay">Best areas to stay</Link>{" "}
          · <Link href="/destination/lasvegas/neighborhood-guide">Neighborhood guide</Link> ·{" "}
          <Link href="/destination/lasvegas/safety-guide">Las Vegas safety guide</Link>
        </p>
      </div>
    </section>
  );
}
