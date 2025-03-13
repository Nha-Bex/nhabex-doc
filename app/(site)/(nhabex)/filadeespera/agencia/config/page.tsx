"use client";

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export default function Documentation() {
    const router = useRouter()

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-3xl mx-auto bg-white p-8 shadow-md rounded-lg">
            <button
                onClick={() => router.back()}
                className="fixed bottom-6 left-6 flex items-center gap-2 bg-[#3cbda1] px-4 py-3 rounded-full 
                shadow-xl hover:bg-[#2a8f7e] transition-all duration-200 text-white"
                style={{ zIndex: 1000 }}
            >
                <ArrowLeft className="h-5 w-5" />
                Voltar
            </button>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-3 mt-6">Configurações da Agência</h2>
                    <div className="mt-6">
                        <img src="/agencia/config/img1.png" alt="Ícone de Configurações da agência" className="w-full h-auto max-w-full" />
                    </div>
                    <p className="text leading-relaxed mt-6">
                        Nessa configuração da agência permite que, seja definido se quer que todos os serviços
                        apareçam na agência ou que seja personalizado, isto é, qual serviço deve ser visualizado
                        na agência.
                    </p>
                    <div className="mt-6">
                        <img src="/agencia/config/img2.png" alt="Exemplo de imagem" className="w-full h-auto" />
                    </div>
                    <p className="text leading-relaxed mt-6">Escolher a opção “<b>Todos</b>” vai permitir que todos os tipos de Utentes registados apareçam na agência independentemente. No caso de “<b>Personalizado</b>” deve selecionar quais Tipo de Utente deverá ser visualizado na agência.</p>
                    <div className="mt-6">
                        <img src="/agencia/config/img3.png" alt="Exemplo de imagem" className="w-full h-auto" />
                    </div>
                    <p className="text leading-relaxed mt-6">
                        No primeiro campo a opção de inserir números de <b>senhas com prioridade</b> que podem
                        ser chamadas antes de uma senha normal ser chamada.
                    </p>
                    <p className="text leading-relaxed mt-2">
                        No segundo campo é a quantas <b>senhas normais</b> podem ser chamadas depois de uma
                        senha prioritárias.
                    </p>
                    <p className="text leading-relaxed mt-2">
                        Se quiser que a prioridade esteja ativada na referida agência escolha “<b>Ativado</b>” para que
                        possa aparecer no dispensador e ser usado pelo utente ao ser impressa uma senha.
                    </p>
                    <div className="mt-6">
                        <img src="/agencia/config/img4.png" alt=" Configurações de Prioridade da senha na agência" />
                    </div>
                    <p className="mt-4">
                        O primeiro campo permite definir o limite de número de Bilhete em que pode ser
                        impressa por dia. Segundo “Mostrar” ou “Não Mostrar” imagem da agência em cada
                        bilhete impressa pelo utente.
                    </p>
                    <div className="mt-6">
                        <img src="/agencia/config/img5.png" alt="Configurações de Bilhete Impressa na agência" />
                    </div>
                    <p className="mt-4">
                        Para que uma agência funcione primeiro deve ser adicionado o Horário de
                        Funcionamento (Dia de semana e o Horário de início e término) de cada dia a que a
                        agência funcione.
                    </p>
                    <div className="mt-6">
                        <img src="/agencia/config/img6.png" alt="Configurações de Horário de Funcionamento da Agência" />
                    </div>
                    <p className="mt-4">
                        Para que uma agência funcione primeiro deve ser adicionado o Horário de
                        Funcionamento (Dia de semana e o Horário de início e término) de cada dia a que a
                        agência funcione.
                    </p>
                    <div className="mt-6">
                        <img src="/agencia/config/img6.png" alt="Configurações de Horário de Funcionamento da Agência" />
                    </div>
                    <p className="mt-4">
                        Para adicionar um <b>Horário de Funcionamento</b> da agência, o utilizador deverá
                        preencher o formulário que se segue abaixo com campos obrigatórios para o registo.
                    </p>
                    <div className="mt-6">
                        <img src="/agencia/config/img7.png" alt="Adicionar Horário de Funcionamento da Agência" />
                    </div>
                    <p className="mt-4">
                        Para eliminar um Horário de Funcionamento da agência, o utilizador deverá selecionar
                        apenas o dia de semana correspondente. Ao selecionar o utilizador deve clicar o botão
                        “<b>Eliminar</b>”. Depois de ter eliminado o dia de semana, suas atribuições não podem ser
                        recuperadas.
                    </p>
                    <div className="mt-6">
                        <img src="/agencia/config/img8.png" alt="Eliminar dia de semana do horário de funcionamento da Agência" />
                    </div>
                    <p className="mt-4">
                        Caso pretende “<b>Editar</b>” um dia de semana deve selecionar qual Dia de semana pretende
                        editar depois Hora de início, Hora de término e dar clicar novamente em “<b>Adicionar</b>”
                        no sistema edite o dia de semana selecionado.
                    </p>
                    <div className="mt-6">
                        <img src="/agencia/config/img9.png" alt="Adicionar Horário de Funcionamento da Agência" />
                    </div>
                    <p className="mt-4">
                        Podemos monitorar a situação da agência. O primeiro campo permite configurar o
                        estado do site da agência. No segundo campo, podemos ativar ou desativar o chatbot.
                        No terceiro campo, podemos determinar se a agência aceita ou não audiências. No
                        quarto campo, há a opção de desativar as senhas preferenciais para a agência. O quinto
                        campo permite escolher em qual agência queremos exibir as informações. No sexto
                        campo, podemos definir o uso ou não do QR Code. O último campo tem a opção de
                        mostrar a senha no quiosque caso a impressora esteja sem papel ou apresente
                        problemas.
                    </p>
                    <div className="mt-6">
                        <img src="/agencia/config/img10.png" alt="Adicionar Horário de Funcionamento da Agência" />
                    </div>

                </section>
            </div>
        </div>
    );
}
