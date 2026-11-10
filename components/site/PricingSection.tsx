import { LuCheck, LuZap, LuShieldCheck, LuMail, LuPercent, LuLandmark, LuBitcoin } from "react-icons/lu";
import type { Dict } from "@/content/types";
import {
  MONTHS,
  PREMIUM_FEATURED,
  PREMIUM_PRICES,
  STANDARD_FEATURED,
  STANDARD_PRICES,
  priceNumber,
} from "@/lib/plans";
import { SectionHead } from "./seo-bits";

/**
 * Pricing grid.
 *
 * ⚠️ DOM CONTRACT – used by `useCatchonTVUI` (toggle) and `OrderLeadModal` (checkout):
 *  - `.toggle-switch`, `.toggle-label[data-plan="standard|premium"]`
 *  - `#standard-plans` / `#premium-plans` with `.pricing-container` (+ `.active`)
 *  - each `.pricing-card` has exactly ONE `a.btn`, plus `.plan-name` and `.plan-price`
 *  - card order = tier index (standard 1/3/6/12, then premium 1/3/6/12)
 */
export default function PricingSection({ d }: { d: Dict }) {
  const p = d.home.pricing;

  const renderTier = (tier: "standard" | "premium") => {
    const prices = tier === "standard" ? STANDARD_PRICES : PREMIUM_PRICES;
    const featured = tier === "standard" ? STANDARD_FEATURED : PREMIUM_FEATURED;
    const features = tier === "standard" ? p.standardFeatures : p.premiumFeatures;
    const badge = tier === "standard" ? p.badgeStandard : p.badgePremium;
    const nameOffset = tier === "standard" ? 0 : 4;

    return (
      <div
        id={tier === "standard" ? "standard-plans" : "premium-plans"}
        className={`pricing-container${tier === "standard" ? " active" : ""}`}
      >
        {prices.map((price, i) => {
          const isFeatured = i === featured;
          const perMonth = (priceNumber(price) / MONTHS[i]).toFixed(2);
          return (
            <article key={price} className={`pricing-card${isFeatured ? " is-featured" : ""}`}>
              {isFeatured && <span className="plan-badge">{badge}</span>}
              <h3 className="plan-name">{p.planNames[i + nameOffset]}</h3>
              <div className="plan-price">
                <span className="plan-amount">{price}</span>
                <span className="plan-period">{p.periods[i]}</span>
              </div>
              {MONTHS[i] > 1 && <p className="plan-permonth">≈ €{perMonth} / {p.periods[0].replace(/^\/\s*1\s*/, "")}</p>}
              <ul className="plan-features">
                {features.map((f) => (
                  <li key={f}>
                    <LuCheck aria-hidden="true" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#" className={`btn ${isFeatured ? "btn-primary" : "btn-ghost"} btn-block`}>
                {d.common.orderNow}
              </a>
              <p className="plan-pay">
                <LuLandmark aria-hidden="true" /> <LuBitcoin aria-hidden="true" /> {p.paymentNote}
              </p>
            </article>
          );
        })}
      </div>
    );
  };

  return (
    <section id="pricing" className="section section-pricing">
      <div className="container">
        <SectionHead kicker={p.kicker} title={p.title} intro={p.intro} />

        <div className="pricing-toggle-container" role="group" aria-label={p.kicker}>
          <button type="button" className="toggle-label active" data-plan="standard">
            {p.standard}
          </button>
          <button type="button" className="toggle-switch" aria-label={`${p.standard} / ${p.premium}`}>
            <span className="toggle-knob" />
          </button>
          <button type="button" className="toggle-label" data-plan="premium">
            <LuZap aria-hidden="true" /> {p.premium}
          </button>
        </div>

        {renderTier("standard")}
        {renderTier("premium")}

        <div className="pricing-notes">
          <span><LuPercent aria-hidden="true" /> {p.discount}</span>
          <span><LuMail aria-hidden="true" /> {p.delivery}</span>
          <span><LuShieldCheck aria-hidden="true" /> {p.guarantee}</span>
        </div>
      </div>
    </section>
  );
}
