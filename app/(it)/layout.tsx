import type { Metadata } from "next";
import RootShell, { siteViewport } from "@/components/site/RootShell";
import { SITE_URL } from "@/lib/site";

export const viewport = siteViewport;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "GiGa FliX IPTV",
  formatDetection: { telephone: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="it">{children}</RootShell>;
}
