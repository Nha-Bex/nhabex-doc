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
                    <h2 className="text-2xl font-semibold mb-3 mt-6">Adicionar Trabalhador na Agência</h2>
                    <p className="text leading-relaxed">Essa opção permite que seja adicionado cada trabalhador na agência a que este trabalha.</p>
                    <div className="mt-6">
                        <img src="/agencia/workers/img.png" alt="Exemplo de imagem" className="w-full h-auto max-w-full" />
                    </div>
                    <p className="text leading-relaxed">
                        Para adicionar uma novo Funcionário na agência, o utilizador deverá clicar em
                        “<b>Adicionar</b>” situada no canto superior direito da secção.
                    </p>
                    <div className="mt-6">
                        <img src="/agencia/workers/img1.png" alt="Exemplo de imagem" className="w-full h-auto" />
                    </div>
                    <p className="mt-4 bg-[#3CBDA1] border-l-4 border-[#2a8f7e] p-4 rounded flex items-center text-white">
                        <span className="ml-2">O formulário que surge com conjunto de todos os utilizadores do sistema para serem adicionados na referida agência. Para adicionar os trabalhadores devem selecionar quais
                            utilizadores e cargo do respetivo, após clicar no botão [Adicionar] para serem gravados no
                            sistema.
                        </span>
                    </p>

                    <h2 className="text-2xl font-semibold mb-3 mt-6">Visualizar performance do Trabalhador no Atendimento</h2>
                    <p className="mt-4">
                        No menu lateral “<b>Agência</b>” depois clique o ícone [<b>Trabalhadores</b>] e segue uma tela de
                        trabalhadores da agência.
                    </p>
                    <div className="mt-6">
                        <img src="/agencia/workers/img2.png" alt="" />
                    </div>
                    <p className="mt-4">
                        Para visualizar performance de um Trabalhador na agência, o utilizador deverá clicar no
                        ícone “<b>Performance</b>”.
                    </p>
                    <div className="mt-6">
                        <img src="/agencia/workers/img3.png" alt="" />
                    </div>
                    <p className="mt-4">
                        Ao clicar no ícone “<b>Performance</b>”, surge uma página ao utilizador onde apresenta a
                        performance desse funcionário.
                    </p>
                    <div className="mt-6">
                        <img src="/agencia/workers/img4.png" alt="" />
                    </div>
                </section>
            </div>
        </div>
    );
}
