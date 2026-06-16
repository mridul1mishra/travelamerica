"use client";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import NavigationHeader from "./components/NavigationHeader/NavigationHeader";
import Link from 'next/link';
import Image from 'next/image';
import Footer from "./components/Footer/Footer";
import styles from '../group-travel/grouptravel.module.css';
import BookingCTA from "./components/BookingCTA/BookingCTA";
import FAQAccordion from "./components/FAQAccordion/FAQAccordion";
import faqData from '@/content/destination/nyc/group-travel/faq/faqsection.json';

export default function GroupTravelPage() {




return (
    <>
        <NavigationHeader />
        <HeroBanner image={`/data/majorcities/newyork/assets/group/nyc-group-travel-packing-flatlay-essentials.webp`} bannerText="Flatlay of NYC group travel essentials including backpack, metro card, sneakers, and city map" />
        <BookingCTA variant="slim" text="Book your New York trip →" href="/destination/nyc/booking?tab=hotels&from=group-travel" label="Book your trip" />
        <section className={styles.splitSection} style={{ textAlign: "center" }}>
                <div style={{ width: "100%", textAlign: "center" }}>
                <h1  className={styles.sectionheading}>NYC Group Travel Guide 2026</h1>
                <p>Everything your group needs for New York City — a 3-day itinerary, the best landmarks by borough, where to eat as a crowd, and how to book Broadway as a group.</p>
                <nav aria-label="Jump to section" style={{ marginTop: "1rem" }}>
                  <a href="#itinerary" className={styles.ctaButton} style={{ marginRight: "0.5rem" }}>3-Day Itinerary</a>
                  <a href="#landmarks" className={styles.ctaButton} style={{ marginRight: "0.5rem" }}>Landmarks</a>
                  <a href="#dining" className={styles.ctaButton} style={{ marginRight: "0.5rem" }}>Dining</a>
                  <a href="#broadway" className={styles.ctaButton}>Broadway</a>
                </nav>
                </div>
        </section>

        {/* ── ITINERARY SECTION ── */}
        <section id="itinerary" className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/newyork/assets/group/nyc-group-itinerary-day1-times-square-chelsea-market-broadway.png"
            alt="Day 1 NYC group itinerary map featuring Times Square, Top of the Rock, Chelsea Market, High Line, Hell's Kitchen, and Broadway highlights"
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Day 1: Broadway Nights, Group Delights</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li className={styles.subheading}>🌅Begin in Times Square for coffee and the obligatory photos, then walk over to Top of the Rock at Rockefeller Center. Go up early before the midday crowds — it&apos;s a good spot to grab skyline shots and figure out the rest of the day together.</li>
            <li className={styles.subheading}>☀️Chelsea Market is an easy lunch stop where everyone can pick something different without a reservation. From there it&apos;s a few minutes to the High Line, the old elevated rail line turned walkway. It&apos;s flat, it&apos;s free, and you can do as much or as little of it as the group wants before heading back down into the city.</li>
            <li className={styles.subheading}>🌙Have dinner in Hell&apos;s Kitchen — there are plenty of spots that take a group of six or more if you call ahead. Then catch a Broadway show; book seats together in advance, since walk-up group tickets are hard to find. It&apos;s the kind of night everyone talks about afterward.</li>
          </ul>
        </div>
        </section>
        <section className={styles.splitSection}>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Day 2: Culture, Landmarks &amp; Camaraderie</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li className={styles.subheading}>🌅Start the morning up in Harlem at the Apollo Theater, then work your way down through Chinatown and Little Italy. The markets and old churches are worth a slow walk, and there&apos;s good cheap food the whole way if anyone gets hungry.</li>
            <li className={styles.subheading}>☀️Spend the afternoon at one or two museums — don&apos;t try to do all of them. MoMA has the Van Gogh everyone wants to see; the Natural History Museum is the better pick if there are kids in the group; the Tenement Museum runs guided tours that work well for a small group. Pick what fits your crowd.</li>
            <li className={styles.subheading}>🌙Head back to Times Square after dark to see it lit up, then catch a Broadway show if you didn&apos;t on Day 1. Afterward, the East Village has plenty of bars and live music within a few blocks of each other, so it&apos;s easy to keep the group together.</li>
          </ul>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/newyork/assets/group/nyc-group-itinerary-day2-harlem-museums-east-village.png"
            alt="Scene-based illustration of group interaction at Natural History Museum with kids pointing at dinosaur skeleton and adults reacting with playful awe"
            fill
            className={styles.mapImage}
          />
        </div>
        </section>
        <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/newyork/assets/group/nyc-group-itinerary-day3-dinner-cruise-dancing-manhattan.png"
            alt="Scene-based illustration of Day 3 NYC group itinerary with friends dancing on a Hudson River dinner cruise, Manhattan skyline, and live jazz band"
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Day 3: Culture, Cruise, and Companionship</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li className={styles.subheading}>🌅Take it slower on the last day. Start at the Met when it opens, then walk straight out the back into Central Park — the entrance is right there. An hour by the lake is a nice break before the next stop.</li>
            <li className={styles.subheading}>☀️If the group still wants more art, the Guggenheim is close by and the spiral ramp makes it quick to do as a group. The Frick nearby is smaller and quieter if people are museum&apos;d out. Either is an easy afternoon.</li>
            <li className={styles.subheading}>🌙End with a Hudson River dinner cruise. You get dinner and the skyline at night in one go, and it&apos;s an easy sell for a mixed group — there&apos;s deck space if you want air and seating if you want to sit and talk. Book ahead on weekends.</li>
          </ul>
        </div>
        </section>

        {/* ── LANDMARKS SECTION ── */}
        <section id="landmarks" className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/newyork/assets/group/group-travel-nyc-1280x853.jpg"
            alt="Route map of Manhattan landmarks for group travelers, including Times Square, Central Park, and Empire State Building."
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Manhattan: The Landmarks Worth Doing as a Group</h2>
          <p className={styles.subheading}>🚶‍♂️ Start with the big ones. The Statue of Liberty and Ellis Island take a half day with the ferry, so book the earliest slot you can — lines are much shorter before 10am. Times Square and Rockefeller Center are short walks apart and work well for a group that wants to stay together.</p>
          <p className={styles.subheading}>📸 For something more active, MoMA and the Met both offer guided group entry that skips the ticket line. Midtown escape rooms are an easy team activity, and food tours through Chinatown and Little Italy keep everyone moving and fed at the same time.</p>
          <p className={styles.subheading}>🧭 To wind down, a Hudson River cruise gives the whole group the skyline without anyone having to walk, and the High Line is a flat, easy stroll that ends right at Chelsea Market if you want lunch after.</p>
        </div>
        </section>
        <section className={styles.splitSection}>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Brooklyn: Skyline Walks and Things to Do by Season</h2>
          <p className={styles.subheading}>🚶‍♂️ Walk the Brooklyn Bridge from the Manhattan side toward DUMBO — that direction puts the skyline in front of you the whole way. It&apos;s about 25 minutes at a group pace, and you come out near the waterfront parks and cafes.</p>
          <p className={styles.subheading}>📸 The season changes what&apos;s on. In winter there&apos;s ice skating at the LeFrak Center in Prospect Park and holiday lights; in spring the Brooklyn Botanic Garden&apos;s cherry blossoms are the draw, usually late April.</p>
          <p className={styles.subheading}>🧭 Summer brings free concerts and brewery tours around Williamsburg and Bushwick — easy for a group since you can book a tasting ahead and most spots have long shared tables.</p>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/newyork/assets/group/group-travel-nyc-brooklyn-1280x853.jpg"
            alt="Friends enjoying city waterfront with urban skyline in the background"
            fill
            className={styles.mapImage}
          />
        </div>
        </section>
        <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/newyork/assets/group/group-travel-nyc-small-bronx.webp"
            alt="Group of travelers exploring Bronx seasonal highlights from Yankee Stadium to Wave Hill and Poe's Cottage"
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>The Bronx: Ballgames, Gardens, and a Real Little Italy</h2>
          <p className={styles.subheading}>🗽 If you can line the trip up with a Yankees home game, group tickets are some of the cheapest in the city. The New York Botanical Garden is a short ride away and has group rates, with the orchid show in spring and a train show around the holidays.</p>
          <p className={styles.subheading}>🚶‍♀️ Arthur Avenue is the Bronx&apos;s Little Italy and, locals will tell you, the better one. It&apos;s mostly family-run delis, bakeries and sit-down places — book ahead for a group of more than six since the rooms are small.</p>
          <p className={styles.subheading}>🧭 For something quieter, Poe&apos;s Cottage is a quick, cheap stop for the literary-minded, and Wave Hill is a public garden overlooking the Hudson that rarely gets crowded. Both are easy add-ons if you&apos;ve got a half day spare.</p>
        </div>
        </section>

        {/* ── DINING SECTION ── */}
        <section id="dining" className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/newyork/assets/group/food/nyc-group-food.png"
            alt="Table with pizza, pasta, taco, and soda overlooking the Empire State Building in New York City, capturing a group dining experience"
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Where to Eat as a Group in NYC</h2>
          <p className={styles.subheading}>Feeding a group in New York is easier than it looks if you pick the right kind of place. Family-style restaurants, Korean BBQ, dim sum and steakhouses are all built around shared plates and big tables — and most take reservations for a crowd if you call ahead.</p>
          <h3 className={styles.heading}>Steakhouses in Brooklyn</h3>
          <p className={styles.subheading}>🍜 Peter Luger is the famous one — cash or their own card only, so warn the group before the bill lands. For something simpler, Le Relais de Venise does one thing, steak frites with unlimited fries, which makes ordering for a big table painless.</p>
          <p className={styles.subheading}>🍷 The sides are the point at a steakhouse. Get the creamed spinach, the mac and cheese and a potato gratin for the table and let people share rather than ordering their own.</p>
          <p className={styles.subheading}>🥯 For dessert, Junior&apos;s cheesecake is the Brooklyn classic, but the Blackout Cake is the one locals argue about. Either way, order a couple for the table — the slices are big enough to split.</p>
        </div>
        </section>
        <section className={styles.splitSection}>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Pizza, Mocktails and Breweries</h2>
          <p className={styles.subheading}>🏙️ For a group, pizza by the slice is the cheapest way to feed everyone fast. Joe&apos;s in the Village is the reliable standby; if you&apos;ve got time to sit, a whole pie at a Brooklyn spot like Roberta&apos;s is worth the trip. Fold it in half — that&apos;s how it&apos;s eaten here.</p>
          <p className={styles.subheading}>🍣 If part of your group isn&apos;t drinking, the no-alcohol options have gotten good. Try Beets &apos;N&apos; Cream at Bangkok Supper Club, the Earhart at Getaway in Greenpoint, or the Virgin Garibaldi at Dante.</p>
          <p className={styles.subheading}>🥟 The breweries cluster in East Williamsburg, so you can walk between a few. Brooklyn Brewery is the original, Other Half is known for hazy IPAs, and Grimm does sours. Most have long shared tables, which is ideal for a group.</p>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/newyork/assets/group/food/nyc-group-mocktail.png"
            alt="Group enjoying mocktails and drinks at a New York City bar"
            width={640}
            height={960}
            className={styles.mapImage}
          />
        </div>
        </section>
        <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/newyork/assets/nyc-bagel-collage-murrays-blackseed-solo-dining.png"
            alt="Collage of New York City bagels including smoked salmon, rainbow, and sesame varieties from iconic shops like Murray's and Black Seed"
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Bagels for the Group</h2>
          <p className={styles.subheading}>🥯 <strong>The classics.</strong> Murray&apos;s, Ess-a-Bagel and Absolute hand-roll and boil theirs the old way. For a group, order a dozen mixed with a couple of tubs of cream cheese and let people build their own.</p>
          <p className={styles.subheading}>🧈 <strong>The newer crowd.</strong> Black Seed does wood-fired, Montreal-style bagels, and Apollo has a serious following — expect a line on weekends, so send one person ahead while everyone else gets coffee.</p>
          <p className={styles.subheading}>🗺️ <strong>Room to sit.</strong> Hudson Bagel and Tompkins Square have counters and a few outdoor seats, which is rare — most NYC bagel shops are grab-and-go.</p>
        </div>
        </section>

        {/* ── LOGISTICS SECTION (replaces AI filler) ── */}
        <section className={styles.splitSection}>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Keeping a Group Together in NYC</h2>
          <p className={styles.subheading}>
            A few things that actually matter with a crowd: pick a <strong>meeting point</strong> at every stop
            — a subway exit, a specific corner — so no one is lost when the group splits. Put everyone on{" "}
            <strong>OMNY</strong> (tap your own card or phone — no more shared MetroCards) and the same maps app
            (<strong>Citymapper</strong> or the <strong>MTA app</strong>) so directions match. Avoid moving the whole
            group through Times Square or Penn Station at rush hour; that&apos;s where groups get separated. Comfortable
            shoes — you&apos;ll walk 5–7 miles a day. That&apos;s the whole list.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/newyork/assets/group/nyc-group-travel-packing-flatlay-essentials.webp"
            alt="NYC group travel essentials including metro card, sneakers, and city map"
            fill
            className={styles.mapImage}
          />
        </div>
        </section>

        {/* ── BROADWAY FOR GROUPS SECTION ── */}
        <section id="broadway" className={styles.splitSection}>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Broadway for Groups: Tickets, Timing &amp; the Best Shows for a Mixed Crowd</h2>
          <p className={styles.subheading}>
            A Broadway show is the easiest &quot;everyone remembers it&quot; night of a group trip — but group seats need
            planning, because walk-up blocks are nearly impossible to find for a crowd.
          </p>
          <p className={styles.subheading}>
            <strong>What counts as a group.</strong> Most shows define group sales at <strong>10+</strong>, though
            minimums vary by show — some run up to about 20.
          </p>
          <p className={styles.subheading}>
            <strong>How to book.</strong> Official group sales go through <strong>Broadway Inbound</strong> (a Shubert
            Organization division) or the Broadway.org show pages, which list each show&apos;s minimum and contact link.
            Groups of 10+ can save <strong>up to ~50%</strong> off single-ticket prices — sometimes landing seats
            around <strong>$35 each</strong>, depending on the show, seats, and date.
          </p>
          <p className={styles.subheading}>
            <strong>How far ahead.</strong> Book early — the discount is bigger the further out you go. Popular titles
            also sell their best group blocks first, so don&apos;t wait until the week before.
          </p>
          <p className={styles.subheading}>
            <strong>Best shows for a mixed group.</strong> Big, music-driven productions travel best across ages —
            long-runners and jukebox or family titles over dialogue-heavy dramas. Check the current lineup on
            Broadway.org when you&apos;re planning.
          </p>
          <p className={styles.subheading}>
            <strong>If you didn&apos;t plan ahead.</strong> The <strong>TKTS</strong> booth at the Times Square red
            steps sells same-day seats at 20–50% off from ~3 PM — but you usually can&apos;t keep a big group
            together, so split into pairs and meet at the theater.
          </p>
          <p className={styles.subheading}>
            <strong>Tip:</strong> seat the group together by booking as one block; piecing it together later
            rarely keeps everyone in the same section.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/newyork/assets/group/nyc-group-itinerary-day1-times-square-chelsea-market-broadway.png"
            alt="Broadway theater district in New York City — Times Square at night"
            fill
            className={styles.mapImage}
          />
        </div>
        </section>

        <BookingCTA variant="full" text="Book flights and stays for your group" href="/destination/nyc/booking?tab=hotels&from=group-travel" label="Book your trip" />
        <FAQAccordion faqs={faqData} />
        <Footer />

    </>
    );
}
