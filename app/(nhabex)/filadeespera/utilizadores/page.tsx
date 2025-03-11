"use client";

export default function Documentation() {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-3xl mx-auto bg-white p-8 shadow-md rounded-lg">
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-3">Gestão da Utilizadores</h2>
                    <p className="text leading-relaxed"> Para aceder à secção correspondente às tarefas relacionadas com a dados da <b>“Utilizadores”</b>, o utilizador deverá aceder à opção <b>“Utilizadores”</b> no menu lateral:
                    </p>
                    <div className="mt-6">
                        <img src="/utilizadores/img1.png" alt="Sessão de Utilizadores" className="w-full h-auto max-w-full" />
                    </div>

                    <p className="mt-6"> Na secção de informação aparece uma listagem com o resumo de todos os utilizadores
                        inscritos no sistema. Nas linhas correspondentes a cada registo, existem 4 opções que permitem efetuar tarefas como Perfil, Enviar Mensagem, Editar e Eliminar um
                        determinado registo:
                    </p>
                    <div className="mt-6">
                        <img src="/utilizadores/img2.png" alt="Opções de Perfil, Mensagem, Editar e Eliminar Utilizadores" className="w-full h-auto" />
                    </div>

                    <h2 className="text-2xl font-semibold mb-3 mt-6">Adicionar Utilizadores</h2>
                    <p className="mt-4">
                        Para adicionar um novo <b>Utilizadores</b> na plataforma, o utilizador deverá clicar em
                        <b>“Adicionar”</b> situada no canto superior direito da secção.
                    </p>
                    <div className="mt-6">
                        <img src="/utilizadores/img3.png" alt="Formulário de registo da Utilizadores" />
                    </div>
                    <p className="text leading-relaxed"> O campo <b>Nível</b> possui dois opções que são:</p>
                    <ul className="mb-4 list-inside list-disc space-y-1">
                        <li>
                            <strong>Normal</strong>- são os utilizadores que possuem as permissões para ter acesso apenas
                            ao balcão de atendimento.
                        </li>
                        <li>
                            <strong>Administrador de sistema</strong>- utilizadores que terão permissão sobre todos os
                            utilizadores do sistema.
                        </li>
                    </ul>
                    <div className="mt-6">
                        <img src="/utilizadores/img4.png" alt="Nível de utilizador dentro de uma agência" />
                    </div>
                    <p className="text leading-relaxed">O formulário que surge ao utilizador tem um conjunto de campos obrigatórios para que
                        o registo da prioridade seja efetuado no sistema.Para guardar os dados introduzidos e terminar o registo de <b>Utilizadores</b>, o utilizador
                        deverá clicar no botão <b>“Adicionar”</b></p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-3">Visualizar Utilizadores</h2>
                    <p className="mt-4">Ao selecionar a opção <b>“Perfil”</b> de um utilizador, surge um formulário preenchido com
                        os dados do mesmo:
                    </p>
                    <div className="mt-6">
                        <img src="/utilizadores/img5.png" alt="Formulário de Visualizar dados de um utilizador" className="w-full h-auto" />
                    </div>

                    <p className="mt-4">
                        Este formulário permite visualizar todos os dados de um determinado utilizador.
                    </p>

                    <h2 className="text-2xl font-semibold mb-3 mt-6">Editar Utilizadores</h2>
                    <p className="mt-4">Ao clicar o ícone <b>“Editar”</b>, surge um formulário ao utilizador igual ao anteriormente
                        apresentado, com a diferença de este se encontrar preenchido.
                    </p>
                    <div className="mt-6">
                        <img src="/utilizadores/img6.png" alt="Formulário de Editar uma Utilizadores" className="w-full h-auto" />
                    </div>
                    <p className="mt-4">
                        No caso do ícone <b>“Editar”</b>, o formulário permite que haja alterações aos dados. Para confirmar as alterações efetuadas, o utilizador deve clicar o botão <b>“Editar”</b> para o efeito.
                    </p>
                    <h2 className="text-2xl font-semibold mb-3 mt-6">Eliminar Utilizadores</h2>
                    <p className="mt-4"> Para eliminar um utilizador do sistema, deverá clicar no ícone <b>“Eliminar”</b> no registo
                    correspondente. Ao clicar nesse ícone um formulário surge ao utilizador para que este possa confirmar a eliminação da prioridade.
                    </p>
                    <div className="mt-6">
                        <img src="/utilizadores/img7.png" alt="Formulário de Eliminar Utilizadores" className="w-full h-auto" />
                    </div>
                    <p className="mt-4"> Para confirmar a eliminação, o utilizador deve clicar o botão <b>“Eliminar”</b>. Depois de 
                    eliminada, o utilizador não pode ser recuperado.
                    </p>
                </section>
            </div>
        </div>
    );
}
