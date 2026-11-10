import Image from "next/image";
import Link from "next/link";
import { LuGlobe, LuChevronDown } from "react-icons/lu";
import { getDict } from "@/content";
import { LOCALES, LOCALE_NAMES, lp, type Locale } from "@/lib/site";
import { logoLightSrc } from "@/lib/site-images";
import MobileMenuToggle from "@/app/components/MobileMenuToggle";

type Props = {
  locale: Locale;
  /** Locale-neutral path of the current page, used for the language switcher. */
  path?: string;
  /** If false, language links point to each locale's home (page only exists in one language). */
  localized?: boolean;
  active?: "home" | "channels" | "guide" | "faq" | "blog" | "contact";
};

export default function SiteHeader({ locale, path = "/", localized = true, active }: Props) {
  const t = getDict(locale).nav;
  const links: { key: Props["active"] | "pricing"; href: string; label: string }[] = [
    { key: "pricing", href: lp(locale, "/#pricing"), label: t.pricing },
    { key: "channels", href: lp(locale, "/channels"), label: t.channels },
    { key: "guide", href: lp(locale, "/guide"), label: t.guide },
    { key: "faq", href: lp(locale, "/faq"), label: t.faq },
    { key: "blog", href: "/blog", label: t.blog },
    { key: "contact", href: lp(locale, "/contact"), label: t.contact },
  ];

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href={lp(locale, "/")} className="brand" aria-label="GiGa FliX IPTV">
          <Image src={logoLightSrc} alt="GiGa FliX IPTV" width={88} height={48} priority />
        </Link>

        <nav className="nav-links" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link${active === l.key ? " is-active" : ""}`}
              aria-current={active === l.key ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
          <Link href={lp(locale, "/#pricing")} className="btn btn-primary btn-sm nav-link nav-cta-mobile">
            {t.cta}
          </Link>
        </nav>

        <div className="header-actions">
          <details className="lang-switch">
            <summary aria-label={t.language}>
              <LuGlobe aria-hidden="true" />
              <span>{locale.toUpperCase()}</span>
              <LuChevronDown aria-hidden="true" className="lang-caret" />
            </summary>
            <ul>
              {LOCALES.map((l) => (
                <li key={l}>
                  <a
                    href={localized ? lp(l, path) : lp(l, "/")}
                    hrefLang={l}
                    lang={l}
                    className={l === locale ? "is-active" : undefined}
                  >
                    {LOCALE_NAMES[l]}
                  </a>
                </li>
              ))}
            </ul>
          </details>
          <Link href={lp(locale, "/#pricing")} className="btn btn-primary btn-sm header-cta">
            {t.cta}
          </Link>
          <MobileMenuToggle />
        </div>
      </div>
    </header>
  );
}
