import '../stylesheets/Servicos.css'

export const Servicos = () => {

    return(
        <section className="section_servico" id="servicos">
            <header className="cabecalho_servico">
                <h2 className="titulo">Conheça quais são os meus <span className="destaque">serviços</span></h2>
                <p className="descricao">Metodologias que eu utilizo nos meus trabalhos.</p>
            </header>
            <div className="container_servico">
                <div className="bloco_servico">
                    <h3 className="titulo">Desenvolvimento Web</h3>
                    <p className="descricao">Um desenvolvimento focado na criação de sites, páginas únicas, E-commerce ou outras aplicações. Promovendo uma boa experiência e uma boa otimização do site.</p>
                </div>
                <div className="bloco_servico">
                    <h3 className="titulo">Desenvolvimento Responsivo</h3>
                    <p className="descricao">Aplicação web responsiva, disponível para todos os dispositivos móveis, tornando o site mais prático e acessível. Ou aplicações 100% mobile, como aplicativos.</p>
                </div>
                <div className="bloco_servico">
                    <h3 className="titulo">Experiência do usuário</h3>
                    <p className="descricao">Aplicações voltadas a um conjunto de elementos e fatores de um serviço, produto ou sistema que tem como objetivo promover uma boa experiência para o usuário.</p>
                </div>
            </div>
        </section>
    )
}