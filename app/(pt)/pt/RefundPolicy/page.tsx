import type { Metadata } from "next";
import { LegalPage } from "@/components/site/pages";
import { getDict } from "@/content";
import { pageMetadata } from "@/lib/seo";

const locale = "pt" as const;
const title = getDict(locale).legal.refund;

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/RefundPolicy",
  title: `${title} | GiGa FliX IPTV`,
  description: `${title} – GiGa FliX IPTV – assinatura IPTV premium com suporte 24/7.`,
});

export default function Page() {
  return (
    <LegalPage locale={locale} path="/RefundPolicy" title={title}>
            <div className="legal-item">
      <p>
      Nós esforçamo-nos pela total satisfação dos nossos clientes. Se não estiver completamente satisfeito com a sua
      compra, estamos aqui para ajudar. <br />
      Leia a nossa política de reembolso abaixo:
      </p>
      </div>

      <div className="legal-item">
      <h2>Condições para Reembolso</h2>
      <p>
      Os reembolsos são possíveis no prazo de <strong>7 dias</strong> após a data da compra. Para ser elegível para um
      reembolso, o produto ou serviço deve estar por utilizar e nas mesmas condições em que o recebeu. Se o seu pedido
      for aprovado, o reembolso será processado e um crédito será automaticamente aplicado ao seu cartão de crédito ou
      método de pagamento original, dentro de um determinado número de dias.
      </p>
      </div>

      <div className="legal-item">
      <h2>Artigos em Promoção</h2>
      <p>
      Apenas artigos com preço normal podem ser reembolsados. Infelizmente, artigos em promoção não podem ser
      reembolsados.
      </p>
      </div>

      <div className="legal-item">
      <h2>Solicitar um Reembolso</h2>
      <p>
      Para iniciar um reembolso, contacte a nossa equipa de apoio ao cliente através do formulário de contacto no nosso
      site. Indique o número da encomenda e uma explicação detalhada do motivo do pedido de reembolso. A nossa equipa
      analisará o seu pedido e responderá no prazo de 7 dias úteis.
      </p>
      </div>

      <div className="legal-item">
      <h2>Processamento</h2>
      <p>
      Assim que o seu pedido de reembolso for aprovado, o montante será automaticamente reembolsado para o seu método
      de pagamento original no prazo de 2 dias.
      </p>
      </div>

      <div className="legal-item">
      <h2>Reembolsos Atrasados ou em Falta</h2>
      <p>
      Se ainda não recebeu um reembolso, verifique primeiro a sua conta bancária novamente. De seguida, contacte o seu
      banco ou a empresa do cartão de crédito; pode demorar algum tempo até que o seu reembolso seja oficialmente
      creditado. Se já fez tudo isto e ainda não recebeu o seu reembolso, por favor contacte-nos.
      </p>
      </div>

      <div className="legal-item">
      <h2>Circunstâncias Especiais</h2>
      <p>
      Compreendemos que possam existir circunstâncias excecionais em que um reembolso seja necessário fora da nossa
      política padrão. Contacte-nos diretamente para discutir situações únicas.
      </p>
      </div>

      <div className="legal-item">
      <h2>Alterações à Política de Reembolso</h2>
      <p>
      A GiGa FliX reserva-se o direito de alterar ou atualizar esta política de reembolso a qualquer momento. Todas as
      alterações entram em vigor imediatamente após a sua publicação no site.
      </p>
      </div>
    </LegalPage>
  );
}
