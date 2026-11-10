import type { Metadata } from "next";
import { BlogIndexPage } from "@/components/site/blog";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  locale: "en",
  path: "/blog",
  localized: false,
  title: "IPTV Blog – Setup Guides, Tips & Buffering Fixes | GiGa FliX IPTV",
  description:
    "Practical IPTV guides from GiGa FliX: what IPTV is, how to set it up on any device, fix buffering, M3U vs Xtream Codes, internet speed and how to choose a provider.",
});

export default function Page() {
  return <BlogIndexPage />;
}
