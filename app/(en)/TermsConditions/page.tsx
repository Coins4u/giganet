import type { Metadata } from "next";
import { LegalPage } from "@/components/site/pages";
import { getDict } from "@/content";
import { pageMetadata } from "@/lib/seo";

const locale = "en" as const;
const title = getDict(locale).legal.terms;

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/TermsConditions",
  title: `${title} | GiGa FliX IPTV`,
  description: `${title} – GiGa FliX IPTV – premium IPTV subscription with 24/7 support.`,
});

export default function Page() {
  return (
    <LegalPage locale={locale} path="/TermsConditions" title={title}>
            <div className="legal-item">
      <p>Please read these terms and conditions carefully before using our service.</p>
      </div>

      <div className="legal-item">
      <h2>Interpretation</h2>
      <p>
      Words with initial capital letters have defined meanings in the following terms. The following definitions
      will have the same meaning whether they appear in the singular or plural form.
      </p>
      </div>

      <div className="legal-item">
      <h2>Definitions</h2>
      <p>
      For the purposes described in these Terms and Conditions, the term &quot;Affiliated Company&quot; refers to an
      entity that controls, is controlled by, or is under common control with a party. The entity referred to as
      &quot;the Company,&quot; &quot;We,&quot; &quot;Our,&quot; or &quot;Us&quot; in this Agreement is GiGa FliX.
      &quot;Device&quot; means any device capable of accessing the Service. The term &quot;Service&quot; refers to
      the website.
      </p>
      </div>

      <div className="legal-item">
      <h2>Acknowledgment</h2>
      <p>
      These are the General Terms and Conditions governing the use of this Service and the agreement that operates
      between You and the Company. Your access and use of the Service are conditioned on your acceptance and
      compliance with these General Terms and Conditions. By accessing or using the Service, you agree to be bound
      by these General Terms and Conditions.
      </p>
      </div>

      <div className="legal-item">
      <h2>Links to Other Websites</h2>
      <p>
      Our Service may contain links to third-party websites or services that are not owned or controlled by the
      Company. The Company has no control over and assumes no responsibility for the content, privacy policies, or
      practices of any third-party websites or services.
      </p>
      </div>

      <div className="legal-item">
      <h2>Termination</h2>
      <p>
      We may terminate or suspend your access immediately, without prior notice or liability, for any reason
      whatsoever, including, without limitation, if you breach these Terms and Conditions.
      </p>
      </div>

      <div className="legal-item">
      <h2>Limitation of Liability</h2>
      <p>
      To the maximum extent permitted by applicable law, the Company or its suppliers shall not be liable for any
      special, incidental, indirect, or consequential damages whatsoever.
      </p>
      </div>

      <div className="legal-item">
      <h2>Disclaimer &quot;AS IS&quot; and &quot;AS AVAILABLE&quot;</h2>
      <p>
      The Service is provided &quot;as is&quot; and &quot;as available,&quot; with all faults and imperfections,
      without any express or implied warranty.
      </p>
      </div>

      <div className="legal-item">
      <h2>Changes to These Terms and Conditions</h2>
      <p>
      We reserve the right, at our sole discretion, to modify or replace these terms at any time. By continuing to
      access or use our Service after any revisions become effective, you agree to be bound by the revised terms.
      </p>
      </div>

      <div className="legal-item">
      <h2>Contact Us</h2>
      <p>If you have any questions about these terms and conditions, you can contact us from our platform.</p>
      </div>
    </LegalPage>
  );
}
