import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  LuTv,
  LuFilm,
  LuServer,
  LuMonitorPlay,
  LuMonitor,
  LuHeadset,
  LuCircleCheck,
  LuArrowRight,
  LuStar,
  LuQuote,
  LuListChecks,
  LuCreditCard,
  LuLogIn,
  LuTrophy,
  LuNewspaper,
  LuSparkles,
  LuBaby,
  LuMusic,
  LuGlobe,
  LuMessageCircle,
} from "react-icons/lu";
import { getDict } from "@/content";
import { POSTS } from "@/content/blog";
import { BRAND_FULL, SITE_URL, SUPPORT_EMAIL, WHATSAPP_URL, absoluteUrl, lp, type Locale } from "@/lib/site";
import { PREMIUM_PRICES, STANDARD_PRICES, priceNumber } from "@/lib/plans";
import { heroImageSrc, siteLogoAbsoluteUrl } from "@/lib/site-images";
import { OG_IMAGE } from "@/lib/seo";
import CatchonTVUIClient from "@/app/components/CatchonTVUIClient";
import { ORDER_CURRENCY } from "@/lib/site";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import PricingSection from "./PricingSection";
import { HeroMockup, GenreWall, DeviceGrid } from "./visuals";
import { FaqList, JsonLd, SectionHead, faqSchema } from "./seo-bits";
import CtaBand from "./CtaBand";

const FEATURE_ICONS: IconType[] = [LuTv, LuFilm, LuServer, LuMonitorPlay, LuMonitor, LuHeadset];
const LIVE_ICONS: IconType[] = [LuTrophy, LuNewspaper, LuSparkles, LuBaby, LuMusic, LuGlobe];
const STEP_ICONS: IconType[] = [LuListChecks, LuCreditCard, LuLogIn];

export default function HomePage({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  const h = d.home;
  const homeFaq = [
    ...d.faqs.general.slice(0, 3),
    ...d.faqs.setup.slice(0, 2),
    ...d.faqs.billing.slice(0, 2),
    ...d.faqs.troubleshooting.slice(0, 1),
  ];
  const pageUrl = absoluteUrl(lp(locale, "/"));

  const offers = [...STANDARD_PRICES, ...PREMIUM_PRICES].map((price, i) => ({
    "@type": "Offer",
    name: h.pricing.planNames[i],
    price: priceNumber(price).toFixed(2),
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: `${pageUrl}#pricing`,
  }));

  return (
    <>
      <CatchonTVUIClient currency={ORDER_CURRENCY[locale]} />
      <SiteHeader locale={locale} path="/" active="home" />

      <main id="main">
        {/* HERO */}
        <section id="hero" className="hero">
          <div className="hero-glow" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">
                <span className="dot" /> {h.hero.eyebrow}
              </span>
              <h1 className="hero-title">
                {h.hero.title} <span className="grad-text">{h.hero.titleAccent}</span>
              </h1>
              <p className="hero-sub">{h.hero.subtitle}</p>
              <div className="hero-ctas">
                <a href="#pricing" className="btn btn-primary btn-lg">
                  {h.hero.ctaPrimary} <LuArrowRight aria-hidden="true" />
                </a>
                <a href="#how-it-works" className="btn btn-ghost btn-lg">
                  {h.hero.ctaSecondary}
                </a>
              </div>
              <ul className="hero-chips">
                {h.hero.chips.map((c) => (
                  <li key={c}>
                    <LuCircleCheck aria-hidden="true" /> {c}
                  </li>
                ))}
              </ul>
              <dl className="hero-stats">
                {h.hero.stats.map((s) => (
                  <div key={s.label}>
                    <dt>{s.label}</dt>
                    <dd>{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="hero-visual">
              <HeroMockup mock={h.hero.mock} />
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="section">
          <div className="container">
            <SectionHead kicker={h.features.kicker} title={h.features.title} intro={h.features.intro} />
            <div className="card-grid cols-3">
              {h.features.items.map((f, i) => {
                const Icon = FEATURE_ICONS[i];
                return (
                  <article key={f.title} className="card feature-card">
                    <span className="icon-badge">
                      <Icon aria-hidden="true" />
                    </span>
                    <h3>{f.title}</h3>
                    <p>{f.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CONTENT: LIVE + VOD */}
        <section id="movies" className="section section-alt">
          <div className="container">
            <SectionHead kicker={h.content.kicker} title={h.content.title} intro={h.content.intro} />
            <div className="split">
              <div>
                <h3 className="sub-title">{h.content.liveTitle}</h3>
                <ul className="live-list">
                  {h.content.liveItems.map((item, i) => {
                    const Icon = LIVE_ICONS[i];
                    return (
                      <li key={item.title}>
                        <span className="icon-badge sm">
                          <Icon aria-hidden="true" />
                        </span>
                        <div>
                          <h4>{item.title}</h4>
                          <p>{item.text}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="vod-card card">
                <div className="vod-head">
                  <div>
                    <h3 className="sub-title">{h.content.vodTitle}</h3>
                    <p>{h.content.vodText}</p>
                  </div>
                </div>
                <div className="pill-row">
                  <span className="pill is-active">{h.content.topPicks}</span>
                  <span className="pill">{h.content.titlesPill}</span>
                </div>
                <GenreWall labels={h.content.genres} />
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="section">
          <div className="container">
            <SectionHead kicker={h.steps.kicker} title={h.steps.title} intro={h.steps.intro} />
            <ol className="steps">
              {h.steps.items.map((s, i) => {
                const Icon = STEP_ICONS[i];
                return (
                  <li key={s.title} className="card step-card">
                    <span className="step-num">{i + 1}</span>
                    <span className="icon-badge">
                      <Icon aria-hidden="true" />
                    </span>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <PricingSection d={d} />

        {/* DEVICES */}
        <section id="devices" className="section section-alt">
          <div className="container">
            <SectionHead kicker={h.devices.kicker} title={h.devices.title} intro={h.devices.intro} />
            <DeviceGrid labels={h.devices.labels} />
            <div className="split split-media">
              <div className="media-card">
                <Image
                  src={heroImageSrc}
                  alt={h.devices.familyTitle}
                  width={1065}
                  height={884}
                  sizes="(max-width: 900px) 100vw, 520px"
                  loading="lazy"
                />
              </div>
              <div className="stack">
                <div className="card">
                  <h3>{h.devices.familyTitle}</h3>
                  <p>{h.devices.familyText}</p>
                </div>
                <div className="card">
                  <h3>{h.devices.appsTitle}</h3>
                  <p>{h.devices.appsText}</p>
                  <Link href={lp(locale, "/guide")} className="text-link">
                    {d.nav.guide} <LuArrowRight aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section id="reviews" className="section">
          <div className="container">
            <SectionHead kicker={h.reviews.kicker} title={h.reviews.title} intro={h.reviews.intro} />
            <div className="card-grid cols-3">
              {h.reviews.items.map((r) => (
                <figure key={r.author} className="card review-card">
                  <LuQuote className="review-quote" aria-hidden="true" />
                  <div className="stars" aria-label="5/5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <LuStar key={i} aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote>{r.text}</blockquote>
                  <figcaption>
                    <span className="avatar" aria-hidden="true">
                      {r.author.slice(0, 1)}
                    </span>
                    <span>
                      <strong>{r.author}</strong>
                      <small>{r.tag}</small>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT (long-form SEO copy) */}
        <section id="about" className="section section-alt">
          <div className="container narrow">
            <SectionHead kicker={h.about.kicker} title={h.about.title} />
            <div className="prose">
              {h.about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section">
          <div className="container narrow">
            <SectionHead kicker={h.faq.kicker} title={h.faq.title} intro={h.faq.intro} />
            <FaqList items={homeFaq} openFirst />
            <div className="center">
              <Link href={lp(locale, "/faq")} className="btn btn-ghost">
                {h.faq.more} <LuArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* BLOG TEASER */}
        <section id="blog" className="section section-alt">
          <div className="container">
            <SectionHead kicker={h.blog.kicker} title={h.blog.title} intro={h.blog.intro} />
            <div className="card-grid cols-3">
              {POSTS.slice(0, 3).map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="card post-card" lang="en">
                  <span className="post-cat">{post.category}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span className="text-link">
                    {d.common.readMore} <LuArrowRight aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CtaBand
          title={h.cta.title}
          text={h.cta.text}
          primary={{ href: "#pricing", label: h.cta.button }}
          secondary={{ href: WHATSAPP_URL, label: h.cta.secondary, icon: <LuMessageCircle aria-hidden="true" />, external: true }}
        />
      </main>

      <SiteFooter locale={locale} />

      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": `${SITE_URL}/#organization`,
            name: BRAND_FULL,
            url: `${SITE_URL}/`,
            logo: siteLogoAbsoluteUrl,
            sameAs: [WHATSAPP_URL],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer support",
              email: SUPPORT_EMAIL,
              availableLanguage: ["English", "German", "French", "Italian", "Dutch", "Portuguese"],
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            name: BRAND_FULL,
            url: `${SITE_URL}/`,
            inLanguage: locale,
            publisher: { "@id": `${SITE_URL}/#organization` },
          },
          {
            "@context": "https://schema.org",
            "@type": "Product",
            name: `${BRAND_FULL} – ${h.pricing.title}`,
            description: h.meta.description,
            image: OG_IMAGE,
            brand: { "@type": "Brand", name: BRAND_FULL },
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "EUR",
              lowPrice: priceNumber(STANDARD_PRICES[0]).toFixed(2),
              highPrice: priceNumber(PREMIUM_PRICES[3]).toFixed(2),
              offerCount: offers.length,
              offers,
            },
          },
          faqSchema(homeFaq),
        ]}
      />
    </>
  );
}
