export default function Documentation() {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-3xl mx-auto bg-white p-8 shadow-md rounded-lg">
          <h1 className="text-4xl font-bold mb-6 text-center text-[#3CBDA1]">Documentação - Audiência</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Visão Geral</h2>
            <p className="text-gray-700 leading-relaxed">
              O sistema de audiência do NhaBex permite que empresas organizem e gerenciem reuniões, consultas e eventos de forma eficiente.
              Ele oferece suporte para agendamento, notificações automáticas e integração com outras soluções da plataforma.
              Com essa ferramenta, é possível melhorar a comunicação entre clientes e empresas, garantindo um fluxo de trabalho mais produtivo.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Instalação</h2>
            <p className="text-gray-700">Para instalar o sistema de audiência do NhaBex, utilize o comando:</p>
            <pre className="bg-gray-900 text-white p-4 rounded-lg mt-3 overflow-x-auto"><code>npm install nhabex-audiencia</code></pre>
            <p className="text-gray-700 mt-4">Ou com Yarn:</p>
            <pre className="bg-gray-900 text-white p-4 rounded-lg mt-3 overflow-x-auto"><code>yarn add nhabex-audiencia</code></pre>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Como Usar</h2>
            <p className="text-gray-700">Para utilizar o sistema de audiência, importe o módulo e configure-o no seu projeto:</p>
            <pre className="bg-gray-900 text-white p-4 rounded-lg mt-3 overflow-x-auto"><code>{`import { iniciarAudiencia } from 'nhabex-audiencia';
  
  iniciarAudiencia({ 
    empresaId: '12345', 
    evento: 'Consulta Jurídica', 
    horario: '14:00', 
    clienteId: '67890' 
  });`}</code></pre>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-3">API</h2>
            <p className="text-gray-700">A API do sistema de audiência permite integração com outras aplicações. Exemplo de requisição para criar uma audiência:</p>
            <pre className="bg-gray-900 text-white p-4 rounded-lg mt-3 overflow-x-auto"><code>{`curl -X POST https://api.nhabex.com/audiencia/criar \
  -H 'Authorization: Bearer SEU_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{
    "clienteId": "67890", 
    "evento": "Consulta Jurídica", 
    "horario": "14:00", 
    "empresaId": "12345"
  }'`}</code></pre>
            <p className="text-gray-700 mt-4">Para mais detalhes sobre a API, consulte a documentação oficial do NhaBex.</p>
          </section>
        </div>
      </div>
    );
  }
  