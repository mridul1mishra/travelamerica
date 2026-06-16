"use client";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import NavigationHeader from "./components/NavigationHeader/NavigationHeader";
import Link from 'next/link';
import Image from 'next/image';
import styles from './lasvegasfood.module.css';
import Footer from "@/app/components/Header/Footer/footer";
import BookingCTA from "./components/BookingCTA/BookingCTA";
import FAQAccordion from './components/FAQAccordion/FAQAccordion';
import faqData from '@/content/destination/lasvegas/food/faq/faqsection.json';
export default function LasVegasFoodClient() {




    return(
        <>
        <NavigationHeader />
        <HeroBanner image={`/data/majorcities/lasvegas/assets/group/food/lasvegas-group-food.png`} bannerText="" variant="wide" />
        <BookingCTA variant="slim" text="Book your Las Vegas trip →" href="/destination/lasvegas/bookings?tab=activities&from=food" label="See food tours" />

        {/* H1 / Intro */}
        <section className={`${styles.splitSection} ${styles.introSection}`}>
                <div className={styles.introContent}>
                <h1 className={styles.sectionheading}>Where to Eat in Las Vegas: The 2026 Food Guide</h1>
                <p className={styles.introText}>
                  Las Vegas has gone from buffet town to one of America&apos;s most serious eating cities, and the hard part
                  isn&apos;t finding good food — it&apos;s knowing what&apos;s worth the price and what&apos;s trading on a
                  famous name. This guide covers where to eat in Las Vegas across every budget: the celebrity-chef rooms,
                  the buffets still worth lining up for, the off-Strip gems in Chinatown and the Arts District, and the
                  cheap eats and late-night spots locals actually go to. Whether you&apos;re after a $6 slice at midnight
                  or a $300 tasting menu, here&apos;s how to eat well in the city.
                </p>
                </div>
        </section>

        {/* Las Vegas dishes to eat at least once */}
        <section className={styles.splitSection}>
                <div className={styles.imageWrapper}>
                <Image
                    src="/data/majorcities/lasvegas/assets/food-must-eat-card.png"
                    alt="Las Vegas must-eat dishes including pizza, buffet plates, fine dining, tacos, shrimp cocktail, and Asian skewers"
                    fill
                    className={styles.mapImage}
                />
                </div>
                <div className={styles.textWrapper}>
                <h2 className={styles.heading}>The Las Vegas dishes to eat at least once</h2>
                <ul>
                  <li className={styles.subheading}><strong>A celebrity-chef tasting menu</strong> — Joël Robuchon at MGM Grand is one of America&apos;s best. (Restaurants section below.)</li>
                  <li className={styles.subheading}><strong>A proper buffet plate</strong> — Wicked Spoon or Bacchanal, piled high. (Buffet section below.)</li>
                  <li className={styles.subheading}><strong>Secret Pizza at The Cosmopolitan</strong> — the unmarked slice shop on the 3rd-floor mezzanine; $6–$9, no signage, worth finding.</li>
                  <li className={styles.subheading}><strong>Off-Strip Asian food on Spring Mountain Road</strong> — Raku&apos;s robata or Lotus of Siam&apos;s northern Thai is where locals actually eat.</li>
                  <li className={styles.subheading}><strong>A classic Vegas shrimp cocktail or late-night taco</strong> — Tacos El Gordo&apos;s al pastor at 3am is a rite of passage.</li>
                </ul>
                </div>
        </section>

        {/* Best restaurants by cuisine */}
        <section className={styles.splitSection}>
                <div className={styles.textWrapper}>
                <h2 className={styles.heading}>Best restaurants in Las Vegas by cuisine</h2>
                <p className={styles.subheading}><strong>Special-occasion / tasting menus</strong></p>
                <p className={styles.subheading}>
                  <strong>Joël Robuchon</strong> (MGM Grand) — the city&apos;s benchmark French tasting menu, $150–$350pp; book 2–4 weeks out.
                  <strong> Nobu</strong> (Caesars Palace) — the Vegas flagship of the global Japanese-Peruvian room, $80–$120pp.
                  É by José Andrés and Restaurant Guy Savoy round out the splurge tier.
                </p>
                <p className={styles.subheading}><strong>Steak</strong></p>
                <p className={styles.subheading}>
                  <strong>Bavette&apos;s</strong> (Park MGM) — the dim, clubby steakhouse that locals and visitors agree on; book ahead.
                  <strong> Golden Steer Steakhouse</strong> (off-Strip, since 1958) — old-Vegas Rat Pack supper club, tableside Caesar.
                  <strong> SW Steakhouse</strong> (Wynn) — refined, with the lake show outside.
                </p>
                <p className={styles.subheading}><strong>Italian</strong></p>
                <p className={styles.subheading}>
                  <strong>Esther&apos;s Kitchen</strong> (Arts District) — house-made pasta and bread; the best mid-range Italian off the Strip.
                  <strong> Carbone</strong> (ARIA) — the famous red-sauce splurge, Vegas edition.
                  <strong> Eataly</strong> (Park MGM) — flexible Italian under one roof, great for a group.
                </p>
                <p className={styles.subheading}><strong>Asian (off-Strip)</strong></p>
                <p className={styles.subheading}>
                  <strong>Raku</strong> (Chinatown) — robata and izakaya plates chefs eat after their own shifts; counter seats are the move.
                  <strong> Lotus of Siam</strong> — nationally acclaimed northern Thai.
                  <strong> Sparrow + Wolf</strong> brings a modern spin to Spring Mountain Road.
                </p>
                </div>
                <div className={styles.imageWrapper}>
                <Image
                    src="/data/majorcities/lasvegas/assets/food-fine-dining-card.png"
                    alt="Fine dining table in Las Vegas with steak, sushi, pasta, and Strip views"
                    fill
                    className={styles.mapImage}
                />
                </div>
        </section>

        {/* Food by neighborhood */}
        <section className={styles.splitSection}>
                <div className={styles.imageWrapper}>
                <Image
                    src="/data/majorcities/lasvegas/assets/food-neighborhoods-card.png"
                    alt="Las Vegas neighborhood food spread representing the Strip, Chinatown, Arts District, Downtown, and off-Strip casinos"
                    fill
                    className={styles.mapImage}
                />
                </div>
                <div className={styles.textWrapper}>
                <h2 className={styles.heading}>Las Vegas food by neighborhood</h2>
                <ul>
                  <li className={styles.subheading}><strong>The Strip</strong> — celebrity-chef rooms, buffets, food halls, and Secret Pizza; everything within a rideshare hop.</li>
                  <li className={styles.subheading}><strong>Chinatown / Spring Mountain Road</strong> — the city&apos;s real food destination: Raku, Lotus of Siam, and dozens of Asian spots open late.</li>
                  <li className={styles.subheading}><strong>Arts District (18b)</strong> — Esther&apos;s Kitchen, craft breweries, and indie cafés; walkable and local.</li>
                  <li className={styles.subheading}><strong>Downtown / Fremont</strong> — Carson Kitchen, Downtown Container Park&apos;s 20+ vendors, and old-school supper clubs like Hugo&apos;s Cellar.</li>
                  <li className={styles.subheading}><strong>Off-Strip casinos</strong> — Palace Station and Gold Coast still run the cheap, old-Vegas buffets the Strip gave up.</li>
                </ul>
                </div>
        </section>

        {/* Best cheap eats */}
        <section className={styles.splitSection}>
                <div className={styles.textWrapper}>
                <h2 className={styles.heading}>Best cheap eats in Las Vegas</h2>
                <ul>
                  <li className={styles.subheading}><strong>Secret Pizza</strong> (The Cosmopolitan) — the unmarked 3rd-floor slice shop; $6–$9 a slice, open until 3am.</li>
                  <li className={styles.subheading}><strong>In-N-Out Burger</strong> (Strip-adjacent) — the West Coast classic, open late, under $10.</li>
                  <li className={styles.subheading}><strong>Eggslut</strong> (The Cosmopolitan) — cult breakfast sandwiches, $12–$16.</li>
                  <li className={styles.subheading}><strong>Tacos El Gordo</strong> (the Strip) — Tijuana-style al pastor off the trompo; the best late-night taco, open until 4am weekends.</li>
                  <li className={styles.subheading}><strong>Good Times Burgers</strong> (Downtown) — a local smash-burger favorite.</li>
                  <li className={styles.subheading}><strong>Donut Bar</strong> (Downtown) — oversized donuts for late-night or early-morning sugar.</li>
                </ul>
                </div>
                <div className={styles.imageWrapper}>
                <Image
                    src="/data/majorcities/lasvegas/assets/food-cheap-eats-card.png"
                    alt="Late-night Las Vegas cheap eats with pizza, tacos, burger, fries, and soda"
                    fill
                    className={styles.mapImage}
                />
                </div>
        </section>

        {/* Food halls */}
        <section className={styles.splitSection}>
                <div className={styles.imageWrapper}>
                <Image
                    src="/data/majorcities/lasvegas/assets/food-hall-card.png"
                    alt="Modern Las Vegas food hall table with ramen, pasta, sandwich, dessert, and gelato"
                    fill
                    className={styles.mapImage}
                />
                </div>
                <div className={styles.textWrapper}>
                <h2 className={styles.heading}>Las Vegas food halls</h2>
                <p className={styles.subheading}>Best for groups and indecision — everyone gets what they want, one table.</p>
                <ul>
                  <li className={styles.subheading}><strong>Eataly</strong> (Park MGM) — 18 stations of Italian from pasta to gelato; self-guided, flexible, $15–$40pp.</li>
                  <li className={styles.subheading}><strong>Block 16 Urban Food Hall</strong> (The Venetian) — cult vendors like Hattie B&apos;s hot chicken and District Donuts.</li>
                  <li className={styles.subheading}><strong>Proper Eats</strong> (ARIA) — a modern hall with ramen, tacos, and plant-based options.</li>
                  <li className={styles.subheading}><strong>The Cosmopolitan&apos;s mezzanine</strong> — Secret Pizza, Eggslut, and quick options on one floor.</li>
                  <li className={styles.subheading}><strong>Downtown Container Park</strong> (Fremont) — 20+ outdoor food vendors, one of the better food spots off the Strip.</li>
                  <li className={styles.subheading}><strong>Wynn&apos;s food court</strong> — a hidden gem for quality quick service.</li>
                </ul>
                </div>
        </section>

        {/* Solo dining — keep as differentiator */}
        <section className={styles.splitSection}>
                <div className={styles.imageWrapper}>
                <Image
                    src="/data/majorcities/lasvegas/assets/food-solo-counter-card.png"
                    alt="Solo Las Vegas counter dining with pizza, tacos, breakfast sandwich, and a quiet bar seat"
                    fill
                    className={styles.mapImage}
                />
                </div>
                <div className={styles.textWrapper}>
                <h2 className={styles.heading}>Eating Solo in Las Vegas: Counters and Quiet Bars</h2>
                <p className={styles.subheading}><strong>Quick and easy when you&apos;re on your own.</strong> Secret Pizza at The Cosmopolitan is built for a slice on the go, Eggslut is a counter breakfast, and Eataly&apos;s stations let you grab pasta or a panino without a table. Nobody blinks at a solo order at any of them.</p>
                <p className={styles.subheading}><strong>Bar seats beat a table for one.</strong> At Bavette&apos;s, Carson Kitchen and Raku, the bar is the best seat in the house when you&apos;re solo — you can order the full menu and you&apos;re not stuck staring across an empty chair.</p>
                <p className={styles.subheading}><strong>Late and easy.</strong> The Peppermill (24 hours since 1972), Secret Pizza until 3am, and Tacos El Gordo until 4am on weekends all work for a fast bite after a show or a late one after the tables.</p>

                <Link href="/destination/lasvegas/solo-trip-to-lasvegas" className={styles.ctaButton}>
                    Las Vegas Solo Traveler Tips
                </Link>
                </div>
        </section>
        <section className={styles.splitSection}>

                <div className={styles.textWrapper}>
                <h2 className={styles.heading}>Three Off-Strip Stops Worth a Solo Visit</h2>
                <p className={styles.subheading}><strong>Spring Mountain Road, for the real food.</strong> Chinatown is where Vegas chefs eat after their shifts — Raku for robata, Lotus of Siam for northern Thai, dozens more open past midnight. Rideshare in; it&apos;s a 10-minute hop off the Strip and the counter seats are easy for one.</p>
                <p className={styles.subheading}><strong>The Arts District (18b).</strong> Esther&apos;s Kitchen for house-made pasta, craft breweries within a block, and indie coffee — a walkable, local neighborhood that feels nothing like the Strip.</p>
                <p className={styles.subheading}><strong>Downtown / Fremont.</strong> Carson Kitchen for sharable small plates, Downtown Container Park&apos;s 20+ vendors, and Hugo&apos;s Cellar for an old-Vegas supper-club splurge ($60–$80pp).</p>

                <Link href="/destination/lasvegas/solo-itinerary" className={styles.ctaButton}>
                   Plan Your Las Vegas Itinerary
                </Link>
                </div>
                <div className={styles.imageWrapper}>
                <Image
                    src="/data/majorcities/lasvegas/assets/food-offstrip-card.png"
                    alt="Off-Strip Las Vegas counter dining with ramen, skewers, pasta, and a craft drink"
                    fill
                    className={styles.mapImage}
                />
                </div>
        </section>

        {/* Buffets */}
        <section className={styles.splitSection}>
                <div className={styles.imageWrapper}>
                <Image
                    src="/data/majorcities/lasvegas/assets/group/lasvegas-buffet-collage-group-dining.png"
                    alt="Buffet spread with prime rib, sushi, crab legs, and desserts in Las Vegas"
                    fill
                    className={styles.mapImage}
                />
                </div>
                <div className={styles.textWrapper}>
                <h2 className={styles.heading}>Where to Find a Buffet Still Worth It</h2>
                <p className={styles.subheading}><strong>The quality picks.</strong> Wicked Spoon at The Cosmopolitan ($32–$50) leans on better ingredients and individually portioned plates. Bacchanal Buffet at Caesars ($50–$70) is the most famous spread in town — go early to beat the line.</p>
                <p className={styles.subheading}><strong>The old-Vegas value.</strong> The $10–$15 buffets at off-Strip casinos like Palace Station and Gold Coast are closer to what the classic Vegas buffet actually was — no frills, plenty of plates.</p>
                <p className={styles.subheading}><strong>The honest take.</strong> The era of great cheap Strip buffets is mostly over; treat the buffet as one fun experience, not your every-meal plan, and put the savings toward one celebrity-chef dinner.</p>

                <Link href="/destination/lasvegas/solo-trip-to-lasvegas" className={styles.ctaButton}>
                    Solo Travel Tips for Dining Out
                </Link>
                </div>
        </section>

        {/* Price ranges */}
        <section className={styles.splitSection}>
                <div className={styles.fullWidthContent}>
                <h2 className={styles.heading}>Price ranges &amp; reservations</h2>
                <ul>
                  <li className={styles.subheading}><strong>Cheap (under ~$15):</strong> Secret Pizza, In-N-Out, Tacos El Gordo, a slice or taco at any hour.</li>
                  <li className={styles.subheading}><strong>Mid ($25–60):</strong> most off-Strip restaurants — Esther&apos;s Kitchen, Carson Kitchen, Raku — plus mid-range buffets.</li>
                  <li className={styles.subheading}><strong>Splurge ($100+):</strong> the celebrity-chef tier. Joël Robuchon, Nobu, and Bavette&apos;s book up 2–4 weeks ahead on weekends — set an alarm.</li>
                </ul>
                </div>
        </section>
        <FAQAccordion faqs={faqData} />

        <BookingCTA variant="full" text="Book a guided Las Vegas food tour" href="/destination/lasvegas/bookings?tab=activities&from=food" label="See food tours" />
        
        <Footer />
        </>
    );
}
