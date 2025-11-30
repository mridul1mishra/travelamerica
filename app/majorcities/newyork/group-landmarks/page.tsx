export const generateMetadata = () => ({
  title: 'Group Travel in New York City – Landmark Guide for Manhattan, Brooklyn & Bronx',
  description:  'Discover New York City’s top group travel landmarks — from Manhattan icons like the Statue of Liberty and Times Square, to Brooklyn’s skyline views and festive streets, and the Bronx’s hidden gems and heritage. Plan unforgettable group experiences across NYC’s boroughs year‑round',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
      canonical: 'https://www.travelamerica.work/majorcities/newyork/group-landmarks',
    },
    twitter: {
    card: "summary_large_image",
    title: "Group Travel in New York City – Landmark Guide for Manhattan, Brooklyn & Bronx",
    description: "Discover New York City’s top group travel landmarks — from Manhattan icons like the Statue of Liberty and Times Square, to Brooklyn’s skyline views and festive streets, and the Bronx’s hidden gems and heritage. Plan unforgettable group experiences across NYC’s boroughs year‑round",
    images: ["https://www.travelamerica.work/data/majorcities/newyork/assets/group/nyc-group-travel-landmarks.png"]
  }
});

import GroupLandmarksClientPage from './grouplandmarksclient';

export default function GroupLandmarksPage() {
  return <GroupLandmarksClientPage />;
}