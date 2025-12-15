import { generateDailyEvents } from '../../../lib/generateDailyEvents';
export const generateMetadata = () => ({
  title: '3-Day Group Travel Itinerary for New York | Travel America',
  description:  'Explore NYC in 3 days with a group-friendly itinerary blending culture, connection, and skyline moments.',
  alternates: {
      canonical: 'https://www.travelamerica.work/majorcities/newyork/group-itinerary',
    },
    robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "3-Day NYC Group Travel Itinerary",
    description: "Plan the perfect 3-day NYC trip for groups with museums, parks, Broadway, and a Hudson River dinner cruise.",
    images: ["https://www.travelamerica.work/data/majorcities/newyork/assets/group/nyc-group-itinerary-brooklyn-bridge-sunset.jpg"]
  }
});

import GroupItineraryClient from './groupitineraryclient';

export default function GroupItineraryPage() {
  const events = generateDailyEvents({
    name: 'Hudson River Dinner Cruise',
    description: 'Nightly NYC dinner cruise with gourmet dining, live entertainment, and skyline views.',
    baseImage: 'https://www.travelamerica.work/images/hudson-river-cruise.jpg',
    organizerName: 'Hudson’s by World Yacht',
    organizerUrl: 'https://pier81nyc.com/',
    days: 7, // next 7 days
    startHour: 19,
    durationHours: 3,
  });
  const BlogPosting = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: '3-Day New York City Group Travel Itinerary',
    description:
      'Plan the perfect 3-day NYC trip for groups with museums, parks, Broadway, and a Hudson River dinner cruise.',
    author: {
      '@type': 'Organization',
      name: 'Travel America',
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'TouristAttraction',
          position: 1,
          name: 'Metropolitan Museum of Art',
          description: 'Quiet reflection in timeless galleries.',
        },
        {
          '@type': 'TouristAttraction',
          position: 2,
          name: 'Central Park',
          description: 'Tree-lined paths and lakeside views.',
        },
        {
          '@type': 'TouristAttraction',
          position: 3,
          name: 'Guggenheim Museum',
          description: 'Modern art in iconic spiral galleries.',
        },
        {
          '@type': 'TouristAttraction',
          position: 4,
          name: 'Frick Collection',
          description: 'Intimate encounters with European masterpieces.',
        },
        // 👇 Inject generated Event objects (with startDate/endDate)
        ...events,
      ],
    },
  };
  return (
    <>
    <GroupItineraryClient />
   <script id="structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BlogPosting) }} /> 
      </>
  );
}
