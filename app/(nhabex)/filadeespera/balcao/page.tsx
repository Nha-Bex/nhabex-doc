export default function Documentation() {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-3xl mx-auto bg-white p-8 shadow-md rounded-lg">
                {/* <h1 className="text-4xl font-bold mb-6 text-center text-[#3CBDA1]">Fila de Espera</h1> */}

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-3 "> Acesso ao Posto de Atendimento
                    </h2>
                    <p className="text leading-relaxed">
                        Para acessar o sistema primeiro precisa ter acesso a Internet, abrir extensão que
                        foi adicionado no Navegador Chrome com o auxiliar de uma pesquisa realizado
                        no menu Iniciar do Windows e logo abri para ter acesso a Tela Login, com a
                        credencial de acesso, poderá ter acesso ao sistema.

                    </p>
                    <div className="mt-6">
                        <img
                            src="/installation/login.png"
                            alt="Exemplo de imagem"
                            className="w-full h-auto"
                        />
                    </div>
                    <h2 className="text-2xl font-semibold mb-3 mt-6 "> Menu Incial
                    </h2>
                    <p className="text leading-relaxed">
                        Depois de efetuar o login, terá acesso ao sistema. Com o menu inicial terás
                        acesso as funcionalidades do <b>sistema</b>. <br></br>
                        Para acessar ao menu <b>balcão</b>, o utilizador tem de escolher <b>Meus Balcão</b> no separador que fica no canto superior esquerdo, conforme ilustrado na figura
                        abaixo.

                    </p>
                    <div className="mt-6">
                        <img
                            src="/balcao/img1.png"
                            alt="Exemplo de imagem"
                            className="w-full h-auto"
                        />
                    </div>
                    <h2 className="text-2xl font-semibold mb-3 mt-6 "> Tela Editar Perfil
                    </h2>
                    <p className="text leading-relaxed">
                        No menu de <b>Início</b> o utilizador terá o acesso rápido ao <b>Perfil</b>, <b>Notificações</b>,
                        <b>Mensagens</b> e <b>Editar Perfil</b>.

                    </p>
                    <div className="mt-6">
                        <img
                            src="/balcao/img2.png"
                            alt="Exemplo de imagem"
                            className="w-full h-auto"
                        />
                    </div>
                    <p className="text leading-relaxed mt-6">
                        Clicando em <b>Editar Perfil</b>, o utilizador terá acesso aos dados do seu perfil.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-3">Menu Posto de Atendimento</h2>
                    <p className="text-gray-700">O sistema permite uma nova forma de apresentar os balcões de atendedores de forma mais bem estruturado. Para esse efeito um operador só pode ter acesso a um balcão após escolher qual agência pretende ter acesso ao balcão de atendimento.</p>
                    <div className="mt-6">
                        <img
                            src="/balcao/img3.png"
                            alt="Exemplo de imagem"
                            className="w-full h-auto"
                        />
                    </div>
                    <p className="mt-4"> Escolhendo uma agência, segue uma página de <b>Posto de Atendimento</b> para cada agência. </p>

                    <div className="mt-6">
                        <img src="/balcao/img4.png" alt="" />
                    </div>
                    <section className="mb-8 mt-6">
                        <h2 className="text-2xl font-semibold mb-3">Mais opções:</h2>
                        <p className="mt-4">Total da senha que estão <b>Em Espera</b> no momento para serem atendidas. </p>

                        <div className="mt-6">
                            <img src="/balcao/img5.png" alt="" />
                            <div className="mt-6">
                                <img src="/balcao/img.png" alt="" />
                            </div>
                        </div>
                        <div className="mt-6">
                            <img src="/balcao/img6.png" alt="" />
                        </div>
                        <p className="mt-4">Total das senhas que já foram <b>atendidas</b> no momento </p>

                        <div className="mt-6">
                            <img src="/balcao/img7.png" alt="" />
                        </div>
                        <p className="mt-4">Total de senhas que <b>não foram atendidos</b>, ou seja, desistiram do atendimento. <br></br> Se um utente não conseguir chegar a tempo de ser atendido, mais estiver dentro do período de tolerância, o cliente pode reclamar sua vez diretamente no operador e o mesmo permitir ver no “<b>Desistidos</b>”. </p>
                        <p>Ao clicar nessa opção logo o operador consegue visualizar as três últimas
                            senhas não atendidas e pode reclamar novamente caso seja necessário.
                        </p>
                        <div className="mt-6">
                            <img src="/balcao/img8.png" alt="" />
                        </div>

                        <div className="mt-6">
                            <img src="/balcao/img9.png" alt="" />
                        </div>
                        <p className="mt-4">Senha que foi redirecionado para o seu posto.
                        </p>

                        <div className="mt-6">
                            <img src="/balcao/img10.png" alt="" />
                        </div>
                        <p className="mt-4">Quantidade das anotações que foram efetuadas durante o atendimento das senhas.
                        </p>
                        <div className="mt-6">
                            <img src="/balcao/img11.png" alt="" />
                        </div>
                        <p className="mt-4">Quantidade das anotações que foram efetuadas durante o atendimento das senhas.
                        </p>

                    </section>
                    {/* <section className="mb-8">
                        <h2 className="mt-7 text-2xl font-semibold mb-3">Vídeo Demonstrativo</h2>
                        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src="https://www.youtube.com/embed/s6Xk66ibZ-Y"
                                title="Vídeo do YouTube"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                sandbox="allow-same-origin allow-scripts allow-popups"
                            ></iframe>
                        </div>
                    </section> */}
                </section>

            </div>
        </div>
    );
}

