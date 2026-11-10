import type { Metadata } from "next";
import { LegalPage } from "@/components/site/pages";
import { getDict } from "@/content";
import { pageMetadata } from "@/lib/seo";

const locale = "nl" as const;
const title = getDict(locale).legal.terms;

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/TermsConditions",
  title: `${title} | GiGa FliX IPTV`,
  description: `${title} – GiGa FliX IPTV – premium IPTV abonnement met 24/7 support.`,
});

export default function Page() {
  return (
    <LegalPage locale={locale} path="/TermsConditions" title={title}>
            <div className="legal-item">
      <p>Lees deze algemene voorwaarden zorgvuldig door voordat je onze dienst gebruikt.</p>
      </div>

      <div className="legal-item">
      <h2>Interpretatie</h2>
      <p>
      De woorden waarvan de beginletter met een hoofdletter is geschreven, hebben de betekenis die in de volgende
      voorwaarden is gedefinieerd. De volgende definities hebben dezelfde betekenis, ongeacht of ze in het enkelvoud of
      meervoud voorkomen.
      </p>
      </div>

      <div className="legal-item">
      <h2>Definities</h2>
      <p>
      Voor de toepassing van deze Algemene Voorwaarden verwijst de term &quot;Gelieerde Onderneming&quot; naar een entiteit
      die zeggenschap heeft over, onder zeggenschap staat van of onder gemeenschappelijke zeggenschap staat met een partij.
      De entiteit die in deze overeenkomst wordt aangeduid als &quot;het Bedrijf&quot;, &quot;Wij&quot;, &quot;Ons&quot;
      of &quot;Onze&quot; is GiGa FliX. &quot;Apparaat&quot; betekent elk apparaat dat toegang kan krijgen tot de Dienst.
      De term &quot;Dienst&quot; verwijst naar de website.
      </p>
      </div>

      <div className="legal-item">
      <h2>Erkenning</h2>
      <p>
      Dit zijn de Algemene Voorwaarden die het gebruik van deze Dienst regelen en de overeenkomst die van kracht is
      tussen Jou en het Bedrijf. Je toegang tot en gebruik van de Dienst is afhankelijk van je acceptatie en naleving van
      deze Algemene Voorwaarden. Door toegang te krijgen tot of gebruik te maken van de Dienst, ga je ermee akkoord
      gebonden te zijn aan deze Algemene Voorwaarden.
      </p>
      </div>

      <div className="legal-item">
      <h2>Links naar andere websites</h2>
      <p>
      Onze Dienst kan links bevatten naar websites of diensten van derden die geen eigendom zijn van of beheerd worden
      door het Bedrijf. Het Bedrijf heeft geen controle over en aanvaardt geen verantwoordelijkheid voor de inhoud, het
      privacybeleid of de praktijken van websites of diensten van derden.
      </p>
      </div>

      <div className="legal-item">
      <h2>Beëindiging</h2>
      <p>
      Wij kunnen je toegang onmiddellijk beëindigen of opschorten, zonder voorafgaande kennisgeving of aansprakelijkheid,
      om welke reden dan ook, inclusief maar niet beperkt tot als je deze Algemene Voorwaarden schendt.
      </p>
      </div>

      <div className="legal-item">
      <h2>Beperking van Aansprakelijkheid</h2>
      <p>
      Voor zover maximaal toegestaan door de toepasselijke wetgeving, zijn het Bedrijf of zijn leveranciers in geen geval
      aansprakelijk voor enige speciale, incidentele, indirecte of gevolgschade van welke aard dan ook.
      </p>
      </div>

      <div className="legal-item">
      <h2>Disclaimer &quot;ZOALS HET IS&quot; en &quot;ZOALS BESCHIKBAAR&quot;</h2>
      <p>
      De Dienst wordt geleverd &quot;ZOALS HET IS&quot; en &quot;ZOALS BESCHIKBAAR&quot; en met alle fouten en defecten
      zonder enige vorm van garantie.
      </p>
      </div>

      <div className="legal-item">
      <h2>Wijzigingen aan deze Algemene Voorwaarden</h2>
      <p>
      Wij behouden ons het recht voor om, naar eigen goeddunken, deze Voorwaarden op elk moment te wijzigen of te
      vervangen. Door door te gaan met toegang tot of gebruik van onze Dienst na het van kracht worden van deze
      wijzigingen, ga je ermee akkoord gebonden te zijn aan de gewijzigde voorwaarden.
      </p>
      </div>

      <div className="legal-item">
      <h2>Contact</h2>
      <p>Als je vragen hebt over deze Algemene Voorwaarden, kun je contact met ons opnemen via ons platform.</p>
      </div>
    </LegalPage>
  );
}
