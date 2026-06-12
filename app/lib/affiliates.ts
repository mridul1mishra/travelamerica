// Affiliate link config — set the real referral URLs in Vercel env vars.
// NEXT_PUBLIC_ prefix is required: these render inside client components.
// Fallbacks are plain (non-affiliate) URLs so links still work if unset.

export const SAFETYWING_URL =
  process.env.NEXT_PUBLIC_SAFETYWING_URL ||
  "https://safetywing.com/nomad-insurance/";

export const AIRALO_URL =
  process.env.NEXT_PUBLIC_AIRALO_URL || "https://www.airalo.com/";
