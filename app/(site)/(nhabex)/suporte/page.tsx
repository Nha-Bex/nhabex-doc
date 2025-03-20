"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ChevronRight,
  Mail,
  Phone,
  MessageSquare,
  HelpCircle,
  Clock,
  Send,
  FileText,
  Users,
  BookOpen,
  Video,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function Support() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulação de envio do formulário
    setTimeout(() => {
      setFormSubmitted(true)
    }, 1000)
  }

  return (
    <div className="container mx-auto py-8 px-4 w-full">
      <div className="space-y-2 mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>NhaBex</span>
          <ChevronRight className="h-4 w-4" />
          <span className="font-medium text-foreground">Suporte</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#3CBDA1] to-teal-600">
          Central de Suporte
        </h1>
        <p className="text-xl text-muted-foreground">
          Estamos aqui para ajudar você com qualquer dúvida ou problema relacionado ao NhaBex
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        <Card className="col-span-1 lg:col-span-2 border border-[#3CBDA1]/20 shadow-lg overflow-hidden bg-card">
          <CardContent className="p-8">
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Contato</Badge>
                <h2 className="text-2xl font-semibold">Entre em Contato</h2>
              </div>

              <div className="prose prose-gray dark:prose-invert max-w-none mb-6">
                <p className="text-base leading-relaxed">
                  Nossa equipe de suporte está pronta para ajudar você a resolver qualquer problema ou dúvida
                  relacionada à plataforma NhaBex. Escolha o método de contato que for mais conveniente para você.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#3CBDA1]/50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                      <Mail className="h-5 w-5 text-[#3CBDA1]" />
                    </div>
                    <h3 className="text-lg font-semibold">Email</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    Envie um e-mail detalhando sua questão e responderemos em até 24 horas.
                  </p>
                  <a
                    href="mailto:suporte@nhabex.com"
                    className="inline-flex items-center text-[#3CBDA1] hover:text-[#2ca88e] font-medium"
                  >
                    suporte@nhabex.com
                  </a>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#3CBDA1]/50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                      <Phone className="h-5 w-5 text-[#3CBDA1]" />
                    </div>
                    <h3 className="text-lg font-semibold">Telefone</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    Para questões urgentes, entre em contato por telefone para atendimento imediato.
                  </p>
                  <a
                    href="tel:+2389837773"
                    className="inline-flex items-center text-[#3CBDA1] hover:text-[#2ca88e] font-medium"
                  >
                    +238 983 77 73
                  </a>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#3CBDA1]/50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                      <MessageSquare className="h-5 w-5 text-[#3CBDA1]" />
                    </div>
                    <h3 className="text-lg font-semibold">Chat ao Vivo</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    Converse em tempo real com um de nossos especialistas através do chat no site.
                  </p>
                  <Button className="bg-[#3CBDA1] hover:bg-[#2ca88e] text-white">Iniciar Chat</Button>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg border border-[#3CBDA1]/20 p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#3CBDA1]/50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                      <HelpCircle className="h-5 w-5 text-[#3CBDA1]" />
                    </div>
                    <h3 className="text-lg font-semibold">Central de Ajuda</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    Acesse nossa base de conhecimento com artigos, tutoriais e perguntas frequentes.
                  </p>
                  <Button variant="outline" className="border-[#3CBDA1] text-[#3CBDA1] hover:bg-[#3CBDA1]/10">
                    Acessar Base de Conhecimento
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-lg bg-[#3CBDA1]/10 border border-[#3CBDA1]/20">
                <Clock className="h-5 w-5 text-[#3CBDA1] flex-shrink-0" />
                <p className="text-sm">
                  Nossa equipe de suporte está disponível de <strong>segunda a sexta-feira, das 08h às 18h</strong>.
                  Fora desse horário, você pode enviar sua solicitação e responderemos no próximo dia útil.
                </p>
              </div>
            </section>

            <Separator className="my-8 bg-[#3CBDA1]/20" />

            <section>
              <div className="flex items-center gap-3 mb-6">
                <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">Formulário</Badge>
                <h2 className="text-2xl font-semibold">Envie sua Solicitação</h2>
              </div>

              {formSubmitted ? (
                <div className="bg-[#3CBDA1]/10 p-6 rounded-lg border border-[#3CBDA1]/20 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#3CBDA1]/20 mb-4">
                    <Send className="h-8 w-8 text-[#3CBDA1]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Solicitação Enviada!</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Agradecemos pelo seu contato. Nossa equipe analisará sua solicitação e responderá o mais breve
                    possível.
                  </p>
                  <Button
                    onClick={() => setFormSubmitted(false)}
                    className="bg-[#3CBDA1] hover:bg-[#2ca88e] text-white"
                  >
                    Enviar Nova Solicitação
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nome Completo
                      </label>
                      <Input
                        id="name"
                        placeholder="Seu nome completo"
                        required
                        className="border-[#3CBDA1]/30 focus-visible:ring-[#3CBDA1]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu.email@exemplo.com"
                        required
                        className="border-[#3CBDA1]/30 focus-visible:ring-[#3CBDA1]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Assunto
                    </label>
                    <Input
                      id="subject"
                      placeholder="Assunto da sua solicitação"
                      required
                      className="border-[#3CBDA1]/30 focus-visible:ring-[#3CBDA1]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Descreva detalhadamente sua dúvida ou problema"
                      rows={5}
                      required
                      className="border-[#3CBDA1]/30 focus-visible:ring-[#3CBDA1]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="category" className="text-sm font-medium">
                      Categoria
                    </label>
                    <select
                      id="category"
                      className="w-full rounded-md border border-[#3CBDA1]/30 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3CBDA1]"
                      required
                    >
                      <option value="">Selecione uma categoria</option>
                      <option value="technical">Problema Técnico</option>
                      <option value="account">Conta e Acesso</option>
                      <option value="billing">Faturamento</option>
                      <option value="feature">Solicitação de Recurso</option>
                      <option value="other">Outro</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="terms"
                      className="h-4 w-4 rounded border-gray-300 text-[#3CBDA1] focus:ring-[#3CBDA1]"
                      required
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600 dark:text-gray-300">
                      Concordo com a política de privacidade e termos de uso
                    </label>
                  </div>

                  <Button type="submit" className="bg-[#3CBDA1] hover:bg-[#2ca88e] text-white">
                    Enviar Solicitação
                  </Button>
                </form>
              )}
            </section>
          </CardContent>
        </Card>

        <div className="col-span-1">
          <Card className="border border-[#3CBDA1]/20 shadow-lg overflow-hidden bg-card sticky top-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Recursos de Suporte</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-white dark:bg-gray-800 border border-[#3CBDA1]/20 hover:border-[#3CBDA1]/50 transition-all">
                  <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                    <FileText className="h-4 w-4 text-[#3CBDA1]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Documentação</h4>
                    <p className="text-xs text-muted-foreground mt-1">Guias detalhados e referências técnicas</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-white dark:bg-gray-800 border border-[#3CBDA1]/20 hover:border-[#3CBDA1]/50 transition-all">
                  <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                    <Video className="h-4 w-4 text-[#3CBDA1]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Tutoriais em Vídeo</h4>
                    <p className="text-xs text-muted-foreground mt-1">Aprenda visualmente com nossos tutoriais</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-white dark:bg-gray-800 border border-[#3CBDA1]/20 hover:border-[#3CBDA1]/50 transition-all">
                  <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                    <BookOpen className="h-4 w-4 text-[#3CBDA1]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">FAQ</h4>
                    <p className="text-xs text-muted-foreground mt-1">Respostas para perguntas frequentes</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-white dark:bg-gray-800 border border-[#3CBDA1]/20 hover:border-[#3CBDA1]/50 transition-all">
                  <div className="p-2 rounded-full bg-[#3CBDA1]/10">
                    <Users className="h-4 w-4 text-[#3CBDA1]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Comunidade</h4>
                    <p className="text-xs text-muted-foreground mt-1">Conecte-se com outros usuários do NhaBex</p>
                  </div>
                </div>
              </div>

              <Separator className="my-6 bg-[#3CBDA1]/20" />

              <div className="bg-gradient-to-br from-[#3CBDA1]/10 to-transparent rounded-lg p-4 border border-[#3CBDA1]/20">
                <h4 className="font-medium mb-2">Suporte Premium</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  Clientes com plano Premium têm acesso a suporte prioritário 24/7 e tempos de resposta garantidos.
                </p>
                <Button variant="outline" className="w-full border-[#3CBDA1] text-[#3CBDA1] hover:bg-[#3CBDA1]/10">
                  Saiba Mais
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

