import Link from "next/link";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import BookingCTA from "./components/BookingCTA/BookingCTA";
import styles from "@/app/destination/city-hub.module.css";
import FAQAccordion from './components/FAQAccordion/faqsection';
import faqData from '@/content/destination/orlando/food/faq/faqsection.json';

const foodCategories = [
  { title: "Sand Lake Restaurant Row", blurb: "The best independent dining in greater Orlando is concentrated on Sand Lake Road between I-4 and Dr. Phillips Blvd. Highlights: The Ravenous Pig (gastropub, local craft beer, excellent burgers), Dragonfly (Japanese robata, $40–$60pp), Bosphorous Turkish (a local institution for 20+ years), and Slate (modern American, worth a special dinner). All have bar seating and take reservations.", href: "/destination/orlando/tours-and-tickets" },
  { title: "Theme Park Dining Worth It", blurb: "Most theme park food is overpriced and mediocre — but a few are genuinely good. Be Our Guest at Magic Kingdom is table service at both lunch and dinner, and Disney strongly recommends a reservation for every meal \u2014 do not plan on walking up. The Wizarding World butterbeer and pumpkin juice at Universal are the real food experiences you can't replicate outside. Epcot's World Showcase pavilions have legitimately good international food — La Cantina de San Angel for Mexican, Tangierine Café for Moroccan.", href: "/destination/orlando/tours-and-tickets" },
  { title: "Disney Springs", blurb: "Disney Springs (free entry) has 60+ dining options from quick service to fine dining. Homecomin' (Southern American, $30–$50pp) is genuinely excellent. STK Orlando (steakhouse rooftop) is the splurge option. Wine Bar George has 130+ wines by the glass. Good for a non-park day when you want Disney atmosphere without the admission price.", href: "/destination/orlando/tours-and-tickets" },
  { title: "Local Breakfast & Coffee", blurb: "The Osprey Tavern in Baldwin Park for weekend brunch (local neighbourhood, beautiful lakefront). Se7en Bites Bakery in Milk District (Downtown Orlando) for extraordinary pastries and biscuits — cash only, arrive early. Lineage Coffee on Mills Ave is the best specialty coffee in Orlando. The Daily City outdoor market in Orlando runs weekend mornings with a dozen food vendors.", href: "/destination/orlando/tours-and-tickets" },
  { title: "Winter Park Food Scene", blurb: "30 minutes north of I-Drive, Winter Park is a proper walkable town with an exceptional restaurant scene. Luma on Park for fine dining ($80–$120pp, book ahead). Prato for Italian in a beautiful Park Avenue setting. The Briarpatch for quintessential Winter Park breakfast and lunch. Hannibal Square has a weekend farmers market every Saturday morning.", href: "/destination/orlando/tours-and-tickets" },
  { title: "Budget & Late Night", blurb: "Hunger Street Tacos on Colonial Dr is the best taco spot in Orlando — open until midnight on weekends. Wawa gas stations (a Florida institution) are open 24 hours with surprisingly good hot food for $5–$8. ICEBAR Orlando on I-Drive is a gimmick ($20 entry) but the adjacent bar has cheap drinks and food until 2am. Downtown Orlando bars on Orange Avenue serve food until midnight on weekends.", href: "/destination/orlando/tours-and-tickets" },
];

export default function OrlandoFoodClient() {
  return (
    <main>
      <Header links={[
        { href: "/destination/orlando/best-areas-to-stay", label: "Best Areas to Stay" },
        { href: "/destination/orlando/solo-trip-to-orlando", label: "Solo Trip to Orlando" },
        { href: "/destination/orlando/safety-guide", label: "Orlando Safety" },
        { href: "/destination/orlando/orlando-female-solo-travel-guide", label: "Female Travel Guide" },
      ]} />
      <section className={styles.hero}>
        <h1>Best Food in Orlando</h1>
        <p>Orlando&apos;s food scene extends well beyond theme park food courts. Restaurant Row, Winter Park, and Downtown Orlando have a genuinely strong independent dining scene — this guide covers all of it.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/orlando/tours-and-tickets" className={styles.primaryCta}>Book restaurant reservations</Link>
          <Link href="/destination/orlando/neighborhood-guide" className={styles.secondaryCta}>Explore neighborhoods</Link>
        </div>
      </section>
      <section className={styles.section} aria-labelledby="food-or">
        <h2 id="food-or" className={styles.sectionTitle}>Where to Eat in Orlando</h2>
        <p className={styles.sectionIntro}>Six categories covering the full range — from theme park splurges to $5 late-night tacos.</p>
        <div className={styles.grid}>
          {foodCategories.map(({ title, blurb, href }) => (
            <Link key={title} href={href} className={styles.card} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{blurb}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className={styles.section} aria-labelledby="orl-food-practical">
        <h2 id="orl-food-practical" className={styles.sectionTitle}>Eating outside the parks: the practical details</h2>
        <p className={styles.sectionIntro}>Where to eat is a matter of taste. When places open, what they cost to reach and whether you can pay cash are not, and those are what derail a plan. Everything below comes from the operators themselves.</p>
        <div className={styles.grid}>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Two farmers markets, two different days</h3>
            <p className={styles.cardBody}>The Orlando Farmers Market at Lake Eola Park runs Sundays from 10am to 3pm and is free to attend. The Winter Park Farmers Market runs Saturdays from 8am to 1pm in the West Meadow of Central Park, at the corner of New York Avenue and Morse Boulevard &mdash; though a few times a year it moves to Seven Oaks Park for major events, so check before you go. Between them you can do one on each weekend day.</p>
            <p className={styles.cardMeta}>Sources: City of Orlando; City of Winter Park</p>
          </article>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Parking at Lake Eola is free on the street</h3>
            <p className={styles.cardBody}>Free on-street parking, metered spaces included, is available within walking distance of the Lake Eola market. Paid garages sit on South Osceola Avenue and North Eola Drive if the street is full, and the city signs the way to the nearest one. Worth knowing before you pay for a garage you did not need.</p>
            <p className={styles.cardMeta}>Source: City of Orlando</p>
          </article>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>East End Market opens early and closes late</h3>
            <p className={styles.cardBody}>The Market Hall at 3201 Corrine Drive, in the Audubon Park Garden District, is open 8am to 7pm Monday to Thursday, 8am to 9pm Friday and Saturday, and 8am to 6pm on Sunday. The building opening and the stalls opening are two different things, though: the market says merchants are generally all trading from 10am to 7pm Monday to Saturday and 11am to 6pm on Sunday. Turn up at 8am and you will find the doors open and most counters shut.</p>
            <p className={styles.cardMeta}>Source: East End Market</p>
          </article>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>The I-RIDE Trolley, and why you need coins</h3>
            <p className={styles.cardBody}>If you are staying on International Drive, the I-RIDE Trolley runs daily from 8am to 10:30pm and reaches most of the restaurants along it. A single ride is $2.00 for adults, $1.00 for children aged 3 to 9 travelling with a paying adult, free for under-3s, and 25 cents for over-65s. A one-day unlimited pass is $8.00. Exact change is required and drivers carry no cash, so sort that out before you board.</p>
            <p className={styles.cardMeta}>Source: International Drive Resort Area</p>
          </article>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>How the independents handle bookings</h3>
            <p className={styles.cardBody}>The rules vary more than you would expect, and several of the best-known places do not take bookings the way you would assume. Se7enBites in the Milk District takes no reservations and no call-ahead seating at all &mdash; you arrive and join the queue. Santiago&apos;s Bodega recommends booking but takes walk-ins when it has room, and its reservation system only accepts requests three or more hours ahead; anything later is treated as a walk-in. The Glass Knife asks for 48 hours&apos; notice for groups of up to 14 and takes a card to hold the booking, with larger parties handled separately.</p>
            <p className={styles.cardMeta}>Sources: the restaurants&apos; own booking pages</p>
          </article>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Weekend brunch and the hours that catch people out</h3>
            <p className={styles.cardBody}>Santiago&apos;s Bodega serves weekend brunch from 10am to 3pm at $49.95 for adults, $20 for children aged 5 to 12 and free for under-5s, with a two-hour limit on the table. The Ravenous Pig in Winter Park does brunch 11am to 3pm at weekends, then runs drinks only from 3pm to 5pm &mdash; so a late lunch there does not work &mdash; and closes on Mondays. Santiago&apos;s also lists two happy hours a day, 4pm to 6pm and again from 11pm to 1am, with selected tapas at $5.</p>
            <p className={styles.cardMeta}>Sources: the restaurants&apos; own menus and listings</p>
          </article>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Not everywhere takes cash</h3>
            <p className={styles.cardBody}>The Glass Knife is cashless at both its Winter Park sites, taking cards, contactless and its own gift cards only. Its Orlando Avenue location stays open until 11pm on Fridays and Saturdays, against 10pm the rest of the week, and walk-ins can join a digital waitlist rather than queueing in person. Worth checking before you count on paying with notes anywhere outside the parks.</p>
            <p className={styles.cardMeta}>Source: The Glass Knife</p>
          </article>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Cash still works at Disney, not at SeaWorld</h3>
            <p className={styles.cardBody}>This one is often reported wrongly. SeaWorld Orlando and Aquatica went cashless on 30 August 2023, and provide free cash-to-card kiosks for guests who arrive with notes. Walt Disney World, by contrast, still accepts cash at most locations and has no blanket cashless policy. So the advice to leave cash at the hotel applies to some parks and not others.</p>
            <p className={styles.cardMeta}>Based on operator announcements; confirm before relying on it</p>
          </article>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Districts you can walk into without a ticket</h3>
            <p className={styles.cardBody}>Disney Springs and Universal CityWalk are both dining and shopping districts you can enter without a theme park ticket, which makes them the easy answer on a non-park evening. Disney Springs lists more than 60 dining locations. Parking rules at both change periodically, so check the current arrangement rather than assuming last year&apos;s applies.</p>
            <p className={styles.cardMeta}>Based on operator listings; parking terms change</p>
          </article>
        </div>
        <p className={styles.sectionIntro}>Hours and fares change, and the markets in particular move for public holidays and events. Check the operator before building a morning around one.</p>
      </section>
      <BookingCTA
        variant="full"
        headline="Book Orlando restaurant reservations"
        text="Reserve tables at top Orlando restaurants — from Restaurant Row to Disney Springs."
        href="/destination/orlando/tours-and-tickets"
        label="Browse restaurants"
      />
      <FAQAccordion faqs={faqData} />
      <Footer />
    </main>
  );
}
