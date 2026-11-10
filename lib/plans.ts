/**
 * Listed plan prices. DOM order matters for the order modal / SELLAPP_TIERS:
 * standard 1/3/6/12 months, then premium 1/3/6/12 months.
 */
export const STANDARD_PRICES = ["€13.67", "€25.49", "€37.78", "€49.56"] as const;
export const PREMIUM_PRICES = ["€23.12", "€35.53", "€45.79", "€67.48"] as const;

/** Index (0-3) of the highlighted plan in each tier. */
export const STANDARD_FEATURED = 3;
export const PREMIUM_FEATURED = 1;

export const MONTHS = [1, 3, 6, 12] as const;

export function priceNumber(p: string): number {
  return Number(p.replace(/[^\d.]/g, ""));
}
