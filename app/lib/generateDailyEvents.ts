export function generateDailyEvents({
  name,
  description,
  baseImage,
  organizerName,
  organizerUrl,
  days = 7,
  startHour = 19,
  durationHours = 3
}) {
  const today = new Date();

  // Helper to format ISO without milliseconds
  const formatISO = (date: Date) => {
    const iso = date.toISOString();
    return iso.split('.')[0] + 'Z'; // trims milliseconds
  };

  return Array.from({ length: days }, (_, i) => {
    const start = new Date(today);
    start.setDate(start.getDate() + i);
    start.setHours(startHour, 0, 0, 0);

    const end = new Date(start);
    end.setHours(start.getHours() + durationHours);

    return {
      "@type": "Event",
      name,
      description,
      eventStatus: "https://schema.org/EventScheduled",
      image: [baseImage],
      location: {
        "@type": "Place",
        name: "Pier 81, Hudson River",
        address: {
          "@type": "PostalAddress",
          streetAddress: "West 41st Street & 12th Avenue",
          addressLocality: "New York",
          addressRegion: "NY",
          postalCode: "10036",
          addressCountry: "US"
        }
      },
      organizer: {
        "@type": "Organization",
        name: organizerName,
        url: organizerUrl
      },
      performer: { "@type": "MusicGroup", name: "NYC Jazz Ensemble" },
      offers: {
        "@type": "Offer",
        url: "https://www.travelamerica.work/book/hudson-river-cruise",
        price: "120.00",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
      startDate: formatISO(start),
      endDate: formatISO(end),
      position: i + 1
    };
  });
}
