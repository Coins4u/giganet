import type { Metadata } from "next";
import { LegalPage } from "@/components/site/pages";
import { getDict } from "@/content";
import { pageMetadata } from "@/lib/seo";

const locale = "en" as const;
const title = getDict(locale).legal.refund;

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/RefundPolicy",
  title: `${title} | GiGa FliX IPTV`,
  description: `${title} – GiGa FliX IPTV – premium IPTV subscription with 24/7 support.`,
});

export default function Page() {
  return (
    <LegalPage locale={locale} path="/RefundPolicy" title={title}>
            <div className="legal-item">
      <p>
      We are committed to ensuring the satisfaction of our customers. If you are not entirely satisfied with your
      purchase, we&apos;re here to help. <br />
      Please review our refund policy below:
      </p>
      </div>

      <div className="legal-item">
      <h2>Refund Eligibility</h2>
      <p>
      Refunds are applicable within <strong>7 days</strong> from the date of purchase. To be eligible for a refund,
      the product or service must be unused and in the same condition as received. If your request is approved, your
      refund will be processed and a credit will automatically be applied to your credit card or original method of
      payment, within a certain number of days.
      </p>
      </div>

      <div className="legal-item">
      <h2>Sale Items</h2>
      <p>Only regular priced items may be refunded. Sale items cannot be refunded.</p>
      </div>

      <div className="legal-item">
      <h2>How to Request a Refund</h2>
      <p>
      To initiate a refund, please contact our customer support team from our platform using WhatsApp or contact
      form with your order number and a detailed explanation of the reason for the refund request. Our team will
      review your request and respond within 7 business days.
      </p>
      </div>

      <div className="legal-item">
      <h2>Refund Process</h2>
      <p>
      Once your refund request is approved, a credit will automatically be applied to your original method of
      payment within 2 days.
      </p>
      </div>

      <div className="legal-item">
      <h2>Late or Missing Refunds</h2>
      <p>
      If you haven&apos;t received a refund within the specified timeframe, please first check your bank account.
      Contact your credit card company, as it may take some time before your refund is officially posted. If you
      have done all of this and you still haven&apos;t received your refund, please contact us.
      </p>
      </div>

      <div className="legal-item">
      <h2>Special Circumstances</h2>
      <p>
      We understand that there may be exceptional circumstances where a refund is required beyond our standard
      policy. Please contact us directly to discuss any unique situation.
      </p>
      </div>

      <div className="legal-item">
      <h2>Refund Policy Changes</h2>
      <p>
      GiGa FliX reserves the right to modify or update this refund policy at any time. Any changes will become
      effective immediately upon being posted on the website.
      </p>
      </div>
    </LegalPage>
  );
}
