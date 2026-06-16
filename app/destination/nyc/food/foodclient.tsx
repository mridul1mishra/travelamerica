"use client";
import { useParams } from "next/navigation";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import NavigationHeader from "./components/NavigationHeader/NavigationHeader";
import Link from 'next/link';
import Image from 'next/image';
import styles from './food.module.css';
import Footer from "./components/Footer/Footer";
import BookingCTA from "./components/BookingCTA/BookingCTA";
import FAQAccordion from './components/FAQAccordion/FAQAccordion';
import faqData from '@/content/destination/nyc/food/faq/faqsection.json';
export default function FoodClientPage() {




    return(
        <>
        <NavigationHeader />
        <HeroBanner image={`/data/majorcities/newyork/assets/nyc-solo-dining.webp`} bannerText="Hero banner showcasing NYC food and dining experiences for travelers" />
        <BookingCTA variant="slim" text="Book your New York trip →" href="/destination/nyc/booking?tab=activities&from=food" label="See food tours" />

        {/* H1 / Intro */}
        <section className={styles.splitSection} style={{textAlign: "center" }}>
                <div style={{ width: "100%", textAlign: "center" }}>
                <h1 className={styles.sectionheading}>Where to Eat in New York City: The 2026 Food Guide</h1>
                <p className={styles.subheading}>
                  New York is one of the best eating cities on earth, and the hard part isn&apos;t finding good food — it&apos;s
                  narrowing it down. This guide covers where to eat in NYC across every budget: the iconic dishes you came
                  for, the neighborhoods worth eating your way through, the food halls that let a group disagree happily,
                  and the reservations worth planning around. Whether you&apos;re chasing a slice at midnight or a three-star
                  tasting menu, here&apos;s how to eat well in the city.
                </p>
                </div>
        </section>

        {/* NYC dishes to eat at least once */}
        <section className={styles.splitSection}>
                <div className={styles.imageWrapper}>
                <Image
                    src="/data/majorcities/newyork/assets/asian-food-rainy-day-solo-dining-new-york-city.png"
                    alt="Table with pizza, pasta, taco, and soda overlooking the Empire State Building in New York City"
                    fill
                    className={styles.mapImage}
                />
                </div>
                <div className={styles.textWrapper}>
                <h2 className={styles.heading}>The NYC dishes to eat at least once</h2>
                <ul>
                  <li className={styles.subheading}><strong>A proper slice</strong> — folded in half, eaten standing up. (Pizza section below.)</li>
                  <li className={styles.subheading}><strong>A hand-rolled bagel</strong> — boiled, not toasted, with a schmear. (Bagel section below.)</li>
                  <li className={styles.subheading}><strong>Pastrami on rye at Katz&apos;s</strong> — the Lower East Side classic; cash the ticket, tip the carver.</li>
                  <li className={styles.subheading}><strong>Dim sum in Chinatown</strong> — Nom Wah Tea Parlor on Doyers St has been doing it since 1920.</li>
                  <li className={styles.subheading}><strong>A black-and-white cookie or Junior&apos;s cheesecake</strong> — the city&apos;s sweet tooth.</li>
                </ul>
                </div>
        </section>

        {/* Best restaurants by cuisine */}
        <section className={styles.splitSection}>
                <div className={styles.textWrapper}>
                <h2 className={styles.heading}>Best restaurants in NYC by cuisine</h2>
                <p className={styles.subheading}><strong>Special-occasion / tasting menus</strong></p>
                <p className={styles.subheading}>
                  <strong>Semma</strong> (West Village) — Michelin-starred South Indian, currently among the top picks on the New York Times&apos; best list. Books out fast.
                  <strong> Carbone</strong> (Greenwich Village) — the famous red-sauce splurge; reservations open ~28 days out and vanish in minutes.
                  Le Bernardin, Eleven Madison Park, Per Se, and Jungsik round out the three-star tier.
                </p>
                <p className={styles.subheading}><strong>Italian</strong></p>
                <p className={styles.subheading}>
                  <strong>Lilia</strong> (Williamsburg) — Missy Robbins&apos; pasta; one of the hardest mid-range books in the city.
                  <strong> Frankies 457 Spuntino</strong> (Carroll Gardens) — handmade pastas, homey, neighborhood-perfect.
                  <strong> Rubirosa</strong> (Nolita) — vodka-sauce pizza and pasta; great for a group.
                </p>
                <p className={styles.subheading}><strong>Asian</strong></p>
                <p className={styles.subheading}>
                  <strong>Sushi Yasuda</strong> (Midtown East) — rigorous Edomae sushi at a relatively fair price.
                  <strong> Nom Wah Tea Parlor</strong> (Chinatown) — old-school dim sum since 1920.
                  <strong> Casa Enrique</strong> (Long Island City) — Michelin-starred Mexican.
                </p>
                <p className={styles.subheading}><strong>Steak</strong></p>
                <p className={styles.subheading}>
                  <strong>Peter Luger</strong> (Williamsburg) — the institution. Cash or their own card only — warn the table before the bill lands.
                  <strong> Le Relais de Venise</strong> — steak frites, one dish, unlimited fries. Painless for a big table.
                </p>
                </div>
                <div className={styles.imageWrapper}>
                <Image
                    src="/data/majorcities/newyork/assets/nyc-asian-food-hall-solo-dining-rainy-day-dumbo-chelsea.png"
                    alt="Food halls and dining options in New York City including DUMBO and Chelsea Market"
                    fill
                    className={styles.mapImage}
                />
                </div>
        </section>

        {/* Food by neighborhood */}
        <section className={styles.splitSection}>
                <div className={styles.imageWrapper}>
                <Image
                    src="/data/majorcities/newyork/assets/nyc-bagel-collage-murrays-blackseed-solo-dining.png"
                    alt="Collage of New York City bagels and neighborhood food scenes"
                    fill
                    className={styles.mapImage}
                />
                </div>
                <div className={styles.textWrapper}>
                <h2 className={styles.heading}>NYC food by neighborhood</h2>
                <ul>
                  <li className={styles.subheading}><strong>Lower East Side / Chinatown</strong> — Katz&apos;s, Nom Wah, Una Pizza Napoletana, dumpling counters, natural-wine bars.</li>
                  <li className={styles.subheading}><strong>West Village</strong> — Semma, Carbone, cozy date-night spots; one of the most walkable eating neighborhoods.</li>
                  <li className={styles.subheading}><strong>Williamsburg (Brooklyn)</strong> — Lilia, Peter Luger, L&apos;Industrie for a slice, the bar scene after.</li>
                  <li className={styles.subheading}><strong>Flushing (Queens)</strong> — the city&apos;s best and most affordable Chinese food, hands down.</li>
                  <li className={styles.subheading}><strong>Arthur Avenue (Bronx)</strong> — the &quot;real&quot; Little Italy: family-run delis, bakeries, sit-down rooms. Book ahead for 6+.</li>
                </ul>
                </div>
        </section>

        {/* Best pizza */}
        <section className={styles.splitSection}>
                <div className={styles.textWrapper}>
                <h2 className={styles.heading}>Best pizza in NYC</h2>
                <ul>
                  <li className={styles.subheading}><strong>Una Pizza Napoletana</strong> (Lower East Side) — named #1 in the U.S. at 50 Top Pizza. Neapolitan, pristine.</li>
                  <li className={styles.subheading}><strong>Mama&apos;s Too</strong> (Upper West Side) — topped Time Out&apos;s world&apos;s best pizza list; the Cacio e Pepe square is the one.</li>
                  <li className={styles.subheading}><strong>L&apos;Industrie</strong> (Williamsburg / LES) — best slice in the city per 50 Top.</li>
                  <li className={styles.subheading}><strong>Joe&apos;s Pizza</strong> (Village) — the reliable, classic plain slice.</li>
                  <li className={styles.subheading}><strong>Prince Street Pizza</strong> (Nolita) — the spicy pepperoni square with a cult following.</li>
                  <li className={styles.subheading}><strong>Lucali</strong> (Carroll Gardens) &amp; <strong>Juliana&apos;s / Grimaldi&apos;s</strong> (DUMBO) — destination whole pies.</li>
                </ul>
                </div>
                <div className={styles.imageWrapper}>
                <Image
                    src="/data/majorcities/newyork/assets/nyc-solo-dining.webp"
                    alt="NYC pizza — a proper New York slice folded in half"
                    fill
                    className={styles.mapImage}
                />
                </div>
        </section>

        {/* Food halls */}
        <section className={styles.splitSection}>
                <div className={styles.imageWrapper}>
                <Image
                    src="/data/majorcities/newyork/assets/nyc-asian-food-hall-solo-dining-rainy-day-dumbo-chelsea.png"
                    alt="Solo traveler enjoying food hall dining in DUMBO and Chelsea, New York City"
                    fill
                    className={styles.mapImage}
                />
                </div>
                <div className={styles.textWrapper}>
                <h2 className={styles.heading}>NYC food halls</h2>
                <p className={styles.subheading}>Best for groups and indecision — everyone gets what they want, one table.</p>
                <ul>
                  <li className={styles.subheading}><strong>Chelsea Market</strong> (Meatpacking) — Los Tacos No. 1, hand-pulled noodles, dessert. Busy midday; go early or after 2 PM.</li>
                  <li className={styles.subheading}><strong>Time Out Market</strong> (DUMBO) — Pat LaFrieda burgers and a rooftop with the bridge in frame.</li>
                  <li className={styles.subheading}><strong>Grand Central Dining Concourse</strong> — Roberta&apos;s, Takumi Tacos, Blue Bottle, all easy around a train.</li>
                  <li className={styles.subheading}><strong>Gotham West Market</strong> (Hell&apos;s Kitchen) — sushi, ramen, wagyu in one room.</li>
                  <li className={styles.subheading}><strong>Essex Market</strong> (LES) — a 100-year-old market with serious stalls.</li>
                  <li className={styles.subheading}><strong>Smorgasburg</strong> (weekends, Apr–Oct) — the giant outdoor market: Williamsburg Saturdays, Prospect Park Sundays, 100+ vendors.</li>
                </ul>
                </div>
        </section>

        {/* Solo dining — keep as differentiator */}
        <section className={styles.splitSection}>
                <div className={styles.imageWrapper}>
                <Image
                    src="/data/majorcities/newyork/assets/asian-food-rainy-day-solo-dining-new-york-city.png"
                    alt="Table with pizza, pasta, taco, and soda overlooking the Empire State Building in New York City, capturing a solo traveler's cozy dining experience"
                    fill
                    className={styles.mapImage}
                />
                </div>
                <div className={styles.textWrapper}>
                <h2 className={styles.heading}>Eating Solo in NYC: Counters and Quiet Bars</h2>
                <p className={styles.subheading}>🍜 <strong>Quick and easy when you&apos;re on your own.</strong> Ichiran builds the whole experience around eating alone — you order from a vending machine and sit in a private booth. Mimi Cheng&apos;s and Shake Shack are counter spots where nobody blinks at a table for one.</p>
                <p className={styles.subheading}>🍷 <strong>Bar seats beat a table for one.</strong> At The Modern, Estela and Café Sabarsky, the bar is the best seat in the house when you&apos;re solo — you can order the full menu and you&apos;re not stuck staring across an empty chair.</p>
                <p className={styles.subheading}>🥯 <strong>Near the theaters.</strong> Murray&apos;s Bagels, the Grand Central Oyster Bar and Joe Allen all work for a fast bite before a show or a late one after. Joe Allen has been feeding Broadway crowds since 1965.</p>

                <Link href="/destination/nyc/solo-trip-to-nyc" className={styles.ctaButton}>
                    NYC Solo Traveler Tips
                </Link>
                </div>
        </section>
        <section className={styles.splitSection}>

                <div className={styles.textWrapper}>
                <h2 className={styles.heading}>Three Food Halls Worth a Solo Stop</h2>
                <p className={styles.subheading}>🏙️ <strong>DUMBO, for the view.</strong> Time Out Market sits right on the water with the bridge in frame. Grab a Pat LaFrieda burger, take it up to the rooftop, and you&apos;ve got dinner and the skyline for the price of one.</p>
                <p className={styles.subheading}>🍣 <strong>Grand Central Dining Concourse.</strong> Easy to fit in around a train — Roberta&apos;s pizza, Takumi Tacos and a Blue Bottle coffee, all in one corridor and all fine to eat standing or at a counter.</p>
                <p className={styles.subheading}>🥟 <strong>Chelsea Market.</strong> Tacos at Los Tacos No. 1, hand-pulled noodles, and something sweet on the way out. It gets packed midday, so go early or after 2pm if you want elbow room.</p>

                <Link href="/destination/nyc/solo-itinerary" className={styles.ctaButton}>
                   Plan Your NYC Itinerary
                </Link>
                </div>
                <div className={styles.imageWrapper}>
                <Image
                    src="/data/majorcities/newyork/assets/nyc-asian-food-hall-solo-dining-rainy-day-dumbo-chelsea.png"
                    alt="Solo traveler enjoying Asian-inspired dishes like ramen and dumplings by a window on a rainy day in New York City, evoking the cozy vibe of DUMBO and Chelsea food halls."
                    fill
                    className={styles.mapImage}
                />
                </div>
        </section>

        {/* Bagels */}
        <section className={styles.splitSection}>
                <div className={styles.imageWrapper}>
                <Image
                    src="/data/majorcities/newyork/assets/nyc-bagel-collage-murrays-blackseed-solo-dining.png"
                    alt="Collage of New York City bagels including smoked salmon, rainbow, and sesame varieties from iconic shops like Murray's and Black Seed, highlighting solo dining culture."
                    fill
                    className={styles.mapImage}
                />
                </div>
                <div className={styles.textWrapper}>
                <h2 className={styles.heading}>Where to Get a Good Bagel</h2>
                <p className={styles.subheading}>🥯 <strong>The classics.</strong> Murray&apos;s, Ess-a-Bagel and Absolute do it the old way — hand-rolled, boiled, nothing fancy. Order it with a schmear and don&apos;t ask them to toast it; that&apos;s how you spot a tourist.</p>
                <p className={styles.subheading}>🧈 <strong>The newer crowd.</strong> Black Seed went Montreal-style with a wood-fired oven, Apollo built a cult following, and Utopia out in Queens is worth the trek if you&apos;re already that far.</p>
                <p className={styles.subheading}>🗺️ <strong>Easy solo stops.</strong> Hudson Bagel and Tompkins Square have counter space and a few seats outside, so you can sit with your coffee instead of eating on the move.</p>

                <Link href="/destination/nyc/solo-trip-to-nyc" className={styles.ctaButton}>
                    Solo Travel Tips for Dining Out
                </Link>
                </div>
        </section>

        {/* Price ranges */}
        <section className={styles.splitSection} style={{textAlign: "center"}}>
                <div style={{ width: "100%", textAlign: "left" }}>
                <h2 className={styles.heading}>Price ranges &amp; reservations</h2>
                <ul>
                  <li className={styles.subheading}><strong>Cheap (under ~$15):</strong> a slice, a bagel, a food-hall plate, dollar dumplings in Chinatown.</li>
                  <li className={styles.subheading}><strong>Mid ($25–60):</strong> most neighborhood restaurants; NYC Restaurant Week (winter &amp; summer) runs prix-fixe at $30 / $45 / $60.</li>
                  <li className={styles.subheading}><strong>Splurge ($100+):</strong> the tasting-menu tier. Hard books (Carbone, Atomix, 4 Charles, Tatiana) release in batches up to 28 days ahead — set an alarm.</li>
                </ul>
                </div>
        </section>

        <BookingCTA variant="full" text="Book a guided NYC food tour" href="/destination/nyc/booking?tab=activities&from=food" label="See food tours" />
        <FAQAccordion faqs={faqData} />
        <Footer />
        </>
    );
}
function capitalizeWords(str: string) {
  return str
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}
