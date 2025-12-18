import Home from "./home";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Travel Americas | Discover Iconic Cities to Visit",
  description: "Discover carefully selected city guides for Las Vegas, Orlando, New York, and Los Angeles. Explore culture, food, and attractions with insider insights",
  alternates: {
    canonical: "https://www.travelamerica.work/",
  },
  openGraph: {
    title: "Travel Americas | Discover Iconic Cities to Visit",
    description: "Discover carefully selected city guides for Las Vegas, Orlando, New York, and Los Angeles. Explore culture, food, and attractions with insider insights",
    url: "https://www.travelamerica.work",
    siteName: "Travel Americas",
    images: [
      {
        url: "https://www.travelamerica.work/data/home/banner_new.png",
        width: 1200,
        height: 630,
        alt: "Travel Americas homepage",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Americas | Discover Iconic Cities to Visit",
    description: "Discover carefully selected city guides for Las Vegas, Orlando, New York, and Los Angeles. Explore culture, food, and attractions with insider insights",
    images: ["https://www.travelamerica.work/data/home/banner_new.png"],
  },
};

export default function Page() {
  return <Home />;
}
