import Script from "next/script";

export const generateMetadata = () => ({
  title: 'Best Areas to Stay in NYC 2026: Safest & Most Convenient',
  description:  'Find the best areas to stay in NYC for safety, convenience, and first‑time visitors. Compare top neighborhoods with pros, cons, and transit tips.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
      canonical: 'https://www.travelamerica.work/destination/solo-trip-to-nyc',
    },
    twitter: {
    card: "summary_large_image",
    title: 'Best Areas to Stay in NYC 2026: Safest & Most Convenient',
    description:  'Find the best areas to stay in NYC for safety, convenience, and first‑time visitors. Compare top neighborhoods with pros, cons, and transit tips.',
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
