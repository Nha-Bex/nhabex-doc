"use client"

import Footer from "@/components/ThemeToggle/Footer"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ChevronRight, ExternalLink, Globe, Lightbulb, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const solucoes = [
  {
    titulo: "NhaBex Fila de Espera",
    imagem: "/images/solution/fila.svg",
    link: "/filadeespera",
  },
  {
    titulo: "NhaBex Agendamentos",
    imagem: "/images/solution/agendamento.svg",
    link: "/agendamento",
  },
  {
    titulo: "NhaBex Audiências",
    imagem: "/images/solution/audiencia.svg",
    link: "/audiencia",
  },
  {
    titulo: "NhaBex Pagamentos",
    imagem: "/images/solution/pay.svg",
    link: "/solucoes/pagamentos",
  },
  {
    titulo: "NhaBex Carro",
    imagem: "/images/solution/carro.svg",
    link: "/solucoes/carro",
  },
  {
    titulo: "NhaBex Loja",
    imagem: "/images/solution/loja.svg",
    link: "/solucoes/loja",
  },
  {
    titulo: "NhaBex Marketplace",
    imagem: "/images/solution/Marketplace.svg",
    link: "/solucoes/marketplace",
  },
  {
    titulo: "NhaBex Restaurante",
    imagem: "/images/solution/coffe.svg",
    link: "/solucoes/restaurante",
  },
  {
    titulo: "NhaBex Ginásio",
    imagem: "/images/solution/gym.svg",
    link: "/solucoes/ginasio",
  },
  {
    titulo: "NhaBex Publicidade",
    imagem: "/images/solution/pubs.svg",
    link: "/solucoes/publicidade",
  },
  {
    titulo: "NhaBex API",
    imagem: "/images/solution/api.svg",
    link: "/solucoes/api",
  },
  {
    titulo: "NhaBex Eventos",
    imagem: "/images/solution/eventos.svg",
    link: "/solucoes/eventos",
  },
  {
    titulo: "NhaBex Assistente Virtual",
    imagem: "/images/solution/assistente.png",
    link: "/solucoes/assistentevirtual",
  },
]

const features = [
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Automação Inteligente",
    description: "Otimize processos e reduza tempo de espera com nossas soluções automatizadas.",
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "Integração Completa",
    description: "Todas as soluções NhaBex funcionam perfeitamente integradas entre si.",
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: "Inovação Constante",
    description: "Estamos sempre atualizando nossas soluções com as mais recentes tecnologias.",
  },
]

export default function ClientPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow ">


        {/* Hero Section */}
        <section className="relative w-full overflow-hidden bg-gradient-to-br from-primary/10 to-transparent pt-16 pb-20">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1 text-sm">
                  Documentação Oficial
                </Badge>
                <h1 className="text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-teal-600">
                  DOC NhaBex
                </h1>
                <p className="text-xl text-gray-700 dark:text-gray-300 max-w-xl">
                  Explore nossa documentação completa e descubra como as soluções NhaBex podem transformar seu negócio
                  com automação, agilidade e eficiência.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Button className="bg-primary text-white">
                    Começar Agora <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-primary text-primary">
                    Ver Soluções
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-teal-500 rounded-lg blur opacity-30"></div>
                <div className="relative bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-xl">
                  <img src="/images/fila/exx.png" alt="NhaBex Platform" className="w-full h-auto object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* About Section */}
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30">Sobre a Plataforma</Badge>
              <h2 className="text-3xl font-bold mb-6">Conheça o NhaBex</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                O NhaBex é uma plataforma inovadora que oferece soluções integradas para gestão de filas, pagamentos,
                agendamentos, marketplace, publicidade e muito mais. Desenvolvido para otimizar a experiência dos
                usuários e empresas, o NhaBex permite automação, agilidade e eficiência em diversos setores.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="border border-gray-200 dark:border-gray-800 hover:border-primary transition-all duration-300 hover:shadow-lg"
                >
                  <CardContent className="p-6">
                    <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>



        {/* Solutions Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30">Nossas Soluções</Badge>
              <h2 className="text-3xl font-bold mb-6">As Soluções de NhaBex</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Explore nossa ampla gama de soluções projetadas para atender às necessidades específicas do seu negócio.
              </p>
            </div>
            <div className="relative mt-12 px-4">
              <Carousel className="w-full">
                <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-800 shadow-lg border-0 hover:bg-primary hover:text-white" />
                <CarouselContent className="-ml-4">
                  {solucoes.map((solucao, index) => (
                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                        <div className="bg-gradient-to-br from-primary/80 to-teal-600/80 p-1">
                          <div className="bg-white dark:bg-gray-900 p-4">
                            <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 mb-4">
                              <img
                                src={solucao.imagem || "/placeholder.svg"}
                                alt={solucao.titulo}
                                className="w-full h-full object-contain p-4"
                              />
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4 truncate">{solucao.titulo}</h3>
                            <Link href={solucao.link} passHref>
                              <Button className="w-full bg-primary hover:bg-[#2ca88e]">
                                Saber mais <ChevronRight className="ml-1 h-4 w-4" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-800 shadow-lg border-0 hover:bg-primary hover:text-white" />
              </Carousel>
            </div>
          </div>
        </section>



        {/* Getting Started Section */}
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-primary/10 to-transparent rounded-2xl p-8 border border-primary/20">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1">
                    <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30">Guia Rápido</Badge>
                    <h2 className="text-3xl font-bold mb-6">Começando</h2>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                      Para começar com nossa documentação, navegue pelas seções usando a barra lateral à esquerda. Aqui
                      está uma rápida visão geral das seções disponíveis:
                    </p>
                    <ul className="mb-6 space-y-3">
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 bg-primary/20 rounded-full p-1">
                          <ChevronRight className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <span className="font-semibold">Home:</span> Fala sobre o NhaBex
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 bg-primary/20 rounded-full p-1">
                          <ChevronRight className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <span className="font-semibold">Soluções:</span> Explore as soluções disponíveis e como
                          usá-las
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 bg-primary/20 rounded-full p-1">
                          <ChevronRight className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <span className="font-semibold">Suporte:</span> Informações como contactar o NhaBex
                        </div>
                      </li>
                    </ul>
                    <p className="mb-6 text-gray-700 dark:text-gray-300">
                      Caso tenha alguma dúvida ou precise de mais assistência, não hesite em entrar em contato com nossa
                      equipe de suporte.
                    </p>
                    <Button className="bg-primary hover:bg-[#2ca88e]">
                      Explorar Documentação <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex-shrink-0 w-full md:w-1/3">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-teal-500 rounded-lg blur opacity-30"></div>
                      <div className="relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl p-2">
                        <img src="/images/solution/assistente.png" alt="Assistente NhaBex" className="w-full h-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

