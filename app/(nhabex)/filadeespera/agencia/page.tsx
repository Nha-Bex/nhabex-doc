"use client";

export default function Documentation() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-8 shadow-md rounded-lg">
        {/* <h1 className="text-4xl font-bold mb-6 text-center text-[#3CBDA1]">Fila de Espera</h1> */}

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Gestão da Agência</h2>
          <p className="text leading-relaxed">
            Para aceder à secção correspondente às tarefas relacionadas com a dados da Agência, o utilizador deverá aceder à opção “Agência” no menu lateral:
          </p>
          <div className="mt-6">
            <img src="/agencia/img1.png" alt="Exemplo de imagem" className="w-full h-auto max-w-full" />
          </div>

          <p className="mt-6">
            Na secção de informação aparece uma listagem com o resumo de todas as agências inscritas no sistema. Nas linhas correspondentes a cada registo, existem duas opções que permitem efetuar tarefas como editar e eliminar um determinado registo:
          </p>
          <div className="mt-6">
            <img src="/agencia/img2.png" alt="Exemplo de imagem" className="w-full h-auto" />
          </div>

          <h2 className="text-2xl font-semibold mb-3 mt-6">Master</h2>
          <p className="mt-4">
            O sistema permite que uma determinada agência receba os dados de Avisos e Publicidade de uma agência <b>Master</b>, ou seja, uns conjuntos de agência podem ter os dados de avisos e publicidade de uma outra agência.<br />
            Para isso uma agência deve ser definida com Master para que as restantes possam receber dados do master.<br />
            Para definir uma agência como Master deve clicar no ícone “<b>Editar</b>” da referida agência.
          </p>
          <div className="mt-6">
            <img src="/agencia/img3.png" alt="" />
          </div>

          <h2 className="text-2xl font-semibold mb-3 mt-6">Receber dados de master</h2>
          <p className="mt-4">1º Escolher a ação “<b>Editar</b>” da agência a ser definida.</p>
          <div className="mt-6">
            <img src="/agencia/img4.png" alt="" />
          </div>
          <p className="mt-4">
            2º Ao editar a agência no campo Master escolher “<b>Receber dados do master</b>” e clicar no botão <b>[Atualizar]</b>.
          </p>
          <div className="mt-6">
            <img src="/agencia/img5.png" alt="" />
          </div>
          <p className="mt-4">Agência definida como receber dados de Master.</p>
          <div className="mt-6">
            <img src="/agencia/img6.png" alt="" />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Editar Agência</h2>
          <p className="mt-4">
            Ao clicar o ícone “<b>Editar</b>”, surge um formulário ao utilizador igual ao anteriormente apresentado, com a diferença de este se encontrar preenchido.
          </p>
          <div className="mt-6">
            <img src="/agencia/img7.png" alt="Exemplo de imagem" className="w-full h-auto" />
          </div>

          <p className="mt-4 bg-[#3CBDA1] border-l-4 border-[#2a8f7e] p-4 rounded flex items-center text-white">
            ℹ️ <span className="ml-2">Ao clicar o ícone “<b>Editar</b>”, surge um formulário ao utilizador igual ao anteriormente apresentado, com a diferença de este se encontrar preenchido.</span>
          </p>

          <h2 className="text-2xl font-semibold mb-3 mt-6">Eliminar Agência</h2>
          <p className="mt-4">
            Para eliminar uma agência do sistema, o utilizador deverá clicar no ícone “Eliminar” no registo correspondente. Ao clicar nesse ícone um aviso surge ao utilizador pedindo para que este confirme a eliminação da agência.
          </p>
          <div className="mt-6">
            <img src="/agencia/img8.png" alt="Exemplo de imagem" className="w-full h-auto" />
          </div>

          <p className="mt-4 bg-[#3CBDA1] border-l-4 border-[#2a8f7e] p-4 rounded flex items-center text-white">
            ⚠️ <span className="ml-2">Para confirmar a eliminação da agência, o utilizador deve clicar o botão <b>“Eliminar”</b>.<br /> Depois de eliminada uma agência, não pode ser recuperada.</span>
          </p>
        </section>

        {/* Botão "Saber Mais" antes do vídeo */}
        {/* <div className="flex justify-center mt-6">
          <button
            className="bg-[#3CBDA1] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2a8f7e] transition duration-300"
            onClick={() =>(window.location.href = "/filadeespera")}
          >
            Continue...
          </button>
        </div> */}

        <section className="mt-6">
          <h2 className="text-2xl font-semibold mb-3">Função de cada ícone na sessão de Agência</h2>
          <ul className="mb-4 list-inside list-disc space-y-1">
            <li>
              <a
                href="/filadeespera/agencia/workers"
                className="hover:underline hover:shadow-lg hover:text-xl"
              >
                <strong>Trabalhadores na Agência</strong>
              </a>
            </li>
            <li>
              <a
                href="/filadeespera/agencia/config"
                className="hover:underline hover:shadow-lg hover:text-xl"
              >
                <strong>Configurações da Agência</strong>
              </a>
            </li>
            <li>
              <a
                href="/filadeespera/agencia/statistic"
                className="hover:underline hover:shadow-lg hover:text-xl"
              >
                <strong>Dados Estatísticos de Agência</strong>
              </a>
            </li>
            <li>
              <a
                href="/filadeespera/agencia/advertising"
                className="hover:underline hover:shadow-lg hover:text-xl"
              >
                <strong>Avisos e Publicidade na Agência</strong>
              </a>
            </li>
            <li>
              <a
                href="/filadeespera/agencia/ticket"
                className="hover:underline hover:shadow-lg hover:text-xl"
              >
                <strong>Ticket e TimeLine dentro de uma agência</strong>
              </a>
            </li>
          </ul>
        </section>



        {/* <section className="mb-8">
          <h2 className="mt-7 text-2xl font-semibold mb-3">Vídeo Demonstrativo</h2>
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/s6Xk66ibZ-Y"
              title="Vídeo do YouTube"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              sandbox="allow-same-origin allow-scripts allow-popups">
            </iframe>
          </div>
        </section> */}
      </div>
    </div>
  );
}
