"use client";

export default function Documentation() {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-3xl mx-auto bg-white p-8 shadow-md rounded-lg">
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-3">Gestão da Prioridade</h2>
                    <p className="text leading-relaxed">
                        Para aceder à secção correspondente às tarefas relacionadas com os dados da Prioridade,
                        o utilizador deverá aceder à opção “<b>Prioridade</b>” no menu lateral:
                    </p>
                    <div className="mt-6">
                        <img src="/priority/img1.png" alt="Sessão de Gestão da Prioridade" className="w-full h-auto max-w-full" />
                    </div>

                    <p className="mt-6">
                        Na secção de informação aparece uma listagem com o resumo de todas as prioridades inscritas no sistema. Nas linhas correspondentes a cada registo, existem dois opções que permitem efetuar tarefas como <b>editar e eliminar</b> um determinado registo:
                    </p>
                    <div className="mt-6">
                        <img src="/priority/img2.png" alt="Opções de Editar, Eliminar e Configuração de Prioridade" className="w-full h-auto" />
                    </div>

                    <h2 className="text-2xl font-semibold mb-3 mt-6">Adicionar Prioridade</h2>
                    <p className="mt-4">
                        Para adicionar uma nova prioridade na plataforma, o utilizador deverá clicar em
                        “<b>Adicionar</b>” situada no canto superior direito da secção.
                    </p>
                    <div className="mt-6">
                        <img src="/priority/img3.png" alt="Formulário de registo da prioridade" />
                    </div>
                    <p className="text leading-relaxed">  No sistema encontra-se 4 prioridade que estão definidas por lei. Caso seja pretende adicionar outras prioridades no sistema segue os campos abaixo.</p>
                    <p className="text leading-relaxed">No campo de ordem de chamadas <b>[Maior, Médio, Menor, Normal e Nenhuma]</b> são
                        chamadas as ordens em que cada prioridade pode ser chamada através do sistema. Se
                        não forem escolhidas a ordem no momento, o sistema adiciona todas as prioridades com ordem <b>nenhuma</b>.<br></br>
                        Para guardar os dados escolhidos do registo da prioridade, o utilizador deverá clicar em
                        “<b>Adicionar</b>”</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-3">Editar Prioridade</h2>
                    <p className="mt-4">
                        Ao clicar o ícone “<b>Editar</b>” em uma das prioridades, surge um formulário com apenas a ordem de prioridade a serem chamadas.
                    </p>
                    <div className="mt-6">
                        <img src="/priority/img4.png" alt="Formulário de Editar uma prioridade" className="w-full h-auto" />
                    </div>

                    <p className="mt-4 bg-[#3CBDA1] border-l-4 border-[#2a8f7e] p-4 rounded flex items-center text-white">
                        ℹ️ <span className="ml-2">No caso do ícone “<b>Editar</b>”, o formulário permite que haja alterações aos dados. Para confirmar as alterações efetuadas à prioridade, o utilizador deve clicar o botão “<b>Editar</b>” para o efeito.</span>
                    </p>

                    <h2 className="text-2xl font-semibold mb-3 mt-6">Eliminar Prioridade</h2>
                    <p className="mt-4">
                        Para eliminar uma prioridade do sistema, o utilizador deverá clicar no ícone “Eliminar”
                        no registo correspondente. Ao clicar nesse ícone, um formulário surge ao utilizador para que este possa confirmar a eliminação da prioridade.
                    </p>
                    <div className="mt-6">
                        <img src="/priority/img5.png" alt="Formulário de Eliminar Prioridade" className="w-full h-auto" />
                    </div>

                    <p className="mt-4 bg-[#3CBDA1] border-l-4 border-[#2a8f7e] p-4 rounded flex items-center text-white">
                        ⚠️ <span className="ml-2">Para confirmar a eliminação da prioridade, o utilizador deve clicar o botão <b>"Eliminar"</b>.<br /> Depois de eliminado, um serviço não pode ser recuperado.</span>
                    </p>
                </section>
            </div>
        </div>
    );
}
