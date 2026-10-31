import styles from "./SafetyNarrative.module.css";
import CitySafetyHotelCTA from "@/app/components/hotels/CitySafetyHotelCTA";
import { orlandoRecommendedHotelAreas } from "@/app/lib/orlandoHotelAreas";
import { SafetyIntroChecklist } from "../herobanner/safetyhero";
import { useEffect, useState, type MouseEvent } from "react";

const contents = [
  ["essentials", "Orlando tourist safety: the essentials"],
  ["numbers", "Understanding local safety information"],
  ["areas", "Orlando area safety: what to check"],
  ["stay", "Stay near the places you plan to visit"],
  ["evening", "Planning an evening in Orlando"],
  ["getting-around", "Getting around Orlando safely"],
  ["scams", "Common Orlando scams and booking precautions"],
  ["solo", "Solo traveler essentials"],
  ["heat", "Heat, sun and thunderstorms"],
  ["what-next", "If something feels off: what to do next"],
  ["emergency-resources", "Emergency numbers and resources"],
  ["faq", "Frequently asked questions"],
  ["resources", "More Orlando resources"],
  ["sources", "About this guide and its sources"],
] as const;

function handleMobileContentsClick(event: MouseEvent<HTMLAnchorElement>, id: string) {
  const details = event.currentTarget.closest("details");
  if (!details) return;
  details.open = false;
  window.requestAnimationFrame(() => {
    document.getElementById(id)?.focus({ preventScroll: true });
  });
}

function ContentsLinks({ mobile = false }: { mobile?: boolean }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const syncActiveId = () => setActiveId(decodeURIComponent(window.location.hash.slice(1)) || null);
    syncActiveId();
    window.addEventListener("hashchange", syncActiveId);
    return () => window.removeEventListener("hashchange", syncActiveId);
  }, []);

  return <ol className={styles.contentsList}>
    {contents.map(([id, label]) => <li key={id}><a href={`#${id}`} aria-current={activeId === id ? "location" : undefined} onClick={mobile ? (event) => handleMobileContentsClick(event, id) : undefined}>{label}</a></li>)}
  </ol>;
}

export default function SafetyNarrative() {
  return <>
    <nav className={styles.desktopContents} aria-label="On this page">
      <h2>On this page</h2>
      <ContentsLinks />
    </nav>
    <details className={styles.mobileContents}>
      <summary><span>On this page</span><span className={styles.chevron} aria-hidden="true" /></summary>
      <nav aria-label="On this page"><ContentsLinks mobile /></nav>
    </details>
    <article className={styles.narrative} aria-label="Orlando safety guide">
    <SafetyIntroChecklist />

    <section id="essentials" className={styles.section} tabIndex={-1}><span id="safety" /><span id="is-orlando-safe-2026" /><span id="quick-takeaways" /><h2>Orlando tourist safety: the essentials</h2>
      <p>Before booking, confirm your accommodation’s exact address, the transport you will use and the arrangements for your busiest outing. Use these checks to turn a broad safety question into a practical trip plan:</p>
      <ul>
        <li><strong>Accommodation:</strong> Can the property confirm parking, access arrangements and the transport you need?</li>
        <li><strong>Walking:</strong> Can you identify a continuous route with suitable sidewalks and crossings?</li>
        <li><strong>Driving:</strong> Have you chosen a toll-payment method and checked parking terms?</li>
        <li><strong>Tickets:</strong> Do you know who supplies the ticket, what it includes and the conditions attached to the offer?</li>
        <li><strong>Outdoor plans:</strong> Have you identified water, cooling breaks and an indoor shelter option?</li>
        <li><strong>Help:</strong> Have you saved your accommodation address and the appropriate emergency information?</li>
      </ul>
    </section>

    <section id="numbers" className={styles.section} tabIndex={-1}><span id="crime-data-2026" /><h2>Understanding local safety information</h2>
      <p>Use incident information as one input, not as a prediction of what will happen at a hotel or along a walking route. Start with the exact property or destination address, then check which authority and geographical area a dataset covers. Before comparing figures, check the date range, incident definitions and whether the information concerns reports or another measure.</p>
      <p>The <a href="https://www.orlando.gov/Public-Safety/OPD/OPD-Records-Open-Data">Orlando Police Department’s records and open-data resources</a> are a starting point for finding the department’s published information. Read the coverage and definitions supplied with the particular resource before using it to compare locations.</p>
    </section>

    <section id="areas" className={styles.section} tabIndex={-1}><span id="neighborhood-safety" /><h2>Orlando area safety: what to check</h2>
      <div className={styles.areaBlock}>
      <h3>International Drive</h3>
      <p>Compare the exact hotel address with each stop on your itinerary rather than using “International Drive” as a guarantee of proximity. Trace the walking route entrance to entrance, including crossings and parking-lot access.</p>
      <p>Before booking, ask: “Which of my planned destinations can I reach on foot using sidewalks and crossings? Which need transport? Where is the hotel’s designated pickup point?” If the answer does not resolve your route, budget for transport instead of assuming you will walk.</p>
      </div>

      <h3>Disney Springs and Lake Buena Vista</h3>
      <p>Distinguish access to Disney Springs from transport to the other destinations on your itinerary. Ask the property to name the destinations its transport serves and explain any booking, timing or accessibility requirements.</p>
      <p>Confirm the outward and return arrangements separately. Do not treat “near Disney” or “shuttle available” as confirmation that a particular service fits your trip.</p>

      <h3>Downtown Orlando and Lake Eola</h3>
      <p>Build your plan around the exact venues and parking or transport stops you will use. Check the route between each stop rather than judging the whole visit by a neighbourhood label.</p>
      <p>Before driving, identify where you intend to park, its entry and exit arrangements and the route back to the vehicle. For detailed evening walking and pickup planning, use the <a href="/destination/orlando/is-orlando-safe-at-night">Orlando night-safety guide</a>.</p>

      <h3>Kissimmee and US-192</h3>
      <p>Use the full property address when comparing accommodation and activities. Ask about the route from the property entrance to your planned stops, not just the straight-line distance shown in a listing.</p>
      <p>Confirm transport directly with the property you are booking. If your itinerary depends on a shuttle, ask which destinations it serves, whether you must reserve and what your alternative will be if its timetable does not fit.</p>
    </section>

    <div id="stay" aria-label="Hotel options" tabIndex={-1}><CitySafetyHotelCTA city="orlando" title="Stay near the places you plan to visit" intro="Compare hotel locations around your itinerary and verify the property’s transport and parking arrangements." choices={orlandoRecommendedHotelAreas} source="safety-guide" trackingId="recommended-orlando-hotel-areas" buttonVariant="orlandoSafetyGuide" /></div>

    <section id="evening" className={styles.section} tabIndex={-1}><h2>Planning an evening in Orlando</h2><p>For evening plans, check the route between your destination and accommodation and decide how you will return before you leave. Venue access, walking conditions and transport options need to be checked for your particular outing. For area-by-area planning, walking checks and pickup guidance, read <a href="/destination/orlando/is-orlando-safe-at-night">Is Orlando Safe at Night?</a></p></section>

    <section id="getting-around" className={styles.section} tabIndex={-1}><h2>Getting around Orlando safely</h2>
      <h3>Driving, rental-car tolls and parking</h3>
      <p>Before collecting a rental car, choose how you will pay tolls and read the associated fees; rental-company toll programmes have different terms and charges. <a href="https://www.sunpass.com/en/tolls/rentalVehicles.shtml">SunPass’s rental-vehicle guidance</a> explains the available arrangements and why the rental agreement matters.</p>
      <p>If you are collecting and returning an eligible rental car at Orlando International Airport, check whether <a href="https://www.visitortollpass.com/faq">Visitor Toll Pass</a> fits your trip; its FAQ lists participating companies and warns that failing to decline the rental company’s toll programme can result in double billing.</p>
      <p>Before leaving a car park, save the location of your vehicle and check the parking terms. Keep the return instructions and rental-company contact details accessible outside the vehicle.</p>

      <h3>Checking a walking route</h3>
      <p>Check the complete route between entrances, not just the distance between map pins. Look for sidewalks, road crossings and a practical way back. If you cannot establish a suitable route, choose transport rather than improvising around a missing connection.</p>

      <h3>Booked rides and hotel transport</h3>
      <p>Use the pickup instructions in your booking or ask venue staff to identify the designated pickup location. For an app-booked ride, compare the vehicle, registration and driver details with the booking before entering; do not accept a substitute that does not match.</p>
      <p>For hotel transport, confirm the actual destination, reservation requirements and return arrangements. Save a backup option if your day depends on a particular departure.</p>
    </section>

    <section id="scams" className={styles.section} tabIndex={-1}><span id="common-scams-2026" /><h2>Common Orlando scams and booking precautions</h2>
      <h3>Theme-park tickets and discounted offers</h3>
      <p>A discount alone does not establish that a ticket offer is fraudulent: <a href="https://www.visitorlando.com/blog/post/orlando-frequently-asked-questions-blog/">Visit Orlando identifies itself as an authorized reseller for the tickets it sells through BestofOrlando.com</a>.</p>
      <p>Before paying, identify the seller and ticket supplier, verify the seller’s relationship with the attraction where possible, and read the date, admission, eligibility and cancellation conditions. If you cannot establish who will supply the ticket or how you will receive it, pause the purchase and check with the attraction.</p>
      <p>If a “free” or discounted offer requires a presentation, appointment or other commitment, get those conditions in writing before accepting. Do not assume a low price includes every park, date or extra you want.</p>

      <h3>Accommodation and payment checks</h3>
      <p>Check the full property address, final price, parking charges, deposit and cancellation terms before paying. If someone asks you to move a booking or payment outside the channel you selected, pause and verify the request through independently obtained contact details.</p>
      <p>Keep your confirmation and the terms shown at purchase. If the accommodation cannot locate your reservation, contact the booking provider through its official support channel before sending a second payment.</p>
    </section>

    <section id="solo" className={styles.section} tabIndex={-1}><span id="solo-traveler-essentials" /><h2>Solo traveler essentials</h2>
      <ul><li>Keep essential booking information accessible and have a backup way to access it.</li><li>Keep your phone charged and plan transport between stops.</li><li>Share your itinerary with someone you trust if that is useful to you.</li><li>For evening routes and return planning, use the dedicated <a href="/destination/orlando/is-orlando-safe-at-night">night-safety guide</a>.</li></ul>
    </section>

    <section id="heat" className={styles.section} tabIndex={-1}><h2>Heat, sun and thunderstorms</h2>
      <h3>Plan cooling breaks before a long outing</h3>
      <p>Carry water, take breaks and plan access to shade or air conditioning; the <a href="https://www.cdc.gov/extreme-heat/about/">CDC recommends staying cool, staying hydrated and checking local HeatRisk when planning activity</a>.</p>
      <p>Do not dismiss dizziness, headache, weakness or nausea as simply part of a tiring day; these are among the symptoms described in the <a href="https://www.cdc.gov/extreme-heat/about/">CDC’s heat-health guidance</a>. Stop to seek a cooler place and appropriate help, and use emergency services for an immediate medical emergency.</p>
      <p>If your health or medication affects how you manage heat, discuss your plan with your clinician rather than changing medication yourself, as advised by the <a href="https://www.cdc.gov/extreme-heat/about/">CDC</a>.</p>

      <h3>Know where you will shelter</h3>
      <p>If you hear thunder, move into a fully enclosed building or an enclosed hard-topped vehicle; do not rely on a tree, open-sided pavilion or covered patio as lightning shelter. <a href="https://www.weather.gov/mlb/lightning_rules">National Weather Service Melbourne advises staying sheltered for 30 minutes after the last thunder</a>.</p>
      <p>Before an outdoor outing, identify an indoor alternative and follow venue staff instructions if activities are suspended. Keep the return journey flexible rather than waiting outdoors for conditions to improve.</p>
    </section>

    <section id="what-next" className={styles.section} tabIndex={-1}><span id="decision-tree" /><h2>If something feels off: what to do next</h2>
      <h3>Your booked ride does not match</h3>
      <p>Do not enter a vehicle that does not match your booking. Recheck the booking in the app, use the provider’s support process and ask venue staff for help locating the correct pickup point if needed.</p>

      <h3>Your belongings are missing</h3>
      <p>First check with the venue or transport provider’s official lost-property process. If you suspect theft, preserve relevant booking details and use the appropriate reporting route; <a href="https://www.ocso.com/911-or-non-emergency/">Orange County Sheriff’s Office distinguishes theft after the suspect has left from emergencies such as a crime in progress</a>.</p>
      <p>If payment cards or an account may be compromised, contact the issuer or provider through an independently verified support channel.</p>

      <h3>Someone needs urgent help</h3>
      <p>Call 911 for a serious medical emergency, crime in progress or other life-threatening situation. Be ready to give the address, venue, nearby intersection or another precise description of where help is needed, following the <a href="https://www.ocso.com/911-or-non-emergency/">Sheriff’s guidance for emergency calls</a>.</p>
    </section>

    <section id="emergency-resources" className={styles.section} tabIndex={-1}><h2>Emergency numbers and resources</h2>
      <p>Save your accommodation’s full address before your trip. When asking for help, identify your actual location rather than relying on “Orlando” as the address.</p>
      <ul>
        <li><strong>Emergency:</strong> Call <a href="tel:911">911</a> for immediate danger or a serious medical emergency, following <a href="https://www.ocso.com/911-or-non-emergency/">Orange County Sheriff’s emergency guidance</a>.</li>
        <li><strong>Orlando Police Department, non-emergency:</strong> <a href="tel:+13212355300">321-235-5300</a>, as published on the <a href="https://www.orlando.gov/Our-Government/Departments-Offices/Orlando-Police-Department/Contact-Us">City of Orlando contact page</a>.</li>
        <li><strong>Orange County Sheriff’s Office, non-emergency:</strong> <a href="tel:+14078364357">407-836-4357</a>, as published in the <a href="https://www.ocso.com/911-or-non-emergency/">Sheriff’s non-emergency guidance</a>.</li>
      </ul>
      <p>The two non-emergency numbers are agency-specific contacts, not a complete list for every destination on your trip. For a non-emergency, confirm the relevant agency for your location; for an emergency, call 911 rather than delaying while you research boundaries.</p>
    </section>

    <section id="faq" className={styles.section} tabIndex={-1}><h2>Frequently asked questions</h2>
      <h3>How should I assess safety for an Orlando trip?</h3><p>Start with your accommodation address and the journeys your itinerary requires. Check walking connections, parking or transport, outdoor-weather plans and how you will get help. Use local incident information with its date range and geographical coverage in mind, rather than relying on a single citywide safety label.</p>
      <h3>What should I check before booking accommodation?</h3><p>Ask the property to confirm parking terms, access arrangements and any transport your itinerary depends on. If a shuttle is important, ask for its destinations, reservation requirements and return arrangements. Save the answer with your booking confirmation.</p>
      <h3>What should I do with valuables while sightseeing?</h3><p>Carry only what you need, keep belongings attended and avoid leaving valuables visible in a parked vehicle. Make a plan for important documents and a backup way to access essential booking information.</p>
      <h3>Where can I find advice about Orlando after dark?</h3><p>For area-by-area evening planning, walking checks and return transport, read our <a href="/destination/orlando/is-orlando-safe-at-night">Orlando night-safety guide</a>.</p>
    </section>

    <section id="resources" className={styles.section} tabIndex={-1}><h2>More Orlando resources</h2><ul><li><a href="/destination/orlando/is-orlando-safe-at-night">Orlando at night: walking and return-trip advice</a></li><li><a href="/destination/orlando/best-areas-to-stay">Best areas to stay in Orlando</a></li><li><a href="/destination/orlando/getting-to-orlando">Getting to Orlando</a></li><li><a href="/destination/orlando/neighborhood-guide">Orlando neighborhood guide</a></li></ul></section>

    <section id="sources" className={styles.section} tabIndex={-1}><h2>About this guide and its sources</h2><p>This guide provides general trip-planning precautions, not a safety guarantee for a property, route or neighbourhood. Weather guidance comes from the CDC and National Weather Service; emergency contacts and incident-information resources come from the relevant local agencies. Verify changing booking, venue and transport arrangements with the provider for your travel dates.</p></section>
  </article>
  </>;
}
