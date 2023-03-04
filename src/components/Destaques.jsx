import '../stylesheets/Destaques.css'

export const Destaques = () => {

    return(
        <section className="section_destaque">
            <div className="bloco_destaque bloco-left">
                <p className="numero"><span className="destaque_numero">+</span> 01</p>
                <p className="destaque_descricao">Ano de experiência como desenvolvedor</p>
            </div>
            <div className="bloco_destaque bloco-left">
                <p className="numero"><span className="destaque_numero">+</span> 07</p>
                <p className="destaque_descricao">Projetos pessoais e educativos concluídos</p>
            </div>
            <div className="bloco_destaque bloco-rigth">
                <p className="numero"><span className="destaque_numero">+</span> 01</p>
                <p className="destaque_descricao">Formação front-end concluída</p>
            </div>
            <div className="bloco_destaque bloco-rigth">
                <p className="numero"><span className="destaque_numero">+</span> 05</p>
                <p className="destaque_descricao">Cursos front-end concluídos</p>
            </div>
        </section>
    )
}