"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Info, Building2 } from "lucide-react";
import Image from "next/image";

export default function Documentation() {
  return (
    <div className="container mx-auto py-8 px-4 w-full">
      <div className="space-y-2 mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Fila de Espera</span>
          <ChevronRight className="h-4 w-4" />
          <span className="font-medium text-foreground">Balcões</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#3CBDA1] to-teal-600">
          Meus Balcões
        </h1>
        <p className="text-xl text-muted-foreground">
          Documentação completa para gerenciamento de balcões no sistema
        </p>
      </div>

      <Card className="border border-[#3CBDA1]/20 shadow-lg overflow-hidden bg-card">
        <CardContent className="p-8">
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">
                Acesso
              </Badge>
              <h2 className="text-2xl font-semibold">
                Acesso aos Meus Balcões
              </h2>
            </div>

            <div className="bg-[#3CBDA1]/5 p-4 rounded-lg border border-[#3CBDA1]/20 mb-6">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-[#3CBDA1] mt-0.5 flex-shrink-0" />
                <p className="text-base leading-relaxed">
                  Para aceder à secção correspondente às tarefas relacionadas
                  com os dados do balcão, o utilizador deverá aceder à opção "
                  <b>Meus Balcões</b>" no menu lateral:
                </p>
              </div>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/images/balcoes/img1.png"
                    alt="Sessão de Meus Balcões"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-md"
                  />
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-black/70 text-white hover:bg-black/80">
                      Menu Lateral
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-4 mt-10">
              <Badge className="bg-[#3CBDA1]/20 text-[#3CBDA1] hover:bg-[#3CBDA1]/30 px-3 py-1">
                Agrupamento
              </Badge>
              <h2 className="text-2xl font-semibold">Organização de Balcões</h2>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-base leading-relaxed">
                O sistema permite uma nova forma de apresenta os balcões de
                atendedores de forma mais bem agrupado. Para esse efeito um
                trabalhador só pode ter acesso a um balcão após escolher qual
                agência pretende ter acesso ao balcão de atendimento.
              </p>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#3CBDA1]/20 shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CBDA1] to-teal-500"></div>
              <div className="p-1">
                <div className="relative">
                  <Image
                    src="/images/balcoes/img2.png"
                    alt="Opções de Manejar Balcão"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-md"
                  />
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-black/70 text-white hover:bg-black/80">
                      Seleção de Agência
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-10 bg-[#3CBDA1]/10 rounded-lg p-6 border border-[#3CBDA1]/20">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="h-5 w-5 text-[#3CBDA1]" />
              <h3 className="text-lg font-semibold">Informações Importantes</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                <p className="text-sm">
                  Cada operador só pode acessar os balcões das agências às quais
                  está vinculado.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                <p className="text-sm">
                  A organização por agências permite melhor controle e
                  distribuição do atendimento.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3CBDA1] mt-2"></div>
                <p className="text-sm">
                  Para mais informações sobre configurações de balcões, consulte
                  a documentação de administração.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
