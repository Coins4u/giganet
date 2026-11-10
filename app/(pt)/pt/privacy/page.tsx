import type { Metadata } from "next";
import { LegalPage } from "@/components/site/pages";
import { getDict } from "@/content";
import { pageMetadata } from "@/lib/seo";

const locale = "pt" as const;
const title = getDict(locale).legal.privacy;

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/privacy",
  title: `${title} | GiGa FliX IPTV`,
  description: `${title} – GiGa FliX IPTV – assinatura IPTV premium com suporte 24/7.`,
});

export default function Page() {
  return (
    <LegalPage locale={locale} path="/privacy" title={title}>
            <div className="legal-item">
      <p>
      Esta Política de Privacidade descreve as nossas políticas e procedimentos sobre a recolha, uso e divulgação das suas
      informações quando utiliza o Serviço e informa-o sobre os seus direitos de privacidade e como a lei o protege.
      </p>
      </div>

      <div className="legal-item">
      <h2>Interpretação</h2>
      <p>
      As palavras cuja letra inicial é maiúscula têm significados definidos nas seguintes condições. As seguintes
      definições terão o mesmo significado, independentemente de aparecerem no singular ou no plural.
      </p>
      </div>

      <div className="legal-item">
      <h2>Dados Pessoais</h2>
      <p>
      Ao utilizar o nosso Serviço, podemos pedir-lhe que nos forneça certas informações de identificação pessoal que
      podem ser usadas para contactá-lo ou identificá-lo. Informações de identificação pessoal podem incluir, mas não
      estão limitadas a: endereço de e-mail, nome e apelido, número de telefone, dados de uso.
      </p>
      </div>

      <div className="legal-item">
      <h2>Dados de Uso</h2>
      <p>
      Os Dados de Uso são recolhidos automaticamente ao utilizar o Serviço. Os Dados de Uso podem incluir informações
      como o endereço de Protocolo de Internet do seu dispositivo (por exemplo, endereço IP), tipo de navegador, versão
      do navegador, as páginas do nosso Serviço que visita, a hora e data da sua visita, o tempo gasto nessas páginas,
      identificadores únicos de dispositivo e outros dados de diagnóstico.
      </p>
      </div>

      <div className="legal-item">
      <h2>Tecnologias de Rastreamento e Cookies</h2>
      <p>
      Utilizamos Cookies e tecnologias de rastreamento semelhantes para rastrear a atividade no nosso Serviço e
      armazenar certas informações.
      </p>
      </div>

      <div className="legal-item">
      <h2>Uso dos seus Dados Pessoais</h2>
      <p>
      A Empresa utiliza Dados Pessoais para vários fins, incluindo fornecer e manter o nosso Serviço, gerir a sua conta
      e cumprir obrigações contratuais. Podemos contactá-lo por e-mail, chamadas telefónicas ou outras formas de
      comunicação eletrónica.
      </p>
      </div>

      <div className="legal-item">
      <h2>Segurança dos seus Dados Pessoais</h2>
      <p>
      A segurança dos seus Dados Pessoais é importante para nós, mas lembre-se que nenhum método de transmissão pela
      Internet ou método de armazenamento eletrónico é 100% seguro. Embora nos esforcemos para utilizar meios
      comercialmente aceitáveis para proteger os seus Dados Pessoais, não podemos garantir a sua segurança absoluta.
      </p>
      </div>

      <div className="legal-item">
      <h2>Contacto</h2>
      <p>Se tiver alguma dúvida sobre esta Política de Privacidade, pode contactar-nos.</p>
      </div>
    </LegalPage>
  );
}
