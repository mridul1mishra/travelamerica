import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/destination/header/header";
import Footer from "@/app/components/Header/Footer/footer";
import data from "./is-la-safe-at-night.json";
import styles from "./nightguide.module.css";
import { laNightHotelAreas, laHotelAreasUrl } from "@/app/lib/laHotelAreas";

const hotelUrl = "/destination/la/hotel?from=is-la-safe-at-night";
const navLinks = [
  { href: "/destination/la/best-areas-to-stay", label: "Where to Stay in LA" },
  { href: "/destination/la/solo-trip-to-la", label: "Solo Trip to LA" },
  { href: "/destination/la/safety-guide", label: "LA Safety" },
  { href: "/destination/la/la-female-solo-travel-guide", label: "Female Travel Guide" },
];
const contents = [
  ["night-safety", "The short answer"], ["neighborhoods", "Evenings by area"],
  ["where-to-stay", "Choose your hotel base"], ["hotel-checklist", "Before you book"],
  ["transitSafety", "Getting back"], ["scenarios", "Popular evening outings"],
  ["personas", "Families and solo travelers"], ["faq", "Questions answered"],
];
const related = [
  { href: "/destination/la", label: "Los Angeles travel guide" },
  { href: "/destination/la/best-areas-to-stay", label: "Compare areas to stay" },
  { href: "/destination/la/neighborhood-guide", label: "Explore LA neighborhoods" },
  { href: "/destination/la/things-to-do", label: "Things to do in Los Angeles" },
  { href: "/destination/la/food", label: "LA dining guide" },
  { href: "/destination/la/solo-trip-to-la", label: "Plan a solo trip to LA" },
];

function HotelLink({ placement, children }: { placement: string; children: React.ReactNode }) {
  return <Link href={hotelUrl} className={styles.button} data-track="booking_cta"
    data-cta-label="Compare LA hotel locations" data-cta-placement={placement}>{children}</Link>;
}

export default function Page() {
  return <>
    <Header links={navLinks} />
    <main className={styles.page}>
      <article>
        <header className={styles.hero}>
          <div>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link><span aria-hidden="true">/</span>
              <Link href="/destination/la">Los Angeles</Link><span aria-hidden="true">/</span><span>Night safety</span>
            </nav>
            <p className={styles.eyebrow}>Los Angeles after dark</p>
            <h1>{data.title}</h1>
            <p className={styles.lead}>{data.description}</p>

            <div className={styles.actions}>
              <HotelLink placement="hero">Compare LA hotel locations</HotelLink>
              <Link href="#transitSafety">Plan the journey back</Link>
            </div>
          </div>
          <Image src={data.heroImage} alt="Illustration of Los Angeles landmarks, palm trees and the coast at sunset" width={1200} height={800}
            priority sizes="(max-width: 850px) 100vw, 40vw" className={styles.heroImage} />
        </header>

        <aside className={styles.hotelCta} aria-label="Recommended LA hotel bases" id="la-evening-hotel-cta">
          <h2>Stay close to your LA evening plans</h2>
          <p>Consider Santa Monica for beach evenings, Hollywood for shows, West Hollywood for nightlife, or the relevant Downtown district for an event. Compare the actual hotel entrance and return route before booking.</p>
          <HotelLink placement="after_hero">Find a hotel for your LA itinerary</HotelLink>
        </aside>

        <nav className={styles.contents} aria-label="Article contents">
          {contents.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>

        <section id="night-safety" className={styles.section} aria-labelledby="night-safety-heading">
          <p className={styles.eyebrow}>Start with your actual itinerary</p>
          <h2 id="night-safety-heading">Is LA safe at night for tourists?</h2>
          <p>LA can be a practical place for tourists to spend an evening, especially when dinner, entertainment and the return journey are planned together. Safety varies by block, activity and hour: a busy theater exit, a quiet beach path and a long transfer are different situations. Check the actual journey rather than treating the whole city as uniformly safe or unsafe.</p>
          <div className={styles.twoColumns}>
            <div><h3>What changes after dark</h3><p>Shops close, crowds disperse and transport can run less frequently. Check the activity along the final streets to your accommodation, not just the main attraction. Hotel location can make a return simpler, but no address removes every risk.</p></div>
            <div><h3>What the crime data can tell you</h3><p>Official trends describe a geography and reporting period; they cannot certify a hotel block or quantify a tourist’s individual risk. LAPD’s 2024 reporting-system transition also affects comparisons across years. Use that context alongside the specific route, venue and transport arrangements for your trip.</p><a href="https://www.lapdonline.org/newsroom/lapd-transitions-to-new-records-management-system-nr24089cm/">Read LAPD’s methodology notice</a></div>
          </div>
          <p>Santa Monica, West Hollywood and Beverly Hills are separate cities with their own policing arrangements. Their data should not be replaced by City of LA figures. For broader context, read our <Link href="/destination/la/safety-guide">Los Angeles safety guide</Link>.</p>
        </section>

        <section id="neighborhoods" className={styles.section} aria-labelledby="areas-heading">
          <p className={styles.eyebrow}>Destination by destination</p>
          <h2 id="areas-heading">Hollywood, Downtown, Santa Monica and other LA areas after dark</h2>
          <p>Plan around an actual venue and its surrounding route. Official operating hours tell you when a facility is available; they do not establish when a neighborhood becomes unsafe. Our <Link href="/destination/la/neighborhood-guide">LA neighborhood guide</Link> can help orient your itinerary.</p>
          <div className={styles.areaList}>{data.neighborhoods.map(area => <section key={area.id} id={area.id} className={styles.area} aria-labelledby={`${area.id}-heading`}>
            <h3 id={`${area.id}-heading`}>{area.question}</h3>
            <p>{area.answer}</p><p><strong>Getting back:</strong> {area.planning}</p>
            <p><strong>Where to stay:</strong> {area.hotel}</p>
            <a href={area.sourceUrl}>{area.sourceLabel}</a>
            {laNightHotelAreas[area.id] && <p><Link href={laHotelAreasUrl(laNightHotelAreas[area.id].areas)}
              data-track="booking_cta" data-cta-label={laNightHotelAreas[area.id].label}
              data-cta-placement={`neighborhood_${area.id}`}>{laNightHotelAreas[area.id].label}</Link></p>}
          </section>)}</div>
        </section>

        <section id="where-to-stay" className={styles.section} aria-labelledby="stay-heading">
          <p className={styles.eyebrow}>Accommodation and evening plans</p>
          <h2 id="stay-heading">Where should you stay if you plan to go out at night?</h2>
          <p>Start with the dinners, shows or events that matter most to you. A hotel convenient to those plans can reduce long journeys and uncertain waits. Compare the full cost of the stay, including parking and likely rides, rather than choosing only by the cheapest room.</p>
          <h3>Match your hotel to your evening plans</h3>
          <div className={styles.tableScroll} tabIndex={0} role="region" aria-label="Hotel bases and evening plans comparison">
            <table>
              <caption>Itinerary matches and accommodation trade-offs, not safety rankings</caption>
              <thead><tr><th scope="col">Hotel base</th><th scope="col">Evening plans</th><th scope="col">Check before booking</th><th scope="col">Trade-off</th></tr></thead>
              <tbody>{data.hotelBases.map(base => <tr key={base.area}><th scope="row">{base.area}</th><td data-label="Evening plans">{base.plans}</td><td data-label="Check before booking">{base.consideration}</td><td data-label="Trade-off">{base.tradeoff}</td></tr>)}</tbody>
            </table>
          </div>
          <h3>Check the final walk and the complete cost</h3>
          <p>Look at the real station exit, garage entrance or pickup point and the route to reception. Add taxes, property fees, parking and transport to the comparison. A nearby hotel may reduce travel, but verify the route and late arrival arrangements rather than assuming proximity alone is enough.</p>
          <p>Use our <Link href="/destination/la/best-areas-to-stay">guide to areas to stay in Los Angeles</Link> for a broader location comparison, then evaluate individual properties against your plans.</p>
          <aside className={styles.hotelCta} aria-label="Compare accommodation for your evening plans" id="la-hotel-recommendations">
            <h3>Choose accommodation around your evenings</h3>
            <p>Compare hotel locations, then check each property’s arrival, parking and return-route details before booking.</p>
            <HotelLink placement="hotel_base_comparison">Compare LA hotel locations</HotelLink>
          </aside>
        </section>

        <section id="hotel-checklist" className={styles.section} aria-labelledby="checklist-heading">
          <h2 id="checklist-heading">What should you check before booking an LA hotel?</h2>
          <p>Once you have chosen the location, confirm the property details before paying. Ask about late arrivals, parking restrictions, room conditions and who can help if entry arrangements fail.</p>
          <div className={styles.twoColumns}>{data.hotelChecks.map(check => <div key={check.title}><h3>{check.title}</h3><p>{check.copy}</p></div>)}</div>
          <HotelLink placement="hotel_booking_checklist">Browse Los Angeles hotels</HotelLink>
        </section>

        <section id="transitSafety" className={styles.section} aria-labelledby="transport-heading">
          <h2 id="transport-heading">How should you get back to your hotel after dark?</h2>
          <p>Choose a return mode before leaving, then check it again before the venue closes. Your best option depends on distance, connections, waiting time and how the route looks at that hour.</p>
          <div className={styles.twoColumns}>{data.transport.map(mode => <section key={mode.id} id={mode.id}>
            <h3>{mode.title}</h3><p>{mode.copy}</p><ul>{mode.tips.map(tip => <li key={tip}>{tip}</li>)}</ul>
            {"sourceUrl" in mode && mode.sourceUrl && <a href={mode.sourceUrl}>{mode.sourceLabel}</a>}
          </section>)}</div>
          <p>Use the <Link href="/destination/la/la-metro-map">LA Metro map</Link> to understand connections, then confirm current departures and disruptions with <a href="https://www.metro.net/riding/schedules-2/">Metro’s official schedules</a>.</p>
        </section>

        <section id="scenarios" className={styles.section} aria-labelledby="outings-heading">
          <h2 id="outings-heading">Plan the return before these popular evening outings</h2>
          <p>Check opening hours, parking and transport for your travel date, particularly around holidays, events or service changes.</p>
          <div className={styles.threeColumns}>{data.outings.map(outing => <div key={outing.title}><h3>{outing.title}</h3><p>{outing.copy}</p><a href={outing.sourceUrl}>{outing.sourceLabel}</a></div>)}</div>
          <p>Build your evening around <Link href="/destination/la/things-to-do">LA activities</Link> and <Link href="/destination/la/food">dining options</Link> in the same geographic cluster where possible.</p>
        </section>

        <section id="personas" className={styles.section} aria-labelledby="travelers-heading">
          <h2 id="travelers-heading">What changes for families and solo travelers?</h2>
          <div className={styles.threeColumns}>{data.travelers.map(traveler => <div key={traveler.title}><h3>{traveler.title}</h3><p>{traveler.copy}</p></div>)}</div>
          <p>For more trip planning, see our <Link href="/destination/la/solo-trip-to-la">solo LA guide</Link> and <Link href="/destination/la/la-female-solo-travel-guide">guide for women visiting LA alone</Link>.</p>
        </section>

        <section id="emergencyBlock" className={styles.section} aria-labelledby="help-heading">
          <h2 id="help-heading">Where to get help if plans change</h2>
          <p>For an immediate threat or medical emergency, call <a href="tel:911">911</a>. For Metro reporting, the agency currently lists <a href="tel:18889507233">1-888-950-SAFE (7233)</a> and text reporting at 213-788-2777. Check <a href="https://www.metro.net/safety-support/report-issue/">Metro’s official reporting guidance</a> for the situation you need to report.</p>
          <p>For a non-emergency route or arrival problem, contact your hotel, venue staff or the relevant local service. Santa Monica, West Hollywood and Beverly Hills have separate jurisdictions.</p>
        </section>

        <section id="faq" className={styles.section} aria-labelledby="faq-heading">
          <h2 id="faq-heading">Frequently asked questions</h2>
          <div className={styles.faq}>{data.faq.map(faq => <details key={faq.question}>
            <summary><h3>{faq.question}</h3></summary><p>{faq.answer}</p>
            {"href" in faq && faq.href && <p><Link href={faq.href}>{faq.linkLabel}</Link></p>}
          </details>)}</div>
        </section>

        <section id="links" className={styles.section} aria-labelledby="planning-heading">
          <h2 id="planning-heading">Pick a hotel base that makes evenings simpler</h2>
          <p>Choose the accommodation that fits your evenings, then verify the property’s entrance, arrival arrangements and the route back.</p>
          <HotelLink placement="article_end">Compare Los Angeles hotels</HotelLink>
          <nav className={styles.related} aria-label="Related Los Angeles planning guides">{related.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}</nav>
        </section>
      </article>
    </main>
    <Footer />
  </>;
}
