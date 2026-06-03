import Link from "next/link";
import Header from "@/app/components/destination/header/header";
import Footer from "@/app/components/Header/Footer/footer";
import BookingCTA from "@/app/components/destination/BookingCTA/BookingCTA";
import styles from "@/app/destination/city-hub.module.css";

const groupTips = [
  { title: "Bachelor & Bachelorette Trips", blurb: "Las Vegas is the default bachelor/bachelorette destination for a reason. For parties of 6–15, book a penthouse suite at the Cosmopolitan, Palms, or Encore — group suite rates exist and are negotiable. VIP table service at XS (Encore), Hakkasan (MGM), or Omnia (Caesars) costs $1,000–$5,000 minimum spend but includes premium bottle service. Book shows, dinners, and club tables at least 4–6 weeks ahead." },
  { title: "Group Hotel Strategy", blurb: "Las Vegas hotels specialize in group bookings — call the hotel directly rather than booking online for groups of 5+ rooms. Group rates are typically 15–25% cheaper than rack rates and may include complimentary upgrades. Mid-Strip properties (Cosmopolitan, Aria, Vdara) have the best group suite inventory. For groups of 12+, villa rentals in Summerlin or Henderson ($500–$1,500/night for the whole house) beat multiple hotel rooms on price." },
  { title: "Group Activities That Work", blurb: "Cirque du Soleil group bookings (10+ save 20%). Grand Prix racing at the Speedway (group packages available). Cooking classes at the Cosmopolitan's cooking school. Escape rooms downtown handle groups of 6–10. Helicopter tours to the Grand Canyon West Rim have group pricing and are a unique group memory. Pool parties at Encore Beach Club are designed for groups." },
  { title: "Getting the Whole Group Around", blurb: "The Strip is walkable for most groups. For off-Strip trips (Hoover Dam, Red Rock), rent a 7- or 12-seat van ($80–$150/day) and designate a driver. Charter van services with a driver are available from $400/day. The Las Vegas Monorail handles strip-to-strip movement cheaply ($5/ride or $15 day pass). Avoid coordinating individual Ubers for groups of 8+ — the logistics compound quickly." },
  { title: "Group Dining Logistics", blurb: "Most Strip restaurants accommodate large parties with advance booking. Nobu, Gordon Ramsay's restaurants, and Eataly at Park MGM all take group reservations. For groups of 12+, Wicked Spoon buffet at the Cosmopolitan is the highest-quality self-managed option. Korean BBQ at Jang Guem Tofu & BBQ (off-Strip, 30-person private rooms) is an excellent group dinner format." },
  { title: "Cost Management for Groups", blurb: "Resort fees ($35–$50/night per room) are the hidden cost that catches groups off-guard. Always calculate the full nightly rate including fees before comparing hotels. Pre-negotiate with the hotel: groups of 10+ rooms sometimes get fees waived entirely. Split costs using Splitwise or Venmo from day one — ambiguity about who owes what is the most common group trip friction." },
];

export default function LasVegasGroupTravelClient() {
  return (
    <main>
      <Header links={[
        { href: "/destination/lasvegas/best-areas-to-stay", label: "Best Areas to Stay" },
        { href: "/destination/lasvegas/solo-trip-to-lasvegas", label: "Solo Trip to Las Vegas" },
        { href: "/destination/lasvegas/safety-guide", label: "Las Vegas Safety" },
        { href: "/destination/lasvegas/lasvegas-female-solo-travel-guide", label: "Female Travel Guide" },
      ]} />
      <BookingCTA
        variant="slim"
        text="Book group tickets, shows and accommodation →"
        href="/destination/lasvegas/bookings?tab=activities"
        label="Book group activities"
      />
      <section className={styles.hero}>
        <h1>Las Vegas Group Travel Guide</h1>
        <p>Las Vegas is built for groups. The challenge is managing the logistics — hotel negotiations, group activity booking, transport, and cost splitting — without the trip falling apart before it starts. This guide covers all of it.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/lasvegas/bookings?tab=hotels" className={styles.primaryCta}>Find group accommodation</Link>
          <Link href="/destination/lasvegas/itinerary" className={styles.secondaryCta}>See Las Vegas itinerary</Link>
        </div>
      </section>
      <section className={styles.section} aria-labelledby="group-tips-lv">
        <h2 id="group-tips-lv" className={styles.sectionTitle}>Planning a Group Trip to Las Vegas</h2>
        <p className={styles.sectionIntro}>Six areas that make or break a group Las Vegas trip — covered honestly.</p>
        <div className={styles.grid}>
          {groupTips.map(({ title, blurb }) => (
            <article key={title} className={styles.card}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{blurb}</p>
            </article>
          ))}
        </div>
      </section>
      <BookingCTA
        variant="full"
        headline="Book your Las Vegas group trip"
        text="Group hotel blocks, bulk show tickets, and charter transport for Las Vegas."
        href="/destination/lasvegas/bookings"
        label="Book group travel"
      />
      <Footer />
    </main>
  );
}
