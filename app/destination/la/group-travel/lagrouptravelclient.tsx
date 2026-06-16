"use client";
import HeroBanner from "../../../components/Header/HeroBanner";
import NavigationHeader from "../../../components/Header/NavigationHeader";
import Link from 'next/link';
import Image from 'next/image';
import Footer from "@/app/components/Header/Footer/footer";
import styles from './lagrouptravel.module.css';
import BookingCTA from '@/app/components/destination/BookingCTA/BookingCTA';
import FAQAccordion from '@/app/components/destination/faqsection/faqsection';
import faqData from '@/content/destination/la/group-travel/faq/faqsection.json';

export default function LAGroupTravelClient() {




return (
    <>
        <NavigationHeader />
        <HeroBanner image={`/data/majorcities/losangeles/assets/group/la-group-travel-packing-flatlay-essentials.webp`} bannerText="Flatlay of LA group travel essentials including backpack, sunglasses, sunscreen, sneakers, and a city map" variant="wide" />
        <BookingCTA variant="slim" text="Book hotels for your Los Angeles trip →" href="/destination/la/bookings?tab=hotels&from=group-travel" label="Book your trip" />
        <section className={styles.splitSection} style={{ textAlign: "center" }}>
                <div style={{ width: "100%", textAlign: "center" }}>
                <h1  className={styles.sectionheading}>LA Group Travel Guide 2026</h1>
                <p>Everything your group needs for Los Angeles — a 3-day itinerary, the best things to do as a crowd, where to eat as a group, plus transport logistics and packing tips so everyone stays connected and has a good time.</p>
                <nav aria-label="Jump to section" style={{ marginTop: "1rem" }}>
                  <a href="#itinerary" className={styles.ctaButton} style={{ marginRight: "0.5rem" }}>3-Day Itinerary</a>
                  <a href="#landmarks" className={styles.ctaButton} style={{ marginRight: "0.5rem" }}>Things to Do</a>
                  <a href="#dining" className={styles.ctaButton}>Dining</a>
                </nav>
                </div>
        </section>

        {/* ── ITINERARY SECTION ── */}
        <section id="itinerary" className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/losangeles/images/day1_hollywood_highs_group_vibes.png"
            alt="Day 1 LA group itinerary map featuring the Hollywood Walk of Fame, Griffith Observatory, Los Feliz, and the Sunset Strip"
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Day 1: Hollywood Highs, Group Vibes</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li className={styles.subheading}>🌅Begin on the Hollywood Walk of Fame for coffee and the obligatory photos at the TCL Chinese Theatre, then drive up to Griffith Observatory before the midday crowds. Parking is $10 and the panorama of the Hollywood Sign and the whole basin is the best free view in the city — a good spot to figure out the rest of the day together.</li>
            <li className={styles.subheading}>☀️Los Feliz is an easy lunch stop where everyone can pick something different on Vermont Ave without a reservation. From there it&apos;s a short drive to Barnsdall Art Park for a flat, free garden walk with city views — do as much or as little as the group wants before heading back into town.</li>
            <li className={styles.subheading}>🌙Have dinner in West Hollywood — plenty of Sunset Strip spots take a group of six or more if you call ahead. Then catch a show at the Laugh Factory or the Comedy Store; book seats together in advance, since walk-up group tickets are hard to find. It&apos;s the kind of night everyone talks about afterward.</li>
          </ul>
        </div>
        </section>
        <section className={styles.splitSection}>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Day 2: Coast, Boardwalk &amp; Camaraderie</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li className={styles.subheading}>🌅Start the morning at the Santa Monica Pier, then rent bikes along Ocean Ave ($15–$25/hr) and cycle the flat coastal path south toward Venice Beach. It&apos;s easy to keep a group together and there&apos;s good cheap food the whole way if anyone gets hungry.</li>
            <li className={styles.subheading}>☀️Spend the afternoon on the Venice Beach Boardwalk — street performers, Muscle Beach, and the market. Abbot Kinney Blvd is one block east for better lunch options. Don&apos;t try to do the whole 22-mile coastal route; turn back when the group has had enough.</li>
            <li className={styles.subheading}>🌙Head back to Santa Monica for sunset at the pier, then dinner one block east of the Third Street Promenade on 2nd or 4th Street for fewer crowds. The bars around Main Street are within a few blocks of each other, so it&apos;s easy to keep the group together.</li>
          </ul>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/losangeles/assets/group/la-group-itinerary-day2-santa-monica-venice-coast.png"
            alt="Scene-based illustration of a group cycling the Santa Monica to Venice Beach coastal path with the pier and boardwalk in the background"
            fill
            className={styles.mapImage}
          />
        </div>
        </section>
        <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/losangeles/assets/group/la-group-itinerary-day3-getty-downtown-arts-district.png"
            alt="Scene-based illustration of Day 3 LA group itinerary with friends at the Getty Center terrace and the Downtown LA skyline"
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Day 3: Art, Downtown, and Companionship</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li className={styles.subheading}>🌅Take it slower on the last day. Start at the Getty Center when it opens — admission is free, parking is $20, and arriving by 10am beats the fill-up. The tram up, the collection, and the garden terrace views are an easy hour or two for a group.</li>
            <li className={styles.subheading}>☀️Drive to Downtown LA for lunch at Grand Central Market, where everyone picks their own stall — ideal for a crowd. If the group still wants art, The Broad is close by (book ahead, $18) and the spiral collection moves quickly as a group.</li>
            <li className={styles.subheading}>🌙End in the Arts District — gallery walks at Hauser &amp; Wirth are free, and dinner at Bestia is excellent if you book ahead. For a cheaper, livelier finish, Tacos 1986 does $5 tacos with a line worth waiting in. Book the sit-down spots ahead on weekends.</li>
          </ul>
        </div>
        </section>

        {/* ── LANDMARKS SECTION ── */}
        <section id="landmarks" className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/losangeles/assets/group/group-travel-la-1280x853.jpg"
            alt="Route map of Los Angeles attractions for group travelers, including Hollywood, Griffith Observatory, and Santa Monica."
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Hollywood &amp; Central LA: The Things Worth Doing as a Group</h2>
          <p className={styles.subheading}>🚶‍♂️ Start with the big ones. Universal Studios Hollywood is a full day, so buy group tickets in advance — group rates save 20%+ and Express passes keep a crowd moving. The Warner Bros. Studio Tour runs 3.5 hours and is excellent for TV and film fans who want something guided together.</p>
          <p className={styles.subheading}>📸 For something more active, escape rooms in WeHo and Hollywood cater to groups of 6–10 and are an easy team activity. Comedy clubs on the Sunset Strip — the Laugh Factory and the Comedy Store — take group reservations if you book ahead.</p>
          <p className={styles.subheading}>🧭 To wind down, Griffith Observatory gives the whole group the city skyline without anyone paying admission, and Barnsdall Art Park is a flat, easy stroll with views if you want a quieter afternoon.</p>
        </div>
        </section>
        <section className={styles.splitSection}>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>The Coast: Beach Days and Things to Do by Season</h2>
          <p className={styles.subheading}>🚶‍♂️ Walk or cycle the Santa Monica to Venice path — about 20 minutes by bike at a group pace, and it puts the ocean beside you the whole way. You come out near the boardwalk, the cafes, and Abbot Kinney.</p>
          <p className={styles.subheading}>📸 The season changes what&apos;s on. In summer there are group surf lessons in Santa Monica (from $100/person) and beach fire pits at sunset (permit required, $45); in spring and fall the weather is mild and the coastal path is far less crowded than peak July.</p>
          <p className={styles.subheading}>🧭 Year-round, the Santa Monica Pier and Venice Boardwalk are free and easy for a group — bike rentals, street performers, and plenty of casual food spots where everyone can order their own.</p>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/losangeles/assets/group/group-travel-la-coast-1280x853.jpg"
            alt="Friends enjoying the Santa Monica beach waterfront with the pier in the background"
            fill
            className={styles.mapImage}
          />
        </div>
        </section>
        <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/losangeles/assets/group/group-travel-la-small-downtown.webp"
            alt="Group of travelers exploring Downtown LA highlights from Grand Central Market to The Broad and the Arts District"
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Downtown LA: Markets, Museums, and Game Nights</h2>
          <p className={styles.subheading}>🏟️ If you can line the trip up with a Dodgers or Lakers home game, group tickets are some of the better value in the city. Crypto.com Arena and Dodger Stadium both handle large groups, and rideshare drop-off beats fighting for parking.</p>
          <p className={styles.subheading}>🚶‍♀️ Grand Central Market is DTLA&apos;s food hall and, locals will tell you, the easiest place to feed a crowd — everyone picks their own stall and meets at a shared table. Book nothing; just show up off-peak.</p>
          <p className={styles.subheading}>🧭 For something quieter, The Broad is a quick, free-admission contemporary art stop (reserve ahead), and the Arts District galleries like Hauser &amp; Wirth rarely get crowded. Both are easy add-ons if you&apos;ve got a half day spare.</p>
        </div>
        </section>

        {/* ── DINING SECTION ── */}
        <section id="dining" className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/losangeles/assets/group/food/la-group-food.png"
            alt="Table with tacos, Korean BBQ, and shared plates overlooking the Los Angeles skyline, capturing a group dining experience"
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Where to Eat as a Group in LA</h2>
          <p className={styles.subheading}>Feeding a group in Los Angeles is easier than it looks if you pick the right kind of place. Korean BBQ, taquerias, family-style Italian, and food halls are all built around shared plates and big tables — but most LA restaurants can&apos;t seat 8+ without a reservation, so call at least a week ahead.</p>
          <h3 className={styles.heading}>Korean BBQ in Koreatown</h3>
          <p className={styles.subheading}>🍖 Koreatown is the move for a crowd — communal grilling is built into the format. Park&apos;s BBQ is the famous one and takes large tables if you book; for something simpler, Quarters or Kang Ho-dong Baekjeong do all-you-can-eat sets that make ordering for a big table painless.</p>
          <p className={styles.subheading}>🥬 The banchan are the point. Let the table share the sides and the grilled meats family-style rather than everyone ordering their own — it&apos;s cheaper and more fun for a group.</p>
          <p className={styles.subheading}>🍧 For dessert, end the night with patbingsu (shaved ice) at a K-town cafe — order a couple of big bowls for the table; they&apos;re built to split.</p>
        </div>
        </section>
        <section className={styles.splitSection}>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Tacos, Mocktails and Breweries</h2>
          <p className={styles.subheading}>🌮 For a group, tacos are the cheapest way to feed everyone fast. Tacos 1986 in DTLA is the reliable standby; if you&apos;ve got time to sit, Guisados does braised-meat tacos with long tables. Order a spread for the middle and let people graze.</p>
          <p className={styles.subheading}>🍹 If part of your group isn&apos;t drinking, LA&apos;s no-alcohol options have gotten good. Try the zero-proof menu at Death &amp; Co downtown, agua frescas at any taqueria, or a kombucha flight at an Arts District cafe.</p>
          <p className={styles.subheading}>🍺 The breweries cluster in the Arts District, so you can walk between a few. Angel City Brewery is the original anchor, Arts District Brewing has games and long shared tables, and Mumford does small-batch pours. Most have communal seating, which is ideal for a group.</p>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/losangeles/assets/group/food/la-group-mocktail.png"
            alt="Group enjoying mocktails and drinks at a Los Angeles rooftop bar"
            width={640}
            height={960}
            className={styles.mapImage}
          />
        </div>
        </section>
        <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/losangeles/assets/group/la-food-truck-collage-group-dining.png"
            alt="Collage of Los Angeles food trucks and street food including tacos, Korean-Mexican fusion, and loaded fries from iconic LA spots"
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Food Trucks for the Group</h2>
          <p className={styles.subheading}>🌮 <strong>The classics.</strong> LA&apos;s taco trucks are a group&apos;s best friend — cheap, fast, and everywhere. Leo&apos;s Tacos (al pastor off the spit) and Mariscos Jalisco (the dorado shrimp tacos) are worth a detour. Order a big mixed round and let people build their own.</p>
          <p className={styles.subheading}>🌯 <strong>The fusion crowd.</strong> Kogi BBQ kicked off LA&apos;s Korean-Mexican truck scene and still has a following — track it on the app, since it moves. Send one person ahead to order while everyone else finds a spot to sit.</p>
          <p className={styles.subheading}>🗺️ <strong>Room to sit.</strong> Smorgasburg LA on Sundays gathers dozens of vendors in one lot in the Arts District with shared tables — rare in a city built for grab-and-go, and ideal for a group that can&apos;t agree on one cuisine.</p>
        </div>
        </section>

        {/* ── SAFETY & PACKING SECTION ── */}
        <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/losangeles/assets/group/la-group-travel-safety-navigation-essentials1.png"
            alt="Illustration of LA group travel safety essentials including emergency preparedness, navigation apps, and coordination tools for a car-dependent city."
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Logistics and Navigation for Group Explorers</h2>
          <p className={styles.subheading}><strong>Urban vigilance:</strong> Around busy spots like Venice Boardwalk and the Hollywood Walk of Fame, group travelers should stay aware of pickpockets and keep valuables secure. Lock everything in the trunk before you park — car break-ins are the most common issue. Share emergency contacts, know local service numbers, and identify nearby medical facilities for quick support.</p>
          <p className={styles.subheading}><strong>Group preparedness:</strong> In a car-dependent city, the real risk is the group getting separated across vehicles or losing the car in a huge lot. Carry portable chargers, a shared first aid kit, sunscreen, and water, and distribute ID copies. Photograph your parking spot and section. These LA tips ensure readiness, coordination, and stress-free group travel.</p>
          <p className={styles.subheading}><strong>Smart navigation:</strong> LA traffic and sprawling distances can overwhelm groups and cause separation. Using tools like Google Maps, Waze, and a shared location pin helps plan routes around the 101 and 405, avoid rush hour, and keep everyone coordinated for smoother, stress-free travel together.</p>
        </div>
        </section>
        <section className={`${styles.splitSection} ${styles.mobileImageFirst}`}>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>LA Group Travel Packing Playbook</h2>
          <p className={styles.subheading}><strong>🧼 Pack Essential</strong>Group travelers in LA spend long days in the sun and the car, so pack comfortable shoes, portable chargers, reusable water bottles, and serious sunscreen. Add anti-theft bags and weather-ready layers for cool coastal evenings to stay secure, connected, and healthy across a spread-out city.</p>
          <p className={styles.subheading}><strong>🧥 Pack Comfort</strong>Group travelers in LA gain extra comfort from a shared cooler in the van, sunglasses and hats for the beach and observatory, offline maps for canyon dead zones, foldable mats for beach and park breaks, and spray sunscreen for shared protection, with backups like light jackets or hotel cards.</p>
          <p className={styles.subheading}><strong>🎒 Pack Smart</strong>Bluetooth item trackers for bags and car keys, a parking-spot photo and section note for huge lots, NFC contact tags or QR regroup cards for quick reconnection, a shared multi-port charging cable for the car, and a notebook for addresses, reducing loss, disorientation, and coordination friction.</p>
        </div>
        <div className={styles.imageWrappermid}>
          <Image
            src="/data/majorcities/losangeles/assets/group/la-group-travel-gear-guide-essentials-comfort-smart.png"
            alt="Three-part illustration showing LA group travel packing tips: essentials like sunscreen and charger, comfort items like sunglasses and layers, and smart gear like trackers, journal, and navigation tools."
            fill
            className={styles.mapImage}
          />
        </div>
        </section>
        <section className={styles.splitSection}>
          <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/losangeles/assets/group/la-group-travel-plan-pack-enjoy-guide.png"
            alt="Infographic showing LA group travel essentials across planning, packing, and enjoyment tiers with neutral background"
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Group Travel Tips: Planning and Bonding simplified</h2>
          <p className={styles.subheading}><strong>🎭</strong>Group travel planning in LA requires flexible accommodation, a shared van or coordinated drivers, anchor reservations like studio tours, and a parking plan. Booking a house, syncing arrival times, reserving activities early, and budgeting parking improve logistics, reduce stress, and deliver memorable, efficient, enjoyable group travel.</p>
          <p className={styles.subheading}><strong>🛍️</strong>Packing cubes, shared first-aid kits, sunscreen, and secure communication apps dominate group queries. Solutions streamline luggage, enhance safety, and deliver benefits like reduced stress, smoother coordination, and memorable group travel experiences across a spread-out city.</p>
          <p className={styles.subheading}><strong>🎶</strong>Group journeys thrive when inclusive activities, balanced downtime, and early event bookings are prioritized. Coordinating shared meals — a Koreatown BBQ, a Grand Central Market lunch — and beach or museum outings strengthens bonds, reduces stress, and creates lasting memories without complicating logistics.</p>
        </div>

        </section>
        <BookingCTA variant="full" text="Find the right hotel for your stay" href="/destination/la/bookings?tab=hotels&from=group-travel" label="Book your trip" />
        <FAQAccordion faqs={faqData} />
        <Footer />

    </>
    );
}
