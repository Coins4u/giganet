import type { Metadata } from "next";
import HomePage from "@/components/site/HomePage";
import { getDict } from "@/content";
import { pageMetadata } from "@/lib/seo";

const locale = "en" as const;

export const metadata: Metadata = pageMetadata({ locale, path: "/", ...getDict(locale).home.meta });

export default function Page() {
  return <HomePage locale={locale} />;
}
