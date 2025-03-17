"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ChevronRight, Info, AlertTriangle, User, Users } from "lucide-react"
import Image from "next/image"

export default function Documentation() {
  return (
    <div className="container mx-auto py-8 px-4 w-full">
      <div className="space-y-2 mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Sistema</span>
          <ChevronRight className="h-4 w-4" />
          <span className="font-medium text-foreground">Utilizadores</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#3CBDA1] to-teal-600">
          Gestão de Utilizadores
        </h1>
        <p className="text-xl text-muted-foreground">
          Documentação completa para gerenciamento de utilizadores no sistema
        </p>
      </div>

      <Card className="border border-[#3CBDA1]/20 shadow-lg overflow-hidden bg-card">
        <CardContent className="p-8">
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Acesso</Badge>
              <h2 className="text-2xl font-semibold">Acesso à Gestão de Utilizadores</h2>
            </div>

            <div className="bg-[#3CBDA1]/5 p-4 rounded-lg border border-[#3CBDA1]/20 mb-6">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-[#3CBDA1] mt-0.5 flex-shrink-0" />
                <p className="text-base leading-relaxed">
                  Para aceder à secção correspondente às tarefas relacionadas com os dados de <b>"Utilizadores"</b>, o
                  utilizador deverá aceder à opção <b>"Utilizadores"</b> no menu lateral:
                </p>
              </div>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/images/utilizadores/img1.png"
                    alt="Sessão de Utilizadores"
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
                Na secção de informação aparece uma listagem com o resumo de todos os utilizadores inscritos no sistema.
                Nas linhas correspondentes a cada registo, existem 4 opções que permitem efetuar tarefas como
                <b> Perfil, Enviar Mensagem, Editar e Eliminar</b> um determinado registo:
              </p>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/images/utilizadores/img2.png"
                    alt="Opções de Perfil, Mensagem, Editar e Eliminar Utilizadores"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-md"
                  />
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-black/70 text-white hover:bg-black/80">Listagem de Utilizadores</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-4 mt-10">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Adicionar</Badge>
              <h2 className="text-2xl font-semibold">Adicionar Utilizadores</h2>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-base leading-relaxed">
                Para adicionar um novo <b>Utilizador</b> na plataforma, o utilizador deverá clicar em
                <b> "Adicionar"</b> situada no canto superior direito da secção.
              </p>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/images/utilizadores/img3.png"
                    alt="Formulário de registo de Utilizadores"
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
                  <Info className="h-5 w-5 text-[#3CBDA1] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-base leading-relaxed">
                      O campo <b>Nível</b> possui duas opções que são:
                    </p>
                    <ul className="mt-2 space-y-1 list-disc list-inside">
                      <li>
                        <strong>Normal</strong> - são os utilizadores que possuem as permissões para ter acesso apenas
                        ao balcão de atendimento.
                      </li>
                      <li>
                        <strong>Administrador de sistema</strong> - utilizadores que terão permissão sobre todos os
                        utilizadores do sistema.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/images/utilizadores/img4.png"
                    alt="Nível de utilizador dentro de uma agência"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-md"
                  />
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-black/70 text-white hover:bg-black/80">Níveis de Acesso</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#3CBDA1]/10 p-4 rounded-lg border-l-4 border-[#3CBDA1] mt-6">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-[#3CBDA1] mt-0.5 flex-shrink-0" />
                <p className="text-base leading-relaxed text-foreground">
                  O formulário que surge ao utilizador tem um conjunto de campos obrigatórios para que o registo do
                  utilizador seja efetuado no sistema. Para guardar os dados introduzidos e terminar o registo de{" "}
                  <b>Utilizadores</b>, o utilizador deverá clicar no botão <b>"Adicionar"</b>.
                </p>
              </div>
            </div>
          </section>

          <Separator className="my-8 bg-[#3CBDA1]/20" />

          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Visualizar</Badge>
              <h2 className="text-2xl font-semibold">Visualizar Utilizadores</h2>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-base leading-relaxed">
                Ao selecionar a opção <b>"Perfil"</b> de um utilizador, surge um formulário preenchido com os dados do
                mesmo:
              </p>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/images/utilizadores/img5.png"
                    alt="Formulário de Visualizar dados de um utilizador"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-md"
                  />
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-black/70 text-white hover:bg-black/80">Perfil do Utilizador</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#3CBDA1]/5 p-4 rounded-lg border border-[#3CBDA1]/20 mt-6">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-[#3CBDA1] mt-0.5 flex-shrink-0" />
                <p className="text-base leading-relaxed">
                  Este formulário permite visualizar todos os dados de um determinado utilizador.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-4 mt-10">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Editar</Badge>
              <h2 className="text-2xl font-semibold">Editar Utilizadores</h2>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-base leading-relaxed">
                Ao clicar o ícone <b>"Editar"</b>, surge um formulário ao utilizador igual ao anteriormente apresentado,
                com a diferença de este se encontrar preenchido.
              </p>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/images/utilizadores/img6.png"
                    alt="Formulário de Editar um Utilizador"
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
                  No caso do ícone <b>"Editar"</b>, o formulário permite que haja alterações aos dados. Para confirmar
                  as alterações efetuadas, o utilizador deve clicar o botão <b>"Editar"</b> para o efeito.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-4 mt-10">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Eliminar</Badge>
              <h2 className="text-2xl font-semibold">Eliminar Utilizadores</h2>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-base leading-relaxed">
                Para eliminar um utilizador do sistema, deverá clicar no ícone <b>"Eliminar"</b> no registo
                correspondente. Ao clicar nesse ícone um formulário surge ao utilizador para que este possa confirmar a
                eliminação do utilizador.
              </p>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/images/utilizadores/img7.png"
                    alt="Formulário de Eliminar Utilizadores"
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
                    Para confirmar a eliminação, o utilizador deve clicar o botão <b>"Eliminar"</b>.
                  </p>
                  <p className="mt-2 font-medium">Depois de eliminado, o utilizador não pode ser recuperado.</p>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-10 bg-[#3CBDA1]/10 rounded-lg p-6 border border-[#3CBDA1]/20">
            <div className="flex items-center gap-2 mb-4">
              <Users className="h-5 w-5 text-[#3CBDA1]" />
              <h3 className="text-lg font-semibold">Níveis de Utilizadores</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-[#3CBDA1]/20">
                <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                  <User className="h-5 w-5 text-[#3CBDA1]" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">Utilizador Normal</h4>
                  <p className="text-xs text-muted-foreground">Acesso apenas ao balcão de atendimento</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-[#3CBDA1]/20">
                <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                  <Users className="h-5 w-5 text-[#3CBDA1]" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">Administrador de Sistema</h4>
                  <p className="text-xs text-muted-foreground">Permissão sobre todos os utilizadores</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

