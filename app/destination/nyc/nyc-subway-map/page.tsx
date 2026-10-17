export const metadata = {
  title: "NYC Subway Map 2026: Full MTA Map, Zoomable + PDF",
  description:
    "Open the full NYC subway map and zoom into every line and station, download the free PDF, and get quick tips for your first ride.",
  alternates: {
    canonical: "https://www.travelsamericas.com/destination/nyc/nyc-subway-map",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1
    }
  },

  openGraph: {
    title: "NYC Subway Map 2026: Full MTA Map, Zoomable + PDF",
    description:
      "Open the full NYC subway map and zoom into every line and station, download the free PDF, and get quick tips for your first ride.",
    url: "https://www.travelsamericas.com/destination/nyc/nyc-subway-map",
    siteName: "Travels Americas",
    type: "article",
    locale: "en_US",
    images: [
      {
        url: "https://www.travelsamericas.com/data/metadataimage/nyc-subway-map.webp",
        width: 1200,
        height: 630,
        alt: "NYC Subway Map 2026 – full MTA map"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "NYC Subway Map 2026: Full MTA Map, Zoomable + PDF",
    description:
      "Open the full NYC subway map and zoom into every line and station, download the free PDF, and get quick tips for your first ride.",
    images: ["https://www.travelsamericas.com/data/metadataimage/nyc-subway-map.webp"],
    
  }
};


import NYCSubwayMapClient from './nycsubwaymapclient';
import schema from "./nyc-subway-map.schema.json";

export default function Page(){
    // JSON-LD script lives directly in the JSX (App Router pattern); the previous
    // <Head> wrapper from next/head was a no-op in App Router and the schema was
    // never being emitted.
    return(
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
            <NYCSubwayMapClient />
        </>
    )

}