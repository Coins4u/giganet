import type { Metadata } from "next";
import { ContactPage } from "@/components/site/pages";
import { getDict } from "@/content";
import { pageMetadata } from "@/lib/seo";

const locale = "pt" as const;

export const metadata: Metadata = pageMetadata({ locale, path: "/contact", ...getDict(locale).contact.meta });

export default function Page() {
  return <ContactPage locale={locale} />;
}
