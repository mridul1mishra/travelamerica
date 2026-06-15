"use client";
import Header from "../../../components/Header/header";
import Link from "next/link";
import Footer from "@/app/components/Header/Footer/footer";
import styles from "./lasvegaslandmark.module.css";
import BookingCTA from "@/app/components/destination/BookingCTA/BookingCTA";

// Each landmark gets a concrete data row instead of paragraphs of fluff.
// Approximate ticket prices and hours are noted as ranges or guidance only —
// always verify on the venue's own site before going (linked from each card).
type Landmark = {
  id: string;
  name: string;
  neighborhood: string;
  address: string;
  subway: string;
  hours: string;
  ticket: string;
  timeNeeded: string;
  whatToDo: string;
  soloTip: string;
  bestTime: string;
};

const LANDMARKS: Landmark[] = [
  {
    id: "bellagio-fountains",
    name: "Fountains of Bellagio",
    neighborhood: "Center Strip",
    address: "3600 S Las Vegas Blvd, Las Vegas, NV 89109",
    subway: "Las Vegas Monorail to Bally's/Paris station, then walk; or the free Bellagio tram and the Strip's pedestrian bridges. RTC Deuce bus stops directly out front.",
    hours: "Shows every 30 min from 3:00 PM - 8:00 PM weekdays (from noon on weekends), then every 15 min from 8:00 PM - midnight.",
    ticket: "Free.",
    timeNeeded: "15 - 30 min (one or two shows)",
    whatToDo: "Watch the choreographed water, light, and music show on the 8-acre lake in front of Bellagio. The best viewing is from the sidewalk and bridge on Las Vegas Blvd directly in front, or from the Bellagio terrace. Don't pay for a 'fountain view' restaurant table - the public sidewalk is the better seat.",
    soloTip: "The later night shows (every 15 min after 8 PM) are the most dramatic and the crowds thin between songs. Pair it with the free Conservatory & Botanical Gardens inside Bellagio, which changes with the seasons and is open 24/7.",
    bestTime: "After dark for the full light effect; weeknights are far less crowded than weekends.",
  },
  {
    id: "the-strip",
    name: "The Las Vegas Strip",
    neighborhood: "Las Vegas Boulevard South",
    address: "Las Vegas Blvd S, between Mandalay Bay and the STRAT",
    subway: "RTC Deuce double-decker bus runs the full length 24/7; the Las Vegas Monorail parallels the east side. Most of it is walkable via elevated pedestrian bridges.",
    hours: "Always open; the casinos, lights, and people-watching run 24/7.",
    ticket: "Free to walk. Individual attractions, casinos, and shows are paid.",
    timeNeeded: "An evening to a full day, depending on how much you stop",
    whatToDo: "Walk the 4-mile boulevard of mega-resorts: the Bellagio, Caesars Palace, the Venetian's canals, Paris's half-scale Eiffel Tower, and the LINQ Promenade. The free spectacles (Bellagio fountains, the Venetian) string together into a self-guided night walk. Use the air-conditioned casino interiors and pedestrian bridges to beat the heat between stops.",
    soloTip: "The Strip is one of the easiest places to wander solo - it's crowded, well-lit, and you can duck into any casino. Walking the whole length is longer than it looks (the resorts are enormous); hop the Deuce bus or a rideshare for the long gaps near the south end.",
    bestTime: "After sunset when the lights and crowds peak; early morning for quiet photos with no foot traffic.",
  },
  {
    id: "high-roller",
    name: "High Roller Observation Wheel",
    neighborhood: "The LINQ Promenade, Center Strip",
    address: "3545 S Las Vegas Blvd, Las Vegas, NV 89109",
    subway: "Las Vegas Monorail to Harrah's/The LINQ station, then walk through the LINQ Promenade to the wheel at the back.",
    hours: "Daily, typically 2:00 PM - midnight (hours vary seasonally; check before going).",
    ticket: "~$25 daytime / ~$35-40 night for a standard 30-min rotation. Open-bar 'Happy Half Hour' pods ~$50+. Booking online ahead saves a few dollars over the walk-up window.",
    timeNeeded: "45 min - 1 hour including the queue and the 30-min rotation",
    whatToDo: "Ride the 550-foot observation wheel - one of the tallest in the world - for 360-degree views over the Strip and the valley to the mountains. Each glass pod holds up to 40 people. The night ride over the neon is the headline; the open-bar pod option turns the rotation into a moving cocktail lounge.",
    soloTip: "Solo riders just share a pod with others, so there's no premium to pay. Book the slot 30-40 minutes before sunset to catch daylight, the sunset, and the lights coming on all in one rotation - the single best value window.",
    bestTime: "Right around sunset for the day-to-night transition; weeknights for shorter lines.",
  },
  {
    id: "fremont-street",
    name: "Fremont Street Experience",
    neighborhood: "Downtown Las Vegas",
    address: "425 Fremont St, Las Vegas, NV 89101",
    subway: "RTC Deuce bus from the Strip to the Downtown Transit Center (~20-30 min), then a short walk. Rideshare is faster late at night.",
    hours: "Open 24/7. The Viva Vision canopy light shows run hourly from dusk to midnight or later.",
    ticket: "Free to walk and watch the light shows. SlotZilla zip line ~$49 (lower 'Zipline') to ~$69 (upper 'Zoomline').",
    timeNeeded: "1.5 - 2.5 hours",
    whatToDo: "Walk the five covered blocks of old downtown under the 1,500-foot Viva Vision LED canopy, with free hourly light-and-music shows overhead, live bands on street stages, and the historic neon of the original casino corridor (the Golden Nugget, the Plaza). The SlotZilla zip line launches riders right down the middle under the canopy.",
    soloTip: "This is the gritter, cheaper, more local-feeling counterpart to the Strip - and it's free entertainment for hours. Friday and Saturday nights have the most energy. Keep your wits and your wallet secure in the late-night crowds; it's busy but watch for pickpockets.",
    bestTime: "After dark for the canopy shows and live music; weekend nights for the biggest crowds and best bands.",
  },
  {
    id: "sphere",
    name: "Sphere",
    neighborhood: "East of the Strip (behind the Venetian)",
    address: "255 Sphere Way, Las Vegas, NV 89169",
    subway: "Connected to the Venetian/Palazzo by a pedestrian bridge; Las Vegas Monorail to Las Vegas Convention Center station, or rideshare to the dedicated drop-off.",
    hours: "Varies by event/show schedule; the 'Sphere Experience' daytime attraction runs throughout the day. Check Sphere's site for showtimes.",
    ticket: "'Sphere Experience' (includes the 'Postcard from Earth' film) ~$79-129 depending on seat and time. Concerts and residencies are separately priced and far higher.",
    timeNeeded: "1.5 - 2 hours for the Sphere Experience; a full evening for a concert",
    whatToDo: "See the world's largest spherical structure - the exterior 'Exosphere' is the largest LED screen on Earth and is free to view from outside (great from the Venetian bridge or Strip rooftops). Inside, the wrap-around 16K screen and haptic seats make the 'Postcard from Earth' film a full sensory experience. Concert residencies here are a destination in themselves.",
    soloTip: "You don't need a ticket to enjoy the best part - the animated exterior is free and stunning from the surrounding bridges and high floors. If you do go in, the daytime Sphere Experience is much cheaper than a concert and gives you the full immersive-screen effect solo.",
    bestTime: "After dark to see the Exosphere lit up; book the Sphere Experience for off-peak afternoon slots to avoid the busiest sessions.",
  },
  {
    id: "neon-museum",
    name: "The Neon Museum",
    neighborhood: "Downtown Las Vegas (north of Fremont St)",
    address: "770 Las Vegas Blvd N, Las Vegas, NV 89101",
    subway: "Rideshare is the practical option; it's about a 10-minute drive from the Strip or a short ride from Fremont Street. Limited bus service via the Downtown Transit Center.",
    hours: "Open daily, typically 9:00 AM - midnight, with timed-entry slots; exact hours shift seasonally. Reservations strongly recommended.",
    ticket: "Daytime general admission ~$20; evening 'Brilliant!' / illuminated experience ~$28-35. Book a timed slot ahead - it sells out.",
    timeNeeded: "1 - 1.5 hours",
    whatToDo: "Wander the outdoor 'Neon Boneyard,' a two-acre field of rescued, decommissioned casino signs - the old Stardust, Moulin Rouge, the Hard Rock guitar, and dozens of vintage motel and casino marquees. The after-dark experiences re-light select signs. It's the most photogenic, history-rich stop in the city and a true counterpoint to the Strip.",
    soloTip: "Go at golden hour or book an evening slot - the low light (and the relit signs after dark) make for the best photos and a quieter, more contemplative visit. Daytime in summer is brutally hot with little shade, so bring water and sun protection.",
    bestTime: "Late afternoon into evening for cooler temperatures and the best light; reserve ahead in peak season.",
  },
  {
    id: "the-strat",
    name: "The STRAT Tower (SkyPod & Thrill Rides)",
    neighborhood: "North Strip",
    address: "2000 S Las Vegas Blvd, Las Vegas, NV 89104",
    subway: "RTC Deuce bus to the north Strip stop out front; rideshare is quick from the central Strip.",
    hours: "SkyPod observation deck daily ~10:00 AM - 1:00 AM (later on weekends). Thrill rides operate seasonally and weather-permitting.",
    ticket: "SkyPod observation deck ~$20-30. Add-on for the thrill rides (Big Shot, X-Scream, Insanity, SkyJump) ~$25-30 each or a combo pass.",
    timeNeeded: "1 - 1.5 hours (more if you do multiple rides)",
    whatToDo: "Ride to the top of the 1,149-foot tower - the tallest observation tower in the U.S. - for 360-degree views over the whole valley. The open-air deck hosts the world's highest thrill rides, including the Big Shot and the SkyJump controlled descent off the side. Even just the observation decks (indoor and outdoor) are worth the elevator ride.",
    soloTip: "It's at the quieter north end, so lines are shorter than the High Roller. Solo travelers can do the rides without coordinating with anyone. Sunset on the open-air deck is spectacular and far less crowded than the Strip's center.",
    bestTime: "Sunset for the views; weekdays and the off-season for short ride queues.",
  },
  {
    id: "welcome-sign",
    name: "Welcome to Fabulous Las Vegas Sign",
    neighborhood: "South Strip",
    address: "5100 S Las Vegas Blvd, Las Vegas, NV 89119",
    subway: "RTC Deuce bus south to the last Strip stops, or rideshare; there's a small free parking lot beside the sign in the median.",
    hours: "Always accessible; lit at night. Daytime has the shortest photo lines.",
    ticket: "Free.",
    timeNeeded: "20 - 30 min (mostly the photo queue)",
    whatToDo: "Get your photo at the iconic 1959 neon sign that marks the south entrance to the Strip. It sits on a median island with its own free parking lot and a marked walkway. An attendant often helps line people up; on busy days there's an orderly queue. The back of the sign reads 'Drive Carefully - Come Back Soon.'",
    soloTip: "Early morning is the move for a solo visit - little to no line and soft light. There are usually friendly people in the queue happy to take your photo, or use the timer on a small tripod. It's a quick stop best combined with the south Strip (Mandalay Bay, the airport area).",
    bestTime: "Early morning for no queue, or after dark to catch the sign lit up (longer waits at night).",
  },
  {
    id: "hoover-dam",
    name: "Hoover Dam & Red Rock Canyon (Day Trips)",
    neighborhood: "Outside the city",
    address: "Hoover Dam: US-93, Boulder City, NV 89005. Red Rock Canyon: 1000 Scenic Loop Dr, Las Vegas, NV 89161",
    subway: "No transit; both require a car, rideshare, or guided tour. Hoover Dam is ~45 min southeast via US-93; Red Rock Canyon is ~30 min west of the Strip.",
    hours: "Hoover Dam: visitor center daily ~9:00 AM - 5:00 PM; the walkway/exterior is free and accessible longer. Red Rock Canyon: Scenic Loop daily ~6:00 AM - dusk (timed-entry reservation required Oct-May).",
    ticket: "Hoover Dam: exterior and Memorial Bridge walkway free; powerplant tour ~$15, full dam tour ~$30; parking garage ~$10. Red Rock Canyon: ~$20 per vehicle entry plus a small timed-entry reservation fee in season.",
    timeNeeded: "Half day each (allow driving time)",
    whatToDo: "Hoover Dam: walk the dam and the Mike O'Callaghan-Pat Tillman Memorial Bridge for the classic overhead view; the powerplant/dam tours go inside the structure. Red Rock Canyon: drive or cycle the 13-mile one-way Scenic Loop past red sandstone cliffs, with trailheads for short hikes and overlooks - a complete escape from the neon.",
    soloTip: "These are the easiest way to break up a Strip-heavy trip. If you don't have a car, half-day guided tours from the Strip cover Hoover Dam (and often combine it with Red Rock or Lake Mead). For Red Rock, reserve the timed entry online in advance during the Oct-May window or you'll be turned away at the gate.",
    bestTime: "Early morning to beat the desert heat and the crowds; cooler months (fall through spring) for comfortable hiking at Red Rock.",
  },
];

export default function LasVegasLandmarkClient() {

  // ---- JSON-LD schemas ----
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Top Las Vegas Landmarks Solo Travel Guide",
    "itemListOrder": "Unordered",
    "itemListElement": LANDMARKS.map((l, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": l.name,
      "description": l.whatToDo,
    })),
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What Las Vegas landmarks are most worth visiting on a first trip?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For a first Las Vegas trip, prioritize: a night walk of the Strip with the free Fountains of Bellagio, the High Roller observation wheel at sunset, Fremont Street Experience downtown for the light canopy, Sphere's exterior and the 'Welcome to Fabulous Las Vegas' sign for photos, and at least one day trip to Hoover Dam or Red Rock Canyon. That's a comfortable 3-4 day itinerary."
        },
      },
      {
        "@type": "Question",
        "name": "Which Las Vegas landmarks are free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A lot of the best ones: the Fountains of Bellagio, walking the Strip itself, the Bellagio Conservatory, the Fremont Street Experience light shows, the exterior of Sphere (the Exosphere LED), and the 'Welcome to Fabulous Las Vegas' sign. Hoover Dam's exterior and Memorial Bridge walkway are also free. You can fill an entire evening with free spectacles in Las Vegas."
        },
      },
      {
        "@type": "Question",
        "name": "Is the High Roller or the STRAT SkyPod the better view?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The High Roller (550 ft) puts you right over the center Strip for the classic neon view and is best at sunset. The STRAT SkyPod (1,149 ft) is much taller, at the quieter north end, with shorter lines and an open-air deck plus thrill rides. For the iconic Strip backdrop, choose the High Roller; for the highest panorama and fewer crowds, choose the STRAT."
        },
      },
      {
        "@type": "Question",
        "name": "Do I need a car to see Las Vegas landmarks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not for the Strip and downtown - the RTC Deuce bus runs Las Vegas Blvd 24/7, the Monorail parallels the east side, and most resorts connect by pedestrian bridges. You will want a car, rideshare, or a guided tour for the day trips: Hoover Dam (~45 min) and Red Rock Canyon (~30 min) have no transit service."
        },
      },
      {
        "@type": "Question",
        "name": "How much time do Las Vegas landmarks take to visit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Free Strip spectacles (Bellagio fountains, Sphere exterior, the Welcome sign) are 15-30 minute stops. The High Roller and STRAT take about an hour each. The Neon Museum and Fremont Street run 1-1.5 hours. Hoover Dam and Red Rock Canyon are half-day trips once you factor in driving. Don't over-schedule - the Strip's distances and the desert heat slow everything down."
        },
      },
      {
        "@type": "Question",
        "name": "Which Las Vegas landmark is best for solo travelers specifically?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The High Roller observation wheel - solo riders simply share a glass pod, so there's no single-traveler premium, and the sunset rotation over the Strip is a highlight. The Fremont Street Experience is the runner-up: hours of free live music and light shows in a crowded, easy-to-wander setting where being alone is completely natural."
        },
      },
    ],
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
      { "@type": "ListItem", "position": 2, "name": "Las Vegas", "item": "https://www.travelsamericas.com/destination/lasvegas/" },
      { "@type": "ListItem", "position": 3, "name": "Landmarks", "item": "https://www.travelsamericas.com/destination/lasvegas/landmark" },
    ],
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Las Vegas Landmarks Guide: Top Must-See Sights with Hours, Prices & Tips",
    "description": "Practical guide to Las Vegas\'s top landmarks — Fountains of Bellagio, the Strip, High Roller, Fremont Street, Sphere, the Neon Museum and more. Hours, prices, and how to get there.",
    "url": "https://www.travelsamericas.com/destination/lasvegas/landmark",
    "inLanguage": "en-US",
    "image": "https://www.travelsamericas.com/data/majorcities/lasvegas/assets/lasvegas-landmarks-banner.png",
    "author": { "@type": "Organization", "name": "Travels Americas", "url": "https://www.travelsamericas.com" },
    "publisher": {
      "@type": "Organization",
      "name": "Travels Americas",
      "logo": { "@type": "ImageObject", "url": "https://www.travelsamericas.com/logo.png" },
    },
    "datePublished": "2025-10-05",
    "dateModified": "2026-06-03",
  };

  const touristAttractions = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Las Vegas Tourist Attractions",
    "itemListElement": LANDMARKS.map((l, i) => ({
      "@type": "TouristAttraction",
      "name": l.name,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": l.address,
        "addressLocality": "Las Vegas",
        "addressRegion": "NV",
        "addressCountry": "US",
      },
      "position": i + 1,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractions) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <Header
        image="/data/majorcities/lasvegas/assets/lasvegas-landmarks-banner.png"
        bannerText="Las Vegas Landmarks Guide"
        variant="wide"
      />
      <BookingCTA variant="slim" text="Book your Las Vegas trip →" href="/destination/lasvegas/bookings?tab=activities&from=landmark" label="See tickets" />

      <section className={styles.intro} style={{ textAlign: "center" }}>
        <h1 className={styles.sectionheading}>Las Vegas Landmarks: A Practical Solo Traveler Guide</h1>
        <p className={styles.introLead}>
          Real visitor information for the 9 Las Vegas landmarks first-time and solo
          travelers actually want. Each entry includes the address, how to get there,
          current hours, approximate ticket price, time to allocate, and a
          solo-specific tip &mdash; and Las Vegas has more free world-class spectacles than
          almost any city, so we flag exactly which are free. Verify hours and ticket
          prices on the venue&apos;s own site before going; Las Vegas attractions change
          schedules seasonally.
        </p>

        <nav aria-label="Jump to landmark" className={styles.jumpnav}>
          {LANDMARKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={styles.jumpLink}>{l.name}</a>
          ))}
        </nav>
      </section>

      <section className={styles.landmarkList}>
        {LANDMARKS.map((l) => (
          <article key={l.id} id={l.id} className={styles.landmarkCard}>
            <h2 className={styles.landmarkName}>{l.name}</h2>
            <p className={styles.landmarkNeighborhood}>{l.neighborhood}</p>

            <dl className={styles.landmarkMeta}>
              <div className={styles.metaRow}>
                <dt>Address</dt>
                <dd>{l.address}</dd>
              </div>
              <div className={styles.metaRow}>
                <dt>Getting there</dt>
                <dd>{l.subway}</dd>
              </div>
              <div className={styles.metaRow}>
                <dt>Hours</dt>
                <dd>{l.hours}</dd>
              </div>
              <div className={styles.metaRow}>
                <dt>Ticket</dt>
                <dd>{l.ticket}</dd>
              </div>
              <div className={styles.metaRow}>
                <dt>Time needed</dt>
                <dd>{l.timeNeeded}</dd>
              </div>
              <div className={styles.metaRow}>
                <dt>Best time to go</dt>
                <dd>{l.bestTime}</dd>
              </div>
            </dl>

            <div className={styles.landmarkBody}>
              <h3 className={styles.landmarkSubhead}>What to do</h3>
              <p>{l.whatToDo}</p>

              <h3 className={styles.landmarkSubhead}>Solo traveler tip</h3>
              <p>{l.soloTip}</p>
            </div>
          </article>
        ))}
      </section>

      <section className={styles.routeSection} id="suggested-routes">
        <h2 className={styles.sectionheading}>Suggested 1-Day Landmark Routes</h2>

        <article className={styles.routeCard}>
          <h3>Classic First-Timer Route (1 day, walking + Deuce bus)</h3>
          <ol>
            <li><strong>4:00 PM</strong> &mdash; Photo at the &apos;Welcome to Fabulous Las Vegas&apos; sign (south Strip)</li>
            <li><strong>5:00 PM</strong> &mdash; Walk north up the Strip, ducking into the resorts to beat the heat</li>
            <li><strong>6:30 PM</strong> &mdash; Sunset ride on the High Roller observation wheel</li>
            <li><strong>8:00 PM</strong> &mdash; Dinner near the LINQ Promenade or Caesars</li>
            <li><strong>9:30 PM</strong> &mdash; Fountains of Bellagio (the after-dark shows)</li>
            <li><strong>10:30 PM</strong> &mdash; See Sphere lit up from the Venetian pedestrian bridge</li>
          </ol>
        </article>

        <article className={styles.routeCard}>
          <h3>Old Vegas &amp; History Route (1 day, low-key)</h3>
          <ol>
            <li><strong>4:30 PM</strong> &mdash; The Neon Museum (book the late-afternoon / golden-hour slot)</li>
            <li><strong>6:00 PM</strong> &mdash; Rideshare to Fremont Street Experience downtown</li>
            <li><strong>6:30 PM</strong> &mdash; Dinner downtown (cheaper and more local than the Strip)</li>
            <li><strong>8:00 PM</strong> &mdash; Viva Vision canopy light shows + live music on Fremont</li>
            <li><strong>9:30 PM</strong> &mdash; Optional SlotZilla zip line under the canopy</li>
            <li><strong>10:30 PM</strong> &mdash; Stroll the vintage neon of the Golden Nugget and the Plaza</li>
          </ol>
        </article>

        <article className={styles.routeCard}>
          <h3>Free Landmarks Day (1 day, $0 attractions)</h3>
          <ol>
            <li><strong>8:00 AM</strong> &mdash; Early photo at the &apos;Welcome to Fabulous Las Vegas&apos; sign (no line)</li>
            <li><strong>10:00 AM</strong> &mdash; Bellagio Conservatory &amp; Botanical Gardens (free, indoors, air-conditioned)</li>
            <li><strong>12:00 PM</strong> &mdash; Window-walk the Venetian&apos;s canals and the Forum Shops</li>
            <li><strong>4:00 PM</strong> &mdash; Walk the Strip&apos;s pedestrian bridges as the lights come on</li>
            <li><strong>8:00 PM</strong> &mdash; Fountains of Bellagio (free 15-min night shows)</li>
            <li><strong>9:00 PM</strong> &mdash; Sphere&apos;s Exosphere lit up from the surrounding bridges (free)</li>
            <li><strong>10:00 PM</strong> &mdash; Fremont Street Experience canopy shows (free)</li>
          </ol>
        </article>
      </section>

      <section className={styles.faqSection} id="landmarks-faq">
        <h2 className={styles.sectionheading}>Practical Questions</h2>

        <details className={styles.faqItem}>
          <summary>How far in advance should I book the High Roller, Neon Museum, or Red Rock entry?</summary>
          <p>
            High Roller: standard tickets are fine same-day, but book the sunset slot 1-2
            days ahead and online for the small discount. Neon Museum: reserve a timed slot
            a few days to a week ahead - golden-hour and evening sessions sell out. Red Rock
            Canyon: the timed-entry reservation for the Scenic Loop is required October-May
            and should be booked online well in advance or you&apos;ll be turned away at the gate.
          </p>
        </details>

        <details className={styles.faqItem}>
          <summary>Is a sightseeing pass (Las Vegas Pass, Go City) worth it?</summary>
          <p>
            Only if you genuinely plan to use several paid attractions - the High Roller, the
            STRAT rides, the Neon Museum, a Hoover Dam tour - within a few days. Because so
            many Las Vegas headliners are free (the fountains, the Strip, Sphere&apos;s exterior,
            Fremont Street, the Welcome sign), a landmark-focused trip often doesn&apos;t need a
            pass. Run the math against your actual planned itinerary rather than buying optimistically.
          </p>
        </details>

        <details className={styles.faqItem}>
          <summary>Can I see most landmarks in 3 days?</summary>
          <p>
            Yes, comfortably. Day 1 - the Strip at night: the Welcome sign, High Roller,
            Bellagio fountains, and Sphere. Day 2 - old Vegas: the Neon Museum and Fremont
            Street Experience, plus the STRAT SkyPod. Day 3 - a day trip to Hoover Dam and/or
            Red Rock Canyon. That covers all 9 landmarks in this guide with room to breathe.
          </p>
        </details>

        <details className={styles.faqItem}>
          <summary>What time of year has the best landmark experience?</summary>
          <p>
            Spring (March-May) and fall (October-November) are ideal: warm but not scorching,
            good for walking the Strip and hiking Red Rock. Summer (June-September) is brutally
            hot - 105&deg;F+ days make outdoor landmarks and the Neon Museum punishing before
            evening. Winter is mild and cheaper, though desert nights get cold and a few outdoor
            thrill rides may pause for weather.
          </p>
        </details>

        <details className={styles.faqItem}>
          <summary>Is it safe to visit these landmarks alone?</summary>
          <p>
            Yes &mdash; the Strip and Fremont Street are crowded and well-lit during normal
            visiting hours, which makes them easy to do solo. Keep your wallet secure in the
            busiest late-night crowds, and treat the day trips (Hoover Dam, Red Rock) like any
            desert outing with water and a full tank. For more on solo travel safety in Las Vegas,
            see our{" "}
            <Link href="/destination/lasvegas/safety-guide">Las Vegas safety guide</Link>{" "}
            and{" "}
            <Link href="/destination/lasvegas/lasvegas-female-solo-travel-guide">solo female travel guide</Link>.
          </p>
        </details>
      </section>

      <section className={styles.relatedLinks}>
        <h2 className={styles.sectionheading}>Plan the Rest of Your Trip</h2>
        <div className={styles.linkGrid}>
          <Link href="/destination/lasvegas/solo-trip-to-lasvegas" className={styles.relatedLink}>
            <h3>Solo Trip to Las Vegas Guide</h3>
            <p>Budget, where to stay, your first 24 hours, and what to avoid.</p>
          </Link>
          <Link href="/destination/lasvegas/best-areas-to-stay" className={styles.relatedLink}>
            <h3>Best Areas to Stay</h3>
            <p>Strip vs. Downtown vs. off-Strip, with safety and value scoring.</p>
          </Link>
          <Link href="/destination/lasvegas/food" className={styles.relatedLink}>
            <h3>Where to Eat in Las Vegas</h3>
            <p>Buffets, celebrity-chef rooms, and cheap eats by area.</p>
          </Link>
          <Link href="/destination/lasvegas/safety-guide" className={styles.relatedLink}>
            <h3>Las Vegas Safety Guide</h3>
            <p>Practical safety: the Strip, downtown, scams, the desert heat.</p>
          </Link>
        </div>
      </section>

      <BookingCTA variant="full" text="Get tickets to Las Vegas's top landmarks" href="/destination/lasvegas/bookings?tab=activities&from=landmark" label="See tickets" />
      <button
        type="button"
        className={styles.backToTop}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <span className={styles.backToTopIcon} aria-hidden="true">↑</span>
        <span className={styles.backToTopText}>Back to top</span>
      </button>
      <Footer />
    </>
  );
}
