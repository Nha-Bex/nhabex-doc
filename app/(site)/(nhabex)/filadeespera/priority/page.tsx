"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ChevronRight, Info, AlertTriangle, Star, ArrowUpDown } from "lucide-react"
import Image from "next/image"

export default function Documentation() {
  return (
    <div className="container mx-auto py-8 px-4 w-full">
      <div className="space-y-2 mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Fila de Espera</span>
          <ChevronRight className="h-4 w-4" />
          <span className="font-medium text-foreground">Prioridade</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#3CBDA1] to-teal-600">
          Gestão da Prioridade
        </h1>
        <p className="text-xl text-muted-foreground">
          Documentação completa para gerenciamento de prioridades no sistema
        </p>
      </div>

      <Card className="border border-[#3CBDA1]/20 shadow-lg overflow-hidden bg-card">
        <CardContent className="p-8">
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Acesso</Badge>
              <h2 className="text-2xl font-semibold">Acesso à Gestão da Prioridade</h2>
            </div>

            <div className="bg-[#3CBDA1]/5 p-4 rounded-lg border border-[#3CBDA1]/20 mb-6">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-[#3CBDA1] mt-0.5 flex-shrink-0" />
                <p className="text-base leading-relaxed">
                  Para aceder à secção correspondente às tarefas relacionadas com os dados da Prioridade, o utilizador
                  deverá aceder à opção "<b>Prioridade</b>" no menu lateral:
                </p>
              </div>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/images/priority/img1.png"
                    alt="Sessão de Gestão da Prioridade"
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
                Na secção de informação aparece uma listagem com o resumo de todas as prioridades inscritas no sistema.
                Nas linhas correspondentes a cada registo, existem dois opções que permitem efetuar tarefas como{" "}
                <b>editar e eliminar</b> um determinado registo:
              </p>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/images/priority/img2.png"
                    alt="Opções de Editar, Eliminar e Configuração de Prioridade"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-md"
                  />
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-black/70 text-white hover:bg-black/80">Listagem de Prioridades</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-4 mt-10">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Adicionar</Badge>
              <h2 className="text-2xl font-semibold">Adicionar Prioridade</h2>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-base leading-relaxed">
                Para adicionar uma nova prioridade na plataforma, o utilizador deverá clicar em "<b>Adicionar</b>"
                situada no canto superior direito da secção.
              </p>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/images/priority/img3.png"
                    alt="Formulário de registo da prioridade"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-md"
                  />
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-black/70 text-white hover:bg-black/80">Formulário de Registro</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="bg-[#3CBDA1]/5 p-4 rounded-lg border border-[#3CBDA1]/20">
                <div className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-[#3CBDA1] mt-0.5 flex-shrink-0" />
                  <p className="text-base leading-relaxed">
                    No sistema encontra-se 4 prioridade que estão definidas por lei. Caso seja pretende adicionar outras
                    prioridades no sistema segue os campos abaixo.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-[#3CBDA1]/20">
                <div className="flex items-start gap-3">
                  <ArrowUpDown className="h-5 w-5 text-[#3CBDA1] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-base leading-relaxed">
                      No campo de ordem de chamadas <b>[Maior, Médio, Menor, Normal e Nenhuma]</b> são chamadas as
                      ordens em que cada prioridade pode ser chamada através do sistema. Se não forem escolhidas a ordem
                      no momento, o sistema adiciona todas as prioridades com ordem <b>nenhuma</b>.
                    </p>
                    <p className="text-base leading-relaxed mt-2">
                      Para guardar os dados escolhidos do registo da prioridade, o utilizador deverá clicar em "
                      <b>Adicionar</b>"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Separator className="my-8 bg-[#3CBDA1]/20" />

          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Editar</Badge>
              <h2 className="text-2xl font-semibold">Editar Prioridade</h2>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-base leading-relaxed">
                Ao clicar o ícone "<b>Editar</b>" em uma das prioridades, surge um formulário com apenas a ordem de
                prioridade a serem chamadas.
              </p>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/images/priority/img4.png"
                    alt="Formulário de Editar uma prioridade"
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

            <div className="bg-[#3CBDA1]/10 p-4 rounded-lg border-l-4 border-[#3CBDA1] mt-6">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-[#3CBDA1] mt-0.5 flex-shrink-0" />
                <p className="text-base leading-relaxed text-foreground">
                  No caso do ícone "<b>Editar</b>", o formulário permite que haja alterações aos dados. Para confirmar
                  as alterações efetuadas à prioridade, o utilizador deve clicar o botão "<b>Editar</b>" para o efeito.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-4 mt-10">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Eliminar</Badge>
              <h2 className="text-2xl font-semibold">Eliminar Prioridade</h2>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-base leading-relaxed">
                Para eliminar uma prioridade do sistema, o utilizador deverá clicar no ícone "Eliminar" no registo
                correspondente. Ao clicar nesse ícone, um formulário surge ao utilizador para que este possa confirmar a
                eliminação da prioridade.
              </p>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/images/priority/img5.png"
                    alt="Formulário de Eliminar Prioridade"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-md"
                  />
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-black/70 text-white hover:bg-black/80">Confirmação de Exclusão</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#3CBDA1]/10 p-4 rounded-lg border-l-4 border-[#3CBDA1] mt-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-[#3CBDA1] mt-0.5 flex-shrink-0" />
                <div className="text-base leading-relaxed text-foreground">
                  <p>
                    Para confirmar a eliminação da prioridade, o utilizador deve clicar o botão <b>"Eliminar"</b>.
                  </p>
                  <p className="mt-2 font-medium">Depois de eliminado, um serviço não pode ser recuperado.</p>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-10 bg-[#3CBDA1]/10 rounded-lg p-6 border border-[#3CBDA1]/20">
            <div className="flex items-center gap-2 mb-4">
              <Star className="h-5 w-5 text-[#3CBDA1]" />
              <h3 className="text-lg font-semibold">Níveis de Prioridade</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-[#3CBDA1]/20">
                <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                  <Badge className="bg-red-500 text-white">Maior</Badge>
                </div>
                <div>
                  <h4 className="font-medium text-sm">Prioridade Máxima</h4>
                  <p className="text-xs text-muted-foreground">Atendimento imediato</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-[#3CBDA1]/20">
                <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                  <Badge className="bg-orange-500 text-white">Médio</Badge>
                </div>
                <div>
                  <h4 className="font-medium text-sm">Prioridade Média</h4>
                  <p className="text-xs text-muted-foreground">Atendimento preferencial</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-[#3CBDA1]/20">
                <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                  <Badge className="bg-yellow-500 text-white">Menor</Badge>
                </div>
                <div>
                  <h4 className="font-medium text-sm">Prioridade Baixa</h4>
                  <p className="text-xs text-muted-foreground">Atendimento com alguma preferência</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-[#3CBDA1]/20">
                <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                  <Badge className="bg-gray-500 text-white">Normal</Badge>
                </div>
                <div>
                  <h4 className="font-medium text-sm">Sem Prioridade</h4>
                  <p className="text-xs text-muted-foreground">Atendimento padrão</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

