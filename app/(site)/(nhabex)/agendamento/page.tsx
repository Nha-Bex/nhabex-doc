"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ChevronRight,
  Info,
  Clock,
  Users,
  CheckCircle,
  XCircle,
  Bell,
  Smartphone,
  Building,
  UserPlus,
  Edit,
  Trash,
  AlertTriangle,
  ExternalLink,
  CalendarDays,
  CalendarClock,
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
          <span className="font-medium text-foreground">Agendamentos</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#3CBDA1] to-teal-600">
          Sistema de Agendamentos
        </h1>
        <p className="text-xl text-muted-foreground">Documentação completa para o sistema de agendamentos do NhaBex</p>
      </div>

      <Card className="border border-[#3CBDA1]/20 shadow-lg overflow-hidden bg-card">
        <CardContent className="p-8">
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Visão Geral</Badge>
              <h2 className="text-2xl font-semibold">Introdução ao Sistema de Agendamentos</h2>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-base leading-relaxed">
                O Sistema de Agendamentos do NhaBex foi desenvolvido para otimizar o fluxo de atendimento, reduzir
                tempos de espera e proporcionar uma experiência mais conveniente para os clientes. Com esta solução, os
                utentes podem agendar seus atendimentos antecipadamente através de múltiplos canais, garantindo horários
                específicos e evitando filas desnecessárias.
              </p>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/images/agendamento/overview.png"
                    alt="Visão geral do sistema de agendamentos"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-md"
                  />
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-black/70 text-white hover:bg-black/80">Sistema de Agendamentos</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 p-5 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                    <Smartphone className="h-5 w-5 text-[#3CBDA1]" />
                  </div>
                  <h3 className="text-lg font-semibold">Aplicação Web</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Agendamentos realizados diretamente pelo cliente através da plataforma online, com acesso 24/7 e
                  confirmação instantânea.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 p-5 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                    <Building className="h-5 w-5 text-[#3CBDA1]" />
                  </div>
                  <h3 className="text-lg font-semibold">Módulo na Agência</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Terminais de autoatendimento disponíveis nas agências para que os clientes agendem suas próximas
                  visitas antes de sair.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 p-5 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                    <UserPlus className="h-5 w-5 text-[#3CBDA1]" />
                  </div>
                  <h3 className="text-lg font-semibold">Recepção</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Agendamentos realizados por funcionários da recepção para clientes que preferem o atendimento
                  presencial ou telefônico.
                </p>
              </div>
            </div>

            <div className="bg-[#3CBDA1]/5 p-4 rounded-lg border border-[#3CBDA1]/20 mt-6">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-[#3CBDA1] mt-0.5 flex-shrink-0" />
                <p className="text-base leading-relaxed">
                  Independentemente do canal utilizado, todos os agendamentos são sincronizados em tempo real com o
                  sistema central, garantindo consistência e evitando conflitos de horários.
                </p>
              </div>
            </div>
          </section>

          <Separator className="my-8 bg-[#3CBDA1]/20" />

          <section className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Web</Badge>
              <h2 className="text-2xl font-semibold">Agendamento via Aplicação Web</h2>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none mb-6">
              <p className="text-base leading-relaxed">
                A aplicação web oferece a maneira mais conveniente para os clientes agendarem seus atendimentos. Com uma
                interface intuitiva e responsiva, o processo pode ser concluído em poucos minutos, de qualquer
                dispositivo com acesso à internet.
              </p>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md mb-8">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/images/agendamento/web-app.png"
                    alt="Interface da aplicação web para agendamentos"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-md"
                  />
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-black/70 text-white hover:bg-black/80">Aplicação Web</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3CBDA1]/20 flex items-center justify-center text-[#3CBDA1] font-bold mr-3">
                    1
                  </span>
                  Acesso e Login
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="col-span-1 md:col-span-2">
                    <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                      Os clientes podem acessar o sistema de agendamentos através do site oficial do NhaBex ou
                      diretamente pelo endereço <span className="font-medium">agendamento.nhabex.com</span>. É
                      necessário realizar login com credenciais existentes ou criar uma nova conta.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Acesse o site e clique em "Agendar Atendimento"
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Faça login com seu e-mail e senha ou crie uma nova conta
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Confirme seus dados pessoais antes de prosseguir
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/images/agendamento/login.png"
                      alt="Tela de login"
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
                  Seleção de Serviço e Agência
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="col-span-1 md:col-span-2">
                    <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                      Após o login, o cliente deve selecionar o tipo de serviço desejado e a agência onde pretende ser
                      atendido. O sistema mostra apenas os serviços disponíveis para agendamento e as agências que
                      oferecem esses serviços.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Escolha o serviço desejado entre as categorias disponíveis
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Selecione a agência de sua preferência no mapa ou na lista
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Verifique os detalhes do serviço, como documentos necessários e tempo estimado
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/images/agendamento/service-selection.png"
                      alt="Seleção de serviço e agência"
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
                  Escolha de Data e Hora
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="col-span-1 md:col-span-2">
                    <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                      O sistema apresenta um calendário com as datas e horários disponíveis para o serviço e agência
                      selecionados. Os horários são atualizados em tempo real, garantindo que apenas slots realmente
                      disponíveis sejam oferecidos.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Navegue pelo calendário para encontrar a data desejada
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Selecione um dos horários disponíveis (destacados em verde)
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          O sistema mostra a estimativa de tempo de atendimento para planejamento
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/images/agendamento/date-time.png"
                      alt="Seleção de data e hora"
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
                  Confirmação e Comprovante
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="col-span-1 md:col-span-2">
                    <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                      Após selecionar o horário, o cliente visualiza um resumo do agendamento para confirmação. Ao
                      confirmar, o sistema gera um comprovante com código único que pode ser salvo, impresso ou enviado
                      por e-mail.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Revise todos os detalhes do agendamento antes de confirmar
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Clique em "Confirmar Agendamento" para finalizar o processo
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Salve ou imprima o comprovante com o código de agendamento
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/images/agendamento/confirmation.png"
                      alt="Confirmação e comprovante"
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
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Agência</Badge>
              <h2 className="text-2xl font-semibold">Agendamento na Agência via Módulo</h2>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none mb-6">
              <p className="text-base leading-relaxed">
                Os terminais de autoatendimento disponíveis nas agências permitem que os clientes agendem seu próximo
                atendimento antes mesmo de sair do local. Este método é especialmente útil para clientes que precisam
                retornar para complementar um serviço ou apresentar documentação adicional.
              </p>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md mb-8">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/images/agendamento/terminal.png"
                    alt="Terminal de autoatendimento na agência"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-md"
                  />
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-black/70 text-white hover:bg-black/80">Terminal na Agência</Badge>
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
                      <CheckCircle className="h-5 w-5 text-[#3CBDA1]" />
                    </div>
                    <h3 className="text-lg font-semibold">Vantagens</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Processo simplificado, pois o cliente já está identificado no sistema
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Assistência imediata de funcionários em caso de dúvidas
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Ideal para continuidade de processos já iniciados
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Impressão imediata do comprovante de agendamento
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="h-1 w-full bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                      <Clock className="h-5 w-5 text-[#3CBDA1]" />
                    </div>
                    <h3 className="text-lg font-semibold">Processo Simplificado</h3>
                  </div>
                  <ol className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3CBDA1]/20 flex items-center justify-center text-[#3CBDA1] font-medium mr-2">
                        1
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Toque na tela para iniciar e insira seu documento ou escaneie o QR code do atendimento atual
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3CBDA1]/20 flex items-center justify-center text-[#3CBDA1] font-medium mr-2">
                        2
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Selecione o serviço desejado para o próximo atendimento
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3CBDA1]/20 flex items-center justify-center text-[#3CBDA1] font-medium mr-2">
                        3
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Escolha a data e horário entre as opções disponíveis
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3CBDA1]/20 flex items-center justify-center text-[#3CBDA1] font-medium mr-2">
                        4
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Confirme os detalhes e retire o comprovante impresso
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="bg-[#3CBDA1]/5 p-4 rounded-lg border border-[#3CBDA1]/20">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-[#3CBDA1] mt-0.5 flex-shrink-0" />
                <p className="text-base leading-relaxed">
                  Os terminais de autoatendimento estão disponíveis em todas as agências NhaBex e podem ser utilizados
                  durante todo o horário de funcionamento. Funcionários estão sempre disponíveis para auxiliar clientes
                  com dificuldades no uso dos terminais.
                </p>
              </div>
            </div>
          </section>

          <Separator className="my-8 bg-[#3CBDA1]/20" />

          <section className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Recepção</Badge>
              <h2 className="text-2xl font-semibold">Agendamento na Recepção</h2>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none mb-6">
              <p className="text-base leading-relaxed">
                Para clientes que preferem o atendimento pessoal ou que têm dificuldades com ferramentas digitais, o
                NhaBex oferece a possibilidade de realizar agendamentos diretamente na recepção das agências ou por
                telefone. Este método garante que todos os públicos tenham acesso ao sistema de agendamentos.
              </p>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md mb-8">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/images/agendamento/reception.png"
                    alt="Atendimento na recepção"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-md"
                  />
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-black/70 text-white hover:bg-black/80">Recepção</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 p-6">
                <h3 className="text-lg font-semibold mb-4">Processo de Agendamento na Recepção</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <ol className="space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3CBDA1]/20 flex items-center justify-center text-[#3CBDA1] font-medium mr-2">
                          1
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          O cliente se dirige à recepção da agência ou liga para o número de atendimento
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3CBDA1]/20 flex items-center justify-center text-[#3CBDA1] font-medium mr-2">
                          2
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          O atendente solicita documento de identificação e registra os dados no sistema
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3CBDA1]/20 flex items-center justify-center text-[#3CBDA1] font-medium mr-2">
                          3
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          O cliente informa o serviço desejado e suas preferências de data e horário
                        </p>
                      </li>
                    </ol>
                  </div>
                  <div>
                    <ol className="space-y-3" start={4}>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3CBDA1]/20 flex items-center justify-center text-[#3CBDA1] font-medium mr-2">
                          4
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          O atendente verifica a disponibilidade e sugere as melhores opções
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3CBDA1]/20 flex items-center justify-center text-[#3CBDA1] font-medium mr-2">
                          5
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Após confirmação, o sistema registra o agendamento e gera um comprovante
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3CBDA1]/20 flex items-center justify-center text-[#3CBDA1] font-medium mr-2">
                          6
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          O cliente recebe o comprovante impresso ou por e-mail/SMS
                        </p>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 p-6">
                <h3 className="text-lg font-semibold mb-4">Documentos Necessários</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-base font-medium mb-3">Para Agendamento Presencial:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Documento de identificação com foto (BI, Passaporte, etc.)
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Número de contribuinte (quando aplicável)
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Comprovante de residência (para alguns serviços)
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-base font-medium mb-3">Para Agendamento por Telefone:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Número do documento de identificação</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Data de nascimento para confirmação</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          E-mail ou número de celular para envio do comprovante
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#3CBDA1]/5 p-4 rounded-lg border border-[#3CBDA1]/20 mt-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-[#3CBDA1] mt-0.5 flex-shrink-0" />
                <p className="text-base leading-relaxed">
                  Para agendamentos por telefone, é importante ter todos os documentos necessários em mãos durante a
                  ligação. O número para agendamento telefônico é <span className="font-medium">+238 XXX XXXX</span>e
                  funciona de segunda a sexta, das 8h às 17h.
                </p>
              </div>
            </div>
          </section>

          <Separator className="my-8 bg-[#3CBDA1]/20" />

          <section className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Gestão</Badge>
              <h2 className="text-2xl font-semibold">Gerenciamento de Agendamentos</h2>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none mb-6">
              <p className="text-base leading-relaxed">
                O sistema NhaBex permite que os clientes gerenciem seus agendamentos de forma simples e eficiente. É
                possível visualizar, alterar ou cancelar agendamentos através da aplicação web ou diretamente nas
                agências, garantindo flexibilidade e controle total sobre o processo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="h-1 w-full bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                      <CalendarDays className="h-5 w-5 text-[#3CBDA1]" />
                    </div>
                    <h3 className="text-lg font-semibold">Visualizar Agendamentos</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Acesse todos os seus agendamentos ativos e histórico de atendimentos anteriores.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Faça login na aplicação web e acesse "Meus Agendamentos"
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Visualize detalhes como data, hora, serviço e agência
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Acesse o histórico completo de atendimentos anteriores
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="h-1 w-full bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                      <Edit className="h-5 w-5 text-[#3CBDA1]" />
                    </div>
                    <h3 className="text-lg font-semibold">Alterar Agendamentos</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Modifique a data, hora ou até mesmo o serviço de um agendamento existente.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Selecione o agendamento que deseja alterar
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Clique em "Alterar" e selecione as novas opções
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Alterações podem ser feitas até 24h antes do horário agendado
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="h-1 w-full bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                      <Trash className="h-5 w-5 text-[#3CBDA1]" />
                    </div>
                    <h3 className="text-lg font-semibold">Cancelar Agendamentos</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Cancele agendamentos que não serão mais necessários, liberando o horário para outros clientes.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Selecione o agendamento e clique em "Cancelar"
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Informe o motivo do cancelamento (opcional)
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Cancelamentos podem ser feitos até 4h antes do horário agendado
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#3CBDA1]/10 p-4 rounded-lg border-l-4 border-[#3CBDA1] mt-6">
              <div className="flex items-start gap-3">
                <Bell className="h-5 w-5 text-[#3CBDA1] mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Notificações e Lembretes</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    O sistema envia lembretes automáticos para garantir que você não perca seu agendamento:
                  </p>
                  <ul className="mt-2 space-y-1">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        E-mail de confirmação imediatamente após o agendamento
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        SMS de lembrete 24 horas antes do atendimento
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Notificação push 1 hora antes (para usuários do aplicativo)
                      </p>
                    </li>
                  </ul>
                </div>
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
                      <CalendarClock className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Planeje com Antecedência</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Agende seu atendimento com pelo menos 3 dias de antecedência para garantir maior disponibilidade
                        de horários e escolher o que melhor se adapta à sua agenda.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3CBDA1]/20 flex items-center justify-center text-[#3CBDA1]">
                      <Users className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Evite Horários de Pico</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Os horários entre 10h e 11h30 e entre 14h e 15h30 costumam ser os mais movimentados. Opte por
                        horários alternativos para um atendimento mais rápido.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3CBDA1]/20 flex items-center justify-center text-[#3CBDA1]">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Verifique os Requisitos</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Antes de agendar, verifique todos os documentos necessários para o serviço desejado para evitar
                        a necessidade de reagendamento.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3CBDA1]/20 flex items-center justify-center text-[#3CBDA1]">
                      <Bell className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Ative as Notificações</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Certifique-se de que seu e-mail e número de telefone estão atualizados no sistema para receber
                        todas as notificações importantes.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3CBDA1]/20 flex items-center justify-center text-[#3CBDA1]">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Chegue com Antecedência</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Recomendamos chegar 15 minutos antes do horário agendado para realizar procedimentos iniciais
                        como confirmação de presença.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3CBDA1]/20 flex items-center justify-center text-[#3CBDA1]">
                      <XCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Cancele se Necessário</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Se não puder comparecer, cancele seu agendamento com antecedência para liberar o horário para
                        outros clientes.
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
                <span>Tutorial passo a passo do agendamento online</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all border border-[#3CBDA1]/20 hover:border-[#3CBDA1]/50"
              >
                <Badge className="bg-[#3CBDA1] text-white">PDF</Badge>
                <span>Guia completo do sistema de agendamentos</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all border border-[#3CBDA1]/20 hover:border-[#3CBDA1]/50"
              >
                <Badge className="bg-[#3CBDA1] text-white">FAQ</Badge>
                <span>Perguntas frequentes sobre agendamentos</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all border border-[#3CBDA1]/20 hover:border-[#3CBDA1]/50"
              >
                <Badge className="bg-[#3CBDA1] text-white">Suporte</Badge>
                <span>Entre em contato com nossa equipe de suporte</span>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

