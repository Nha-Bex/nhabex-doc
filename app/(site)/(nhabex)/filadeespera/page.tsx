"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ChevronRight,
  Info,
  Clock,
  Bell,
  Ticket,
  Layers,
  Building,
  Tablet,
  Monitor,
  ExternalLink,
  PlayCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Documentation() {
  return (
    <div className="container mx-auto py-8 px-4 w-full">
      <div className="space-y-2 mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Nossas Soluções</span>
          <ChevronRight className="h-4 w-4" />
          <span className="font-medium text-foreground">Fila de Espera</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#3CBDA1] to-teal-600">
          Fila de Espera
        </h1>
        <p className="text-xl text-muted-foreground">
          Sistema completo para gestão eficiente de filas de atendimento
        </p>
      </div>

      <Card className="border border-[#3CBDA1]/20 shadow-lg overflow-hidden bg-card">
        <CardContent className="p-8">
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">
                Visão Geral
              </Badge>
              <h2 className="text-2xl font-semibold">Sobre o Sistema</h2>
            </div>

            <div className="bg-[#3CBDA1]/5 p-4 rounded-lg border border-[#3CBDA1]/20 mb-6">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-[#3CBDA1] mt-0.5 flex-shrink-0" />
                <p className="text-base leading-relaxed">
                  O sistema de fila de espera do NhaBex permite que empresas
                  organizem e gerenciem filas de atendimento de forma eficiente.
                  Ele oferece suporte para notificações automáticas, atualização
                  em tempo real e integração com outros serviços da plataforma.
                  Com essa ferramenta, é possível reduzir o tempo de espera e
                  melhorar a experiência dos clientes.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-6 mt-10">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">
                Funcionalidades
              </Badge>
              <h2 className="text-2xl font-semibold">
                Funcionalidades Principais
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-[#3CBDA1]/20 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-[#3CBDA1]/10 flex-shrink-0">
                    <Clock className="h-5 w-5 text-[#3CBDA1]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1">
                      Monitorização em Tempo Real
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Permite acompanhar as filas de espera em tempo real,
                      proporcionando dados precisos para otimização do
                      atendimento.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-[#3CBDA1]/20 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-[#3CBDA1]/10 flex-shrink-0">
                    <Bell className="h-5 w-5 text-[#3CBDA1]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1">
                      Notificações Instantâneas
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Envia notificações aos clientes sobre sua posição na fila
                      e o tempo estimado de espera, melhorando a experiência do
                      usuário.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-[#3CBDA1]/20 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-[#3CBDA1]/10 flex-shrink-0">
                    <Ticket className="h-5 w-5 text-[#3CBDA1]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1">
                      Tickets Online
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Facilita a emissão de tickets online pelos clientes,
                      reduzindo a necessidade de filas físicas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-[#3CBDA1]/20 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-[#3CBDA1]/10 flex-shrink-0">
                    <Layers className="h-5 w-5 text-[#3CBDA1]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1">
                      Interface Intuitiva
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Oferece uma interface amigável e fácil de usar para a
                      gestão eficaz das filas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-[#3CBDA1]/20 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-[#3CBDA1]/10 flex-shrink-0">
                    <Building className="h-5 w-5 text-[#3CBDA1]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1">
                      Adaptação Multi-Setorial
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Aplicável em diversos setores, como clínicas, bancos,
                      supermercados, entre outros.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-[#3CBDA1]/20 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-[#3CBDA1]/10 flex-shrink-0">
                    <Tablet className="h-5 w-5 text-[#3CBDA1]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1">
                      Módulo Quiosque
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Permite aos clientes garantirem seu lugar na fila usando
                      um tablet no local, eliminando a necessidade de espera
                      física.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-[#3CBDA1]/20 shadow-sm hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-[#3CBDA1]/10 flex-shrink-0">
                    <Monitor className="h-5 w-5 text-[#3CBDA1]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1">
                      Módulo Monitor
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Exibe o status das filas em tempo real, permitindo uma
                      gestão eficiente e otimização do fluxo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Separator className="my-8 bg-[#3CBDA1]/20" />

          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">
                Acesso
              </Badge>
              <h2 className="text-2xl font-semibold">Como Usar</h2>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-base leading-relaxed">
                Para poder utilizar a plataforma Nhabex, a agência deverá estar
                registada em um dos planos disponíveis. Após esse registo, o
                acesso à aplicação web é feito através do seguinte endereço:
              </p>

              <div className="flex items-center gap-2 my-4 p-3 bg-[#3CBDA1]/5 rounded-md border border-[#3CBDA1]/20">
                <ExternalLink className="h-5 w-5 text-[#3CBDA1]" />
                <Link
                  href="https://nhabex.com/commercial/login"
                  className="text-[#3CBDA1] hover:underline font-medium"
                  target="_blank"
                >
                  https://nhabex.com/commercial/login
                </Link>
              </div>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/images/installation/login.png"
                    alt="Tela de login do sistema"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-md"
                  />
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-black/70 text-white hover:bg-black/80">
                      Tela de Login
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#3CBDA1]/5 p-4 rounded-lg border border-[#3CBDA1]/20 my-6">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-[#3CBDA1] mt-0.5 flex-shrink-0" />
                <p className="text-base leading-relaxed">
                  A figura abaixo ilustra a tela onde permite os utentes
                  acompanharem a sua vez quando for chamado uma senha.
                </p>
              </div>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/images/fila/ex.jpeg"
                    alt="Exemplo de tela de acompanhamento de senha"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-md"
                  />
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-black/70 text-white hover:bg-black/80">
                      Acompanhamento de Senha
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Separator className="my-8 bg-[#3CBDA1]/20" />

          <section className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">
                Demonstração
              </Badge>
              <h2 className="text-2xl font-semibold">Vídeo Demonstrativo</h2>
            </div>

            <div className="bg-[#3CBDA1]/5 p-4 rounded-lg border border-[#3CBDA1]/20 mb-6">
              <div className="flex items-start gap-3">
                <PlayCircle className="h-5 w-5 text-[#3CBDA1] mt-0.5 flex-shrink-0" />
                <p className="text-base leading-relaxed">
                  Assista ao vídeo abaixo para uma demonstração completa do
                  funcionamento do sistema de fila de espera.
                </p>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div
                  className="relative w-full"
                  style={{ paddingTop: "56.25%" }}
                >
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-md"
                    src="https://www.youtube.com/embed/s6Xk66ibZ-Y"
                    title="Vídeo Demonstrativo do Sistema de Fila de Espera"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    sandbox="allow-same-origin allow-scripts allow-popups"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-10 bg-[#3CBDA1]/10 rounded-lg p-6 border border-[#3CBDA1]/20">
            <div className="flex items-center gap-2 mb-4">
              <Info className="h-5 w-5 text-[#3CBDA1]" />
              <h3 className="text-lg font-semibold">Benefícios do Sistema</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-[#3CBDA1]/20 text-center">
                <div className="p-3 rounded-full bg-[#3CBDA1]/10 mb-3">
                  <Clock className="h-6 w-6 text-[#3CBDA1]" />
                </div>
                <h4 className="font-medium text-sm mb-1">
                  Redução do Tempo de Espera
                </h4>
                <p className="text-xs text-muted-foreground">
                  Otimiza o fluxo de atendimento
                </p>
              </div>

              <div className="flex flex-col items-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-[#3CBDA1]/20 text-center">
                <div className="p-3 rounded-full bg-[#3CBDA1]/10 mb-3">
                  <Layers className="h-6 w-6 text-[#3CBDA1]" />
                </div>
                <h4 className="font-medium text-sm mb-1">
                  Experiência Melhorada
                </h4>
                <p className="text-xs text-muted-foreground">
                  Maior satisfação dos clientes
                </p>
              </div>

              <div className="flex flex-col items-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-[#3CBDA1]/20 text-center">
                <div className="p-3 rounded-full bg-[#3CBDA1]/10 mb-3">
                  <Monitor className="h-6 w-6 text-[#3CBDA1]" />
                </div>
                <h4 className="font-medium text-sm mb-1">Gestão Eficiente</h4>
                <p className="text-xs text-muted-foreground">
                  Controle total sobre o atendimento
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
