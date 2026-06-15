import type { Metadata } from 'next';
import FreeThingsToDoClient from './freethingstodoclient';

export const metadata: Metadata = {
  title: 'Free Things to Do in Orlando 2026: Parks, Nature & Events',
  description: 'Lake Eola Park, Disney Springs, Kraft Azalea Garden, Morse Museum free hours, and free nature trails — a full Orlando day without paying for a theme park. Complete 2026 guide.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://www.travelsamericas.com/destination/orlando/free-things-to-do',
  },
  openGraph: {
    title: 'Free Things to Do in Orlando 2026: Parks, Nature & Events',
    description: 'A complete guide to free Orlando experiences — parks, free museum hours, Disney Springs, nature trails, neighbourhood walks, and seasonal events.',
    url: 'https://www.travelsamericas.com/destination/orlando/free-things-to-do',
    siteName: 'Travels Americas',
    images: [{ url: 'https://www.travelsamericas.com/social/orlando-free-things-to-do.png' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Things to Do in Orlando 2026 — Complete Guide',
    description: 'Parks, Morse Museum free hours, Disney Springs, Lake Eola, and seasonal events. No theme park ticket needed.',
    images: ['https://www.travelsamericas.com/social/orlando-free-things-to-do.png'],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Free Things to Do in Orlando 2026: Parks, Nature & Events',
  description: 'A complete guide to free things to do in Orlando, including parks, nature trails, free museum hours, Disney Springs, neighbourhood walks, and seasonal events that cost nothing.',
  author: { '@type': 'Person', name: 'Mridul' },
  publisher: { '@type': 'Organization', name: 'Travels Americas', url: 'https://www.travelsamericas.com' },
  datePublished: '2026-06-15',
  dateModified: '2026-06-15',
  mainEntityOfPage: 'https://www.travelsamericas.com/destination/orlando/free-things-to-do',
  image: 'https://www.travelsamericas.com/social/orlando-free-things-to-do.png',
  keywords: 'free things to do in Orlando, free Orlando attractions, Orlando free museums, Disney Springs free, Lake Eola Park, free Orlando activities 2026',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What can you do for free in Orlando beyond the theme parks?',
      acceptedAnswer: { '@type': 'Answer', text: 'Disney Springs (free entry), Lake Eola Park (free), Kraft Azalea Garden (free), Tibet-Butler Preserve (free boardwalk), Mead Botanical Garden (free), Universal CityWalk (free to walk), Lake Apopka Wildlife Drive (free for pedestrians and cyclists), and the weekly Lake Eola Farmers Market (free to attend) are all free. Orlando has more free outdoor and neighbourhood experiences than most visitors expect.' },
    },
    {
      '@type': 'Question',
      name: 'Is Disney Springs free to enter?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — Disney Springs is completely free to enter and explore. There is no theme park ticket or reservation required. Parking is free in the Lime and Orange garages for the first hour, and free all day in the overflow lots. You only pay for food, drinks, and shopping.' },
    },
    {
      '@type': 'Question',
      name: 'Are there free nature experiences near Orlando?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Tibet-Butler Preserve offers a free 0.75-mile boardwalk through Florida wetlands with alligators and birds. Lake Apopka Wildlife Drive is free for pedestrians and cyclists and is one of the best birding spots in Florida, especially October through March. Mead Botanical Garden (48 acres) and Kraft Azalea Garden in Winter Park are both free and open daily.' },
    },
    {
      '@type': 'Question',
      name: 'Which Orlando museums are free?',
      acceptedAnswer: { '@type': 'Answer', text: 'The Charles Hosmer Morse Museum of American Art in Winter Park (home to the world\'s finest Tiffany glass collection) is free on Friday evenings 4–8pm from November through April. The Orange County Regional History Center offers free admission on second Sundays. The Orlando Museum of Art is free on third Thursdays 6–9pm. Lake Eola Park and Mead Botanical Garden are always free.' },
    },
    {
      '@type': 'Question',
      name: 'What free things can families with kids do in Orlando?',
      acceptedAnswer: { '@type': 'Answer', text: 'Lake Eola Park has free playgrounds and the famous swan boats (paid, but cheap). Universal CityWalk has free street performers on weekend evenings. Disney Springs has free character sightings and live entertainment. Tibet-Butler Preserve is a fantastic free nature walk for kids curious about Florida wildlife. The Lake Eola Farmers Market on Sunday mornings is fun for families with food and crafts.' },
    },
    {
      '@type': 'Question',
      name: 'Are there free events and festivals in Orlando?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. The Lake Eola Farmers Market runs every Sunday morning and is free to attend. Monthly Milk District Art Strolls (First Fridays) are free. Walt Disney World occasionally offers free entertainment at Disney Springs on weekend evenings. The Winter Park Autumn Art Festival (March) has free admission and is one of the top art festivals in the Southeast.' },
    },
  ],
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Best Free Things to Do in Orlando (2026)',
  description: 'Top free attractions and experiences in Orlando, Florida',
  numberOfItems: 10,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Disney Springs', description: 'Free entry waterfront entertainment district with shops, restaurants, live music, and character sightings — no theme park ticket required.' },
    { '@type': 'ListItem', position: 2, name: 'Lake Eola Park', description: 'Free 0.9-mile lakefront loop with Orlando\'s iconic fountain, playgrounds, and weekend farmers market.' },
    { '@type': 'ListItem', position: 3, name: 'Universal CityWalk', description: 'Free to enter, with shops, restaurants, and street performers — no Universal park ticket needed.' },
    { '@type': 'ListItem', position: 4, name: 'Kraft Azalea Garden', description: 'Free Winter Park lakefront garden with ancient cypress trees, a Venetian loggia, and stunning lake views.' },
    { '@type': 'ListItem', position: 5, name: 'Mead Botanical Garden', description: '48 acres of Florida native plants, wetlands, and wildlife — completely free, open daily.' },
    { '@type': 'ListItem', position: 6, name: 'Tibet-Butler Preserve', description: 'Free 0.75-mile boardwalk through Florida wetlands with alligators, birds, and native plant communities.' },
    { '@type': 'ListItem', position: 7, name: 'Lake Apopka Wildlife Drive', description: 'One of Florida\'s top birding spots — free for pedestrians and cyclists, exceptional October through March.' },
    { '@type': 'ListItem', position: 8, name: 'Charles Hosmer Morse Museum', description: 'World\'s finest Tiffany glass collection — free on Friday evenings 4–8pm, November through April.' },
    { '@type': 'ListItem', position: 9, name: 'Lake Eola Farmers Market', description: 'Free Sunday morning market with local produce, crafts, food trucks, and live music around Lake Eola.' },
    { '@type': 'ListItem', position: 10, name: 'Winter Park (Park Avenue walk)', description: 'Free to explore Orlando\'s most beautiful neighbourhood — lakefront parks, boutiques, and Rollins College campus.' },
  ],
};

export default function FreeThingsToDoPage() {
  return (
    <>
      <script id="schema-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="schema-itemlist" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <FreeThingsToDoClient />
    </>
  );
}
