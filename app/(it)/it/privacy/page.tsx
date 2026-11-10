import type { Metadata } from "next";
import { LegalPage } from "@/components/site/pages";
import { getDict } from "@/content";
import { pageMetadata } from "@/lib/seo";

const locale = "it" as const;
const title = getDict(locale).legal.privacy;

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/privacy",
  title: `${title} | GiGa FliX IPTV`,
  description: `${title} – GiGa FliX IPTV – abbonamento IPTV premium con supporto 24/7.`,
});

export default function Page() {
  return (
    <LegalPage locale={locale} path="/privacy" title={title}>
            <div className="legal-item">
      <p>
      Questa Politica sulla Privacy descrive le nostre politiche e procedure sulla raccolta, l&apos;uso e la
      divulgazione delle tue informazioni quando utilizzi il Servizio e ti informa sui tuoi diritti alla privacy e su
      come la legge ti protegge.
      </p>
      </div>

      <div className="legal-item">
      <h2>Interpretazione</h2>
      <p>
      Le parole con l&apos;iniziale maiuscola hanno significati definiti nelle seguenti condizioni. Le seguenti
      definizioni hanno lo stesso significato, indipendentemente dal fatto che appaiano al singolare o al plurale.
      </p>
      </div>

      <div className="legal-item">
      <h2>Dati Personali</h2>
      <p>
      Durante l&apos;utilizzo del nostro Servizio, potremmo chiederti di fornirci alcune informazioni di identificazione
      personale che possono essere utilizzate per contattarti o identificarti. Le informazioni di identificazione
      personale possono includere, ma non sono limitate a: indirizzo email, nome e cognome, numero di telefono, dati
      di utilizzo.
      </p>
      </div>

      <div className="legal-item">
      <h2>Dati di Utilizzo</h2>
      <p>
      I Dati di Utilizzo vengono raccolti automaticamente durante l&apos;utilizzo del Servizio. I Dati di Utilizzo
      possono includere informazioni come l&apos;indirizzo del protocollo Internet del tuo dispositivo (es. indirizzo IP),
      il tipo di browser, la versione del browser, le pagine del nostro Servizio che visiti, l&apos;ora e la data della
      tua visita, il tempo trascorso su quelle pagine, identificatori univoci del dispositivo e altri dati diagnostici.
      </p>
      </div>

      <div className="legal-item">
      <h2>Tecnologie di Tracciamento e Cookie</h2>
      <p>
      Utilizziamo Cookie e tecnologie di tracciamento simili per tracciare l&apos;attività sul nostro Servizio e
      conservare determinate informazioni.
      </p>
      </div>

      <div className="legal-item">
      <h2>Uso dei tuoi Dati Personali</h2>
      <p>
      La Società utilizza i Dati Personali per vari scopi, tra cui fornire e mantenere il nostro Servizio, gestire il
      tuo account ed eseguire gli obblighi contrattuali. Potremmo contattarti via email, telefonate o altre forme di
      comunicazione elettronica.
      </p>
      </div>

      <div className="legal-item">
      <h2>Sicurezza dei tuoi Dati Personali</h2>
      <p>
      La sicurezza dei tuoi Dati Personali è importante per noi, ma ricorda che nessun metodo di trasmissione su
      Internet o metodo di archiviazione elettronica è sicuro al 100%. Sebbene ci adoperiamo per utilizzare mezzi
      commercialmente accettabili per proteggere i tuoi Dati Personali, non possiamo garantire la loro assoluta
      sicurezza.
      </p>
      </div>

      <div className="legal-item">
      <h2>Contattaci</h2>
      <p>Se hai domande su questa Politica sulla Privacy, puoi contattarci.</p>
      </div>
    </LegalPage>
  );
}
