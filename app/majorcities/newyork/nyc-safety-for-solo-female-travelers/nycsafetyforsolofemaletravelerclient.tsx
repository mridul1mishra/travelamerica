"use client";
import styles from './nycsafetysolofemaletravelers.module.css';
import Header from "../../../components/Header/header";
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/app/components/Header/Footer/footer';
import { useState } from 'react';

export default function NYCsafetyforsolofemaletravelerclient() {
    const [flipped, setFlipped] = useState(false);
    const schemaObject = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.travelamerica.work/majorcities/newyork/nyc-safety-for-solo-female-travelers",
      "name": "NYC Solo Female Traveler Safety Guide",
      "description": "A scenario-based safety guide for solo female travelers navigating New York City, including subway safety, rideshare tips, street awareness, and real-world decision-making.",
      "keywords": "NYC safety, solo female travel, subway safety, NYC travel tips, women travel safety, NYC scenarios, travel safety guide",
      "url": "https://www.travelamerica.work/majorcities/newyork/nyc-safety-for-solo-female-travelers",
      "isPartOf": {
        "@id": "https://www.travelamerica.work/#organization"
      }
    },

    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.travelamerica.work/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Travel Safety",
          "item": "https://www.travelamerica.work/majorcities/newyork"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "NYC Solo Female Traveler Safety Guide",
          "item": "https://yourdomain.com/nyc-solo-female-traveler-safety"
        }
      ]
    },

    {
      "@type": "Organization",
      "@id": "https://www.travelamerica.work/#organization",
      "name": "Your Brand Name",
      "url": "https://www.travelamerica.work",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.travelamerica.work/logo.png"
      },
    {
      "@type": "ItemList",
      "name": "NYC Safety Scenarios",
      "itemListOrder": "Ascending",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Entering a Subway Car at Night"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Walking Past a Group on the Sidewalk"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Someone Following You for a Block"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Late-Night Rideshare Pickup"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Crowded Times Square Encounter"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Empty Subway Platform at Night"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Aggressive Panhandler Approaches"
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "Unlicensed Taxi Offers a Ride"
        },
        {
          "@type": "ListItem",
          "position": 9,
          "name": "Lost in a Quiet Neighborhood"
        },
        {
          "@type": "ListItem",
          "position": 10,
          "name": "Someone Blocking Your Path"
        },
        {
          "@type": "ListItem",
          "position": 11,
          "name": "Late-Night Convenience Store Stop"
        },
        {
          "@type": "ListItem",
          "position": 12,
          "name": "Street Harassment While Walking"
        }
      ]
    }
  ]
};

return(    
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObject) }}/>
    <Header image={`/data/majorcities/newyork/assets/nyc-solo-female-traveler-night-safety-banner.jpeg`} bannerText="NYC solo travel safety guide — neighborhood tips, subway awareness, exits, and time cues" />
    <section className={styles.splitSection} style={{  textAlign: "center" }}>
                <div style={{ width: "100%", textAlign: "center" }}>
                <h1  className={styles.sectionheading}>NYC Safety Scenarios for Solo Female Travelers</h1>
                <p className={styles.subheading}>Real‑world situations, clear actions, and calm guidance to help you move confidently through New York City.</p>
                </div>
    </section>
    {scenarios.sections.map((section, sectionIndex) => (
        <section key={sectionIndex} className={styles["safety-section"]}>
          <h2 className={styles["safety-section__title"]}>{section.title}</h2>

          <div className={styles["cards-row"]}>
            {section.cards.map((s, i) => (
              <FlipCard
                key={i}
                front={<FrontCard scenario={s} />}
                back={<BackCard scenario={s} />}
              />
            ))}
          </div>
        </section>
    <Footer />    
    </>
);
}
