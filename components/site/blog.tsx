import Link from "next/link";
import { LuArrowRight, LuClock, LuCalendar, LuLightbulb, LuMessageCircle } from "react-icons/lu";
import { POSTS, type Block, type Post } from "@/content/blog";
import { BRAND_FULL, SITE_URL, WHATSAPP_URL, absoluteUrl } from "@/lib/site";
import { OG_IMAGE } from "@/lib/seo";
import { siteLogoAbsoluteUrl } from "@/lib/site-images";
import PageShell from "./PageShell";
import CtaBand from "./CtaBand";
import { FaqList, JsonLd, faqSchema } from "./seo-bits";

const fmt = (iso: string) =>
  new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="card post-card">
      <span className="post-cat">{post.category}</span>
      <h2>{post.title}</h2>
      <p>{post.excerpt}</p>
      <span className="post-meta">
        <LuClock aria-hidden="true" /> {post.readMinutes} min read
      </span>
      <span className="text-link">
        Read article <LuArrowRight aria-hidden="true" />
      </span>
    </Link>
  );
}

export function BlogIndexPage() {
  return (
    <PageShell
      locale="en"
      path="/blog"
      active="blog"
      localized={false}
      crumbs={[
        { name: "Home", href: "/" },
        { name: "Blog", href: "/blog" },
      ]}
      kicker="GiGa FliX Blog"
      title="IPTV Guides, Tips & Tutorials"
      intro="Practical, jargon-free articles to help you get the most out of IPTV – from first setup to fixing buffering and choosing the right plan."
    >
      <section className="section pt-0">
        <div className="container">
          <div className="card-grid cols-3">
            {POSTS.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "GiGa FliX IPTV Blog",
          url: absoluteUrl("/blog"),
          blogPost: POSTS.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            url: absoluteUrl(`/blog/${p.slug}`),
            datePublished: p.date,
            dateModified: p.updated,
          })),
        }}
      />
    </PageShell>
  );
}

function renderBlock(b: Block, i: number) {
  switch (b.type) {
    case "p":
      return <p key={i}>{b.text}</p>;
    case "h2":
      return <h2 key={i}>{b.text}</h2>;
    case "h3":
      return <h3 key={i}>{b.text}</h3>;
    case "ul":
      return (
        <ul key={i}>
          {b.items.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={i}>
          {b.items.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ol>
      );
    case "tip":
      return (
        <aside key={i} className="callout">
          <LuLightbulb aria-hidden="true" />
          <p>{b.text}</p>
        </aside>
      );
  }
}

export function BlogPostPage({ post }: { post: Post }) {
  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  const url = absoluteUrl(`/blog/${post.slug}`);
  return (
    <PageShell
      locale="en"
      path={`/blog/${post.slug}`}
      active="blog"
      localized={false}
      crumbs={[
        { name: "Home", href: "/" },
        { name: "Blog", href: "/blog" },
        { name: post.title, href: `/blog/${post.slug}` },
      ]}
      kicker={post.category}
      title={post.title}
    >
      <section className="section pt-0">
        <div className="container narrow">
          <p className="post-byline">
            <span>
              <LuCalendar aria-hidden="true" /> Updated {fmt(post.updated)}
            </span>
            <span>
              <LuClock aria-hidden="true" /> {post.readMinutes} min read
            </span>
            <span>By the GiGa FliX team</span>
          </p>
          <article className="card article prose">
            {post.blocks.map(renderBlock)}
            {post.faq && (
              <>
                <h2>FAQ</h2>
                <FaqList items={post.faq} />
              </>
            )}
            <div className="article-cta">
              <Link href="/#pricing" className="btn btn-primary">
                See IPTV plans <LuArrowRight aria-hidden="true" />
              </Link>
              <Link href="/guide" className="btn btn-ghost">
                Setup guide
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Keep reading</h2>
          <div className="card-grid cols-3">
            {related.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Questions about IPTV?"
        text="Our team answers 24/7 – and helps you set up any device."
        primary={{ href: WHATSAPP_URL, label: "Chat on WhatsApp", external: true, icon: <LuMessageCircle aria-hidden="true" /> }}
        secondary={{ href: "/faq", label: "Read the FAQ" }}
      />

      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            image: OG_IMAGE,
            datePublished: post.date,
            dateModified: post.updated,
            mainEntityOfPage: url,
            url,
            inLanguage: "en",
            author: { "@type": "Organization", name: BRAND_FULL, url: `${SITE_URL}/` },
            publisher: {
              "@type": "Organization",
              name: BRAND_FULL,
              logo: { "@type": "ImageObject", url: siteLogoAbsoluteUrl },
            },
          },
          ...(post.faq ? [faqSchema(post.faq)] : []),
        ]}
      />
    </PageShell>
  );
}
