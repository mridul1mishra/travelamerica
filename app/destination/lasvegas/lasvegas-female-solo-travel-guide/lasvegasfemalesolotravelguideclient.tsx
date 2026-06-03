// Server Component — no hooks used.
import Link from "next/link";
import Header from "../../../components/Header/header";
import Footer from "@/app/components/Header/Footer/footer";
import styles from "@/app/destination/city-hub.module.css";

const topics = [
  { title: "Overall Safety for Solo Women", blurb: "Las Vegas is generally safe for solo female travelers on the Strip and in major tourist corridors. The Strip is heavily monitored with security, surveillance, and a constant police presence. The main risks are specific: over-drinking, isolated situations off the Strip after midnight, and the occasional aggressive solicitation. Awareness and a few simple rules cover most of it." },
  { title: "Safest Areas to Stay", blurb: "Mid-Strip (Bellagio to MGM Grand corridor) is the safest and most monitored part of the city. Properties like the Cosmopolitan, Aria, Vdara, and Bellagio have exceptional in-house security. The Wynn and Encore on the North Strip are well-regarded for solo women. Avoid the Stratosphere area and off-Strip motels for your first Vegas solo trip." },
  { title: "Casino Safety", blurb: "Keep your chips in sight at all times — never leave them on the table while you look away. Free drinks from casino servers are a feature designed to extend your gambling session — pace yourself. Never leave a drink unattended. Casino floors are extremely well-surveilled by security. If you feel uncomfortable at a table, you can leave without explanation at any time." },
  { title: "Nightlife Safety", blurb: "Las Vegas nightclubs have rigorous ID and bag checks — security is visible and responsive. Solo women are often admitted free or at reduced cover, which can attract unwanted assumptions — be direct about your boundaries. Keep your phone charged (bring a portable charger). Always arrange your rideshare home before you leave the venue, not from the street outside." },
  { title: "Transport & Getting Around", blurb: "Uber and Lyft are the safest option for solo women at night. Always verify the driver's name, photo, and plate before getting in. The Strip is walkable in daylight and early evening. Avoid the back streets of Downtown on foot after midnight. The Las Vegas Monorail (Strip east side, $5/ride) is safe and useful for Strip hops during the day." },
  { title: "Managing Unwanted Attention", blurb: "Card slappers (people handing out escort cards) line the Strip — don't make eye contact and keep walking. Men may approach at casino bars — a simple 'I'm having some solo time, thanks' ends most conversations. If someone is persistent, move to a new seat and alert bar staff. Hotel staff are responsive and will intervene — do not hesitate to ask for help." },
];

export default function LasVegasFemaleSoloClient() {
  return (
    <main>
      <Header image="/data/majorcities/lasvegas/assets/lasvegas.webp" bannerText="Las Vegas Female Solo Travel Guide" />
      <div className={styles.slimCta}>
        <span className={styles.slimCtaText}>Book your solo Las Vegas trip — flights, hotels and activities →</span>
        <Link href="/destination/lasvegas/bookings" className={styles.slimCtaBtn}>Book your trip</Link>
      </div>
      <section className={styles.hero}>
        <h1>Las Vegas Female Solo Travel Guide</h1>
        <p>Las Vegas is an excellent solo destination for women — the Strip is well-monitored, shows and attractions are solo-friendly, and the city never requires a group to have a great time. This guide covers the specific things that matter.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/lasvegas/solo-itinerary" className={styles.primaryCta}>Solo itinerary</Link>
          <Link href="/destination/lasvegas/best-areas-to-stay" className={styles.secondaryCta}>Best areas to stay</Link>
        </div>
      </section>
      <section className={styles.section} aria-labelledby="female-solo-lv">
        <h2 id="female-solo-lv" className={styles.sectionTitle}>What Solo Women Need to Know About Vegas</h2>
        <p className={styles.sectionIntro}>Six topics that cover the practical realities of solo female travel in Las Vegas.</p>
        <div className={styles.grid}>
          {topics.map(({ title, blurb }) => (
            <article key={title} className={styles.card}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{blurb}</p>
            </article>
          ))}
        </div>
      </section>
      <div className={styles.bookingStrip}>
        <h2>Plan your solo Las Vegas trip</h2>
        <p>Book solo-friendly hotels, activities, and flights to Las Vegas.</p>
        <Link href="/destination/lasvegas/bookings" className={styles.bookingBtn}>Plan & book your trip</Link>
      </div>
      <Footer />
    </main>
  );
}
