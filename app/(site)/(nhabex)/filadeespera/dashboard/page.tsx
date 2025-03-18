"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ChevronRight,
  Info,
  BarChart3,
  Users,
  Clock,
  Bell,
  Settings,
  Zap,
  PieChart,
  LineChart,
  ArrowUpRight,
  UserCheck,
  UserX,
  RefreshCw,
  ExternalLink,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Documentation() {
  return (
    <div className="container mx-auto py-8 px-4 w-full">
      <div className="space-y-2 mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Fila de Espera</span>
          <ChevronRight className="h-4 w-4" />
          <span className="font-medium text-foreground">Dashboard</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#3CBDA1] to-teal-600">
          Dashboard da Fila de Espera
        </h1>
        <p className="text-xl text-muted-foreground">
          Guia completo para entender e utilizar o painel de controle da fila de espera
        </p>
      </div>

      <Card className="border border-[#3CBDA1]/20 shadow-lg overflow-hidden bg-card">
        <CardContent className="p-8">
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Visão Geral</Badge>
              <h2 className="text-2xl font-semibold">Introdução ao Dashboard</h2>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-base leading-relaxed">
                O Dashboard da Fila de Espera é uma ferramenta poderosa que oferece uma visão completa e em tempo real
                do fluxo de atendimento em sua agência. Projetado para administradores e gestores, este painel
                centraliza informações críticas, permitindo monitorar o desempenho, identificar gargalos e tomar
                decisões baseadas em dados para otimizar o atendimento ao cliente.
              </p>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/images/dashboard/dashboard-overview.png"
                    alt="Visão geral do dashboard"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-md"
                  />
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-black/70 text-white hover:bg-black/80">Dashboard Principal</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#3CBDA1]/5 p-4 rounded-lg border border-[#3CBDA1]/20 mt-6">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-[#3CBDA1] mt-0.5 flex-shrink-0" />
                <p className="text-base leading-relaxed">
                  O dashboard é acessível apenas para usuários com permissões de administrador ou gestor. Para acessar,
                  navegue até a seção "Dashboard" no menu lateral após fazer login com suas credenciais.
                </p>
              </div>
            </div>
          </section>

          <Separator className="my-8 bg-[#3CBDA1]/20" />

          <section className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Componentes</Badge>
              <h2 className="text-2xl font-semibold">Principais Componentes do Dashboard</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="h-1 w-full bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                      <BarChart3 className="h-5 w-5 text-[#3CBDA1]" />
                    </div>
                    <h3 className="text-lg font-semibold">Estatísticas em Tempo Real</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Monitore métricas essenciais como tempo médio de espera, tempo médio de atendimento, número de
                    clientes na fila e taxa de desistência, tudo atualizado em tempo real.
                  </p>
                  <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/images/dashboard/real-time-stats.png"
                      alt="Estatísticas em tempo real"
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
                      <Users className="h-5 w-5 text-[#3CBDA1]" />
                    </div>
                    <h3 className="text-lg font-semibold">Visão da Fila Atual</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Visualize todos os clientes atualmente na fila, organizados por prioridade, serviço solicitado e
                    tempo de espera, permitindo gerenciamento eficiente.
                  </p>
                  <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/images/dashboard/queue-view.png"
                      alt="Visão da fila atual"
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
                      <PieChart className="h-5 w-5 text-[#3CBDA1]" />
                    </div>
                    <h3 className="text-lg font-semibold">Análise por Serviço</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Analise a distribuição de atendimentos por tipo de serviço, identificando quais serviços são mais
                    demandados e requerem mais recursos.
                  </p>
                  <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/images/dashboard/service-analysis.png"
                      alt="Análise por serviço"
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
                      <LineChart className="h-5 w-5 text-[#3CBDA1]" />
                    </div>
                    <h3 className="text-lg font-semibold">Tendências e Histórico</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Visualize dados históricos e tendências de atendimento ao longo do tempo, permitindo planejamento
                    estratégico e alocação de recursos.
                  </p>
                  <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/images/dashboard/trends-history.png"
                      alt="Tendências e histórico"
                      width={500}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 shadow-sm">
                <div className="p-3 rounded-full bg-[#3CBDA1]/10 mb-3">
                  <Bell className="h-5 w-5 text-[#3CBDA1]" />
                </div>
                <h3 className="text-base font-medium mb-2">Alertas e Notificações</h3>
                <p className="text-sm text-center text-gray-600 dark:text-gray-300">
                  Receba alertas automáticos quando métricas importantes ultrapassarem limites predefinidos.
                </p>
              </div>

              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 shadow-sm">
                <div className="p-3 rounded-full bg-[#3CBDA1]/10 mb-3">
                  <Settings className="h-5 w-5 text-[#3CBDA1]" />
                </div>
                <h3 className="text-base font-medium mb-2">Configurações Personalizáveis</h3>
                <p className="text-sm text-center text-gray-600 dark:text-gray-300">
                  Personalize seu dashboard para exibir as métricas e visualizações mais relevantes para sua operação.
                </p>
              </div>

              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 shadow-sm">
                <div className="p-3 rounded-full bg-[#3CBDA1]/10 mb-3">
                  <Zap className="h-5 w-5 text-[#3CBDA1]" />
                </div>
                <h3 className="text-base font-medium mb-2">Ações Rápidas</h3>
                <p className="text-sm text-center text-gray-600 dark:text-gray-300">
                  Execute ações como redirecionar clientes, abrir novos balcões ou enviar notificações diretamente do
                  dashboard.
                </p>
              </div>
            </div>
          </section>

          <Separator className="my-8 bg-[#3CBDA1]/20" />

          <section className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Métricas</Badge>
              <h2 className="text-2xl font-semibold">Principais Métricas Monitoradas</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#3CBDA1]/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-[#3CBDA1]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Tempo Médio de Espera</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Monitore quanto tempo, em média, os clientes esperam antes de serem atendidos
                    </p>
                  </div>
                </div>
                <div className="relative h-20 bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-3/4 bg-gradient-to-r from-[#3CBDA1]/80 to-[#3CBDA1] flex items-center justify-end px-3">
                    <span className="text-white font-medium text-sm">12:45 min</span>
                  </div>
                </div>
                <div className="mt-3 flex items-center text-sm">
                  <ArrowUpRight className="h-4 w-4 text-red-500 mr-1" />
                  <span className="text-red-500 font-medium">+2.3%</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2">em relação à semana anterior</span>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#3CBDA1]/10 flex items-center justify-center">
                    <UserCheck className="h-6 w-6 text-[#3CBDA1]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Taxa de Atendimento</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Acompanhe a quantidade de clientes atendidos por hora em cada balcão
                    </p>
                  </div>
                </div>
                <div className="relative h-20 bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-4/5 bg-gradient-to-r from-[#3CBDA1]/80 to-[#3CBDA1] flex items-center justify-end px-3">
                    <span className="text-white font-medium text-sm">8.2 clientes/hora</span>
                  </div>
                </div>
                <div className="mt-3 flex items-center text-sm">
                  <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-500 font-medium">+5.7%</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2">em relação à semana anterior</span>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#3CBDA1]/10 flex items-center justify-center">
                    <UserX className="h-6 w-6 text-[#3CBDA1]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Taxa de Desistência</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Identifique a porcentagem de clientes que desistem antes de serem atendidos
                    </p>
                  </div>
                </div>
                <div className="relative h-20 bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-1/4 bg-gradient-to-r from-[#3CBDA1]/80 to-[#3CBDA1] flex items-center justify-end px-3">
                    <span className="text-white font-medium text-sm">4.8%</span>
                  </div>
                </div>
                <div className="mt-3 flex items-center text-sm">
                  <ArrowUpRight className="h-4 w-4 text-green-500 mr-1 rotate-180" />
                  <span className="text-green-500 font-medium">-1.2%</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2">em relação à semana anterior</span>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#3CBDA1]/10 flex items-center justify-center">
                    <RefreshCw className="h-6 w-6 text-[#3CBDA1]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Tempo de Atendimento</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Meça quanto tempo, em média, cada atendimento leva para ser concluído
                    </p>
                  </div>
                </div>
                <div className="relative h-20 bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-3/5 bg-gradient-to-r from-[#3CBDA1]/80 to-[#3CBDA1] flex items-center justify-end px-3">
                    <span className="text-white font-medium text-sm">8:30 min</span>
                  </div>
                </div>
                <div className="mt-3 flex items-center text-sm">
                  <ArrowUpRight className="h-4 w-4 text-green-500 mr-1 rotate-180" />
                  <span className="text-green-500 font-medium">-0.8%</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2">em relação à semana anterior</span>
                </div>
              </div>
            </div>
          </section>

          <Separator className="my-8 bg-[#3CBDA1]/20" />

          <section className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Utilização</Badge>
              <h2 className="text-2xl font-semibold">Como Utilizar o Dashboard</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3CBDA1]/20 flex items-center justify-center text-[#3CBDA1] font-bold mr-3">
                    1
                  </span>
                  Acesso ao Dashboard
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="col-span-1 md:col-span-2">
                    <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                      Para acessar o dashboard, faça login no sistema NhaBex com suas credenciais de administrador ou
                      gestor. No menu lateral, clique na opção "Dashboard" para visualizar o painel completo. Você pode
                      alternar entre diferentes agências usando o seletor no topo da página.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Acesse com credenciais de administrador ou gestor
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Selecione "Dashboard" no menu lateral
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Escolha a agência desejada no seletor superior
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/images/dashboard/dashboard-access.png"
                      alt="Acesso ao dashboard"
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
                  Personalização da Visualização
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="col-span-1 md:col-span-2">
                    <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                      O dashboard é altamente personalizável para atender às suas necessidades específicas. Você pode
                      reorganizar os widgets, alterar o período de análise e ajustar quais métricas são exibidas. Use o
                      botão "Personalizar" no canto superior direito para acessar as opções de configuração.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Clique e arraste widgets para reorganizar o layout
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Ajuste o período de análise (dia, semana, mês)
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Adicione ou remova métricas conforme necessário
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/images/dashboard/dashboard-customize.png"
                      alt="Personalização do dashboard"
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
                  Interpretação e Ação
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="col-span-1 md:col-span-2">
                    <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                      O verdadeiro valor do dashboard está na capacidade de interpretar os dados e tomar ações
                      imediatas. Identifique tendências, reconheça padrões e responda proativamente a situações que
                      exigem atenção. O sistema também oferece recomendações automáticas baseadas nos dados atuais.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Monitore alertas em vermelho que indicam situações críticas
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Utilize as ações rápidas para resolver problemas identificados
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Revise as recomendações automáticas do sistema
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/images/dashboard/dashboard-actions.png"
                      alt="Ações no dashboard"
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

          <section className="mb-6">
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">
                Melhores Práticas
              </Badge>
              <h2 className="text-2xl font-semibold">Dicas para Maximizar o Uso do Dashboard</h2>
            </div>

            <div className="bg-[#3CBDA1]/5 p-6 rounded-lg border border-[#3CBDA1]/20 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-[#3CBDA1]">
                      <span className="font-semibold">1</span>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Revisão Regular</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Estabeleça uma rotina para revisar o dashboard regularmente, não apenas em momentos de crise.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-[#3CBDA1]">
                      <span className="font-semibold">2</span>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Defina Metas Claras</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Configure metas para cada métrica importante e monitore o progresso em relação a essas metas.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-[#3CBDA1]">
                      <span className="font-semibold">3</span>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Compartilhe Insights</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Utilize a função de exportação para compartilhar relatórios com sua equipe e stakeholders.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-[#3CBDA1]">
                      <span className="font-semibold">4</span>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Configure Alertas</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Personalize os alertas para receber notificações sobre situações que exigem atenção imediata.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-[#3CBDA1]">
                      <span className="font-semibold">5</span>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Análise Comparativa</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Compare o desempenho entre diferentes períodos, agências ou balcões para identificar padrões.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-[#3CBDA1]">
                      <span className="font-semibold">6</span>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Treinamento da Equipe</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Garanta que todos os gestores estejam treinados para interpretar e utilizar o dashboard
                        efetivamente.
                      </p>
                    </div>
                  </div>
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
                <span>Tutorial completo do dashboard</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all border border-[#3CBDA1]/20 hover:border-[#3CBDA1]/50"
              >
                <Badge className="bg-[#3CBDA1] text-white">PDF</Badge>
                <span>Guia de referência rápida</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all border border-[#3CBDA1]/20 hover:border-[#3CBDA1]/50"
              >
                <Badge className="bg-[#3CBDA1] text-white">Webinar</Badge>
                <span>Análise avançada de dados</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all border border-[#3CBDA1]/20 hover:border-[#3CBDA1]/50"
              >
                <Badge className="bg-[#3CBDA1] text-white">Suporte</Badge>
                <span>Contate nossa equipe de especialistas</span>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

