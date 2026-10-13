import assert from 'node:assert/strict';
import test from 'node:test';
import { loadTypescriptModule } from './load-typescript-module.mjs';
const { defaultHotelPriceStay, findHotelPriceStay } = await loadTypescriptModule('../../app/lib/hotel-price-stay.ts');

test('uses New York calendar date plus 15 days and one night for one adult', () => {
  assert.deepEqual(defaultHotelPriceStay(new Date('2026-10-12T18:00:00Z')), {
    checkIn: '2026-10-27', checkOut: '2026-10-28', adults: 1, childrenAges: [],
  });
  assert.equal(defaultHotelPriceStay(new Date('2026-10-13T02:00:00Z')).checkIn, '2026-10-27');
});

test('crosses month, year and daylight saving boundaries by calendar day', () => {
  assert.equal(defaultHotelPriceStay(new Date('2026-12-25T18:00:00Z')).checkIn, '2027-01-09');
  assert.equal(defaultHotelPriceStay(new Date('2026-10-25T18:00:00Z')).checkIn, '2026-11-09');
});

test('retries empty results on the next two dates, stopping at the first price', async () => {
  const stay = defaultHotelPriceStay(new Date('2026-12-16T18:00:00Z'));
  const attempts = [];
  const result = await findHotelPriceStay(stay, async candidate => {
    attempts.push(candidate);
    return { results: attempts.length === 3 ? [{ nightly: '$100' }] : [] };
  });
  assert.equal(attempts.length, 3);
  assert.equal(result.stay.checkIn, '2027-01-02');
  assert.equal(result.stay.checkOut, '2027-01-03');
  assert.ok(attempts.every(s => s.adults === 1));
  let calls = 0;
  await findHotelPriceStay(stay, async () => { calls++; return { results: [{ nightly: '$100' }] }; });
  assert.equal(calls, 1);
});

test('stops after two empty retries and does not retry limits, cache misses or failures', async () => {
  const stay = defaultHotelPriceStay();
  let calls = 0;
  const result = await findHotelPriceStay(stay, async () => { calls++; return { results: [] }; });
  assert.equal(calls, 3);
  assert.deepEqual(result.results, []);
  calls = 0;
  assert.equal(await findHotelPriceStay(stay, async () => { calls++; return null; }), null);
  assert.equal(calls, 1);
  await assert.rejects(findHotelPriceStay(stay, async () => { throw new Error('provider failure'); }));
});
