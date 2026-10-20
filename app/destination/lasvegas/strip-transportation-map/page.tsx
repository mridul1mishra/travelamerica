import type { Metadata } from "next";
import LasVegasStripTransportationMapClient from "./striptransportationmapclient";

const canonical = "https://www.travelsamericas.com/destination/lasvegas/strip-transportation-map";
const title = "Las Vegas Strip Transportation Map: Monorail & Deuce Guide";
const description = "Compare Las Vegas Monorail and Deuce bus maps. Plan Strip journeys, trips to Fremont Street and airport connections with official route resources.";
const socialTitle = "Las Vegas Strip Map: Monorail & Deuce";
const socialDescription = "Find official maps and compare Monorail and Deuce routes, fares, hotel connections and airport options.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    title: socialTitle,
    description: socialDescription,
    url: canonical,
    type: "website",
    siteName: "Travels Americas",
  },
  twitter: {
    card: "summary_large_image",
    title: socialTitle,
    description: socialDescription,
  },
};

export default function LasVegasStripTransportationMapPage() {
  const schema = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.travelsamericas.com/" },
      { "@type": "ListItem", position: 2, name: "Las Vegas", item: "https://www.travelsamericas.com/destination/lasvegas" },
      { "@type": "ListItem", position: 3, name: "Las Vegas Strip Transportation Map", item: canonical },
    ] },
    { "@context": "https://schema.org", "@type": "Article", headline: title, description, url: canonical, inLanguage: "en-US", publisher: { "@type": "Organization", name: "Travels Americas", url: "https://www.travelsamericas.com" } },
  ];
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><LasVegasStripTransportationMapClient /></>;
}
