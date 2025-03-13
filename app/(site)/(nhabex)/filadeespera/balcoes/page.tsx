"use client";

export default function Documentation() {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-3xl mx-auto bg-white p-8 shadow-md rounded-lg">
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-3">Meus Balcões</h2>
                    <p className="text leading-relaxed"> Para aceder à secção correspondente às tarefas relacionadas com os dados do balcão, o utilizador deverá aceder à opção “<b>Meus Balcões</b>” no menu lateral:
                    </p>
                    <div className="mt-6">
                        <img src="/balcoes/img1.png" alt="Sessão de Meus Balcões" className="w-full h-auto max-w-full" />
                    </div>

                    <p className="mt-6">
                        O sistema permite uma nova forma de apresenta os balcões de atendedores de forma
                        mais bem agrupado. Para esse efeito um trabalhador só pode ter acesso a um balcão
                        após escolher qual agência pretende ter acesso ao balcão de atendimento.
                    </p>
                    <div className="mt-6">
                        <img src="/balcoes/img2.png" alt="Opções de Manejar Balcão" className="w-full h-auto" />
                    </div>
                </section>
            </div>
        </div>
    );
}
