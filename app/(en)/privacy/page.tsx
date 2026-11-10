import type { Metadata } from "next";
import { LegalPage } from "@/components/site/pages";
import { getDict } from "@/content";
import { pageMetadata } from "@/lib/seo";

const locale = "en" as const;
const title = getDict(locale).legal.privacy;

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/privacy",
  title: `${title} | GiGa FliX IPTV`,
  description: `${title} – GiGa FliX IPTV – premium IPTV subscription with 24/7 support.`,
});

export default function Page() {
  return (
    <LegalPage locale={locale} path="/privacy" title={title}>
            <div className="legal-item">
      <p>
      This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your
      information when You use the Service and tells You about Your privacy rights and how the law protects You.
      </p>
      </div>

      <div className="legal-item">
      <h2>Interpretation</h2>
      <p>
      The words of which the initial letter is capitalized have meanings defined under the following conditions.
      The following definitions shall have the same meaning regardless of whether they appear in singular or in
      plural.
      </p>
      </div>

      <div className="legal-item">
      <h2>Personal Data</h2>
      <p>
      While using Our Service, We may ask You to provide Us with certain personally identifiable information that
      can be used to contact or identify You. Personally identifiable information may include, but is not limited
      to: Email address, First name and last name, Phone number, Usage Data.
      </p>
      </div>

      <div className="legal-item">
      <h2>Usage Data</h2>
      <p>
      Usage Data is collected automatically when using the Service. Usage Data may include information such as
      Your Device&apos;s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our
      Service that You visit, the time and date of Your visit, the time spent on those pages, unique device
      identifiers and other diagnostic data.
      </p>
      </div>

      <div className="legal-item">
      <h2>Tracking Technologies and Cookies</h2>
      <p>
      We use cookies and similar tracking technologies, including beacons, tags and scripts, to monitor activity
      on our Service and store specific information.
      </p>
      </div>

      <div className="legal-item">
      <h2>Use of Your Personal Data</h2>
      <p>
      The Company utilizes Personal Data for various purposes, including providing and maintaining our Service,
      managing your Account, and fulfilling contractual obligations. We may contact you through email, telephone
      calls, or other electronic communication forms.
      </p>
      </div>

      <div className="legal-item">
      <h2>Security of Your Personal Data</h2>
      <p>
      The security of Your Personal Data is important to Us, but remember that no method of transmission over the
      Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable
      means to protect Your Personal Data, We cannot guarantee its absolute security.
      </p>
      </div>

      <div className="legal-item">
      <h2>Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, You can contact us.</p>
      </div>
    </LegalPage>
  );
}
