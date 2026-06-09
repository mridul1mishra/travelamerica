import type { Metadata } from 'next';
import GettingToNYCClient from './gettingtonyclient';

export const metadata: Metadata = {
  title: 'JFK, LGA & EWR to Manhattan: Airport Transfer Guide 2026',
  description: 'Cheapest JFK option costs $10.40. LaGuardia free bus. Newark train $17.85. Every NYC airport transfer compared with real 2026 prices and times.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://www.travelsamericas.com/destination/nyc/getting-to-nyc',
  },
  openGraph: {
    title: 'JFK, LGA & EWR to Manhattan: Airport Transfer Guide 2026',
    description: 'Every option from all three NYC airports with real 2026 costs and journey times.',
    url: 'https://www.travelsamericas.com/destination/nyc/getting-to-nyc',
    siteName: 'Travels Americas',
    images: [{ url: 'https://www.travelsamericas.com/social/nyc-getting-to-nyc.png' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JFK, LGA & EWR to Manhattan: Airport Transfer Guide 2026',
    description: 'Every NYC airport transport option with real 2026 prices and scam warnings.',
    images: ['https://www.travelsamericas.com/social/nyc-getting-to-nyc.png'],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'JFK, LGA & EWR to Manhattan: Airport Transfer Guide 2026',
  description: 'A complete guide to every transport option from JFK, LaGuardia, and Newark airports to Manhattan, with 2026 prices, journey times, and scam warnings.',
  author: { '@type': 'Person', name: 'Mridul' },
  publisher: { '@type': 'Organization', name: 'Travels Americas', url: 'https://www.travelsamericas.com' },
  datePublished: '2026-06-08',
  dateModified: '2026-06-08',
  mainEntityOfPage: 'https://www.travelsamericas.com/destination/nyc/getting-to-nyc',
  image: 'https://www.travelsamericas.com/social/nyc-getting-to-nyc.png',
  keywords: 'JFK to Manhattan, LaGuardia to Manhattan, Newark airport to NYC, NYC airport transfer, how to get to NYC from airport',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the cheapest way to get from JFK to Manhattan?',
      acceptedAnswer: { '@type': 'Answer', text: 'The AirTrain + subway is the cheapest at $10.40 per person (AirTrain $8.50 + subway $2.90) and takes 50-70 minutes to Midtown Manhattan.' },
    },
    {
      '@type': 'Question',
      name: 'How do I get from LaGuardia Airport to Manhattan?',
      acceptedAnswer: { '@type': 'Answer', text: 'Take the free Q70 LaGuardia Link bus to Jackson Heights subway station, then the E, F, M, or 7 train into Manhattan. Total cost is $2.90 and takes 40-60 minutes.' },
    },
    {
      '@type': 'Question',
      name: 'What is the best way to get from Newark Airport to Manhattan?',
      acceptedAnswer: { '@type': 'Answer', text: 'The NJ Transit train from Newark Airport Station to Penn Station costs $17.85 and takes 30-45 minutes -- the fastest and most reliable rail option of any NYC airport.' },
    },
    {
      '@type': 'Question',
      name: 'How much does a taxi from JFK to Manhattan cost?',
      acceptedAnswer: { '@type': 'Answer', text: 'Taxis from JFK to Manhattan charge a flat rate of $70 plus tolls and tip, totalling $85-$100. Journey time is 40-75 minutes depending on traffic.' },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to take an Uber or Lyft from a NYC airport?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes -- rideshares from JFK, LaGuardia, and Newark are safe. Always book via the official app and verify the license plate. Never accept rides from strangers approaching you in the terminal.' },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Get from a NYC Airport to Manhattan',
  description: 'Step-by-step guide to choosing and using the right transport option from JFK, LaGuardia, or Newark airport to Manhattan.',
  step: [
    { '@type': 'HowToStep', name: 'Identify your airport', text: 'Confirm whether you are arriving at JFK (Queens), LaGuardia (Queens), or Newark (New Jersey) -- each has different transport options and costs.' },
    { '@type': 'HowToStep', name: 'Choose your transfer method', text: 'For budget travel, take the subway (JFK AirTrain + subway, $10.40) or free bus (LaGuardia Q70, $2.90). For speed, book a rideshare or car service in advance.' },
    { '@type': 'HowToStep', name: 'Follow signs to the correct exit or AirTrain platform', text: 'At JFK, follow AirTrain signs from baggage claim. At LaGuardia, follow LaGuardia Link Bus Q70 signs. At Newark, follow AirTrain signs to the train station.' },
    { '@type': 'HowToStep', name: 'Avoid unofficial taxis and touts', text: 'Never accept a ride from anyone approaching you in the arrivals hall. Only use licensed yellow cabs from the official taxi queue, or rideshares booked through the app.' },
    { '@type': 'HowToStep', name: 'Pay the correct fare', text: 'JFK yellow cabs charge a flat $70 rate to Manhattan. LaGuardia and Newark cabs use the meter. All three airports have official car service flat rates available on the NYC TLC website.' },
  ],
};

export default function GettingToNYCPage() {
  return (
    <>
      <script id="schema-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="schema-howto" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <GettingToNYCClient />
    </>
  );
}
