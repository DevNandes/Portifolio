import '../stylesheets/Projetos.css'
import projeto1 from '../imagens/landing-page.png'
import projeto2 from '../imagens/toDo.png'
import projeto3 from '../imagens/pagina-de-cadastro.png'

export const Projetos = () => {

    return(
        <section className="section_projetos" id="projeto">
            <h2 className="titulo_projeto">Meus projetos</h2>
            <div className="container_projetos">
                <div className="card_projeto">
                    <img src={projeto1} alt="" className="imagem_fundo" />
                    <div className="card_descricao">
                        <h3 className="titulo_card">Landing-page</h3>
                        <nav className="card_nav">
                            <a href="#projeto" className="link" target="_blank" rel="noreferrer" aria-label="Abrir Github">
                                <button className="button github">Github</button></a>
                            <a href="https://landing-page-financeiro.netlify.app/" className="link" target="_blank" rel="noreferrer" aria-label="Abrir página">
                                <button className="button site">Site</button>
                            </a>
                        </nav>
                    </div>
                </div>
                <div className="card_projeto">
                    <img src={projeto2} alt="" className="imagem_fundo" />
                    <div className="card_descricao">
                        <h3 className="titulo_card">To-Do List</h3>
                        <nav className="card_nav">
                            <a href="#projeto" className="link" target="_blank" rel="noreferrer" aria-label="Abrir Github">
                                <button className="button github">Github</button></a>
                            <a href="https://listademetas.netlify.app/" className="link" target="_blank" rel="noreferrer" aria-label="Abrir página">
                                <button className="button site">Site</button>
                            </a>
                        </nav>
                    </div>
                </div>
                <div className="card_projeto">
                    <img src={projeto3} alt="" className="imagem_fundo" />
                    <div className="card_descricao">
                        <h3 className="titulo_card">Página de Cadastro</h3>
                        <nav className="card_nav">
                            <a href="#projeto" className="link" target="_blank" rel="noreferrer" aria-label="Abrir Github">
                                <button className="button github">Github</button></a>
                            <a href="https://pagina-de-cadastroof.netlify.app/" className="link" target="_blank" rel="noreferrer" aria-label="Abrir página">
                                <button className="button site">Site</button>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="container_button">
                <a href="https://github.com/devnandes" className="link" target="_blank" rel="noreferrer" aria-label="Abrir Github">
                    <button className="botao_github">Abrir Github</button>
                </a>
            </div>
        </section>
    )
}