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
    dateModified: "2026-06-19",
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
        name: "Is New York City safe for tourists in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "New York City is generally safe for visitors who stay in active areas, use reliable transit, and make practical late-night route choices.",
        },
      },
      {
        "@type": "Question",
        name: "Is the NYC subway safe at night?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The subway is often usable at night, but visitors should avoid empty platforms and cars, reduce late transfers, and use a cab or rideshare when a route feels too quiet.",
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
          text: "Step into a public place such as a hotel lobby, store, restaurant, museum, or staffed station. Call 911 for immediate danger.",
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
