import Image from 'next/image';
import Link from 'next/link';
import styles from '../../lafood.module.css';

export default function SoloDiningGuide() {
  return (
    <>
      <section className={styles.introSection}>
        <div className={styles.introCard}>
          <p className={styles.eyebrow}>LA Solo Dining Guide</p>
          <h1 className={styles.sectionheading}>
            Where to Eat Alone in LA
          </h1>
          <p className={styles.introText}>
            Taco counters, Koreatown BBQ, ramen rows, and market halls where solo travelers can eat well without making dinner feel like a production.
          </p>
        </div>
      </section>

      <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/losangeles/assets/la-tacos-solo-dining-grand-central-market.png"
            alt="Plate of birria, al pastor, and braised tacos with salsa and lime on a sunny LA day, capturing a solo traveler's casual taco-counter dining experience"
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Eating Solo in LA: Taco Counters and Late-Night Koreatown</h2>
          <p className={styles.subheading}>🌮 <strong>Quick and easy when you&apos;re on your own.</strong> Tacos 1986 in WeHo runs a fast-moving line for $5 birria, Leo&apos;s Tacos Truck on La Brea grills al pastor 24 hours, and Guisados in Echo Park ladles braised fillings you won&apos;t find anywhere else. Nobody blinks at a solo order at a truck or counter.</p>
          <p className={styles.subheading}>🥩 <strong>Koreatown after dark.</strong> Park&apos;s BBQ on Vermont is the premium grill, Kobawoo House does bossam, and OB Bear pours beer with fried chicken past midnight. Most places stay open until 2–3am on weekends — grab a counter seat and Uber in, parking is brutal.</p>
          <p className={styles.subheading}>🍜 <strong>Sawtelle ramen row.</strong> Tsujita LA in Sawtelle Japantown serves the best tsukemen in the city, and the whole block is a Japanese food corridor — 20+ spots in two walkable blocks, plus Marugame Udon over in Little Tokyo.</p>
          <Link href="/destination/la/solo-trip-to-la" className={styles.ctaButton}>
            LA Solo Traveler Tips
          </Link>
        </div>
      </section>

      <section className={styles.splitSection}>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Three Food Stops Worth a Solo Visit</h2>
          <p className={styles.subheading}>🏙️ <strong>Grand Central Market, downtown.</strong> A 100-year-old covered hall with 40+ stalls — Eggslut breakfast sandwiches, Sticky Rice Thai, tacos and more. Budget $10–$20, eat at a shared counter, and go on a weekday to skip the lunch crush.</p>
          <p className={styles.subheading}>🥬 <strong>Hollywood Farmers Market.</strong> Sunday mornings on Ivar Ave bring 150+ vendors. It&apos;s free to browse and built for grazing — produce, pastries and prepared food you can take to a bench. Santa Monica runs its own markets Wednesday and Saturday.</p>
          <p className={styles.subheading}>🍝 <strong>Splurge if you want to.</strong> Bestia in the Arts District ($80–$120pp, book weeks out) and Majordomo in Chinatown both have full bar service that&apos;s perfect for one. Gjelina on Abbot Kinney is mid-range and consistently excellent.</p>
          <Link href="/destination/la/solo-itinerary" className={styles.ctaButton}>
            Plan Your LA Itinerary
          </Link>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/losangeles/assets/la-grand-central-market-food-hall-solo-dining.png"
            alt="Solo traveler enjoying market-hall dishes at a shared counter inside a sunlit Los Angeles food hall, evoking the casual vibe of Grand Central Market and the Hollywood Farmers Market."
            fill
            className={styles.mapImage}
          />
        </div>
      </section>

      <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/losangeles/assets/la-koreatown-bbq-sawtelle-ramen-solo-dining.png"
            alt="Collage of Los Angeles favorites including Korean BBQ, tsukemen ramen, and birria tacos from Koreatown and Sawtelle Japantown, highlighting solo dining culture."
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Where to Get a Good Taco</h2>
          <p className={styles.subheading}>🌮 <strong>The classics.</strong> Tacos 1986 does birria, Leo&apos;s Tacos Truck does al pastor off the trompo, and Guisados does braised fillings — all the old way, on a fresh tortilla. Skip the tourist-facing &apos;Mexican&apos; spots near Hollywood Blvd; the real ones are trucks and counters.</p>
          <p className={styles.subheading}>🍳 <strong>The newer crowd.</strong> Eggslut launched out of a Grand Central Market stall, Sticky Rice built a following two doors down, and the market&apos;s rotating vendors keep things fresh if you&apos;re already downtown.</p>
          <p className={styles.subheading}>🗺️ <strong>Easy solo stops.</strong> Marugame Udon in Little Tokyo and the market counters have stand-up space and a few seats outside, so you can sit with your meal instead of eating on the move.</p>
                    <Link href="/destination/la/solo-trip-to-la" className={styles.ctaButton}>
            Solo Travel Tips for Dining Out
          </Link>
        </div>
      </section>
    </>
  );
}
