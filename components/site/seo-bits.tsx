import Link from "next/link";
import { LuChevronDown, LuChevronRight } from "react-icons/lu";
import type { FaqItem } from "@/content/types";
import { absoluteUrl } from "@/lib/site";

/** Renders a JSON-LD <script>. Escapes "<" so content can never break out of the tag. */
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export type Crumb = { name: string; href: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol>
          {items.map((c, i) => (
            <li key={c.href}>
              {i < items.length - 1 ? (
                <>
                  <Link href={c.href}>{c.name}</Link>
                  <LuChevronRight aria-hidden="true" />
                </>
              ) : (
                <span aria-current="page">{c.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.name,
            item: absoluteUrl(c.href),
          })),
        }}
      />
    </>
  );
}

/** Accessible FAQ accordion with zero JavaScript (native <details>). */
export function FaqList({ items, openFirst = false }: { items: FaqItem[]; openFirst?: boolean }) {
  return (
    <div className="faq-list">
      {items.map((f, i) => (
        <details key={f.q} className="faq-item" open={openFirst && i === 0}>
          <summary>
            <h3>{f.q}</h3>
            <LuChevronDown aria-hidden="true" className="faq-icon" />
          </summary>
          <div className="faq-answer">
            <p>{f.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

export function SectionHead({
  kicker,
  title,
  intro,
  as = "h2",
  align = "center",
}: {
  kicker?: string;
  title: string;
  intro?: string;
  as?: "h1" | "h2";
  align?: "center" | "left";
}) {
  const H = as;
  return (
    <div className={`section-head${align === "left" ? " is-left" : ""}`}>
      {kicker && <span className="kicker">{kicker}</span>}
      <H className={as === "h1" ? "page-title" : "section-title"}>{title}</H>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  );
}
