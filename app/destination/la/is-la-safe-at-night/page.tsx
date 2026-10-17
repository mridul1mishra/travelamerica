import type { Metadata } from "next";
import IsLASafeAtNightClient from "./isLAsafeatnightclient";
import data from "./is-la-safe-at-night.json";

const url = "https://www.travelsamericas.com/destination/la/is-la-safe-at-night";
const title = "Is LA Safe at Night? Safest Areas & Getting Around";
const description = "Is LA safe at night? Where visitors can walk after dark, which hotel areas suit evening plans, and how to handle the Metro and rideshares.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title, description, url, type: "article", modifiedTime: data.reviewedDate,
    images: [{ url: data.heroImage, alt: "Illustration of Los Angeles landmarks and the coast at sunset" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [data.heroImage] },
};

export default function IsLASafeAtNightPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.travelsamericas.com/" },
        { "@type": "ListItem", position: 2, name: "Los Angeles", item: "https://www.travelsamericas.com/destination/la" },
        { "@type": "ListItem", position: 3, name: "Is LA Safe at Night?", item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: data.title, description, url,
      dateModified: data.reviewedDate,
      image: `https://www.travelsamericas.com${data.heroImage}`,
      inLanguage: "en-US",
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      publisher: { "@type": "Organization", name: "Travels Americas", url: "https://www.travelsamericas.com" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.faq.map(faq => ({
        "@type": "Question", name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <IsLASafeAtNightClient />
  </>;
}
