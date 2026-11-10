import type { Metadata } from "next";
import { ChannelsPage } from "@/components/site/pages";
import { getDict } from "@/content";
import { pageMetadata } from "@/lib/seo";

const locale = "pt" as const;

export const metadata: Metadata = pageMetadata({ locale, path: "/channels", ...getDict(locale).channels.meta });

export default function Page() {
  return <ChannelsPage locale={locale} />;
}
