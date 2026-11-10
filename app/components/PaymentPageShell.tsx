import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import CatchonTVUIClient from "./CatchonTVUIClient";

type Props = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

export default function PaymentPageShell({ title, subtitle, children }: Props) {
  return (
    <>
      <CatchonTVUIClient currency="eur" />
      <SiteHeader locale="en" localized={false} />

      <main id="main" className="pay-page">
        <div className="container pay-page__inner">
          <p className="pay-page__eyebrow">Secure checkout</p>
          <h1 className="pay-page__title">{title}</h1>
          <p className="pay-page__subtitle">{subtitle}</p>
          {children}
        </div>
      </main>

      <SiteFooter locale="en" />
    </>
  );
}
