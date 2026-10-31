import styles from "./SafetyNarrative.module.css";
import CitySafetyHotelCTA from "@/app/components/hotels/CitySafetyHotelCTA";
import { orlandoRecommendedHotelAreas } from "@/app/lib/orlandoHotelAreas";
import { useEffect, useRef, useState } from "react";

const contents = [
  ["essentials", "Essentials"],
  ["numbers", "Local safety"],
  ["areas", "Areas"],
  ["stay", "Hotels"],
  ["evening", "Evening plans"],
  ["getting-around", "Transport"],
  ["scams", "Scams"],
  ["solo", "Solo travel"],
  ["heat", "Weather"],
  ["what-next", "Getting help"],
  ["emergency-resources", "Emergency contacts"],
  ["faq", "FAQs"],
  ["resources", "Resources"],
  ["sources", "Sources"],
] as const;

function keepLinkVisible(list: HTMLOListElement, link: HTMLAnchorElement) {
  const listBounds = list.getBoundingClientRect();
  const linkBounds = link.getBoundingClientRect();
  if (linkBounds.left < listBounds.left) {
    list.scrollTo({ left: list.scrollLeft + linkBounds.left - listBounds.left - 8, behavior: "auto" });
  } else if (linkBounds.right > listBounds.right) {
    list.scrollTo({ left: list.scrollLeft + linkBounds.right - listBounds.right + 8, behavior: "auto" });
  }
}

function ContentsNavigation() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [scrollState, setScrollState] = useState({ hasOverflow: false, canScrollLeft: false, canScrollRight: false });
  const linksRef = useRef<HTMLOListElement>(null);
  const navigationRef = useRef<HTMLElement>(null);
  const currentActiveIdRef = useRef<string | null>(null);

  useEffect(() => {
    const list = linksRef.current;
    if (!list) return;

    const updateScrollState = () => {
      const maxScrollLeft = Math.max(0, list.scrollWidth - list.clientWidth);
      const nextState = {
        hasOverflow: maxScrollLeft > 1,
        canScrollLeft: list.scrollLeft > 1,
        canScrollRight: maxScrollLeft - list.scrollLeft > 1,
      };
      setScrollState((previous) =>
        previous.hasOverflow === nextState.hasOverflow &&
        previous.canScrollLeft === nextState.canScrollLeft &&
        previous.canScrollRight === nextState.canScrollRight
          ? previous
          : nextState,
      );
    };

    const setCurrentActiveId = (id: string | null) => {
      if (currentActiveIdRef.current === id) return;
      currentActiveIdRef.current = id;
      setActiveId(id);

      if (id) {
        const activeLink = list?.querySelector<HTMLAnchorElement>(`a[href="#${CSS.escape(id)}"]`);
        if (list && activeLink) keepLinkVisible(list, activeLink);
        window.requestAnimationFrame(updateScrollState);
      }
    };

    const syncFromScroll = () => {
      const navBottom = navigationRef.current?.getBoundingClientRect().bottom ?? 0;
      const activationLine = navBottom + 16;
      let nextActiveId: string | null = null;

      for (const [id] of contents) {
        const target = document.getElementById(id);
        if (target && target.getBoundingClientRect().top <= activationLine) nextActiveId = id;
        else if (target) break;
      }

      setCurrentActiveId(nextActiveId);
    };

    let frame = 0;
    const queueScrollSync = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(syncFromScroll);
    };

    const syncFromFragment = () => {
      const fragment = decodeURIComponent(window.location.hash.slice(1));
      const matchingId = contents.some(([id]) => id === fragment) ? fragment : null;
      if (matchingId) setCurrentActiveId(matchingId);
      else syncFromScroll();
    };

    syncFromFragment();
    updateScrollState();
    const resizeObserver = new ResizeObserver(updateScrollState);
    resizeObserver.observe(list);
    list.querySelectorAll("li").forEach((item) => resizeObserver.observe(item));
    list.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("hashchange", syncFromFragment);
    window.addEventListener("scroll", queueScrollSync, { passive: true });
    const syncOnResize = () => {
      updateScrollState();
      queueScrollSync();
    };
    window.addEventListener("resize", syncOnResize);
    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      list.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("hashchange", syncFromFragment);
      window.removeEventListener("scroll", queueScrollSync);
      window.removeEventListener("resize", syncOnResize);
    };
  }, []);

  const scrollLinks = (direction: -1 | 1) => {
    const list = linksRef.current;
    if (!list) return;
    list.scrollBy({ left: direction * Math.max(180, list.clientWidth * 0.75), behavior: "smooth" });
  };

  return <nav ref={navigationRef} className={styles.sectionNavigation} aria-label="Explore this guide">
    <span className={styles.sectionNavigationLabel}>Explore this guide</span>
    <div className={styles.navigationRow}>
      {scrollState.hasOverflow && <button type="button" className={styles.scrollArrow} aria-label="Scroll to earlier sections" aria-controls="orlando-safety-guide-section-links" disabled={!scrollState.canScrollLeft} onClick={() => scrollLinks(-1)}><span aria-hidden="true">‹</span></button>}
      <ol id="orlando-safety-guide-section-links" className={styles.contentsList} ref={linksRef}>
        {contents.map(([id, label]) => <li key={id}><a href={`#${id}`} aria-current={activeId === id ? "location" : undefined}>{label}</a></li>)}
      </ol>
      {scrollState.hasOverflow && <button type="button" className={styles.scrollArrow} aria-label="Scroll to later sections" aria-controls="orlando-safety-guide-section-links" disabled={!scrollState.canScrollRight} onClick={() => scrollLinks(1)}><span aria-hidden="true">›</span></button>}
    </div>
  </nav>;
}

export default function SafetyNarrative() {
  return <>
    <ContentsNavigation />
    <article className={styles.narrative} aria-label="Orlando safety guide">
    <section id="essentials" className={styles.section} tabIndex={-1}><span id="safety" /><span id="is-orlando-safe-2026" /><span id="quick-takeaways" /><h2>Orlando tourist safety: the essentials</h2>
      <p>An Orlando itinerary can cross the City of Orlando, unincorporated Orange County, Lake Buena Vista and Kissimmee. A hotel marketed to Orlando visitors may sit outside city limits, so its actual address matters when checking transport and the agency responsible for a non-emergency. Plan around your busiest park, convention or downtown day rather than treating the whole attraction area as one compact neighbourhood. Before booking, confirm your accommodation’s exact address and transport arrangements. Use these checks to turn a broad safety question into a practical trip plan:</p>
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
      <p>Use incident information as one input, not as a prediction of what will happen at a hotel or along a walking route. Start with the exact property or destination address, then check which authority and geographical area a dataset covers. Before comparing figures, check the date range, incident definitions and whether the information concerns reports or another measure. City of Orlando figures do not automatically describe a hotel elsewhere in Orange County or Kissimmee. Calls for service and documented incidents answer different questions; a call alone does not establish that a crime occurred. Avoid comparing datasets with different coverage or definitions.</p>
      <p>The <a href="https://www.orlando.gov/Public-Safety/OPD/OPD-Records-Open-Data">Orlando Police Department’s records and open-data resources</a> are a starting point for finding the department’s published information. Read the coverage and definitions supplied with the particular resource before using it to compare locations. Look at the incident types and dates relevant to your planned stops, then assess the hotel entrance, parking setup and walking connections. A citywide trend or an old neighbourhood reputation cannot establish what conditions will be like at a particular property during your visit.</p>
    </section>

    <section id="areas" className={styles.section} tabIndex={-1}><span id="neighborhood-safety" /><h2>Orlando area safety: what to check</h2>
      <div className={styles.areaBlock}>
      <h3>International Drive</h3>
      <p>Compare the exact hotel address with each stop on your itinerary rather than using “International Drive” as a guarantee of proximity. Trace the walking route entrance to entrance, including crossings and parking-lot access. International Drive combines hotels, restaurants, attractions and convention destinations over a long visitor corridor. Compare properties on the side of the road closest to your main stops where practical, while still checking the complete pedestrian connection.</p>
      <p>Before booking, ask: “Which of my planned destinations can I reach on foot using sidewalks and crossings? Which need transport? Where is the hotel’s designated pickup point?” If the answer does not resolve your route, budget for transport instead of assuming you will walk. Consider wide intersections, highway approaches and distances between building entrances. In crowded attraction and hotel car parks, put bags and purchases out of sight and lock the vehicle before walking away, consistent with <a href="https://www.ocso.com/tourist-safety/">OCSO’s tourist-safety precautions</a>.</p>
      </div>

      <h3>Disney Springs and Lake Buena Vista</h3>
      <p>Distinguish access to Disney Springs from transport to the other destinations on your itinerary. Ask the property to name the destinations its transport serves and explain any booking, timing or accessibility requirements. The Disney-area resort district is geographically extensive. A property with Disney, Lake Buena Vista or Orlando in its marketing name may still require transport to your planned park or restaurant; compare its street address with the actual destination.</p>
      <p>Confirm the outward and return arrangements separately. Do not treat “near Disney” or “shuttle available” as confirmation that a particular service fits your trip. Match the timetable to your planned park visit, meal or event and ask how you will get back if the service does not fit. Check any suggested walk for the whole route rather than assuming proximity means pedestrian access.</p>

      <h3>Downtown Orlando and Lake Eola</h3>
      <p>Build your plan around the exact venues and parking or transport stops you will use. Check the route between each stop rather than judging the whole visit by a neighbourhood label. A daytime Lake Eola visit, a major event and a late return can involve different street activity and access arrangements. The <a href="https://www.orlando.gov/Parking-Transportation/Parking/Downtown-Guide">City of Orlando’s downtown parking guide</a> advises planning ahead for events and changing road access. For dining stops in Mills 50, Ivanhoe Village or Thornton Park, apply the same exact-route, parking and pickup checks rather than assigning the whole district a safety rating.</p>
      <p>Before driving, identify where you intend to park, its entry and exit arrangements and the route back to the vehicle. For detailed evening walking and pickup planning, use the <a href="/destination/orlando/is-orlando-safe-at-night">Orlando night-safety guide</a>. Save the parking location and a meeting point that your group can identify without needing to coordinate in a crowd.</p>

      <h3>Kissimmee and US-192</h3>
      <p>Use the full property address when comparing accommodation and activities. Ask about the route from the property entrance to your planned stops, not just the straight-line distance shown in a listing. Kissimmee and US-192 should not be treated as the City of Orlando simply because accommodation is marketed to theme-park visitors. Confirm the property's location and the relevant local agency for a non-emergency.</p>
      <p>Confirm transport directly with the property you are booking. If your itinerary depends on a shuttle, ask which destinations it serves, whether you must reserve and what your alternative will be if its timetable does not fit. Compare the journeys required by your actual itinerary instead of assuming all attraction-area hotels are interchangeable. Include the final connection from the shuttle drop-off point to your accommodation.</p>
    </section>

    <div id="stay" aria-label="Hotel options" tabIndex={-1}><CitySafetyHotelCTA city="orlando" title="Stay near the places you plan to visit" intro="Compare the exact hotel address with your main park cluster, convention venue or downtown plans. Verify transport destinations, return times and parking arrangements before booking so your location fits the journeys you actually need." choices={orlandoRecommendedHotelAreas} source="safety-guide" trackingId="recommended-orlando-hotel-areas" buttonVariant="orlandoSafetyGuide" /></div>

    <section id="evening" className={styles.section} tabIndex={-1}><h2>Planning an evening in Orlando</h2><p>For evening plans, check the route between your destination and accommodation and decide how you will return before you leave. Venue access, walking conditions and transport options need to be checked for your particular outing. For area-by-area planning, walking checks and pickup guidance, read <a href="/destination/orlando/is-orlando-safe-at-night">Is Orlando Safe at Night?</a> Save your lodging address, keep enough phone battery for maps and transport apps, and agree on a meeting point with your group. Check the designated pickup location and any event-related changes to parking or street access. Keep drinks attended and arrange the return before drinking or entering a crowded venue.</p></section>

    <section id="getting-around" className={styles.section} tabIndex={-1}><h2>Getting around Orlando safely</h2>
      <h3>Driving, rental-car tolls and parking</h3>
      <p>Before collecting a rental car, choose how you will pay tolls and read the associated fees; rental-company toll programmes have different terms and charges. <a href="https://www.sunpass.com/en/tolls/rentalVehicles.shtml">SunPass’s rental-vehicle guidance</a> explains the available arrangements and why the rental agreement matters. Keep the chosen toll arrangement with your rental paperwork so you can check a later charge against the terms you accepted.</p>
      <p>If you are collecting and returning an eligible rental car at Orlando International Airport, check whether <a href="https://www.visitortollpass.com/faq">Visitor Toll Pass</a> fits your trip; its FAQ lists participating companies and warns that failing to decline the rental company’s toll programme can result in double billing. Confirm eligibility and the collection and return arrangements for your particular rental rather than assuming every company or journey qualifies.</p>
      <p>Before leaving a car park, save the location of your vehicle and check the parking terms. Keep the return instructions and rental-company contact details accessible outside the vehicle. Lock the doors and remove bags and electronics from view. Where practical, put purchases away before arriving at the next stop. For downtown events, identify parking in advance and check for road closures rather than searching for a space after arrival. Buckle up and arrange child seats before collecting a rental car. <a href="https://www.flsenate.gov/Laws/Statutes/2026/316.613">Florida’s child-restraint statute</a> generally requires an approved restraint for children five and younger; review its age-specific requirements and exceptions for your circumstances. Set navigation before moving and follow <a href="https://www.flsenate.gov/Laws/Statutes/2026/316.305">Florida’s prohibition on texting while driving</a>.</p>

      <h3>Checking a walking route</h3>
      <p>Check the complete route between entrances, not just the distance between map pins. Look for sidewalks, road crossings and a practical way back. If you cannot establish a suitable route, choose transport rather than improvising around a missing connection. Preview highway ramps, major crossings and the final block around your destination. Consider lighting and street activity at the time you will travel, including the return. Repeated crossings of wide roads can make a short map distance a poor basis for deciding to walk.</p>

      <h3>Booked rides and hotel transport</h3>
      <p>Use the pickup instructions in your booking or ask venue staff to identify the designated pickup location. For an app-booked ride, compare the vehicle, registration and driver details with the booking before entering; do not accept a substitute that does not match. Wait somewhere visible and check the make, model, registration and driver in the app before approaching the car. <a href="https://www.uber.com/us/en/ride/safety/tips/">Uber’s rider-safety guidance</a> recommends matching the plate, car and driver photo and asking who the driver is there to pick up; apply your booked provider’s instructions. Do not rely only on a stranger asking whether you need a ride. Check that the journey starts in the expected direction.</p>
      <p>For hotel transport, confirm the actual destination, reservation requirements and return arrangements. Save a backup option if your day depends on a particular departure. If using <a href="https://www.golynx.com/">LYNX</a>, the downtown LYMMO circulator or <a href="https://sunrail.com/">SunRail</a>, check the operator’s current service information for your intended day and plan the final connection from the stop or station. Do not assume commuter rail has the same service pattern as a large-city subway.</p>
    </section>

    <section id="scams" className={styles.section} tabIndex={-1}><span id="common-scams-2026" /><h2>Common Orlando scams and booking precautions</h2>
      <h3>Theme-park tickets and discounted offers</h3>
      <p>A discount alone does not establish that a ticket offer is fraudulent: <a href="https://www.visitorlando.com/blog/post/orlando-frequently-asked-questions-blog/">Visit Orlando identifies itself as an authorized reseller for the tickets it sells through BestofOrlando.com</a>. Independently checking a seller's authorization is more useful than judging an offer by the size of its discount.</p>
      <p>Before paying, identify the seller and ticket supplier, verify the seller’s relationship with the attraction where possible, and read the date, admission, eligibility and cancellation conditions. If you cannot establish who will supply the ticket or how you will receive it, pause the purchase and check with the attraction. Buy directly from the attraction or verify a reseller's authorization independently. Park logos, a professional-looking site or a prominent search result do not establish that a seller is genuine; the <a href="https://consumer.ftc.gov/consumer-alerts/2025/06/how-avoid-travel-website-scams">FTC describes how travel websites can impersonate genuine businesses</a>.</p>
      <p>If a “free” or discounted offer requires a presentation, appointment or other commitment, get those conditions in writing before accepting. Do not assume a low price includes every park, date or extra you want. Urgency and unclear conditions are reasons to pause: verify the supplier before committing to a presentation or sending money.</p>

      <h3>Accommodation and payment checks</h3>
      <p>Check the full property address, final price, parking charges, deposit and cancellation terms before paying. If someone asks you to move a booking or payment outside the channel you selected, pause and verify the request through independently obtained contact details. For vacation rentals, search the address independently and compare the photos and listing details across sources; the <a href="https://consumer.ftc.gov/articles/rental-listing-scams">FTC’s rental-listing guidance</a> explains how copied listings and changed contact details divert payments. Obtain the contract before sending a deposit. Pressure to pay immediately by gift card, wire transfer or cryptocurrency is a warning sign identified in the <a href="https://consumer.ftc.gov/articles/avoid-scams-when-you-travel">FTC’s travel-scam guidance</a>.</p>
      <p>Keep your confirmation and the terms shown at purchase. If the accommodation cannot locate your reservation, contact the booking provider through its official support channel before sending a second payment. Rental-car trips also make toll-payment messages worth checking carefully. The <a href="https://consumer.ftc.gov/consumer-alerts/2025/01/got-text-about-unpaid-tolls-its-probably-scam">FTC warns about fake unpaid-toll texts</a>. Do not follow an unsolicited message to enter payment details: contact the toll agency through an independently obtained official channel and check the rental agreement’s toll arrangements.</p>
    </section>

    <section id="solo" className={styles.section} tabIndex={-1}><span id="solo-traveler-essentials" /><h2>Solo traveler essentials</h2>
      <ul><li>Keep essential booking information and your lodging address accessible, with a backup way to retrieve them if your phone is unavailable. Keep a second payment method separate from your main wallet.</li><li>Keep your phone charged and plan transport between stops, including the final return to your accommodation. Make the return arrangements before drinking or entering a crowded venue.</li><li>Share your lodging address, itinerary and expected return time with someone you trust if that is useful to you. Agree how to get in touch if plans change so you have a backup when no travelling companion is available to help.</li><li>For evening routes and return planning, use the dedicated <a href="/destination/orlando/is-orlando-safe-at-night">night-safety guide</a>.</li></ul>
    </section>

    <section id="heat" className={styles.section} tabIndex={-1}><h2>Heat, sun and thunderstorms</h2>
      <h3>Plan cooling breaks before a long outing</h3>
      <p>Carry water, take breaks and plan access to shade or air conditioning; the <a href="https://www.cdc.gov/extreme-heat/about/">CDC recommends staying cool, staying hydrated and checking local HeatRisk when planning activity</a>. Outdoor queues, paved areas and humidity can make cooling breaks especially relevant during an Orlando park day. Follow <a href="https://wwwnc.cdc.gov/travel/page/travel-to-hot-climates">CDC travel guidance on fluids, sun protection, clothing and cooler activity times</a>; alternate outdoor activities with indoor shows, shops or meals where practical. Take breaks before anyone feels unwell.</p>
      <p>Do not dismiss dizziness, headache, weakness or nausea as simply part of a tiring day; these are among the symptoms described in the <a href="https://www.cdc.gov/extreme-heat/about/">CDC’s heat-health guidance</a>. Stop activity and seek a cooler place and appropriate help rather than trying to finish the itinerary. For suspected heat stroke or loss of consciousness, call 911. The <a href="https://wwwnc.cdc.gov/travel/page/travel-to-hot-climates">CDC’s heat-illness guidance</a> describes warning signs and identifies children, older adults and people with chronic conditions as more vulnerable.</p>
      <p>If your health or medication affects how you manage heat, discuss your plan with your clinician rather than changing medication yourself, as advised by the <a href="https://www.cdc.gov/extreme-heat/about/">CDC</a>. The <a href="https://www.cdc.gov/heat-health/hcp/clinical-guidance/heat-and-medications-guidance-for-clinicians.html">CDC’s heat-and-medications guidance</a> supports making a medication plan with your clinician. Plan cooling breaks throughout the day, including the return journey.</p>

      <h3>Know where you will shelter</h3>
      <p>If you hear thunder, move into a fully enclosed building or an enclosed hard-topped vehicle; do not rely on a tree, open-sided pavilion or covered patio as lightning shelter. <a href="https://www.weather.gov/mlb/lightning_rules">National Weather Service Melbourne advises staying sheltered for 30 minutes after the last thunder</a>. Leave pools and other bodies of water when lightning threatens. Identify substantial shelter before starting an outdoor activity rather than relying on a nearby covered seating area.</p>
      <p>Before an outdoor outing, identify an indoor alternative and follow venue staff instructions if activities are suspended. Keep the return journey flexible rather than waiting outdoors for conditions to improve. For a forecast tropical storm or hurricane, follow National Hurricane Center, National Weather Service and Orange County emergency information, check airline, hotel and attraction policies, and obey local shelter or evacuation instructions. Keep identification and essential supplies accessible. The <a href="https://oceanservice.noaa.gov/facts/hurricane.html">Atlantic hurricane season runs from June 1 through November 30</a>, although storms can occur outside those dates. Use <a href="https://www.weather.gov/safety/hurricane">National Weather Service hurricane guidance</a> and <a href="https://newsroom.ocfl.net/mobile-apps-alerts/ocfl-alert/">Orange County’s OCFL Alert information</a> for preparation and local updates.</p>
    </section>

    <section id="what-next" className={styles.section} tabIndex={-1}><span id="decision-tree" /><h2>If something feels off: what to do next</h2>
      <h3>Your booked ride does not match</h3>
      <p>Do not enter a vehicle that does not match your booking. Recheck the booking in the app, use the provider’s support process and ask venue staff for help locating the correct pickup point if needed. Step back into a staffed or well-lit public area while checking. If the driver or vehicle behaves suspiciously, cancel and arrange another ride; call 911 for an immediate threat.</p>

      <h3>Your belongings are missing</h3>
      <p>First check with the venue or transport provider’s official lost-property process. If you suspect theft, preserve relevant booking details and use the appropriate reporting route; <a href="https://www.ocso.com/911-or-non-emergency/">Orange County Sheriff’s Office distinguishes theft after the suspect has left from emergencies such as a crime in progress</a>. Keep the booking information and details of where and when you last had the item available for a report. OCSO’s <a href="https://www.ocso.com/tourist-safety/">tourist guidance</a> notes that it does not respond to lost items; use the agency’s published reporting process where appropriate.</p>
      <p>If payment cards or an account may be compromised, contact the issuer or provider through an independently verified support channel. Use contact information obtained separately from an unexpected message about the missing item or account.</p>

      <h3>Someone needs urgent help</h3>
      <p>Call 911 for a serious medical emergency, crime in progress or other life-threatening situation. Be ready to give the address, venue, nearby intersection or another precise description of where help is needed, following the <a href="https://www.ocso.com/911-or-non-emergency/">Sheriff’s guidance for emergency calls</a>. Call 911 instead of delaying while choosing a hospital from a travel guide; explain your location and follow the call handler’s instructions. For LGBTQ visitors who are victims of crime, participating locations in <a href="https://www.orlando.gov/Public-Safety/OPD/Community-Programs/LGBTQ-Safe-Place">OPD’s Safe Place program</a> agree to let victims remain while police are called. The program is an assistance option, not a safety rating for the surrounding area.</p>
    </section>

    <section id="emergency-resources" className={styles.section} tabIndex={-1}><h2>Emergency numbers and resources</h2>
      <p>Save your accommodation’s full address before your trip. When asking for help, identify your actual location rather than relying on “Orlando” as the address. Keep the location of your current outing available as well as your hotel address. A venue name, street address or nearby intersection helps explain where assistance is needed; the agency for a non-emergency may change during a day of sightseeing.</p>
      <ul>
        <li><strong>Emergency:</strong> Call <a href="tel:911">911</a> for immediate danger or a serious medical emergency, following <a href="https://www.ocso.com/911-or-non-emergency/">Orange County Sheriff’s emergency guidance</a>. The same guidance confirms Text-to-911 for people with hearing or speech impairments or who cannot safely speak; call if you can. Include your precise location and what help is needed in an emergency text.</li>
        <li><strong>Orlando Police Department, non-emergency:</strong> <a href="tel:+13212355300">321-235-5300</a>, as published on the <a href="https://www.orlando.gov/Our-Government/Departments-Offices/Orlando-Police-Department/Contact-Us">City of Orlando contact page</a>.</li>
        <li><strong>Orange County Sheriff’s Office, non-emergency:</strong> <a href="tel:+14078364357">407-836-4357</a>, as published in the <a href="https://www.ocso.com/911-or-non-emergency/">Sheriff’s non-emergency guidance</a>.</li>
      </ul>
      <p>The two non-emergency numbers are agency-specific contacts, not a complete list for every destination on your trip. For a non-emergency, confirm the relevant agency for your location; for an emergency, call 911 rather than delaying while you research boundaries. Theft discovered after the suspect has left or vandalism may belong on a non-emergency reporting route. An active crime, serious medical emergency or immediate danger calls for 911. Keep these contacts accessible outside a single phone or booking app. For a poisoning question or exposure, <a href="https://floridapoisoncontrol.org/contact/contact-us/">Florida’s Poison Control Centers</a> publish <a href="tel:+18002221222">1-800-222-1222</a>; immediate life-threatening emergencies still require 911. For traffic conditions, use <a href="https://fl511.com/faq">FL511</a> or dial 511. For Orange County government information, OCSO lists <a href="https://www.ocso.com/911-or-non-emergency/">311 as a government-services contact</a>; it does not replace emergency dispatch.</p>
    </section>

    <section id="faq" className={styles.section} tabIndex={-1}><h2>Frequently asked questions</h2>
      <h3>How should I assess safety for an Orlando trip?</h3><p>Start with your accommodation address and the journeys your itinerary requires. Check walking connections, parking or transport, outdoor-weather plans and how you will get help. Use local incident information with its date range and geographical coverage in mind, rather than relying on a single citywide safety label. Check that local data applies to the property's jurisdiction, distinguish calls for service from documented incidents, and assess the exact route and time of day you intend to use. Hotel access and parking arrangements matter alongside the surrounding area.</p>
      <h3>What should I check before booking accommodation?</h3><p>Ask the property to confirm parking terms, access arrangements and any transport your itinerary depends on. If a shuttle is important, ask for its destinations, reservation requirements and return arrangements. Save the answer with your booking confirmation. Independently search the street address and compare property details across sources, especially for vacation rentals. Obtain written cancellation terms and verify unusual payment requests directly through independently obtained contact details before sending a deposit.</p>
      <h3>What should I do with valuables while sightseeing?</h3><p>Carry only what you need, keep belongings attended and avoid leaving valuables visible in a parked vehicle. Make a plan for important documents and a backup way to access essential booking information. Secure the car every time you leave it and put purchases away before the next stop where practical. A separate payment method and a backup of essential documents can help if your main wallet or phone becomes unavailable.</p>
      <h3>Where can I find advice about Orlando after dark?</h3><p>For area-by-area evening planning, walking checks and return transport, read our <a href="/destination/orlando/is-orlando-safe-at-night">Orlando night-safety guide</a>. Confirm the venue, parking or designated pickup point and the final connection to your accommodation before leaving. Check whether an event changes street access and agree on a meeting point with companions.</p>
    </section>

    <section id="resources" className={styles.section} tabIndex={-1}><h2>More Orlando resources</h2><ul><li><a href="/destination/orlando/is-orlando-safe-at-night">Orlando at night: walking and return-trip advice</a> — use this dedicated guide for detailed evening routes and pickup planning.</li><li><a href="/destination/orlando/best-areas-to-stay">Best areas to stay in Orlando</a> — compare accommodation locations around the places you will visit most.</li><li><a href="/destination/orlando/getting-to-orlando">Getting to Orlando</a> — plan your arrival journey alongside the connection to your accommodation.</li><li><a href="/destination/orlando/neighborhood-guide">Orlando neighborhood guide</a> — use district context with the exact property and route checks in this safety guide.</li></ul></section>

    <section id="sources" className={styles.section} tabIndex={-1}><h2>About this guide and its sources</h2><p>This guide provides general trip-planning precautions, not a safety guarantee for a property, route or neighbourhood. Weather guidance comes from the CDC and National Weather Service; emergency contacts and incident-information resources come from the relevant local agencies. Verify changing booking, venue and transport arrangements with the provider for your travel dates. Use the linked primary resources for the question they actually cover: police data for incident context, local agencies for emergency reporting, transport providers for current arrangements and weather agencies for changing hazards. Additional citations link to FTC scam guidance, Florida statutes, OPD’s Safe Place program, Florida Poison Control and local alert resources. Safety conditions, service hours and regulations can change. The practical aim is to help you assess a specific hotel, route, time of day, transport method and weather condition for your own itinerary.</p></section>
  </article>
  </>;
}
