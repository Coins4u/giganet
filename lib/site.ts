/**
 * Site-wide constants and locale helpers.
 */
export const SITE_URL = "https://gigaflixiptv.net";
export const BRAND = "GiGa FliX";
export const BRAND_FULL = "GiGa FliX IPTV";
export const SUPPORT_EMAIL = "support@gigaflixiptv.com";
export const WHATSAPP_URL = "https://wa.me/17624385265";

export const LOCALES = ["en", "de", "fr", "it", "nl", "pt"] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_NAMES: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  fr: "Français",
  it: "Italiano",
  nl: "Nederlands",
  pt: "Português",
};

export const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  de: "de_DE",
  fr: "fr_FR",
  it: "it_IT",
  nl: "nl_NL",
  pt: "pt_PT",
};

/** Currency passed to the order modal (kept as before: USD on EN, EUR elsewhere). */
export const ORDER_CURRENCY: Record<Locale, "usd" | "eur"> = {
  en: "usd",
  de: "eur",
  fr: "eur",
  it: "eur",
  nl: "eur",
  pt: "eur",
};

/**
 * Locale-aware path. `lp("de", "/guide")` → "/de/guide", `lp("en", "/")` → "/".
 * Hash-only suffixes are kept: `lp("fr", "/#pricing")` → "/fr#pricing".
 */
export function lp(locale: Locale, path: string = "/"): string {
  const [base, hash] = path.split("#");
  const clean = base === "/" || base === "" ? "" : base;
  const prefix = locale === "en" ? "" : `/${locale}`;
  const out = `${prefix}${clean}` || "/";
  return hash !== undefined ? `${out === "/" && prefix ? prefix : out}#${hash}` : out;
}

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path === "/" ? "/" : path}`;
}
