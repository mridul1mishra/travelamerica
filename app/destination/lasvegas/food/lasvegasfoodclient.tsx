// Server Component — no hooks used.
import Link from "next/link";
import Header from "../../../components/Header/header";
import Footer from "@/app/components/Header/Footer/footer";
import styles from "@/app/destination/city-hub.module.css";

const foodCategories = [
  { title: "Celebrity Chef Restaurants", blurb: "Las Vegas has more celebrity chef outposts per square mile than anywhere on earth. The ones worth the price: Gordon Ramsay Fish & Chips at The LINQ ($15–$25, casual), Nobu at Caesars ($80–$120pp), Joël Robuchon at MGM Grand (one of America's best tasting menus, $150–$350pp). Book 2–4 weeks ahead for dinner seatings.", href: "/destination/lasvegas/bookings?tab=restaurants" },
  { title: "Buffets: The Honest Assessment", blurb: "The era of great cheap Vegas buffets is mostly over. Wicked Spoon at The Cosmopolitan ($32–$50) remains excellent — quality ingredients, smaller portions. Bacchanal Buffet at Caesars ($50–$70) is the most famous. The $10–$15 buffets at off-Strip casinos (Palace Station, Gold Coast) are what the old Vegas buffet actually was.", href: "/destination/lasvegas/bookings?tab=restaurants" },
  { title: "Best Cheap Eats", blurb: "In-N-Out Burger at multiple Strip-adjacent locations (open late, under $10). Secret Pizza at The Cosmopolitan — a hidden pizza spot on the 3rd floor mezzanine, $6–$9 a slice, no signage, worth finding. Eggslut in The Cosmopolitan for breakfast ($12–$16). Donut Bar Downtown for late-night sugar.", href: "/destination/lasvegas/bookings?tab=restaurants" },
  { title: "Fremont Street & Downtown Eats", blurb: "Downtown Container Park has 20+ food vendors and is one of the better food destinations off the Strip. Hugo's Cellar at the Four Queens is a classic old-school Vegas supper club experience ($60–$80pp). Carson Kitchen on Carson Ave is the best mid-range restaurant Downtown. Good Times Burgers is a local chain with excellent smash burgers.", href: "/destination/lasvegas/bookings?tab=restaurants" },
  { title: "Food Halls", blurb: "Eataly at Park MGM has 18 stations covering Italian food from pasta to gelato — flexible pricing, self-guided, excellent for groups with different appetites ($15–$40pp). The Cosmopolitan's Chelsea food hall has 6 options on one floor. Wynn's food court is a hidden gem for quality quick service.", href: "/destination/lasvegas/bookings?tab=restaurants" },
  { title: "Late Night Food", blurb: "Las Vegas restaurants run until 2–4am or later. Secret Pizza (Cosmopolitan, until 3am). The Peppermill Restaurant & Fireside Lounge — a 24-hour diner on the Strip with enormous portions and retro Vegas atmosphere, open since 1972. Tacos El Gordo on the Strip is the best late-night taco option — a local favourite, open until 4am on weekends.", href: "/destination/lasvegas/bookings?tab=restaurants" },
];

export default function LasVegasFoodClient() {
  return (
    <main>
      <Header image="/data/majorcities/lasvegas/assets/lasvegas.webp" bannerText="Best Food in Las Vegas" />
      <section className={styles.hero}>
        <h1>Best Food in Las Vegas</h1>
        <p>Las Vegas has evolved from buffet city to one of America's most serious dining destinations. The challenge is knowing what is worth the price and what is trading on a famous name. This guide covers both ends of the spectrum.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/lasvegas/bookings?tab=restaurants" className={styles.primaryCta}>Book restaurant reservations</Link>
          <Link href="/destination/lasvegas/itinerary" className={styles.secondaryCta}>See Las Vegas itinerary</Link>
        </div>
      </section>
      <section className={styles.section} aria-labelledby="food-lv">
        <h2 id="food-lv" className={styles.sectionTitle}>Where to Eat in Las Vegas</h2>
        <p className={styles.sectionIntro}>Six categories covering the full range — from $6 secret pizza to $300 tasting menus.</p>
        <div className={styles.grid}>
          {foodCategories.map(({ title, blurb, href }) => (
            <Link key={title} href={href} className={styles.card} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{blurb}</p>
            </Link>
          ))}
        </div>
      </section>
      <div className={styles.bookingStrip}>
        <h2>Book Las Vegas restaurant reservations</h2>
        <p>Reserve tables at top Las Vegas restaurants before they sell out.</p>
        <Link href="/destination/lasvegas/bookings?tab=restaurants" className={styles.bookingBtn}>Browse restaurants</Link>
      </div>
      <Footer />
    </main>
  );
}
