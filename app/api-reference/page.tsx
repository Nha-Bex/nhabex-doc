export default function Support() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg text-center">
        <h1 className="text-5xl font-bold mb-6 text-[#3CBDA1]">Suporte - NhaBex</h1>
        <p className="text-gray-700 leading-relaxed text-lg mb-6">
          Precisa de ajuda? Entre em contato com nossa equipe de suporte para resolver qualquer dúvida ou problema.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-gray-200 p-4 hover:bg-[#3CBDA1] rounded-lg">
            <h2 className="text-2xl font-semibold">Email</h2>
            <p className="text-gray-700">Envie um e-mail para suporte@nhabex.com</p>
          </div>
          <div className="bg-gray-200 p-4 hover:bg-[#3CBDA1] rounded-lg">
            <h2 className="text-2xl font-semibold">Telefone</h2>
            <p className="text-gray-700">+238 983 77 73</p>
          </div>
          <div className="bg-gray-200  hover:bg-[#3CBDA1] p-4 rounded-lg">
            <h2 className="text-2xl font-semibold">Chat ao Vivo</h2>
            <p className="text-gray-700">Acesse nosso chat ao vivo no site</p>
          </div>
          <div className="bg-gray-200 hover:bg-[#3CBDA1] p-4 rounded-lg">
            <h2 className="text-2xl font-semibold">Central de Ajuda</h2>
            <p className="text-gray-700">Confira nossos artigos e tutoriais</p>
          </div>
        </div>
        <p className="text-gray-700 mt-6">
          Nossa equipe está disponível de segunda a sexta-feira, das 08h às 18h.
        </p>
      </div>
    </div>
  );
}
