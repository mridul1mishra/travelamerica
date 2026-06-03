// Server Component — no hooks used.
import Link from "next/link";
import Header from "../../../components/Header/header";
import Footer from "@/app/components/Header/Footer/footer";
import styles from "@/app/destination/city-hub.module.css";

const foodCategories = [
  { title: "Sand Lake Restaurant Row", blurb: "The best independent dining in greater Orlando is concentrated on Sand Lake Road between I-4 and Dr. Phillips Blvd. Highlights: The Ravenous Pig (gastropub, local craft beer, excellent burgers), Dragonfly (Japanese robata, $40–$60pp), Bosphorous Turkish (a local institution for 20+ years), and Slate (modern American, worth a special dinner). All have bar seating and take reservations.", href: "/destination/orlando/bookings?tab=restaurants" },
  { title: "Theme Park Dining Worth It", blurb: "Most theme park food is overpriced and mediocre — but a few are genuinely good. Be Our Guest at Magic Kingdom (lunch walk-up, dinner reservation required) is worth it for the atmosphere. The Wizarding World butterbeer and pumpkin juice at Universal are the real food experiences you can't replicate outside. Epcot's World Showcase pavilions have legitimately good international food — La Cantina de San Angel for Mexican, Tangierine Café for Moroccan.", href: "/destination/orlando/bookings?tab=restaurants" },
  { title: "Disney Springs", blurb: "Disney Springs (free entry) has 60+ dining options from quick service to fine dining. Homecomin' (Southern American, $30–$50pp) is genuinely excellent. STK Orlando (steakhouse rooftop) is the splurge option. Wine Bar George has 130+ wines by the glass. Good for a non-park day when you want Disney atmosphere without the admission price.", href: "/destination/orlando/bookings?tab=restaurants" },
  { title: "Local Breakfast & Coffee", blurb: "The Osprey Tavern in Baldwin Park for weekend brunch (local neighbourhood, beautiful lakefront). Se7en Bites Bakery in Milk District (Downtown Orlando) for extraordinary pastries and biscuits — cash only, arrive early. Lineage Coffee on Mills Ave is the best specialty coffee in Orlando. The Daily City outdoor market in Orlando runs weekend mornings with a dozen food vendors.", href: "/destination/orlando/bookings?tab=restaurants" },
  { title: "Winter Park Food Scene", blurb: "30 minutes north of I-Drive, Winter Park is a proper walkable town with an exceptional restaurant scene. Luma on Park for fine dining ($80–$120pp, book ahead). Prato for Italian in a beautiful Park Avenue setting. The Briarpatch for quintessential Winter Park breakfast and lunch. Hannibal Square has a weekend farmers market every Saturday morning.", href: "/destination/orlando/bookings?tab=restaurants" },
  { title: "Budget & Late Night", blurb: "Hunger Street Tacos on Colonial Dr is the best taco spot in Orlando — open until midnight on weekends. Wawa gas stations (a Florida institution) are open 24 hours with surprisingly good hot food for $5–$8. ICEBAR Orlando on I-Drive is a gimmick ($20 entry) but the adjacent bar has cheap drinks and food until 2am. Downtown Orlando bars on Orange Avenue serve food until midnight on weekends.", href: "/destination/orlando/bookings?tab=restaurants" },
];

export default function OrlandoFoodClient() {
  return (
    <main>
      <Header image="/data/majorcities/orlando/assets/orlando.webp" bannerText="Best Food in Orlando" />
      <section className={styles.hero}>
        <h1>Best Food in Orlando</h1>
        <p>Orlando's food scene extends well beyond theme park food courts. Restaurant Row, Winter Park, and Downtown Orlando have a genuinely strong independent dining scene — this guide covers all of it.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/orlando/bookings?tab=restaurants" className={styles.primaryCta}>Book restaurant reservations</Link>
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
      <div className={styles.bookingStrip}>
        <h2>Book Orlando restaurant reservations</h2>
        <p>Reserve tables at top Orlando restaurants — from Restaurant Row to Disney Springs.</p>
        <Link href="/destination/orlando/bookings?tab=restaurants" className={styles.bookingBtn}>Browse restaurants</Link>
      </div>
      <Footer />
    </main>
  );
}
