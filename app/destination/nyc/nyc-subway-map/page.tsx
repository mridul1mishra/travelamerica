export const metadata = {
  title: "NYC Subway Map (2026): Simple, Safe & Solo‑Traveler Friendly",
  description:
    "View and download the updated 2026 NYC subway map. A beginner‑friendly guide with routes, safety tips, and navigation help for solo travelers.",
  alternates: {
    canonical: "https://www.travelamerica.work/destination/nyc/nyc-subway-map",
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
    title: "NYC Subway Map (2026): Easy Guide for Solo Travelers",
    description:
      "Download the official 2025 NYC subway map and learn how to navigate the system safely and confidently as a solo traveler.",
    url: "https://www.travelamerica.work/destination/nyc/nyc-subway-map",
    siteName: "Your Travel Hub",
    type: "article",
    locale: "en_US",
    images: [
      {
        url: "https://www.travelamerica.work/data/metadataimage/nyc-subway-map.png",
        width: 1200,
        height: 630,
        alt: "NYC Subway Map 2026 – Solo Traveler Guide"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "NYC Subway Map (2026): Simple, Safe & Solo‑Traveler Friendly",
    description:
      "Updated NYC subway map with beginner‑friendly routes, safety tips, and offline downloads.",
    images: ["https://www.travelamerica.work/data/metadataimage/nyc-subway-map.png"],
    
  }
};


import NYCSubwayMapClient from './nycsubwaymapclient';
import schema from "./nyc-subway-map.schema.json";

export default function Page(){
    return(
        <>
        <head>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
        </head>
        <NYCSubwayMapClient />
        </>

    )

}