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
