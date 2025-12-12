import styles from './nycsafetysolotravelersactionguide.module.css';
import Header from "../../../components/Header/header";
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/app/components/Header/Footer/footer';

export default async function nycsafetysolotravelersactionguide () {
    return(
        <>
        <Header image={`/data/majorcities/newyork/assets/nyc-solo-travel-safety-guide-banner-new.png`} bannerText="NYC solo travel safety guide — neighborhood tips, subway awareness, exits, and time cues" />
        <section className={styles.splitSection} style={{  textAlign: "center" }}>
                <div style={{ width: "100%", textAlign: "center" }}>
                <h1  className={styles.sectionheading}>Is NYC Safe for Solo Travelers?</h1>
                <p className={styles.subheading}>From bustling neighborhoods to midnight subway rides, from rooftop nights to hidden corners—Your Solo Traveler’s Compass unfolds NYC’s safety story like a citywide screenplay, giving you the confidence to explore every scene on your own terms.</p>
                </div>
        </section>  
        <section className={styles.splitSection}>
            <div className={styles.imageWrappermap}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.35377328206!2d-74.05163296700816!3d40.75903219670779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1765129234147!5m2!1sen!2sus"
                    
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className={styles.textWrapper}>
            <h2 className={styles.heading}>🏘 Neighborhood Safety</h2>
            <ul className={styles.itineraryList}>
                <li className={styles.subheading}>🔍 Know the area: Research crime maps, local forums, and community alerts before arrival.</li>
                <li className={styles.subheading}>🚦 Stay visible: Stick to well‑lit streets and avoid isolated shortcuts.</li>
                <li className={styles.subheading}>👥 Blend in: Avoid drawing unnecessary attention; observe local customs and dress codes.</li>
                <li className={styles.subheading}>📱 Stay connected: Share your live location with trusted contacts.</li>
            </ul>
                <Link href="/majorcities/newyork/landmark" className={styles.ctaButton}>
                Safest Neighborhoods in NYC for Solo Travel
            </Link>
            </div>
        </section>
        <section className={styles.splitSection}>
          <div className={styles.textWrapper}>
          <h2 className={styles.heading}>🎯 Situational Safety</h2>
          <p className={styles.subheading}>In a city that never slows down, awareness is your compass — turning crowded streets, late nights, and unexpected moments into manageable, confident experiences.</p>
          <ul className={styles.itineraryList}>
              <li className={styles.subheading}>🧭 Trust instincts: If a subway platform feels empty, wait for the next train.</li>
              <li className={styles.subheading}>🛑 De‑escalate: In Times Square, ignore aggressive ticket sellers instead of engaging.</li>
              <li className={styles.subheading}>🚨 Spot exits: At Broadway shows or concerts, note the nearest exit before the crowd builds.</li>
              <li className={styles.subheading}>🕒 Time awareness: Skip isolated shortcuts through parks after midnight.</li>
          </ul>
          <p className={styles.subheading}>With these habits, you don’t just react to the city — you move through it with confidence.</p>
          <Link href="/majorcities/newyork/landmark" className={styles.ctaButton}>
            Subway Safety Tips for Solo Travelers
          </Link>
          </div>
          <div className={styles.imageWrapper}>
            <Image
                src="/data/majorcities/newyork/assets/urban-safety-tips-city-awareness-nighttime-navigation-current-2.png"
                alt="Illustrated urban safety tips for confident city navigation at night — subway caution, Times Square de-escalation, concert exit awareness, and park timing advice"
                fill
                className={styles.mapImage}
            />
          </div>  
        </section>
        <section className={styles.splitSection}>
            <div className={styles.imageWrapper}>
            <Image src="/data/majorcities/newyork/assets/nyc-room-safety-new-1.png" 
            alt="NYC lodging safety — hotel, Airbnb, locks, solo travel." 
            fill
            className={styles.mapImage}/>
            </div>
            <div className={styles.textWrapper}>
            <h2 className={styles.heading}>🏨 Accommodation Safety</h2>
            <p className={styles.subheading}>In New York, your stay should feel like a secure base — whether it’s a hotel, hostel, or Airbnb. A few smart checks make solo travel smoother and safer.</p>
            <ul className={styles.itineraryList}>
                <li className={styles.subheading}>🏨 Safe hotels/hostels: Choose properties near busy hubs like Times Square or Union Square, where 24/7 front desks and secure entry are standard. In hostels, use lockers for valuables and avoid isolated dorms.</li>
                <li className={styles.subheading}>🪟 Airbnb awareness: Favor listings in well‑lit neighborhoods like Williamsburg or the Upper West Side. Check reviews for mentions of reliable locks, smoke detectors, and responsive hosts.</li>
                <li className={styles.subheading}>🔒 Room security: Test locks and latches immediately; in older NYC walk‑ups, confirm safes and fire exits are functional. Use lockable bags if storage feels limited.</li>
                <li className={styles.subheading}>👥 Solo visibility: Let staff or hosts know you’re traveling alone; in boutique hotels or Airbnbs, this builds awareness and adds informal support.</li>
            </ul>

                <Link href="/majorcities/newyork/landmark" className={styles.ctaButton}>
                Safest Neighborhoods in NYC for Solo Travel
            </Link>
            </div>
        </section>
      <Footer />
        </>

    );
}