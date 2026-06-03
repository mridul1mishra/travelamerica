import Home from "./home";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Travels Americas | Discover Iconic Cities to Visit",
  description: "Discover curated city guides for Las Vegas, Orlando, New York, and Los Angeles. Explore culture, food, and attractions.",
  alternates: {
    canonical: "https://www.travelsamericas.com/",
  },
  openGraph: {
    title: "Travels Americas | Discover Iconic Cities to Visit",
    description: "Discover carefully selected city guides for Las Vegas, Orlando, New York, and Los Angeles. Explore culture, food, and attractions with insider insights",
    url: "https://www.travelsamericas.com",
    siteName: "Travels Americas",
    images: [
      {
        url: "https://www.travelsamericas.com/data/home/banner_new.png",
        width: 1200,
        height: 630,
        alt: "Travels Americas homepage",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travels Americas | Discover Iconic Cities to Visit",
    description: "Discover carefully selected city guides for Las Vegas, Orlando, New York, and Los Angeles. Explore culture, food, and attractions with insider insights",
    images: ["https://www.travelsamericas.com/data/home/banner_new.png"],
  },
};

export default function Page() {
  return <Home />;
}
