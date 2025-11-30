export const generateMetadata = () => ({
  title: 'NYC Group Dining — Brooklyn Steakhouses & Bagel Capital Bites',
  description:  'Plan your NYC group dining adventure with Brooklyn’s top steakhouses, iconic bagels, and New York’s rich food culture.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
      canonical: 'https://www.travelamerica.work/majorcities/newyork/group-dining',
    },
    twitter: {
    card: "summary_large_image",
    title: "Discover Group Dining in NYC",
    description: "From tucked‑away corners perfect for solo explorers to sprawling tables built for groups, New York City’s food scene adapts to every traveller. Group dining here means more than just eating — it’s about sharing the city itself.",
    images: ["https://www.travelamerica.work/data/majorcities/newyork/assets/nyc-solo-dining.png"],
    
  }
});

import GroupDiningClientPage from './groupdiningclient'

export default function GroupDiningPage() {
  return <GroupDiningClientPage />;
}