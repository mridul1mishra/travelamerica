export const metadata = {
  title: 'Things to Do in Orlando 2026 | Theme Parks, Day Trips & More',
  description: 'Best things to do in Orlando — Walt Disney World vs Universal, water parks, Kennedy Space Center, natural springs, and day trips to Florida beaches.',
  alternates: { canonical: 'https://www.travelsamericas.com/destination/orlando/things-to-do' },
  openGraph: { title: 'Things to Do in Orlando 2026', description: 'Theme parks, day trips, springs, and what to do in Orlando beyond the rides.', url: 'https://www.travelsamericas.com/destination/orlando/things-to-do', type: 'article' },
};
import { authorshipSchema } from "@/app/lib/authors";
import OrlandoThingsToDoClient from './orlandothingstodoclient';

export default function OrlandoThingsToDoPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
        { "@type": "ListItem", "position": 2, "name": "Orlando", "item": "https://www.travelsamericas.com/destination/orlando" },
        { "@type": "ListItem", "position": 3, "name": "Things to Do", "item": "https://www.travelsamericas.com/destination/orlando/things-to-do" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Things to Do in Orlando 2026 | Theme Parks, Day Trips & More",
      "description": "Best things to do in Orlando — Walt Disney World vs Universal, water parks, Kennedy Space Center, natural springs, and day trips to Florida beaches.",
      "url": "https://www.travelsamericas.com/destination/orlando/things-to-do",
      "inLanguage": "en-US",
      "dateModified": "2026-11-22",
      ...authorshipSchema("manisha", "mridul"),
      "publisher": { "@type": "Organization", "name": "Travels Americas", "url": "https://www.travelsamericas.com" },
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <OrlandoThingsToDoClient />
    </>
  );
}
