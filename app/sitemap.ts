import type { MetadataRoute } from "next";
import { POSTS } from "@/content/blog";
import { LOCALES, absoluteUrl, lp } from "@/lib/site";
import { languageAlternates } from "@/lib/seo";

const LOCALIZED: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, freq: "weekly" },
  { path: "/channels", priority: 0.8, freq: "weekly" },
  { path: "/guide", priority: 0.8, freq: "monthly" },
  { path: "/faq", priority: 0.8, freq: "monthly" },
  { path: "/contact", priority: 0.6, freq: "yearly" },
  { path: "/TermsConditions", priority: 0.2, freq: "yearly" },
  { path: "/privacy", priority: 0.2, freq: "yearly" },
  { path: "/RefundPolicy", priority: 0.2, freq: "yearly" },
];

const LAST_MODIFIED = new Date("2026-11-09");

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = LOCALIZED.flatMap(({ path, priority, freq }) =>
    LOCALES.map((l) => ({
      url: absoluteUrl(lp(l, path)),
      lastModified: LAST_MODIFIED,
      changeFrequency: freq,
      priority: l === "en" ? priority : Math.max(0.1, +(priority - 0.1).toFixed(1)),
      alternates: { languages: languageAlternates(path) },
    })),
  );

  const blog: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/blog"), lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 0.7 },
    ...POSTS.map((p) => ({
      url: absoluteUrl(`/blog/${p.slug}`),
      lastModified: new Date(p.updated),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return [...pages, ...blog];
}
