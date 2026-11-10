import type { Metadata } from "next";
import { LegalPage } from "@/components/site/pages";
import { getDict } from "@/content";
import { pageMetadata } from "@/lib/seo";

const locale = "de" as const;
const title = getDict(locale).legal.terms;

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/TermsConditions",
  title: `${title} | GiGa FliX IPTV`,
  description: `${title} – GiGa FliX IPTV – Premium IPTV Abo mit 24/7-Support.`,
});

export default function Page() {
  return (
    <LegalPage locale={locale} path="/TermsConditions" title={title}>
            <div className="legal-item">
      <p>Bitte lesen Sie diese allgemeinen Geschäftsbedingungen sorgfältig durch, bevor Sie unseren Service nutzen.</p>
      </div>

      <div className="legal-item">
      <h2>Auslegung</h2>
      <p>
      Wörter, deren Anfangsbuchstabe großgeschrieben ist, haben unter den folgenden Bedingungen definierte
      Bedeutungen. Die folgenden Definitionen haben dieselbe Bedeutung, unabhängig davon, ob sie im Singular oder
      Plural erscheinen.
      </p>
      </div>

      <div className="legal-item">
      <h2>Definitionen</h2>
      <p>
      Für die Zwecke dieser allgemeinen Geschäftsbedingungen bezieht sich der Begriff &quot;Verbundenes
      Unternehmen&quot; auf eine Einheit, die eine Partei kontrolliert, von ihr kontrolliert wird oder unter
      gemeinsamer Kontrolle mit ihr steht. Die Einheit, die in dieser Vereinbarung als &quot;das Unternehmen&quot;,
      &quot;Wir&quot;, &quot;Unser&quot; oder &quot;Uns&quot; bezeichnet wird, ist GiGa FliX. &quot;Gerät&quot;
      bezeichnet jedes Gerät, das auf den Dienst zugreifen kann. Der Begriff &quot;Dienst&quot; bezieht sich auf die
      Website.
      </p>
      </div>

      <div className="legal-item">
      <h2>Anerkennung</h2>
      <p>
      Dies sind die Allgemeinen Geschäftsbedingungen, die die Nutzung dieses Dienstes und die Vereinbarung zwischen
      Ihnen und dem Unternehmen regeln. Ihr Zugang zu und Ihre Nutzung des Dienstes setzen Ihre Annahme und Einhaltung
      dieser Allgemeinen Geschäftsbedingungen voraus. Durch den Zugriff auf oder die Nutzung des Dienstes erklären Sie
      sich mit diesen Allgemeinen Geschäftsbedingungen einverstanden.
      </p>
      </div>

      <div className="legal-item">
      <h2>Links zu anderen Websites</h2>
      <p>
      Unser Dienst kann Links zu Websites oder Diensten Dritter enthalten, die nicht im Eigentum oder unter der
      Kontrolle des Unternehmens stehen. Das Unternehmen hat keine Kontrolle über und übernimmt keine Verantwortung
      für den Inhalt, die Datenschutzrichtlinien oder Praktiken von Websites oder Diensten Dritter.
      </p>
      </div>

      <div className="legal-item">
      <h2>Kündigung</h2>
      <p>
      Wir können Ihren Zugang sofort, ohne vorherige Ankündigung oder Haftung, aus jedem Grund beenden oder aussetzen,
      einschließlich, aber nicht beschränkt auf den Fall, dass Sie gegen diese Bedingungen verstoßen.
      </p>
      </div>

      <div className="legal-item">
      <h2>Haftungsbeschränkung</h2>
      <p>
      Soweit gesetzlich zulässig, haften das Unternehmen oder seine Lieferanten nicht für spezielle, zufällige,
      indirekte oder Folgeschäden jeglicher Art.
      </p>
      </div>

      <div className="legal-item">
      <h2>Haftungsausschluss &quot;WIE BESEHEN&quot; und &quot;WIE VERFÜGBAR&quot;</h2>
      <p>
      Der Dienst wird &quot;wie besehen&quot; und &quot;wie verfügbar&quot; bereitgestellt, mit allen Fehlern und
      Mängeln, ohne jegliche ausdrückliche oder stillschweigende Garantie.
      </p>
      </div>

      <div className="legal-item">
      <h2>Änderungen dieser Geschäftsbedingungen</h2>
      <p>
      Wir behalten uns das Recht vor, diese Bedingungen jederzeit nach eigenem Ermessen zu ändern oder zu ersetzen.
      Durch den fortgesetzten Zugriff auf oder die Nutzung unseres Dienstes nach Inkrafttreten von Änderungen
      erklären Sie sich mit den überarbeiteten Bedingungen einverstanden.
      </p>
      </div>

      <div className="legal-item">
      <h2>Kontaktieren Sie uns</h2>
      <p>
      Wenn Sie Fragen zu diesen allgemeinen Geschäftsbedingungen haben, können Sie uns über unsere Plattform
      kontaktieren.
      </p>
      </div>
    </LegalPage>
  );
}
