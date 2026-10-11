export const legacyTierModel = {
  version: 1,
  dimensions: [
    { key: 'rooms', name: 'Rooms and bathrooms', weight: 30, rubric: [
      'Confirmed minimal room and bathroom provision.',
      'Practical furnishings and a functional private bathroom; essential comfort.',
      'Documented upgrades to bedding, furnishings or bathroom fixtures beyond the essential offering.',
      'Multiple documented high-quality room features: refined materials, upgraded bedding and well-appointed bathrooms.',
      'Exceptional accommodation documented across the regular room offering, with distinguishing space, materials and bathroom features.'
    ] },
    { key: 'guestService', name: 'Guest service', weight: 30, rubric: [
      'Confirmed minimal assistance, such as primarily self-service accommodation.',
      'Reception and basic housekeeping or guest assistance.',
      'Additional services such as luggage assistance, laundry coordination or limited dining delivery.',
      'A broad service offering with staffed concierge, regular housekeeping and in-room dining or comparable guest support.',
      'Documented individually tailored assistance, such as dedicated personal concierge or butler service, beyond routine booking help.'
    ] },
    { key: 'dining', name: 'Dining', weight: 15, rubric: [
      'Confirmed absence of a property-operated dining offering.',
      'Breakfast, snacks or a basic café offering.',
      'An on-site restaurant or substantial bar menu with documented service hours.',
      'Multiple distinct dining offerings or extensive meal coverage with in-room dining.',
      'Distinguishing culinary experiences plus extensive dining service; supported by menus, venues and service details.'
    ] },
    { key: 'wellness', name: 'Wellness and facilities', weight: 15, rubric: [
      'Confirmed absence of guest fitness, wellness or other relevant facilities.',
      'Basic fitness equipment or confirmed access to an external fitness facility.',
      'An equipped on-site fitness center or a broader documented guest-facility offering.',
      'Equipped fitness plus substantive additional facilities, such as a pool or staffed treatment offering.',
      'An extensive documented wellness offering combining equipped fitness, staffed treatments and distinguishing facilities or tailored programs.'
    ] },
    { key: 'design', name: 'Design and finish', weight: 10, rubric: [
      'Confirmed minimal design and finish provision.',
      'Functional, conventional rooms and common spaces.',
      'A documented coordinated design with upgraded finishes.',
      'Distinctive, detailed design and high-quality finishes across rooms and shared spaces.',
      'Exceptional craftsmanship or bespoke materials across the property, supported by specific documented details.'
    ] },
  ],
  thresholds: { premium: 50, luxury: 75 },
  luxuryMinimums: { rooms: 3, guestService: 3 },
  missingEvidence: 'Unknown; never zero. All five dimensions require evidence before a tier is calculated.',
  scope: 'Assess the regular property-wide offering. Suite-only or special-floor benefits do not upgrade the whole hotel. Separately listed hotel-within-a-hotel inventory may be assessed separately.',
};

export const tierModel = {
  ...legacyTierModel,
  version: 2,
  missingEvidence: 'Unknown; never zero. Exclude missing dimensions from the denominator and label partial assessments provisional.',
  calculation: 'Score = sum(known dimension score / 4 * weight) / sum(known dimension weights) * 100. Evidence coverage is the sum of included weights out of 100.',
  partialAssessment: 'Partial scores and tiers are provisional. Luxury still requires evidenced rooms and guestService scores of at least 3 each.',
};

export function calculateTier(scores, { requireComplete = false } = {}) {
  const weights = { rooms: 30, guestService: 30, dining: 15, wellness: 15, design: 10 };
  const entries = Object.entries(weights);
  const known = entries.filter(([key]) => Number.isInteger(scores[key]) && scores[key] >= 0 && scores[key] <= 4);
  const evidenceCoverage = known.reduce((sum, [, weight]) => sum + weight, 0);
  const isProvisional = known.length < entries.length;
  const metadata = { evidenceCoverage, scoredDimensions: known.length, isProvisional };
  if (entries.some(([key]) => scores[key] != null && (!Number.isInteger(scores[key]) || scores[key] < 0 || scores[key] > 4))) {
    return { ...metadata, score: null, tier: null, reason: 'Invalid dimension score; use an integer from 0 to 4 or null.' };
  }
  if (!evidenceCoverage || (requireComplete && isProvisional)) {
    return { ...metadata, score: null, tier: null, reason: evidenceCoverage ? 'Awaiting complete evidence and scoring' : 'No evidenced dimensions available for scoring.' };
  }
  const weightedPoints = known.reduce((sum, [key, weight]) => sum + scores[key] / 4 * weight, 0);
  const score = weightedPoints * 100 / evidenceCoverage;
  const luxuryEligible = scores.rooms >= 3 && scores.guestService >= 3;
  const tier = score < 50 ? 'Standard' : score >= 75 && luxuryEligible ? 'Luxury' : 'Premium';
  const reason = score >= 75 && !luxuryEligible ? 'Premium: Luxury requires evidenced rooms and guest service scores of at least 3/4 each.' : isProvisional ? 'Calculated from available dimensions, normalized by their combined weight.' : 'Calculated from the five weighted dimensions.';
  return { ...metadata, score, tier, reason: (isProvisional ? 'Provisional assessment. ' : '') + reason };
}
