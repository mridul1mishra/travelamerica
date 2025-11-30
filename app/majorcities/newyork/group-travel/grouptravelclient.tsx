"use client";
import Header from "../../../components/Header/header";
import Link from 'next/link';
import Image from 'next/image';
import Footer from "@/app/components/Header/Footer/footer";
import styles from '../group-travel/grouptravel.module.css';

export default function GroupTravelPage() {
return (
    <>
        <Header image={`/data/majorcities/newyork/assets/group/nyc-group-travel-packing-flatlay-essentials.jpg`} bannerText="Flatlay of NYC group travel essentials including backpack, metro card, sneakers, and city map" />
        <section className={styles.splitSection} style={{ textAlign: "center" }}>
                <div style={{ width: "100%", textAlign: "center" }}>
                <h1  className={styles.sectionheading}>Group Travel in NYC!</h1>
                <p>Safe Itinerary, Packing Tips and Best Landmarks — Imagine stepping off the subway alone at midnight, with Broadway lights guiding your way. NYC offers solo travelers both excitement and safety — if you know where to go.</p>
                </div>
        </section> 
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
          <Link href="/majorcities/newyork/group-itinerary" className={styles.ctaButton}>
            Group Travel 3 Day Itinerary for NYC
          </Link>
        </div>
        </section>
        <section className={`${styles.splitSection} ${styles.mobileImageFirst}`}>        
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>NYC Group Travel Packing Playbook</h2>
          <p className={styles.subheading}><strong>🧼 Pack Essential</strong>Group travelers in NYC walk 5–7 miles daily, so pack comfortable shoes, portable chargers, and reusable water bottles. Add anti‑theft neck wallets, weather‑ready layers, and hand sanitizer to stay secure, connected, and healthy. These essentials ensure safer, smoother, and more coordinated city exploration.</p>
          <p className={styles.subheading}><strong>🧥 Pack Comfort</strong>Group travelers in NYC gain extra comfort from reflective wristbands for easy regrouping, compact flashlights for safer night walks, offline maps for stress‑free navigation, foldable seating mats for outdoor breaks, and spray sunscreen for shared protection, with backups like jackets or hotel cards.</p>
          <p className={styles.subheading}><strong>🎒 Pack Smart</strong>Bluetooth item trackers for bags, offline compass plus waypoint app for orientation, NFC contact tags or QR regroup cards for quick reconnection, shared multi‑port charging cable, and pen‑notebook for addresses, reducing loss, disorientation, and coordination friction.</p>
          <Link href="/majorcities/newyork/group-dining" className={styles.ctaButton}>
            See our full guide to food halls and bagel stops.
          </Link>
        </div>
        <div className={styles.imageWrappermid}>
          <Image
            src="/data/majorcities/newyork/assets/group/nyc-group-travel-gear-guide-essentials-comfort-smart.png"
            alt="Three-part illustration showing NYC solo travel packing tips: essentials like sanitizer and charger, comfort items like layered outfits and umbrella, and smart gear like snacks, journal, and navigation tools."
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
          <Link href="/majorcities/newyork/group-landmarks" className={styles.ctaButton}>
            Best Neighborhoods for Solo Travelers in New York
          </Link>
        </div>
        
        </section>
        <Footer />
    </>
    );
}