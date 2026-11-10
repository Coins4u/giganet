import type { Metadata } from "next";
import { LegalPage } from "@/components/site/pages";
import { getDict } from "@/content";
import { pageMetadata } from "@/lib/seo";

const locale = "fr" as const;
const title = getDict(locale).legal.terms;

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/TermsConditions",
  title: `${title} | GiGa FliX IPTV`,
  description: `${title} – GiGa FliX IPTV – abonnement IPTV premium avec support 24h/24.`,
});

export default function Page() {
  return (
    <LegalPage locale={locale} path="/TermsConditions" title={title}>
            <div className="legal-item">
      <p>Veuillez lire attentivement ces conditions générales avant d&apos;utiliser notre service.</p>
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
      <h2>Définitions</h2>
      <p>
      Aux fins de ces Conditions Générales, le terme &quot;Société Affiliée&quot; fait référence à une entité qui
      contrôle, est contrôlée par ou est sous contrôle commun avec une partie. L&apos;entité désignée dans cet accord
      comme &quot;la Société&quot;, &quot;Nous&quot;, &quot;Notre&quot; ou &quot;Nos&quot; est GiGa FliX.
      &quot;Appareil&quot; désigne tout appareil pouvant accéder au Service. Le terme &quot;Service&quot; fait
      référence au site web.
      </p>
      </div>

      <div className="legal-item">
      <h2>Reconnaissance</h2>
      <p>
      Ce sont les Conditions Générales régissant l&apos;utilisation de ce Service et l&apos;accord qui s&apos;applique
      entre Vous et la Société. Votre accès et votre utilisation du Service sont conditionnés par votre acceptation et
      votre respect de ces Conditions Générales. En accédant ou en utilisant le Service, vous acceptez d&apos;être lié
      par ces Conditions Générales.
      </p>
      </div>

      <div className="legal-item">
      <h2>Liens vers d&apos;autres sites web</h2>
      <p>
      Notre Service peut contenir des liens vers des sites web ou des services tiers qui ne sont pas détenus ou
      contrôlés par la Société. La Société n&apos;a aucun contrôle sur et n&apos;assume aucune responsabilité quant au
      contenu, aux politiques de confidentialité ou aux pratiques de tout site web ou service tiers.
      </p>
      </div>

      <div className="legal-item">
      <h2>Résiliation</h2>
      <p>
      Nous pouvons résilier ou suspendre votre accès immédiatement, sans préavis ni responsabilité, pour quelque raison
      que ce soit, y compris, sans s&apos;y limiter, si vous violez ces Conditions Générales.
      </p>
      </div>

      <div className="legal-item">
      <h2>Limitation de Responsabilité</h2>
      <p>
      Dans la mesure maximale permise par la loi applicable, en aucun cas la Société ou ses fournisseurs ne seront
      responsables de tout dommage spécial, accessoire, indirect ou consécutif quel qu&apos;il soit.
      </p>
      </div>

      <div className="legal-item">
      <h2>Avis de non-responsabilité &quot;TEL QUEL&quot; et &quot;TEL QUE DISPONIBLE&quot;</h2>
      <p>
      Le Service est fourni &quot;TEL QUEL&quot; et &quot;TEL QUE DISPONIBLE&quot; et avec tous les défauts et
      défaillances sans garantie d&apos;aucune sorte.
      </p>
      </div>

      <div className="legal-item">
      <h2>Modifications de ces Conditions Générales</h2>
      <p>
      Nous nous réservons le droit, à notre seule discrétion, de modifier ou de remplacer ces Conditions à tout moment.
      En continuant à accéder ou à utiliser notre Service après l&apos;entrée en vigueur de ces révisions, vous acceptez
      d&apos;être lié par les conditions révisées.
      </p>
      </div>

      <div className="legal-item">
      <h2>Contactez-nous</h2>
      <p>Si vous avez des questions sur ces Conditions Générales, vous pouvez nous contacter via notre plateforme.</p>
      </div>
    </LegalPage>
  );
}
