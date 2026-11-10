import type { Metadata } from "next";
import { LegalPage } from "@/components/site/pages";
import { getDict } from "@/content";
import { pageMetadata } from "@/lib/seo";

const locale = "nl" as const;
const title = getDict(locale).legal.refund;

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/RefundPolicy",
  title: `${title} | GiGa FliX IPTV`,
  description: `${title} – GiGa FliX IPTV – premium IPTV abonnement met 24/7 support.`,
});

export default function Page() {
  return (
    <LegalPage locale={locale} path="/RefundPolicy" title={title}>
            <div className="legal-item">
      <p>
      Wij streven naar de volledige tevredenheid van onze klanten. Als je niet volledig tevreden bent met je aankoop,
      staan we klaar om je te helpen. <br />
      Lees ons restitutiebeleid hieronder:
      </p>
      </div>

      <div className="legal-item">
      <h2>Voorwaarden voor Restitutie</h2>
      <p>
      Restituties zijn mogelijk binnen <strong>7 dagen</strong> na de aankoopdatum. Om in aanmerking te komen voor een
      terugbetaling, moet het product of de dienst ongebruikt zijn en in dezelfde staat verkeren als waarin je het hebt
      ontvangen. Als je verzoek wordt goedgekeurd, wordt je terugbetaling verwerkt en wordt er automatisch een tegoed
      toegepast op je creditcard of oorspronkelijke betaalmethode binnen een bepaald aantal dagen.
      </p>
      </div>

      <div className="legal-item">
      <h2>Promotie Artikelen</h2>
      <p>
      Alleen artikelen met een normale prijs kunnen worden terugbetaald. Artikelen in de uitverkoop kunnen helaas niet
      worden terugbetaald.
      </p>
      </div>

      <div className="legal-item">
      <h2>Een Restitutie Aanvragen</h2>
      <p>
      Om een restitutie te starten, neem contact op met ons klantenserviceteam via het contactformulier op ons
      platform. Vermeld het bestelnummer en een gedetailleerde uitleg van de reden voor het restitutieverzoek. Ons team
      zal je verzoek beoordelen en binnen 7 werkdagen reageren.
      </p>
      </div>

      <div className="legal-item">
      <h2>Verwerkingsproces</h2>
      <p>
      Zodra je restitutieverzoek is goedgekeurd, wordt het bedrag automatisch teruggestort op je oorspronkelijke
      betaalmethode binnen 2 dagen.
      </p>
      </div>

      <div className="legal-item">
      <h2>Late of Ontbrekende Restituties</h2>
      <p>
      Als je nog geen terugbetaling hebt ontvangen, controleer dan eerst je bankrekening opnieuw. Neem vervolgens contact
      op met je bank of creditcardmaatschappij; het kan even duren voordat je terugbetaling officieel wordt
      bijgeschreven. Als je dit allemaal hebt gedaan en je hebt je terugbetaling nog steeds niet ontvangen, neem dan
      contact met ons op.
      </p>
      </div>

      <div className="legal-item">
      <h2>Speciale Omstandigheden</h2>
      <p>
      We begrijpen dat er uitzonderlijke omstandigheden kunnen zijn waarin een terugbetaling nodig is buiten ons
      standaardbeleid om. Neem direct contact met ons op om unieke situaties te bespreken.
      </p>
      </div>

      <div className="legal-item">
      <h2>Wijzigingen in het Restitutiebeleid</h2>
      <p>
      GiGa FliX behoudt zich het recht voor om dit restitutiebeleid op elk moment te wijzigen of bij te werken. Alle
      wijzigingen worden onmiddellijk van kracht na publicatie op de website.
      </p>
      </div>
    </LegalPage>
  );
}
