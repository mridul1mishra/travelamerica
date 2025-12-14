import styles from './nycsolotravelsafety.module.css';
import Header from "../../../components/Header/header";
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/app/components/Header/Footer/footer';

export default async function NYCSoloTravelSafetyClient () {
    return(
        <>
    {/*<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(Breadcrumb) }}/>
    */} 
    <Header image={`/data/majorcities/newyork/assets/nyc-solo-travel-safety-banner.png`} bannerText="Illustration showing NYC solo travel culture etiquette tips" />
      <section className={styles.splitSection} style={{  textAlign: "center" }}>
                <div style={{ width: "100%", textAlign: "center" }}>
                <h1  className={styles.sectionheading}>NYC Solo Travel Safety: Culture, Tech & Belongings</h1>
                <p className={styles.subheading}>Solo travelers in NYC: blend in, protect valuables, and use smart tech for a safe adventure.</p>
                </div>
      </section>  
      <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image src="/data/majorcities/newyork/assets/nyc-tech-digital-safety-illustration.png" alt="NYC solo travel tech and digital safety illustration" fill className={styles.mapImage}/>
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Tech & Digital Safety</h2>
          <p className={styles.subheading}>The city hums with glowing screens and endless connections; safety lies in how you tap, swipe, and share.</p>
          <ul className={styles.itineraryList}>
              <li className={styles.subheading}><img src="/data/majorcities/newyork/assets/iconpart3safety/icon1.png" style={{ width: '24px', height: '24px', marginRight: '8px', verticalAlign: 'middle' }} alt="Safety icon"/>Before exploring New York City, set up real-time location alerts with trusted contacts, pre-load offline subway maps, and enable automatic cloud backup for photos and documents—so even in a crowded city, you stay connected and protected.</li>
              <li className={styles.subheading}><img src="/data/majorcities/newyork/assets/iconpart3safety/icon2.png" style={{ width: '24px', height: '24px', marginRight: '8px', verticalAlign: 'middle' }} alt="Safety icon"/>Securely mount phones for hands-free AR navigation, use real-time crime alert apps for late-night travel, and enable proximity alerts on wearables or earbuds for safer, stress-free subway commutes.</li>
              <li className={styles.subheading}><img src="/data/majorcities/newyork/assets/iconpart3safety/icon3.png" style={{ width: '24px', height: '24px', marginRight: '8px', verticalAlign: 'middle' }} alt="Safety icon"/>NYC’s cashless shift raises fraud risks; using virtual cards with limits, biometric wallet authentication, and AI-verified ride apps protects payments, ensuring privacy, security, and safer digital transactions.</li>
          </ul>
          <p className={styles.subheading}>In New York City, technology doesn’t replace awareness — it strengthens it</p>
          <Link href="/majorcities/newyork/landmark" className={styles.ctaButton}>
            Safest Neighborhoods in NYC for Solo Travel
          </Link>
        </div>
      </section>
      <section className={styles.splitSection}>
          <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Culture Etiquette</h2>
          <p className={styles.subheading}></p>
          <ul className={styles.itineraryList}>
              <li className={styles.subheading}><img src="/data/majorcities/newyork/assets/iconpart3safety/icon4.png" style={{ width: '24px', height: '24px', marginRight: '8px', verticalAlign: 'middle' }} alt="Safety icon"/>Prevent conflicts before they start: Avoid cutting into lines or making aggressive gestures. Staying mindful of local norms builds trust and keeps your solo travel experience stress‑free.</li>
              <li className={styles.subheading}><img src="/data/majorcities/newyork/assets/iconpart3safety/icon5.png" style={{ width: '24px', height: '24px', marginRight: '8px', verticalAlign: 'middle' }} alt="Safety icon"/>Use etiquette as safety armor: Avoid loud arguments, blocking sidewalks, or ignoring personal space. This builds goodwill and smoother interactions, sometimes even opening doors to friendly local support.</li>
              <li className={styles.subheading}><img src="/data/majorcities/newyork/assets/iconpart3safety/icon6.png" style={{ width: '24px', height: '24px', marginRight: '8px', verticalAlign: 'middle' }} alt="Safety icon"/>Blend in through local cues: Keep pace on sidewalks, let riders exit first, and tip fairly. These habits help you move confidently and blend in, reducing the chance of being singled out as a tourist.</li>
          </ul>
          <p className={styles.subheading}>Every city has its rhythm. In New York, it’s the pace of sidewalks, the pulse of the subway, and the unspoken rules that shape daily life. For solo travelers, tuning into these cues isn’t just courtesy—it’s the key to moving confidently, earning goodwill, and keeping the journey stress‑free.</p>
          <Link href="/majorcities/newyork/landmark" className={styles.ctaButton}>
            Subway Safety Tips for Solo Travelers
          </Link>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/newyork/assets/nyc-culture-etiquette-illustration.png"
            alt="Illustration showing NYC solo travel culture etiquette tips"
            fill
            className={styles.mapImage}
          />
        </div>  
      </section>
      <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image src="/data/majorcities/newyork/assets/nyc-solo-travel-safety-guide.png" 
          alt="NYC solo traveler safety guide illustration" fill className={styles.mapImage}/>
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Money & Belongings Safety</h2>
          <p className={styles.subheading}>The streets pulse with motion and stories; security lives in how you plan, move, and respond.</p>
          <ul className={styles.itineraryList}>
              <li className={styles.subheading}>On Times Square streets or subway platforms, pickpockets lurk; zip your bag, lock your digital wallets, and if snatched, block, track, and escape—your city adventure won’t pause.</li>
              <li className={styles.subheading}>Plan smart, carry less, secure bags, stay alert, and act fast—protect valuables effortlessly while keeping your safety first.</li>
              <li className={styles.subheading}>Tourism security frameworks guide travelers to plan ahead, stay alert, and respond fast—anticipating risks, protecting assets, and ensuring safety when incidents arise, with clear steps for prevention and recovery.</li>
          </ul>
          <p className={styles.subheading}>Stay prepared, stay alert, and stay resilient—because smart security turns every journey into a safe adventure.</p>
          <Link href="/majorcities/newyork/landmark" className={styles.ctaButton}>
            Safest Neighborhoods in NYC for Solo Travel
          </Link>
        </div>
      </section>
    <Footer/>
    </>
    );
}