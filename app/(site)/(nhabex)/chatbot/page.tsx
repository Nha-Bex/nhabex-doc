"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ChevronRight,
  Info,
  MessageSquare,
  Bot,
  User,
  Zap,
  HelpCircle,
  Lightbulb,
  Settings,
  ExternalLink,
  Bell,
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
          <span className="font-medium text-foreground">Chatbot</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#3CBDA1] to-teal-600">
          NhaBex Chatbot
        </h1>
        <p className="text-xl text-muted-foreground">
          Guia completo para utilizar o assistente virtual inteligente do NhaBex
        </p>
      </div>

      <Card className="border border-[#3CBDA1]/20 shadow-lg overflow-hidden bg-card">
        <CardContent className="p-8">
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Introdução</Badge>
              <h2 className="text-2xl font-semibold">O que é o NhaBex Chatbot?</h2>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-base leading-relaxed">
                O NhaBex Chatbot é um assistente virtual inteligente projetado para oferecer suporte imediato aos
                usuários da plataforma NhaBex. Utilizando tecnologia avançada de processamento de linguagem natural, o
                chatbot pode responder perguntas, fornecer informações sobre serviços, auxiliar em procedimentos e
                direcionar usuários para os recursos adequados.
              </p>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/images/chatbot/overview.png"
                    alt="Visão geral do NhaBex Chatbot"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-md"
                  />
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-black/70 text-white hover:bg-black/80">Interface do Chatbot</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#3CBDA1]/5 p-4 rounded-lg border border-[#3CBDA1]/20 mt-6">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-[#3CBDA1] mt-0.5 flex-shrink-0" />
                <p className="text-base leading-relaxed">
                  O NhaBex Chatbot está disponível 24 horas por dia, 7 dias por semana, oferecendo assistência
                  instantânea em português, inglês e espanhol. Você pode acessá-lo através do site oficial do NhaBex, do
                  aplicativo móvel ou diretamente pelo WhatsApp.
                </p>
              </div>
            </div>
          </section>

          <Separator className="my-8 bg-[#3CBDA1]/20" />

          <section className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Funcionalidades</Badge>
              <h2 className="text-2xl font-semibold">O que o Chatbot pode fazer?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="h-1 w-full bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                      <HelpCircle className="h-5 w-5 text-[#3CBDA1]" />
                    </div>
                    <h3 className="text-lg font-semibold">Responder Perguntas</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    O chatbot pode responder a uma ampla variedade de perguntas sobre os serviços do NhaBex,
                    procedimentos, horários de funcionamento, requisitos de documentação e muito mais.
                  </p>
                  <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/images/chatbot/questions.png"
                      alt="Chatbot respondendo perguntas"
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
                      <Zap className="h-5 w-5 text-[#3CBDA1]" />
                    </div>
                    <h3 className="text-lg font-semibold">Assistência em Processos</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Receba orientações passo a passo para completar processos como agendamentos, consultas de status,
                    emissão de documentos e utilização dos serviços NhaBex.
                  </p>
                  <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/images/chatbot/assistance.png"
                      alt="Assistência em processos"
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
                    <MessageSquare className="h-5 w-5 text-[#3CBDA1]" />
                  </div>
                  <h3 className="text-lg font-semibold">Atendimento Inicial</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Realiza o primeiro contato com o usuário, coletando informações básicas e identificando a natureza da
                  solicitação para um direcionamento eficiente.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 p-5 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                    <Lightbulb className="h-5 w-5 text-[#3CBDA1]" />
                  </div>
                  <h3 className="text-lg font-semibold">Sugestões Inteligentes</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Oferece recomendações personalizadas com base no histórico do usuário e nas tendências de uso dos
                  serviços NhaBex.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 p-5 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                    <User className="h-5 w-5 text-[#3CBDA1]" />
                  </div>
                  <h3 className="text-lg font-semibold">Transferência para Humanos</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Identifica quando uma solicitação requer atendimento humano e transfere a conversa para um atendente
                  especializado de forma suave e contextualizada.
                </p>
              </div>
            </div>
          </section>

          <Separator className="my-8 bg-[#3CBDA1]/20" />

          <section className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Como Usar</Badge>
              <h2 className="text-2xl font-semibold">Utilizando o NhaBex Chatbot</h2>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none mb-6">
              <p className="text-base leading-relaxed">
                Interagir com o NhaBex Chatbot é simples e intuitivo. Você pode iniciar uma conversa a qualquer momento
                e receber assistência imediata para suas necessidades.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3CBDA1]/20 flex items-center justify-center text-[#3CBDA1] font-bold mr-3">
                    1
                  </span>
                  Acessando o Chatbot
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="col-span-1 md:col-span-2">
                    <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                      O NhaBex Chatbot está disponível em múltiplos canais para sua conveniência. Escolha a opção que
                      melhor atende às suas necessidades.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          <strong>Website:</strong> Clique no ícone de chat no canto inferior direito do site NhaBex
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          <strong>Aplicativo Móvel:</strong> Toque no ícone de chat na barra de navegação inferior
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          <strong>WhatsApp:</strong> Adicione o número +238 XXX XXXX aos seus contatos e inicie uma
                          conversa
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/images/chatbot/access.png"
                      alt="Acessando o chatbot"
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
                  Iniciando uma Conversa
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="col-span-1 md:col-span-2">
                    <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                      Ao iniciar uma conversa com o chatbot, você será recebido com uma mensagem de boas-vindas e
                      algumas opções de tópicos comuns. Você pode selecionar uma dessas opções ou digitar sua própria
                      pergunta ou solicitação.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Use linguagem natural e simples para fazer suas perguntas
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Seja específico sobre o que você precisa para obter respostas mais precisas
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Você pode enviar mensagens de texto, áudio ou até mesmo imagens relevantes
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/images/chatbot/conversation.png"
                      alt="Iniciando uma conversa"
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
                  Interagindo com o Chatbot
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="col-span-1 md:col-span-2">
                    <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                      Durante a conversa, o chatbot pode fazer perguntas adicionais para entender melhor suas
                      necessidades. Responda a essas perguntas para receber assistência mais precisa e personalizada.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          O chatbot pode oferecer botões de resposta rápida para facilitar a interação
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Você pode solicitar esclarecimentos se não entender alguma resposta
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          A qualquer momento, você pode digitar "menu" para ver as opções principais
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/images/chatbot/interaction.png"
                      alt="Interagindo com o chatbot"
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
                  Recebendo Assistência Humana
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="col-span-1 md:col-span-2">
                    <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                      Se o chatbot não conseguir resolver sua solicitação ou se você preferir falar com um atendente
                      humano, você pode solicitar essa transferência a qualquer momento durante a conversa.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Digite "atendente" ou "falar com humano" para solicitar a transferência
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          O chatbot transferirá automaticamente casos complexos para atendentes especializados
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Todo o histórico da conversa será mantido para que o atendente tenha contexto completo
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/images/chatbot/human-transfer.png"
                      alt="Transferência para atendente humano"
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
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Exemplos</Badge>
              <h2 className="text-2xl font-semibold">Exemplos de Interações</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="h-1 w-full bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Consulta de Agendamento</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                        <User className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 text-sm">
                        Como posso verificar meu agendamento?
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3CBDA1]/20 flex items-center justify-center">
                        <Bot className="h-4 w-4 text-[#3CBDA1]" />
                      </div>
                      <div className="bg-[#3CBDA1]/10 rounded-lg p-3 text-sm">
                        Você pode verificar seu agendamento de várias formas:
                        <ol className="mt-2 ml-4 list-decimal space-y-1">
                          <li>Acessando sua conta no site ou aplicativo NhaBex e indo para "Meus Agendamentos"</li>
                          <li>Informando seu número de documento e código de agendamento</li>
                          <li>Posso verificar para você agora se me fornecer essas informações</li>
                        </ol>
                        <div className="mt-2">Como você prefere proceder?</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                        <User className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 text-sm">
                        Prefiro verificar pelo site. Como faço login?
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3CBDA1]/20 flex items-center justify-center">
                        <Bot className="h-4 w-4 text-[#3CBDA1]" />
                      </div>
                      <div className="bg-[#3CBDA1]/10 rounded-lg p-3 text-sm">
                        Para fazer login no site NhaBex:
                        <ol className="mt-2 ml-4 list-decimal space-y-1">
                          <li>Acesse nhabex.com</li>
                          <li>Clique no botão "Entrar" no canto superior direito</li>
                          <li>Insira seu e-mail e senha</li>
                          <li>Após o login, clique em "Meus Agendamentos" no menu do usuário</li>
                        </ol>
                        <div className="mt-2">Posso ajudar com mais alguma coisa?</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="h-1 w-full bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Solicitação de Documentos</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                        <User className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 text-sm">
                        Quais documentos preciso levar para renovar minha licença?
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3CBDA1]/20 flex items-center justify-center">
                        <Bot className="h-4 w-4 text-[#3CBDA1]" />
                      </div>
                      <div className="bg-[#3CBDA1]/10 rounded-lg p-3 text-sm">
                        Para renovar sua licença, você precisará dos seguintes documentos:
                        <ul className="mt-2 ml-4 list-disc space-y-1">
                          <li>Documento de identificação original com foto (BI ou Passaporte)</li>
                          <li>Comprovante de residência atualizado (últimos 3 meses)</li>
                          <li>Licença atual (mesmo vencida)</li>
                          <li>Comprovante de pagamento da taxa de renovação</li>
                          <li>Atestado médico de aptidão (para maiores de 65 anos)</li>
                        </ul>
                        <div className="mt-2">Gostaria de agendar sua renovação agora?</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                        <User className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 text-sm">
                        Sim, gostaria de agendar. Qual o prazo para renovação?
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3CBDA1]/20 flex items-center justify-center">
                        <Bot className="h-4 w-4 text-[#3CBDA1]" />
                      </div>
                      <div className="bg-[#3CBDA1]/10 rounded-lg p-3 text-sm">
                        A renovação deve ser feita até 30 dias após o vencimento da licença. Após esse prazo, poderão
                        ser aplicadas multas adicionais. Para agendar, preciso de algumas informações:
                        <ol className="mt-2 ml-4 list-decimal space-y-1">
                          <li>Seu nome completo</li>
                          <li>Número do documento</li>
                          <li>Data de preferência para o atendimento</li>
                        </ol>
                        <div className="mt-2">
                          Você pode me fornecer essas informações ou prefere fazer o agendamento pelo site?
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Separator className="my-8 bg-[#3CBDA1]/20" />

          <section className="mb-6">
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">FAQ</Badge>
              <h2 className="text-2xl font-semibold">Perguntas Frequentes</h2>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 p-6 mb-8">
              <div className="space-y-6">
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="font-medium text-lg mb-2">O chatbot está disponível 24 horas?</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Sim, o NhaBex Chatbot está disponível 24 horas por dia, 7 dias por semana, incluindo feriados. O
                    atendimento humano, no entanto, segue o horário comercial padrão.
                  </p>
                </div>

                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="font-medium text-lg mb-2">O chatbot pode processar meus documentos?</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    O chatbot não processa documentos diretamente, mas pode orientá-lo sobre como submeter documentos
                    através dos canais oficiais do NhaBex e verificar o status de solicitações existentes.
                  </p>
                </div>

                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="font-medium text-lg mb-2">Minhas conversas com o chatbot são seguras?</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Sim, todas as conversas são criptografadas e seguem rigorosos protocolos de segurança. Seus dados
                    pessoais são protegidos de acordo com as políticas de privacidade do NhaBex e regulamentações de
                    proteção de dados.
                  </p>
                </div>

                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="font-medium text-lg mb-2">Posso usar o chatbot em outros idiomas?</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Sim, o NhaBex Chatbot está disponível em português, inglês e espanhol. Você pode mudar o idioma a
                    qualquer momento durante a conversa digitando "mudar idioma" ou selecionando a opção no menu.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2">O que fazer se o chatbot não entender minha pergunta?</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Se o chatbot não entender sua pergunta, tente reformulá-la de maneira mais simples ou específica.
                    Você também pode digitar "ajuda" para ver opções de tópicos ou solicitar transferência para um
                    atendente humano digitando "atendente".
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-10 bg-[#3CBDA1]/10 rounded-lg p-6 border border-[#3CBDA1]/20">
            <div className="flex items-center gap-2 mb-4">
              <Settings className="h-5 w-5 text-[#3CBDA1]" />
              <h3 className="text-lg font-semibold">Configurações e Preferências</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Você pode personalizar sua experiência com o NhaBex Chatbot ajustando algumas configurações:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-[#3CBDA1]/20">
                <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                  <MessageSquare className="h-4 w-4 text-[#3CBDA1]" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">Idioma</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Digite "idioma" ou "language" para alterar o idioma da conversa
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-[#3CBDA1]/20">
                <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                  <Bell className="h-4 w-4 text-[#3CBDA1]" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">Notificações</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Configure notificações de acompanhamento digitando "notificações"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-[#3CBDA1]/20">
                <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                  <User className="h-4 w-4 text-[#3CBDA1]" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">Perfil</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Atualize suas informações de perfil digitando "atualizar perfil"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-[#3CBDA1]/20">
                <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                  <HelpCircle className="h-4 w-4 text-[#3CBDA1]" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">Ajuda</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Acesse o guia completo do chatbot digitando "ajuda" ou "help"
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-[#3CBDA1] hover:text-[#2ca88e] transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                <span className="text-sm font-medium">Acessar o Chatbot Agora</span>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

