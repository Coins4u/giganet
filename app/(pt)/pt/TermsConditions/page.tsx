import type { Metadata } from "next";
import { LegalPage } from "@/components/site/pages";
import { getDict } from "@/content";
import { pageMetadata } from "@/lib/seo";

const locale = "pt" as const;
const title = getDict(locale).legal.terms;

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/TermsConditions",
  title: `${title} | GiGa FliX IPTV`,
  description: `${title} – GiGa FliX IPTV – assinatura IPTV premium com suporte 24/7.`,
});

export default function Page() {
  return (
    <LegalPage locale={locale} path="/TermsConditions" title={title}>
            <div className="legal-item">
      <p>Leia estes termos e condições cuidadosamente antes de utilizar o nosso serviço.</p>
      </div>

      <div className="legal-item">
      <h2>Interpretação</h2>
      <p>
      As palavras cuja letra inicial é maiúscula têm significados definidos nas seguintes condições. As seguintes
      definições terão o mesmo significado, independentemente de aparecerem no singular ou no plural.
      </p>
      </div>

      <div className="legal-item">
      <h2>Definições</h2>
      <p>
      Para os fins destes Termos e Condições, o termo &quot;Afiliada&quot; refere-se a uma entidade que controla, é
      controlada por ou está sob controlo comum com uma parte. A entidade referida neste acordo como &quot;a
      Empresa&quot;, &quot;Nós&quot;, &quot;Nosso&quot; ou &quot;Nossa&quot; é a GiGa FliX. &quot;Dispositivo&quot;
      significa qualquer dispositivo que possa aceder ao Serviço. O termo &quot;Serviço&quot; refere-se ao site.
      </p>
      </div>

      <div className="legal-item">
      <h2>Reconhecimento</h2>
      <p>
      Estes são os Termos e Condições que regem o uso deste Serviço e o acordo que opera entre Si e a Empresa. O seu
      acesso e uso do Serviço estão condicionados à sua aceitação e cumprimento destes Termos e Condições. Ao aceder ou
      utilizar o Serviço, concorda em ficar vinculado a estes Termos e Condições.
      </p>
      </div>

      <div className="legal-item">
      <h2>Links para Outros Sites</h2>
      <p>
      O nosso Serviço pode conter links para sites ou serviços de terceiros que não são detidos ou controlados pela
      Empresa. A Empresa não tem controlo sobre e não assume responsabilidade pelo conteúdo, políticas de privacidade ou
      práticas de quaisquer sites ou serviços de terceiros.
      </p>
      </div>

      <div className="legal-item">
      <h2>Rescisão</h2>
      <p>
      Podemos rescindir ou suspender o seu acesso imediatamente, sem aviso prévio ou responsabilidade, por qualquer
      motivo, incluindo, sem limitação, se violar estes Termos e Condições.
      </p>
      </div>

      <div className="legal-item">
      <h2>Limitação de Responsabilidade</h2>
      <p>
      Na extensão máxima permitida pela lei aplicável, em nenhum caso a Empresa ou os seus fornecedores serão
      responsáveis por quaisquer danos especiais, incidentais, indiretos ou consequenciais de qualquer tipo.
      </p>
      </div>

      <div className="legal-item">
      <h2>Isenção de responsabilidade &quot;COMO ESTÁ&quot; e &quot;CONFORME DISPONÍVEL&quot;</h2>
      <p>
      O Serviço é fornecido a Si &quot;COMO ESTÁ&quot; e &quot;CONFORME DISPONÍVEL&quot; e com todas as falhas e defeitos
      sem garantia de qualquer tipo.
      </p>
      </div>

      <div className="legal-item">
      <h2>Alterações a estes Termos e Condições</h2>
      <p>
      Reservamo-nos o direito, a nosso exclusivo critério, de modificar ou substituir estes Termos a qualquer momento.
      Ao continuar a aceder ou usar o nosso Serviço após essas revisões entrarem em vigor, concorda em ficar vinculado aos
      termos revistos.
      </p>
      </div>

      <div className="legal-item">
      <h2>Contacto</h2>
      <p>Se tiver alguma dúvida sobre estes Termos e Condições, pode contactar-nos através da nossa plataforma.</p>
      </div>
    </LegalPage>
  );
}
