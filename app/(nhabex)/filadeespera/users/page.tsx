"use client";

export default function Documentation() {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-3xl mx-auto bg-white p-8 shadow-md rounded-lg">
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-3">Gestão de Tipos de Utente</h2>
                    <p className="text leading-relaxed"> Para aceder à secção correspondente às tarefas relacionadas com a dados de “<b>Tipo de Utente</b>”, o utilizador deverá aceder à opção “<b>Tipo de Utente</b>” no menu lateral:
                    </p>
                    <div className="mt-6">
                        <img src="/users/img1.png" alt="Sessão de Tipo de Utente" className="w-full h-auto max-w-full" />
                    </div>

                    <p className="mt-6"> Na secção de informação aparece uma listagem com o resumo de todos “<b>
                        Tipo de
                        Utente
                    </b>” registados no sistema. Nas linhas correspondentes a cada registo, existem duas opções que permitem efetuar tarefas como <b>Editar</b> e <b>Eliminar</b> um determinado registo:
                    </p>
                    <div className="mt-6">
                        <img src="/users/img2.png" alt="Opções de Editar e eliminação de Tipo de Utente" className="w-full h-auto" />
                    </div>

                    <h2 className="text-2xl font-semibold mb-3 mt-6">Adicionar Tipo de Utente</h2>
                    <p className="mt-4">
                        Para adicionar um novo “<b>Tipo de Utente</b>” na plataforma, o utilizador deverá clicar em “<b>Adicionar</b>” situada no canto superior direito da secção.
                    </p>
                    <div className="mt-6">
                        <img src="/users/img3.png" alt="Formulário de registo Tipo de Utente" />
                    </div>
                    <p className="text leading-relaxed">O formulário que surge ao utilizador tem um conjunto de campos obrigatórios para que o registo de “<b>Tipo de Utente</b>” seja efetuado no sistema. Esses campos são:</p>
                    <ul className="mb-4 list-inside list-disc space-y-1">
                        <li>
                            Nome
                        </li>
                        <li>
                            Descrição
                        </li>
                    </ul>
                    <p className="text leading-relaxed">Para guardar os dados introduzidos e terminar o registo de tipo de utente, o utilizador deverá clicar o botão “<b>Adicionar</b>”.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-3">Editar Tipo de Utente</h2>
                    <p className="mt-4">Ao clicar o ícone “<b>Editar</b>”, surge um formulário ao utilizador igual ao anteriormente
                        apresentado, com a diferença de este se encontrar preenchido.
                    </p>
                    <div className="mt-6">
                        <img src="/users/img4.png" alt="Formulário de Editar um Tipo de Utente" className="w-full h-auto" />
                    </div>

                    <p className="mt-4 bg-[#3CBDA1] border-l-4 border-[#2a8f7e] p-4 rounded flex items-center text-white">
                        ℹ️ <span className="ml-2">No caso do ícone “<b>Editar</b>”, o formulário permite que haja alterações aos dados. Para confirmar as alterações efetuadas ao “<b>Tipo de Utente</b>”, o utilizador deve clicar o botão “<b>Editar</b>” para o efeito.</span>
                    </p>

                    <h2 className="text-2xl font-semibold mb-3 mt-6">Eliminar Tipo de Utente</h2>
                    <p className="mt-4"> Para eliminar um “<b>Tipo de Utente</b>” do sistema, o utilizador deverá clicar no ícone
                        “<b>Eliminar</b>” no registo correspondente. Ao clicar nesse ícone um serviço surge ao utilizador para que este possa confirmar a eliminação do tipo de utente.
                    </p>
                    <div className="mt-6">
                        <img src="/users/img5.png" alt=" Formulário de Eliminar um tipo de utente" className="w-full h-auto" />
                    </div>
                    <p className="mt-4 bg-[#3CBDA1] border-l-4 border-[#2a8f7e] p-4 rounded flex items-center text-white">
                        ⚠️ <span className="ml-2">Para confirmar a eliminação do “Tipo de Utente”, o utilizador deve clicar o botão “Eliminar”. Depois de eliminado, um “Tipo de Utente” não pode ser recuperado.</span>
                    </p>
                    <h2 className="text-2xl font-semibold mb-3">Adicionar Serviço a um Tipo de Utente</h2>
                    <p className="mt-4"> Para adicionar um novo Serviço a um “<b>Tipo de Utente</b>”, o utilizador deverá clicar no
                        ícone “<b>Editar serviço</b>” e de seguida aparecerá uma tela onde todos os serviços registados se encontram.
                    </p>
                    <div className="mt-6">
                        <img src="/users/img6.png" alt=" Opções de Editar serviço de Tipo de Utente" className="w-full h-auto" />
                    </div>
                    <p className="mt-4"> Para atualizar um determinado serviço num tipo de utente primeiro deve certificar qual
                    agência e só depois escolher os referidos serviços. Para cada alterações efetuadas na referida agência, o utilizador deve clicar em “<b>Atualizar</b>” para o efeito.
                    </p>
                    <div className="mt-6">
                        <img src="/users/img7.png" alt="Formulário de Editar Serviço de Tipo de Cliente" className="w-full h-auto" />
                    </div>
                </section>
            </div>
        </div>
    );
}
