import '../stylesheets/BotaoVoltar.css'

export const BotaoVoltar = () => {

    return(
        <a href="#principal" className="link"  aria-label="Voltar para o topo da página">
            <button className="botao_topo"><i className="fa-solid fa-angles-up icone"></i>Voltar ao topo</button>
        </a>
    )
}