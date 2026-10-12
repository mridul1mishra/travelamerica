import assert from 'node:assert/strict';
import test from 'node:test';
import { loadTypescriptModule } from './load-typescript-module.mjs';
const { defaultHotelPriceStay } = await loadTypescriptModule('../../app/lib/hotel-price-stay.ts');

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
