"use client";

export default function Documentation() {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-3xl mx-auto bg-white p-8 shadow-md rounded-lg">
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-3">Gestão de Serviço</h2>
                    <p className="text leading-relaxed">
                        Para aceder à secção correspondente às tarefas relacionadas com a dados de Serviço, o utilizador deverá aceder à opção “<b>Serviço</b>” no menu lateral:
                    </p>
                    <div className="mt-6">
                        <img src="/service/img1.png" alt="Sessão de Gestão de Serviço" className="w-full h-auto max-w-full" />
                    </div>

                    <p className="mt-6">
                        Na secção de informação aparece uma listagem com o resumo de todos serviços registados no sistema. Nas linhas correspondentes a cada registo, existem três opções que permitem efetuar tarefas como <b>configurações, editar e Eliminar</b> um determinado registo:
                    </p>
                    <div className="mt-6">
                        <img src="/service/img2.png" alt="Opções de Configurações, Editar e eliminação de um Serviço" className="w-full h-auto" />
                    </div>

                    <h2 className="text-2xl font-semibold mb-3 mt-6">Adicionar Serviço</h2>
                    <p className="mt-4">
                        Para adicionar um novo serviço na plataforma, o utilizador deverá clicar em “<b>Adicionar</b>” situada no canto superior direito da secção.
                    </p>
                    <div className="mt-6">
                        <img src="/service/img3.png" alt="Formulário de registo de Serviço" />
                    </div>
                    <p className="text leading-relaxed"> O formulário que surge ao utilizador tem um conjunto de campos obrigatórios para o registo de serviço seja efetuado no sistema. Esses campos são:</p>
                    <ul className="mb-4 list-inside list-disc space-y-1">
                        <li>
                            Nome;
                        </li>
                        <li>
                            Acrónimo;
                        </li>
                        <li>
                            Descrição;
                        </li>
                        <li>
                            Exemplo.
                        </li>
                    </ul>
                    <p className="text leading-relaxed">  Para guardar os dados introduzidos e terminar o registo de serviço, o utilizador deverá
                        clicar o botão “<b>Adicionar</b>”.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-3">Editar Serviço</h2>
                    <p className="mt-4">
                        Ao clicar o ícone “<b>Editar</b>”, surge um formulário ao utilizador igual ao anteriormente apresentado, com a diferença de este se encontrar preenchido.
                    </p>
                    <div className="mt-6">
                        <img src="/service/img4.png" alt="Formulário de Editar um serviço" className="w-full h-auto" />
                    </div>

                    <p className="mt-4 bg-[#3CBDA1] border-l-4 border-[#2a8f7e] p-4 rounded flex items-center text-white">
                        ℹ️ <span className="ml-2">No caso do ícone “<b>Editar</b>”, o formulário permite que haja alterações aos dados. Para confirmar as alterações efetuadas ao serviço, o utilizador deve clicar o botão “<b>Atualizar</b>” para o efeito.</span>
                    </p>

                    <h2 className="text-2xl font-semibold mb-3 mt-6">Eliminar Serviço</h2>
                    <p className="mt-4">
                        Para eliminar um serviço do sistema, o utilizador deverá clicar no ícone “<b>Eliminar</b>” no registo correspondente. Ao clicar nesse ícone um serviço surge ao utilizador para que este possa confirmar a eliminação do serviço
                    </p>
                    <div className="mt-6">
                        <img src="/service/img5.png" alt="Formulário de Eliminar um serviço" className="w-full h-auto" />
                    </div>

                    <p className="mt-4 bg-[#3CBDA1] border-l-4 border-[#2a8f7e] p-4 rounded flex items-center text-white">
                        ⚠️ <span className="ml-2">Para confirmar a eliminação do serviço, o utilizador deve clicar o botão <b>"Remover"</b>.<br /> Depois de eliminado, um serviço não pode ser recuperado.</span>
                    </p>
                </section>
            </div>
        </div>
    );
}
