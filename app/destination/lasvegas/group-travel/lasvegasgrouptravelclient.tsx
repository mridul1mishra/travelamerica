"use client";
import HeroBanner from "../../../components/Header/HeroBanner";
import NavigationHeader from "../../../components/Header/NavigationHeader";
import Image from 'next/image';
import Footer from "@/app/components/Header/Footer/footer";
import styles from "./lasvegasgrouptravel.module.css";
import BookingCTA from '@/app/components/destination/BookingCTA/BookingCTA';
import FAQAccordion from '@/app/components/destination/faqsection/faqsection';
import faqData from '@/content/destination/lasvegas/group-travel/faq/faqsection.json';

export default function LasVegasGroupTravelClient() {




return (
    <>
        <NavigationHeader />
        <HeroBanner image={`/data/majorcities/lasvegas/assets/group/lasvegas-group-travel-packing-flatlay-essentials.webp`} bannerText="Flatlay of Las Vegas group travel essentials including backpack, sunglasses, monorail pass, sneakers, and a Strip map" variant="wide" />
        <BookingCTA variant="slim" text="Book hotels for your Las Vegas trip →" href="/destination/lasvegas/bookings?tab=hotels&from=group-travel" label="Book your trip" />
        <section className={`${styles.splitSection} ${styles.introSection}`}>
                <div className={styles.introContent}>
                <h1  className={styles.sectionheading}>Las Vegas Group Travel Guide 2026</h1>
                <p className={styles.introText}>Everything your group needs for Las Vegas — a 3-day itinerary, group-friendly Strip hotels and suites, where to eat as a crowd, the best shows and clubs, plus transport and bachelor/bachelorette logistics so everyone stays together and has a good time.</p>
                <nav aria-label="Jump to section" className={styles.jumpNav}>
                  <a href="#itinerary" className={styles.ctaButton}>3-Day Itinerary</a>
                  <a href="#landmarks" className={styles.ctaButton}>Things to Do</a>
                  <a href="#dining" className={styles.ctaButton}>Dining</a>
                  <a href="#shows" className={styles.ctaButton}>Shows &amp; Clubs</a>
                </nav>
                </div>
        </section>

        {/* ── ITINERARY SECTION ── */}
        <section id="itinerary" className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/lasvegas/assets/group/lasvegas-group-itinerary-day1-strip-fountains-shows.png"
            alt="Day 1 Las Vegas group itinerary map featuring the mid-Strip resorts, the Bellagio fountains, the High Roller, and a Cirque du Soleil show"
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Day 1: Strip Lights, Group Nights</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li className={styles.subheading}><strong>Morning:</strong> Begin mid-Strip for coffee and the obligatory photos at the Bellagio fountains, then ride the High Roller observation wheel at the LINQ before the midday heat — a slow half-hour rotation is a good spot to grab skyline shots and figure out the rest of the day together.</li>
            <li className={styles.subheading}><strong>Afternoon:</strong> The Cosmopolitan and Caesars food halls are easy lunch stops where everyone can pick something different without a reservation. From there it&apos;s a short walk to the air-conditioned shops at the Forum or the Venetian&apos;s Grand Canal — flat, free, and out of the sun, so you can do as much or as little as the group wants.</li>
            <li className={styles.subheading}><strong>Evening:</strong> Have dinner mid-Strip — plenty of spots take a group of six or more if you call ahead. Then catch a Cirque du Soleil show; book seats together in advance, since walk-up group blocks are nearly impossible to find. It&apos;s the kind of night everyone talks about afterward.</li>
          </ul>
        </div>
        </section>
        <section className={styles.splitSection}>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Day 2: Desert, Dam &amp; Camaraderie</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li className={styles.subheading}><strong>Morning:</strong> Start the morning out of town. Pile the group into the van and drive the Red Rock Canyon scenic loop — it&apos;s a flat 13-mile drive with short, easy trailheads where everyone can stretch their legs, and it&apos;s far cooler and quieter than the Strip.</li>
            <li className={styles.subheading}><strong>Afternoon:</strong> Spend the afternoon at Hoover Dam, about 45 minutes from the Strip. The guided tours work well for a group and the bridge walkway over the Colorado River is a free, easy stop. Bring water — there&apos;s little shade and the desert heat catches groups off-guard.</li>
            <li className={styles.subheading}><strong>Evening:</strong> Head back to the Strip for a pool party at Encore Beach Club or a daylife-into-nightlife session — they&apos;re designed for groups, and cabanas keep everyone in one place. The bars around the mid-Strip resorts are within a few blocks of each other, so it&apos;s easy to keep the group together.</li>
          </ul>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/lasvegas/assets/group/lasvegas-group-itinerary-day2-red-rock-hoover-dam.png"
            alt="Scene-based illustration of a group on a day trip from Las Vegas to Red Rock Canyon and Hoover Dam with the desert landscape and Colorado River bridge in the background"
            fill
            className={styles.mapImage}
          />
        </div>
        </section>
        <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/lasvegas/assets/group/lasvegas-group-itinerary-day3-fremont-downtown-helicopter.png"
            alt="Scene-based illustration of Day 3 Las Vegas group itinerary with friends under the Fremont Street canopy downtown and a helicopter tour over the Strip"
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Day 3: Downtown, Heights, and Companionship</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li className={styles.subheading}><strong>Morning:</strong> Take it slower on the last day. Head downtown to the Fremont Street Experience — the canopy light shows, street performers, and old-school casinos are cheaper than the Strip and easy to do as a group on foot.</li>
            <li className={styles.subheading}><strong>Afternoon:</strong> If the group still wants a thrill, the SlotZilla zip line over Fremont Street and the Arts District&apos;s galleries and breweries are close by. Or book a daytime helicopter tour to the Grand Canyon West Rim — group pricing makes it a once-in-a-trip memory.</li>
            <li className={styles.subheading}><strong>Evening:</strong> End with a group dinner and a final show or a quiet rooftop. A Strip dinner with a skyline view is an easy sell for a mixed group — book ahead on weekends, and seat the whole party as one block so no one ends up at a separate table.</li>
          </ul>
        </div>
        </section>

        {/* ── LANDMARKS SECTION ── */}
        <section id="landmarks" className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/lasvegas/assets/group/group-travel-lasvegas-1280x853.jpg"
            alt="Route map of Las Vegas Strip attractions for group travelers, including the Bellagio fountains, the High Roller, and the Venetian."
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>The Strip: The Things Worth Doing as a Group</h2>
          <p className={styles.subheading}><strong>Start with the free ones.</strong> The Bellagio fountains and Conservatory, the Venetian&apos;s canals, and the Mirage volcano are all walkable from one another and work well for a group that wants to stay together. The High Roller observation wheel takes group bookings and holds the whole party in one cabin.</p>
          <p className={styles.subheading}><strong>For something more active,</strong> Cirque du Soleil offers group entry (10+ save about 20%), pool parties at Encore Beach Club are built for groups, and racing at the Las Vegas Motor Speedway has group packages. Downtown escape rooms cater to groups of 6–10 and are an easy team activity.</p>
          <p className={styles.subheading}><strong>To wind down,</strong> a helicopter tour gives the whole group the Strip skyline without anyone having to walk, and the Bellagio fountain show every 15 minutes after dark is a free, flat, easy finish to an evening.</p>
        </div>
        </section>
        <section className={styles.splitSection}>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Beyond the Strip: Day Trips and Things to Do by Season</h2>
          <p className={styles.subheading}><strong>Drive the Red Rock Canyon scenic loop</strong> — about 30 minutes from the Strip and a flat 13-mile route with short trailheads, so a group can do as much or as little as it wants. Hoover Dam is 45 minutes the other way with guided tours that work for a crowd.</p>
          <p className={styles.subheading}><strong>The season changes what&apos;s on.</strong> In spring and fall the desert is mild and ideal for Red Rock hikes and the Grand Canyon West Rim helicopter or bus tours; in summer the heat pushes groups to pool parties and indoor attractions, with daylife clubs in full swing.</p>
          <p className={styles.subheading}><strong>Year-round,</strong> the Fremont Street Experience downtown is free and easy for a group — the canopy light shows, SlotZilla zip line, and old-school casinos are cheaper than the Strip and walkable end to end.</p>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/lasvegas/assets/group/group-travel-lasvegas-redrock-1280x853.jpg"
            alt="Friends exploring the Red Rock Canyon scenic loop near Las Vegas with red sandstone cliffs in the background"
            fill
            className={styles.mapImage}
          />
        </div>
        </section>
        <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/lasvegas/assets/group/group-travel-lasvegas-small-fremont.webp"
            alt="Group of travelers exploring downtown Las Vegas highlights from the Fremont Street canopy to the Arts District and the SlotZilla zip line"
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Downtown &amp; the Arts District: Lights, Galleries, and Game Nights</h2>
          <p className={styles.subheading}><strong>The Fremont Street Experience is downtown&apos;s anchor</strong> — the LED canopy shows are free, the casinos are old-school and cheaper than the Strip, and group tables are easier to come by. The SlotZilla zip line flies the brave straight down the middle.</p>
          <p className={styles.subheading}><strong>The 18b Arts District</strong> a few blocks south is where locals go — independent galleries, vintage shops, and breweries with long shared tables. It&apos;s an easy crawl for a group and a refreshing break from the casino floors.</p>
          <p className={styles.subheading}><strong>If you can line the trip up with a Golden Knights or Raiders home game,</strong> T-Mobile Arena and Allegiant Stadium both handle large groups, and ride-share drop-off beats fighting for parking. Both are easy add-ons if you&apos;ve got a half day spare.</p>
        </div>
        </section>

        {/* ── DINING SECTION ── */}
        <section id="dining" className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/lasvegas/assets/group/food/lasvegas-group-food.png"
            alt="Table with shared plates, sushi, and steak overlooking the Las Vegas Strip, capturing a group dining experience"
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Where to Eat as a Group in Las Vegas</h2>
          <p className={styles.subheading}>Feeding a group in Las Vegas is easier than it looks if you pick the right kind of place. Celebrity steakhouses, sushi rooms, family-style Italian, and the big buffets are all built around shared tables — and most Strip restaurants accommodate large parties with advance booking, so call at least a week ahead for 8+.</p>
          <h3 className={styles.subsectionHeading}>Steakhouses &amp; Celebrity Kitchens</h3>
          <p className={styles.subheading}><strong>The Strip&apos;s celebrity rooms are made for an occasion.</strong> Gordon Ramsay&apos;s Hell&apos;s Kitchen and Nobu both take large tables if you book; for a private feel, ask about the chef&apos;s table or a private room when you reserve a group of ten or more.</p>
          <p className={styles.subheading}><strong>The sides are the point at a steakhouse.</strong> Get the creamed spinach, the mac and cheese, and a few towers for the table and let people share rather than ordering their own.</p>
          <p className={styles.subheading}><strong>For the all-in option,</strong> the Wicked Spoon buffet at the Cosmopolitan is the highest-quality self-managed format for a big group — everyone grazes at their own pace and meets back at a shared table.</p>
        </div>
        </section>
        <section className={styles.splitSection}>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Korean BBQ, Mocktails and Breweries</h2>
          <p className={styles.subheading}><strong>For a group that wants to cook together,</strong> Korean BBQ is the move — Jang Guem Tofu &amp; BBQ off-Strip has private rooms that seat up to 30, ideal for a whole party. Let the table share the banchan and grilled meats family-style rather than everyone ordering their own.</p>
          <p className={styles.subheading}><strong>If part of your group isn&apos;t drinking,</strong> Las Vegas&apos;s no-alcohol options have gotten good — most Strip bars now run a zero-proof menu, and the rooftop and pool bars do elaborate mocktails that look the part for photos.</p>
          <p className={styles.subheading}><strong>The breweries cluster in the Arts District downtown,</strong> so you can walk between a few. Able Baker and Nevada Brew Works have long shared tables and games, which is ideal for a group that can&apos;t agree on one spot.</p>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/lasvegas/assets/group/food/lasvegas-group-mocktail.png"
            alt="Group enjoying mocktails and drinks at a Las Vegas rooftop bar"
            width={640}
            height={960}
            className={styles.mapImage}
          />
        </div>
        </section>
        <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/lasvegas/assets/group/lasvegas-buffet-collage-group-dining.png"
            alt="Collage of Las Vegas buffet and shared-plate dishes including prime rib, sushi, crab legs, and dessert from iconic Strip buffets"
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Buffets for the Group</h2>
          <p className={styles.subheading}><strong>The classics.</strong> The Vegas buffet is a group&apos;s best friend — one price, everyone eats what they want, no arguing over the bill. The Wicked Spoon at the Cosmopolitan and the Bacchanal at Caesars are the top picks; arrive off-peak to skip the line.</p>
          <p className={styles.subheading}><strong>The splurge.</strong> Bacchanal&apos;s crab legs and carving stations are the reason it&apos;s the priciest buffet in town — worth it for a celebration meal. Send one person to scout the stations while everyone else grabs a table.</p>
          <p className={styles.subheading}><strong>Room to sit.</strong> Buffets are the rare Strip dining format with space for a big group without a reservation — most seat large parties together, which is hard to find anywhere else in town.</p>
        </div>
        </section>

        {/* ── LOGISTICS SECTION ── */}
        <section className={styles.splitSection}>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Keeping a Group Together in Las Vegas</h2>
          <p className={styles.subheading}>
            A few things that actually matter with a crowd: pick a <strong>meeting point</strong> inside every resort
            — a fountain, a valet, a named bar — because casino floors are huge and disorienting when the group splits.
            Use the <strong>Las Vegas Monorail</strong> for Strip-to-Strip hops (about $5 a ride or $15 a day) instead of
            coordinating individual Ubers for 8+, and put everyone on the same maps app so directions match. Hydrate —
            the desert heat and late nights wear groups down fast. And split costs on{" "}
            <strong>Splitwise</strong> from day one, factoring in resort fees, so there&apos;s no argument about who owes what.
            That&apos;s the whole list.
          </p>
        </div>
        <div className={`${styles.imageWrapper} ${styles.wideImageWrapper}`}>
          <Image
            src="/data/majorcities/lasvegas/assets/group/lasvegas-group-travel-packing-flatlay-essentials.webp"
            alt="Las Vegas group travel essentials including monorail pass, sunglasses, sunscreen, and a Strip map"
            fill
            className={`${styles.mapImage} ${styles.wideImage}`}
          />
        </div>
        </section>

        {/* ── SHOWS, CLUBS & POOL PARTIES FOR GROUPS SECTION ── */}
        <section id="shows" className={styles.splitSection}>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Shows, Clubs &amp; Pool Parties</h2>
          <p className={styles.subheading}>
            Book the big night early. For groups, the win is keeping seats, tables, and transport together instead of
            improvising on the Strip.
          </p>
          <p className={styles.subheading}>
            <strong>Shows.</strong> Cirque du Soleil group sales start at <strong>10+</strong>. Book one block so the
            whole party sits together.
          </p>
          <p className={styles.subheading}>
            <strong>Clubs &amp; table service.</strong> XS, Hakkasan, and Omnia tables often run a{" "}
            <strong>$1,000–$5,000</strong> minimum. Split across a group, it can beat cover plus individual drinks.
          </p>
          <p className={styles.subheading}>
            <strong>Pool parties.</strong> Reserve a cabana <strong>4–6 weeks ahead</strong> for summer weekends; it
            keeps everyone in one place.
          </p>
          <p className={styles.subheading}>
            <strong>Transport.</strong> Use a party bus or limo for club nights so the group moves together and avoids
            the taxi-line scramble.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/lasvegas/assets/group/lasvegas-group-itinerary-day1-strip-fountains-shows.png"
            alt="Las Vegas Strip at night with show marquees and club lights along the resort corridor"
            fill
            className={styles.mapImage}
          />
        </div>
        </section>

        {/* ── Las Vegas-only: bachelor/bachelorette & cost-management (NYC template has no equivalent) ── */}
        <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/lasvegas/assets/group/lasvegas-group-suite-bachelorette.png"
            alt="Group celebrating a bachelorette party in a Las Vegas Strip penthouse suite with the skyline behind them"
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Bachelor &amp; Bachelorette Logistics</h2>
          <p className={styles.subheading}><strong>Suites &amp; group rates.</strong> Las Vegas is the default bachelor/bachelorette destination for a reason. For parties of 6–15, book a penthouse suite at the Cosmopolitan, Palms, or Encore — group suite rates exist and are negotiable when you call the hotel directly rather than booking online.</p>
          <p className={styles.subheading}><strong>Tables &amp; service.</strong> VIP table service at XS, Hakkasan, or Omnia runs a $1,000–$5,000 minimum spend but includes premium bottle service — easy to split across a group. Book shows, dinners, and club tables at least 4–6 weeks ahead, especially for summer weekends.</p>
          <p className={styles.subheading}><strong>Moving the party.</strong> A party bus or limo (booked ahead) keeps a bachelor/bachelorette group together across dinner, show, and club, and avoids the logistics headache of coordinating individual rides for 8+ people late at night.</p>
        </div>
        </section>
        <section className={styles.splitSection}>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Cost Management for Groups</h2>
          <p className={styles.subheading}><strong>Watch the resort fees.</strong> Resort fees ($35–$50/night per room) are the hidden cost that catches groups off-guard. Always calculate the full nightly rate including fees before comparing hotels — the cheaper headline rate often isn&apos;t cheaper once fees are added.</p>
          <p className={styles.subheading}><strong>Negotiate the block.</strong> Pre-negotiate with the hotel: groups of 10+ rooms sometimes get fees waived entirely, and group rates run 15–25% below rack with the occasional complimentary upgrade. For 12+, a Summerlin or Henderson villa ($500–$1,500/night for the whole house) can beat multiple hotel rooms outright.</p>
          <p className={styles.subheading}><strong>Split from day one.</strong> Use Splitwise or Venmo from the start — ambiguity about who owes what is the most common group-trip friction. Load shared costs like the van, cabana, or table onto one card and reconcile in the app as you go.</p>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/lasvegas/assets/group/lasvegas-group-cost-splitting-resort-fees.png"
            alt="Illustration of Las Vegas group cost management showing resort fees, shared villa, and a cost-splitting app on a phone"
            fill
            className={styles.mapImage}
          />
        </div>
        </section>

        <BookingCTA variant="full" text="Find the right hotel for your stay" href="/destination/lasvegas/bookings?tab=hotels&from=group-travel" label="Book your trip" />
        <FAQAccordion faqs={faqData} />
        <Footer />

    </>
    );
}
