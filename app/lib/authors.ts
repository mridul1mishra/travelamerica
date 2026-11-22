// Single source of truth for who writes and reviews the guides.
// The @id values match the Person entities declared on the About page, so
// every page's structured data points at the same people.
export type AuthorKey = "mridul" | "manisha";

export const AUTHORS: Record<
  AuthorKey,
  { name: string; role: string; id: string; url: string; href: string }
> = {
  mridul: {
    name: "Mridul Mishra",
    role: "Founder & Editor",
    id: "https://www.travelsamericas.com/#founder",
    url: "https://www.travelsamericas.com/about",
    href: "/about",
  },
  manisha: {
    name: "Manisha Shukla",
    role: "Travel Writer",
    id: "https://www.travelsamericas.com/#manisha-shukla",
    url: "https://www.travelsamericas.com/about#manisha-shukla",
    href: "/about#manisha-shukla",
  },
};

export function personSchema(key: AuthorKey) {
  const a = AUTHORS[key];
  return { "@type": "Person", "@id": a.id, name: a.name, url: a.url, jobTitle: a.role };
}

// Default: Mridul Mishra writes, Manisha Shukla reviews. Pass the keys the
// other way round for the pages where Manisha is the author.
export function authorshipSchema(author: AuthorKey = "mridul", reviewer: AuthorKey = "manisha") {
  return { author: personSchema(author), reviewedBy: personSchema(reviewer) };
}

// A WebPage node carrying the freshness and authorship signals. WebPage is a
// CreativeWork, so dateModified and author are valid on it; Article is not used
// here because these are guide and listing pages, not news or blog posts.
export function pageSchema(opts: {
  name: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  author?: AuthorKey;
  reviewer?: AuthorKey;
}) {
  return {
    "@type": "WebPage",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    inLanguage: "en-US",
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    ...authorshipSchema(opts.author ?? "mridul", opts.reviewer ?? "manisha"),
    publisher: {
      "@type": "Organization",
      name: "Travels Americas",
      url: "https://www.travelsamericas.com",
      logo: { "@type": "ImageObject", url: "https://www.travelsamericas.com/logo.png" },
    },
    isPartOf: { "@type": "WebSite", name: "Travels Americas", url: "https://www.travelsamericas.com" },
  };
}
