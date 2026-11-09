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
      <section id="essentials" className={styles.section} tabIndex={-1}>
        <span id="safety" />
        <span id="is-orlando-safe-2026" />
        <span id="quick-takeaways" />
        <h2>Orlando tourist safety: the essentials</h2>
        <p>
          Start with the places you will actually visit rather than searching for a single safety label for the whole trip. Build a plan for your accommodation, journeys, outdoor activities and essential belongings, then identify what you would do if transport, weather or a booking changes.
        </p>
        <p>
          The <a href="https://www.ocso.com/tourist-safety/">Orange County Sheriff’s visitor guidance</a> recommends planning airport-to-hotel transport, securing valuables, learning hotel emergency exits and verifying unexpected callers at your room before opening the door. These are useful starting points for an itinerary, not a guarantee about any individual property.
        </p>
        <h3>Before you leave home</h3>
        <ul>
          <li><strong>Save the essentials:</strong> Keep your hotel address, booking reference, arrival instructions and transport confirmation accessible offline as well as in email.</li>
          <li><strong>Plan the arrival:</strong> Decide how you will reach the accommodation if your flight is late or a booked transfer fails to arrive.</li>
          <li><strong>Read the conditions:</strong> Check deposits, cancellation deadlines, parking, included transport and ticket restrictions before paying.</li>
          <li><strong>Prepare a fallback:</strong> Choose an alternative journey and a way to contact your booking provider if your phone battery or connection becomes a problem.</li>
        </ul>
        <p>
          These are preparation steps; choose the options that match your party’s needs rather than assuming a hotel, app or transport provider will supply a backup.
        </p>
        <h3>When you reach the hotel</h3>
        <p>
          Find the emergency exits, use the room’s locks, and confirm an unexpected staff visit with reception before admitting the person, following the <a href="https://www.ocso.com/tourist-safety/">Sheriff’s hotel-safety advice</a>. The same guidance advises keeping valuables in a room or hotel safe rather than in the vehicle.
        </p>
        <p>
          If you are travelling with children, give them a way to identify the hotel and contact an adult, as recommended by the <a href="https://www.ocso.com/tourist-safety/">Sheriff’s visitor guidance</a>. As an additional planning step, agree on a meeting point for busy outings and identify staff members you would approach if separated.
        </p>
      </section>

      <section id="numbers" className={styles.section} tabIndex={-1}>
        <span id="crime-data-2026" />
        <h2>Understanding local safety information</h2>
        <p>
          Use local records to understand what a source actually measures, not to manufacture a “safe street” verdict. The <a href="https://www.orlando.gov/Public-Safety/OPD/OPD-Records-Open-Data">Orlando Police Department’s open-data page</a> offers active calls, a crime-and-cases dashboard and Citizen Connect information covering dispatched and officer-initiated calls.
        </p>
        <h3>Calls are not the same as confirmed crimes</h3>
        <p>
          The City’s <a href="https://www.orlando.gov/Our-Government/Mayor-City-Council/Tom-Keen/District-1-Crime-Stats">District 1 statistics explanation</a> distinguishes citizen calls from documented incidents and warns that several calls can concern the same incident. Do not interpret every map marker as a separate confirmed offence or compare a calls total with a crime total.
        </p>
        <p>
          Before drawing a conclusion, check:
        </p>
        <ul>
          <li><strong>Geography:</strong> Does the resource cover the property’s actual location?</li>
          <li><strong>Time period:</strong> Is it a recent period, an annual total or historical information?</li>
          <li><strong>Measure:</strong> Are you viewing calls, reports, recorded crimes or case outcomes?</li>
          <li><strong>Context:</strong> Are several entries associated with the same event or location?</li>
        </ul>
        <h3>Check which agency’s information you are using</h3>
        <p>
          OPD states that it holds records for incidents in the City of Orlando and directs readers seeking Orange County records to the Sheriff’s Office. A resource from one agency should therefore not be treated as a complete dataset for every place in an Orlando itinerary. (<a href="https://www.orlando.gov/Public-Safety/OPD/OPD-Records-Open-Data/Request-an-Orlando-Police-Department-Record">City of Orlando records guidance</a>)
        </p>
        <p>
          For a practical accommodation decision, combine appropriately scoped local information with the property’s entrance, transport, parking and access arrangements. A hotel address or citywide statistic alone is not a substitute for checking the journeys you will make.
        </p>
      </section>

      <section id="areas" className={styles.section} tabIndex={-1}>
        <span id="neighborhood-safety" />
        <h2>Orlando area safety: what to check</h2>
        <p>
          Compare these areas by the activities and transport your trip requires, not by unsupported “safe” and “unsafe” badges. The useful question is whether your chosen property and route work for you, including crossings, luggage, mobility needs and the return journey.
        </p>
        <div className={styles.areaBlock}>
          <h3>International Drive</h3>
          <p>
            For journeys within the International Drive area, the <a href="https://www.internationaldriveorlando.com/iride-trolley/i-ride-trolley-faqs.html">I-RIDE Trolley</a> is a local option: its operator describes a service confined to the I-Drive area, with marked stops and a route map. That is different from a transport service covering an entire Orlando holiday.
          </p>
          <p>
            Before booking, locate both the hotel and the stops you would use. Check the walk from the hotel entrance to the correct stop and the route at your destination; do not equate being on International Drive with being next door to every attraction.
          </p>
          <p>
            I-RIDE’s <a href="https://www.internationaldriveorlando.com/iride-trolley/i-ride-trolley-faqs.html">FAQ</a> says cash fares require exact change, passes are not sold on board, and luggage is accepted only as space permits, with no dedicated storage rack. Those details matter if you intend to use it with bags rather than simply for sightseeing.
          </p>
          <p>
            For hotel-specific precautions, the <a href="https://www.internationaldriveorlando.com/visitor-information/safety-tips/">I-Drive district’s visitor advice</a> recommends securing room doors, verifying unexpected service visits and keeping valuables out of cars. Apply those checks to the actual property rather than treating the corridor’s reputation as a security guarantee.
          </p>
        </div>
        <h3>Disney Springs and Lake Buena Vista</h3>
        <p>
          Distinguish being near Disney Springs from having a confirmed journey to each Disney park or your hotel. Disney’s <a href="https://disneyworld.disney.go.com/guest-services/bus-transportation/">bus-service information</a> explains that some journeys require connections and recommends checking transportation signs or asking a Cast Member for current routes.
        </p>
        <p>
          For buses from Disney Springs to Disney Resort hotels, the specific <a href="https://disneyworld.disney.go.com/guest-services/bus-transportation/">bus-service page</a> sets out eligibility for Resort guests and visitors with qualifying dining or experience reservations, and notes that proof may be requested. Do not build an off-site hotel plan on an assumed unrestricted resort-bus connection.
        </p>
        <p>
          Ask your own accommodation to name the destinations its transport serves, the pickup location, any reservation requirement and the return arrangements. If the answer is simply “Disney shuttle,” request the actual destination and timetable before relying on it.
        </p>
        <h3>Universal area</h3>
        <p>
          Match your hotel to the particular Universal destinations on your itinerary. Universal’s <a href="https://www.universalorlando.com/web/en/us/places-to-stay/hotels/at-a-glance/hotels-benefits">hotel-benefits page</a> describes complimentary transport but states that water taxis and walking paths are available only at select hotels.
        </p>
        <p>
          The same <a href="https://www.universalorlando.com/web/en/us/places-to-stay/hotels/at-a-glance/hotels-benefits">official comparison</a> identifies specific Epic Universe access arrangements, including a walking path from Stella Nova and a dedicated entrance for Helios Grand guests, subject to valid admission. Do not assume the transport or walking access shown for one hotel applies to every Universal property.
        </p>
        <p>
          Before booking, compare your hotel’s actual arrangements for CityWalk, the parks you will visit and airport transport. Ask separately about accessibility, luggage and return options rather than treating “complimentary transport” as one uniform service.
        </p>
        <h3>Downtown Orlando and Lake Eola</h3>
        <p>
          Plan around the exact venue, parking facility and connecting route. The City’s <a href="https://www.orlando.gov/Parking-Transportation/Parking/Downtown-Guide">Downtown Parking Guide</a> identifies parking by destination, including Central Boulevard options for Lake Eola, and warns that event and construction needs can change road access.
        </p>
        <p>
          For local connections, <a href="https://www.golynx.com/plan-trip/riding-lynx/lymmo.stml">LYNX describes LYMMO</a> as a fare-free downtown circulator, with different routes and operating patterns. Check the line serving your actual stops; it is not a substitute for planning the rest of a journey from a hotel elsewhere.
        </p>
        <p>
          Save the garage entrance and the route back to the vehicle, not just the venue’s map pin. For detailed evening routes and pickup planning, continue to the <a href="/destination/orlando/is-orlando-safe-at-night">Orlando night-safety guide</a>.
        </p>
        <h3>Kissimmee and US-192</h3>
        <p>
          Check your property’s position on the corridor and the stops or road crossings you would need. LYNX publishes separate services for <a href="https://www.golynx.com/maps-schedules/routes-detail.stml?portalProcess_dd_0_1_1=showPublicPosting&amp;calendar_entry_id=9314">Link 55: West US-192/Four Corners</a> and <a href="https://www.golynx.com/maps-schedules/routes-detail.stml?portalProcess_dd_0_1_1=showPublicPosting&amp;calendar_entry_id=9315">Link 56: West US-192/Magic Kingdom</a>, so the route number and direction matter.
        </p>
        <p>
          Both operator pages warn that precise service times depend on where you board. Use the current route map and trip planner for the hotel’s actual stop rather than copying a route-end departure time into your plan. (<a href="https://www.golynx.com/maps-schedules/routes-detail.stml?portalProcess_dd_0_1_1=showPublicPosting&amp;calendar_entry_id=9314">LYNX Link 55</a>; <a href="https://www.golynx.com/maps-schedules/routes-detail.stml?portalProcess_dd_0_1_1=showPublicPosting&amp;calendar_entry_id=9315">LYNX Link 56</a>)
        </p>
        <p>
          If you are using a hotel shuttle instead, confirm its pickup, destination, booking requirements and final return. Compare those arrangements with your park booking before committing to the accommodation.
        </p>
      </section>

      <div id="stay" aria-label="Hotel options" tabIndex={-1}>
        <CitySafetyHotelCTA city="orlando" title="Stay near the places you plan to visit" intro="Compare accommodation by the journeys it removes and the arrangements it provides, not by a safety promise. For your busiest day, map the hotel entrance, attraction or venue entrance, transport stop and return route before comparing the total cost." choices={orlandoRecommendedHotelAreas} source="safety-guide" trackingId="recommended-orlando-hotel-areas" buttonVariant="orlandoSafetyGuide" />
        <ul>
          <li><strong>Location:</strong> Does the property fit your main activities without an uncertain walking connection?</li>
          <li><strong>Transport:</strong> Which destinations are served, and what happens if you miss the return?</li>
          <li><strong>Parking:</strong> What are the charges, access arrangements and re-entry conditions?</li>
          <li><strong>Arrival:</strong> How will you check in if delayed, and who can resolve an access problem?</li>
          <li><strong>Access needs:</strong> Can the property confirm the room and transport arrangements you require?</li>
        </ul>
        <p>
          A useful booking question is: “For these dates and destinations, what transport is included, where do I board, and do I need to reserve?” Save the answer with your confirmation.
        </p>
      </div>

      <section id="evening" className={styles.section} tabIndex={-1}>
        <h2>Planning an evening in Orlando</h2>
        <p>
          Plan the return at the same time as the outing: identify the exit you will use, your pickup or transport stop, and a fallback if the original plan changes. Keep the venue and accommodation addresses available without having to search through several apps.
        </p>
        <p>
          For area-by-area after-dark advice, walking checks and evening pickup planning, read <a href="/destination/orlando/is-orlando-safe-at-night">Is Orlando Safe at Night?</a>. This general guide focuses on the rest of your trip rather than repeating that article.
        </p>
      </section>

      <section id="getting-around" className={styles.section} tabIndex={-1}>
        <h2>Getting around Orlando safely</h2>
        <h3>Start with the airport-to-hotel journey</h3>
        <p>
          Orlando International Airport’s <a href="https://flymco.com/ground-transportation/local-bus/">local-bus information</a> identifies LYNX services and directs passengers to route maps and schedules for destinations including Downtown, the convention area and SeaWorld. Confirm the complete journey, including any transfer and the walk from the final stop, before choosing it for an arrival with luggage.
        </p>
        <p>
          For any booked transfer, keep the operator’s name, pickup instructions, contact method and booking reference together. If the pickup arrangement is unclear, use the provider’s official contact details rather than accepting a replacement offered by an unidentified person.
        </p>
        <h3>Choose one rental-car toll arrangement</h3>
        <p>
          SunPass’s <a href="https://www.sunpass.com/en/tolls/rentalVehicles.shtml">rental-vehicle guidance</a> explains that rental-company programmes and fees vary and that cashless toll use can result in tolls plus service or administrative charges under the rental agreement. Decide how you will pay before driving, not after the first bill.
        </p>
        <p>
          <a href="https://www.visitortollpass.com/faq">Visitor Toll Pass</a> is an option for eligible rental customers making a round trip through MCO, subject to participating-company and pickup/return restrictions. Its FAQ warns users to decline the rental company’s toll programme to avoid double billing.
        </p>
        <p>
          If using that service, follow the operator’s <a href="https://www.visitortollpass.com/faq">setup and return instructions</a>: register the rental plate, display the hangtag and return it when the trip ends. The programme has return conditions and an unreturned-pass charge, so “no service fee” does not mean there are no responsibilities or possible charges.
        </p>
        <p>
          If using your own SunPass account, add the rental plate and rental dates and remove your transponder when returning the vehicle, following <a href="https://www.sunpass.com/en/tolls/rentalVehicles.shtml">SunPass’s instructions</a>. Keep the rental agreement and toll records for checking later charges.
        </p>
        <h3>Parking and belongings</h3>
        <p>
          Lock the car, take valuables to your accommodation and avoid leaving items on display, as advised by the <a href="https://www.ocso.com/tourist-safety/">Orange County Sheriff</a>. Do not leave essential travel documents in the vehicle as your only accessible copy.
        </p>
        <p>
          Before leaving a garage, save its name, level, bay or nearby marker and check how to re-enter. For downtown events, consult the City’s <a href="https://www.orlando.gov/Parking-Transportation/Parking/Downtown-Guide">destination-based parking guidance</a> rather than assuming the entrance closest to a venue will remain accessible.
        </p>
        <h3>Walking, buses and accessibility</h3>
        <p>
          Trace walking routes entrance to entrance, looking for sidewalks, crossings and the final approach to the property. A short map distance is not enough to establish that a route works with children, luggage or a mobility device.
        </p>
        <p>
          I-RIDE states that its vehicles have accessible lifts and two wheelchair positions, with weight limitations. If those facilities matter to your trip, review the operator’s <a href="https://www.internationaldriveorlando.com/iride-trolley/i-ride-trolley-faqs.html">accessibility information in its FAQ</a> and confirm your needs before relying on a connection.
        </p>
        <h3>Verify an app-booked ride</h3>
        <p>
          Before boarding an Uber, match the registration plate, vehicle make/model and driver photo with the app; Uber also advises requesting the ride while inside and sharing trip status with someone you trust. (<a href="https://www.uber.com/us/en/ride/safety/tips/">Uber rider-safety guidance</a>)
        </p>
        <p>
          Use equivalent checks for the service you choose and follow its official support process if details do not match. These precautions do not establish that one rideshare brand is the safest.
        </p>
      </section>

      <section id="scams" className={styles.section} tabIndex={-1}>
        <span id="common-scams-2026" />
        <h2>Common Orlando scams and booking precautions</h2>
        <h3>Buy valid tickets, not someone else’s unused days</h3>
        <p>
          The <a href="https://www.ocso.com/tourist-safety/">Orange County Sheriff</a> recommends buying theme-park tickets from the park itself or an authorized vendor. Disney specifically states that once a person uses a ticket, its remaining admissions cannot be transferred to another person. (<a href="https://disneyworld.disney.go.com/faq/tickets/transfer-policy/">Disney ticket-transfer FAQ</a>)
        </p>
        <p>
          Do not buy a stranger’s “remaining days” on a used Disney ticket. Before buying any ticket, establish the seller, supplier, valid dates, included parks and restrictions rather than judging validity by the displayed discount.
        </p>
        <p>
          A discount is not automatically a warning sign: <a href="https://www.visitorlando.com/blog/post/orlando-frequently-asked-questions-blog/">Visit Orlando identifies its BestofOrlando.com ticket channel as an authorized reseller</a>. Verify the actual seller’s status instead of assuming every third-party offer is either genuine or fraudulent.
        </p>
        <h3>Verify accommodation and payment requests</h3>
        <p>
          The Florida Attorney General’s <a href="https://www.myfloridalegal.com/newsrelease/video-summer-scams-series-sunny-days-and-shady-deals-ag-moody-warns-floridians-about-0">vacation-rental alert</a> warns about fake listings and recommends checking the address and reviews, keeping communications on the rental platform, and avoiding direct payments by wire transfer, gift card or cryptocurrency.
        </p>
        <p>
          Before paying, read the cancellation policy, deposit, final amount and access instructions. If a message suddenly changes the payment method or bank details, pause and contact the provider using details you obtained independently.
        </p>
        <h3>Be cautious with unexpected hotel-room approaches</h3>
        <p>
          The <a href="https://www.ocso.com/tourist-safety/">Sheriff’s visitor advice</a> specifically discusses unsolicited food flyers left at hotel doors and recommends checking their legitimacy with reception before placing an order that requires payment details. Do not assume a flyer came from the hotel because it was delivered to your room.
        </p>
        <p>
          The same <a href="https://www.ocso.com/tourist-safety/">guidance</a> recommends verifying unexpected people claiming to be hotel employees with the front desk. Use the property’s known contact method rather than a number the visitor supplies.
        </p>
        <h3>Read promotional conditions before accepting</h3>
        <p>
          For a discounted stay or ticket linked to a presentation, appointment or eligibility requirement, ask for the commitment and full cost in writing. Treat a countdown or insistence on immediate payment as a reason to slow down, not skip verification.
        </p>
        <p>
          For an aggressive timeshare pitch, the <a href="https://www.myfloridalegal.com/consumer-protection/how-to-protect-yourself-timeshare-sales-resales">Florida Attorney General advises leaving if pressured, understanding the contract and checking applicable cancellation rights</a>. Do not assume every promotion is a scam or that every travel purchase has the same cancellation period.
        </p>
      </section>

      <section id="solo" className={styles.section} tabIndex={-1}>
        <span id="solo-traveler-essentials" />
        <h2>Solo traveler essentials</h2>
        <h3>Make the trip manageable without a second person’s phone</h3>
        <p>
          Keep your hotel address, booking contacts and a backup way to access essential information. As a planning precaution, choose a check-in arrangement with someone you trust and agree what they should do if you miss it.
        </p>
        <p>
          For rides, use the provider’s identity checks and trip-sharing tools; <a href="https://www.uber.com/us/en/ride/safety/tips/">Uber’s guidance</a> describes sharing the driver, vehicle and location details through the app. Send useful trip information rather than assuming someone will know where you are.
        </p>
        <h3>Use the hotel as a point of support</h3>
        <p>
          On arrival, learn how to contact reception and what to do if you cannot get into your room. If someone unexpectedly requests access, verify the visit with the front desk; the <a href="https://www.ocso.com/tourist-safety/">Sheriff’s hotel advice</a> also recommends learning exits and using the room’s security devices.
        </p>
        <p>
          Keep a backup payment method separate from the one you carry, if practical, and avoid relying on one device for tickets, maps, payment and emergency contact access. Make sure your fallback remains usable if your main phone or wallet is missing.
        </p>
        <h3>Plan around your own access and health needs</h3>
        <p>
          Ask a property or transport provider for specific arrangements rather than a general “accessible” label. For example, clarify the room access you need, whether your mobility device fits the relevant vehicle and how you will handle a disrupted connection.
        </p>
        <p>
          If heat affects your health or medication, make a plan with your clinician before travelling; the <a href="https://www.cdc.gov/heat-health/about/index.html">CDC advises not stopping or changing medication without medical advice</a>. For evening-specific preparation, use the <a href="/destination/orlando/is-orlando-safe-at-night">night-safety guide</a>.
        </p>
      </section>

      <section id="heat" className={styles.section} tabIndex={-1}>
        <h2>Heat, sun and thunderstorms</h2>
        <h3>Build cooling into the itinerary</h3>
        <p>
          The <a href="https://www.cdc.gov/heat-health/about/index.html">CDC recommends carrying water, staying hydrated, taking breaks, seeking shade or air conditioning and checking local HeatRisk</a>. Use the forecast for the place you will visit rather than assuming a day that begins comfortably will stay that way.
        </p>
        <p>
          As a planning step, identify an indoor break before a long outing and allow yourself to shorten the activity. Carry what you need for the journey back as well as the attraction; do not use a non-refundable booking as a reason to ignore illness.
        </p>
        <h3>Recognize when heat needs medical attention</h3>
        <p>
          Headache, dizziness, nausea, weakness and heavy sweating are among the warning signs described in the <a href="https://www.cdc.gov/heat-health/about/index.html">CDC’s heat guidance</a>. Stop the activity, seek a cooler place and get appropriate medical help rather than treating symptoms as something to push through.
        </p>
        <p>
          Confusion, slurred speech, seizures or loss of consciousness can indicate heatstroke, which requires an emergency response; call 911 and follow dispatcher instructions while helping the person cool if it is safe to do so. (<a href="https://www.cdc.gov/niosh/heat-stress/about/illnesses.html">CDC heat-illness guidance</a>)
        </p>
        <p>
          This is general recognition guidance, not a diagnosis or individualized treatment plan. Do not wait for every listed symptom before seeking urgent help.
        </p>
        <h3>Thunder means shelter, not just rain cover</h3>
        <p>
          The <a href="https://www.weather.gov/mlb/lightning_rules">National Weather Service in Melbourne</a> advises going indoors when thunder is heard and waiting 30 minutes after the last thunder before returning outside. A completely enclosed building or appropriate hard-topped enclosed vehicle is shelter; an open pavilion, covered patio or tree is not, according to the same <a href="https://www.weather.gov/mlb/lightning_rules">NWS rules</a>.
        </p>
        <p>
          Identify shelter before a pool visit or outdoor outing and follow venue instructions if activities stop. The <a href="https://www.weather.gov/mlb/lightning_rules">NWS</a> also advises getting out of pools and other water during lightning.
        </p>
        <h3>Check storm information for your travel dates</h3>
        <p>
          Orange County’s <a href="https://www.ocfl.net/EmergencySafety/EmergencyInformation.aspx">emergency-information page</a> identifies the Atlantic hurricane season as June 1–November 30 and links to weather and preparedness resources. Those dates describe the season, not a prediction that a particular trip will be disrupted.
        </p>
        <p>
          If severe weather threatens your plans, check official instructions, ask the property about its procedures and review transport and cancellation arrangements. Orange County offers <a href="https://www.ocfl.net/EmergencySafety/EmergencyInformation.aspx">OCAlert notifications</a> for severe weather and other emergencies; use information relevant to your accommodation’s actual location.
        </p>
        <h3>Pool breaks still require supervision</h3>
        <p>
          The <a href="https://www.cdc.gov/drowning/prevention/index.html">CDC recommends close, constant adult supervision of children around water, including when lifeguards are present</a>. Agree explicitly who is supervising instead of assuming another adult has taken over.
        </p>
        <p>
          After swimming, secure doors or other access to water, and do not rely on inflatable toys as safety equipment, following the <a href="https://www.cdc.gov/drowning/prevention/index.html">CDC’s drowning-prevention guidance</a>. For a rental with a pool, ask about barriers and access arrangements before booking.
        </p>
      </section>

      <section id="what-next" className={styles.section} tabIndex={-1}>
        <span id="decision-tree" />
        <h2>If something feels off: what to do next</h2>
        <h3>A booked ride does not match</h3>
        <p>
          Do not enter a vehicle if its details or driver do not match the booking; <a href="https://www.uber.com/us/en/ride/safety/tips/">Uber’s safety advice</a> instructs passengers to check the plate, vehicle and driver before boarding. Use the provider’s official support process and ask venue staff to help identify the correct pickup area if needed.
        </p>
        <p>
          Avoid accepting an unverified substitute simply because you are worried about missing the ride. Immediate threats belong with emergency services, not just a booking-support queue.
        </p>
        <h3>A wallet, phone or bag goes missing</h3>
        <p>
          Start with the venue or transport provider’s lost-property process. If theft is suspected, record when and where you last had the item, what is missing and any identifying details you have.
        </p>
        <p>
          OPD’s <a href="https://www.orlando.gov/Public-Safety/OPD/Report-a-Crime/Report-a-Non-Violent-Crime">non-violent reporting page</a> lists lost property, theft and vehicle break-ins among reportable categories, but sets eligibility conditions including an incident within city limits, no known suspect and no firearm among the missing items. Follow the relevant agency’s instructions rather than assuming the same online form covers every location or incident.
        </p>
        <p>
          Separately, contact card issuers or account providers through verified channels if access may be compromised. Keep any report or booking reference for follow-up, and obtain current airline or identity-document guidance directly from the responsible organization if documents are missing.
        </p>
        <h3>A room or payment request seems wrong</h3>
        <p>
          Pause further payment and verify the reservation through the original booking channel. Preserve confirmations, the listing, payment records and messages before making changes to the booking.
        </p>
        <p>
          The Florida Attorney General’s <a href="https://www.myfloridalegal.com/newsrelease/video-summer-scams-series-sunny-days-and-shady-deals-ag-moody-warns-floridians-about-0">rental-scam guidance</a> recommends keeping communications on the platform and provides a complaint route for suspected scams. A complaint is not a guarantee of immediate replacement accommodation or a refund.
        </p>
        <h3>Someone needs urgent help</h3>
        <p>
          For serious medical situations, a crime in progress, an injury crash or another life-threatening situation, call 911, following <a href="https://www.ocso.com/911-or-non-emergency/">Orange County Sheriff’s emergency guidance</a>. Give the address, business or intersection and, inside a large property, the building, floor or room details requested by the dispatcher.
        </p>
        <p>
          If a call is not answered immediately, stay on the line rather than hanging up and redialling, as the <a href="https://www.ocso.com/911-or-non-emergency/">Sheriff’s guidance</a> instructs. Follow the dispatcher’s directions and do not delay an emergency call while trying to determine agency boundaries.
        </p>
      </section>

      <section id="emergency-resources" className={styles.section} tabIndex={-1}>
        <h2 id="emergency-resources-heading">Emergency numbers and resources</h2>
        <p>
          Save your accommodation’s full address and an offline copy of important contacts. The distinction below is between immediate danger, agency-specific non-emergency help and specialist advice; it is not a complete jurisdiction map.
        </p>
        <div className={styles.emergencyTableScroll} role="region" aria-labelledby="emergency-resources-heading" tabIndex={0}>
          <table className={styles.emergencyTable}>
            <thead>
              <tr>
                <th scope="col">Need</th>
                <th scope="col">Contact</th>
                <th scope="col">How to use it</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Immediate danger, serious medical emergency or crime in progress</th>
                <td><a href="tel:911">911</a></td>
                <td>Call for an emergency response and be ready to give a precise location. (<a href="https://www.ocso.com/911-or-non-emergency/">Orange County Sheriff</a>)</td>
              </tr>
              <tr>
                <th scope="row">Orlando Police non-emergency dispatch</th>
                <td><a href="tel:+13212355300">321-235-5300</a></td>
                <td>OPD identifies this as its 24-hour non-emergency line. (<a href="https://www.orlando.gov/Public-Safety/OPD/Report-a-Crime/Report-a-Non-Violent-Crime">City of Orlando</a>)</td>
              </tr>
              <tr>
                <th scope="row">Orange County Sheriff non-emergency</th>
                <td><a href="tel:+14078364357">407-836-4357</a></td>
                <td>For the agency’s routine calls, including after-the-fact theft where the suspect is gone. (<a href="https://www.ocso.com/911-or-non-emergency/">Sheriff’s guidance</a>)</td>
              </tr>
              <tr>
                <th scope="row">Possible poisoning</th>
                <td><a href="tel:+18002221222">1-800-222-1222</a></td>
                <td>Connects to Poison Help; do not wait for symptoms before seeking expert advice. (<a href="https://poisonhelp.hrsa.gov/what-you-can-do">HRSA Poison Help</a>)</td>
              </tr>
              <tr>
                <th scope="row">Severe-weather information</th>
                <td><a href="https://www.ocfl.net/EmergencySafety/EmergencyInformation.aspx">Orange County emergency information</a></td>
                <td>Official alert and preparedness resources, not a substitute for 911.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Poison Help says to call 911 if the person is not breathing; do not use a non-emergency number when immediate medical assistance is required. (<a href="https://poisonhelp.hrsa.gov/what-you-can-do">HRSA Poison Help</a>)
        </p>
        <p>
          For reports, use the agency responsible for the incident’s location. OPD’s <a href="https://www.orlando.gov/Public-Safety/OPD/Report-a-Crime/Report-a-Non-Violent-Crime">online reporting page</a> sets out eligibility and explains that a tracking number is issued on submission, while a case number follows review and approval.
        </p>
      </section>

      <section id="faq" className={styles.section} tabIndex={-1}>
        <h2>Frequently asked questions</h2>
        <h3>Is Orlando safe for tourists?</h3>
        <p>
          Do not treat a single citywide label as a property or route assessment. The <a href="https://www.ocso.com/tourist-safety/">Orange County Sheriff’s tourist guidance</a> provides practical precautions for travel, hotel rooms, cars and ticket purchases, but that is not an individual security audit of your itinerary.
        </p>
        <p>
          For your trip, make the accommodation and transport checks in this guide, use appropriately scoped local information and plan for weather and help. Assess the actual property and journeys you are considering rather than relying on a citywide label.
        </p>
        <h3>Which Orlando area should I choose for my hotel?</h3>
        <p>
          Start with the attractions or venues you will use most and compare the full journey from each property. Check the actual service rather than an area label: <a href="https://www.internationaldriveorlando.com/iride-trolley/i-ride-trolley-faqs.html">I-RIDE serves the International Drive area</a>, while <a href="https://www.universalorlando.com/web/en/us/places-to-stay/hotels/at-a-glance/hotels-benefits">Universal’s walking and water-taxi access varies by hotel</a>.
        </p>
        <p>
          Read the area section above and ask the property to confirm the arrangements your itinerary requires. Do not choose a hotel solely because a listing calls its neighbourhood “safe.”
        </p>
        <h3>Can I visit Orlando without renting a car?</h3>
        <p>
          Plan the complete itinerary before deciding: airport transfer, daily activities, meal stops and return journeys. Official options include <a href="https://flymco.com/ground-transportation/local-bus/">LYNX services at MCO</a>, the <a href="https://www.internationaldriveorlando.com/iride-trolley/i-ride-trolley-faqs.html">I-RIDE service within its corridor</a> and <a href="https://www.golynx.com/plan-trip/riding-lynx/lymmo.stml">LYMMO downtown</a>, but they are not interchangeable networks covering every hotel and attraction.
        </p>
        <p>
          Compare the connections and walking involved with your party’s needs. A hotel shuttle only solves the journeys it actually serves.
        </p>
        <h3>How do I avoid unexpected rental-car toll charges?</h3>
        <p>
          Select a payment arrangement before driving and read the rental agreement’s fee rules. <a href="https://www.sunpass.com/en/tolls/rentalVehicles.shtml">SunPass</a> warns that rental toll programmes can add service or administrative fees; eligible <a href="https://www.visitortollpass.com/faq">Visitor Toll Pass</a> users must follow its setup, competing-programme and return instructions.
        </p>
        <p>
          Keep your records until later toll charges have been checked. Do not assume another person’s rental-company fee arrangement applies to yours.
        </p>
        <h3>Are discounted theme-park tickets legitimate?</h3>
        <p>
          Some are: <a href="https://www.visitorlando.com/blog/post/orlando-frequently-asked-questions-blog/">Visit Orlando’s ticket FAQ</a> identifies its sales channel as an authorized reseller. The issue is verifying the actual seller and ticket conditions, not treating every discount as suspicious.
        </p>
        <p>
          Do not purchase a used Disney ticket for its “remaining days,” because <a href="https://disneyworld.disney.go.com/faq/tickets/transfer-policy/">Disney says admissions after first use stay with the original user</a>.
        </p>
        <h3>What should I do with valuables while sightseeing?</h3>
        <p>
          Take essential items with you and use appropriate secure storage for what you leave at the hotel. The <a href="https://www.ocso.com/tourist-safety/">Sheriff’s visitor guidance</a> recommends not leaving valuables in vehicles and securing hotel-room access.
        </p>
        <p>
          Keep a backup way to retrieve booking and contact information so losing one bag or phone does not remove every way to continue the trip.
        </p>
        <h3>What should I do when I hear thunder?</h3>
        <p>
          Go to an enclosed building or suitable hard-topped enclosed vehicle, not a tree or open-sided shelter. The <a href="https://www.weather.gov/mlb/lightning_rules">National Weather Service</a> advises staying sheltered until 30 minutes after the last thunder.
        </p>
        <p>
          Follow venue instructions, including leaving water when directed. Do not assume a pause in rain means the lightning risk has ended.
        </p>
        <h3>Where can I find advice about Orlando after dark?</h3>
        <p>
          Use the <a href="/destination/orlando/is-orlando-safe-at-night">Orlando night-safety guide</a> for evening destinations, walking checks, pickup points and return planning. This general guide keeps its focus on accommodation, travel, booking precautions, weather and help.
        </p>
      </section>

      <section id="resources" className={styles.section} tabIndex={-1}>
        <h2>More Orlando resources</h2>
        <p>
          Choose the next guide based on the decision you need to make:
        </p>
        <ul>
          <li><strong>After-dark planning:</strong> <a href="/destination/orlando/is-orlando-safe-at-night">Orlando night-safety guide</a> for evening routes and return arrangements.</li>
          <li><strong>Accommodation:</strong> <a href="/destination/orlando/best-areas-to-stay">Best areas to stay in Orlando</a> to compare locations around your itinerary.</li>
          <li><strong>Local orientation:</strong> <a href="/destination/orlando/neighborhood-guide">Orlando neighbourhood guide</a> for planning the areas you will visit.</li>
          <li><strong>Solo preparation:</strong> <a href="/destination/orlando/solo-trip-to-orlando">Orlando solo-travel guide</a> for organizing an independent trip.</li>
        </ul>
        <p>
          Use the official operator and agency links within this article for changing schedules, eligibility and reporting rules. A related travel article does not replace current instructions from the service you will use.
        </p>
      </section>

      <section id="sources" className={styles.section} tabIndex={-1}>
        <h2>About this guide and its sources</h2>
        <p>
          This guide combines practical trip-planning recommendations with linked first-party information. It does not provide a hotel security inspection, a neighbourhood crime ranking, individualized medical advice or a guarantee of safety.
        </p>
        <p>
          Local safety and reporting information is drawn from the <a href="https://www.ocso.com/tourist-safety/">Orange County Sheriff</a> and <a href="https://www.orlando.gov/Public-Safety/OPD/OPD-Records-Open-Data">City of Orlando</a>; transport details come from the operators linked beside the relevant statements. Weather and health guidance comes from the <a href="https://www.weather.gov/mlb/lightning_rules">National Weather Service</a>, <a href="https://www.cdc.gov/heat-health/about/index.html">CDC</a> and other public agencies cited above.
        </p>
        <p>
          Service arrangements and policies can change. Recheck the operator’s instructions for your travel dates, and use the actual location of your hotel or incident when choosing local information and reporting channels.
        </p>
      </section>
    </article>
  </>;
}
