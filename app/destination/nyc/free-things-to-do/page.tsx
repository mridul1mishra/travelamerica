import type { Metadata } from 'next';
import FreeThingsToDoClient from './freethingstodoclient';

export const metadata: Metadata = {
  title: 'Free Things to Do in NYC 2026: Parks, Museums & Events',
  description: 'Central Park, Staten Island Ferry, Brooklyn Bridge, free museum hours, and seasonal concerts -- a full NYC day for under $15. Complete 2026 guide.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://www.travelsamericas.com/destination/nyc/free-things-to-do',
  },
  openGraph: {
    title: 'Free Things to Do in NYC 2026: Parks, Museums & Events',
    description: 'A complete guide to free NYC experiences -- iconic landmarks, museum free hours, parks, neighbourhood walks, and seasonal events that cost nothing.',
    url: 'https://www.travelsamericas.com/destination/nyc/free-things-to-do',
    siteName: 'Travels Americas',
    images: [{ url: 'https://www.travelsamericas.com/social/nyc-free-things-to-do.png' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Things to Do in NYC 2026 -- Complete Guide',
    description: 'Parks, free museums, Brooklyn Bridge, Staten Island Ferry, and seasonal events. A full day under $15.',
    images: ['https://www.travelsamericas.com/social/nyc-free-things-to-do.png'],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Free Things to Do in NYC 2026: Parks, Museums & Events',
  description: 'A complete guide to free things to do in New York City, including parks, free museum hours, iconic landmarks, neighbourhood walks, and seasonal events.',
  author: { '@type': 'Person', name: 'Mridul' },
  publisher: { '@type': 'Organization', name: 'Travels Americas', url: 'https://www.travelsamericas.com' },
  datePublished: '2026-06-08',
  dateModified: '2026-06-08',
  mainEntityOfPage: 'https://www.travelsamericas.com/destination/nyc/free-things-to-do',
  image: 'https://www.travelsamericas.com/social/nyc-free-things-to-do.png',
  keywords: 'free things to do in NYC, free NYC attractions, NYC free museums, free New York City activities, Staten Island Ferry, Central Park free',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What can you do for free in New York City?',
      acceptedAnswer: { '@type': 'Answer', text: 'Central Park (843 acres, free entry), Staten Island Ferry (free 24/7), Brooklyn Bridge pedestrian walkway (free), the High Line, Governors Island (free weekdays), Bushwick Collective street art, Bryant Park, and dozens of seasonal outdoor concerts are all completely free.' },
    },
    {
      '@type': 'Question',
      name: 'Which NYC museums are free?',
      acceptedAnswer: { '@type': 'Answer', text: 'MoMA PS1 is free for all visitors (as of January 2026). The National Museum of the American Indian and American Folk Art Museum are always free. MoMA is free for NY State residents on Friday evenings (4-8pm); the Whitney is free on Friday evenings and second Sundays; Brooklyn Museum is free on first Saturdays (5-11pm).' },
    },
    {
      '@type': 'Question',
      name: 'Is the Staten Island Ferry really free?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes -- completely free in both directions, 24/7, 365 days a year. The 25-minute crossing gives unobstructed views of the Statue of Liberty and lower Manhattan skyline. Departs from Whitehall Terminal every 30 minutes.' },
    },
    {
      '@type': 'Question',
      name: 'Can you visit Central Park for free?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes -- the entire 843-acre park is free to enter and explore. Free activities include Shakespeare in the Park (summer), SummerStage concerts, outdoor yoga, and guided walking tours by the Central Park Conservancy on weekends.' },
    },
    {
      '@type': 'Question',
      name: 'Are there free concerts in NYC?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes -- summer is exceptional. SummerStage runs free concerts across all five boroughs. Bryant Park shows free outdoor films Monday evenings. The NYC Philharmonic and Metropolitan Opera both perform free in parks in July. Shakespeare in the Park at the Delacorte Theater is free (tickets released online 7 days ahead).' },
    },
    {
      '@type': 'Question',
      name: 'What free things can I do on a rainy day in NYC?',
      acceptedAnswer: { '@type': 'Answer', text: 'The NYC Public Library main branch on 42nd Street (free WiFi, stunning Beaux-Arts architecture), Grand Central Terminal, Chelsea Market, museum free hours, and most covered food halls are all free and weather-proof.' },
    },
  ],
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Best Free Things to Do in NYC (2026)',
  description: 'Top free attractions and experiences in New York City',
  numberOfItems: 10,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Staten Island Ferry', description: 'Free 24/7 harbour crossing with Statue of Liberty and skyline views from the water.' },
    { '@type': 'ListItem', position: 2, name: 'Central Park', description: 'Free entry to all 843 acres, including Bethesda Fountain, the Ramble, and Conservatory Garden.' },
    { '@type': 'ListItem', position: 3, name: 'Brooklyn Bridge Walk', description: 'Free pedestrian walkway with elevated views of both the Manhattan and Brooklyn skylines.' },
    { '@type': 'ListItem', position: 4, name: 'The High Line', description: 'Free elevated park on a former railway with public art, gardens, and Hudson River views.' },
    { '@type': 'ListItem', position: 5, name: 'MoMA PS1', description: 'Free contemporary art museum in Long Island City (free for all visitors as of January 2026).' },
    { '@type': 'ListItem', position: 6, name: 'Brooklyn Museum First Saturdays', description: 'Free museum access with live music and dancing on the first Saturday of every month (5-11pm).' },
    { '@type': 'ListItem', position: 7, name: 'Governors Island', description: 'Free weekday ferry and park access from May to October, with art installations and city views.' },
    { '@type': 'ListItem', position: 8, name: 'Bushwick Collective', description: 'Free open-air street art museum across dozens of city blocks in Brooklyn.' },
    { '@type': 'ListItem', position: 9, name: 'NYC Public Library Main Branch', description: 'Free entry to one of NYC\'s most beautiful Beaux-Arts buildings with exhibitions and reading rooms.' },
    { '@type': 'ListItem', position: 10, name: 'SummerStage Concerts', description: 'Free outdoor concerts across all five boroughs from June to September, flagship in Central Park.' },
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
