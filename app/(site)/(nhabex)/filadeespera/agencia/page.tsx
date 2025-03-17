"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ChevronRight,
  Info,
  AlertTriangle,
  Building2,
  Settings,
  Users,
  BarChart,
  ImageIcon,
  Ticket,
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
          <span className="font-medium text-foreground">Agência</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#3CBDA1] to-teal-600">
          Gestão da Agência
        </h1>
        <p className="text-xl text-muted-foreground">Documentação completa para gerenciamento de agências no sistema</p>
      </div>

      <Card className="border border-[#3CBDA1]/20 shadow-lg overflow-hidden bg-card">
        <CardContent className="p-8">
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Acesso</Badge>
              <h2 className="text-2xl font-semibold">Acesso à Gestão da Agência</h2>
            </div>

            <div className="bg-[#3CBDA1]/5 p-4 rounded-lg border border-[#3CBDA1]/20 mb-6">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-[#3CBDA1] mt-0.5 flex-shrink-0" />
                <p className="text-base leading-relaxed">
                  Para aceder à secção correspondente às tarefas relacionadas com a dados da Agência, o utilizador
                  deverá aceder à opção "<b>Agência</b>" no menu lateral:
                </p>
              </div>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/images/agencia/img1.png"
                    alt="Menu de acesso à Agência"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-md"
                  />
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-black/70 text-white hover:bg-black/80">Menu Lateral</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none mt-6">
              <p className="text-base leading-relaxed">
                Na secção de informação aparece uma listagem com o resumo de todas as agências inscritas no sistema. Nas
                linhas correspondentes a cada registo, existem duas opções que permitem efetuar tarefas como editar e
                eliminar um determinado registo:
              </p>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/images/agencia/img2.png"
                    alt="Listagem de agências"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-md"
                  />
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-black/70 text-white hover:bg-black/80">Listagem de Agências</Badge>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Separator className="my-8 bg-[#3CBDA1]/20" />

          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Master</Badge>
              <h2 className="text-2xl font-semibold">Configuração de Agência Master</h2>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-base leading-relaxed">
                O sistema permite que uma determinada agência receba os dados de Avisos e Publicidade de uma agência{" "}
                <b>Master</b>, ou seja, uns conjuntos de agência podem ter os dados de avisos e publicidade de uma outra
                agência.
                <br />
                Para isso uma agência deve ser definida com Master para que as restantes possam receber dados do master.
                <br />
                Para definir uma agência como Master deve clicar no ícone "<b>Editar</b>" da referida agência.
              </p>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/images/agencia/img3.png"
                    alt="Configuração de agência master"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-md"
                  />
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-black/70 text-white hover:bg-black/80">Editar Agência</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-4 mt-10">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Receber Dados</Badge>
              <h2 className="text-2xl font-semibold">Receber dados de master</h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3CBDA1]/20 flex items-center justify-center text-[#3CBDA1] font-semibold">
                  1
                </div>
                <div>
                  <p className="text-base leading-relaxed">
                    Escolher a ação "<b>Editar</b>" da agência a ser definida.
                  </p>
                </div>
              </div>

              <div className="mt-4 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
                <div className="p-1">
                  <Image
                    src="/images/agencia/img4.png"
                    alt="Editar agência"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-md"
                  />
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3CBDA1]/20 flex items-center justify-center text-[#3CBDA1] font-semibold">
                  2
                </div>
                <div>
                  <p className="text-base leading-relaxed">
                    Ao editar a agência no campo Master escolher "<b>Receber dados do master</b>" e clicar no botão{" "}
                    <b>[Atualizar]</b>.
                  </p>
                </div>
              </div>

              <div className="mt-4 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
                <div className="p-1">
                  <Image
                    src="/images/agencia/img5.png"
                    alt="Configuração para receber dados do master"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-md"
                  />
                </div>
              </div>

              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-base leading-relaxed">Agência definida como receber dados de Master.</p>
              </div>

              <div className="mt-4 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
                <div className="p-1">
                  <Image
                    src="/images/agencia/img6.png"
                    alt="Agência configurada para receber dados do master"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-md"
                  />
                </div>
              </div>
            </div>
          </section>

          <Separator className="my-8 bg-[#3CBDA1]/20" />

          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Editar</Badge>
              <h2 className="text-2xl font-semibold">Editar Agência</h2>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-base leading-relaxed">
                Ao clicar o ícone "<b>Editar</b>", surge um formulário ao utilizador igual ao anteriormente apresentado,
                com a diferença de este se encontrar preenchido.
              </p>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/images/agencia/img7.png"
                    alt="Formulário de edição de agência"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-md"
                  />
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-black/70 text-white hover:bg-black/80">Formulário de Edição</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#3CBDA1]/10 p-4 rounded-lg border border-[#3CBDA1]/20 mt-6">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-[#3CBDA1] mt-0.5 flex-shrink-0" />
                <p className="text-base leading-relaxed text-foreground">
                  Ao clicar o ícone "<b>Editar</b>", surge um formulário ao utilizador igual ao anteriormente
                  apresentado, com a diferença de este se encontrar preenchido.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-4 mt-10">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Eliminar</Badge>
              <h2 className="text-2xl font-semibold">Eliminar Agência</h2>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-base leading-relaxed">
                Para eliminar uma agência do sistema, o utilizador deverá clicar no ícone "Eliminar" no registo
                correspondente. Ao clicar nesse ícone um aviso surge ao utilizador pedindo para que este confirme a
                eliminação da agência.
              </p>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/images/agencia/img8.png"
                    alt="Confirmação de eliminação de agência"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-md"
                  />
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-black/70 text-white hover:bg-black/80">Confirmação de Eliminação</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#3CBDA1]/10 p-4 rounded-lg border-l-4 border-[#3CBDA1] mt-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-[#3CBDA1] mt-0.5 flex-shrink-0" />
                <div className="text-base leading-relaxed text-foreground">
                  <p>
                    Para confirmar a eliminação da agência, o utilizador deve clicar o botão <b>"Eliminar"</b>.
                  </p>
                  <p className="mt-2 font-medium">Depois de eliminada uma agência, não pode ser recuperada.</p>
                </div>
              </div>
            </div>
          </section>

          <Separator className="my-8 bg-[#3CBDA1]/20" />

          <section className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Funções</Badge>
              <h2 className="text-2xl font-semibold">Função de cada ícone na sessão de Agência</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <Link href="/images/filadeespera/agencia/workers" className="group">
                <div className="flex items-start gap-4 p-4 rounded-lg border border-[#3CBDA1]/20 bg-card hover:border-[#3CBDA1]/50 hover:shadow-md transition-all">
                  <div className="p-2 rounded-full bg-[#3CBDA1]/10 text-[#3CBDA1]">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold group-hover:text-[#3CBDA1] transition-colors">
                      Trabalhadores na Agência
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">Gerenciamento de funcionários da agência</p>
                  </div>
                </div>
              </Link>

              <Link href="/images/filadeespera/agencia/config" className="group">
                <div className="flex items-start gap-4 p-4 rounded-lg border border-[#3CBDA1]/20 bg-card hover:border-[#3CBDA1]/50 hover:shadow-md transition-all">
                  <div className="p-2 rounded-full bg-[#3CBDA1]/10 text-[#3CBDA1]">
                    <Settings className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold group-hover:text-[#3CBDA1] transition-colors">
                      Configurações da Agência
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">Ajustes e parâmetros da agência</p>
                  </div>
                </div>
              </Link>

              <Link href="/images/filadeespera/agencia/statistic" className="group">
                <div className="flex items-start gap-4 p-4 rounded-lg border border-[#3CBDA1]/20 bg-card hover:border-[#3CBDA1]/50 hover:shadow-md transition-all">
                  <div className="p-2 rounded-full bg-[#3CBDA1]/10 text-[#3CBDA1]">
                    <BarChart className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold group-hover:text-[#3CBDA1] transition-colors">
                      Dados Estatísticos de Agência
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">Relatórios e métricas de desempenho</p>
                  </div>
                </div>
              </Link>

              <Link href="/images/filadeespera/agencia/advertising" className="group">
                <div className="flex items-start gap-4 p-4 rounded-lg border border-[#3CBDA1]/20 bg-card hover:border-[#3CBDA1]/50 hover:shadow-md transition-all">
                  <div className="p-2 rounded-full bg-[#3CBDA1]/10 text-[#3CBDA1]">
                    <ImageIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold group-hover:text-[#3CBDA1] transition-colors">
                      Avisos e Publicidade na Agência
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">Gerenciamento de conteúdo visual</p>
                  </div>
                </div>
              </Link>

              <Link href="/images/filadeespera/agencia/ticket" className="group md:col-span-2">
                <div className="flex items-start gap-4 p-4 rounded-lg border border-[#3CBDA1]/20 bg-card hover:border-[#3CBDA1]/50 hover:shadow-md transition-all">
                  <div className="p-2 rounded-full bg-[#3CBDA1]/10 text-[#3CBDA1]">
                    <Ticket className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold group-hover:text-[#3CBDA1] transition-colors">
                      Ticket e TimeLine dentro de uma agência
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">Gerenciamento de senhas e fluxo de atendimento</p>
                  </div>
                </div>
              </Link>
            </div>
          </section>

          <div className="mt-10 bg-[#3CBDA1]/10 rounded-lg p-6 border border-[#3CBDA1]/20">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="h-5 w-5 text-[#3CBDA1]" />
              <h3 className="text-lg font-semibold">Informações Importantes</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                <p className="text-sm">
                  A gestão adequada das agências é fundamental para o bom funcionamento do sistema de filas.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                <p className="text-sm">
                  Certifique-se de configurar corretamente as relações entre agências master e subordinadas.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                <p className="text-sm">
                  Para mais informações sobre configurações avançadas, consulte a documentação de administração.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

