"use client";
import { useParams } from "next/navigation";
import Header from "../../../components/Header/header";
import Link from 'next/link';
import Image from 'next/image';
import styles from './groupitinerary.module.css';
import Footer from "@/app/components/Header/Footer/footer";
import BookingCTA from '@/app/destination/nyc/components/BookingCTA/BookingCTA';

export default function GroupItineraryClient() {
    
    const FAQPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best 3-day itinerary in New York City for groups?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A popular 3-day group itinerary includes Day 1 exploring Times Square, Broadway, and Central Park; Day 2 visiting the Statue of Liberty, Ellis Island, and the 9/11 Memorial; and Day 3 enjoying museums like the Met or MoMA followed by group dining in Midtown."
      }
    },
    {
      "@type": "Question",
      "name": "How can large groups travel around New York City?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Groups can use charter buses, subway passes, or rideshare vans. Walking tours are also a great option for exploring neighborhoods together."
      }
    },
    {
      "@type": "Question",
      "name": "Are there group discounts for NYC attractions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, attractions like the Statue of Liberty, Empire State Building, and museums often provide discounted rates for groups of 10 or more. Booking in advance is recommended."
      }
    },
    {
      "@type": "Question",
      "name": "What are good group dining options in New York City?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Family-style restaurants such as Carmine’s, Korean BBQ spots like Kang Ho Dong Baekjeong, and dim sum halls like Jing Fong are ideal for group dining."
      }
    },
    {
      "@type": "Question",
      "name": "How should groups plan accommodations for a 3-day NYC trip?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Groups often book hotels with central locations near Midtown or Downtown. Options like suite-style hotels or boutique stays with communal spaces work well for group travelers."
      }
    }
  ]
};
const BreadcrumbList = {
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
      "name": "Solo Travel",
      "item": "https://www.travelsamericas.com/destination/nyc/group-itinerary"
    }
  ]
                };
const itemlist = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "3-Day New York City Group Travel Itinerary",
  "itemListOrder": "Ordered",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Day 1: Manhattan Highlights",
      "description": "Start in Times Square with coffee and photos, head to Rockefeller Center’s Top of the Rock for skyline views, explore Chelsea Market and the High Line in the afternoon, then enjoy dinner in Hell’s Kitchen followed by a Broadway show."
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Day 2: Cultural Immersion",
      "description": "Begin in Harlem at the Apollo Theater, explore Chinatown and Little Italy, then visit MoMA, the Natural History Museum, the Tenement Museum, and the Whitney. End the evening with Times Square’s neon spectacle, a Broadway show, and live music in the East Village."
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Day 3: Art, Nature & Relaxation",
      "description": "Start at the Metropolitan Museum of Art, stroll through Central Park, then visit the Guggenheim Museum and the Frick Collection. Conclude with a Hudson River dinner cruise, blending dining, skyline views, and shared group moments."
    }
  ]
};

const HowTo = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Experience New York City in 3 Days as a Group Traveler",
  "description": "Step-by-step guide for groups to explore New York City landmarks, cultural highlights, and shared experiences over three days.",
  "totalTime": "P3D",
  "supply": [
    { "@type": "HowToSupply", "name": "Group MetroCards or OMNY passes" },
    { "@type": "HowToSupply", "name": "Portable chargers and shared first aid kit" },
    { "@type": "HowToSupply", "name": "Group itinerary and reservation details" }
  ],
  "tool": [
    { "@type": "HowToTool", "name": "Google Maps or Citymapper" },
    { "@type": "HowToTool", "name": "NYC Ferry and charter buses" }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "Day 1: Manhattan Highlights",
      "text": "Begin in Times Square with coffee and photos, head to Rockefeller Center’s Top of the Rock for skyline views, explore Chelsea Market and the High Line in the afternoon, then enjoy dinner in Hell’s Kitchen followed by a Broadway show."
    },
    {
      "@type": "HowToStep",
      "name": "Day 2: Cultural Immersion",
      "text": "Start in Harlem at the Apollo Theater, explore Chinatown and Little Italy, then visit MoMA, the Natural History Museum, the Tenement Museum, and the Whitney. End the evening with Times Square’s neon spectacle, a Broadway show, and live music in the East Village."
    },
    {
      "@type": "HowToStep",
      "name": "Day 3: Art, Nature & Relaxation",
      "text": "Visit the Metropolitan Museum of Art, stroll through Central Park, then explore the Guggenheim Museum and the Frick Collection. Conclude with a Hudson River dinner cruise, blending dining, skyline views, and shared group moments."
    }
  ]
};


    return(
        <>
                
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemlist) }}/>        
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQPage) }}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HowTo) }}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BreadcrumbList) }}/>
        <div className="App">
            <Header image={`/data/majorcities/newyork/assets/group/nyc-group-itinerary-brooklyn-bridge-sunset.jpg`} bannerText="Group of friends sharing tacos and coffee on a rooftop terrace overlooking Brooklyn Bridge and East River at sunset in NYC" />
            <BookingCTA variant="slim" text="Book your New York trip →" href="/destination/nyc/booking?tab=hotels&from=group-itinerary" label="Find hotels" />
            <section className={styles.splitSection} style={{ textAlign: "center" }}>
                <div style={{ width: "100%", textAlign: "center" }}>
                    <h1  className={styles.sectionheading}>3 Days in New York City!</h1>
                    <p>Step into New York with friends or fellow travelers — from Broadway nights to museum mornings, Central Park strolls to a Hudson River dinner cruise. This 3‑day itinerary blends culture, connection, and skyline views, giving groups the perfect balance of discovery and relaxation</p>
                </div>
            </section>  
            <section className={styles.splitSection}>
                <div className={styles.imageWrapper}>
                <Image src="/data/majorcities/newyork/assets/group/nyc-group-itinerary-day1-times-square-chelsea-market-broadway.png" alt="Day 1 NYC group itinerary map featuring Times Square, Top of the Rock, Chelsea Market, High Line, Hell’s Kitchen, and Broadway highlights"
                    fill className={styles.mapImage}/>
                </div>
                <div className={styles.textWrapper}>
                <h2 className={styles.heading}>Day 1: Broadway Nights, Group Delights</h2>
                <p className={styles.subheading}></p>
                <ul className={styles.itineraryList}>
                    <li className={styles.subheading}>🌅Begin in Times Square for coffee and the obligatory photos, then walk over to Top of the Rock at Rockefeller Center. Go up early before the midday crowds — it's a good spot to grab skyline shots and figure out the rest of the day together.</li>
                    <li className={styles.subheading}>☀️Chelsea Market is an easy lunch stop where everyone can pick something different without a reservation. From there it's a few minutes to the High Line, the old elevated rail line turned walkway. It's flat, it's free, and you can do as much or as little of it as the group wants before heading back down into the city.</li>
                    <li className={styles.subheading}>🌙Have dinner in Hell's Kitchen — there are plenty of spots that take a group of six or more if you call ahead. Then catch a Broadway show; book seats together in advance, since walk-up group tickets are hard to find. It's the kind of night everyone talks about afterward.</li>
                </ul>
                <Link href="/destination/nyc/group-travel" className={styles.ctaButton}>
                    NYC group travel safety tips
                </Link>
                </div>
            </section>
            <section className={styles.splitSection}>
          <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Day 2: Culture, Landmarks & Camaraderie</h2>
          <p className={styles.subheading}></p>
          <ul className={styles.itineraryList}>
              <li className={styles.subheading}>🌅Start the morning up in Harlem at the Apollo Theater, then work your way down through Chinatown and Little Italy. The markets and old churches are worth a slow walk, and there's good cheap food the whole way if anyone gets hungry.</li>
              <li className={styles.subheading}>☀️Spend the afternoon at one or two museums — don't try to do all of them. MoMA has the Van Gogh everyone wants to see; the Natural History Museum is the better pick if there are kids in the group; the Tenement Museum runs guided tours that work well for a small group. Pick what fits your crowd.</li>
              <li className={styles.subheading}>🌙Head back to Times Square after dark to see it lit up, then catch a Broadway show if you didn't on Day 1. Afterward, the East Village has plenty of bars and live music within a few blocks of each other, so it's easy to keep the group together.</li>
              
          </ul>
          <Link href="/destination/nyc/group-landmarks" className={styles.ctaButton}>
            Best neighborhoods for Group travelers in NYC
          </Link>
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
                <Image src="/data/majorcities/newyork/assets/group/nyc-group-itinerary-day3-dinner-cruise-dancing-manhattan.png" alt="Scene-based illustration of Day 3 NYC group itinerary with friends dancing on a Hudson River dinner cruise, Manhattan skyline, and live jazz band"
                    fill className={styles.mapImage}/>
                </div>
                <div className={styles.textWrapper}>
                <h2 className={styles.heading}>Day 3: Culture, Cruise, and Companionship</h2>
                <p className={styles.subheading}></p>
                <ul className={styles.itineraryList}>
                    <li className={styles.subheading}>🌅Take it slower on the last day. Start at the Met when it opens, then walk straight out the back into Central Park — the entrance is right there. An hour by the lake is a nice break before the next stop.</li>
                    <li className={styles.subheading}>☀️If the group still wants more art, the Guggenheim is close by and the spiral ramp makes it quick to do as a group. The Frick nearby is smaller and quieter if people are museum'd out. Either is an easy afternoon.</li>
                    <li className={styles.subheading}>🌙End with a Hudson River dinner cruise. You get dinner and the skyline at night in one go, and it's an easy sell for a mixed group — there's deck space if you want air and seating if you want to sit and talk. Book ahead on weekends.</li>
                </ul>
                <Link href="/destination/nyc/group-dining" className={styles.ctaButton}>
                    Discover NYC steakhouses
                </Link>
                </div>
            </section>
      <BookingCTA variant="full" text="Find group-friendly hotels for this plan" href="/destination/nyc/booking?tab=hotels&from=group-itinerary" label="Find hotels" />
      <Footer />  
    </div>
    </>
    );
}
