import '../stylesheets/Contato.css'

export const Contato = () => {

    return(
        <section className="section_contato" id="contato">
            <header className="cabecalho_contato">
                <h2 className="titulo titulo_contato">Contato</h2>
                <p className="descricao descricao_contato">Você pode me enviar um email ou conversar diretamente através das minhas redes.</p>
            </header>
            <div className="lista_rede">
                <div className="item_rede">
                    <a href="https://www.linkedin.com/in/raphael-augusto-almeida-fernandes/" className="link" rel="noreferrer" target="_blank" aria-label="Abrir Linkedin de Vinícius">
                        <i className="fa-brands fa-linkedin icon"></i> Linkedin
                        <i className="fa-solid fa-check check"></i>
                    </a>
                </div>
                <div className="item_rede">
                    <a href="https://github.com/devnandes" className="link" rel="noreferrer" target="_blank"  aria-label="Abrir Github de Vinícius">
                        <i className="fa-brands fa-github icon"></i> Github
                        <i className="fa-solid fa-check check"></i>
                    </a>
                </div>
                <div className="item_rede">
                    <a href="https://www.instagram.com/faellnandes/" className="link" rel="noreferrer" target="_blank"  aria-label="Abrir Instagram de Vinícius">
                        <i className="fa-brands fa-instagram icon"></i> Instagram
                        <i className="fa-solid fa-check check"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}