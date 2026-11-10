import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  LuArrowRight,
  LuCheck,
  LuMessageCircle,
  LuMail,
  LuClock,
  LuBookOpen,
  LuCircleHelp,
  LuListChecks,
  LuLightbulb,
  LuTv,
  LuUsb,
  LuSmartphone,
  LuMonitor,
  LuPlay,
  LuBox,
  LuMapPin,
  LuCalendar,
  LuRefreshCw,
} from "react-icons/lu";
import { getDict } from "@/content";
import type { FaqGroupKey } from "@/content/types";
import { WHATSAPP_URL, SUPPORT_EMAIL, lp, type Locale } from "@/lib/site";
import { channelCategoryImageSrc, CHANNEL_CATEGORY_IMAGE_SIZES } from "@/lib/site-images";
import PageShell from "./PageShell";
import CtaBand from "./CtaBand";
import ContactForm from "./ContactForm";
import { FaqList, JsonLd, faqSchema } from "./seo-bits";

const home = (locale: Locale) => ({ name: getDict(locale).common.breadcrumbHome, href: lp(locale, "/") });

/* ------------------------------------------------------------------ */
/* Channels                                                            */
/* ------------------------------------------------------------------ */

const CATEGORY_IMAGES = [
  channelCategoryImageSrc.sport,
  channelCategoryImageSrc.movie,
  channelCategoryImageSrc.news,
  channelCategoryImageSrc.kids,
  channelCategoryImageSrc.entertainment,
  channelCategoryImageSrc.music,
];

export function ChannelsPage({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  const c = d.channels;
  return (
    <PageShell
      locale={locale}
      path="/channels"
      active="channels"
      crumbs={[home(locale), { name: d.nav.channels, href: lp(locale, "/channels") }]}
      kicker={c.kicker}
      title={c.title}
      intro={c.intro}
    >
      <section className="section pt-0">
        <div className="container">
          <div className="card-grid cols-3">
            {c.categories.map((cat, i) => (
              <article key={cat.title} className="card category-card">
                <div className="category-img">
                  <Image
                    src={CATEGORY_IMAGES[i]}
                    alt=""
                    width={240}
                    height={240}
                    sizes={CHANNEL_CATEGORY_IMAGE_SIZES}
                    loading={i < 3 ? "eager" : "lazy"}
                  />
                </div>
                <h2>{cat.title}</h2>
                <p>{cat.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="split">
            <div>
              <h2 className="section-title left">{c.regionsTitle}</h2>
              <p className="section-intro left">{c.regionsText}</p>
              <ul className="tag-cloud">
                {c.regions.map((r) => (
                  <li key={r}>
                    <LuMapPin aria-hidden="true" /> {r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="stack">
              {c.extras.map((e, i) => {
                const Icon = [LuCalendar, LuTv, LuRefreshCw][i] ?? LuCheck;
                return (
                  <div key={e.title} className="card row-card">
                    <span className="icon-badge sm">
                      <Icon aria-hidden="true" />
                    </span>
                    <div>
                      <h3>{e.title}</h3>
                      <p>{e.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title={c.ctaTitle}
        text={c.ctaText}
        primary={{ href: lp(locale, "/#pricing"), label: d.common.seePlans }}
        secondary={{ href: WHATSAPP_URL, label: d.common.whatsapp, external: true, icon: <LuMessageCircle aria-hidden="true" /> }}
      />
    </PageShell>
  );
}

/* ------------------------------------------------------------------ */
/* Setup guide                                                         */
/* ------------------------------------------------------------------ */

const DEVICE_ICONS: Record<string, IconType> = {
  firestick: LuUsb,
  mobile: LuSmartphone,
  "smart-tv": LuTv,
  windows: LuMonitor,
  kodi: LuPlay,
  mag: LuBox,
};

/** Screenshots per device step (index → file under /public/guide/img). */
const GUIDE_IMAGES: Record<string, Record<number, { src: string; w: number; h: number }>> = {
  firestick: {
    0: { src: "/guide/img/FireTVStick5.png", w: 750, h: 422 },
    2: { src: "/guide/img/FireTVStick16.png", w: 750, h: 422 },
  },
  mobile: {
    1: { src: "/guide/img/android.png", w: 1024, h: 473 },
    2: { src: "/guide/img/androide2.png", w: 1024, h: 473 },
  },
  mag: {
    0: { src: "/guide/img/MAG Device.png", w: 1024, h: 419 },
    1: { src: "/guide/img/MAG Device5.webp", w: 688, h: 459 },
  },
};

export function GuidePage({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  const g = d.guide;
  return (
    <PageShell
      locale={locale}
      path="/guide"
      active="guide"
      crumbs={[home(locale), { name: d.nav.guide, href: lp(locale, "/guide") }]}
      kicker={g.kicker}
      title={g.title}
      intro={g.intro}
    >
      <section className="section pt-0">
        <div className="container">
          <nav className="device-tabs" aria-label={g.jump}>
            {g.devices.map((dev) => {
              const Icon = DEVICE_ICONS[dev.id] ?? LuTv;
              return (
                <a key={dev.id} href={`#${dev.id}`}>
                  <Icon aria-hidden="true" /> {dev.title}
                </a>
              );
            })}
          </nav>

          <div className="card before-card">
            <h2>
              <LuListChecks aria-hidden="true" /> {g.beforeTitle}
            </h2>
            <ul className="check-list">
              {g.before.map((b) => (
                <li key={b}>
                  <LuCheck aria-hidden="true" /> {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="guide-list">
            {g.devices.map((dev) => {
              const Icon = DEVICE_ICONS[dev.id] ?? LuTv;
              return (
                <article key={dev.id} id={dev.id} className="card guide-card">
                  <header className="guide-head">
                    <span className="icon-badge">
                      <Icon aria-hidden="true" />
                    </span>
                    <h2>{dev.title}</h2>
                  </header>
                  <ol className="guide-steps">
                    {dev.steps.map((s, i) => {
                      const img = GUIDE_IMAGES[dev.id]?.[i];
                      return (
                        <li key={s.title}>
                          <span className="step-num">{i + 1}</span>
                          <div>
                            <h3>{s.title}</h3>
                            <p>{s.text}</p>
                            {img && (
                              <Image
                                src={img.src}
                                alt={s.title}
                                width={img.w}
                                height={img.h}
                                className="guide-img"
                                sizes="(max-width: 768px) 100vw, 560px"
                                loading="lazy"
                              />
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ol>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">{g.tipsTitle}</h2>
          <div className="card-grid cols-4">
            {g.tips.map((t) => (
              <div key={t.title} className="card">
                <span className="icon-badge sm">
                  <LuLightbulb aria-hidden="true" />
                </span>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={g.helpTitle}
        text={g.helpText}
        primary={{ href: WHATSAPP_URL, label: d.common.whatsapp, external: true, icon: <LuMessageCircle aria-hidden="true" /> }}
        secondary={{ href: lp(locale, "/#pricing"), label: d.common.seePlans }}
      />
    </PageShell>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

const FAQ_ORDER: FaqGroupKey[] = ["general", "setup", "billing", "troubleshooting"];

export function FaqPage({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  const all = FAQ_ORDER.flatMap((k) => d.faqs[k]);
  return (
    <PageShell
      locale={locale}
      path="/faq"
      active="faq"
      crumbs={[home(locale), { name: d.nav.faq, href: lp(locale, "/faq") }]}
      kicker={d.faqPage.kicker}
      title={d.faqPage.title}
      intro={d.faqPage.intro}
    >
      <section className="section pt-0">
        <div className="container narrow">
          <nav className="device-tabs" aria-label={d.faqPage.kicker}>
            {FAQ_ORDER.map((k) => (
              <a key={k} href={`#${k}`}>
                {d.faqGroups[k]}
              </a>
            ))}
          </nav>
          {FAQ_ORDER.map((k) => (
            <div key={k} id={k} className="faq-group">
              <h2 className="faq-group-title">{d.faqGroups[k]}</h2>
              <FaqList items={d.faqs[k]} />
            </div>
          ))}
        </div>
      </section>
      <CtaBand
        title={d.faqPage.stillTitle}
        text={d.faqPage.stillText}
        primary={{ href: WHATSAPP_URL, label: d.common.whatsapp, external: true, icon: <LuMessageCircle aria-hidden="true" /> }}
        secondary={{ href: lp(locale, "/contact"), label: d.common.contactSupport }}
      />
      <JsonLd data={faqSchema(all)} />
    </PageShell>
  );
}

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

export function ContactPage({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  const c = d.contact;
  const panelLinks = [null, lp(locale, "/guide"), lp(locale, "/faq")];
  const panelIcons = [LuClock, LuBookOpen, LuCircleHelp];
  return (
    <PageShell
      locale={locale}
      path="/contact"
      active="contact"
      crumbs={[home(locale), { name: d.nav.contact, href: lp(locale, "/contact") }]}
      kicker={c.kicker}
      title={c.title}
      intro={c.intro}
    >
      <section className="section pt-0">
        <div className="container">
          <div className="contact-grid">
            <div className="card contact-card">
              <h2>{c.form.title}</h2>
              <ContactForm locale={locale} t={c.form} />
            </div>
            <div className="stack">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="card row-card is-link highlight">
                <span className="icon-badge sm">
                  <LuMessageCircle aria-hidden="true" />
                </span>
                <div>
                  <h3>{c.whatsappTitle}</h3>
                  <p>{c.whatsappText}</p>
                </div>
              </a>
              <a href={`mailto:${SUPPORT_EMAIL}`} className="card row-card is-link">
                <span className="icon-badge sm">
                  <LuMail aria-hidden="true" />
                </span>
                <div>
                  <h3>{c.emailTitle}</h3>
                  <p>
                    {c.emailText} <strong>{SUPPORT_EMAIL}</strong>
                  </p>
                </div>
              </a>
              {c.panels.map((p, i) => {
                const Icon = panelIcons[i];
                const href = panelLinks[i];
                const inner = (
                  <>
                    <span className="icon-badge sm">
                      <Icon aria-hidden="true" />
                    </span>
                    <div>
                      <h3>{p.title}</h3>
                      <p>{p.text}</p>
                    </div>
                  </>
                );
                return href ? (
                  <Link key={p.title} href={href} className="card row-card is-link">
                    {inner}
                  </Link>
                ) : (
                  <div key={p.title} className="card row-card">
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

/* ------------------------------------------------------------------ */
/* Legal                                                               */
/* ------------------------------------------------------------------ */

export function LegalPage({
  locale,
  path,
  title,
  children,
}: {
  locale: Locale;
  path: "/privacy" | "/TermsConditions" | "/RefundPolicy";
  title: string;
  children: React.ReactNode;
}) {
  const d = getDict(locale);
  return (
    <PageShell
      locale={locale}
      path={path}
      crumbs={[home(locale), { name: title, href: lp(locale, path) }]}
      title={title}
      intro={d.legal.updated}
    >
      <section className="section pt-0">
        <div className="container narrow">
          <div className="card legal-card prose">{children}</div>
          <p className="center muted">
            <Link href={lp(locale, "/contact")} className="text-link">
              {d.common.contactSupport} <LuArrowRight aria-hidden="true" />
            </Link>
          </p>
        </div>
      </section>
    </PageShell>
  );
}
