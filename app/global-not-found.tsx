import type { Metadata } from "next";
import Link from "next/link";
import RootShell from "@/components/site/RootShell";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";

export const metadata: Metadata = {
  title: "Page not found | GiGa FliX IPTV",
  robots: { index: false, follow: true },
};

export default function GlobalNotFound() {
  return (
    <RootShell lang="en">
      <SiteHeader locale="en" />
      <main id="main" className="section not-found">
        <div className="container narrow center">
          <span className="kicker">404</span>
          <h1 className="page-title">This page isn&apos;t on air</h1>
          <p className="section-intro">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
          <div className="hero-ctas center-row">
            <Link href="/" className="btn btn-primary">Back to home</Link>
            <Link href="/faq" className="btn btn-ghost">Visit the FAQ</Link>
          </div>
        </div>
      </main>
      <SiteFooter locale="en" />
    </RootShell>
  );
}
