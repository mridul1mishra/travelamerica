// Server Component — no hooks used.
import Link from "next/link";
import Header from "../../../components/Header/header";
import Footer from "@/app/components/Header/Footer/footer";
import styles from "@/app/destination/city-hub.module.css";

const groupTips = [
  { title: "Vacation Rental Houses Beat Hotels for Groups", blurb: "Greater Orlando — particularly Kissimmee and the Four Corners area — has thousands of private homes with pools available on VRBO and Airbnb. A 4-bedroom house with a private pool rents for $150–$350/night total, sleeping 8–10 people. This beats 4 separate hotel rooms on cost and adds a home base with a kitchen (significant savings on meals). Book 3–6 months ahead for peak season." },
  { title: "Disney Group Ticket Strategy", blurb: "Disney does not offer traditional group discounts, but buying tickets in advance locks in lower date-based pricing. Groups of 10+ visiting as part of a school, non-profit, or youth organization qualify for special group pricing — call Disney's group sales line directly. For corporate groups, Disney offers private event packages. Genie+ ($25–$35/person/day) is worth it for groups who want to maximize park time." },
  { title: "Universal Group Discounts", blurb: "Universal offers group rates for parties of 15+ — contact their group sales team directly for pricing (typically 15–25% off rack rates). Annual passholder discounts also apply if any group members have passes. Groups of all ages should use single-rider queues on any ride where group members split off by preference — dramatically reduces overall wait time." },
  { title: "Transport for Groups", blurb: "Disney's free transportation (buses, monorail, boat) handles all movement between Disney properties if you stay on a Disney hotel. For Universal or multi-park days, a rented 7–12 seat minivan ($80–$140/day) is more flexible than coordinating multiple Ubers. Free parking at Disney parks is included with Disney hotel stays — a $35/day saving for non-guests." },
  { title: "Group Dining at Theme Parks", blurb: "Disney restaurant reservations open 60 days in advance — book the day they open for popular table-service restaurants (Be Our Guest, Cinderella's Royal Table, Space 220). Universal doesn't require reservations for most restaurants but Mythos in Islands of Adventure fills up — arrive at opening. For groups of 15+, Disney and Universal both have group dining packages — contact group sales directly." },
  { title: "Managing Different Ages & Interests", blurb: "Split-party strategies work well in Orlando. Disney's Child Swap (Rider Switch) program lets adults take turns on thrill rides while one stays with young children — no need to wait in line twice. At Universal, the two-park setup naturally divides age groups — younger kids favour Studios, older teens love Islands of Adventure. Designate a meeting point and time before splitting at any park." },
];

export default function OrlandoGroupTravelClient() {
  return (
    <main>
      <Header image="/data/majorcities/orlando/assets/orlando.webp" bannerText="Orlando Group Travel Guide" />
      <div className={styles.slimCta}>
        <span className={styles.slimCtaText}>Book group park tickets, hotels and activities →</span>
        <Link href="/destination/orlando/bookings?tab=activities" className={styles.slimCtaBtn}>Book group activities</Link>
      </div>
      <section className={styles.hero}>
        <h1>Orlando Group Travel Guide</h1>
        <p>Orlando is one of America's most popular group destinations — and one of the most logistically complex. Vacation rentals, park ticket strategies, and transport planning make or break a group trip. This guide covers all of it.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/orlando/bookings?tab=hotels" className={styles.primaryCta}>Find group accommodation</Link>
          <Link href="/destination/orlando/itinerary" className={styles.secondaryCta}>See Orlando itinerary</Link>
        </div>
      </section>
      <section className={styles.section} aria-labelledby="group-tips-or">
        <h2 id="group-tips-or" className={styles.sectionTitle}>Planning a Group Trip to Orlando</h2>
        <p className={styles.sectionIntro}>Six areas that make or break a group Orlando trip — covered honestly.</p>
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
        <h2>Book your Orlando group trip</h2>
        <p>Group vacation rentals, bulk park tickets, and transport for Orlando.</p>
        <Link href="/destination/orlando/bookings" className={styles.bookingBtn}>Book group travel</Link>
      </div>
      <Footer />
    </main>
  );
}
