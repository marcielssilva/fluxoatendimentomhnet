import { useState } from 'react';
import { FlowchartNode } from './FlowchartNode';
import { FlowConnector } from './FlowConnector';
import { DetailPanel } from './DetailPanel';
import { ProcessCard } from './ProcessCard';
import {
  Home,
  Lock,
  Wrench,
  DollarSign,
  MapPin,
  PhoneCall,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Settings,
  CreditCard,
  WifiOff,
  Radio,
  Phone,
  Users,
  TrendingDown,
  AlertCircle,
  Target,
  Package,
  HandshakeIcon,
  ExternalLink,
  Monitor,
  BookOpen,
  Activity,
  Router,
} from 'lucide-react';

type DetailView = 'tecnico' | 'financeiro' | 'retencao' | 'n2' | null;

function TrainingLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
    >
      <ExternalLink className="size-4" />
      {children}
    </a>
  );
}

export function FlowchartView() {
  const [activeDetail, setActiveDetail] = useState<DetailView>(null);

  const getTecnicoContent = () => (
    <div className="space-y-6">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
        <h3 className="font-semibold text-blue-900 mb-2">📡 Fluxo Técnico</h3>
        <p className="text-sm text-blue-800">
          Suporte, Configuração, Telefonia e Mudanças Estruturais
        </p>
        <p className="text-sm text-blue-800 mt-2">
          <span>
            💰 <strong>SEMPRE</strong> verificar pendências financeiras
          </span>
        </p>
      </div>

      <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4">
        <h3 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
          <WifiOff className="size-5" />
          📡 3.1 Sem Conexão
        </h3>

        <ProcessCard
          title="Validação inicial"
          icon={<WifiOff className="w-4 h-4" />}
          color="red"
          steps={[
            'Confirmar se o cliente está realmente sem conexão total',
            'Verificar se as faturas estão em dia e se há bloqueio no contrato',
            'Validar se os cabos estão corretamente conectados e fixos',
            'Confirmar como estão as luzes da ONU/roteador',
            'Verificar se o nome da rede aparece para o cliente',
          ]}
        />

        <div className="mt-4">
          <ProcessCard
            title="Análise técnica"
            icon={<Wrench className="w-4 h-4" />}
            color="blue"
            steps={[
              'Verificar no sistema se o caso é link loss, fibra atenuada ou dying gasp',
              'Validar o sinal da fibra no UNM/U2000, priorizando essas ferramentas quando houver divergência',
              'Se estiver como “sem energia” no AutoISP e dying gasp no UNM/U2000, confirmar com o cliente se a ONU está ligada',
              'Solicitar foto do equipamento, validar luzes acesas e orientar teste em outra tomada quando necessário',
              'Se a rede não retornar após as validações, seguir para reprovisionamento ou visita técnica conforme o cenário',
            ]}
          />
        </div>

        <div className="mt-4">
          <ProcessCard
            title="Reprovisionamento da ONU"
            icon={<Settings className="w-4 h-4" />}
            color="purple"
            steps={[
              'Realizar reprovisionamento apenas em casos de perda de registro da ONU',
              'A perda de registro é caracterizada pela luz PON piscando continuamente',
              'Antes de reprovisionar, validar se a ONU está em modo Bridge ou Router',
              'Se o PPPoE estiver no roteador, utilizar Bridge; se estiver na ONU, utilizar Router',
              'No AutoISP, conferir as informações cadastradas, a tag ACS como “minimal” e então reprovisionar a ONU',
            ]}
          />
        </div>

        <div className="mt-4">
          <ProcessCard
            title="Orientações importantes"
            icon={<AlertCircle className="w-4 h-4" />}
            color="yellow"
            steps={[
              'Se houver bloqueio financeiro, seguir primeiro com o procedimento de desbloqueio',
              'Fibra OK: valor menor que -25 e diferença menor que -5 entre os sinais',
              'Fibra atenuada: valor maior que -25 ou diferença maior que -5 entre os sinais',
              'Se o nome da rede não aparecer, orientar o cliente a pressionar 1 vez o botão WPS e validar se a rede volta',
              'Se houver luz vermelha ou apagada no equipamento, seguir a análise das luzes antes de encerrar ou escalar',
            ]}
          />
        </div>

        <div className="mt-4">
          <ProcessCard
            title="Quando abrir visita técnica"
            icon={<Wrench className="w-4 h-4" />}
            color="green"
            steps={[
              'Abrir visita técnica somente se os passos anteriores não resolverem o problema',
              'Registrar no atendimento todas as verificações e procedimentos realizados',
              'Informar contato e localização corretamente para a equipe técnica',
              'Utilizar o script do ERP no relato do atendimento',
              'Sempre informar o cliente sobre possíveis custos da visita técnica',
            ]}
          />
        </div>

        <div className="mt-4 flex justify-center">
          <TrainingLink href="https://www.canva.com/design/DAG8UuszgF0/CLJjbHymUnA4z219pDKr5w/edit">
            🔗 SEM CONEXÃO – FIBRA
          </TrainingLink>
        </div>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4">
        <h3 className="font-semibold text-yellow-900 mb-3 flex items-center gap-2">
          <TrendingDown className="size-5" />
          🐢 3.2 Lentidão
        </h3>

        <ProcessCard
          title="Identificação da falha"
          icon={<Settings className="w-4 h-4" />}
          color="yellow"
          steps={[
            'Confirmar com o cliente se é lentidão constante ou em horários específicos',
            'Validar se ocorre em todos os dispositivos ou apenas em um',
            'Identificar tipo de uso (streaming, jogos, downloads, etc)',
          ]}
        />

        <div className="mt-4">
          <ProcessCard
            title="Validações iniciais"
            icon={<Wrench className="w-4 h-4" />}
            color="blue"
            steps={[
              'Priorizar teste cabeado para validar se é problema de Wi-Fi ou link',
              'Verificar cabos de rede e conexões físicas',
              'Solicitar reinicialização do equipamento',
              'Confirmar se há muitos dispositivos conectados simultaneamente',
            ]}
          />
        </div>

        <div className="mt-4">
          <ProcessCard
            title="Análise técnica"
            icon={<Settings className="w-4 h-4" />}
            color="purple"
            steps={[
              'Realizar acesso remoto e verificar consumo de banda',
              'Validar sinal da fibra e estabilidade da conexão',
              'Verificar se há indisponibilidade ou instabilidade na região',
              'Identificar possível interferência Wi-Fi (paredes, distância, equipamentos)',
            ]}
          />
        </div>

        <div className="mt-4">
          <ProcessCard
            title="Ajustes e tratativas"
            icon={<Wrench className="w-4 h-4" />}
            color="green"
            steps={[
              'Aplicar ajustes no roteador (Huawei / Flashman)',
              'Orientar posicionamento correto do roteador (local central, sem barreiras)',
              'Orientar troca de rede (2.4GHz ou 5GHz conforme cenário)',
              'Orientar redução de dispositivos ou uso simultâneo quando necessário',
            ]}
          />
        </div>

        <div className="mt-4">
          <ProcessCard
            title="Orientações importantes"
            icon={<CheckCircle2 className="w-4 h-4" />}
            color="yellow"
            steps={[
              'Se normalizar → validar funcionamento completo com o cliente',
              'Registrar como o teste foi realizado (Wi-Fi ou cabo)',
              '➡️ Persistindo a falha → Encaminhar para visita técnica',
            ]}
          />
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <TrainingLink href="https://drive.google.com/file/d/1CK1rd6kSxggA6szUAjz2PzqcS14evP_9/view?usp=sharing">
            🔗 Acesso Remoto
          </TrainingLink>
          <TrainingLink href="https://drive.google.com/file/d/1ikQ2KlVaJI2UQtWBPzklPo6MU8CrkP-C/view?usp=sharing">
            🔗 Configuração Huawei
          </TrainingLink>
          <TrainingLink href="https://drive.google.com/file/d/1Dofnz7px2acaLF8C4qbyfkN7OdktFsFa/view?usp=sharing">
            🔗 Flashman
          </TrainingLink>
        </div>
      </div>

      <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-4">
        <h3 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
          <Radio className="size-5" />
          📡 3.3 Via Rádio
        </h3>

        <ProcessCard
          title="Validação inicial"
          icon={<WifiOff className="w-4 h-4" />}
          color="orange"
          steps={[
            'Verificar se as faturas estão em dia (pode ser bloqueio)',
            'Confirmar se o nome da rede está aparecendo',
            'Validar se os cabos estão conectados corretamente',
            'Verificar como estão as luzes dos equipamentos',
            'Confirmar se o cliente está realmente sem conexão total',
          ]}
        />

        <div className="mt-4">
          <ProcessCard
            title="Identificar se é cliente via rádio"
            icon={<Settings className="w-4 h-4" />}
            color="yellow"
            steps={[
              'Verificar no contrato/serviço se consta “Banda Larga”',
              'Confirmar nas abas de conexões ou serviços do cliente',
              'Validar se o cliente utiliza antena externa (via rádio)',
            ]}
          />
        </div>

        <div className="mt-4">
          <ProcessCard
            title="Análise da torre (Zabbix)"
            icon={<Activity className="w-4 h-4" />}
            color="blue"
            steps={[
              'Localizar o concentrador ou IP do cliente no sistema',
              'Acessar o Zabbix e pesquisar pela torre',
              'Abrir os gráficos da torre',
              'Verificar se a torre está OFFLINE (vermelho) ou OSCILANDO',
              '➡️ Se estiver offline/oscilando → problema massivo (informar cliente)',
            ]}
          />
        </div>

        <div className="mt-4">
          <ProcessCard
            title="Acesso à antena do cliente"
            icon={<Router className="w-4 h-4" />}
            color="purple"
            steps={[
              'Tentar acesso via IP do cliente no navegador',
              'Testar portas comuns: 8080, 8081, 8000, 443, 7070, 7071, 7000',
              'Caso acesse, utilizar login conforme planilha de senhas',
            ]}
          />
        </div>

        <div className="mt-4">
          <ProcessCard
            title="Diagnóstico técnico da antena"
            icon={<Settings className="w-4 h-4" />}
            color="green"
            steps={[
              'Verificar modelo da antena',
              'Identificar torre (ponto de acesso)',
              'Validar distância até a torre',
              'Analisar potência do sinal (ideal abaixo de -65 a -70)',
              'Verificar CCQ (ideal próximo de 100%)',
              'Verificar se há atualização disponível no equipamento',
            ]}
          />
        </div>

        <div className="mt-4">
          <ProcessCard
            title="Orientações importantes"
            icon={<CheckCircle2 className="w-4 h-4" />}
            color="yellow"
            steps={[
              'Se torre estiver normal → seguir fluxo padrão de atendimento',
              'Se antena com problema → encaminhar para visita técnica',
              'Registrar todos os testes realizados no atendimento',
            ]}
          />
        </div>

        <div className="mt-4">
          <ProcessCard
            title="Abertura de visita técnica"
            icon={<Wrench className="w-4 h-4" />}
            color="red"
            steps={[
              'Informar se a torre está funcionando ou não',
              'Descrever diagnóstico completo (sinal, CCQ, equipamentos)',
              'Informar se há acesso à antena do cliente',
              'Confirmar se cliente está ciente de possíveis custos',
              'Registrar dados completos para visita (contato, horário, referência)',
            ]}
          />
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <TrainingLink href="https://www.canva.com/design/DAG8bdmt_-M/rdhEVlay-y4FMhURFoaCGw/edit">
            🔗 SEM CONEXÃO VIA RÁDIO
          </TrainingLink>
        </div>
      </div>

      <div className="bg-indigo-50 border-2 border-indigo-300 rounded-lg p-4">
        <h3 className="font-semibold text-indigo-900 mb-3 flex items-center gap-2">
          <Settings className="size-5" />
          ⚙️ 3.4 Configuração
        </h3>

        <ProcessCard
          title="Verificações iniciais"
          icon={<Settings className="w-4 h-4" />}
          color="blue"
          steps={[
            'Confirmar se o cliente deseja liberação de porta específica ou DMZ',
            'Validar onde o plano autentica',
            'Confirmar se o cliente possui IP válido',
            'Identificar qual porta o cliente deseja liberar',
            'Confirmar o IP interno do equipamento que receberá a liberação',
            'Entender como os equipamentos estão conectados na rede do cliente',
          ]}
        />

        <div className="mt-4">
          <ProcessCard
            title="Identificar onde autentica"
            icon={<AlertCircle className="w-4 h-4" />}
            color="purple"
            steps={[
              'Validar a autenticação através do MACVendors',
              'Roteadores como TP-Link, Intelbras, D-Link e Mercusys indicam autenticação no roteador',
              'Huawei e Fiberhome podem indicar autenticação na ONU',
              'Mikrotik/Routerboard indicam autenticação na Routerboard',
              'Ubiquiti pode indicar autenticação na antena',
            ]}
          />
        </div>

        <div className="mt-4">
          <ProcessCard
            title="Quando autentica no roteador"
            icon={<Wrench className="w-4 h-4" />}
            color="green"
            steps={[
              'A liberação é mais simples e deve ser feita somente no roteador',
              'Liberar a porta solicitada diretamente para o IP interno informado pelo cliente',
              'Aplicar protocolo correto conforme necessidade (TCP, UDP ou ambos)',
            ]}
          />
        </div>

        <div className="mt-4">
          <ProcessCard
            title="Quando autentica na ONU ou antena"
            icon={<Monitor className="w-4 h-4" />}
            color="yellow"
            steps={[
              'Primeiro liberar a porta ou DMZ para o IP do roteador do cliente',
              'Depois realizar a liberação da porta solicitada no roteador para o IP interno final',
              'Confirmar que a cadeia de equipamentos está correta antes de concluir',
            ]}
          />
        </div>

        <div className="mt-4">
          <ProcessCard
            title="Quando autentica na Routerboard"
            icon={<Settings className="w-4 h-4" />}
            color="red"
            steps={[
              'Validar em qual faixa de rede está o equipamento do cliente',
              'Se houver roteador atrás da Routerboard, primeiro liberar para o gateway/roteador',
              'Depois liberar para o IP interno informado pelo cliente',
              'Quando necessário, utilizar WinBox para acessar a Routerboard',
              'No WinBox, configurar regra com Chain DSTNAT, protocolo correspondente, porta desejada e To Address para o IP do cliente',
            ]}
          />
        </div>

        <div className="mt-4">
          <ProcessCard
            title="Validação final"
            icon={<CheckCircle2 className="w-4 h-4" />}
            color="blue"
            steps={[
              'Validar a abertura da porta pelo site testeportas.com.br',
              'Se a porta constar como inacessível, revisar todas as configurações aplicadas',
              'Confirmar com o cliente se o equipamento ou servidor está corretamente configurado e ativo',
              'Registrar no atendimento qual porta foi liberada, para qual IP e em qual equipamento foi feita a configuração',
            ]}
          />
        </div>

        <div className="mt-4 flex justify-center">
          <TrainingLink href="https://drive.google.com/file/d/1Sffq4yxYJ5fyMjRPT5o-eENnRedOVKsN/view?usp=sharing">
            🔗 Liberação de Portas
          </TrainingLink>
        </div>

        <div className="mt-4 bg-white border-2 border-indigo-200 rounded-lg p-4">
          <h4 className="font-semibold text-indigo-900 mb-3 flex items-center gap-2">
            <Monitor className="size-5" />
            📺 Produtos e Plataformas
          </h4>

          <p className="text-sm text-indigo-800 mb-4">
            Materiais de apoio para atendimento de produtos digitais e serviços complementares.
          </p>

          <div className="space-y-4">
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-3">
              <h5 className="font-semibold text-indigo-900 text-sm mb-1">📱 MH Móvel / MVNO</h5>
              <p className="text-sm text-indigo-800 mb-3">
                Material sobre telefonia móvel, principais falhas em chamadas, SMS, dados
                móveis, roaming e abertura de atendimento.
              </p>
              <div className="flex flex-col gap-2">
                <TrainingLink href="https://docs.google.com/presentation/d/1AsDCrX3VQHFMdym7062dnFA116N6b7C_/edit">
                  🔗 MVNO
                </TrainingLink>
                <TrainingLink href="https://drive.google.com/file/d/15OIxtD6mIbHmPQHyNxxn8ilJ1V1WM57R/view?usp=sharing">
                  🔗 Treinamento Telefonia Móvel
                </TrainingLink>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-3">
              <h5 className="font-semibold text-indigo-900 text-sm mb-1">📷 De Olho MHNET</h5>
              <p className="text-sm text-indigo-800 mb-3">
                Guia de atendimento para câmera offline, falha no aplicativo, gravação,
                lentidão, acesso bloqueado e critérios de escalonamento para N2.
              </p>
              <div className="flex flex-col gap-2">
                <TrainingLink href="#">
                  🔗 Reciclagem De Olho MH
                </TrainingLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4">
        <h3 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
          <Phone className="size-5" />
          ☎️ 3.5 Telefonia
        </h3>

        <ProcessCard
    title="Validação inicial"
    icon={<Phone className="w-4 h-4" />}
    color="green"
    steps={[
      'Confirmar com o cliente qual é a falha: não recebe, não efetua, falha total, eco, picotando ou chamada muda',
      'Validar se a conexão de internet do cliente está funcionando corretamente',
      'Em fibra, verificar luz e qualidade do sinal; em rádio, validar CCQ e sinal do cliente',
      'Confirmar se o telefone está conectado corretamente e energizado, quando aplicável',
      'Orientar reinicialização dos equipamentos para eliminar travamentos',
    ]}
  />

         <div className="mt-4">
    <ProcessCard
      title="Identificar a topologia da linha"
      icon={<Settings className="w-4 h-4" />}
      color="blue"
      steps={[
        'Confirmar com o cliente se o telefone está ligado diretamente na ONU ou se passa por ATA',
        'Verificar se a linha autentica na ONU, ATA, roteador com função VoIP ou central do cliente',
        'Em internet via rádio, considerar que a linha necessita de ATA',
        'Quando o cliente estiver em ambiente empresarial com várias linhas, validar se a autenticação está na central do cliente',
      ]}
    />
  </div>

         <div className="mt-4">
    <ProcessCard
      title="Verificação de autenticação e registro"
      icon={<Monitor className="w-4 h-4" />}
      color="purple"
      steps={[
        'Consultar o número da linha nas informações do contrato, na aba de serviços',
        'Validar no ZEUS se o número está registrado e identificar em qual equipamento a linha autentica',
        'Se a autenticação estiver na ONU, verificar configuração da linha e senha conforme ZEUS',
        'Confirmar o status de registro da linha; quando o registro falha, revisar senha, proxy, terminal e conectividade',
      ]}
    />
  </div>

         <div className="mt-4">
    <ProcessCard
      title="Testes básicos de telefonia"
      icon={<PhoneCall className="w-4 h-4" />}
      color="yellow"
      steps={[
        'Realizar teste de chamada de saída para número fixo e móvel',
        'Realizar teste de recebimento de chamada',
        'Confirmar se a falha ocorre em todos os números ou apenas em alguns destinos',
        'Em falha parcial, coletar exemplos de números afetados para análise de rota com a operadora',
        'Quando possível, testar com outro aparelho telefônico',
      ]}
    />
  </div>

         <div className="mt-4">
    <ProcessCard
      title="Possíveis causas"
      icon={<AlertCircle className="w-4 h-4" />}
      color="red"
      steps={[
        'Cabos de telefone ou rede desconectados, defeituosos ou em ordem incorreta',
        'ATA travado, porta RJ11 com defeito ou cabo do ATA até o telefone muito longo',
        'Problemas no aparelho telefônico do cliente',
        'Perda de pacotes, ping oscilando, fibra atenuada, broadcast ou problemas de rede',
        'Problemas de rota entre operadoras ou na operadora de destino',
        'Cliente discando número inválido ou incorreto',
      ]}
    />
  </div>

        <div className="mt-4">
    <ProcessCard
      title="Encaminhamento"
      icon={<Wrench className="w-4 h-4" />}
      color="blue"
      steps={[
        'Se a linha estiver registrada e o problema persistir, encaminhar com o máximo de detalhes',
        'Em falha parcial, informar exemplos de números, horários e comportamento da ligação',
        'Registrar no atendimento todos os testes realizados e o resultado de cada um',
        '➡️ Persistindo a falha → Encaminhar para o setor de telefonia',
      ]}
    />
  </div>

  <div className="mt-4 flex flex-col gap-2">
    <TrainingLink href="https://drive.google.com/file/d/14_pc4AHfo43gxYEAFGWlndrFuYkMFg1V/view?usp=sharing">
      🔗 Treinamento - Telefonia VOIP
    </TrainingLink>
  </div>
</div>

      <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
        <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
          <Home className="size-5" />
          🏠 3.6 Mudança de Endereço
        </h3>
        
          <ProcessCard
    title="Custos e regras"
    icon={<DollarSign className="w-4 h-4" />}
    color="blue"
    steps={[
      'Informar ao cliente a taxa padrão de mudança de endereço: R$ 100,00, com possibilidade de parcelamento em 2x de R$ 50,00',
      'Informar também a cobrança de R$ 1,50 por metro excedente acima de 150 metros do ponto de acesso mais próximo',
      'Se o cliente discordar da taxa e ameaçar cancelar, encaminhar para o setor de retenção',
      'Menos de 6 meses de contrato: taxa integral',
      '6 meses de contrato + últimas 6 faturas em dia: isenção de 50%',
      '12 meses de contrato + últimas 12 faturas em dia + sem mudança nos últimos 12 meses: isento',
      'Quando houver direito à isenção, informar que será necessária refidelização do contrato',
    ]}
  />

       <div className="mt-4">
    <ProcessCard
      title="Validação de isenção"
      icon={<CheckCircle2 className="w-4 h-4" />}
      color="green"
      steps={[
        'Acessar no ERP a opção “Operações por cliente”',
        'Pesquisar pelo CPF do cliente',
        'Entrar no cadastro e acessar a aba “Financeiro”',
        'Verificar se as últimas 6 ou 12 faturas foram pagas em dia',
        'Relógio verde indica pagamento em dia; relógio vermelho indica atraso',
        'Se houver direito à isenção, informar o cliente e seguir com a tratativa',
      ]}
    />
  </div>

         <div className="mt-4">
    <ProcessCard
      title="Confirmação do novo endereço"
      icon={<MapPin className="w-4 h-4" />}
      color="yellow"
      steps={[
        'Pesquisar o novo endereço no Google Maps',
        'Enviar ao cliente a imagem/localização para confirmar se o ponto está correto',
        'Salvar as coordenadas exibidas na barra de pesquisa para anexar ao protocolo',
        'Anotar em bloco de notas as informações do endereço antigo e do novo endereço antes de concluir a solicitação',
      ]}
    />
  </div>

         <div className="mt-4">
    <ProcessCard
      title="Abertura da solicitação no ERP"
      icon={<Settings className="w-4 h-4" />}
      color="purple"
      steps={[
        'Selecionar no ERP a opção “Alterar endereço de instalação”',
        'Preencher todos os dados do novo endereço informados pelo cliente',
        'No campo tipo de residência, informar corretamente: madeira, alvenaria, mista ou apartamento',
        'Após preencher, avançar para a etapa de viabilidade',
      ]}
    />
  </div>

        <div className="mt-4">
    <ProcessCard
      title="Viabilidade FTTH e FTTA"
      icon={<Monitor className="w-4 h-4" />}
      color="blue"
      steps={[
        'Para casa (FTTH): inserir as coordenadas, clicar em “desenhar drop”, ligar até a bolinha azul mais próxima e verificar a viabilidade',
        'O desenho do drop deve seguir a rua e não pode passar por cima de casas',
        'Para prédio (FTTA): selecionar apartamento, usar o ícone de prédio, localizar o prédio correto e verificar a disponibilidade do bloco',
        'Se houver mais de um bloco no prédio, confirmar com o cliente qual é o correto',
        'Na confirmação final, selecionar “Mudança de endereço” e prosseguir',
      ]}
    />
  </div>

         <div className="mt-4">
    <ProcessCard
      title="Conclusão com viabilidade"
      icon={<Wrench className="w-4 h-4" />}
      color="green"
      steps={[
        'Após confirmar a viabilidade, clicar em OK e avançar',
        'Na classificação, registrar todas as informações do endereço antigo e do novo endereço',
        'Quando for mudança para prédio, identificar como FTTA no relato',
        'Selecionar a equipe correta e deixar o protocolo em andamento',
        'Se houver possibilidade de agendamento, encaminhar para equipe técnica de campo; caso contrário, encaminhar para O&M Ativação',
      ]}
    />
  </div>

          <div className="mt-4">
    <ProcessCard
      title="Sem viabilidade"
      icon={<AlertTriangle className="w-4 h-4" />}
      color="red"
      steps={[
        'Considerar sem viabilidade quando não houver bolinha azul próxima, quando o drop indicar inviabilidade ou quando o prédio não aparecer na lista',
        'Nesses casos, abrir solicitação para o setor de engenharia verificar possibilidade de instalação',
        'Atualizar o endereço do cliente no cadastro antes do encaminhamento',
        'Deixar o protocolo em andamento e encaminhar para a engenharia conforme fluxo interno',
        'Informar ao cliente que o setor responsável irá verificar a viabilidade e retornará o contato',
      ]}
    />
  </div>

  <div className="mt-4 flex justify-center">
    <TrainingLink href="https://docs.google.com/presentation/d/1WNziUMowWm4pRuA_oE3VS9hSOvN_dA_H2KZK38ePUdg/edit">
      🔗 Treinamento - Mudança de Endereço
    </TrainingLink>
 </div>
     <div className="mt-4 flex flex-col gap-2">
    <TrainingLink href="https://www.canva.com/design/DAG79e0fdyo/X8SWdhz_gfWr6AYJyHaYgg/edit">
      🔗 Treinamento - Mudança de Endereço (NOVO)
    </TrainingLink>
  </div>
</div>

      <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-4">
        <h3 className="font-semibold text-orange-900 mb-3 flex items-center gap-2">
          <MapPin className="size-5" />
          🏡 3.7 Mudança de Ponto Interno
        </h3>

        <div className="bg-white border-l-4 border-orange-500 p-3 rounded mb-4">
          <p className="text-sm text-orange-800">Alteração dentro da mesma residência</p>
        </div>

        <div className="space-y-4">
          <div className="bg-orange-100 border border-orange-300 p-3 rounded">
            <h4 className="font-semibold text-orange-900 mb-2 text-sm">💰 Regras</h4>
            <p className="text-sm text-orange-800">
              • Taxa padrão: <strong>R$ 150,00</strong>
            </p>
            <p className="text-sm text-orange-800">• Possível excedente de cabo</p>
            <p className="text-sm text-orange-800">
              • <strong>❌ Sem isenção</strong>
            </p>
            <p className="text-sm text-orange-800">
              • <strong>❌ Sem parcelamento</strong>
            </p>
          </div>

          <ProcessCard
            title="🔄 Processo"
            icon={<Settings className="size-5" />}
            color="yellow"
            steps={[
              'Validar solicitação',
              'Informar custo',
              'Avaliar necessidade técnica',
              'Abrir ordem de serviço',
            ]}
          />

          <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded">
            <h4 className="font-semibold text-red-900 mb-2 text-sm">⚠️ Exceção</h4>
            <p className="text-sm text-red-800">
              ➡️ Cliente não aceita valor →{' '}
              <strong>Retenção para continuar tratativa para evitar cancelamento</strong>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-4">
        <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <Wrench className="size-5" />
          🛠️ 3.8 Visita Técnica
        </h3>

        <div className="bg-white border-l-4 border-gray-500 p-3 rounded mb-4">
          <p className="text-sm text-gray-800">• Agendamento (Field Service / SLA)</p>
        </div>

        <div className="bg-gray-100 border border-gray-300 p-3 rounded mb-4">
          <h4 className="font-semibold text-gray-900 mb-2 text-sm">Classificação</h4>
          <p className="text-sm text-gray-800">• Normal</p>
          <p className="text-sm text-gray-800">• Urgente</p>
          <p className="text-xs text-gray-600 mt-2">Pode gerar cobrança conforme critérios</p>
        </div>

        <div className="flex justify-center">
          <TrainingLink href="https://docs.google.com/presentation/d/1WNziUMowWm4pRuA_oE3VS9hSOvN_dA_H2KZK38ePUdg/edit">
            🔗 Treinamento - Visita Técnica
          </TrainingLink>
        </div>
      </div>

      <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-4">
        <h3 className="font-semibold text-purple-900 mb-4 flex items-center gap-2">
          <BookOpen className="size-5" />
          🟣 Conteúdos Adicionais
        </h3>
        <p className="text-sm text-purple-800 mb-4">Materiais de apoio técnico avançado</p>

        <div className="space-y-3">
          <div className="bg-white p-3 rounded border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-2 text-sm">
              ⚙️ UNM2000 - Em Breve Material
            </h4>
          </div>

          <div className="bg-white p-3 rounded border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-2 text-sm">🌐 TR-069</h4>
            <TrainingLink href="https://docs.google.com/spreadsheets/d/1TWJzT28Ak-x7UGT_9PR-4KCx390AKYhBC1aL9F2H0F0/edit?usp=sharing">
              Acessar Material
            </TrainingLink>
          </div>

          <div className="bg-white p-3 rounded border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-2 text-sm">📊 FLASHMAN</h4>
            <TrainingLink href="https://drive.google.com/file/d/1Dofnz7px2acaLF8C4qbyfkN7OdktFsFa/view?usp=sharing">
              Acessar Material
            </TrainingLink>
          </div>
        </div>
      </div>
    </div>
  );

  const getFinanceiroContent = () => (
    <div className="space-y-6">
      <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
        <h3 className="font-semibold text-orange-900 mb-2">🟠 Fluxo Financeiro</h3>
        <p className="text-sm text-orange-800">
          Bloqueios, Faturamento, Pagamentos e Crédito
        </p>
      </div>

      <div className="mt-4">
        <ProcessCard
    title="Renegociação de faturas"
    icon={<RefreshCw className="w-4 h-4" />}
    color="yellow"
    steps={[
      'Renegociação é a alteração da data de vencimento de uma fatura em atraso',
      'O cliente pode solicitar a renegociação, sendo necessário abrir protocolo',
      'Após abertura, transferir o cliente para o setor de cobrança (verificar horário de atendimento)',
      'A fatura pode ser renegociada apenas uma vez',
      'Após o vencimento da fatura renegociada, ocorre bloqueio administrativo automático',
      'Não é permitido desbloqueio de confiança para faturas renegociadas',
      'Fatura renegociada aparece na cor roxa e geralmente há um novo boleto acima dela',
    ]}
  />
      </div>

       <div className="mt-4">
    <ProcessCard
      title="Solicitações financeiras"
      icon={<FileText className="w-4 h-4" />}
      color="blue"
      steps={[
        'Para dúvidas financeiras ou casos que não conseguimos resolver, abrir protocolo',
        'Descrever corretamente a solicitação do cliente no atendimento',
        'Classificar como financeiro → dúvidas financeiras ou cobrança',
        'Deixar o protocolo em andamento',
        'Não transferir o cliente nesses casos',
        'Informar o número do protocolo e orientar o cliente a retornar para acompanhamento',
      ]}
    />
  </div>

       <div className="mt-4">
    <ProcessCard
      title="Bloqueios e desbloqueios"
      icon={<Lock className="w-4 h-4" />}
      color="red"
      steps={[
        'Bloqueio financeiro ocorre automaticamente após 7 dias de atraso',
        'Bloqueio administrativo ocorre por renegociação vencida ou ausência de contrato',
        'Bloqueio financeiro permite desbloqueio de confiança, quando disponível',
        'Bloqueio administrativo não permite desbloqueio de confiança',
        'Ambos podem ser desbloqueados mediante análise de comprovante',
      ]}
    />
  </div>

      

     <div className="mt-4">
    <ProcessCard
      title="Análise de comprovantes"
      icon={<CheckCircle2 className="w-4 h-4" />}
      color="green"
      steps={[
        'Confirmar se o comprovante é de pagamento ou apenas agendamento',
        'Comprovante de pagamento confirma que o valor já foi pago',
        'Comprovante de agendamento não garante pagamento efetivo',
        'Validar se o valor confere com a fatura',
        'Conferir linha digitável (código de barras)',
        'Validar data de vencimento no comprovante',
        'Em caso de dúvidas, consultar o setor financeiro',
      ]}
    />
  </div>

      <div className="mt-4">
    <ProcessCard
      title="Prazos de compensação"
      icon={<Clock className="w-4 h-4" />}
      color="purple"
      steps={[
        'Boleto: até 24 a 48 horas úteis',
        'Débito em conta: até 24 a 48 horas úteis',
        'PIX: compensação imediata',
        'Cartão de crédito: compensação imediata',
        'Pagamentos em finais de semana ou feriados podem ter prazo maior',
      ]}
    />
  </div>

       <div className="mt-4">
    <ProcessCard
      title="Desbloqueio após pagamento"
      icon={<Unlock className="w-4 h-4" />}
      color="blue"
      steps={[
        'Acessar dashboard no sistema (dashboard nova)',
        'Localizar o contrato do cliente',
        'Acessar utilitários → alterar situação',
        'Alterar status de bloqueado para normal',
        'Preencher justificativa do desbloqueio',
        'Confirmar a alteração',
        'Validar com o cliente se a conexão retornou',
        'Anexar comprovante no protocolo e encerrar atendimento',
      ]}
    />
  </div>

       <div className="mt-4">
    <ProcessCard
      title="Descontos"
      icon={<BadgePercent className="w-4 h-4" />}
      color="green"
      steps={[
        'O desconto é um direito do cliente quando houve falha no serviço',
        'Sem conexão: desconto de 100% do período',
        'Lentidão: desconto de 50% do período',
        'Problema deve estar resolvido antes de aplicar o desconto',
        'Desconto é aplicado na próxima fatura',
        'Caso cliente queira na fatura atual, abrir solicitação ao faturamento',
        'Calcular valor: (valor do plano ÷ 30) × dias sem serviço',
        'Para lentidão, dividir o valor por 2',
      ]}
    />
  </div>

      

     <div className="mt-4">
    <ProcessCard
      title="Aplicação de desconto"
      icon={<Settings className="w-4 h-4" />}
      color="yellow"
      steps={[
        'Acessar ações de atendimento → valores eventuais do contrato',
        'Verificar se já existe desconto aplicado para evitar duplicidade',
        'Adicionar novo desconto',
        'Tipo: desconto',
        'Competência: próxima competência',
        'Evento: desconto por falha de conexão',
        'Descrever dias e valor aplicado',
        'Quantidade sempre será 1',
        'Gerar valor eventual e vincular ao contrato',
        'Registrar no protocolo e informar ao cliente',
      ]}
    />
  </div>

  <div className="mt-4 flex flex-col gap-2">
    <TrainingLink href="https://www.canva.com/design/DAG8muG0kg4/ojXgmBd4pXG410kkSaL1EQ/edit">
      🔗 Treinamento - Renegociação e Financeiro
    </TrainingLink>

    <TrainingLink href="https://www.canva.com/design/DAG8tOlcEVs/-iVudi5hVrzuw5DuUPA1EA/edit">
      🔗 Treinamento - Desbloqueios e Comprovantes
    </TrainingLink>

    <TrainingLink href="https://www.canva.com/design/DAG9QznnlJg/Z1koYM93BmVXa1jsyocjUg/edit">
      🔗 Treinamento - Descontos
    </TrainingLink>
  </div>
</div>
  );

  const getRetencaoContent = () => (
    <div className="space-y-6">
      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
        <h3 className="font-semibold text-red-900 mb-2">🔴 Fluxo de Retenção</h3>
        <p className="text-sm text-red-800">
          Estratégias para retenção, redução de atrito e continuidade do atendimento
        </p>
      </div>

      <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-4">
        <h3 className="font-semibold text-orange-900 mb-3 flex items-center gap-2">
          <Target className="size-5" />
          🎯 Quando Acionar
        </h3>

        <div className="mt-4">
          <ProcessCard
            title="Situações de acionamento"
            icon={<Target className="w-4 h-4" />}
            color="orange"
            steps={[
              'Cliente manifesta intenção de cancelamento',
              'Cliente demonstra insatisfação recorrente com o serviço',
              'Cliente reclama de valores, reajustes ou cobranças',
              'Cliente recusa taxas ou custos necessários para continuidade do atendimento',
              'Cliente solicita downgrade, revisão de plano ou alternativa para permanência',
              'Casos em que existe risco real de cancelamento por desgaste no atendimento',
            ]}
          />
        </div>
      </div>

      <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
        <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
          <Wrench className="size-5" />
          🧩 Ações Iniciais
        </h3>

        <div className="mt-4">
          <ProcessCard
            title="Ações antes de escalar"
            icon={<Wrench className="w-4 h-4" />}
            color="blue"
            steps={[
              'Ouvir o motivo principal da insatisfação do cliente com atenção',
              'Identificar se a causa é técnica, financeira, comercial ou relacionada ao atendimento',
              'Tentar resolver o problema na origem antes de encaminhar',
              'Se for técnico, validar possibilidade de ajuste, suporte ou visita',
              'Se for financeiro, validar alternativas permitidas conforme procedimento interno',
              'Se for comercial, verificar possibilidade de adequação de plano ou permanência',
              'Explicar com clareza os próximos passos para reduzir atrito e insegurança do cliente',
            ]}
          />
        </div>

        <div className="mt-4">
          <ProcessCard
            title="Possíveis alternativas"
            icon={<Package className="w-4 h-4" />}
            color="purple"
            steps={[
              'Oferecer ajuste técnico quando o motivo da insatisfação for falha no serviço',
              'Oferecer upgrade ou downgrade de plano, quando aplicável',
              'Reforçar benefícios do serviço contratado, quando fizer sentido no contexto',
              'Encaminhar para retenção quando o cliente insistir no cancelamento ou o caso exigir negociação específica',
            ]}
          />
        </div>
      </div>

      <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-4">
        <h3 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
          <AlertCircle className="size-5" />
          📌 Orientações Importantes
        </h3>

        <div className="mt-4">
          <ProcessCard
            title="Boas práticas no atendimento"
            icon={<AlertCircle className="w-4 h-4" />}
            color="purple"
            steps={[
              'Registrar no protocolo o motivo exato da insatisfação do cliente',
              'Evitar respostas secas ou encaminhamentos sem tentativa real de tratativa',
              'Demonstrar empatia e segurança durante a condução do atendimento',
              'Não prometer condições, descontos ou exceções fora do procedimento',
              'Informar de forma clara tudo o que foi ofertado, validado ou recusado pelo cliente',
              'Quando houver encaminhamento, registrar o máximo de detalhes para evitar retrabalho',
            ]}
          />
        </div>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4">
        <h3 className="font-semibold text-yellow-900 mb-3 flex items-center gap-2">
          <HandshakeIcon className="size-5" />
          ⚠️ Regra de Ouro
        </h3>

        <div className="mt-4">
          <ProcessCard
            title="Antes de escalar para retenção"
            icon={<HandshakeIcon className="w-4 h-4" />}
            color="yellow"
            steps={[
              'Tentar resolver o problema principal do cliente',
              'Reduzir o atrito durante a conversa',
              'Validar possibilidade de ajuste de plano ou continuidade',
              'Confirmar se ainda existe intenção de cancelamento após a tratativa',
              'Persistindo o desejo de cancelamento ou impasse → Encaminhar para retenção',
            ]}
          />
        </div>
      </div>
    </div>
  );

  const getN2Content = () => (
    <div className="space-y-6">
      <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded">
        <h3 className="font-semibold text-indigo-900 mb-2">🧩 Conteúdos N2</h3>
        <p className="text-sm text-indigo-800">
          Escalonamentos avançados, benefícios e acionamentos internos
        </p>
        <p className="text-sm text-indigo-800 mt-2">
          ⚠️ <strong>SEMPRE</strong> encaminhar com testes, evidências e descrição clara da falha
        </p>
      </div>

      <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
        <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
          <Monitor className="size-5" />
          🌐 Domínio / E-mail / Site
        </h3>

        <ProcessCard
          title="Validação e tratativa inicial"
          icon={<Monitor className="w-4 h-4" />}
          color="blue"
          steps={[
            'Verificar qual é a demanda do cliente: domínio, e-mail ou site',
            'Identificar qual erro está ocorrendo, como falha ao acessar, indisponibilidade ou erro ao enviar e-mails',
            'Validar com o cliente quando o problema começou e se ocorre de forma contínua ou intermitente',
            'Em casos de domínio ou site, realizar testes de ping e traceroute quando aplicável',
            'Em casos de e-mail, validar e reconfigurar SMTP quando necessário',
            'Coletar informações, testes e evidências para escalonamento',
            '➡️ Persistindo a falha → Acionar N2 para direcionamento ao responsável',
          ]}
        />

        <div className="mt-4">
          <ProcessCard
            title="Escalonamento e acionamento"
            icon={<AlertCircle className="w-4 h-4" />}
            color="purple"
            steps={[
              'Encaminhar o caso para N2 com descrição objetiva do problema',
              'Anexar prints, erros apresentados e testes realizados',
              'Quando necessário, acionar o responsável via Alfredo no número 49 3199-2168 em horário comercial',
              'Registrar corretamente no atendimento tudo o que foi validado antes do escalonamento',
            ]}
          />
        </div>

        <div className="mt-4">
          <ProcessCard
            title="Orientações importantes"
            icon={<CheckCircle2 className="w-4 h-4" />}
            color="yellow"
            steps={[
              'Sempre identificar exatamente se a falha está relacionada a domínio, e-mail ou site',
              'Evitar escalonamento sem testes mínimos realizados',
              'Encaminhar sempre com anexos e evidências para evitar retrabalho',
              'Registrar claramente o impacto relatado pelo cliente',
            ]}
          />
        </div>
      </div>

      <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-4">
        <h3 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
          <Package className="size-5" />
          🎁 Benefícios (Globoplay / Skeelo)
        </h3>

        <ProcessCard
          title="Validação e tratativa inicial"
          icon={<Package className="w-4 h-4" />}
          color="purple"
          steps={[
            'Verificar se o cliente realmente possui o benefício vinculado ao plano',
            'Confirmar se o benefício já foi enviado para o e-mail cadastrado',
            'Orientar o cliente a verificar caixa de entrada, lixo eletrônico e spam',
            'Confirmar se o e-mail cadastrado está correto no sistema',
            'Se houver divergência cadastral, orientar a correção conforme procedimento interno',
            '➡️ Confirmado o não envio → Escalonar para a equipe de Plataformas via N2',
          ]}
        />

        <div className="mt-4">
          <ProcessCard
            title="Escalonamento e acionamento"
            icon={<AlertCircle className="w-4 h-4" />}
            color="blue"
            steps={[
              'Encaminhar o caso para N2 com os dados do cliente e descrição da falha',
              'Informar que o benefício não foi recebido após validação de caixa de entrada, spam e lixo eletrônico',
              'Quando necessário, acionar o responsável via Alfredo no número 49 3199-2168 em horário comercial',
              'Registrar no atendimento todas as validações feitas antes do acionamento',
            ]}
          />
        </div>

        <div className="mt-4">
          <ProcessCard
            title="Orientações importantes"
            icon={<CheckCircle2 className="w-4 h-4" />}
            color="yellow"
            steps={[
              'Sempre validar primeiro se o benefício faz parte do plano do cliente',
              'Confirmar o e-mail correto antes de escalar',
              'Evitar encaminhar sem validar spam, lixo eletrônico e não recebimento',
              'Registrar com clareza se o caso é primeiro envio, reenvio ou falha de ativação',
            ]}
          />
        </div>
      </div>

      <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4">
        <h3 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
          <Settings className="size-5" />
          🖥️ TI / Plantão
        </h3>

        <ProcessCard
          title="Validação e tratativa inicial"
          icon={<Settings className="w-4 h-4" />}
          color="red"
          steps={[
            'Utilizar este fluxo para quaisquer problemas sistêmicos, de infraestrutura ou indisponibilidade interna',
            'Validar qual é o problema apresentado e qual sistema está impactado',
            'Confirmar a mensagem de erro, comportamento do sistema e impacto operacional',
            'Realizar testes para comprovar instabilidade ou falha',
            'Coletar evidências como ping, traceroute, prints do sistema e mensagens de erro',
            'Coletar os dados necessários para acionamento do plantonista ou responsável',
            '➡️ Confirmada a falha → Acionar N2 responsável pelo sistema para abertura de OS e registro da ocorrência',
          ]}
        />

        <div className="mt-4">
          <ProcessCard
            title="Escalonamento e acionamento"
            icon={<AlertTriangle className="w-4 h-4" />}
            color="purple"
            steps={[
              'Encaminhar o caso ao N2 responsável pelo sistema com os testes realizados',
              'Solicitar abertura de OS com registro completo do ocorrido',
              'Em horário comercial, acionar o responsável de TI conforme fluxo interno',
              'Quando necessário, o acionamento do plantonista deve ser feito via SIG pelo N2 responsável',
            ]}
          />
        </div>

        <div className="mt-4">
          <ProcessCard
            title="Orientações importantes"
            icon={<CheckCircle2 className="w-4 h-4" />}
            color="yellow"
            steps={[
              'Sempre registrar o nome do sistema afetado',
              'Descrever exatamente o erro apresentado e o impacto na operação',
              'Não escalar sem evidências mínimas da falha',
              'Encaminhar com prints e testes para agilizar o atendimento do N2',
            ]}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Ⓜ️ MHNET | MANUAL DO ATENDIMENTO
          </h1>
          <p className="text-gray-600">Procedimentos Completos de Atendimento</p>
        </div>

        <div className="flex flex-col items-center space-y-6">
          <FlowchartNode
            title="🟢 1. Entrada (URA)"
            description="Identificação e Triagem"
            type="start"
          />

          <FlowConnector vertical />

          <div className="bg-white border-2 border-blue-200 rounded-lg p-6 max-w-2xl shadow-lg">
            <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
              <PhoneCall className="size-5" />
              Transferência Assistida
            </h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p>• Identificação do cliente</p>
              <p>• Triagem inicial</p>
              <p>• Transferência assistida (quando necessário)</p>
            </div>
          </div>

          <FlowConnector vertical />

          <FlowchartNode title="🟡 2. Triagem por Motivo" type="process" />

          <FlowConnector vertical />

          <div className="text-center mb-2">
            <p className="text-sm text-gray-600">Estrutura principal:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-6xl">
            <div className="flex flex-col items-center space-y-4">
              <FlowchartNode
                title="🔧 Suporte Técnico"
                type="process"
                onClick={() => setActiveDetail('tecnico')}
                icon={<Wrench className="size-5" />}
              />
              <FlowConnector vertical label="Clique para detalhes" />
              <div className="bg-blue-50 border border-blue-200 rounded p-3 text-center">
                <p className="text-xs text-blue-900">Suporte, Config.</p>
                <p className="text-xs text-blue-700">Telefonia, Mudanças</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <FlowchartNode
                title="💰 Financeiro"
                type="process"
                onClick={() => setActiveDetail('financeiro')}
                icon={<CreditCard className="size-5" />}
              />
              <FlowConnector vertical label="Clique para detalhes" />
              <div className="bg-green-50 border border-green-200 rounded p-3 text-center">
                <p className="text-xs text-green-900">Bloqueios</p>
                <p className="text-xs text-green-700">Pagamentos, Crédito</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <FlowchartNode
                title="🧠 Retenção"
                type="process"
                onClick={() => setActiveDetail('retencao')}
                icon={<Users className="size-5" />}
              />
              <FlowConnector vertical label="Clique para detalhes" />
              <div className="bg-red-50 border border-red-200 rounded p-3 text-center">
                <p className="text-xs text-red-900">Cancelamento</p>
                <p className="text-xs text-red-700">Reclamações</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <FlowchartNode
                title="🧩 Conteúdos N2"
                type="process"
                onClick={() => setActiveDetail('n2')}
                icon={<BookOpen className="size-5" />}
              />
              <FlowConnector vertical label="Clique para detalhes" />
              <div className="bg-indigo-50 border border-indigo-200 rounded p-3 text-center">
                <p className="text-xs text-indigo-900">Domínio, E-mail, Site</p>
                <p className="text-xs text-indigo-700">Benefícios, TI, Plantão</p>
              </div>
            </div>
          </div>

          <FlowConnector vertical />

          <FlowchartNode
            title="🔚 6. Encerramento"
            description="Resolvido ou Encaminhado"
            type="end"
          />

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 max-w-2xl text-center">
            <p className="text-sm text-gray-700 mb-2">
              • <strong>Resolvido</strong>
            </p>
            <p className="text-sm text-gray-700 mb-2">OU</p>
            <p className="text-sm text-gray-700 mb-2">
              • <strong>Encaminhado para:</strong>
            </p>
            <p className="text-xs text-gray-600">
              Técnico campo • N2 • Financeiro • Retenção • Plataformas • TI / Plantão
            </p>
          </div>

          <div className="bg-white border-2 border-gray-300 rounded-lg p-6 max-w-md shadow-lg mt-8">
            <h3 className="font-semibold text-gray-900 mb-4 text-center">🧠 Visão Final</h3>
            <div className="text-center text-sm text-gray-700 space-y-2 font-mono">
              <div>URA</div>
              <div>↓</div>
              <div>Triagem</div>
              <div>↓</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <span className="text-blue-600">Suporte Técnico</span>
                <span className="text-green-600">Financeiro</span>
                <span className="text-red-600">Retenção</span>
                <span className="text-indigo-600">Conteúdos N2</span>
              </div>
              <div>↓</div>
              <div>Solução / Encaminhamento</div>
            </div>
          </div>
        </div>
      </div>

      <DetailPanel
        title="🔧 Fluxo Técnico"
        content={getTecnicoContent()}
        isOpen={activeDetail === 'tecnico'}
        onClose={() => setActiveDetail(null)}
      />

      <DetailPanel
        title="💰 Fluxo Financeiro"
        content={getFinanceiroContent()}
        isOpen={activeDetail === 'financeiro'}
        onClose={() => setActiveDetail(null)}
      />

      <DetailPanel
        title="🧠 Fluxo de Retenção"
        content={getRetencaoContent()}
        isOpen={activeDetail === 'retencao'}
        onClose={() => setActiveDetail(null)}
      />

      <DetailPanel
        title="🧩 Conteúdos N2"
        content={getN2Content()}
        isOpen={activeDetail === 'n2'}
        onClose={() => setActiveDetail(null)}
      />
    </div>
  );
}
