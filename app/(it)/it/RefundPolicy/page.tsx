import type { Metadata } from "next";
import { LegalPage } from "@/components/site/pages";
import { getDict } from "@/content";
import { pageMetadata } from "@/lib/seo";

const locale = "it" as const;
const title = getDict(locale).legal.refund;

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/RefundPolicy",
  title: `${title} | GiGa FliX IPTV`,
  description: `${title} – GiGa FliX IPTV – abbonamento IPTV premium con supporto 24/7.`,
});

export default function Page() {
  return (
    <LegalPage locale={locale} path="/RefundPolicy" title={title}>
            <div className="legal-item">
      <p>
      Ci impegniamo per la soddisfazione dei nostri clienti. Se non sei completamente soddisfatto del tuo acquisto,
      siamo qui per aiutarti. <br />
      Si prega di leggere la nostra politica di rimborso qui sotto:
      </p>
      </div>

      <div className="legal-item">
      <h2>Idoneità al Rimborso</h2>
      <p>
      I rimborsi sono possibili entro <strong>7 giorni</strong> dalla data di acquisto. Per essere idoneo a un
      rimborso, il prodotto o servizio deve essere inutilizzato e nelle stesse condizioni in cui l&apos;hai ricevuto. Se
      la tua richiesta viene approvata, il tuo rimborso verrà elaborato e un credito verrà automaticamente applicato
      alla tua carta di credito o al metodo di pagamento originale entro un certo numero di giorni.
      </p>
      </div>

      <div className="legal-item">
      <h2>Articoli in Promozione</h2>
      <p>Solo gli articoli a prezzo regolare possono essere rimborsati. Gli articoli in saldo purtroppo non sono rimborsabili.</p>
      </div>

      <div className="legal-item">
      <h2>Come Richiedere un Rimborso</h2>
      <p>
      Per avviare un rimborso, contatta il nostro team di supporto clienti tramite WhatsApp o il modulo di contatto
      sulla nostra piattaforma. Fornisci il numero dell&apos;ordine e una spiegazione dettagliata del motivo della
      richiesta di rimborso. Il nostro team esaminerà la tua richiesta e risponderà entro 7 giorni lavorativi.
      </p>
      </div>

      <div className="legal-item">
      <h2>Processo di Rimborso</h2>
      <p>
      Una volta approvata la tua richiesta di rimborso, l&apos;importo verrà automaticamente accreditato sul tuo metodo
      di pagamento originale entro 2 giorni.
      </p>
      </div>

      <div className="legal-item">
      <h2>Rimborsi in Ritardo o Mancanti</h2>
      <p>
      Se non hai ancora ricevuto un rimborso, controlla di nuovo il tuo conto bancario. Quindi contatta la tua banca o
      l&apos;emittente della carta di credito, potrebbe volerci del tempo prima che il tuo rimborso venga ufficialmente
      registrato. Se hai fatto tutto questo e non hai ancora ricevuto il rimborso, contattaci.
      </p>
      </div>

      <div className="legal-item">
      <h2>Circostanze Speciali</h2>
      <p>
      Comprendiamo che possono esserci circostanze eccezionali in cui è necessario un rimborso al di fuori della nostra
      politica standard. Contattaci direttamente per discutere di qualsiasi situazione unica.
      </p>
      </div>

      <div className="legal-item">
      <h2>Modifiche alla Politica di Rimborso</h2>
      <p>
      GiGa FliX si riserva il diritto di modificare o aggiornare questa politica di rimborso in qualsiasi momento.
      Tutte le modifiche entreranno in vigore immediatamente dopo la pubblicazione sul sito web.
      </p>
      </div>
    </LegalPage>
  );
}
