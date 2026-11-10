import type { Metadata } from "next";
import { BRAND, LOCALES, OG_LOCALE, SITE_URL, absoluteUrl, lp, type Locale } from "./site";

export const OG_IMAGE = `${SITE_URL}/img/og-image.png`;

/** hreflang map for a path that exists in every locale. */
export function languageAlternates(path: string): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[l] = absoluteUrl(lp(l, path));
  languages["x-default"] = absoluteUrl(lp("en", path));
  return languages;
}

type PageMetaInput = {
  locale: Locale;
  /** Locale-neutral path, e.g. "/", "/guide" */
  path: string;
  title: string;
  description: string;
  /** Set false for pages that only exist in English (blog). */
  localized?: boolean;
  type?: "website" | "article";
  noindex?: boolean;
};

export function pageMetadata({
  locale,
  path,
  title,
  description,
  localized = true,
  type = "website",
  noindex = false,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(lp(locale, path));
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: url,
      ...(localized ? { languages: languageAlternates(path) } : {}),
    },
    openGraph: {
      type,
      url,
      siteName: BRAND,
      title,
      description,
      locale: OG_LOCALE[locale],
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${BRAND} IPTV` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
    robots: noindex ? { index: false, follow: true } : { index: true, follow: true },
  };
}
