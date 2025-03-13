/* import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaRobot, FaCogs, FaCode } from 'react-icons/fa';

export default function VirtualAssistantDocs() {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            <header className="bg-white shadow p-6">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Documentação do Assistente Virtual</h1>
                    <Button asChild>
                        <Link href="/getting-started">Começar</Link>
                    </Button>
                </div>
            </header>
            <main className="container mx-auto px-6 py-12 text-center">
                <h2 className="text-4xl font-bold mb-4">Bem-vindo à Documentação do Assistente Virtual</h2>
                <p className="text-lg text-gray-700 mb-6">
                    Descubra como integrar e utilizar o Assistente Virtual do NhaBex para automatizar processos.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                    <Card
                        icon={<FaRobot className="text-4xl text-primary" />}
                        title="Introdução"
                        description="Saiba como configurar e usar o Assistente Virtual."
                        link="/getting-started"
                    />
                    <Card
                        icon={<FaCogs className="text-4xl text-primary" />}
                        title="Configuração"
                        description="Aprenda a personalizar o Assistente Virtual para suas necessidades."
                        link="/configuration"
                    />
                    <Card
                        icon={<FaCode className="text-4xl text-primary" />}
                        title="API"
                        description="Explore a API do Assistente Virtual para integração."
                        link="/api"
                    />
                </div>
            </main>
        </div>
    );
}

function Card({ icon, title, description, link }) {
    return (
        <Link href={link} className="bg-white shadow-md rounded-lg p-6 text-center w-64 hover:shadow-lg transition">
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </Link>
    );
}
 */



export default function Documentation() {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-3xl mx-auto bg-white p-8 shadow-md rounded-lg">
          <h1 className="text-4xl font-bold mb-6 text-center text-[#3CBDA1]">Documentação - Agendamento</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Visão Geral</h2>
            <p className="text-gray-700 leading-relaxed">
              O sistema de agendamento do NhaBex permite que empresas e clientes agendem serviços de forma prática e organizada. 
              Ele oferece suporte para confirmação automática, lembretes e integração com outros serviços da plataforma. 
              Com essa ferramenta, é possível otimizar o fluxo de atendimento e reduzir o tempo de espera dos clientes.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Instalação</h2>
            <p className="text-gray-700">Para instalar o sistema de agendamento do NhaBex, utilize o comando:</p>
            <pre className="bg-gray-900 text-white p-4 rounded-lg mt-3 overflow-x-auto"><code>npm install nhabex-agendamento</code></pre>
            <p className="text-gray-700 mt-4">Ou com Yarn:</p>
            <pre className="bg-gray-900 text-white p-4 rounded-lg mt-3 overflow-x-auto"><code>yarn add nhabex-agendamento</code></pre>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Como Usar</h2>
            <p className="text-gray-700">Para utilizar o sistema de agendamento, importe o módulo e configure-o no seu projeto:</p>
            <pre className="bg-gray-900 text-white p-4 rounded-lg mt-3 overflow-x-auto"><code>{`import { iniciarAgendamento } from 'nhabex-agendamento';
  
  iniciarAgendamento({ 
    empresaId: '12345', 
    servico: 'Consulta Médica', 
    horario: '10:00', 
    clienteId: '67890' 
  });`}</code></pre>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-3">API</h2>
            <p className="text-gray-700">A API do sistema de agendamento permite integração com outras aplicações. Exemplo de requisição para criar um agendamento:</p>
            <pre className="bg-gray-900 text-white p-4 rounded-lg mt-3 overflow-x-auto"><code>{`curl -X POST https://api.nhabex.com/agendamento/criar \
  -H 'Authorization: Bearer SEU_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{
    "clienteId": "67890", 
    "servico": "Consulta Médica", 
    "horario": "10:00", 
    "empresaId": "12345"
  }'`}</code></pre>
            <p className="text-gray-700 mt-4">Para mais detalhes sobre a API, consulte a documentação oficial do NhaBex.</p>
          </section>
        </div>
      </div>
    );
  }
  