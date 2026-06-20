import nycItineraryFaq from "@/content/destination/nyc/solo-itinerary/faq/itineraryfaq.json";
import SoloItineraryClient from "./soloitineraryclient";

export const generateMetadata = () => ({
  title: "NYC Solo Itinerary 2026: A Practical 3-Day New York City Plan",
  description:
    "A practical 3-day NYC solo itinerary with neighborhood-friendly routing, solo dining ideas, safe evening plans, and hotel-area advice.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.travelsamericas.com/destination/nyc/solo-itinerary",
  },
  twitter: {
    card: "summary_large_image",
    title: "NYC Solo Itinerary 2026: A Practical 3-Day Plan",
    description:
      "A solo-friendly New York City itinerary built around clean routes, easy food stops, and smart evening plans.",
    images: ["https://www.travelsamericas.com/data/majorcities/newyork/assets/solo-travel-itinerary.webp"],
  },
  openGraph: {
    title: "NYC Solo Itinerary 2026: A Practical 3-Day Plan",
    description:
      "A solo-friendly New York City itinerary built around clean routes, easy food stops, and smart evening plans.",
    url: "https://www.travelsamericas.com/destination/nyc/solo-itinerary",
    type: "article",
    siteName: "Travels Americas",
    images: [
      {
        url: "https://www.travelsamericas.com/data/majorcities/newyork/assets/solo-travel-itinerary.webp",
        width: 1536,
        height: 1024,
        alt: "Solo traveler looking over the New York City skyline at sunset",
      },
    ],
  },
});

export default async function SoloItineraryPage() {
  const touristTripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "3-Day Solo Travel Itinerary for New York City",
    description:
      "A practical three-day New York City itinerary for solo travelers, organized by neighborhood zones, transit flow, dining, and evening return planning.",
    touristType: {
      "@type": "Audience",
      name: "Solo Travelers",
    },
    about: [
      { "@type": "Thing", name: "Solo Travel" },
      { "@type": "Place", name: "New York City" },
    ],
    image: "https://www.travelsamericas.com/data/majorcities/newyork/assets/solo-travel-itinerary.webp",
    provider: {
      "@type": "Organization",
      name: "Travels Americas",
      url: "https://www.travelsamericas.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      name: "NYC Solo Itinerary",
      url: "https://www.travelsamericas.com/destination/nyc/solo-itinerary",
    },
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "NYC Solo Traveler 3-Day Itinerary",
    itemListOrder: "Ordered",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Day 1: Central Park, museums, and skyline views",
        description:
          "Start with Central Park, choose a major museum, and finish with Midtown skyline views and easy solo dining.",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Day 2: West Village, SoHo, Chelsea, and Broadway",
        description:
          "Use downtown neighborhoods as the day structure, then finish with Broadway or another lively evening anchor.",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Day 3: Harbor, Brooklyn Bridge, DUMBO, and Brooklyn views",
        description:
          "Pair harbor views with a daylight Brooklyn Bridge walk, DUMBO, and a planned evening return.",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is 3 days enough for a solo NYC trip?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Three days works well when each day is organized around one clear area: Uptown and Midtown, Downtown and Broadway, then Harbor and Brooklyn.",
        },
      },
      {
        "@type": "Question",
        name: "Where should I stay for this NYC solo itinerary?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Midtown, Chelsea, Flatiron, Upper West Side, and Brooklyn Heights are practical bases because they keep transit and evening returns simple.",
        },
      },
      {
        "@type": "Question",
        name: "Is this itinerary safe for solo travelers at night?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The route is built around active evening areas and simple returns. Travelers should avoid quiet shortcuts and use a cab or rideshare when the final route feels complicated.",
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
        name: "NYC Solo Itinerary",
        item: "https://www.travelsamericas.com/destination/nyc/solo-itinerary",
      },
    ],
  };

  return (
    <>
      <script
        id="nyc-solo-itinerary-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [touristTripSchema, itemListSchema, faqSchema, breadcrumbSchema],
          }),
        }}
      />
      <SoloItineraryClient grouped={nycItineraryFaq} />
    </>
  );
}
