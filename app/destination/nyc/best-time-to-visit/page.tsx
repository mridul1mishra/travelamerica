import type { Metadata } from 'next';
import BestTimeToVisitClient from './besttimetovisitclient';

export const metadata: Metadata = {
  title: 'Best Time to Visit NYC 2026: Weather, Crowds & Costs',
  description: 'Best months: April-May and Sep-Oct. Month-by-month NYC weather, crowd levels, and hotel prices so you book at the right time in 2026.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://www.travelsamericas.com/destination/nyc/best-time-to-visit',
  },
  openGraph: {
    title: 'Best Time to Visit NYC 2026: Weather, Crowds & Costs',
    description: 'Month-by-month guide to New York City -- when to go, when to avoid, and what each season costs.',
    url: 'https://www.travelsamericas.com/destination/nyc/best-time-to-visit',
    siteName: 'Travels Americas',
    images: [{ url: 'https://www.travelsamericas.com/social/nyc-best-time-to-visit.png' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Time to Visit NYC 2026: Month-by-Month Weather, Crowds & Costs',
    description: 'April-May and Sep-Oct are NYC sweet spots. Full month-by-month breakdown inside.',
    images: ['https://www.travelsamericas.com/social/nyc-best-time-to-visit.png'],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Time to Visit NYC 2026: Weather, Crowds & Costs',
  description: 'A month-by-month guide to visiting New York City, covering weather, crowd levels, hotel prices, and the major events to plan around.',
  author: { '@type': 'Person', name: 'Mridul' },
  publisher: { '@type': 'Organization', name: 'Travels Americas', url: 'https://www.travelsamericas.com' },
  datePublished: '2026-06-08',
  dateModified: '2026-06-08',
  mainEntityOfPage: 'https://www.travelsamericas.com/destination/nyc/best-time-to-visit',
  image: 'https://www.travelsamericas.com/social/nyc-best-time-to-visit.png',
  keywords: 'best time to visit NYC, best month to visit New York City, NYC weather by month, when to visit New York, cheapest time to visit NYC',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best month to visit New York City?',
      acceptedAnswer: { '@type': 'Answer', text: 'April-May and September-October are the best months. Temperatures are mild (15-22C), crowds are manageable, and hotel rates run 20-30% below summer peak. May is the single best month for a first-time visitor.' },
    },
    {
      '@type': 'Question',
      name: 'What is the cheapest time to visit NYC?',
      acceptedAnswer: { '@type': 'Answer', text: 'January and February are the cheapest months, with hotel rates 30-40% below summer peak. The city is cold but fully operational, less crowded, and great for museum visits and indoor dining.' },
    },
    {
      '@type': 'Question',
      name: 'What month should you avoid visiting NYC?',
      acceptedAnswer: { '@type': 'Answer', text: 'Late July and August bring peak crowds, humidity, and the highest hotel prices of the year. The week between Christmas and New Year is also heavily crowded with a sharp hotel price spike.' },
    },
    {
      '@type': 'Question',
      name: 'Is New York City good to visit in winter?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes -- December has Christmas markets and a festive atmosphere, while January and February offer the lowest prices and fewest tourists. Pack layers; temperatures regularly drop below freezing.' },
    },
    {
      '@type': 'Question',
      name: 'What is New York City like in fall?',
      acceptedAnswer: { '@type': 'Answer', text: 'September and October are ideal: warm days (15-22C), cool evenings, NYC Marathon in early November, and autumn foliage in Central Park from late October. Hotel rates are competitive and crowds thinner than summer.' },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Choose the Best Time to Visit NYC',
  description: 'A step-by-step approach to picking the right season and month for your New York City trip based on budget, weather, and travel style.',
  step: [
    { '@type': 'HowToStep', name: 'Decide your top priority', text: 'Choose whether budget, weather, crowd size, or a specific event matters most. Budget travelers should target January-February. Weather-focused travelers should aim for April-May or September-October.' },
    { '@type': 'HowToStep', name: 'Check for major events in your target month', text: 'NYC Marathon (first Sunday in November), New Year\'s Eve, and Pride (late June) all drive hotel prices up significantly. Book 3-6 months ahead if visiting during these periods.' },
    { '@type': 'HowToStep', name: 'Compare hotel prices 3 months out', text: 'Search your target dates on Google Hotels or Kayak with the flexible date view. If rates are more than 30% above the monthly average, consider shifting your trip by 1-2 weeks.' },
    { '@type': 'HowToStep', name: 'Pack for the season', text: 'NYC summers are hot and humid (28-33C); winters are cold and windy (-5 to 5C). Spring and fall are the most comfortable but bring a light rain jacket.' },
    { '@type': 'HowToStep', name: 'Book accommodation early for peak periods', text: 'Summer (June-August), Thanksgiving week, and the holiday period (Dec 26-Jan 2) sell out fast. Aim to book hotels 2-3 months ahead for these windows.' },
  ],
};

export default function BestTimeToVisitPage() {
  return (
    <>
      <script id="schema-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="schema-howto" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <BestTimeToVisitClient />
    </>
  );
}
