export const generateMetadata = () => ({
  title: 'NYC Safety Scenarios for Solo Female Travelers | Practical, Real‑World Guidance',
  description:  'A scenario‑based NYC safety guide for solo female travelers. Clear, calm steps for navigating subways, stations, and late‑night situations.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
      canonical: 'https://www.travelamerica.work/majorcities/newyork/nyc-safety-for-solo-female-travelers',
    },
    twitter: {
    card: "summary_large_image",
    title: 'NYC Safety Scenarios for Solo Female Travelers | Practical, Real‑World Guidance',
    description:  'A scenario‑based NYC safety guide for solo female travelers. Clear, calm steps for navigating subways, stations, and late‑night situations.',
    images: ["https://www.travelamerica.work/data/majorcities/newyork/assets/nyc-solo-female-traveler-night-safety-banner.jpeg"]
  }
});


import NYCSafetyforSoloFemaleTravelerClient from './nycsafetyforsolofemaletravelerclient';
export default async function NYCSafetyforsolofemaletraveler() {
  
  return <NYCSafetyforSoloFemaleTravelerClient />;
}
