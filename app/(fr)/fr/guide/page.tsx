import type { Metadata } from "next";
import { GuidePage } from "@/components/site/pages";
import { getDict } from "@/content";
import { pageMetadata } from "@/lib/seo";

const locale = "fr" as const;

export const metadata: Metadata = pageMetadata({ locale, path: "/guide", ...getDict(locale).guide.meta });

export default function Page() {
  return <GuidePage locale={locale} />;
}
