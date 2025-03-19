"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ChevronRight,
  Info,
  Video,
  Users,
  Calendar,
  Bell,
  FileText,
  CheckCircle,
  AlertTriangle,
  Mic,
  Share2,
  MessageSquare,
  Lock,
  ExternalLink,
  UserPlus,
  BarChart,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Documentation() {
  return (
    <div className="container mx-auto py-8 px-4 w-full">
      <div className="space-y-2 mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>NhaBex</span>
          <ChevronRight className="h-4 w-4" />
          <span className="font-medium text-foreground">Audiência</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#3CBDA1] to-teal-600">
          Gestão de Audiência
        </h1>
        <p className="text-xl text-muted-foreground">
          Documentação completa para o sistema de gestão de audiências do NhaBex
        </p>
      </div>

      <Card className="border border-[#3CBDA1]/20 shadow-lg overflow-hidden bg-card">
        <CardContent className="p-8">
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Visão Geral</Badge>
              <h2 className="text-2xl font-semibold">Introdução ao Sistema de Gestão de Audiência</h2>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-base leading-relaxed">
                O Sistema de Gestão de Audiência do NhaBex foi desenvolvido para otimizar e digitalizar o processo de
                audiências, permitindo que instituições realizem reuniões, audiências formais e atendimentos
                especializados de forma eficiente, seja presencialmente ou virtualmente. A plataforma integra recursos
                avançados de agendamento, videoconferência, gravação e documentação, garantindo segurança, conformidade
                legal e acessibilidade.
              </p>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/images/audiencia/overview.png"
                    alt="Visão geral do sistema de gestão de audiência"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-md"
                  />
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-black/70 text-white hover:bg-black/80">Sistema de Audiência</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 p-5 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                    <Video className="h-5 w-5 text-[#3CBDA1]" />
                  </div>
                  <h3 className="text-lg font-semibold">Audiências Virtuais</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Realize audiências totalmente virtuais com videoconferência integrada, compartilhamento de tela e
                  gravação automática.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 p-5 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                    <Users className="h-5 w-5 text-[#3CBDA1]" />
                  </div>
                  <h3 className="text-lg font-semibold">Audiências Híbridas</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Combine participantes presenciais e remotos em uma única sessão, com integração perfeita entre
                  ambientes físicos e virtuais.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 p-5 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                    <FileText className="h-5 w-5 text-[#3CBDA1]" />
                  </div>
                  <h3 className="text-lg font-semibold">Documentação Digital</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Geração automática de atas, transcrições e relatórios, com assinatura digital integrada e
                  armazenamento seguro em conformidade legal.
                </p>
              </div>
            </div>

            <div className="bg-[#3CBDA1]/5 p-4 rounded-lg border border-[#3CBDA1]/20 mt-6">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-[#3CBDA1] mt-0.5 flex-shrink-0" />
                <p className="text-base leading-relaxed">
                  O sistema de Gestão de Audiência do NhaBex foi desenvolvido em conformidade com as normas legais de
                  proteção de dados e segurança da informação, garantindo a validade jurídica de todos os procedimentos
                  realizados na plataforma.
                </p>
              </div>
            </div>
          </section>

          <Separator className="my-8 bg-[#3CBDA1]/20" />

          <section className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Funcionalidades</Badge>
              <h2 className="text-2xl font-semibold">Principais Recursos</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="h-1 w-full bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                      <Calendar className="h-5 w-5 text-[#3CBDA1]" />
                    </div>
                    <h3 className="text-lg font-semibold">Agendamento Inteligente</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Calendário integrado com visualização de disponibilidade em tempo real
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Agendamento automático com base na disponibilidade de salas e participantes
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Definição de duração, tipo de audiência e recursos necessários
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Reagendamento simplificado com notificação automática aos participantes
                      </p>
                    </li>
                  </ul>
                  <div className="mt-4 relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/images/audiencia/scheduling.png"
                      alt="Interface de agendamento"
                      width={500}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="h-1 w-full bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                      <UserPlus className="h-5 w-5 text-[#3CBDA1]" />
                    </div>
                    <h3 className="text-lg font-semibold">Gestão de Participantes</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Convites automáticos por e-mail e SMS com confirmação de recebimento
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Controle de presença com registro de entrada e saída
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Definição de papéis e permissões para cada participante
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Compartilhamento seguro de documentos pré-audiência
                      </p>
                    </li>
                  </ul>
                  <div className="mt-4 relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/images/audiencia/participants.png"
                      alt="Gestão de participantes"
                      width={500}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="h-1 w-full bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                      <Video className="h-5 w-5 text-[#3CBDA1]" />
                    </div>
                    <h3 className="text-lg font-semibold">Videoconferência Avançada</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Transmissão em alta definição com ajuste automático de qualidade
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Compartilhamento de tela e apresentação de documentos
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Salas privadas para discussões reservadas durante a audiência
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Controle de áudio e vídeo pelo administrador da sessão
                      </p>
                    </li>
                  </ul>
                  <div className="mt-4 relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/images/audiencia/videoconference.png"
                      alt="Videoconferência"
                      width={500}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="h-1 w-full bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                      <FileText className="h-5 w-5 text-[#3CBDA1]" />
                    </div>
                    <h3 className="text-lg font-semibold">Documentação e Registros</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Gravação automática com backup redundante e criptografia
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Transcrição automática com tecnologia de reconhecimento de voz
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Geração de atas e relatórios com modelos personalizáveis
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Assinatura digital de documentos com validade jurídica
                      </p>
                    </li>
                  </ul>
                  <div className="mt-4 relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/images/audiencia/documentation.png"
                      alt="Documentação e registros"
                      width={500}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 p-5 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                    <Bell className="h-5 w-5 text-[#3CBDA1]" />
                  </div>
                  <h3 className="text-lg font-semibold">Notificações Automáticas</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Sistema de lembretes e notificações por múltiplos canais (e-mail, SMS, push) com confirmação de
                  recebimento e leitura.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 p-5 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                    <Lock className="h-5 w-5 text-[#3CBDA1]" />
                  </div>
                  <h3 className="text-lg font-semibold">Segurança Avançada</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Criptografia de ponta a ponta, autenticação em dois fatores, controle de acesso granular e registro
                  detalhado de atividades.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 p-5 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                    <BarChart className="h-5 w-5 text-[#3CBDA1]" />
                  </div>
                  <h3 className="text-lg font-semibold">Relatórios e Estatísticas</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Painéis analíticos com métricas de utilização, duração média, taxa de comparecimento e outros
                  indicadores de desempenho.
                </p>
              </div>
            </div>
          </section>

          <Separator className="my-8 bg-[#3CBDA1]/20" />

          <section className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Processo</Badge>
              <h2 className="text-2xl font-semibold">Como Utilizar o Sistema</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3CBDA1]/20 flex items-center justify-center text-[#3CBDA1] font-bold mr-3">
                    1
                  </span>
                  Agendamento da Audiência
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="col-span-1 md:col-span-2">
                    <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                      O primeiro passo é agendar a audiência no sistema, definindo todos os parâmetros necessários para
                      sua realização. O agendamento pode ser feito por administradores do sistema ou por usuários com
                      permissões específicas.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Acesse o sistema e clique em "Nova Audiência" no painel principal
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Defina o tipo de audiência (virtual, presencial ou híbrida)
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Selecione data, hora e duração estimada
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Escolha a sala física (se aplicável) ou configure a sala virtual
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/images/audiencia/scheduling-form.png"
                      alt="Formulário de agendamento"
                      width={300}
                      height={200}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3CBDA1]/20 flex items-center justify-center text-[#3CBDA1] font-bold mr-3">
                    2
                  </span>
                  Convite e Gestão de Participantes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="col-span-1 md:col-span-2">
                    <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                      Após o agendamento, é necessário adicionar os participantes da audiência. O sistema permite
                      adicionar participantes individualmente ou importar listas, definindo o papel de cada um na
                      sessão.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Clique em "Adicionar Participantes" na tela de detalhes da audiência
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Busque participantes no sistema ou adicione novos informando e-mail e telefone
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Defina o papel de cada participante (administrador, apresentador, convidado)
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Envie os convites com instruções de acesso personalizadas
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/images/audiencia/participants-management.png"
                      alt="Gestão de participantes"
                      width={300}
                      height={200}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3CBDA1]/20 flex items-center justify-center text-[#3CBDA1] font-bold mr-3">
                    3
                  </span>
                  Preparação e Compartilhamento de Documentos
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="col-span-1 md:col-span-2">
                    <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                      Antes da audiência, é possível carregar e compartilhar documentos relevantes com os participantes.
                      Todos os documentos são armazenados de forma segura e podem ser acessados durante a sessão.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Acesse a seção "Documentos" na tela de detalhes da audiência
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Faça upload de arquivos ou selecione documentos já existentes no sistema
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Defina permissões de acesso para cada documento (visualização, edição)
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Organize os documentos em pastas para facilitar o acesso durante a audiência
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/images/audiencia/document-sharing.png"
                      alt="Compartilhamento de documentos"
                      width={300}
                      height={200}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3CBDA1]/20 flex items-center justify-center text-[#3CBDA1] font-bold mr-3">
                    4
                  </span>
                  Realização da Audiência
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="col-span-1 md:col-span-2">
                    <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                      No dia e hora agendados, a audiência pode ser iniciada pelo administrador. O sistema oferece uma
                      interface intuitiva para gerenciar todos os aspectos da sessão em tempo real.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          O administrador inicia a sessão clicando em "Iniciar Audiência"
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Participantes recebem notificação e podem acessar a sala virtual
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          O sistema inicia automaticamente a gravação e registro de presença
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Administrador pode controlar áudio, vídeo e compartilhamento de tela
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/images/audiencia/live-session.png"
                      alt="Audiência em andamento"
                      width={300}
                      height={200}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3CBDA1]/20 flex items-center justify-center text-[#3CBDA1] font-bold mr-3">
                    5
                  </span>
                  Documentação e Encerramento
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="col-span-1 md:col-span-2">
                    <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                      Ao final da audiência, o sistema gera automaticamente a documentação necessária e disponibiliza os
                      registros para todos os participantes autorizados.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          O administrador encerra a sessão clicando em "Finalizar Audiência"
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          O sistema gera automaticamente a ata e transcrição da audiência
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Participantes podem assinar digitalmente os documentos gerados
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Todos os registros são armazenados de forma segura e podem ser acessados posteriormente
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/images/audiencia/documentation-final.png"
                      alt="Documentação final"
                      width={300}
                      height={200}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Separator className="my-8 bg-[#3CBDA1]/20" />

          <section className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Interface</Badge>
              <h2 className="text-2xl font-semibold">Interface do Sistema</h2>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none mb-6">
              <p className="text-base leading-relaxed">
                A interface do Sistema de Gestão de Audiência do NhaBex foi projetada para ser intuitiva e funcional,
                permitindo que usuários com diferentes níveis de familiaridade tecnológica possam utilizá-la sem
                dificuldades.
              </p>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md mb-8">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/images/audiencia/interface-overview.png"
                    alt="Visão geral da interface"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-md"
                  />
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-black/70 text-white hover:bg-black/80">Interface Principal</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="h-1 w-full bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                      <Calendar className="h-5 w-5 text-[#3CBDA1]" />
                    </div>
                    <h3 className="text-lg font-semibold">Painel de Controle</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    O painel principal oferece uma visão geral de todas as audiências agendadas, em andamento e
                    concluídas, com acesso rápido às principais funcionalidades.
                  </p>
                  <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/images/audiencia/dashboard.png"
                      alt="Painel de controle"
                      width={500}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="h-1 w-full bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                      <Video className="h-5 w-5 text-[#3CBDA1]" />
                    </div>
                    <h3 className="text-lg font-semibold">Sala de Audiência Virtual</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    A interface da sala virtual foi projetada para maximizar a visibilidade dos participantes e
                    facilitar a interação durante a audiência.
                  </p>
                  <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/images/audiencia/virtual-room.png"
                      alt="Sala de audiência virtual"
                      width={500}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 p-5 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                    <Mic className="h-5 w-5 text-[#3CBDA1]" />
                  </div>
                  <h3 className="text-lg font-semibold">Controles de Áudio e Vídeo</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Controles intuitivos para gerenciar microfone, câmera, alto-falantes e qualidade de transmissão
                  durante a audiência.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 p-5 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                    <Share2 className="h-5 w-5 text-[#3CBDA1]" />
                  </div>
                  <h3 className="text-lg font-semibold">Compartilhamento de Conteúdo</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Ferramentas para compartilhar tela, apresentações, documentos e outros conteúdos durante a audiência.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 p-5 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                    <MessageSquare className="h-5 w-5 text-[#3CBDA1]" />
                  </div>
                  <h3 className="text-lg font-semibold">Chat e Anotações</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Canais de comunicação por texto e ferramentas para fazer anotações durante a audiência.
                </p>
              </div>
            </div>
          </section>

          <Separator className="my-8 bg-[#3CBDA1]/20" />

          <section className="mb-6">
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Dicas</Badge>
              <h2 className="text-2xl font-semibold">Melhores Práticas</h2>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3CBDA1]/20 flex items-center justify-center text-[#3CBDA1]">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Teste Antecipadamente</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Realize um teste de conexão e equipamentos pelo menos 30 minutos antes do início da audiência
                        para garantir que tudo funcione corretamente.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3CBDA1]/20 flex items-center justify-center text-[#3CBDA1]">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Organize os Documentos</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Carregue e organize todos os documentos necessários com antecedência, criando pastas lógicas
                        para facilitar o acesso durante a audiência.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3CBDA1]/20 flex items-center justify-center text-[#3CBDA1]">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Defina Papéis Claros</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Atribua papéis específicos para cada participante e certifique-se de que todos compreendam suas
                        responsabilidades durante a audiência.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3CBDA1]/20 flex items-center justify-center text-[#3CBDA1]">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Utilize Lembretes</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Configure lembretes automáticos para garantir que todos os participantes estejam presentes no
                        horário agendado.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3CBDA1]/20 flex items-center justify-center text-[#3CBDA1]">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Verifique a Gravação</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Confirme que a gravação está funcionando corretamente no início da audiência e faça backups
                        periódicos durante sessões longas.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3CBDA1]/20 flex items-center justify-center text-[#3CBDA1]">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Revise a Documentação</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Após a audiência, revise todos os documentos gerados antes de finalizar e compartilhar com os
                        participantes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#3CBDA1]/10 p-4 rounded-lg border-l-4 border-[#3CBDA1] mt-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-[#3CBDA1] mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Importante</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Todas as audiências realizadas no sistema NhaBex são protegidas por criptografia de ponta a ponta e
                    seguem rigorosos protocolos de segurança. No entanto, é responsabilidade dos participantes garantir
                    a confidencialidade das informações compartilhadas durante as sessões.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-10 bg-[#3CBDA1]/10 rounded-lg p-6 border border-[#3CBDA1]/20">
            <div className="flex items-center gap-2 mb-4">
              <ExternalLink className="h-5 w-5 text-[#3CBDA1]" />
              <h3 className="text-lg font-semibold">Recursos Adicionais</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="#"
                className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all border border-[#3CBDA1]/20 hover:border-[#3CBDA1]/50"
              >
                <Badge className="bg-[#3CBDA1] text-white">Vídeo</Badge>
                <span>Tutorial completo do sistema de audiência</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all border border-[#3CBDA1]/20 hover:border-[#3CBDA1]/50"
              >
                <Badge className="bg-[#3CBDA1] text-white">PDF</Badge>
                <span>Manual do administrador de audiências</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all border border-[#3CBDA1]/20 hover:border-[#3CBDA1]/50"
              >
                <Badge className="bg-[#3CBDA1] text-white">Treinamento</Badge>
                <span>Cursos online para gestores de audiência</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all border border-[#3CBDA1]/20 hover:border-[#3CBDA1]/50"
              >
                <Badge className="bg-[#3CBDA1] text-white">Suporte</Badge>
                <span>Contate nossa equipe especializada</span>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

