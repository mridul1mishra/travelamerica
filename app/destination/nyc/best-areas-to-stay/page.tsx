import Script from "next/script";

export const generateMetadata = () => ({
  title: 'Solo Trip to NYC (2025 Guide): Safety, Itinerary, Neighborhoods & Tips',
  description:  'Solo Trip to NYC (2025 Guide): Safety, Itinerary, Neighborhoods & Tips',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
      canonical: 'https://www.travelamerica.work/destination/solo-trip-to-nyc',
    },
    twitter: {
    card: "summary_large_image",
    title: 'Solo Trip to NYC (2025 Guide): Safety, Itinerary, Neighborhoods & Tips',
    description:  'Plan your NYC solo trip with safe areas, smart transit tips, and a simple 3‑day itinerary.',
    images: ["https://www.travelamerica.work/social/solo-trip-to-nyc-gritty.png"]
  }
});


import BestAreatoStatyClient from './bestareastostayclient';

export default async function SoloTripToNYC() {
  

  return (
  <>
      {/* Schema blocks */}
      
  <BestAreatoStatyClient />
  </>
);
  
}