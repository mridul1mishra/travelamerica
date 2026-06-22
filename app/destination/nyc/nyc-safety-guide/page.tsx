import NYCSafetyGuideClient from "./nycsafetyguideclient";

export const metadata = {
  title: "Is NYC Safe in 2026? An Honest, Data-Backed Visitor Guide",
  description:
    "Is New York City safe to visit in 2026? An honest, data-backed answer using NYPD and MTA stats — where to stay, what to skip, subway tips, scams to dodge, and what to do if something feels off.",
  alternates: {
    canonical: "https://www.travelsamericas.com/destination/nyc/nyc-safety-guide",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxImagePreview: "large",
      maxSnippet: -1,
      maxVideoPreview: -1,
    },
  },
  openGraph: {
    title: "Is NYC Safe in 2026? An Honest, Data-Backed Visitor Guide",
    description:
      "Is NYC safe in 2026? An honest, data-backed guide — where to stay, transit tips, scams to avoid, and what to do if a situation feels off.",
    url: "https://www.travelsamericas.com/destination/nyc/nyc-safety-guide",
    siteName: "Travels Americas",
    type: "article",
    locale: "en_US",
    images: [
      {
        url: "https://www.travelsamericas.com/data/metadataimage/nyc-night-hero.webp",
        width: 1024,
        height: 1024,
        alt: "Lower Manhattan skyline lit at night across the water",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Is NYC Safe in 2026? An Honest, Data-Backed Visitor Guide",
    description:
      "Is NYC safe in 2026? An honest, data-backed visitor guide — where to stay, transit tips, scams, and emergency actions.",
    images: ["https://www.travelsamericas.com/data/metadataimage/nyc-night-hero.webp"],
  },
};

export default function NYCSafetyGuide() {
  const guideSchema = {
    "@context": "https://schema.org",
    "@type": "Guide",
    name: "NYC Safety Guide for Visitors",
    description:
      "A practical, scenario-based safety guide for visiting New York City with neighborhood, transit, night, and emergency guidance.",
    url: "https://www.travelsamericas.com/destination/nyc/nyc-safety-guide",
    inLanguage: "en-US",
    dateModified: "2026-06-22",
    author: {
      "@type": "Organization",
      name: "Travels Americas",
    },
    isPartOf: {
      "@type": "WebSite",
      name: "Travels Americas",
      url: "https://www.travelsamericas.com",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is New York City safe to visit in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes for most visitors who stay in active areas and plan late-night routes carefully. The data supports it: citywide major crime fell 6.2% year-to-date through May 2026, and the NYPD recorded the fewest murders for the first five months of any year on record. Most visitor incidents involve pickpocketing or scams in crowded areas, not violent crime.",
        },
      },
      {
        "@type": "Question",
        name: "How safe is New York City right now?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Safer than it has been in years. Year-to-date major crime dropped 6.2% through May 2026 (44,955 vs. 47,929 incidents) with declines in every borough, and murders are at historic lows. Risk for visitors is concentrated in petty theft in busy tourist zones rather than serious crime.",
        },
      },
      {
        "@type": "Question",
        name: "Is Manhattan safe for tourists?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Manhattan — especially Midtown, the Upper West and Upper East Sides, Chelsea, and Lower Manhattan — is busy, heavily policed, and where most tourists stay safely. Crowded spots like Times Square call for pickpocket awareness, but violent crime is rare in these areas.",
        },
      },
      {
        "@type": "Question",
        name: "Is it safe to travel to NYC alone?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Solo travel in NYC is common and manageable. Stay in central, transit-connected neighborhoods, keep late-night routes simple, tell someone your plans, and use a rideshare when a subway transfer feels too quiet. Our dedicated solo and female-solo guides cover this in detail.",
        },
      },
      {
        "@type": "Question",
        name: "Is the NYC subway safe at night?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The subway carries millions safely each day and transit crime sits near a 16-year low, though early 2026 saw a brief uptick before levelling off. At night, avoid empty platforms and cars, reduce transfers, and switch to a cab or rideshare when a route feels thin.",
        },
      },
      {
        "@type": "Question",
        name: "Are Tribeca, DUMBO, and Brooklyn Heights safe at night?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "These are among the calmer, lower-crime neighborhoods visitors stay in. They feel quiet after dark, so the main consideration is the route home — favor a direct subway line or a cab over a long walk from a distant station.",
        },
      },
      {
        "@type": "Question",
        name: "Where should first-time visitors stay in NYC?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Upper West Side, Upper East Side, Midtown, Chelsea, Flatiron, and Brooklyn Heights are practical choices because they combine transit, hotels, food, and active streets.",
        },
      },
      {
        "@type": "Question",
        name: "What should I do if I feel unsafe in NYC?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Step into a public place such as a hotel lobby, store, restaurant, museum, or staffed station, and call 911 for immediate danger or 311 for non-urgent help.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.travelsamericas.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "New York City",
        item: "https://www.travelsamericas.com/destination/nyc",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "NYC Safety Guide",
        item: "https://www.travelsamericas.com/destination/nyc/nyc-safety-guide",
      },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "NYC Safety Guide for Visitors",
    url: "https://www.travelsamericas.com/destination/nyc/nyc-safety-guide",
    description:
      "A calm, practical NYC safety guide for visitors with route planning, transit guidance, neighborhood context, and emergency actions.",
    isPartOf: {
      "@type": "WebSite",
      name: "Travels Americas",
      url: "https://www.travelsamericas.com",
    },
  };

  return (
    <>
      <script
        id="nyc-safety-guide-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [guideSchema, faqSchema, breadcrumbSchema, webPageSchema],
          }),
        }}
      />
      <NYCSafetyGuideClient />
    </>
  );
}
