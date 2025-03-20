"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ChevronRight,
  Info,
  Download,
  Globe,
  Key,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Laptop,
  Server,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Installation() {
  return (
    <div className="container mx-auto py-8 px-4 w-full">
      <div className="space-y-2 mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>NhaBex</span>
          <ChevronRight className="h-4 w-4" />
          <span className="font-medium text-foreground">Instalação</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#3CBDA1] to-teal-600">
          Instalação e Acesso
        </h1>
        <p className="text-xl text-muted-foreground">
          Guia completo para acessar e começar a utilizar a plataforma NhaBex
        </p>
      </div>

      <Card className="border border-[#3CBDA1]/20 shadow-lg overflow-hidden bg-card">
        <CardContent className="p-8">
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Introdução</Badge>
              <h2 className="text-2xl font-semibold">Começando com o NhaBex</h2>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-base leading-relaxed">
                Para poder utilizar a plataforma NhaBex, a agência deverá estar registada em um dos planos disponíveis.
                Nossa plataforma oferece uma solução completa para gestão de filas, agendamentos, audiências e muito
                mais, tudo através de uma interface web intuitiva e moderna.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 p-5 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                    <Globe className="h-5 w-5 text-[#3CBDA1]" />
                  </div>
                  <h3 className="text-lg font-semibold">Acesso Web</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Acesse a plataforma de qualquer navegador moderno, sem necessidade de instalação de software
                  adicional.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 p-5 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                    <Key className="h-5 w-5 text-[#3CBDA1]" />
                  </div>
                  <h3 className="text-lg font-semibold">Credenciais Seguras</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Autenticação segura com múltiplos níveis de acesso para diferentes funções na sua organização.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 p-5 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                    <CheckCircle className="h-5 w-5 text-[#3CBDA1]" />
                  </div>
                  <h3 className="text-lg font-semibold">Configuração Simples</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Processo de configuração inicial rápido e intuitivo para começar a usar a plataforma imediatamente.
                </p>
              </div>
            </div>
          </section>

          <Separator className="my-8 bg-[#3CBDA1]/20" />

          <section className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Acesso</Badge>
              <h2 className="text-2xl font-semibold">Acessando a Plataforma</h2>
            </div>

            <div className="bg-gradient-to-br from-[#3CBDA1]/10 to-transparent rounded-xl p-6 border border-[#3CBDA1]/20 mb-8">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-4">Portal de Acesso</h3>
                  <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                    Após o registro em um dos planos disponíveis, o acesso à aplicação web é feito através do seguinte
                    endereço:
                  </p>
                  <div className="flex items-center gap-2 bg-white dark:bg-gray-800 p-3 rounded-lg border border-[#3CBDA1]/30 mb-4">
                    <Globe className="h-5 w-5 text-[#3CBDA1]" />
                    <a
                      href="https://nhabex.com/commercial/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3CBDA1] hover:text-[#2ca88e] font-medium transition-colors"
                    >
                      https://nhabex.com/commercial/login
                    </a>
                  </div>
                  <Button className="bg-[#3CBDA1] hover:bg-[#2ca88e] text-white">
                    Acessar Portal <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="flex-shrink-0 w-full md:w-1/3">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500 rounded-lg blur opacity-30"></div>
                    <div className="relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl p-2">
                      <Image
                        src="/images/installation/portal-icon.png"
                        alt="Portal NhaBex"
                        width={200}
                        height={200}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/installation/login.png"
                    alt="Tela de login do NhaBex"
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

            <div className="bg-[#3CBDA1]/5 p-4 rounded-lg border border-[#3CBDA1]/20 mt-6">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-[#3CBDA1] mt-0.5 flex-shrink-0" />
                <p className="text-base leading-relaxed">
                  Para acesso é necessário introduzir as credenciais de acesso criadas durante o registo. Caso tenha
                  esquecido sua senha, utilize a opção "Esqueceu a senha?" para recuperá-la.
                </p>
              </div>
            </div>
          </section>

          <Separator className="my-8 bg-[#3CBDA1]/20" />

          <section className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Processo</Badge>
              <h2 className="text-2xl font-semibold">Processo de Instalação</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3CBDA1]/20 flex items-center justify-center text-[#3CBDA1] font-bold mr-3">
                    1
                  </span>
                  Registro da Agência
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="col-span-1 md:col-span-2">
                    <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                      O primeiro passo é registrar sua agência em um dos planos disponíveis do NhaBex. Durante o
                      registro, você fornecerá informações básicas sobre sua organização e escolherá o plano que melhor
                      atende às suas necessidades.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Acesse o site oficial do NhaBex e clique em "Registrar Agência"
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Preencha o formulário com os dados da sua organização
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Selecione o plano desejado e método de pagamento
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/images/installation/register.png"
                      alt="Registro de agência"
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
                  Configuração Inicial
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="col-span-1 md:col-span-2">
                    <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                      Após o registro bem-sucedido, você receberá um e-mail com suas credenciais de acesso iniciais. Ao
                      fazer o primeiro login, você será guiado através do processo de configuração inicial da sua
                      agência.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Faça login com as credenciais recebidas por e-mail
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Siga o assistente de configuração para definir os parâmetros básicos
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Personalize as configurações de acordo com as necessidades da sua agência
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/images/installation/setup.png"
                      alt="Configuração inicial"
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
                  Criação de Usuários
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="col-span-1 md:col-span-2">
                    <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                      O próximo passo é criar contas de usuário para os membros da sua equipe. Você pode definir
                      diferentes níveis de acesso e permissões para cada usuário, de acordo com suas funções.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Acesse a seção "Usuários" no painel administrativo
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Clique em "Adicionar Usuário" e preencha os dados necessários
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Defina o nível de acesso e as permissões específicas para cada usuário
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/images/installation/users.png"
                      alt="Criação de usuários"
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
                  Configuração dos Serviços
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="col-span-1 md:col-span-2">
                    <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                      Finalmente, configure os serviços que sua agência oferece. Isso inclui definir tipos de serviço,
                      tempos de atendimento, requisitos e outros parâmetros específicos.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Acesse a seção "Serviços" no painel administrativo
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Adicione os diferentes tipos de serviço oferecidos pela sua agência
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Configure os parâmetros específicos para cada serviço
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/images/installation/services.png"
                      alt="Configuração de serviços"
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
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Requisitos</Badge>
              <h2 className="text-2xl font-semibold">Requisitos do Sistema</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="h-1 w-full bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                      <Laptop className="h-5 w-5 text-[#3CBDA1]" />
                    </div>
                    <h3 className="text-lg font-semibold">Requisitos do Cliente</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        <strong>Navegadores:</strong> Chrome 70+, Firefox 65+, Safari 12+, Edge 79+
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        <strong>Resolução mínima:</strong> 1280 x 720 pixels
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        <strong>Conexão:</strong> Banda larga com mínimo de 5 Mbps
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        <strong>JavaScript:</strong> Habilitado
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        <strong>Cookies:</strong> Habilitados
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="h-1 w-full bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                      <Server className="h-5 w-5 text-[#3CBDA1]" />
                    </div>
                    <h3 className="text-lg font-semibold">Requisitos para Instalação Local (Opcional)</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        <strong>Sistema Operacional:</strong> Windows Server 2016+, Ubuntu 18.04+, ou CentOS 7+
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        <strong>Processador:</strong> Quad-core 2.0 GHz ou superior
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        <strong>Memória:</strong> Mínimo de 8 GB RAM
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        <strong>Armazenamento:</strong> 100 GB de espaço livre em disco
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        <strong>Banco de Dados:</strong> MySQL 5.7+ ou PostgreSQL 10+
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-10 bg-[#3CBDA1]/10 rounded-lg p-6 border border-[#3CBDA1]/20">
            <div className="flex items-center gap-2 mb-4">
              <Download className="h-5 w-5 text-[#3CBDA1]" />
              <h3 className="text-lg font-semibold">Recursos Adicionais</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="#"
                className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all border border-[#3CBDA1]/20 hover:border-[#3CBDA1]/50"
              >
                <Badge className="bg-[#3CBDA1] text-white">PDF</Badge>
                <span>Guia completo de instalação</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all border border-[#3CBDA1]/20 hover:border-[#3CBDA1]/50"
              >
                <Badge className="bg-[#3CBDA1] text-white">Vídeo</Badge>
                <span>Tutorial passo a passo em vídeo</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all border border-[#3CBDA1]/20 hover:border-[#3CBDA1]/50"
              >
                <Badge className="bg-[#3CBDA1] text-white">FAQ</Badge>
                <span>Perguntas frequentes sobre instalação</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all border border-[#3CBDA1]/20 hover:border-[#3CBDA1]/50"
              >
                <Badge className="bg-[#3CBDA1] text-white">Suporte</Badge>
                <span>Contate nossa equipe de suporte técnico</span>
              </Link>
            </div>

            <div className="mt-6 flex justify-center">
              <Button className="bg-[#3CBDA1] hover:bg-[#2ca88e] text-white">
                Começar Agora <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

