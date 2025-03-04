import Link from "next/link"
import { ChevronRight } from "lucide-react"


export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">NhaBex Store Documentation</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Section title="Introdução" items={["O que é o NhaBex Store?", "Benefícios de usar a plataforma"]} />
              <Section
                title="Configuração Inicial"
                items={["Como criar uma conta e acessar o NhaBex Store", "Visão geral do painel administrativo"]}
              />
              <Section
                title="Cadastro de Produtos"
                items={[
                  "Como adicionar produtos ao catálogo",
                  "Gerenciamento de categorias e variações",
                  "Adição de imagens e descrições detalhadas",
                ]}
              />
              <Section
                title="Gerenciamento de Pedidos"
                items={[
                  "Como visualizar pedidos",
                  "Atualização de status (pendente, em processamento, concluído)",
                  "Processamento de pagamentos e envio",
                ]}
              />
              <Section
                title="Gestão de Estoque"
                items={[
                  "Monitoramento de disponibilidade de produtos",
                  "Relatórios de movimentação de estoque",
                  "Notificações de baixo estoque",
                ]}
              />
              <Section
                title="Personalização da Loja"
                items={["Configuração de temas e design", "Adição de banners e promoções"]}
              />
              <Section
                title="Métodos de Pagamento"
                items={[
                  "Opções disponíveis (cartão de crédito, mobile money, etc.)",
                  "Configuração de gateways de pagamento",
                ]}
              />
              <Section
                title="Integração com Outras Soluções"
                items={["Conexão com o NhaBex Marketplace", "Integração com APIs externas"]}
              />
              <Section
                title="Suporte e Dúvidas Frequentes"
                items={["Como entrar em contato com o suporte", "Perguntas e respostas comuns"]}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">{title}</h2>
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <ChevronRight className="h-5 w-5 text-gray-400 mr-2" />
              <Link href="#" className="text-blue-600 hover:underline">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

