"use client";
import Header from "@/app/components/Header/header";
import Link from 'next/link';
import Image from 'next/image';
import Footer from "@/app/components/Header/Footer/footer";
import styles from './grouptravel.module.css';
import BookingCTA from '@/app/components/destination/BookingCTA/BookingCTA';
import FAQAccordion from '@/app/components/destination/faqsection/faqsection';
import faqData from '@/content/destination/orlando/group-travel/faq/faqsection.json';

export default function OrlandoGroupTravelClient() {
  const schema1 = {
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
      "name": "Orlando",
      "item": "https://www.travelsamericas.com/destination/orlando/"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Group Travel",
      "item": "https://www.travelsamericas.com/destination/orlando/group-travel"
    }
  ]
};
  const schema2 = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.travelsamericas.com/destination/orlando/group-travel"
  },
  "headline": "Orlando Group Travel Guide 2026: Itinerary, Theme Parks & Dining",
  "description": "Everything your group needs for Orlando — a 3-day theme-park itinerary, Disney and Universal group ticket strategies, where to eat as a crowd, and transport and lodging logistics.",
  "keywords": ["Group travel Orlando", "Orlando group itinerary", "Disney group tickets", "Universal group rates", "Orlando vacation rentals", "Orlando group dining", "Orlando group travel"],
  "image": {
    "@type": "ImageObject",
    "url": "https://www.travelsamericas.com/data/majorcities/orlando/assets/group/orlando-group-travel-packing-flatlay-essentials.webp",
    "height": 600,
    "width": 1200
  },
  "author": {
    "@type": "Organization",
    "name": "Travels Americas"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Travels Americas",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.travelsamericas.com/logo.png"
    }
  },
  "datePublished": "2025-11-29",
  "dateModified": "2026-06-15",
  "about": [
    { "@type": "Thing", "name": "Group Travel" },
    { "@type": "Place", "name": "Orlando" }
  ]
};
const schema3 = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Disney World offer group discounts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Disney has no standard group discount, but buying date-based tickets in advance locks in lower pricing. Youth, school, and non-profit groups of 10+ qualify for special group rates through Disney's Youth Programs/group sales line, and corporate groups can book private event packages."
      }
    },
    {
      "@type": "Question",
      "name": "What is the minimum group size for Universal Orlando rates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Universal offers group rates for parties of 15 or more — contact their group sales team directly for pricing, typically 15–25% off rack rates. Annual passholder discounts also stack if any members have passes."
      }
    },
    {
      "@type": "Question",
      "name": "Where should a large group stay in Orlando?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A 4–6 bedroom vacation rental with a private pool in Kissimmee or the Four Corners area sleeps 8–12 for $150–$400/night total — usually cheaper than multiple hotel rooms and it adds a kitchen. On-site Disney hotels trade space for free park transport and early entry."
      }
    }
  ]
};
const schema4 = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Orlando Group Travel Checklist",
  "itemListOrder": "Unordered",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Portable chargers and battery packs for full park days" },
    { "@type": "ListItem", "position": 2, "name": "Group ID copies or shared emergency contacts" },
    { "@type": "ListItem", "position": 3, "name": "My Disney Experience and Universal apps installed for everyone" },
    { "@type": "ListItem", "position": 4, "name": "Shared first aid kit, sunscreen, ponchos, and water bottles" },
    { "@type": "ListItem", "position": 5, "name": "Group coordination apps (WhatsApp, Google Maps)" },
    { "@type": "ListItem", "position": 6, "name": "Pre-arranged meeting points at park entrances and lands" },
    { "@type": "ListItem", "position": 7, "name": "Disney dining reservations booked 60 days ahead for groups" },
    { "@type": "ListItem", "position": 8, "name": "Minivan or charter van booked for non-Disney park days" }
  ]
};

const schema5 = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Keep a Group Together in Orlando",
  "description": "Practical steps for group travelers to navigate Orlando's theme parks and resort areas using park transport, meeting points, and shared apps.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Set a meeting point in every park",
      "text": "Pick a named landmark — the castle hub, a ride entrance, a specific gate — at each park so no one is lost when the group splits."
    },
    {
      "@type": "HowToStep",
      "name": "Put everyone on the park apps",
      "text": "My Disney Experience and the Universal Orlando app handle mobile ordering, wait times, and party plans — install them for the whole group before you arrive."
    },
    {
      "@type": "HowToStep",
      "name": "Use Disney transport on Disney days",
      "text": "Buses, the monorail, the Skyliner, and boats move the whole group between Disney parks and resorts for free if you stay on property."
    },
    {
      "@type": "HowToStep",
      "name": "Rent a minivan for non-Disney days",
      "text": "For Universal, Kennedy Space Center, or multi-park days, a 7–12 seat minivan keeps the group together instead of coordinating multiple rideshares."
    },
    {
      "@type": "HowToStep",
      "name": "Book dining 60 days out",
      "text": "Disney table-service reservations open 60 days ahead and the popular ones fill the morning they open — book as one party for the whole group."
    },
    {
      "@type": "HowToStep",
      "name": "Use single-rider and Rider Switch when interests split",
      "text": "Single-rider queues and Disney's Rider Switch let a mixed-age group cover thrill rides without everyone waiting twice."
    },
    {
      "@type": "HowToStep",
      "name": "Budget for parking and skip-the-line passes",
      "text": "Plan $30 a day for parking at non-resort stops and decide up front whether Genie+ or Express Pass is worth it for the group's pace."
    }
  ]
};



return (
    <>
        <Header image={`/data/majorcities/orlando/assets/group/orlando-group-travel-packing-flatlay-essentials.webp`} bannerText="Flatlay of Orlando group travel essentials including backpack, park tickets, sunglasses, sunscreen, ponchos, sneakers, and a theme park map" />
        <BookingCTA variant="slim" text="Book hotels and park tickets for your Orlando trip →" href="/destination/orlando/bookings?tab=hotels&from=group-travel" label="Book your trip" />
        <section className={styles.splitSection} style={{ textAlign: "center" }}>
                <div style={{ width: "100%", textAlign: "center" }}>
                <h1  className={styles.sectionheading}>Orlando Group Travel Guide 2026</h1>
                <p>Everything your group needs for Orlando — a 3-day theme-park itinerary, the parks and attractions worth doing as a crowd, where to eat as a group, plus ticket strategy, transport, and lodging logistics so everyone stays together and has a good time.</p>
                <nav aria-label="Jump to section" style={{ marginTop: "1rem" }}>
                  <a href="#itinerary" className={styles.ctaButton} style={{ marginRight: "0.5rem" }}>3-Day Itinerary</a>
                  <a href="#parks" className={styles.ctaButton} style={{ marginRight: "0.5rem" }}>Parks &amp; Attractions</a>
                  <a href="#dining" className={styles.ctaButton} style={{ marginRight: "0.5rem" }}>Dining</a>
                  <a href="#tickets" className={styles.ctaButton}>Group Tickets</a>
                </nav>
                </div>
        </section>

        {/* ── ITINERARY SECTION ── */}
        <section id="itinerary" className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/orlando/assets/group/orlando-group-itinerary-day1-magic-kingdom-disney-springs.png"
            alt="Day 1 Orlando group itinerary map featuring Magic Kingdom, Cinderella Castle, the parade route, and an evening at Disney Springs"
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Day 1: Castle Mornings, Group Magic</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li className={styles.subheading}>🌅Start at Magic Kingdom for rope drop — get there before the official opening so the whole group is through the gate and down Main Street for the castle photo before the midday heat and crowds. Pick a meeting point at the hub in front of the castle in case anyone drifts off to a different ride.</li>
            <li className={styles.subheading}>☀️Split by interest in the afternoon: thrill-seekers take Space Mountain and Big Thunder while families do Fantasyland, then regroup for a quick-service lunch you can mobile-order from the app so nobody waits in a counter line. Use Rider Switch on the big rides if there are little ones along.</li>
            <li className={styles.subheading}>🌙End the day at Disney Springs — no ticket needed, free to enter, and big enough that a mixed group can eat, shop, and catch live music without anyone feeling stuck. It&apos;s an easy, low-key finish after a long park day, and reservations at the bigger restaurants hold a crowd if you book ahead.</li>
          </ul>
        </div>
        </section>
        <section className={styles.splitSection}>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Day 2: Wizards, Coasters &amp; Camaraderie</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li className={styles.subheading}>🌅Spend the day at Universal Orlando. Start in Islands of Adventure for the bigger coasters — VelociCoaster and Hagrid&apos;s draw the longest lines, so hit them first. The two-park layout naturally splits a group: older teens gravitate to the thrill rides while younger kids favour Seuss Landing.</li>
            <li className={styles.subheading}>☀️Ride the Hogwarts Express between Islands of Adventure and Universal Studios — you need a park-to-park ticket, and it keeps the group moving together between the two Wizarding World areas. Lunch at Leaky Cauldron or Three Broomsticks works for a crowd; arrive just before noon to beat the rush.</li>
            <li className={styles.subheading}>🌙If the group still has energy, Universal CityWalk outside the gates is free to enter, with bars, live music, and group-friendly restaurants. Single-rider queues all day are the trick for a mixed group — they cut the wait dramatically when people don&apos;t mind splitting up on the ride.</li>
          </ul>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/orlando/assets/group/orlando-group-itinerary-day2-universal-islands-adventure.png"
            alt="Scene-based illustration of a group riding coasters at Universal's Islands of Adventure with the Hogwarts Express and Wizarding World in the background"
            fill
            className={styles.mapImage}
          />
        </div>
        </section>
        <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/orlando/assets/group/orlando-group-itinerary-day3-epcot-world-showcase.png"
            alt="Scene-based illustration of Day 3 Orlando group itinerary with friends eating and drinking around EPCOT's World Showcase lagoon at sunset"
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Day 3: World Showcase, Dinner, and Companionship</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li className={styles.subheading}>🌅Take it slower on the last day at EPCOT. Start in the morning with the front-of-park rides — Guardians of the Galaxy and Test Track — before the heat builds, then drift back toward World Showcase as it opens around 11am.</li>
            <li className={styles.subheading}>☀️World Showcase is built for a group: walk the loop of eleven country pavilions, graze on small plates and drinks from each, and let everyone pick what they want. It&apos;s flat, shaded in spots, and easy to do at whatever pace the group feels like — no ride reservations needed.</li>
            <li className={styles.subheading}>🌙End with a sit-down dinner in one of the pavilions — book 60 days out for a table that holds the whole group — then stake out a spot along the lagoon for the nighttime fireworks. Dinner and a show in one place is an easy sell for a mixed crowd, and a fitting last night.</li>
          </ul>
        </div>
        </section>

        {/* ── PARKS & ATTRACTIONS SECTION ── */}
        <section id="parks" className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/orlando/assets/group/group-travel-orlando-1280x853.jpg"
            alt="Route map of Walt Disney World parks for group travelers, including Magic Kingdom, EPCOT, Hollywood Studios, and Animal Kingdom."
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Walt Disney World: The Parks Worth Doing as a Group</h2>
          <p className={styles.subheading}>🏰 Start with the big four. Magic Kingdom is the one nobody wants to miss, EPCOT works best for an older or food-focused group, Hollywood Studios has the headline rides (Rise of the Resistance, Slinky Dog), and Animal Kingdom is the pick if there are kids. Don&apos;t try to do more than one park a day with a crowd.</p>
          <p className={styles.subheading}>📸 For a group that wants to move fast, Genie+ and Lightning Lane ($25–$35 per person per day) cut the worst waits — worth it on busy days, skippable in the off-season. Buy date-based tickets in advance to lock the lowest price, and add Park Hopper only if you&apos;ll realistically change parks.</p>
          <p className={styles.subheading}>🧭 To wind down, Disney Springs is free to enter and easy for a mixed group — dining, shopping, and live music with no ticket — and the resort hotels&apos; pools and lounges are an easy regroup spot at the end of a long day.</p>
        </div>
        </section>
        <section className={styles.splitSection}>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Universal Orlando: Coasters, Wizards and Things to Do by Season</h2>
          <p className={styles.subheading}>🎢 Universal&apos;s two parks — Studios and Islands of Adventure — sit side by side, so a park-to-park ticket lets a group ride the Hogwarts Express between them. The thrill rides (VelociCoaster, Hagrid&apos;s) are the draw; single-rider lines are the secret weapon for a group that doesn&apos;t mind splitting on the ride.</p>
          <p className={styles.subheading}>📸 The season changes what&apos;s on. Summer means Volcano Bay water park and long, hot days that push groups toward early starts; fall brings Halloween Horror Nights, a separate-ticket event that&apos;s a hit with older groups but not for young kids.</p>
          <p className={styles.subheading}>🧭 Year-round, CityWalk outside the gates is free to enter — bars, mini golf, and group-friendly restaurants — and Express Pass (where available) is Universal&apos;s answer to skip-the-line if the group&apos;s budget stretches to it.</p>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/orlando/assets/group/group-travel-orlando-universal-1280x853.jpg"
            alt="Friends exploring Universal Orlando's Wizarding World of Harry Potter with the castle and a coaster in the background"
            fill
            className={styles.mapImage}
          />
        </div>
        </section>
        <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/orlando/assets/group/group-travel-orlando-small-icon-park.webp"
            alt="Group of travelers exploring Orlando beyond the parks from ICON Park and International Drive to Kennedy Space Center and Gatorland"
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Beyond the Parks: I-Drive, Space Coast, and Real Florida</h2>
          <p className={styles.subheading}>🚀 If the group needs a day off the rides, Kennedy Space Center is about an hour east and has group rates — a half-day for space fans and an easy win for a mixed crowd. Book the bus tour ahead so the whole party rides together.</p>
          <p className={styles.subheading}>🎡 International Drive is the no-ticket option — ICON Park&apos;s observation wheel, the upside-down WonderWorks, mini golf, and dozens of restaurants are all walkable, so a group can graze and split off without a plan. Most spots take large parties with a quick call ahead.</p>
          <p className={styles.subheading}>🐊 For something more Florida, Gatorland and the Lake Eola swan boats downtown are cheap, easy stops, and the Winter Park boat tour is a quiet, pretty break from the theme-park intensity. All work well for a half day with a group that wants a slower pace.</p>
        </div>
        </section>

        {/* ── DINING SECTION ── */}
        <section id="dining" className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/orlando/assets/group/food/orlando-group-food.png"
            alt="Table with shared plates, burgers, and theme-park treats at an Orlando restaurant, capturing a group dining experience"
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Where to Eat as a Group in Orlando</h2>
          <p className={styles.subheading}>Feeding a group in Orlando is easier than it looks if you plan the big meals ahead. Character dinners, buffets, family-style restaurants, and the World Showcase pavilions are all built around shared tables — but the popular ones book out, so reserve as far ahead as the system allows.</p>
          <h3 className={styles.heading}>Character &amp; Theme-Park Dining</h3>
          <p className={styles.subheading}>🍽️ Disney table-service bookings open 60 days in advance, and the headline rooms — Be Our Guest, Cinderella&apos;s Royal Table, Space 220 — fill the morning they open. Book as one party so the whole group sits together; a no-show fee applies, so confirm numbers first.</p>
          <p className={styles.subheading}>🍗 For a crowd that just wants to eat, the buffets and family-style meals are the move — Tusker House at Animal Kingdom and 'Ohana at the Polynesian serve big shared platters that take the pressure off ordering for a large table.</p>
          <p className={styles.subheading}>🍦 Outside the parks, Disney Springs and Universal CityWalk have the widest range for a mixed group, with everything from quick counters to sit-down rooms that hold ten or more with a reservation.</p>
        </div>
        </section>
        <section className={styles.splitSection}>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Quick Eats, Mocktails and I-Drive</h2>
          <p className={styles.subheading}>🍔 For a group, quick-service is the cheapest way to feed everyone fast — and mobile order from the Disney and Universal apps skips the counter line entirely. Put the order in before you&apos;re hungry and pick it up when the slot is ready.</p>
          <p className={styles.subheading}>🍹 If part of your group isn&apos;t drinking, Orlando&apos;s no-alcohol options have gotten good — EPCOT&apos;s World Showcase pours elaborate zero-proof versions of its festival drinks, and most I-Drive and Disney Springs bars run a mocktail menu that looks the part for photos.</p>
          <p className={styles.subheading}>🍺 For the grown-ups, the breweries and taprooms cluster around International Drive and downtown — Orlando Brewing and the I-Drive spots have long shared tables and games, ideal for a group that can&apos;t agree on one place.</p>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/orlando/assets/group/food/orlando-group-mocktail.png"
            alt="Group enjoying mocktails and drinks at an Orlando International Drive rooftop bar"
            width={640}
            height={960}
            className={styles.mapImage}
          />
        </div>
        </section>
        <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/orlando/assets/group/orlando-character-buffet-collage-group-dining.png"
            alt="Collage of Orlando theme-park and character dining including buffet platters, Mickey waffles, turkey legs, and World Showcase small plates"
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Buffets &amp; Character Meals for the Group</h2>
          <p className={styles.subheading}>🧇 <strong>The classics.</strong> Character buffets are a group&apos;s best friend — one price, everyone eats what they want, and the characters come to the table so younger kids stay happy. Chef Mickey&apos;s and Tusker House are the reliable picks; book the earliest slot the day reservations open.</p>
          <p className={styles.subheading}>🍖 <strong>The splurge.</strong> Signature dinners like Space 220 or California Grill are worth it for a celebration — request a large table when you book, since the rooms are small and fill fast on weekends.</p>
          <p className={styles.subheading}>🗺️ <strong>Room to sit.</strong> The big buffets are the rare Orlando dining format with space for a large party at one table — most seat groups together, which is hard to find at the smaller in-park counters.</p>
        </div>
        </section>

        {/* ── LOGISTICS SECTION ── */}
        <section className={styles.splitSection}>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Keeping a Group Together in Orlando</h2>
          <p className={styles.subheading}>
            A few things that actually matter with a crowd: pick a <strong>meeting point</strong> in every park
            — the castle hub, a named ride entrance, the front gate — because the parks are huge and cell service
            gets patchy in a crowd. Put everyone on <strong>My Disney Experience</strong> and the{" "}
            <strong>Universal app</strong> for wait times, mobile order, and party plans. Use <strong>Disney transport</strong>
            {" "}on Disney days and a <strong>rented minivan</strong> for everything else. Carry water, sunscreen, and
            ponchos — the afternoon storms are real — and decide up front whether <strong>Genie+ or Express Pass</strong>{" "}
            is worth it for the group&apos;s pace. That&apos;s the whole list.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/orlando/assets/group/orlando-group-travel-packing-flatlay-essentials.webp"
            alt="Orlando group travel essentials including park tickets, sunscreen, ponchos, water bottle, and a theme park map"
            fill
            className={styles.mapImage}
          />
        </div>
        </section>

        {/* ── GROUP TICKETS SECTION ── */}
        <section id="tickets" className={styles.splitSection}>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Theme Park Tickets for Groups: Discounts, Timing &amp; Strategy</h2>
          <p className={styles.subheading}>
            Tickets are the biggest line item of an Orlando group trip — and the rules differ by park, so it pays
            to know how each one handles a crowd before you buy.
          </p>
          <p className={styles.subheading}>
            <strong>Disney.</strong> There&apos;s no standard group discount, but date-based tickets are cheaper the
            further out you buy and on off-peak dates. Youth, school, and non-profit groups of <strong>10+</strong> can
            qualify for special pricing through Disney&apos;s group sales / Youth Programs line, and corporate groups can
            book private event packages.
          </p>
          <p className={styles.subheading}>
            <strong>Universal.</strong> Group rates kick in at <strong>15+</strong> — contact Universal&apos;s group
            sales team directly for pricing, typically <strong>15–25% off</strong> rack rates. Annual passholder
            discounts stack if any members already hold passes.
          </p>
          <p className={styles.subheading}>
            <strong>Skip-the-line.</strong> Decide as a group whether <strong>Genie+ / Lightning Lane</strong> (Disney)
            or <strong>Express Pass</strong> (Universal) is worth the per-person cost — it&apos;s a clear win on peak
            days and easy to skip in the off-season.
          </p>
          <p className={styles.subheading}>
            <strong>Where to stay.</strong> For 8+, a <strong>vacation rental</strong> with a private pool in Kissimmee
            or Four Corners ($150–$400/night for the whole house) usually beats multiple hotel rooms and adds a kitchen.
            On-site Disney hotels trade space for free transport and early park entry.
          </p>
          <p className={styles.subheading}>
            <strong>Tip:</strong> book tickets, dining, and the rental as one block as early as the systems allow —
            piecing it together later rarely keeps the group on the same dates or the same table.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/orlando/assets/group/orlando-group-itinerary-day1-magic-kingdom-disney-springs.png"
            alt="Walt Disney World park entrance at night with a group heading in together"
            fill
            className={styles.mapImage}
          />
        </div>
        </section>

        <BookingCTA variant="full" text="Book park tickets and stays for your group" href="/destination/orlando/bookings?tab=hotels&from=group-travel" label="Book your trip" />
        <FAQAccordion faqs={faqData} />
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema5) }}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema4) }}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema3) }}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema2) }}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema1) }}/>

    </>
    );
}
