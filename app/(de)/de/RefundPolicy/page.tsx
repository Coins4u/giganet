import type { Metadata } from "next";
import { LegalPage } from "@/components/site/pages";
import { getDict } from "@/content";
import { pageMetadata } from "@/lib/seo";

const locale = "de" as const;
const title = getDict(locale).legal.refund;

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/RefundPolicy",
  title: `${title} | GiGa FliX IPTV`,
  description: `${title} – GiGa FliX IPTV – Premium IPTV Abo mit 24/7-Support.`,
});

export default function Page() {
  return (
    <LegalPage locale={locale} path="/RefundPolicy" title={title}>
            <div className="legal-item">
      <p>
      Wir verpflichten uns zur Zufriedenheit unserer Kunden. Wenn Sie mit Ihrem Kauf nicht vollständig zufrieden
      sind, sind wir hier, um zu helfen. <br />
      Bitte lesen Sie unsere Rückerstattungsrichtlinie unten:
      </p>
      </div>

      <div className="legal-item">
      <h2>Rückerstattungsberechtigung</h2>
      <p>
      Rückerstattungen sind innerhalb von <strong>7 Tagen</strong> ab Kaufdatum möglich. Um für eine Rückerstattung in
      Frage zu kommen, muss das Produkt oder die Dienstleistung unbenutzt und im gleichen Zustand sein, wie Sie es
      erhalten haben. Wenn Ihr Antrag genehmigt wird, wird Ihre Rückerstattung bearbeitet und der Betrag wird
      automatisch Ihrer Kreditkarte oder der ursprünglichen Zahlungsmethode innerhalb einer bestimmten Anzahl von
      Tagen gutgeschrieben.
      </p>
      </div>

      <div className="legal-item">
      <h2>Reduzierte Artikel</h2>
      <p>Es können nur regulär bepreiste Artikel erstattet werden. Reduzierte Artikel können nicht erstattet werden.</p>
      </div>

      <div className="legal-item">
      <h2>So beantragen Sie eine Rückerstattung</h2>
      <p>
      Um eine Rückerstattung einzuleiten, kontaktieren Sie bitte unser Kundensupport-Team über WhatsApp oder das
      Kontaktformular auf unserer Plattform. Geben Sie Ihre Bestellnummer und eine detaillierte Erklärung des Grundes
      für die Rückerstattungsanfrage an. Unser Team wird Ihre Anfrage prüfen und innerhalb von 7 Werktagen antworten.
      </p>
      </div>

      <div className="legal-item">
      <h2>Rückerstattungsprozess</h2>
      <p>
      Sobald Ihre Rückerstattungsanfrage genehmigt ist, wird der Betrag innerhalb von 2 Tagen automatisch Ihrer
      ursprünglichen Zahlungsmethode gutgeschrieben.
      </p>
      </div>

      <div className="legal-item">
      <h2>Verspätete oder fehlende Rückerstattungen</h2>
      <p>
      Wenn Sie noch keine Rückerstattung erhalten haben, überprüfen Sie bitte zuerst Ihr Bankkonto erneut.
      Kontaktieren Sie dann Ihr Kreditkartenunternehmen, da es einige Zeit dauern kann, bis Ihre Rückerstattung
      offiziell gebucht wird. Wenn Sie all dies getan haben und Ihre Rückerstattung immer noch nicht erhalten haben,
      kontaktieren Sie uns bitte.
      </p>
      </div>

      <div className="legal-item">
      <h2>Besondere Umstände</h2>
      <p>
      Wir verstehen, dass es außergewöhnliche Umstände geben kann, in denen eine Rückerstattung über unsere
      Standardrichtlinie hinaus erforderlich ist. Bitte kontaktieren Sie uns direkt, um jede einzigartige Situation zu
      besprechen.
      </p>
      </div>

      <div className="legal-item">
      <h2>Änderungen der Rückerstattungsrichtlinie</h2>
      <p>
      GiGa FliX behält sich das Recht vor, diese Rückerstattungsrichtlinie jederzeit zu ändern oder zu aktualisieren.
      Alle Änderungen treten sofort nach Veröffentlichung auf der Website in Kraft.
      </p>
      </div>
    </LegalPage>
  );
}
