import '../stylesheets/SectionIni.css'

export const SectionIni = () => {
    return(
        <section className="section_main" id="principal">
            <div className="container_main">
                <p className="destaque_main referencia">“Medir o progresso da programação por linhas de código é como medir o progresso da construção de aeronaves em termos de peso.”</p>
                <p className="destaque_main"><span className="destaque">– Bill Gates</span></p>
                <h2 className="titulo_main">Olá, eu sou <span className="destaque">Raphael</span></h2>
                <p className="cargo_main">Desenvolvedor</p>
                <p className="descricao_main">Fico feliz em vê-lo (a) por aqui. Espero que aproveite o conteúdo e que eu possa te ajudar de alguma forma.</p>
                <a href="#sobre"><button className="button">Conhecer mais</button></a>
            </div>
            <nav className="navigation_main">
                <ul className="list_main">
                    <li className="iten_main"><a href="https://www.instagram.com/faellnandes/" target="_blank" rel="noreferrer" className="link"  aria-label="Visitar Instagram de Vinícius"><i className="fa-brands fa-instagram icons"></i></a></li>
                    <li className="iten_main"><a href="https://github.com/devnandes" target="_blank" rel="noreferrer" className="link"  aria-label="Visitar Github de Vinícius"><i className="fa-brands fa-github icons"></i></a></li>
                    <li className="iten_main"><a href="https://www.linkedin.com/in/raphael-augusto-almeida-fernandes/" target="_blank" rel="noreferrer" className="link"  aria-label="Visitar Linkedin de Vinícius"><i className="fa-brands fa-linkedin icons"></i></a></li>
                </ul>
            </nav>
        </section>
    )
}