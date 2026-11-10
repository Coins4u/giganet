import type { Metadata } from "next";
import { LegalPage } from "@/components/site/pages";
import { getDict } from "@/content";
import { pageMetadata } from "@/lib/seo";

const locale = "fr" as const;
const title = getDict(locale).legal.privacy;

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/privacy",
  title: `${title} | GiGa FliX IPTV`,
  description: `${title} – GiGa FliX IPTV – abonnement IPTV premium avec support 24h/24.`,
});

export default function Page() {
  return (
    <LegalPage locale={locale} path="/privacy" title={title}>
            <div className="legal-item">
      <p>
      Cette Politique de Confidentialité décrit nos politiques et procédures sur la collecte, l&apos;utilisation et la
      divulgation de vos informations lorsque vous utilisez le Service et vous informe sur vos droits à la
      confidentialité et comment la loi vous protège.
      </p>
      </div>

      <div className="legal-item">
      <h2>Interprétation</h2>
      <p>
      Les mots dont la lettre initiale est en majuscule ont des significations définies dans les conditions
      suivantes. Les définitions suivantes ont la même signification, qu&apos;elles apparaissent au singulier ou au
      pluriel.
      </p>
      </div>

      <div className="legal-item">
      <h2>Données Personnelles</h2>
      <p>
      Lors de l&apos;utilisation de notre Service, nous pouvons vous demander de nous fournir certaines informations
      personnelles identifiables qui peuvent être utilisées pour vous contacter ou vous identifier. Les informations
      personnelles identifiables peuvent inclure, mais ne sont pas limitées à : adresse email, prénom et nom, numéro
      de téléphone, données d&apos;utilisation.
      </p>
      </div>

      <div className="legal-item">
      <h2>Données d&apos;Utilisation</h2>
      <p>
      Les Données d&apos;Utilisation sont collectées automatiquement lors de l&apos;utilisation du Service. Les Données
      d&apos;Utilisation peuvent inclure des informations telles que l&apos;adresse de protocole Internet de votre
      appareil (par ex. adresse IP), le type de navigateur, la version du navigateur, les pages de notre Service que
      vous visitez, l&apos;heure et la date de votre visite, le temps passé sur ces pages, les identifiants uniques de
      l&apos;appareil et d&apos;autres données de diagnostic.
      </p>
      </div>

      <div className="legal-item">
      <h2>Technologies de Suivi et Cookies</h2>
      <p>
      Nous utilisons des Cookies et des technologies de suivi similaires pour suivre l&apos;activité sur notre Service
      et stocker certaines informations.
      </p>
      </div>

      <div className="legal-item">
      <h2>Utilisation de vos Données Personnelles</h2>
      <p>
      La Société utilise les Données Personnelles à diverses fins, notamment pour fournir et maintenir notre Service,
      gérer votre compte et exécuter les obligations contractuelles. Nous pouvons vous contacter par email, appels
      téléphoniques ou autres formes de communication électronique.
      </p>
      </div>

      <div className="legal-item">
      <h2>Sécurité de vos Données Personnelles</h2>
      <p>
      La sécurité de vos Données Personnelles est importante pour nous, mais rappelez-vous qu&apos;aucune méthode de
      transmission sur Internet ou méthode de stockage électronique n&apos;est sécurisée à 100%. Bien que nous nous
      efforcions d&apos;utiliser des moyens commercialement acceptables pour protéger vos Données Personnelles, nous ne
      pouvons garantir leur sécurité absolue.
      </p>
      </div>

      <div className="legal-item">
      <h2>Contactez-nous</h2>
      <p>Si vous avez des questions sur cette Politique de Confidentialité, vous pouvez nous contacter.</p>
      </div>
    </LegalPage>
  );
}
