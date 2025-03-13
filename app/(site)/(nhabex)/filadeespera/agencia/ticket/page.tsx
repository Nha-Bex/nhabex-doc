"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function Documentation() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gray-100 p-6 relative">

            <button
                onClick={() => router.back()}
                className="fixed bottom-6 left-6 flex items-center gap-2 bg-[#3cbda1] px-4 py-3 rounded-full 
                shadow-xl hover:bg-[#2a8f7e] transition-all duration-200 text-white"
                style={{ zIndex: 1000 }}
            >
                <ArrowLeft className="h-5 w-5" />
                Voltar
            </button>

            <div className="max-w-3xl mx-auto bg-white p-8 shadow-md rounded-lg">
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-3 mt-6">Visualizar informações de uma senha</h2>
                    <p className="text leading-relaxed"> Para visualizar informações relacionado a uma determinada senha segue os
                        passos:</p>
                    <ul className="mb-4 list-inside list-decimal space-y-1 mt-6">
                        <li>
                            <strong>Escolhe a opção ticket da referida agência</strong>
                            <div className="mt-6 mb-4">
                                <img src="/agencia/ticket/img1.png" alt=" Ticket e TimeLine da cada agência" className="w-full h-auto max-w-full" />
                            </div>
                        </li>
                        <li>
                            <strong>Clicando em “Info do ticket” de qual senha pretende visualizar as suas informações.</strong>
                            <div className="mt-6 mb-4">
                                <img src="/agencia/ticket/img2.png" alt="Visualização das senhas impressas" className="w-full h-auto max-w-full" />
                                <img src="/agencia/ticket/img3.png" alt=" Todas as informações relacionadas ao ticket" />
                            </div>
                        </li>
                    </ul>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-3 mt-6">TimeLine da agência</h2>
                    <div className="mt-6 mb-4">
                        <img src="/agencia/ticket/img4.png" alt=" Ticket e TimeLine da cada agência" className="w-full h-auto max-w-full" />
                    </div>
                    <p className="text leading-relaxed"> Clicando nessa opção segue uma página com todos os registos de acesso de cada utilizador durante o dia da respetiva agência no sistema e outras tarefas.</p>
                    <div className="mt-6 mb-4">
                        <img src="/agencia/ticket/img5.png" alt=" Ticket e TimeLine da cada agência" className="w-full h-auto max-w-full" />
                    </div>
                    <h2 className="text-2xl font-semibold mb-3 mt-6">Balcão na Agência</h2>
                    <div className="mt-6 mb-4">
                        <img src="/agencia/ticket/img6.png" alt="Ícone de Balcão da Agência" className="w-full h-auto max-w-full" />
                    </div>
                    <p className="text leading-relaxed"> Para atribuir um <b>Novo Balcão</b> na agência, o utilizador deverá clicar em “<b>Adicionar</b>” situada no canto superior direito da secção.</p>
                    <div className="mt-6 mb-4">
                        <img src="/agencia/ticket/img77.png" alt="Visualizar Balcão da Agência" className="w-full h-auto max-w-full" />
                    </div>
                    <p className="text leading-relaxed"> Para atribuir o balcão, o utilizador deverá informar o nome de balcão, estado do balcão,selecionar obrigatoriamente o serviçofornecido atribuído ao balcão pretendida. Para
                        confirmar atribuição, o utilizador deve clicar no botão “<b>Adicionar</b>”.</p>
                    <div className="mt-6 mb-4">
                        <img src="/agencia/ticket/img7.png" alt="Formulário para adicionar novo Balcão de Atendimento na Agência" className="w-full h-auto max-w-full" />
                    </div>


                    <h2 className="text-2xl font-semibold mb-3 mt-6"> Adicionar um Operador a um Balcão</h2>
                    <ul className="mb-4 list-inside list-decimal space-y-1 mt-6">
                        <li>
                            O utilizador/funcionário tem de ser registado no sistema primeiro.
                            <div className="mt-6 mb-4">
                                <img src="/agencia/ticket/img8.png" alt="Página de Utilizadores" className="w-full h-auto max-w-full" />
                            </div>
                        </li>
                        <li>
                            Depois de adicionar utilizador, no menu lateral “<b>Agência</b>” click no ícone
                            [<b>Trabalhadores</b>] conforme segue no referido figura abaixo.
                            <div className="mt-6 mb-4">
                                <img src="/agencia/ticket/img9.png" alt="Agência ícone Trabalhadores" className="w-full h-auto max-w-full" />
                            </div>
                        </li>
                        <li>
                            Em Adicionar abra um formulário
                            <div className="mt-6 mb-4">
                                <img src="/agencia/ticket/img10.png" alt=" Formulário de registo de Funcionários" className="w-full h-auto max-w-full" />
                            </div>
                            <p className="mb-4">Escolha o utilizador e o cargo referido após click no botão [<b>Adicionar</b>] que irá gravar os dados e o [<b>Cancelar</b>] descarta os dados informados.</p>
                        </li>
                        <li>
                            Após o registo de utilizador na agência volta novamente ao menu lateral
                            “<b>Agência</b>” para adicionar esse utilizador no seu balcão específico.
                            <div className="mt-6 mb-4">
                                <img src="/agencia/ticket/img11.png" alt="Página de Agência ícone Balcão" className="w-full h-auto max-w-full" />
                            </div>
                            <p> Clica no ícone [<b>Balcões</b>] e segue uma tela</p>
                            <div className="mt-6 mb-4">
                                <img src="/agencia/ticket/img12.png" alt="Página de Agência ícone Balcão" className="w-full h-auto max-w-full" />
                            </div>
                            <p>No ícone de [<b>Editar Operadores</b>], abre uma tela onde permite escolha qual operador
                            trabalha nesse balcão. Pode ser escolhido mais de que um utilizador/funcionário para
                            esse balcão.</p>
                            <div className="mt-6 mb-4">
                                <img src="/agencia/ticket/img13.png" alt="Página de Agência ícone Balcão" className="w-full h-auto max-w-full" />
                            </div>
                        </li>
                    </ul>
                </section>
                <section>
                <h2 className="text-2xl font-semibold mb-3 mt-6">Monitor da agência</h2>
                    <div className="mt-6 mb-4">
                        <img src="/agencia/ticket/img16.png" alt=" Ícone de Tela de Monitor da respetiva agência" className="w-full h-auto max-w-full" />
                    </div>
                    <p className="text leading-relaxed">A figura abaixo ilustra a tela onde permite os utentes acompanharem a sua vez quando for chamado uma senha.</p>
                    <div className="mt-6 mb-4">
                        <img src="/agencia/ticket/img17.png" alt=" Ticket e TimeLine da cada agência" className="w-full h-auto max-w-full" />
                    </div>
                    <h2 className="text-2xl font-semibold mb-3 mt-6"> Kiosk da agência</h2>
                    <div className="mt-6 mb-4">
                        <img src="/agencia/ticket/img15.png" alt="Ícone de Kiosk da respetiva agência" className="w-full h-auto max-w-full" />
                    </div>
                    <p className="text leading-relaxed">Na figura abaixo mostra a página que permite que os utentes emitem uma senha dos respetivo serviços que pretende efetuado na agência.</p>
                    <div className="mt-6 mb-4">
                        <img src="/agencia/ticket/img14.png" alt="Tela de Quiosque da agência" className="w-full h-auto max-w-full" />
                    </div>
                </section>
            </div>
        </div>
    );
}
