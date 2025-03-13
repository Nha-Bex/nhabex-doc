"use client";

export default function Documentation() {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-3xl mx-auto bg-white p-8 shadow-md rounded-lg">
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-3">Gestão de  Audiências</h2>
                    <p className="text leading-relaxed"> Para aceder à seção correspondente com as tarefas relacionadas com a dados da <b>“audiencias”</b> o utilizador deverá aceder à opção <b>“Audiências”</b> no menu lateral.
                    </p>
                    <div className="mt-6">
                        <img src="/audience/gestao/img1.png" alt="Sessão de Gestão de  audiencias" className="w-full h-auto max-w-full" />
                    </div>
                    <p className="mt-6"> Na secção de informação aparece uma listagem com o resumo de todas os pedidos de audiências registados no sistema e um formulario que permite pesquisar e filtrar esses pedidos.
                    </p>
                    <div className="mt-6">
                        <img src="/audience/gestao/img2.png" alt="Filtro de pedidos  de  Audiencias" className="w-full h-auto" />
                    </div>
                    <p className="mt-4">Nas linhas correspondentes a cada registo, existem duas opções que permitem ver os detalhes da audiencia e cancelar ela:
                    </p>
                    <div className="mt-6">
                        <img src="/audience/gestao/img3.png" alt="detalhe" className="w-full h-auto" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3 mt-6">Marcar  audiências</h3>
                    <p className="mt-4">
                        Para marcar uma nova audiência na plataforma, o utilizador deverá clicar em <b>“Marcar Audiências”</b> situada no canto superior direito da secção.
                    </p>
                    <div className="mt-6">
                        <img src="/audience/gestao/img4.png"
                            alt=" Formulário Marcar audiências – Dados Pessoal" />
                        <img src="/audience/gestao/img5.png"
                            alt=" Formulário Marcar Audiência – Dados de Audiências" />
                        <img src="/audience/gestao/img6.png"
                            alt="Formulário Marcar Audiência – Lista de Documentos necessarios" />
                    </div>
                    <p className="mt-4">
                        O formulário apresentado ao utilizador contém um conjunto de campos obrigatórios para que um novo pedido de audiência seja registado no sistema. Esses campos estão divididos em três categorias: dados pessoais, onde o utilizador deve inserir suas informações pessoais; dados da audiência; e documentos necessários para a audiência
                        Para guardar os dados introduzidos e terminar o novo pedido de audiência, o utilizador
                        deverá clicar no botão <b>“Guardar”</b>.
                    </p>
                </section>

                <section className="mb-8">
                    <h3 className="text-2xl font-semibold mb-3">Ver detalhes da  audiências</h3>
                    <p className="mt-4"> Ao clicar no ícone <b>“Detalhes”</b> em uma das audiencias, uma nova pagina é aberta com os detlhes dessa audiencia.
                    </p>
                    <div className="mt-6">
                        <img src="/audience/gestao/img7.png" alt="Formulário Marcar Audiência – Lista de Documentos necessarios" className="w-full h-auto" />
                    </div>

                    <p className="mt-4">
                        Nesta pagina o utilizador podera modificar algumas informaçoes como a data e hora, anexar
                        deocumento, enviar respostas e fechar o processo.
                        Para gaurdar a as modificaçoes feitas o utilizador deve clicar o botão <b>“Atualizar”</b> para o efeito.
                        Para anexar documentos e/ou enviar respostas o utilizador devera clicar o botão <b>“Enviar”</b>.
                        Para fechar o processo, o utilizador deve clicar o botão <b>“Fechar Processo”</b>.
                    </p>
                </section>
            </div>
        </div>
    );
}
