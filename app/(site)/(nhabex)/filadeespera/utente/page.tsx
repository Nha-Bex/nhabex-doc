"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ChevronRight, Info, AlertTriangle, Users, PlusCircle, FileEdit } from "lucide-react"
import Image from "next/image"

export default function Documentation() {
  return (
    <div className="container mx-auto py-8 px-4 w-full">
      <div className="space-y-2 mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Fila de Espera</span>
          <ChevronRight className="h-4 w-4" />
          <span className="font-medium text-foreground">Tipo de Utente</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#3CBDA1] to-teal-600">
          Gestão de Tipos de Utente
        </h1>
        <p className="text-xl text-muted-foreground">
          Documentação completa para gerenciamento de tipos de utente no sistema
        </p>
      </div>

      <Card className="border border-[#3CBDA1]/20 shadow-lg overflow-hidden bg-card">
        <CardContent className="p-8">
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Acesso</Badge>
              <h2 className="text-2xl font-semibold">Acesso à Gestão de Tipos de Utente</h2>
            </div>

            <div className="bg-[#3CBDA1]/5 p-4 rounded-lg border border-[#3CBDA1]/20 mb-6">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-[#3CBDA1] mt-0.5 flex-shrink-0" />
                <p className="text-base leading-relaxed">
                  Para aceder à secção correspondente às tarefas relacionadas com a dados de "<b>Tipo de Utente</b>", o
                  utilizador deverá aceder à opção "<b>Tipo de Utente</b>" no menu lateral:
                </p>
              </div>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/images/users/img1.png"
                    alt="Sessão de Tipo de Utente"
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
                Na secção de informação aparece uma listagem com o resumo de todos "<b>Tipo de Utente</b>" registados no
                sistema. Nas linhas correspondentes a cada registo, existem duas opções que permitem efetuar tarefas
                como <b>Editar</b> e <b>Eliminar</b> um determinado registo:
              </p>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/images/users/img2.png"
                    alt="Opções de Editar e eliminação de Tipo de Utente"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-md"
                  />
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-black/70 text-white hover:bg-black/80">Listagem de Tipos de Utente</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-4 mt-10">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Adicionar</Badge>
              <h2 className="text-2xl font-semibold">Adicionar Tipo de Utente</h2>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-base leading-relaxed">
                Para adicionar um novo "<b>Tipo de Utente</b>" na plataforma, o utilizador deverá clicar em "
                <b>Adicionar</b>" situada no canto superior direito da secção.
              </p>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/images/users/img3.png"
                    alt="Formulário de registo Tipo de Utente"
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
                O formulário que surge ao utilizador tem um conjunto de campos obrigatórios para que o registo de "
                <b>Tipo de Utente</b>" seja efetuado no sistema. Esses campos são:
              </p>

              <div className="mt-4 bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 p-4">
                <ul className="space-y-2">
                  {["Nome", "Descrição"].map((item, index) => (
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
                  Para guardar os dados introduzidos e terminar o registo de tipo de utente, o utilizador deverá clicar
                  o botão "<b>Adicionar</b>".
                </p>
              </div>
            </div>
          </section>

          <Separator className="my-8 bg-[#3CBDA1]/20" />

          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Editar</Badge>
              <h2 className="text-2xl font-semibold">Editar Tipo de Utente</h2>
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
                    src="/images/users/img4.png"
                    alt="Formulário de Editar um Tipo de Utente"
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
                  as alterações efetuadas ao "<b>Tipo de Utente</b>", o utilizador deve clicar o botão "<b>Editar</b>"
                  para o efeito.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-4 mt-10">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Eliminar</Badge>
              <h2 className="text-2xl font-semibold">Eliminar Tipo de Utente</h2>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-base leading-relaxed">
                Para eliminar um "<b>Tipo de Utente</b>" do sistema, o utilizador deverá clicar no ícone "
                <b>Eliminar</b>" no registo correspondente. Ao clicar nesse ícone um serviço surge ao utilizador para
                que este possa confirmar a eliminação do tipo de utente.
              </p>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/images/users/img5.png"
                    alt="Formulário de Eliminar um tipo de utente"
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
                  <p>Para confirmar a eliminação do "Tipo de Utente", o utilizador deve clicar o botão "Eliminar".</p>
                  <p className="mt-2 font-medium">Depois de eliminado, um "Tipo de Utente" não pode ser recuperado.</p>
                </div>
              </div>
            </div>
          </section>

          <Separator className="my-8 bg-[#3CBDA1]/20" />

          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Serviços</Badge>
              <h2 className="text-2xl font-semibold">Adicionar Serviço a um Tipo de Utente</h2>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-base leading-relaxed">
                Para adicionar um novo Serviço a um "<b>Tipo de Utente</b>", o utilizador deverá clicar no ícone "
                <b>Editar serviço</b>" e de seguida aparecerá uma tela onde todos os serviços registados se encontram.
              </p>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/images/users/img6.png"
                    alt="Opções de Editar serviço de Tipo de Utente"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-md"
                  />
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-black/70 text-white hover:bg-black/80">Opção Editar Serviço</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-[#3CBDA1]/5 p-4 rounded-lg border border-[#3CBDA1]/20">
              <div className="flex items-start gap-3">
                <FileEdit className="h-5 w-5 text-[#3CBDA1] mt-0.5 flex-shrink-0" />
                <p className="text-base leading-relaxed">
                  Para atualizar um determinado serviço num tipo de utente primeiro deve certificar qual agência e só
                  depois escolher os referidos serviços. Para cada alterações efetuadas na referida agência, o
                  utilizador deve clicar em "<b>Atualizar</b>" para o efeito.
                </p>
              </div>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/images/users/img7.png"
                    alt="Formulário de Editar Serviço de Tipo de Cliente"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-md"
                  />
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-black/70 text-white hover:bg-black/80">Edição de Serviços</Badge>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-10 bg-[#3CBDA1]/10 rounded-lg p-6 border border-[#3CBDA1]/20">
            <div className="flex items-center gap-2 mb-4">
              <Users className="h-5 w-5 text-[#3CBDA1]" />
              <h3 className="text-lg font-semibold">Informações Importantes</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                <p className="text-sm">
                  Os tipos de utente definem as categorias de clientes que podem acessar determinados serviços.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                <p className="text-sm">
                  A configuração correta dos tipos de utente é essencial para o funcionamento adequado do sistema de
                  filas.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                <p className="text-sm">
                  Certifique-se de associar os serviços corretos a cada tipo de utente para garantir o fluxo adequado.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

