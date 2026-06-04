"use client";
import { useParams } from "next/navigation";
import Header from "../../../components/Header/header";
import Link from 'next/link';
import Image from 'next/image';
import styles from './lasvegasfood.module.css';
import Footer from "@/app/components/Header/Footer/footer";
import BookingCTA from "@/app/components/destination/BookingCTA/BookingCTA";
export default function LasVegasFoodClient() {

    const Article = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Where to Eat in Las Vegas: The 2026 Food Guide",
  "description": "Where to eat in Las Vegas — celebrity-chef restaurants, the best buffets, off-Strip gems in Chinatown and the Arts District, food halls, cheap eats, and price ranges. A 2026 Las Vegas food guide.",
  "author": {
    "@type": "Organization",
    "name": "Travels Americas"
  },
  "datePublished": "2025-10-19",
  "dateModified": "2026-06-03",
  "publisher": {
    "@type": "Organization",
    "name": "Travels Americas",
    "logo": { "@type": "ImageObject", "url": "https://www.travelsamericas.com/logo.png" }
  },
  "image": "https://www.travelsamericas.com/data/majorcities/lasvegas/assets/lasvegas.webp",
  "articleSection": ["Celebrity Chefs", "Buffets", "Off-Strip", "Food Halls", "Cheap Eats"],
  "mainEntity": [
    {
      "@type": "Restaurant",
      "name": "Joël Robuchon",
      "servesCuisine": "French Tasting Menu",
      "address": { "@type": "PostalAddress", "addressLocality": "Las Vegas", "addressRegion": "NV" }
    },
    {
      "@type": "Restaurant",
      "name": "Bacchanal Buffet",
      "servesCuisine": "Buffet",
      "address": { "@type": "PostalAddress", "addressLocality": "Las Vegas", "addressRegion": "NV" }
    },
    {
      "@type": "Restaurant",
      "name": "Secret Pizza",
      "servesCuisine": "Pizza",
      "address": { "@type": "PostalAddress", "addressLocality": "Las Vegas", "addressRegion": "NV" }
    },
    {
      "@type": "Restaurant",
      "name": "Carson Kitchen",
      "servesCuisine": "Contemporary American",
      "address": { "@type": "PostalAddress", "addressLocality": "Las Vegas", "addressRegion": "NV" }
    },
    {
      "@type": "Restaurant",
      "name": "Raku",
      "servesCuisine": "Japanese Izakaya",
      "address": { "@type": "PostalAddress", "addressLocality": "Las Vegas", "addressRegion": "NV" }
    },
    {
      "@type": "Restaurant",
      "name": "Eataly Las Vegas",
      "servesCuisine": "Italian Food Hall",
      "address": { "@type": "PostalAddress", "addressLocality": "Las Vegas", "addressRegion": "NV" }
    },
    {
      "@type": "Restaurant",
      "name": "The Peppermill Restaurant & Fireside Lounge",
      "servesCuisine": "American Diner",
      "address": { "@type": "PostalAddress", "addressLocality": "Las Vegas", "addressRegion": "NV" }
    },
    {
      "@type": "Restaurant",
      "name": "Tacos El Gordo",
      "servesCuisine": "Mexican Tacos",
      "address": { "@type": "PostalAddress", "addressLocality": "Las Vegas", "addressRegion": "NV" }
    },
    {
      "@type": "Restaurant",
      "name": "Esther's Kitchen",
      "servesCuisine": "Italian",
      "address": { "@type": "PostalAddress", "addressLocality": "Las Vegas", "addressRegion": "NV" }
    }
  ]
};
    const FAQPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where should I eat in Las Vegas for the first time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Do one celebrity-chef room (Nobu or Bavette's), one buffet (Wicked Spoon or Bacchanal), and one off-Strip local spot (Raku in Chinatown or Esther's Kitchen in the Arts District)."
      }
    },
    {
      "@type": "Question",
      "name": "What food is Las Vegas famous for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Celebrity-chef restaurants, all-you-can-eat buffets, 24-hour dining, and a serious off-Strip scene in Chinatown along Spring Mountain Road."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need reservations at Las Vegas restaurants?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For celebrity-chef dinners (Joël Robuchon, Nobu, Bavette's) book 2–4 weeks ahead. Buffets, food halls, and late-night spots are mostly walk-up."
      }
    },
    {
      "@type": "Question",
      "name": "What's the best cheap eat in Las Vegas right now?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Secret Pizza on the 3rd-floor mezzanine of The Cosmopolitan ($6–$9 a slice, no signage), In-N-Out near the Strip, and Tacos El Gordo for late-night al pastor."
      }
    },
    {
      "@type": "Question",
      "name": "Where can solo diners find fast and flavorful meals in Las Vegas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Secret Pizza at The Cosmopolitan, Eggslut for breakfast, and the counters at Eataly's stations all work for a quick solo meal where a table for one is normal."
      }
    },
    {
      "@type": "Question",
      "name": "Which Las Vegas restaurants offer stylish bar dining for solo guests?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bavette's, Carson Kitchen Downtown, and Raku in Chinatown all serve the full menu at the bar, which is the best seat when you're on your own."
      }
    },
    {
      "@type": "Question",
      "name": "What are the best off-Strip restaurants in Las Vegas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Spring Mountain Road (Chinatown) is the city's real food destination — Raku, Lotus of Siam, and dozens of Asian spots. The Arts District has Esther's Kitchen, and Downtown has Carson Kitchen."
      }
    },
    {
      "@type": "Question",
      "name": "Which Las Vegas buffets are still worth it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wicked Spoon at The Cosmopolitan ($32–$50) for quality, Bacchanal Buffet at Caesars ($50–$70) for the famous spread, and off-Strip casino buffets (Palace Station, Gold Coast) for old-school value."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I find good late-night food in Las Vegas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Peppermill is a 24-hour Strip diner open since 1972, Secret Pizza runs until 3am, and Tacos El Gordo serves until 4am on weekends."
      }
    }
  ]
};
const breadcrumblist = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.travelsamericas.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Major Cities",
      "item": "https://www.travelsamericas.com/majorcities/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Las Vegas",
      "item": "https://www.travelsamericas.com/destination/lasvegas/"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Food",
      "item": "https://www.travelsamericas.com/destination/lasvegas/food"
    }
  ]
                };
const itemlist ={
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Las Vegas Food Guide: Restaurants, Buffets & Where to Eat",
  "itemListOrder": "Unordered",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Las Vegas Dishes to Eat at Least Once",
      "description": "A celebrity-chef tasting menu, a real buffet plate, Secret Pizza at The Cosmopolitan, late-night al pastor at Tacos El Gordo, and a shrimp cocktail Vegas classic."
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Celebrity-Chef Restaurants",
      "description": "Joël Robuchon, Nobu, Bavette's, and Gordon Ramsay outposts — the splurge tier that rewards an early reservation."
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Best Cheap Eats in Las Vegas",
      "description": "Secret Pizza, In-N-Out, Eggslut, and Tacos El Gordo — Strip-area meals under $15."
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Las Vegas Food Halls",
      "description": "Eataly at Park MGM, Block 16 Urban Food Hall at The Venetian, Proper Eats at Aria, and Downtown Container Park."
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Fast & Flavorful Solo Dining",
      "description": "Secret Pizza, Eggslut, and Eataly's counters offer quick meals with counter seating where a table for one is normal."
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Bar Dining with Style",
      "description": "Bavette's, Carson Kitchen, and Raku serve the full menu at the bar, the best seat for one."
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "Off-Strip Gems",
      "description": "Raku and Lotus of Siam in Chinatown, Esther's Kitchen in the Arts District, and Carson Kitchen Downtown."
    },
    {
      "@type": "ListItem",
      "position": 8,
      "name": "The Best Buffets",
      "description": "Wicked Spoon, Bacchanal Buffet, and old-school off-Strip casino buffets for value."
    },
    {
      "@type": "ListItem",
      "position": 9,
      "name": "Late-Night Food",
      "description": "The Peppermill 24-hour diner, Secret Pizza until 3am, and Tacos El Gordo until 4am on weekends."
    }
  ]
};
const howto = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Eat Well in Las Vegas",
  "description": "A practical guide to eating well in Las Vegas — from celebrity-chef rooms and buffets to off-Strip gems, food halls, cheap eats, and late-night dining.",
  "supply": [
    { "@type": "HowToSupply", "name": "Rideshare app or Strip monorail pass" },
    { "@type": "HowToSupply", "name": "Camera or smartphone for food photos" },
    { "@type": "HowToSupply", "name": "Cash or card for quick bites" }
  ],
  "tool": [
    { "@type": "HowToTool", "name": "Google Maps or Transit app" },
    { "@type": "HowToTool", "name": "OpenTable or Resy for reservations" }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "Eat the Las Vegas classics",
      "text": "Do one celebrity-chef room, one buffet plate, and a slice of Secret Pizza at The Cosmopolitan — the trio that sums up modern Vegas eating."
    },
    {
      "@type": "HowToStep",
      "name": "Pick a neighborhood to eat your way through",
      "text": "Spring Mountain Road (Chinatown) for the best Asian food, the Arts District for Esther's Kitchen and craft spots, Downtown/Fremont for Carson Kitchen and Container Park."
    },
    {
      "@type": "HowToStep",
      "name": "Use food halls for groups or indecision",
      "text": "Eataly at Park MGM, Block 16 at The Venetian, or Proper Eats at Aria — everyone gets what they want at one table."
    },
    {
      "@type": "HowToStep",
      "name": "Book splurge restaurants early",
      "text": "Joël Robuchon, Nobu, and Bavette's release reservations 2–4 weeks ahead and fill on weekends. Set an alarm."
    },
    {
      "@type": "HowToStep",
      "name": "Fast & Flavorful Solo Dining",
      "text": "Start with Secret Pizza, Eggslut, or an Eataly counter for quick meals with counter seating."
    },
    {
      "@type": "HowToStep",
      "name": "Bar Dining with Style",
      "text": "Sit at the bar at Bavette's, Carson Kitchen, or Raku; they serve the full menu there."
    },
    {
      "@type": "HowToStep",
      "name": "Get a late-night meal",
      "text": "The Peppermill runs 24 hours, Secret Pizza until 3am, and Tacos El Gordo serves al pastor until 4am on weekends."
    }
  ]
};



    return(
        <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(Article) }}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQPage) }}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howto) }}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemlist) }}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumblist) }}/>
        <Header image={`/data/majorcities/lasvegas/assets/lasvegas.webp`} bannerText="Hero banner showcasing Las Vegas food and dining experiences for travelers" />
        <BookingCTA variant="slim" text="Book your Las Vegas trip →" href="/destination/lasvegas/bookings?tab=activities&from=food" label="See food tours" />

        {/* H1 / Intro */}
        <section className={styles.splitSection} style={{textAlign: "center" }}>
                <div style={{ width: "100%", textAlign: "center" }}>
                <h1 className={styles.sectionheading}>Where to Eat in Las Vegas: The 2026 Food Guide</h1>
                <p className={styles.subheading}>
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
                    src="/data/majorcities/lasvegas/assets/lasvegas.webp"
                    alt="Las Vegas Strip skyline at dusk over a city known for celebrity-chef restaurants, buffets, and late-night dining"
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
                    src="/data/majorcities/lasvegas/assets/Bellagio-Exterior-Cooler.webp"
                    alt="Bellagio on the Las Vegas Strip, home to fine-dining and celebrity-chef restaurants"
                    fill
                    className={styles.mapImage}
                />
                </div>
        </section>

        {/* Food by neighborhood */}
        <section className={styles.splitSection}>
                <div className={styles.imageWrapper}>
                <Image
                    src="/data/majorcities/lasvegas/assets/cosmo-balcony.jpg"
                    alt="View from a Cosmopolitan balcony over the Las Vegas Strip, near food halls and neighborhood eats"
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
                    src="/data/majorcities/lasvegas/assets/lasvegas.png"
                    alt="Las Vegas at night — neon lights over a city full of cheap eats and late-night food"
                    fill
                    className={styles.mapImage}
                />
                </div>
        </section>

        {/* Food halls */}
        <section className={styles.splitSection}>
                <div className={styles.imageWrapper}>
                <Image
                    src="/data/majorcities/lasvegas/assets/Venetian-hotel.webp"
                    alt="The Venetian on the Las Vegas Strip, home to Block 16 Urban Food Hall"
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
                    src="/data/majorcities/lasvegas/assets/flamingo.jpg"
                    alt="The Flamingo on the Las Vegas Strip, a classic stop for solo travelers seeking counters and casual dining"
                    fill
                    className={styles.mapImage}
                />
                </div>
                <div className={styles.textWrapper}>
                <h2 className={styles.heading}>Eating Solo in Las Vegas: Counters and Quiet Bars</h2>
                <p className={styles.subheading}>🍕 <strong>Quick and easy when you&apos;re on your own.</strong> Secret Pizza at The Cosmopolitan is built for a slice on the go, Eggslut is a counter breakfast, and Eataly&apos;s stations let you grab pasta or a panino without a table. Nobody blinks at a solo order at any of them.</p>
                <p className={styles.subheading}>🥃 <strong>Bar seats beat a table for one.</strong> At Bavette&apos;s, Carson Kitchen and Raku, the bar is the best seat in the house when you&apos;re solo — you can order the full menu and you&apos;re not stuck staring across an empty chair.</p>
                <p className={styles.subheading}>🌮 <strong>Late and easy.</strong> The Peppermill (24 hours since 1972), Secret Pizza until 3am, and Tacos El Gordo until 4am on weekends all work for a fast bite after a show or a late one after the tables.</p>

                <Link href="/destination/lasvegas/solo-trip-to-lasvegas" className={styles.ctaButton}>
                    Las Vegas Solo Traveler Tips
                </Link>
                </div>
        </section>
        <section className={styles.splitSection}>

                <div className={styles.textWrapper}>
                <h2 className={styles.heading}>Three Off-Strip Stops Worth a Solo Visit</h2>
                <p className={styles.subheading}>🍜 <strong>Spring Mountain Road, for the real food.</strong> Chinatown is where Vegas chefs eat after their shifts — Raku for robata, Lotus of Siam for northern Thai, dozens more open past midnight. Rideshare in; it&apos;s a 10-minute hop off the Strip and the counter seats are easy for one.</p>
                <p className={styles.subheading}>🎨 <strong>The Arts District (18b).</strong> Esther&apos;s Kitchen for house-made pasta, craft breweries within a block, and indie coffee — a walkable, local neighborhood that feels nothing like the Strip.</p>
                <p className={styles.subheading}>🃏 <strong>Downtown / Fremont.</strong> Carson Kitchen for sharable small plates, Downtown Container Park&apos;s 20+ vendors, and Hugo&apos;s Cellar for an old-Vegas supper-club splurge ($60–$80pp).</p>

                <Link href="/destination/lasvegas/solo-itinerary" className={styles.ctaButton}>
                   Plan Your Las Vegas Itinerary
                </Link>
                </div>
                <div className={styles.imageWrapper}>
                <Image
                    src="/data/majorcities/lasvegas/assets/excaliberresorts.webp"
                    alt="Las Vegas resort architecture, a short rideshare from the off-Strip food scene in Chinatown and the Arts District."
                    fill
                    className={styles.mapImage}
                />
                </div>
        </section>

        {/* Buffets */}
        <section className={styles.splitSection}>
                <div className={styles.imageWrapper}>
                <Image
                    src="/data/majorcities/lasvegas/assets/Venetian-hotel.jpg"
                    alt="The Venetian, one of the Las Vegas resorts known for large buffets and dining halls."
                    fill
                    className={styles.mapImage}
                />
                </div>
                <div className={styles.textWrapper}>
                <h2 className={styles.heading}>Where to Find a Buffet Still Worth It</h2>
                <p className={styles.subheading}>🍤 <strong>The quality picks.</strong> Wicked Spoon at The Cosmopolitan ($32–$50) leans on better ingredients and individually portioned plates. Bacchanal Buffet at Caesars ($50–$70) is the most famous spread in town — go early to beat the line.</p>
                <p className={styles.subheading}>💵 <strong>The old-Vegas value.</strong> The $10–$15 buffets at off-Strip casinos like Palace Station and Gold Coast are closer to what the classic Vegas buffet actually was — no frills, plenty of plates.</p>
                <p className={styles.subheading}>🗺️ <strong>The honest take.</strong> The era of great cheap Strip buffets is mostly over; treat the buffet as one fun experience, not your every-meal plan, and put the savings toward one celebrity-chef dinner.</p>

                <Link href="/destination/lasvegas/solo-trip-to-lasvegas" className={styles.ctaButton}>
                    Solo Travel Tips for Dining Out
                </Link>
                </div>
        </section>

        {/* Price ranges */}
        <section className={styles.splitSection} style={{textAlign: "center"}}>
                <div style={{ width: "100%", textAlign: "left" }}>
                <h2 className={styles.heading}>Price ranges &amp; reservations</h2>
                <ul>
                  <li className={styles.subheading}><strong>Cheap (under ~$15):</strong> Secret Pizza, In-N-Out, Tacos El Gordo, a slice or taco at any hour.</li>
                  <li className={styles.subheading}><strong>Mid ($25–60):</strong> most off-Strip restaurants — Esther&apos;s Kitchen, Carson Kitchen, Raku — plus mid-range buffets.</li>
                  <li className={styles.subheading}><strong>Splurge ($100+):</strong> the celebrity-chef tier. Joël Robuchon, Nobu, and Bavette&apos;s book up 2–4 weeks ahead on weekends — set an alarm.</li>
                </ul>
                </div>
        </section>

        <BookingCTA variant="full" text="Book a guided Las Vegas food tour" href="/destination/lasvegas/bookings?tab=activities&from=food" label="See food tours" />
        <Footer />
        </>
    );
}
function capitalizeWords(str: string) {
  return str
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}
