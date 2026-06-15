// Server Component — no hooks used; child components handle their own interactivity.
import HeroSection from './components/Hero/HeroSection';
import PlanningIntent from './components/PlanningIntent/PlanningIntent';
import WhyVisit from './components/WhyVisit/WhyVisit';
import AttractionsHub from './components/AttractionsHub/AttractionHub';
import NeighborhoodsHub from './components/NeighborhoodsHub/NeighborhoodsHub';
import ExperiencesHub from './components/ExperiencesHub/ExperiencesHub';
import WhereToStay from './components/WhereToStay/WhereToStay';
import ItinerariesPreview from './components/ItinerariesPreview/ItinerariesPreview';
import DataCaptureCTA from './components/DataCapture/DataCaptureCTA';
import Header from "@/app/components/destination/header/header";
import Footer from "@/app/components/Header/Footer/footer";
import styles from './la.module.css';
import BookingCTA from './components/BookingCTA/BookingCTA';

const navLinks = [
  { href: "/destination/la/best-areas-to-stay", label: "Best Areas to Stay" },
  { href: "/destination/la/solo-trip-to-la", label: "Solo Trip to LA" },
  { href: "/destination/la/safety-guide", label: "LA Safety" },
  { href: "/destination/la/la-female-solo-travel-guide", label: "Female Travel Guide" },
];

// 25 left + 25 right floating stars — deterministic positions, varied sizes & delays
const LEFT_STARS = [
  { top:'2%',  left:'0.8%', size:58, delay:0.0  },
  { top:'6%',  left:'2.2%', size:72, delay:1.4  },
  { top:'10%', left:'1.0%', size:50, delay:3.1  },
  { top:'14%', left:'3.0%', size:80, delay:0.7  },
  { top:'18%', left:'1.5%', size:63, delay:2.5  },
  { top:'22%', left:'0.5%', size:55, delay:4.2  },
  { top:'26%', left:'2.8%', size:76, delay:1.0  },
  { top:'30%', left:'1.2%', size:68, delay:3.6  },
  { top:'34%', left:'3.5%', size:52, delay:0.4  },
  { top:'38%', left:'0.9%', size:84, delay:2.0  },
  { top:'42%', left:'2.0%', size:60, delay:5.0  },
  { top:'46%', left:'1.8%', size:74, delay:1.7  },
  { top:'50%', left:'3.2%', size:48, delay:3.9  },
  { top:'54%', left:'0.6%', size:82, delay:0.2  },
  { top:'58%', left:'2.5%', size:56, delay:2.8  },
  { top:'62%', left:'1.4%', size:70, delay:4.5  },
  { top:'66%', left:'3.8%', size:62, delay:1.3  },
  { top:'70%', left:'0.7%', size:78, delay:3.4  },
  { top:'74%', left:'2.3%', size:54, delay:0.9  },
  { top:'78%', left:'1.1%', size:86, delay:2.2  },
  { top:'82%', left:'3.1%', size:50, delay:4.8  },
  { top:'86%', left:'0.4%', size:66, delay:1.6  },
  { top:'90%', left:'2.7%', size:72, delay:3.3  },
  { top:'94%', left:'1.6%', size:58, delay:0.5  },
  { top:'98%', left:'3.4%', size:80, delay:2.7  },
];

const RIGHT_STARS = [
  { top:'2%',  right:'0.8%', size:64, delay:0.6  },
  { top:'6%',  right:'2.4%', size:50, delay:2.1  },
  { top:'10%', right:'1.2%', size:78, delay:4.3  },
  { top:'14%', right:'3.2%', size:56, delay:0.3  },
  { top:'18%', right:'0.6%', size:88, delay:1.9  },
  { top:'22%', right:'2.0%', size:62, delay:3.7  },
  { top:'26%', right:'1.6%', size:70, delay:0.8  },
  { top:'30%', right:'3.6%', size:54, delay:2.6  },
  { top:'34%', right:'0.9%', size:82, delay:4.9  },
  { top:'38%', right:'2.8%', size:60, delay:1.5  },
  { top:'42%', right:'1.3%', size:76, delay:3.2  },
  { top:'46%', right:'3.0%', size:52, delay:0.1  },
  { top:'50%', right:'0.5%', size:84, delay:2.4  },
  { top:'54%', right:'2.2%', size:58, delay:4.6  },
  { top:'58%', right:'1.8%', size:68, delay:1.1  },
  { top:'62%', right:'3.4%', size:74, delay:3.0  },
  { top:'66%', right:'0.7%', size:56, delay:0.4  },
  { top:'70%', right:'2.6%', size:80, delay:2.9  },
  { top:'74%', right:'1.0%', size:64, delay:4.1  },
  { top:'78%', right:'3.8%', size:50, delay:1.8  },
  { top:'82%', right:'0.3%', size:86, delay:3.5  },
  { top:'86%', right:'2.1%', size:60, delay:0.6  },
  { top:'90%', right:'1.5%', size:72, delay:2.3  },
  { top:'94%', right:'3.3%', size:54, delay:4.7  },
  { top:'98%', right:'0.8%', size:78, delay:1.2  },
];

export default function LAHubClient() {
  return (
    <main className={styles.container}>
      <Header links={navLinks} />

      {/* Hero banner gutter stars */}
      <div className={styles.heroZone}>
        <span className={styles.floatingStar} aria-hidden="true" style={{ top:'12%', left:'1.0%',  fontSize:70, animationDelay:'0.0s' }}>★</span>
        <span className={styles.floatingStar} aria-hidden="true" style={{ top:'40%', left:'2.5%',  fontSize:55, animationDelay:'2.1s' }}>★</span>
        <span className={styles.floatingStar} aria-hidden="true" style={{ top:'68%', left:'1.5%',  fontSize:80, animationDelay:'4.0s' }}>★</span>
        <span className={styles.floatingStar} aria-hidden="true" style={{ top:'12%', right:'1.0%', fontSize:60, animationDelay:'1.3s' }}>★</span>
        <span className={styles.floatingStar} aria-hidden="true" style={{ top:'40%', right:'2.0%', fontSize:80, animationDelay:'3.2s' }}>★</span>
        <span className={styles.floatingStar} aria-hidden="true" style={{ top:'68%', right:'1.5%', fontSize:52, animationDelay:'0.8s' }}>★</span>
        <HeroSection />
      </div>

      <BookingCTA variant="slim" text="Book hotels for your Los Angeles trip →" href="/destination/la/bookings?tab=hotels&from=la-hub" label="Book your LA trip" />

      {/* Star zone — stars are scoped to this wrapper only, never bleed into Header/Footer/BookingCTA */}
      <div className={styles.starZone}>
        {LEFT_STARS.map((s, i) => (
          <span
            key={`sl${i}`}
            className={styles.floatingStar}
            aria-hidden="true"
            style={{ top: s.top, left: s.left, fontSize: s.size, animationDelay: `${s.delay}s` }}
          >★</span>
        ))}
        {RIGHT_STARS.map((s, i) => (
          <span
            key={`sr${i}`}
            className={styles.floatingStar}
            aria-hidden="true"
            style={{ top: s.top, right: s.right, fontSize: s.size, animationDelay: `${s.delay}s` }}
          >★</span>
        ))}
        <PlanningIntent />
        <WhyVisit />
        <AttractionsHub />
        <NeighborhoodsHub />
        <ExperiencesHub />
        <WhereToStay />
        <ItinerariesPreview />
        <DataCaptureCTA />
      </div>

      <BookingCTA variant="full" text="Find the right hotel for your stay" href="/destination/la/bookings?tab=hotels&from=la-hub" label="Book your LA trip" />
      <Footer />
    </main>
  );
}
