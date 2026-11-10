import type { Metadata } from "next";
import { LegalPage } from "@/components/site/pages";
import { getDict } from "@/content";
import { pageMetadata } from "@/lib/seo";

const locale = "it" as const;
const title = getDict(locale).legal.terms;

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/TermsConditions",
  title: `${title} | GiGa FliX IPTV`,
  description: `${title} – GiGa FliX IPTV – abbonamento IPTV premium con supporto 24/7.`,
});

export default function Page() {
  return (
    <LegalPage locale={locale} path="/TermsConditions" title={title}>
            <div className="legal-item">
      <p>Si prega di leggere attentamente questi termini e condizioni prima di utilizzare il nostro servizio.</p>
      </div>

      <div className="legal-item">
      <h2>Interpretazione</h2>
      <p>
      Le parole con l&apos;iniziale maiuscola hanno significati definiti nelle seguenti condizioni. Le seguenti
      definizioni hanno lo stesso significato, indipendentemente dal fatto che appaiano al singolare o al plurale.
      </p>
      </div>

      <div className="legal-item">
      <h2>Definizioni</h2>
      <p>
      Ai fini di questi Termini e Condizioni, il termine &quot;Società Affiliata&quot; si riferisce a un&apos;entità che
      controlla, è controllata da o è sotto controllo comune con una parte. L&apos;entità designata in questo accordo
      come &quot;la Società&quot;, &quot;Noi&quot;, &quot;Nostro&quot; o &quot;Nostri&quot; è GiGa FliX.
      &quot;Dispositivo&quot; indica qualsiasi dispositivo in grado di accedere al Servizio. Il termine &quot;Servizio&quot;
      si riferisce al sito web.
      </p>
      </div>

      <div className="legal-item">
      <h2>Riconoscimento</h2>
      <p>
      Questi sono i Termini e Condizioni che regolano l&apos;uso di questo Servizio e l&apos;accordo che vige tra Te e la
      Società. Il tuo accesso e l&apos;utilizzo del Servizio sono condizionati dalla tua accettazione e dal rispetto di
      questi Termini e Condizioni. Accedendo o utilizzando il Servizio, accetti di essere vincolato da questi Termini e
      Condizioni.
      </p>
      </div>

      <div className="legal-item">
      <h2>Link ad altri siti web</h2>
      <p>
      Il nostro Servizio può contenere link a siti web o servizi di terze parti che non sono di proprietà o controllati
      dalla Società. La Società non ha alcun controllo su e non si assume alcuna responsabilità per il contenuto, le
      politiche sulla privacy o le pratiche di qualsiasi sito web o servizio di terze parti.
      </p>
      </div>

      <div className="legal-item">
      <h2>Risoluzione</h2>
      <p>
      Potremmo terminare o sospendere il tuo accesso immediatamente, senza preavviso né responsabilità, per qualsiasi
      motivo, incluso, senza limitazione, se violi questi Termini e Condizioni.
      </p>
      </div>

      <div className="legal-item">
      <h2>Limitazione di Responsabilità</h2>
      <p>
      Nella misura massima consentita dalla legge applicabile, in nessun caso la Società o i suoi fornitori saranno
      responsabili per eventuali danni speciali, incidentali, indiretti o consequenziali di qualsiasi tipo.
      </p>
      </div>

      <div className="legal-item">
      <h2>Disclaimer &quot;COSÌ COM&apos;È&quot; e &quot;COME DISPONIBILE&quot;</h2>
      <p>
      Il Servizio è fornito &quot;COSÌ COM&apos;È&quot; e &quot;COME DISPONIBILE&quot; e con tutti i difetti e le mancanze
      senza garanzia di alcun tipo.
      </p>
      </div>

      <div className="legal-item">
      <h2>Modifiche a questi Termini e Condizioni</h2>
      <p>
      Ci riserviamo il diritto, a nostra esclusiva discrezione, di modificare o sostituire questi Termini in qualsiasi
      momento. Continuando ad accedere o utilizzare il nostro Servizio dopo l&apos;entrata in vigore di tali revisioni,
      accetti di essere vincolato dai termini rivisti.
      </p>
      </div>

      <div className="legal-item">
      <h2>Contattaci</h2>
      <p>Se hai domande su questi Termini e Condizioni, puoi contattarci tramite la nostra piattaforma.</p>
      </div>
    </LegalPage>
  );
}
