export function defaultHotelPriceStay(now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(now);
  const part = (type: string) => parts.find(p => p.type === type)!.value;
  const today = new Date(`${part("year")}-${part("month")}-${part("day")}T00:00:00Z`);
  const date = (days: number) => new Date(today.getTime() + days * 86400000).toISOString().slice(0, 10);
  return { checkIn: date(15), checkOut: date(16), adults: 1, childrenAges: [] as number[] };
}
