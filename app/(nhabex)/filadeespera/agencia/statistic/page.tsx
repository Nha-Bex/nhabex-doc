"use client"

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
                    <h2 className="text-2xl font-semibold mb-3 mt-6">Dados Estatísticos de Agência</h2>
                    <div className="mt-6">
                        <img src="/agencia/statistic/img1.png" alt="Exemplo de imagem" className="w-full h-auto max-w-full" />
                    </div>
                    <p className="text leading-relaxed mt-6">
                        Cada agência possui sua estatística diária, mensal ou anual para que o administrador possa tomar as suas
                        decisões corretas.
                    </p>
                    <div className="mt-6">
                        <img src="/agencia/statistic/img2.png" alt="Exemplo de imagem" className="w-full h-auto" />
                    </div>
                </section>
            </div>
        </div>
    )
}

