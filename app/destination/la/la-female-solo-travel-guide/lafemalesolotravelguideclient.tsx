// Server Component — no hooks used.
import Link from "next/link";
import Header from "../../../components/Header/header";
import Footer from "@/app/components/Header/Footer/footer";
import styles from "@/app/destination/city-hub.module.css";

const topics = [
  { title: "Overall Safety Assessment", blurb: "LA is safe for female solo travelers in the major tourist and residential areas. Santa Monica, West Hollywood, Silver Lake, Los Feliz, Beverly Hills, and the well-trafficked parts of DTLA are all comfortable to walk alone at night. The risks are specific — car break-ins, isolated parking structures, and a few areas to avoid — rather than widespread." },
  { title: "Safest Neighborhoods to Stay", blurb: "Santa Monica is the top pick — walkable grid, beach access, well-lit streets, and consistent foot traffic at night. West Hollywood is excellent for solo women — the LGBTQ+ community creates a safer, more inclusive social environment. Beverly Hills is impeccably safe. Los Feliz is quiet and residential but comfortable day and night." },
  { title: "Transport Safety", blurb: "Uber and Lyft are safe and widely used by women in LA. Always confirm your driver's name, car model, and plate before getting in. Avoid walking to your car in dark parking structures alone — ask hotel staff to escort you if needed. The Metro is fine during daylight hours but avoid empty cars at night. Rideshare is the right choice after 10pm in any unfamiliar area." },
  { title: "Nightlife: What to Know", blurb: "LA bars and clubs are generally safe for solo women. West Hollywood venues are particularly female-friendly. Keep your drink in your hand or covered at all times. Most venues have visible security. Don't accept drinks from strangers you haven't seen poured. Walk to a rideshare pickup spot on the main street, not down a side alley." },
  { title: "Solo Dining in LA", blurb: "LA has an excellent solo dining culture. Counter seating is standard at most restaurants — Gjelina, Sqirl, Grand Central Market stalls, and any sushi bar have natural solo spots. Rooftop bars in WeHo and Santa Monica welcome solo guests. Farmers markets are ideal for grazing alone without feeling self-conscious." },
  { title: "Practical Packing Tips", blurb: "Cross-body bag or anti-theft backpack — never a bag that hangs off one shoulder. Portable phone charger is essential (LA distances drain batteries fast). Sunscreen and sunglasses are non-negotiable from April–October. A light layer for evenings — LA gets cool after dark even in summer. Download Uber and Google Maps offline before arriving." },
];

export default function LAFemaleSoloClient() {
  return (
    <main>
      <Header image="/data/majorcities/losangeles/assets/losangeles.webp" bannerText="LA Female Solo Travel Guide" />
      <div className={styles.slimCta}>
        <span className={styles.slimCtaText}>Book your solo LA trip — flights, hotels and activities →</span>
        <Link href="/destination/la/bookings" className={styles.slimCtaBtn}>Book your trip</Link>
      </div>
      <section className={styles.hero}>
        <h1>Los Angeles Female Solo Travel Guide</h1>
        <p>LA is one of the most welcoming cities in America for women traveling alone. The risks are specific and avoidable — this guide covers what actually matters for safety, comfort, and having a great trip.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/la/solo-itinerary" className={styles.primaryCta}>Solo itinerary</Link>
          <Link href="/destination/la/best-areas-to-stay" className={styles.secondaryCta}>Best areas to stay</Link>
        </div>
      </section>
      <section className={styles.section} aria-labelledby="female-solo-la">
        <h2 id="female-solo-la" className={styles.sectionTitle}>What Female Solo Travelers Need to Know</h2>
        <p className={styles.sectionIntro}>Six topics that cover the practical realities of solo female travel in Los Angeles.</p>
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
        <h2>Plan your solo LA trip</h2>
        <p>Book solo-friendly hotels, activities, and flights to Los Angeles.</p>
        <Link href="/destination/la/bookings" className={styles.bookingBtn}>Plan & book your trip</Link>
      </div>
      <Footer />
    </main>
  );
}
