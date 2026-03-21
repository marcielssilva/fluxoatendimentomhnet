import { useState } from 'react';
import { FlowchartNode } from './FlowchartNode';
import { FlowConnector } from './FlowConnector';
import { DetailPanel } from './DetailPanel';
import { ProcessCard } from './ProcessCard';
import { 
  Home, Lock, Wrench, DollarSign, MapPin, PhoneCall, AlertTriangle, 
  CheckCircle2, UserCheck, XCircle, Settings, CreditCard, Wifi, 
  WifiOff, Radio, Phone, Smartphone, Users, FileText, TrendingDown,
  AlertCircle, Target, Package, HandshakeIcon, ExternalLink, Monitor,
  Camera, Tv, BookOpen
} from 'lucide-react';

type DetailView = 'tecnico' | 'financeiro' | 'retencao' | null;

function TrainingLink({ href, children }: { href: string; children: React.ReactNode }) {
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
        <h3 className="font-semibold text-blue-900 mb-2">🔵 Fluxo Técnico Completo</h3>
        <p className="text-sm text-blue-800">
          Suporte, Configuração, Telefonia e Mudanças Estruturais
        </p>
      </div>

      {/* 3.1 SEM CONEXÃO */}
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
    'Confirmar se a queda é total',
    'Validar cabos de energia e fibra/rede',
    'Verificar LED Power, PON e LOS da ONU',
    'Confirmar se o equipamento foi reiniciado',
    'Validar se o cliente testou conexão cabeada, quando possível',
  ]}
/>

<div className="mt-4">
	<ProcessCard
  title="Análise e tratativa"
  icon={<Wrench className="w-4 h-4" />}
  color="blue"
  steps={[
    'Analisar sinal e status do equipamento',
    'Verificar indisponibilidade/massiva na região',
    'Aplicar testes básicos e acesso remoto, se disponível',
    'Se normalizar, orientar cliente e confirmar funcionamento',
    '➡️ Persistindo a falha → Encaminhar para visita técnica',
  ]}
/>
</div>

<div className="mt-4">
	<ProcessCard
            title="✅ Orientações importantes"
            icon={<Wrench className="size-5" />}
            color="yellow"
            steps={[
              'Se LED LOS estiver vermelho/piscando, priorizar análise de fibra/sinal',
              'Se houver parada geral/regional, informar indisponibilidade ao cliente',
              'Sempre confirmar no final se a conexão voltou antes de encerrar o atendimento',
            ]}
          />
</div>  

        <div className="mt-4 flex justify-center">
          <TrainingLink href="https://drive.google.com/file/d/18Otbn-FaeE-ZHeOHOk46ghMA_jlYL1My/view?usp=sharing">
            🔗 Treinamento - LED's da ONU
          </TrainingLink>
        </div>
      </div>

      {/* 3.2 LENTIDÃO */}
      <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4">
        <h3 className="font-semibold text-yellow-900 mb-3 flex items-center gap-2">
          <TrendingDown className="size-5" />
          🐢 3.2 Lentidão
        </h3>
        
        <ProcessCard
          title="Validação e tratativa inicial"
          icon={<Settings className="size-5" />}
          color="yellow"
          steps={[
            'Verificar cabos',
            'Teste cabo/Wi-Fi',
            'Acesso remoto',
            'Ajustes (Huawei / Flashman)',
            '➡️ Persistindo → Visita técnica',
          ]}
        />

        <div className="mt-4">
          <ProcessCard
      title="Orientações importantes"
      icon={<Wrench className="w-4 h-4" />}
      color="purple"
      steps={[
        'Priorizar teste cabeado para diferenciar problema de Wi-Fi e problema de link',
        'Confirmar se a reclamação é sobre lentidão constante ou em horários específicos',
        'Verificar quantidade de dispositivos conectados e uso simultâneo de streaming, downloads ou jogos',
        'Verificar cabos, conectores e reinicialização do equipamento',
        'Realizar acesso remoto e validar consumo, sinal e estabilidade da conexão',
        'Aplicar ajustes básicos no equipamento/roteador quando disponível (Huawei / Flashman)',
        'Sempre registrar no atendimento como o teste foi realizado e qual foi o resultado informado pelo cliente',
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

      {/* 3.3 VIA RÁDIO */}
      <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-4">
        <h3 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
          <Radio className="size-5" />
          📡 3.3 Via Rádio
        </h3>
        
        <ProcessCard
      title="Validação e tratativa inicial"
      icon={<Radio className="w-4 h-4" />}
      color="orange"
      steps={[
        'Confirmar com o cliente se a falha é sem conexão total, lentidão ou instabilidade',
        'Validar se os equipamentos estão ligados corretamente e se houve reinicialização',
        'Verificar no Zabbix o status da conexão e da torre responsável pelo atendimento',
        'Confirmar se há indisponibilidade, alerta ou oscilação no ponto de atendimento',
        'Validar nível de sinal, estabilidade do enlace e comportamento do equipamento, quando disponível',
        'Se houver falha relacionada à torre ou rompimento de comunicação, orientar o cliente e registrar corretamente',
        'Se normalizar durante o atendimento, confirmar teste final com o cliente',
        '➡️ Persistindo a falha → Encaminhar para visita técnica ou setor responsável',
      ]}
    />

		  <div className="mt-4">
    <ProcessCard
      title="Orientações importantes"
      icon={<AlertCircle className="w-4 h-4" />}
      color="purple"
      steps={[
        'Priorizar sempre a validação via Zabbix antes de seguir com outras tratativas',
        'Confirmar se o problema afeta apenas um cliente ou pode estar relacionado à torre/região',
        'Registrar no atendimento o nome da torre, status visualizado e comportamento da conexão',
        'Quando houver oscilação, verificar se existem chamados anteriores ou recorrência no mesmo ponto',
        'Se o cliente relatar falha após chuva, vento forte ou queda de energia, registrar essa informação',
        'Evitar concluir como problema interno sem antes validar completamente o cenário da conexão rádio',
        'Sempre confirmar com o cliente se o serviço voltou a funcionar antes de encerrar o atendimento',
      ]}
    />
  </div>

		  

        <div className="mt-4 flex justify-center">
          <div className="bg-white p-3 rounded border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-2 text-sm">⚙️ TREINAMENTO RADIO - Em Breve Material</h4>
          </div>
        </div>
      </div>

      {/* 3.4 CONFIGURAÇÃO */}
      <div className="bg-indigo-50 border-2 border-indigo-300 rounded-lg p-4">
        <h3 className="font-semibold text-indigo-900 mb-3 flex items-center gap-2">
          <Settings className="size-5" />
          ⚙️ 3.4 Configuração
        </h3>
        
        <ProcessCard
      title="Validação e tratativa inicial"
      icon={<Settings className="w-4 h-4" />}
      color="blue"
      steps={[
        'Identificar a necessidade do cliente: abertura de porta, troca de senha, ajuste de DNS ou configuração de rede',
        'Confirmar modelo do equipamento (ONU / roteador) e acesso disponível (remoto ou local)',
        'Validar se o cliente possui acesso ao equipamento ou se será necessário suporte remoto',
        'Realizar acesso remoto quando disponível (Flashman, Huawei, etc)',
        'Para abertura de porta: coletar porta, IP interno e tipo de protocolo (TCP/UDP)',
        'Para troca de senha: orientar padrão de segurança e aplicar alteração no Wi-Fi',
        'Para DNS: validar necessidade e aplicar DNS adequado conforme cenário',
        'Aplicar ajustes necessários e salvar configurações',
        'Solicitar teste com o cliente para validar funcionamento após alteração',
      ]}
    />
		  <div className="mt-4">
    <ProcessCard
      title="Orientações importantes"
      icon={<AlertCircle className="w-4 h-4" />}
      color="purple"
      steps={[
        'Sempre confirmar com o cliente qual equipamento está sendo configurado',
        'Em abertura de porta, garantir que o dispositivo esteja com IP fixo na rede',
        'Validar se não há CGNAT antes de seguir com abertura de porta',
        'Evitar múltiplas alterações simultâneas sem validação do cliente',
        'Orientar o cliente a guardar a nova senha após alteração',
        'Em caso de dúvidas ou limitações técnicas, escalar para o setor responsável',
        'Registrar detalhadamente no atendimento todas as alterações realizadas',
      ]}
    />
  </div>

        <div className="mt-4 flex justify-center">
          <TrainingLink href="https://drive.google.com/file/d/1Sffq4yxYJ5fyMjRPT5o-eENnRedOVKsN/view?usp=sharing">
            🔗 Liberação de Portas
          </TrainingLink>
        </div>

        {/* MVNO / MHTV / DEOLHO */}
        <div className="mt-4 bg-white border-2 border-indigo-200 rounded-lg p-4">
          <h4 className="font-semibold text-indigo-900 mb-3 flex items-center gap-2">
            <Monitor className="size-5" />
            📺 MVNO / MHTV / DEOLHO
          </h4>
          
          <div className="space-y-2 text-sm text-indigo-800 mb-4">
            <p>• Telefonia móvel (MVNO)</p>
            <p>• TV (MHTV)</p>
            <p>• Câmeras (DeOlho)</p>
          </div>

          <div className="flex flex-col gap-2">
            <TrainingLink href="https://docs.google.com/presentation/d/1AsDCrX3VQHFMdym7062dnFA116N6b7C_/edit">
              🔗 MVNO
            </TrainingLink>
            <TrainingLink href="https://drive.google.com/file/d/15OIxtD6mIbHmPQHyNxxn8ilJ1V1WM57R/view?usp=sharing">
              🔗 Telefonia Móvel
            </TrainingLink>
            <TrainingLink href="https://docs.google.com/presentation/d/1WpSBW8hYPbf2pKY1FgftP2pxIgtJxINczOa9adVT5VQ/edit">
              🔗 DeOlho MHNET
            </TrainingLink>
          </div>
        </div>
      </div>

      {/* 3.5 TELEFONIA */}
      <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4">
        <h3 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
          <Phone className="size-5" />
          ☎️ 3.5 Telefonia
        </h3>
        
        <ProcessCard
      title="Validação e tratativa inicial"
      icon={<Phone className="w-4 h-4" />}
      color="green"
      steps={[
        'Confirmar com o cliente qual é a falha apresentada: sem linha, sem receber chamadas, sem realizar chamadas, chiado, falha parcial ou instabilidade',
        'Validar se o aparelho telefônico está corretamente conectado e energizado, quando aplicável',
        'Testar cabo, porta TEL e conexão física do equipamento',
        'Verificar no Tip Zeus o registro da linha e o status atual do serviço',
        'Confirmar se a linha está registrada corretamente e sem bloqueios aparentes',
        'Realizar testes básicos de chamadas, quando possível',
        'Orientar o cliente a testar chamadas de entrada e saída',
        'Se houver normalização, confirmar funcionamento completo antes de encerrar o atendimento',
        '➡️ Persistindo a falha → Encaminhar para o setor de telefonia',
      ]}
    />

		  <div className="mt-4">
    <ProcessCard
      title="Testes que podem ser realizados"
      icon={<PhoneCall className="w-4 h-4" />}
      color="blue"
      steps={[
        'Teste de chamada de saída para número fixo',
        'Teste de chamada de saída para número móvel',
        'Teste de recebimento de chamada',
        'Validação de ausência de tom de linha',
        'Teste com outro aparelho telefônico, quando possível',
        'Validação da porta TEL e reinicialização do equipamento',
        'Confirmação de registro da linha no Tip Zeus após reinício',
      ]}
    />
  </div>

		  <div className="mt-4">
    <ProcessCard
      title="Orientações importantes"
      icon={<AlertCircle className="w-4 h-4" />}
      color="purple"
      steps={[
        'Registrar no atendimento exatamente qual sintoma o cliente relatou',
        'Sempre validar no Tip Zeus antes de concluir falha física ou encaminhamento',
        'Confirmar se o problema ocorre em todas as chamadas ou apenas em números específicos',
        'Quando possível, solicitar teste com outro aparelho para descartar defeito no telefone',
        'Se houver chiado, falha intermitente ou ausência de áudio, registrar com detalhes',
        'Informar no encaminhamento todos os testes realizados para evitar retrabalho',
        'Antes de encerrar, confirmar com o cliente se as chamadas de entrada e saída estão funcionando normalmente',
      ]}
    />
  </div>

		  

        <div className="mt-4 flex flex-col gap-2">
          <TrainingLink href="https://drive.google.com/file/d/14_pc4AHfo43gxYEAFGWlndrFuYkMFg1V/view?usp=sharing">
            🔗 Treinamento - Telefonia VOIP
          </TrainingLink>
        </div>
      </div>

      {/* 3.6 MUDANÇA DE ENDEREÇO */}
      <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
        <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
          <Home className="size-5" />
          🏠 3.6 Mudança de Endereço
        </h3>
        
        <div className="space-y-4">
          <div className="bg-white border-l-4 border-blue-500 p-3 rounded">
            <h4 className="font-semibold text-blue-900 mb-2 text-sm">💰 Regras</h4>
            <p className="text-sm text-blue-800">
              • Taxa padrão: <strong>R$ 100,00</strong>
            </p>
            <p className="text-sm text-blue-800">
              • Excedente: <strong>R$ 1,50/m</strong> acima de 150m
            </p>
            <p className="text-sm text-blue-800">
              • Parcelamento: <strong>2x de R$ 50,00</strong>
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 rounded">
            <h4 className="font-semibold text-yellow-900 mb-2 text-sm">📊 Isenção</h4>
            <div className="space-y-2 text-sm text-yellow-800">
              <div className="flex items-start gap-2">
                <XCircle className="size-4 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>❌ {'<'} 6 meses →</strong> sem isenção
                </div>
              </div>
              <div className="flex items-start gap-2">
                <AlertTriangle className="size-4 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>⚠️ 6–11 meses →</strong> 50%
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="size-4 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>✅ 12+ meses →</strong> isento (com critérios)
                </div>
              </div>
            </div>
          </div>

          <ProcessCard
            title="🔄 Processo"
            icon={<MapPin className="size-5" />}
            color="blue"
            steps={[
              'Informar valores',
              'Verificar ERP',
              'Refidelização (se aplicável)',
              'Confirmar endereço',
              'Abrir solicitação',
            ]}
          />

          <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded">
            <h4 className="font-semibold text-red-900 mb-2 text-sm">⚠️ Exceção</h4>
            <p className="text-sm text-red-800">
              ➡️ Cliente não aceita valor → <strong>Retenção</strong>
            </p>
          </div>

          <div className="flex justify-center">
            <TrainingLink href="https://docs.google.com/presentation/d/1WNziUMowWm4pRuA_oE3VS9hSOvN_dA_H2KZK38ePUdg/edit">
              🔗 Treinamento - Mudança de Endereço
            </TrainingLink>
          </div>
        </div>
      </div>

      {/* 3.7 MUDANÇA DE PONTO INTERNO */}
      <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-4">
        <h3 className="font-semibold text-orange-900 mb-3 flex items-center gap-2">
          <MapPin className="size-5" />
          🏡 3.7 Mudança de Ponto Interno
        </h3>
        
        <div className="bg-white border-l-4 border-orange-500 p-3 rounded mb-4">
          <p className="text-sm text-orange-800">
            Alteração dentro da mesma residência
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-orange-100 border border-orange-300 p-3 rounded">
            <h4 className="font-semibold text-orange-900 mb-2 text-sm">💰 Regras</h4>
            <p className="text-sm text-orange-800">
              • Taxa padrão: <strong>R$ 150,00</strong>
            </p>
            <p className="text-sm text-orange-800">
              • Possível excedente de cabo
            </p>
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
              ➡️ Cliente não aceita valor → <strong>Retenção</strong>
            </p>
          </div>
        </div>
      </div>

      {/* 3.8 VISITA TÉCNICA */}
      <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-4">
        <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <Wrench className="size-5" />
          🛠️ 3.8 Visita Técnica
        </h3>
        
        <div className="bg-white border-l-4 border-gray-500 p-3 rounded mb-4">
          <p className="text-sm text-gray-800">
            • Agendamento (Field Service / SLA)
          </p>
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

      {/* CONTEÚDOS ADICIONAIS */}
      <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-4">
        <h3 className="font-semibold text-purple-900 mb-4 flex items-center gap-2">
          <BookOpen className="size-5" />
          🟣 Conteúdos Adicionais
        </h3>
        <p className="text-sm text-purple-800 mb-4">Materiais de apoio técnico avançado</p>
        
        <div className="space-y-3">
          <div className="bg-white p-3 rounded border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-2 text-sm">⚙️ UNM2000 - Em Breve Material</h4>
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

  const getFinanceiroContent = () => ( <div className="space-y-6"> <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded"> <h3 className="font-semibold text-orange-900 mb-2">🟠 Fluxo Financeiro</h3> <p className="text-sm text-orange-800"> Bloqueios, Faturamento, Pagamentos e Crédito </p> </div> {/* Link Geral Financeiro */} <div className="bg-white border-2 border-orange-300 rounded-lg p-4"> <h3 className="font-semibold text-orange-900 mb-3 text-center">📊 Material Geral Financeiro</h3> <div className="flex justify-center"> <TrainingLink href="https://docs.google.com/spreadsheets/d/1sMv4iIdCgKdP-dLo_3Figf-lNXcYkvxNmv1Ic3gx8fE/edit?usp=sharing"> 🔗 Planilha Financeiro Completa </TrainingLink> </div> </div> {/* 4.1 BLOQUEIOS */} <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4"> <h3 className="font-semibold text-red-900 mb-3 flex items-center gap-2"> <Lock className="size-5" /> 💰 4.1 Bloqueios </h3> <div className="space-y-3"> <div className="bg-white border-l-4 border-red-500 p-3 rounded"> <div className="space-y-1 text-sm text-red-800"> <p>• Financeiro</p> <p>• Administrativo</p> </div> </div> <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded"> <h4 className="font-semibold text-blue-900 mb-2 text-sm">➡️ Ação</h4> <p className="text-sm text-blue-800">• Validar comprovante</p> <p className="text-sm text-blue-800">• Liberar acesso</p> </div> <div className="flex justify-center"> <TrainingLink href="https://drive.google.com/file/d/1mdC-y7EHmI8XI6R2sdu6MB4RMfuINsb-/view?usp=share_link"> 🔗 Treinamento - Bloqueios </TrainingLink> </div> </div> </div> {/* 4.2 FATURAMENTO */} <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4"> <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2"> <FileText className="size-5" /> 🧾 4.2 Faturamento </h3> <div className="bg-white border-l-4 border-blue-500 p-3 rounded mb-4"> <div className="space-y-1 text-sm text-blue-800"> <p>• Correção de cobranças</p> <p>• Ajustes</p> </div> </div> <div className="flex justify-center"> <TrainingLink href="https://drive.google.com/file/d/1t105iGODbYLFxng0QxQV4E8t64MLA_g0/view?usp=sharing"> 🔗 Treinamento - Faturamento </TrainingLink> </div> </div> {/* 4.3 PAGAMENTOS */} <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4"> <h3 className="font-semibold text-green-900 mb-3 flex items-center gap-2"> <CreditCard className="size-5" /> 🏦 4.3 Pagamentos </h3> <div className="bg-white border-l-4 border-green-500 p-3 rounded mb-4"> <div className="space-y-1 text-sm text-green-800"> <p>• Débito em conta</p> <p>• Baixas</p> </div> </div> <div className="flex justify-center"> <TrainingLink href="https://drive.google.com/file/d/1Jvyctn-6C9drl0anvmn21QyV-g1Uyj9d/view?usp=sharing"> 🔗 Treinamento - Pagamentos </TrainingLink> </div> </div> {/* 4.4 CRÉDITO */} <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4"> <h3 className="font-semibold text-yellow-900 mb-3 flex items-center gap-2"> <AlertTriangle className="size-5" /> 🚫 4.4 Crédito </h3> <div className="bg-white border-l-4 border-yellow-500 p-3 rounded mb-4"> <div className="space-y-1 text-sm text-yellow-800"> <p>• Códigos de erro</p> <p>• Tratativas</p> </div> </div> <div className="flex justify-center"> <TrainingLink href="https://drive.google.com/file/d/1bvGCZZ3NZMX8wyInONa92FQ5-III__2g/view?usp=share_link"> 🔗 Treinamento - Crédito </TrainingLink> </div> </div> </div> );

  const getRetencaoContent = () => (
    <div className="space-y-6">
      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
        <h3 className="font-semibold text-red-900 mb-2">🔴 Fluxo de Retenção</h3>
        <p className="text-sm text-red-800">
          Estratégias para retenção e satisfação do cliente
        </p>
      </div>

      {/* QUANDO ACIONAR */}
      <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-4">
        <h3 className="font-semibold text-orange-900 mb-3 flex items-center gap-2">
          <Target className="size-5" />
          🎯 Quando Acionar
        </h3>
        
        <div className="bg-white border-l-4 border-orange-500 p-3 rounded">
          <div className="space-y-2 text-sm text-orange-800">
            <p>• Cliente quer cancelar</p>
            <p>• Reclama de valores</p>
            <p>• Recusa taxas</p>
            <p>• Insatisfação</p>
          </div>
        </div>
      </div>

      {/* AÇÕES */}
      <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
        <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
          <Wrench className="size-5" />
          🧩 Ações
        </h3>
        
        <div className="space-y-3">
          <div className="bg-white p-3 rounded border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2 text-sm flex items-center gap-2">
              <Wrench className="size-4" />
              🔧 Resolver Tecnicamente
            </h4>
            <div className="space-y-1 text-sm text-blue-800">
              <p>• Oferecer visita</p>
              <p>• Ajustes</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-2 text-sm flex items-center gap-2">
              <Package className="size-4" />
              📦 Oferecer Plano
            </h4>
            <div className="space-y-1 text-sm text-purple-800">
              <p>• Upgrade</p>
              <p>• Downgrade</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded border border-red-200">
            <h4 className="font-semibold text-red-900 mb-2 text-sm flex items-center gap-2">
              <Users className="size-4" />
              🤝 Encaminhar para Retenção
            </h4>
            <div className="space-y-1 text-sm text-red-800">
              <p>• Casos complexos</p>
              <p>• Cliente insiste em cancelar</p>
            </div>
          </div>
        </div>
      </div>

      {/* REGRA DE OURO */}
      <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4">
        <h3 className="font-semibold text-yellow-900 mb-3 flex items-center gap-2">
          <HandshakeIcon className="size-5" />
          ⚠️ Regra de Ouro
        </h3>
        
        <div className="bg-white border-l-4 border-yellow-500 p-3 rounded">
          <h4 className="font-semibold text-yellow-900 mb-2 text-sm">Antes de escalar:</h4>
          <div className="space-y-2 text-sm text-yellow-800">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4" />
              <span>✔️ Resolver</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4" />
              <span>✔️ Ajustar plano</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4" />
              <span>✔️ Reduzir atrito</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            🔄 Fluxograma MHNET
          </h1>
          <p className="text-gray-600">
            Versão Atualizada - Procedimentos Completos de Atendimento
          </p>
        </div>

        {/* Main Flowchart */}
        <div className="flex flex-col items-center space-y-6">
          {/* Start */}
          <FlowchartNode
            title="🟢 1. Entrada (URA)"
            description="Identificação e Triagem"
            type="start"
          />

          <FlowConnector vertical />

          {/* Transferência Assistida Info */}
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

          {/* Triagem */}
          <FlowchartNode
            title="🟡 2. Triagem por Motivo"
            type="process"
          />

          <FlowConnector vertical />

          <div className="text-center mb-2">
            <p className="text-sm text-gray-600">Estrutura principal:</p>
          </div>

          {/* Three Main Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
            {/* Técnico */}
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

            {/* Financeiro */}
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

            {/* Retenção */}
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
          </div>

          <FlowConnector vertical />

          {/* End */}
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
            <p className="text-sm text-gray-700 mb-2">• <strong>Encaminhado para:</strong></p>
            <p className="text-xs text-gray-600">
              Técnico campo • N2 • Financeiro • Retenção
            </p>
          </div>

          {/* Visão Final */}
          <div className="bg-white border-2 border-gray-300 rounded-lg p-6 max-w-md shadow-lg mt-8">
            <h3 className="font-semibold text-gray-900 mb-4 text-center">🧠 Visão Final</h3>
            <div className="text-center text-sm text-gray-700 space-y-2 font-mono">
              <div>URA</div>
              <div>↓</div>
              <div>Triagem</div>
              <div>↓</div>
              <div className="grid grid-cols-3 gap-2">
                <span className="text-blue-600">Suporte Técnico</span>
                <span className="text-green-600">Financeiro</span>
                <span className="text-red-600">Retenção</span>
              </div>
              <div>↓</div>
              <div>Solução / Encaminhamento</div>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Panels */}
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
    </div>
  );
}
