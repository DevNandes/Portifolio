import React, { Component } from "react";
import '../stylesheets/Qualificacoes.css';
import unisenaipr from '../imagens/unisenaipr.jpg';
import uninter from '../imagens/uninter.png';
import alura from '../imagens/alura-logo.svg';
import circuibras from '../imagens/Circuibras.png';
import certificado_alura from '../document/Certificado Alura.pdf'

export class Qualificacoes extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
        activeTab: "educacao", // define qual guia está ativa inicialmente
        };
    }
    
    esconderCursos() {
        const cursos = Array.from(
        document.querySelector(".container_qualificacoes").children
        );
        const cursoButton = Array.from(
        document.querySelector(".bloco_button").children
        );
    
        cursos.forEach((curso) => {
        curso.style.display = "none";
        });
        cursoButton.forEach((button) => {
        button.classList.remove("ativo");
        });
    }
    
    mostrarCurso(id) {
        this.esconderCursos();
    
        const cursos = Array.from(
        document.querySelector(".container_qualificacoes").children
        );
        const cursoButton = Array.from(
        document.querySelector(".bloco_button").children
        );
    
        cursos
        .filter((curso) => curso.getAttribute("id") === id)
        .forEach((curso) => {
            curso.style.display = "block";
        });
        cursoButton
        .filter((button) => button.getAttribute("data-id") === id)
        .forEach((button) => {
            button.classList.add("ativo");
        });
    
        this.setState({ activeTab: id });
    }

    render() {

        return(
            <section className="section_qualificacoes" id="qualificacoes">
                <div className="bloco_button">
                    <button
                        className={`button button_educacao educacao ${
                        this.state.activeTab === "educacao" ? "ativo" : ""
                        }`}
                        data-id="educacao"
                        aria-label="Qualificações"
                        onClick={() => this.mostrarCurso("educacao")}
                    >
                        <i className="fa-solid fa-award"></i> Qualificações
                    </button>
                    <button
                        className={`button button_work ${
                        this.state.activeTab === "work" ? "ativo" : ""
                        }`}
                        data-id="work"
                        aria-label="Trabalhos"
                        onClick={() => this.mostrarCurso("work")}
                    >
                        <i className="fa-solid fa-briefcase"></i> Trabalhos
                    </button>
                </div>
                <div className="container_qualificacoes">
                    <ul className="lista" id="educacao">
                        <li className="li rigth qualificacao_rigth">
                            <div className="header_qualificacoes">
                                <i className="fa-solid fa-graduation-cap icon"></i>
                                <img
                                src={unisenaipr}
                                alt="UniSenaiPR"
                                className="curso"
                                style={{ width: "15rem" }}
                                />
                            </div>
                            <p className="cargo">Engenharia de Software (Bacharelado)</p>
                            <p className="descricao">Atualmente estou cursando Engenharia de Software buscando, capacitação com a utilização de teorias, técnicas e ferramentas para a produção e desenvolvimento de sistemas.</p>
                            <p className="conclusao"><i className="fa-regular fa-calendar-days"></i> Em progresso</p>
                            <button className="button_certificado button-progresso" disabled>Em progresso</button>
                        </li>
                        <li className="li left qualificacao_left">
                            <div className="header_qualificacoes">
                                <i className="fa-solid fa-graduation-cap icon"></i>
                                <img src={uninter} alt="Uninter" className="curso facul"/>
                            </div>
                            <p className="cargo">Ciência de dados (Técnologo)</p>
                            <p className="descricao">Atualmente estou cursando Ciência de dados para agregar várias áreas de conhecimento, englobando estatísticas, inteligência artificial (IA), e áreas correlatas</p>
                            <p className="conclusao"><i className="fa-regular fa-calendar-days"></i> Em progresso</p>
                            <button className="button_certificado button-progresso" disabled>Em progresso</button>
                        </li>
                        <li className="li rigth qualificacao_rigth">
                            <div className="header_qualificacoes">
                                <i className="fa-solid fa-graduation-cap icon"></i>
                                <img src={alura} alt="Curso da alura" className="curso" />
                            </div>
                            <p className="cargo">Desenvolvimento Front-end</p>
                            <p className="descricao">Iniciei meus estudos como desenvolvedor front-end na alura, no qual eu aprendi a base e conceitos importantes. Nessa trajetória me aprofundei em tecnologias como HTML, CSS.</p>
                            <p className="conclusao"><i className="fa-regular fa-calendar-days"></i> 2023-2024</p>
                            <a href={certificado_alura} className="link" download="Certificado Alura" aria-label="Certificado Alura">
                                <button className="button_certificado true" aria-label="Visualizar certificado">Visualizar certificado</button>
                            </a>
                        </li>
                    </ul>
                    <ul className="lista lista_work" id="work">
                        <li className="li item-work">
                            <div className="header_qualificacoes">
                                <i className="fa-solid fa-briefcase icon"></i>
                                <img src={circuibras} alt="Circuibras Circuitos Impressos" className="curso circuibras" />
                            </div>
                            <p className="cargo">Atuo como Estagiario Desenvolvedor Full-Stack</p>
                            <p className="descricao">Elaboração de relatórios utilizando LaTeX para preparação de documentos;</p>
                            <p className="descricao">Desenvolvimento de interfaces web utilizando JavaScript, HTML e CSS para uso interno da empresa;</p>
                            <p className="descricao">Criação e manutenção de aplicações utilizando a biblioteca React para atender às necessidades internas;</p>
                            <p className="descricao">Desenvolvimento de API's em JavaScript e Python para integração de dados;</p>
                            <p className="descricao">Trabalho com bancos de dados MySQL para controle e gerenciamento dos dados do aplicativo interno;</p>
                            <p className="descricao">Utilização do git para gerenciamento de versionamento e controle de projetos;</p>
                            <p className="descricao">Utilização do Visual Studio Code como editor de código fonte.</p>
                            <p className="conclusao"><i className="fa-regular fa-calendar-days"></i> 2022 - Outubro / Atualmente ( 8 Meses de duração )</p>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}