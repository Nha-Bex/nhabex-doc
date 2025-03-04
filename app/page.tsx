import Footer from "@/components/ThemeToggle/Footer";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NhaBex Doc ",
  description: "Aprenda como começar com nossa documentação",
}

const solucoes = [
  { titulo: "NhaBex Fila de Espera", imagem: "/solution/fila.svg", link: "/filadeespera" },
  { titulo: "NhaBex Agendamentos", imagem: "/solution/agendamento.svg", link: "/agendamento" },
  { titulo: "NhaBex Audiências", imagem: "/solution/audiencia.svg", link: "/audiencia" },
  { titulo: "NhaBex Pagamentos", imagem: "/solution/pay.svg", link: "/solucoes/pagamentos" },
  { titulo: "NhaBex Carro", imagem: "/solution/carro.svg", link: "/solucoes/carro" },
  { titulo: "NhaBex Loja", imagem: "/solution/loja.svg", link: "/solucoes/loja" },
  { titulo: "NhaBex Marketplace", imagem: "/solution/Marketplace.svg", link: "/solucoes/marketplace" },
  { titulo: "NhaBex Restaurante", imagem: "/solution/coffe.svg", link: "/solucoes/restaurante" },
  { titulo: "NhaBex Ginásio", imagem: "/solution/gym.svg", link: "/solucoes/ginasio" },
  { titulo: "NhaBex Publicidade", imagem: "/solution/pubs.svg", link: "/solucoes/publicidade" },
  { titulo: "NhaBex API", imagem: "/solution/api.svg", link: "/solucoes/api" },
  { titulo: "NhaBex Eventos", imagem: "/solution/eventos.svg", link: "/solucoes/eventos" },
  { titulo: "NhaBex Assistente Virtual", imagem: "/solution/assistente.png", link: "/solucoes/assistentevirtual" },
];
export default function Home() {
  return (
    <><div className="mx-auto">
      {/* <div className="bg-[#3CBDA1]"> */}
      <div className=" items-center">
        <div className="w">
          <h1 className="mb-6 text-4xl font-bold"> DOC NhaBex</h1>
        </div>
        <div className="w">
          <img src="/fila/exx.png" alt="Fila de espera" className="w-full h-auto" />
        </div>
      </div>
      <p className="mb-4 mt-4">
        O NhaBex é uma plataforma inovadora que oferece soluções integradas para gestão de filas, pagamentos, agendamentos, marketplace, publicidade e muito mais. Desenvolvido para otimizar a experiência dos usuários e empresas, o NhaBex permite automação, agilidade e eficiência em diversos setores.
      </p>


      {/* </div> */}
      {/* <h2 className="mb-4 mt-8 text-2xl font-semibold">Características</h2>
      <ul className="mb-4 list-inside list-disc space-y-1">
        <li>Clean and minimal design</li>
        <li>Dark mode support</li>
        <li>Responsive layout</li>
        <li>Easy navigation with shadcn sidebar</li>
        <li>Built with Next.js App Router</li>
      </ul>
 */}
      {/* Carrossel de Soluções */}
      <h2 className="mb-4 mt-8 text-2xl font-semibold">As Soluções de NhaBex</h2>
      <Carousel className="w-full overflow-hidden">
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 hidden sm:flex" />
        <CarouselContent className="flex gap-4 justify-start">
          {solucoes.map((solucao, index) => (
            <CarouselItem key={index} className="flex-none w-60 sm:w-64 md:w-72 p-2">
              <div className="p-4 rounded-lg shadow-lg flex flex-col items-center">
                <img src={solucao.imagem} alt={solucao.titulo} className="w-full h-48 object-contain rounded-lg" />
                <h3 className="mt-4 text-xl font-bold text-center">{solucao.titulo}</h3>
                <Link href={solucao.link} passHref>
                  <Button className="mt-2 w-full bg-[#3CBDA1]">Saber mais</Button>
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 hidden sm:flex" />
      </Carousel>
      <h2 className="mb-4 mt-8 text-2xl font-semibold">Começando</h2>
      <p className="mb-4">
        Para começar com nossa documentação, navegue pelas seções usando a barra lateral à esquerda. Aqui está uma rápida visão geral das seções disponíveis:
      </p>
      <ul className="mb-4 list-inside list-disc space-y-1">
        <li>
          <strong>Home</strong>:Fala sobre o Nhabex
        </li>
        <li>
          <strong>Soluções</strong>: Explore as soluções disponíveis e como usá-los
        </li>
        <li>
          <strong>Suporte </strong>: informações como contactar o NhaBex.
        </li>
      </ul>
      <p className="mb-4">
        Caso tenha alguma dúvida ou precise de mais assistência, não hesite em entrar em contato com nossa equipe de suporte.
      </p>
      {/* <h2 className="mb-4 mt-8 text-2xl font-semibold">Contribuindo</h2>
      <p className="mb-4">
        Contribuímos para nossa documentação com boas-vindas. Se você encontrar algum erro ou tiver sugestões de melhoria, abra um issue ou envie um pull request em nosso repositório GitHub.
      </p> */}
    </div>
      <Footer />
    </>
  )
}

