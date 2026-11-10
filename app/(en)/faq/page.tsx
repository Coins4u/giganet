import type { Metadata } from "next";
import { FaqPage } from "@/components/site/pages";
import { getDict } from "@/content";
import { pageMetadata } from "@/lib/seo";

const locale = "en" as const;

export const metadata: Metadata = pageMetadata({ locale, path: "/faq", ...getDict(locale).faqPage.meta });

export default function Page() {
  return <FaqPage locale={locale} />;
}
