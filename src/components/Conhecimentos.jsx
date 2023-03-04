import '../stylesheets/Conhecimentos.css'

export const Conhecimentos = () => {

    return(
        <section className="section_tech" id="conhecimento">
            <h2 className="titulo_tech">Conhecimento</h2>
            <div className="container_tech">
                <div className="bloco_tech">
                    <i className="fa-brands fa-html5"></i>
                    <p className="nome_tech">Html 5</p>
                </div>
                <div className="bloco_tech">
                    <i className="fa-brands fa-css3-alt"></i>
                    <p className="nome_tech">Css 3</p>
                </div>
                <div className="bloco_tech">
                    <i className="fa-brands fa-bootstrap"></i>
                    <p className="nome_tech">BootStrap</p>
                </div>
                <div className="bloco_tech">
                    <i className="fa-brands fa-square-js"></i>
                    <p className="nome_tech">JavaScript</p>
                </div>
                <div className="bloco_tech">
                    <i className="fa-brands fa-react"></i>
                    <p className="nome_tech">React</p>
                </div>
                <div className="bloco_tech">
                    <i className="fa-brands fa-git"></i>
                    <p className="nome_tech">Git</p>
                </div>
                <div className="bloco_tech">
                    <i className="fa-brands fa-github"></i>
                    <p className="nome_tech">GitHub</p>
                </div>
            </div>
        </section>
    )
}