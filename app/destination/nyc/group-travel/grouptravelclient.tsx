"use client";
import Header from "../../../components/Header/header";
import Link from 'next/link';
import Image from 'next/image';
import Footer from "@/app/components/Header/Footer/footer";
import styles from '../group-travel/grouptravel.module.css';
import BookingCTA from '@/app/destination/nyc/components/BookingCTA/BookingCTA';

export default function GroupTravelPage() {
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
      "name": "New York",
      "item": "https://www.travelsamericas.com/destination/nyc/"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Group Travel",
      "item": "https://www.travelsamericas.com/destination/nyc/group-travel"
    }
  ]
};
  const schema2 = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.travelsamericas.com/destination/nyc/group-travel"
  },
  "headline": "Group Travel in NYC: Safety Tips, Packing Essentials & Landmark Planning",
  "description": "Explore NYC confidently with our group travel safety guide — smart packing tips, safe itineraries, and must-see landmarks for every explorer.",
  "keywords": ["Group travel NYC", "NYC itinerary", "safe travel tips", "Citymapper", "MetroCard", "NYC group travel", "things to do alone NYC"],
  "image": {
    "@type": "ImageObject",
    "url": "https://www.travelsamericas.com/data/majorcities/newyork/assets/safetybanner.png",
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
  "about": [
    { "@type": "Thing", "name": "Group Travel" },
    { "@type": "Place", "name": "New York City" }
  ]
};
const schema3 = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is New York City safe for solo travelers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, NYC is generally safe for solo travelers, especially in well-lit areas like Midtown, SoHo, and Brooklyn Heights. Stay alert and avoid isolated zones after dark."
      }
    },
    {
      "@type": "Question",
      "name": "What should I pack for solo travel in NYC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pack a portable charger, ID/passport copies, MetroCard or OMNY, and a basic first aid kit. NYC demands readiness and smart gear."
      }
    },
    {
      "@type": "Question",
      "name": "How do I navigate NYC solo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use Citymapper, Transit App, and NYC Ferry. Stay in central hotels with 24/7 security and avoid rush hour subway transfers."
      }
    }
  ]
};
const schema4 = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "NYC Group Travel Safety & Packing Checklist",
  "itemListOrder": "Unordered",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Portable chargers for multiple devices" },
    { "@type": "ListItem", "position": 2, "name": "Group ID copies or shared emergency contacts" },
    { "@type": "ListItem", "position": 3, "name": "MetroCards or OMNY passes for all members" },
    { "@type": "ListItem", "position": 4, "name": "Shared first aid kit and basic medicines" },
    { "@type": "ListItem", "position": 5, "name": "Group coordination apps (WhatsApp, Google Maps, Citymapper)" },
    { "@type": "ListItem", "position": 6, "name": "Pre-arranged meeting points in busy areas like Times Square or Central Park" },
    { "@type": "ListItem", "position": 7, "name": "Charter bus or rideshare booking details for large groups" },
    { "@type": "ListItem", "position": 8, "name": "Stay alert together in crowded zones and avoid isolated areas after dark" }
  ]
};

const schema5 = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Navigate NYC Safely as a Group Traveler",
  "description": "Step-by-step guide for group travelers to navigate New York City using public transport and other options.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Plan routes with group-friendly apps",
      "text": "Use apps like Google Maps, Citymapper, or Transit to coordinate subway, bus, ferry, and walking routes."
    },
    {
      "@type": "HowToStep",
      "name": "Preload MetroCards or OMNY passes",
      "text": "Prepare group MetroCards or OMNY passes in advance to avoid queues and keep everyone moving together."
    },
    {
      "@type": "HowToStep",
      "name": "Book charter buses or vans",
      "text": "For large groups, reserve charter buses or vans to travel smoothly between major landmarks."
    },
    {
      "@type": "HowToStep",
      "name": "Use ferries and water taxis",
      "text": "Take NYC ferries or water taxis for scenic group travel across boroughs and to attractions like the Statue of Liberty."
    },
    {
      "@type": "HowToStep",
      "name": "Coordinate rideshare for smaller groups",
      "text": "Split into smaller groups and use rideshare services like Uber or Lyft for flexible point-to-point travel."
    },
    {
      "@type": "HowToStep",
      "name": "Walk together in safe areas",
      "text": "Explore neighborhoods such as Central Park, SoHo, and Brooklyn Heights on foot, staying together and designating meeting points."
    },
    {
      "@type": "HowToStep",
      "name": "Avoid rush hour transfers",
      "text": "Plan routes to skip crowded subway stations between 7–9 AM and 5–7 PM when traveling as a group."
    },
    {
      "@type": "HowToStep",
      "name": "Stay in safe, central hotels",
      "text": "Choose accommodations with 24/7 security and easy access to multiple transport options."
    }
  ]
};



return (
    <>
        <Header image={`/data/majorcities/newyork/assets/group/nyc-group-travel-packing-flatlay-essentials.jpg`} bannerText="Flatlay of NYC group travel essentials including backpack, metro card, sneakers, and city map" />
        <BookingCTA variant="slim" text="Book your New York trip →" href="/destination/nyc/booking?tab=flights&from=group-travel" label="Book your trip" />
        <section className={styles.splitSection} style={{ textAlign: "center" }}>
                <div style={{ width: "100%", textAlign: "center" }}>
                <h1  className={styles.sectionheading}>NYC Group Travel Guide 2026</h1>
                <p>Everything your group needs for New York City — a 3-day itinerary, the best landmarks by borough, where to eat as a crowd, plus safety and packing tips so everyone stays connected and has a good time.</p>
                <nav aria-label="Jump to section" style={{ marginTop: "1rem" }}>
                  <a href="#itinerary" className={styles.ctaButton} style={{ marginRight: "0.5rem" }}>3-Day Itinerary</a>
                  <a href="#landmarks" className={styles.ctaButton} style={{ marginRight: "0.5rem" }}>Landmarks</a>
                  <a href="#dining" className={styles.ctaButton}>Dining</a>
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
            src="/data/majorcities/newyork/assets/group/group-travel-nyc-small-bronx.png"
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

        {/* ── SAFETY & PACKING SECTION ── */}
        <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/newyork/assets/group/nyc-group-travel-safety-navigation-essentials1.png"
            alt="Illustration of NYC group travel safety essentials including emergency preparedness, smart navigation apps, and urban coordination tools."
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Urban Safety and Navigation for Group Explorers</h2>
          <p className={styles.subheading}><strong>Urban vigilance:</strong> In Union Square and Times Square, group travelers must anticipate sudden urban challenges. Carry compact flashlights, reflective bands, and portable weather gear to stay prepared. Avoid unsafe shortcuts, keep valuables secure, and stay aligned. Share emergency contacts, know local service numbers, and identify nearby medical facilities for quick support.</p>
          <p className={styles.subheading}><strong>Urban preparedness:</strong> In crowded NYC subway hubs like Times Square, group travelers risk delays or separation. Carry portable chargers, a shared first aid kit, and distribute ID/passport copies. Preload MetroCards or OMNY for smooth entry. These NYC safety tips ensure readiness, coordination, and stress‑free group travel.</p>
          <p className={styles.subheading}><strong>Smart navigation:</strong> Rush-hour crowds and complex subway hubs like Times Square or Penn Station can overwhelm groups and cause separation. Using tools like Citymapper, Transit App, or the MTA app helps plan routes, avoid congestion, and keep everyone coordinated for smoother, stress-free travel together.</p>
        </div>
        </section>
        <section className={`${styles.splitSection} ${styles.mobileImageFirst}`}>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>NYC Group Travel Packing Playbook</h2>
          <p className={styles.subheading}><strong>🧼 Pack Essential</strong>Group travelers in NYC walk 5–7 miles daily, so pack comfortable shoes, portable chargers, and reusable water bottles. Add anti‑theft neck wallets, weather‑ready layers, and hand sanitizer to stay secure, connected, and healthy. These essentials ensure safer, smoother, and more coordinated city exploration.</p>
          <p className={styles.subheading}><strong>🧥 Pack Comfort</strong>Group travelers in NYC gain extra comfort from reflective wristbands for easy regrouping, compact flashlights for safer night walks, offline maps for stress‑free navigation, foldable seating mats for outdoor breaks, and spray sunscreen for shared protection, with backups like jackets or hotel cards.</p>
          <p className={styles.subheading}><strong>🎒 Pack Smart</strong>Bluetooth item trackers for bags, offline compass plus waypoint app for orientation, NFC contact tags or QR regroup cards for quick reconnection, shared multi‑port charging cable, and pen‑notebook for addresses, reducing loss, disorientation, and coordination friction.</p>
        </div>
        <div className={styles.imageWrappermid}>
          <Image
            src="/data/majorcities/newyork/assets/group/nyc-group-travel-gear-guide-essentials-comfort-smart.png"
            alt="Three-part illustration showing NYC group travel packing tips: essentials like sanitizer and charger, comfort items like layered outfits and umbrella, and smart gear like snacks, journal, and navigation tools."
            fill
            className={styles.mapImage}
          />
        </div>
        </section>
        <section className={styles.splitSection}>
          <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/newyork/assets/group/nyc-group-travel-plan-pack-enjoy-guide.png"
            alt="Infographic showing NYC group travel essentials across planning, packing, and enjoyment tiers with neutral background"
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Group Travel Tips: Planning and Bonding simplified</h2>
          <p className={styles.subheading}><strong>🎭</strong>Group travel planning requires flexible accommodation, coordinated arrival times, anchor event reservations, and smooth transport. Booking shared spaces, syncing schedules, reserving activities early, and using group passes improve logistics, reduce stress, and deliver memorable, efficient, and enjoyable group travel experiences.</p>
          <p className={styles.subheading}><strong>🛍️</strong>Packing cubes, shared first‑aid kits, and secure communication apps dominate queries. Solutions streamline luggage, enhance safety, and deliver benefits like reduced stress, smoother coordination, and memorable group travel experiences</p>
          <p className={styles.subheading}><strong>🎶</strong>Group journeys thrive when inclusive activities, balanced downtime, and early event bookings are prioritized. Coordinating shared meals and cultural outings strengthens bonds, reduces stress, and creates lasting memories. Simple gear like instant cameras or picnic kits enhances these experiences without complicating logistics.</p>
        </div>

        </section>
        <BookingCTA variant="full" text="Book flights and stays for your group" href="/destination/nyc/booking?tab=flights&from=group-travel" label="Book your trip" />
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema5) }}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema4) }}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema3) }}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema2) }}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema1) }}/>
        
    </>
    );
}