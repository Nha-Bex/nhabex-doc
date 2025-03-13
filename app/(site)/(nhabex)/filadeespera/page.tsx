export default function Documentation() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-8 shadow-md rounded-lg">
        <h1 className="text-4xl font-bold mb-6 text-center text-[#3CBDA1]">Fila de Espera</h1>

        <section className="mb-8">
          {/* <div className="bg-background text-foreground border border-border dark:bg-gray-900 dark:text-white"> */}
          <h2 className="text-2xl font-semibold mb-3 ">Visão Geral</h2>
          <p className="text leading-relaxed">
            O sistema de fila de espera do NhaBex permite que empresas organizem e gerenciem filas de atendimento de forma eficiente.
            Ele oferece suporte para notificações automáticas, atualização em tempo real e integração com outros serviços da plataforma.
            Com essa ferramenta, é possível reduzir o tempo de espera e melhorar a experiência dos clientes.
          </p>
          <h2 className="mb-3 mt-8 text-2xl font-semibold">Funcionalidades Principais</h2>
          <ul className="mb-4 list-inside list-disc space-y-1">
            <li>
              <strong>Monitorização em Tempo Real</strong>:<br />
              Permite acompanhar as filas de espera em tempo real, proporcionando dados precisos para otimização do atendimento.
            </li>
            <li>
              <strong>Notificações Instantâneas</strong>:<br />
              Envia notificações aos clientes sobre sua posição na fila e o tempo estimado de espera, melhorando a experiência do usuário.
            </li>
            <li>
              <strong>Tickets Online </strong>:
              <br />Facilita a emissão de tickets online pelos clientes, reduzindo a necessidade de filas físicas.
            </li>
            <li>
              <strong>Interface Intuitiva</strong>:<br />
              Oferece uma interface amigável e fácil de usar para a gestão eficaz das filas.
            </li>
            <li>
              <strong>Adaptação Multi-Setorial</strong>:<br />
              Aplicável em diversos setores, como clínicas, bancos, supermercados, entre outros.
            </li>
            <li>
              <strong>Modulo Quiosque</strong>:<br />
              Permite aos clientes garantirem seu lugar na fila usando um tablet no local, eliminando a necessidade de espera física.
            </li>
            <li>
              <strong>Modulo Monitor</strong>:<br />
              Exibe o status das filas em tempo real, permitindo uma gestão eficiente e otimização do fluxo.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Como Usar</h2>
          <p className="text-gray-700">Para poder utilizar a plataforma Nhabex, a agência deverá estar registada em um dos planos disponíveis. Após esse registo, o acesso à aplicação web é feito através do seguinte endereço:
            <a href="https://nhabex.com/commercial/login" className="text-blue-500">
              https://nhabex.com/commercial/login
            </a></p>
          <div className="mt-6">
            <img
              src="/installation/login.png"
              alt="Exemplo de imagem"
              className="w-full h-auto"
            />
          </div>
          <p className="mt-4"> figura abaixo ilustra a tela onde permite os utentes acompanharem a sua vez
          quando for chamado uma senha.</p>

          <div className="mt-6">
            <img src="/fila/ex.jpeg" alt="" />
          </div>

          <section className="mb-8">
            <h2 className="mt-7 text-2xl font-semibold mb-3">Vídeo Demonstrativo</h2>
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/s6Xk66ibZ-Y"
                title="Vídeo do YouTube"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                sandbox="allow-same-origin allow-scripts allow-popups"
              ></iframe>
            </div>
          </section>

          {/* <pre className="bg-gray-900 text-white p-4 rounded-lg mt-3 overflow-x-auto"><code>npm install nhabex-fila</code></pre>
          <p className="text-gray-700 mt-4">Ou com Yarn:</p>
          <pre className="bg-gray-900 text-white p-4 rounded-lg mt-3 overflow-x-auto"><code>yarn add nhabex-fila</code></pre> */}
        </section>

        {/* <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Como Usar</h2>
          <p className="text-gray-700">Para utilizar o sistema de fila de espera, importe o módulo e configure-o no seu projeto:</p>
          <pre className="bg-gray-900 text-white p-4 rounded-lg mt-3 overflow-x-auto"><code>{`import { iniciarFila } from 'nhabex-fila';

iniciarFila({ 
  empresaId: '12345', 
  servico: 'Atendimento Médico', 
  clienteId: '67890' 
});`}</code></pre>
        </section> */}

        {/* <section>
          <h2 className="text-2xl font-semibold mb-3">API</h2>
          <p className="text-gray-700">A API do sistema de fila de espera permite integração com outras aplicações. Exemplo de requisição para adicionar um cliente à fila:</p>
          <pre className="bg-gray-900 text-white p-4 rounded-lg mt-3 overflow-x-auto"><code>{`curl -X POST https://api.nhabex.com/fila/adicionar \
-H 'Authorization: Bearer SEU_TOKEN' \
-H 'Content-Type: application/json' \
-d '{
  "clienteId": "67890", 
  "servico": "Atendimento Médico", 
  "empresaId": "12345"
}'`}</code></pre>
          <p className="text-gray-700 mt-4">Para mais detalhes sobre a API, consulte a documentação oficial do NhaBex.</p>
        </section> */}
      </div>
    </div>
  );
}
