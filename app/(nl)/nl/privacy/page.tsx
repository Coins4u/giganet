import type { Metadata } from "next";
import { LegalPage } from "@/components/site/pages";
import { getDict } from "@/content";
import { pageMetadata } from "@/lib/seo";

const locale = "nl" as const;
const title = getDict(locale).legal.privacy;

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/privacy",
  title: `${title} | GiGa FliX IPTV`,
  description: `${title} – GiGa FliX IPTV – premium IPTV abonnement met 24/7 support.`,
});

export default function Page() {
  return (
    <LegalPage locale={locale} path="/privacy" title={title}>
            <div className="legal-item">
      <p>
      Dit Privacybeleid beschrijft ons beleid en onze procedures met betrekking tot het verzamelen, gebruiken en
      openbaar maken van je informatie wanneer je de Dienst gebruikt en informeert je over je privacyrechten en hoe de
      wet je beschermt.
      </p>
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
      <h2>Persoonlijke Gegevens</h2>
      <p>
      Tijdens het gebruik van onze Dienst kunnen we je vragen om ons bepaalde persoonlijk identificeerbare informatie te
      verstrekken die kan worden gebruikt om contact met je op te nemen of je te identificeren. Persoonlijk
      identificeerbare informatie kan omvatten, maar is niet beperkt tot: e-mailadres, voor- en achternaam,
      telefoonnummer, gebruiksgegevens.
      </p>
      </div>

      <div className="legal-item">
      <h2>Gebruiksgegevens</h2>
      <p>
      Gebruiksgegevens worden automatisch verzameld tijdens het gebruik van de Dienst. Gebruiksgegevens kunnen
      informatie bevatten zoals het Internet Protocol-adres van je apparaat (bijv. IP-adres), browsertype,
      browserversie, de pagina&apos;s van onze Dienst die je bezoekt, de tijd en datum van je bezoek, de tijd die op die
      pagina&apos;s is doorgebracht, unieke apparaatidentificatoren en andere diagnostische gegevens.
      </p>
      </div>

      <div className="legal-item">
      <h2>Trackingtechnologieën en Cookies</h2>
      <p>
      We gebruiken Cookies en soortgelijke trackingtechnologieën om de activiteit op onze Dienst te volgen en bepaalde
      informatie op te slaan.
      </p>
      </div>

      <div className="legal-item">
      <h2>Gebruik van je Persoonlijke Gegevens</h2>
      <p>
      Het Bedrijf gebruikt Persoonlijke Gegevens voor verschillende doeleinden, waaronder het leveren en onderhouden van
      onze Dienst, het beheren van je account en het uitvoeren van contractuele verplichtingen. We kunnen contact met je
      opnemen via e-mail, telefoongesprekken of andere vormen van elektronische communicatie.
      </p>
      </div>

      <div className="legal-item">
      <h2>Beveiliging van je Persoonlijke Gegevens</h2>
      <p>
      De beveiliging van je Persoonlijke Gegevens is belangrijk voor ons, maar onthoud dat geen enkele methode van
      verzending via internet of methode van elektronische opslag 100% veilig is. Hoewel we ernaar streven om
      commercieel aanvaardbare middelen te gebruiken om je Persoonlijke Gegevens te beschermen, kunnen we de absolute
      veiligheid ervan niet garanderen.
      </p>
      </div>

      <div className="legal-item">
      <h2>Contact</h2>
      <p>Als je vragen hebt over dit Privacybeleid, kun je contact met ons opnemen.</p>
      </div>
    </LegalPage>
  );
}
