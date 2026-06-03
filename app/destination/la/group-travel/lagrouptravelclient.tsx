"use client";
import Link from "next/link";
import Header from "../../../components/Header/header";
import Footer from "@/app/components/Header/Footer/footer";
import styles from "@/app/destination/city-hub.module.css";

const groupTips = [
  { title: "Transport: Rent a Van or Use Rideshare", blurb: "LA has no useful public transit for groups visiting sights. For 6+ people, a 7-seat minivan rental ($80–$130/day) beats coordinating multiple Ubers. Designate one driver. Parking is the recurring cost — budget $15–$30 per stop. For larger groups (12+), charter vans are available from $400/day with a driver." },
  { title: "Accommodation: Houses Beat Hotels for Groups", blurb: "A 4-bedroom house in Silver Lake or Los Feliz sleeps 8 for $300–$500/night total — often cheaper per person than two hotel rooms. Airbnb and VRBO have extensive inventory. For groups that prefer hotels, DTLA has the best per-person value with large suites and central location." },
  { title: "Group Activities That Work Well", blurb: "Universal Studios Hollywood (book group rates, save 20%+). Warner Bros. Studio Tour is 3.5 hours and excellent for TV/film fans. Escape rooms in WeHo and Hollywood cater to groups of 6–10. Group surf lessons in Santa Monica from $100/person. Comedy clubs on the Sunset Strip (Laugh Factory, Comedy Store) have group reservations." },
  { title: "Restaurants for Large Groups", blurb: "Most LA restaurants cannot seat groups of 8+ without a reservation. Book at least a week ahead for groups. Best options: Mastro's Steakhouse (private rooms available), Nobu (large tables), or a Koreatown BBQ restaurant where communal grilling is built into the format. Grand Central Market works well for groups as everyone picks their own stall." },
  { title: "Bachelorette & Birthday Groups", blurb: "WeHo is the primary bachelorette and birthday strip — Abbey Road, Pump, and Delilah are the anchor venues. Book table service 2–3 weeks in advance. Studio tours and private cooking classes are popular daytime add-ons. Santa Monica beach fire pits (permit required, $45) are a sunset option." },
  { title: "Day Trip Logistics for Groups", blurb: "Disneyland in Anaheim (45 min, buy Genie+ for $25–$35/person to skip lines). Universal City Walk adjacent to the park is free to walk. Santa Barbara is a natural 1-day trip — 1.5 hrs, easy parking, walkable wine district. Split your group by interest and meet at a midpoint if preferences diverge." },
];

export default function LAGroupTravelClient() {
  return (
    <main>
      <Header image="/data/majorcities/losangeles/assets/losangeles.jpeg" bannerText="Los Angeles Group Travel Guide" />
      <div className={styles.slimCta}>
        <span className={styles.slimCtaText}>Book group tickets, tours and accommodations →</span>
        <Link href="/destination/la/bookings?tab=activities" className={styles.slimCtaBtn}>Book group activities</Link>
      </div>
      <section className={styles.hero}>
        <h1>Los Angeles Group Travel Guide</h1>
        <p>LA works well for groups — if you plan the logistics. A car-dependent city with no reliable transit means coordination matters. This guide covers transport, accommodation, and the group activities that actually work.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/la/bookings?tab=hotels" className={styles.primaryCta}>Find group accommodation</Link>
          <Link href="/destination/la/itinerary" className={styles.secondaryCta}>See LA itinerary</Link>
        </div>
      </section>
      <section className={styles.section} aria-labelledby="group-tips-la">
        <h2 id="group-tips-la" className={styles.sectionTitle}>Planning a Group Trip to LA</h2>
        <p className={styles.sectionIntro}>Six areas that make or break a group LA trip — covered honestly.</p>
        <div className={styles.grid}>
          {groupTips.map(({ title, blurb }) => (
            <article key={title} className={styles.card}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{blurb}</p>
            </article>
          ))}
        </div>
      </section>
      <div className={styles.bookingStrip}>
        <h2>Book your LA group trip</h2>
        <p>Group hotel blocks, bulk activity tickets, and charter transport — all in one place.</p>
        <Link href="/destination/la/bookings" className={styles.bookingBtn}>Book group travel</Link>
      </div>
      <Footer />
    </main>
  );
}
