"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ChevronRight, Info, AlertTriangle, Settings, Edit, Trash, PlusCircle } from "lucide-react"
import Image from "next/image"

export default function Documentation() {
  return (
    <div className="container mx-auto py-8 px-4 w-full">
      <div className="space-y-2 mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Fila de Espera</span>
          <ChevronRight className="h-4 w-4" />
          <span className="font-medium text-foreground">Serviço</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#3CBDA1] to-teal-600">
          Gestão de Serviço
        </h1>
        <p className="text-xl text-muted-foreground">Documentação completa para gerenciamento de serviços no sistema</p>
      </div>

      <Card className="border border-[#3CBDA1]/20 shadow-lg overflow-hidden bg-card">
        <CardContent className="p-8">
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Acesso</Badge>
              <h2 className="text-2xl font-semibold">Acesso à Gestão de Serviço</h2>
            </div>

            <div className="bg-[#3CBDA1]/5 p-4 rounded-lg border border-[#3CBDA1]/20 mb-6">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-[#3CBDA1] mt-0.5 flex-shrink-0" />
                <p className="text-base leading-relaxed">
                  Para aceder à secção correspondente às tarefas relacionadas com a dados de Serviço, o utilizador
                  deverá aceder à opção "<b>Serviço</b>" no menu lateral:
                </p>
              </div>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/images/servico/img1.png"
                    alt="Sessão de Gestão de Serviço"
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
                Na secção de informação aparece uma listagem com o resumo de todos serviços registados no sistema. Nas
                linhas correspondentes a cada registo, existem três opções que permitem efetuar tarefas como{" "}
                <b>configurações, editar e Eliminar</b> um determinado registo:
              </p>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/images/servico/img2.png"
                    alt="Opções de Configurações, Editar e eliminação de um Serviço"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-md"
                  />
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-black/70 text-white hover:bg-black/80">Listagem de Serviços</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-4 mt-10">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Adicionar</Badge>
              <h2 className="text-2xl font-semibold">Adicionar Serviço</h2>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-base leading-relaxed">
                Para adicionar um novo serviço na plataforma, o utilizador deverá clicar em "<b>Adicionar</b>" situada
                no canto superior direito da secção.
              </p>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/images/servico/img3.png"
                    alt="Formulário de registo de Serviço"
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

            <div className="mt-6">
              <p className="text-base leading-relaxed">
                O formulário que surge ao utilizador tem um conjunto de campos obrigatórios para o registo de serviço
                seja efetuado no sistema. Esses campos são:
              </p>

              <div className="mt-4 bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 p-4">
                <ul className="space-y-2">
                  {["Nome", "Acrónimo", "Descrição", "Exemplo"].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 flex items-center gap-2 bg-[#3CBDA1]/5 p-3 rounded-lg border border-[#3CBDA1]/20">
                <PlusCircle className="h-5 w-5 text-[#3CBDA1] flex-shrink-0" />
                <p className="text-base">
                  Para guardar os dados introduzidos e terminar o registo de serviço, o utilizador deverá clicar o botão
                  "<b>Adicionar</b>".
                </p>
              </div>
            </div>
          </section>

          <Separator className="my-8 bg-[#3CBDA1]/20" />

          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Editar</Badge>
              <h2 className="text-2xl font-semibold">Editar Serviço</h2>
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
                    src="/images/servico/img4.png"
                    alt="Formulário de Editar um serviço"
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
                  as alterações efetuadas ao serviço, o utilizador deve clicar o botão "<b>Atualizar</b>" para o efeito.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-4 mt-10">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Eliminar</Badge>
              <h2 className="text-2xl font-semibold">Eliminar Serviço</h2>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-base leading-relaxed">
                Para eliminar um serviço do sistema, o utilizador deverá clicar no ícone "<b>Eliminar</b>" no registo
                correspondente. Ao clicar nesse ícone um serviço surge ao utilizador para que este possa confirmar a
                eliminação do serviço.
              </p>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/images/servico/img5.png"
                    alt="Formulário de Eliminar um serviço"
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
                    Para confirmar a eliminação do serviço, o utilizador deve clicar o botão <b>"Remover"</b>.
                  </p>
                  <p className="mt-2 font-medium">Depois de eliminado, um serviço não pode ser recuperado.</p>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-10 bg-[#3CBDA1]/10 rounded-lg p-6 border border-[#3CBDA1]/20">
            <div className="flex items-center gap-2 mb-4">
              <Settings className="h-5 w-5 text-[#3CBDA1]" />
              <h3 className="text-lg font-semibold">Ações Disponíveis</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-[#3CBDA1]/20">
                <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                  <Settings className="h-4 w-4 text-[#3CBDA1]" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">Configurações</h4>
                  <p className="text-xs text-muted-foreground">Ajustar parâmetros</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-[#3CBDA1]/20">
                <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                  <Edit className="h-4 w-4 text-[#3CBDA1]" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">Editar</h4>
                  <p className="text-xs text-muted-foreground">Modificar dados</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-[#3CBDA1]/20">
                <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                  <Trash className="h-4 w-4 text-[#3CBDA1]" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">Eliminar</h4>
                  <p className="text-xs text-muted-foreground">Remover serviço</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

