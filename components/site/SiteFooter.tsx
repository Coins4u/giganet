import Image from "next/image";
import Link from "next/link";
import { LuMail, LuMessageCircle, LuLandmark, LuBitcoin } from "react-icons/lu";
import { getDict } from "@/content";
import { SUPPORT_EMAIL, WHATSAPP_URL, lp, type Locale } from "@/lib/site";
import { logoLightSrc } from "@/lib/site-images";

export default function SiteFooter({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  const t = d.footer;
  const year = 2026;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href={lp(locale, "/")} aria-label="GiGa FliX IPTV">
              <Image src={logoLightSrc} alt="GiGa FliX IPTV" width={110} height={60} />
            </Link>
            <p>{t.tagline}</p>
            <div className="footer-contact">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <LuMessageCircle aria-hidden="true" /> WhatsApp
              </a>
              <a href={`mailto:${SUPPORT_EMAIL}`}>
                <LuMail aria-hidden="true" /> {SUPPORT_EMAIL}
              </a>
            </div>
          </div>

          <div>
            <h2 className="footer-title">{t.explore}</h2>
            <ul className="footer-links">
              <li><Link href={lp(locale, "/")}>{d.nav.home}</Link></li>
              <li><Link href={lp(locale, "/#pricing")}>{d.nav.pricing}</Link></li>
              <li><Link href={lp(locale, "/channels")}>{d.nav.channels}</Link></li>
              <li><Link href="/blog">{d.nav.blog}</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="footer-title">{t.help}</h2>
            <ul className="footer-links">
              <li><Link href={lp(locale, "/guide")}>{d.nav.guide}</Link></li>
              <li><Link href={lp(locale, "/faq")}>{d.nav.faq}</Link></li>
              <li><Link href={lp(locale, "/contact")}>{d.nav.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="footer-title">{t.legal}</h2>
            <ul className="footer-links">
              <li><Link href={lp(locale, "/TermsConditions")}>{t.terms}</Link></li>
              <li><Link href={lp(locale, "/privacy")}>{t.privacy}</Link></li>
              <li><Link href={lp(locale, "/RefundPolicy")}>{t.refund}</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {year} GiGa FliX IPTV. {t.rights}
          </p>
          <p className="footer-pay">
            <LuLandmark aria-hidden="true" /> <LuBitcoin aria-hidden="true" /> {t.payments}
          </p>
        </div>
        <p className="footer-disclaimer">{t.disclaimer}</p>
      </div>
    </footer>
  );
}
