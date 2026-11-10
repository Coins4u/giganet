import type { Metadata } from "next";
import { LegalPage } from "@/components/site/pages";
import { getDict } from "@/content";
import { pageMetadata } from "@/lib/seo";

const locale = "de" as const;
const title = getDict(locale).legal.privacy;

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/privacy",
  title: `${title} | GiGa FliX IPTV`,
  description: `${title} – GiGa FliX IPTV – Premium IPTV Abo mit 24/7-Support.`,
});

export default function Page() {
  return (
    <LegalPage locale={locale} path="/privacy" title={title}>
            <div className="legal-item">
      <p>
      Diese Datenschutzerklärung beschreibt unsere Richtlinien und Verfahren zur Erfassung, Verwendung und
      Offenlegung Ihrer Informationen bei der Nutzung des Dienstes und informiert Sie über Ihre Datenschutzrechte und
      wie das Gesetz Sie schützt.
      </p>
      </div>

      <div className="legal-item">
      <h2>Auslegung</h2>
      <p>
      Die Wörter, deren Anfangsbuchstabe großgeschrieben ist, haben unter den folgenden Bedingungen definierte
      Bedeutungen. Die folgenden Definitionen haben dieselbe Bedeutung, unabhängig davon, ob sie im Singular oder
      Plural erscheinen.
      </p>
      </div>

      <div className="legal-item">
      <h2>Personenbezogene Daten</h2>
      <p>
      Während der Nutzung unseres Dienstes bitten wir Sie möglicherweise, uns bestimmte personenbezogene Daten zur
      Verfügung zu stellen, die verwendet werden können, um Sie zu kontaktieren oder zu identifizieren.
      Personenbezogene Daten können unter anderem Folgendes umfassen: E-Mail-Adresse, Vor- und Nachname,
      Telefonnummer, Nutzungsdaten.
      </p>
      </div>

      <div className="legal-item">
      <h2>Nutzungsdaten</h2>
      <p>
      Nutzungsdaten werden bei der Nutzung des Dienstes automatisch erfasst. Nutzungsdaten können Informationen wie
      die Internet-Protokoll-Adresse Ihres Geräts (z. B. IP-Adresse), Browsertyp, Browserversion, die von Ihnen
      besuchten Seiten unseres Dienstes, Uhrzeit und Datum Ihres Besuchs, die auf diesen Seiten verbrachte Zeit,
      eindeutige Gerätekennungen und andere Diagnosedaten enthalten.
      </p>
      </div>

      <div className="legal-item">
      <h2>Tracking-Technologien und Cookies</h2>
      <p>
      Wir verwenden Cookies und ähnliche Tracking-Technologien, einschließlich Beacons, Tags und Skripten, um
      Aktivitäten auf unserem Dienst zu verfolgen und bestimmte Informationen zu speichern.
      </p>
      </div>

      <div className="legal-item">
      <h2>Verwendung Ihrer personenbezogenen Daten</h2>
      <p>
      Das Unternehmen verwendet personenbezogene Daten für verschiedene Zwecke, einschließlich der Bereitstellung und
      Wartung unseres Dienstes, der Verwaltung Ihres Kontos und der Erfüllung vertraglicher Verpflichtungen. Wir
      können Sie per E-Mail, Telefonanruf oder über andere elektronische Kommunikationsformen kontaktieren.
      </p>
      </div>

      <div className="legal-item">
      <h2>Sicherheit Ihrer personenbezogenen Daten</h2>
      <p>
      Die Sicherheit Ihrer personenbezogenen Daten ist uns wichtig, aber denken Sie daran, dass keine
      Übertragungsmethode über das Internet oder elektronische Speichermethode 100% sicher ist. Während wir bestrebt
      sind, kommerziell akzeptable Mittel zum Schutz Ihrer personenbezogenen Daten zu verwenden, können wir deren
      absolute Sicherheit nicht garantieren.
      </p>
      </div>

      <div className="legal-item">
      <h2>Kontaktieren Sie uns</h2>
      <p>Wenn Sie Fragen zu dieser Datenschutzerklärung haben, können Sie uns kontaktieren.</p>
      </div>
    </LegalPage>
  );
}
