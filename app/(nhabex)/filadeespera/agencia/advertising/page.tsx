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
                    <h2 className="text-2xl font-semibold mb-3 mt-6"> Avisos e Publicidade na Agência</h2>
                    <div className="mt-6">
                        <img src="/agencia/advertising/img1.png" alt=" Ícone de Avisos e publicidade" className="w-full h-auto max-w-full" />
                    </div>
                    <p className="text leading-relaxed">Para avisos e publicidade na agência o utilizador deve inserir os referidos dados do mesmo para cada agência.</p>
                    <div className="mt-6">
                        <img src="/agencia/advertising/img2.png" alt="  Avisos e publicidades da referida Agência" className="w-full h-auto max-w-full" />
                    </div>
                    <h2 className="text-2xl font-semibold mb-3 mt-6">Configuração de Áudio e Publicidade</h2>
                    <div className="mt-6">
                        <img src="/agencia/advertising/img3.png" alt="Configuração de Áudio e Publicidade" className="w-full h-auto max-w-full" />
                    </div>

                    <section className="mb-8">
                        <h2 className="mb-3 mt-8 text-2xl font-semibold"> Tipo de Monitor:</h2>
                        <ul className="mb-4 list-inside list-disc space-y-1">
                            <li>
                                <strong>Imagem</strong>-
                                imagem publicitarias inseridas no sistema para serem visualizadas no monitor.
                            </li>
                            <li>
                                <strong>Vídeos Youtube</strong>- o utilizador deverá escolher essa opção se foram inseridos link incorporado da lista de reprodução de youtube para serem visualizadas no monitor.
                            </li>
                            <li>
                                <strong>Vídeo Local</strong>- vídeo inseridos são gravados no sistema para serem apresentados no monitor para os utentes.
                            </li>
                        </ul>
                        <h2 className="mb-3 mt-8 text-2xl font-semibold"> Tipo  de Voz:</h2>
                        <ul className="mb-4 list-inside list-disc space-y-1">
                            <li>
                                <strong>Masculino </strong>- voz masculino em que possa ser ouvida no monitor quando as senhas forem chamadas.
                            </li>
                            <li>
                                <strong>Feminino</strong>-  voz feminino em que possa ser ouvida no monitor quando as senhas forem chamadas
                            </li>
                        </ul>
                        <h2 className="mb-3 mt-8 text-2xl font-semibold"> Aviso de Texto</h2>
                        <p> Para adicionar um novo Aviso de texto, o utilizador deverá clicar em “Adicionar -
                            Avisos” situada no canto superior direito da secção.</p>
                        <div className="mt-6">
                            <img src="/agencia/advertising/img4.png" alt=" Formulário de registo de Aviso de Texto" className="w-full h-auto max-w-full" />
                        </div>
                        <p className="text leading-relaxed"> O formulário que surge ao utilizador tem um conjunto de campos obrigatórios para o registo de
                            aviso de texto. Esses campos são:</p>
                        <ul className="mb-4 list-inside list-disc space-y-1">
                            <li>
                                Texto;
                            </li>
                            <li>
                                Data Início;
                            </li>
                            <li>
                                Data Fim.
                            </li>
                        </ul>
                        <p className="text leading-relaxed">Para guardar os dados inseridos e terminar o registo do aviso, o utilizador deverá clicar nobotao "<b>Adicionar</b>".</p>
                        <div className="mt-6">
                            <img src="/agencia/advertising/img5.png" alt="Formulário de registo de Imagem" className="w-full h-auto max-w-full" />
                        </div>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold mb-3 mt-6"> Imagem publicitários</h2>
                        <div className="mt-6">
                            <img src="/agencia/worker/img.png" alt="Adicionar Vídeo Publicitários na Agência" className="w-full h-auto max-w-full" />
                        </div>
                        {/* <h2 className="text-2xl font-semibold mb-3 mt-6">Vídeos publicitários</h2> */}
                        <div className="mt-6">
                            <img src="/agencia/advertising/img6.png" alt=" Vídeo Publicitários na Agência" className="w-full h-auto max-w-full" />
                        </div>
                        <p className="text leading-relaxed">Para adicionar um novo vídeo publicitário, o utilizador deverá clicar em “<b>Adicionar Vídeos</b>” situada no canto superior direito da secção.</p>
                        <p className="text leading-relaxed"> O formulário que surge ao utilizador tem um conjunto de campos obrigatórios para o
                            registo de aviso de texto. Esses campos são:</p>
                        <ul className="mb-4 list-inside list-disc space-y-1">
                            <li>
                                Escolher Imagem
                            </li>
                            <li>
                                Data Início;
                            </li>
                            <li>
                                Data Fim.
                            </li>
                            <li>
                                Moster.
                            </li>
                        </ul>
                        <p className="text leading-relaxed">  Para guardar os dados introduzidos e terminar o registo da imagem publicitários, o
                            utilizador deverá clicar no botão “<b>Adicionar</b>”.</p>
                        <div className="mt-6">
                            <img src="/agencia/worker/img.png" alt="Adicionar Vídeo Publicitários na Agência" className="w-full h-auto max-w-full" />
                        </div>
                    </section>
                </section>
            </div>
        </div>
    );
}