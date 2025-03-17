import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ChevronRight, Info, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function Documentation() {
  return (
    <div className="container mx-auto py-8 px-4 w-full">
      <div className="space-y-2 mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Fila de Espera</span>
          <ChevronRight className="h-4 w-4" />
          <span className="font-medium text-foreground">Operador</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#3CBDA1] to-teal-600">
          Fila de Espera
        </h1>
        <p className="text-xl text-muted-foreground">
          Documentação completa para operadores do sistema de fila de espera
        </p>
      </div>

      <Card className="border border-[#3CBDA1]/20 shadow-lg overflow-hidden bg-card">
        <CardContent className="p-8">
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Acesso</Badge>
              <h2 className="text-2xl font-semibold">Acesso ao Posto de Atendimento</h2>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-base leading-relaxed">
                Para acessar o sistema primeiro precisa ter acesso a Internet, abrir extensão que foi adicionado no
                Navegador Chrome com o auxiliar de uma pesquisa realizado no menu Iniciar do Windows e logo abri para
                ter acesso a Tela Login, com a credencial de acesso, poderá ter acesso ao sistema.
              </p>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/images/installation/login.png"
                    alt="Tela de login"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-md"
                  />
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-black/70 text-white hover:bg-black/80">Tela de Login</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-4 mt-10">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Menu</Badge>
              <h2 className="text-2xl font-semibold">Menu Inicial</h2>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-base leading-relaxed">
                Depois de efetuar o login, terá acesso ao sistema. Com o menu inicial terás acesso as funcionalidades do{" "}
                <strong>sistema</strong>. <br />
                Para acessar ao menu <strong>balcão</strong>, o utilizador tem de escolher <strong>Meus Balcão</strong>{" "}
                no separador que fica no canto superior esquerdo, conforme ilustrado na figura abaixo.
              </p>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/images/balcao/img1.png"
                    alt="Menu inicial"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-md"
                  />
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-black/70 text-white hover:bg-black/80">Menu Inicial</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-4 mt-10">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Perfil</Badge>
              <h2 className="text-2xl font-semibold">Tela Editar Perfil</h2>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-base leading-relaxed">
                No menu de <strong>Início</strong> o utilizador terá o acesso rápido ao <strong>Perfil</strong>,{" "}
                <strong>Notificações</strong>,<strong> Mensagens</strong> e <strong>Editar Perfil</strong>.
              </p>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/images/balcao/img2.png"
                    alt="Editar perfil"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-md"
                  />
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-black/70 text-white hover:bg-black/80">Editar Perfil</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none mt-4">
              <p className="text-base leading-relaxed">
                Clicando em <strong>Editar Perfil</strong>, o utilizador terá acesso aos dados do seu perfil.
              </p>
            </div>
          </section>

          <Separator className="my-8 bg-[#3CBDA1]/20" />

          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Posto</Badge>
              <h2 className="text-2xl font-semibold">Menu Posto de Atendimento</h2>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-base leading-relaxed">
                O sistema permite uma nova forma de apresentar os balcões de atendedores de forma mais bem estruturado.
                Para esse efeito um operador só pode ter acesso a um balcão após escolher qual agência pretende ter
                acesso ao balcão de atendimento.
              </p>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/images/balcao/img3.png"
                    alt="Seleção de agência"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-md"
                  />
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-black/70 text-white hover:bg-black/80">Seleção de Agência</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none mt-4">
              <p className="text-base leading-relaxed">
                Escolhendo uma agência, segue uma página de <strong>Posto de Atendimento</strong> para cada agência.
              </p>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/images/balcao/img4.png"
                    alt="Posto de atendimento"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-md"
                  />
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-black/70 text-white hover:bg-black/80">Posto de Atendimento</Badge>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Separator className="my-8 bg-[#3CBDA1]/20" />

          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Opções</Badge>
              <h2 className="text-2xl font-semibold">Mais opções:</h2>
            </div>

            <div className="bg-[#3CBDA1]/5 p-4 rounded-lg border border-[#3CBDA1]/20 mb-6">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-[#3CBDA1] mt-0.5 flex-shrink-0" />
                <p className="text-base leading-relaxed">
                  Total da senha que estão <strong>Em Espera</strong> no momento para serem atendidas.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
                <div className="p-1">
                  <Image
                    src="/images/balcao/img5.png"
                    alt="Senhas em espera"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-md"
                  />
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
                <div className="p-1">
                  <Image
                    src="/images/balcao/img6.png"
                    alt="Senhas em espera"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-md"
                  />
                </div>
              </div>
            </div>

            <div className="bg-[#3CBDA1]/5 p-4 rounded-lg border border-[#3CBDA1]/20 mb-6">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-[#3CBDA1] mt-0.5 flex-shrink-0" />
                <p className="text-base leading-relaxed">
                  Total das senhas que já foram <strong>atendidas</strong> no momento.
                </p>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md mb-8">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <Image
                  src="/images/balcao/img7.png"
                  alt="Senhas atendidas"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-md"
                />
              </div>
            </div>

            <div className="bg-[#3CBDA1]/5 p-4 rounded-lg border border-[#3CBDA1]/20 mb-6">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-[#3CBDA1] mt-0.5 flex-shrink-0" />
                <p className="text-base leading-relaxed">
                  Total de senhas que <strong>não foram atendidos</strong>, ou seja, desistiram do atendimento. <br />
                  Se um utente não conseguir chegar a tempo de ser atendido, mais estiver dentro do período de
                  tolerância, o cliente pode reclamar sua vez diretamente no operador e o mesmo permitir ver no "
                  <strong>Desistidos</strong>".
                </p>
              </div>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none mb-6">
              <p className="text-base leading-relaxed">
                Ao clicar nessa opção logo o operador consegue visualizar as três últimas senhas não atendidas e pode
                reclamar novamente caso seja necessário.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
                <div className="p-1">
                  <Image
                    src="/images/balcao/img8.png"
                    alt="Senhas desistidas"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-md"
                  />
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
                <div className="p-1">
                  <Image
                    src="/images/balcao/img9.png"
                    alt="Senhas desistidas"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-md"
                  />
                </div>
              </div>
            </div>

            <div className="bg-[#3CBDA1]/5 p-4 rounded-lg border border-[#3CBDA1]/20 mb-6">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-[#3CBDA1] mt-0.5 flex-shrink-0" />
                <p className="text-base leading-relaxed">Senha que foi redirecionado para o seu posto.</p>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md mb-8">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <Image
                  src="/images/balcao/img10.png"
                  alt="Senhas redirecionadas"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-md"
                />
              </div>
            </div>

            <div className="bg-[#3CBDA1]/5 p-4 rounded-lg border border-[#3CBDA1]/20 mb-6">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-[#3CBDA1] mt-0.5 flex-shrink-0" />
                <p className="text-base leading-relaxed">
                  Quantidade das anotações que foram efetuadas durante o atendimento das senhas.
                </p>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <Image
                  src="/images/balcao/img11.png"
                  alt="Anotações"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-md"
                />
              </div>
            </div>
          </section>

          <div className="mt-10 bg-[#3CBDA1]/10 rounded-lg p-6 border border-[#3CBDA1]/20">
            <div className="flex items-center gap-2 mb-4">
              <ExternalLink className="h-5 w-5 text-[#3CBDA1]" />
              <h3 className="text-lg font-semibold">Recursos Adicionais</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="#"
                className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all border border-[#3CBDA1]/20 hover:border-[#3CBDA1]/50"
              >
                <Badge className="bg-[#3CBDA1] text-white">PDF</Badge>
                <span>Manual completo do operador</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all border border-[#3CBDA1]/20 hover:border-[#3CBDA1]/50"
              >
                <Badge className="bg-[#3CBDA1] text-white">Vídeo</Badge>
                <span>Tutorial em vídeo</span>
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

