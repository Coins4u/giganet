import type { Metadata } from "next";
import { LegalPage } from "@/components/site/pages";
import { getDict } from "@/content";
import { pageMetadata } from "@/lib/seo";

const locale = "fr" as const;
const title = getDict(locale).legal.refund;

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/RefundPolicy",
  title: `${title} | GiGa FliX IPTV`,
  description: `${title} – GiGa FliX IPTV – abonnement IPTV premium avec support 24h/24.`,
});

export default function Page() {
  return (
    <LegalPage locale={locale} path="/RefundPolicy" title={title}>
            <div className="legal-item">
      <p>
      Nous nous engageons à la satisfaction de nos clients. Si vous n&apos;êtes pas entièrement satisfait de votre
      achat, nous sommes là pour vous aider. <br />
      Veuillez lire notre politique de remboursement ci-dessous :
      </p>
      </div>

      <div className="legal-item">
      <h2>Éligibilité au Remboursement</h2>
      <p>
      Les remboursements sont possibles dans les <strong>7 jours</strong> suivant la date d&apos;achat. Pour être
      éligible à un remboursement, le produit ou service doit être inutilisé et dans le même état que vous l&apos;avez
      reçu. Si votre demande est approuvée, votre remboursement sera traité et un crédit sera automatiquement appliqué
      à votre carte de crédit ou à votre méthode de paiement originale dans un certain nombre de jours.
      </p>
      </div>

      <div className="legal-item">
      <h2>Articles en Promotion</h2>
      <p>
      Seuls les articles à prix régulier peuvent être remboursés. Les articles soldés ne sont malheureusement pas
      remboursables.
      </p>
      </div>

      <div className="legal-item">
      <h2>Comment demander un remboursement</h2>
      <p>
      Pour initier un remboursement, veuillez contacter notre équipe de support client via WhatsApp ou le formulaire de
      contact sur notre plateforme. Fournissez votre numéro de commande et une explication détaillée de la raison de la
      demande de remboursement. Notre équipe examinera votre demande et répondra dans les 7 jours ouvrables.
      </p>
      </div>

      <div className="legal-item">
      <h2>Processus de Remboursement</h2>
      <p>
      Une fois votre demande de remboursement approuvée, le montant sera automatiquement crédité sur votre méthode de
      paiement originale dans les 2 jours.
      </p>
      </div>

      <div className="legal-item">
      <h2>Remboursements en retard ou manquants</h2>
      <p>
      Si vous n&apos;avez pas encore reçu de remboursement, vérifiez d&apos;abord à nouveau votre compte bancaire.
      Ensuite, contactez votre société de carte de crédit, cela peut prendre un certain temps avant que votre
      remboursement ne soit officiellement affiché. Si vous avez fait tout cela et que vous n&apos;avez toujours pas
      reçu votre remboursement, veuillez nous contacter.
      </p>
      </div>

      <div className="legal-item">
      <h2>Circonstances Spéciales</h2>
      <p>
      Nous comprenons qu&apos;il peut y avoir des circonstances exceptionnelles où un remboursement en dehors de notre
      politique standard est nécessaire. Veuillez nous contacter directement pour discuter de toute situation unique.
      </p>
      </div>

      <div className="legal-item">
      <h2>Modifications de la Politique de Remboursement</h2>
      <p>
      GiGa FliX se réserve le droit de modifier ou de mettre à jour cette politique de remboursement à tout moment.
      Toutes les modifications entreront en vigueur immédiatement après leur publication sur le site web.
      </p>
      </div>
    </LegalPage>
  );
}
