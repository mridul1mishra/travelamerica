// app/majorcities/[city]/layout.tsx
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params; // ✅ unwrap the Promise
  const formattedCity = city.toLowerCase();
  let title;
  if (formattedCity === "newyork") {
    title = "Explore NYC Travel: Solo Safety, Group Planning, Dining & Landmark Routes";
  } else {
    title = `Explore ${formattedCity} | Travel America`;
  }

  const canonicalUrl = `https://www.travelamerica.work/majorcities/${city}`;

  return {
    
    title,
    description: `Plan your trip to ${formattedCity} with curated stays, airport info, and travel tips.`,
    alternates: {
      canonical: canonicalUrl,
    },
    keywords: [
      `${formattedCity} travel guide`,
      `top attractions in ${formattedCity}`,
      `${formattedCity} airport info`,
      `${formattedCity} hotels`,
      `places to visit in ${formattedCity}`,
      `plan a trip to ${formattedCity}`,
      `family travel ${formattedCity}`,
      `solo travel ${formattedCity}`,
      `group travel ${formattedCity}`,
    ],
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
