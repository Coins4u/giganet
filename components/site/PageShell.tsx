import type { Locale } from "@/lib/site";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import { Breadcrumbs, SectionHead, type Crumb } from "./seo-bits";

type Props = {
  locale: Locale;
  path: string;
  active?: React.ComponentProps<typeof SiteHeader>["active"];
  localized?: boolean;
  crumbs: Crumb[];
  kicker?: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
};

/** Standard inner page: header, hero with breadcrumbs + H1, content, footer. */
export default function PageShell({
  locale,
  path,
  active,
  localized = true,
  crumbs,
  kicker,
  title,
  intro,
  children,
}: Props) {
  return (
    <>
      <SiteHeader locale={locale} path={path} active={active} localized={localized} />
      <main id="main">
        <section className="page-hero">
          <div className="hero-glow" aria-hidden="true" />
          <div className="container">
            <Breadcrumbs items={crumbs} />
            <SectionHead as="h1" kicker={kicker} title={title} intro={intro} />
          </div>
        </section>
        {children}
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
