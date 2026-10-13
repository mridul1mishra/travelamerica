export function defaultHotelPriceStay(now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(now);
  const part = (type: string) => parts.find(p => p.type === type)!.value;
  const today = new Date(`${part("year")}-${part("month")}-${part("day")}T00:00:00Z`);
  const date = (days: number) => new Date(today.getTime() + days * 86400000).toISOString().slice(0, 10);
  return { checkIn: date(15), checkOut: date(16), adults: 1, childrenAges: [] as number[] };
}

export function hotelPriceRetryStays(stay: ReturnType<typeof defaultHotelPriceStay>) {
  return [0, 1, 2].map(offset => ({ ...stay,
    checkIn: new Date(Date.parse(stay.checkIn) + offset * 86400000).toISOString().slice(0, 10),
    checkOut: new Date(Date.parse(stay.checkOut) + offset * 86400000).toISOString().slice(0, 10),
  }));
}

export async function findHotelPriceStay<T extends { results: unknown[] }>(
  stay: ReturnType<typeof defaultHotelPriceStay>,
  lookup: (stay: ReturnType<typeof defaultHotelPriceStay>) => Promise<T | null>,
) {
  for (const [index, candidate] of hotelPriceRetryStays(stay).entries()) {
    const result = await lookup(candidate);
    if (!result) return null;
    if (result.results.length || index === 2) return { ...result, stay: candidate };
  }
  return null;
}
