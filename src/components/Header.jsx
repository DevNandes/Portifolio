import React from 'react';
import '../stylesheets/Header.css'
import logo_full from '../imagens/logo_full.png'

export const Header = () => {

    const [menuOpen, setMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    
    return(
        <header className="header">
            <div className="container_header">
            <a href="index.html" className="link" aria-label="link para página atual"><img src={logo_full} alt="Logo principal" className="logo_header" /></a>
            <nav className={`menu_header ${menuOpen ? "active": ""}`}>
                <button className="button_header" aria-expanded={menuOpen} aria-controls="menu" aria-haspopup="true" aria-label="Abrir menu" onClick={toggleMenu}><span className="menu_icone-header"></span></button>
                <ul className="list_header" role="menu">
                    <li className="iten_header"><a href="#principal" className="link_iten">Inicio</a></li>
                    <li className="iten_header"><a href="#sobre" className="link_iten">Sobre</a></li>
                    <li className="iten_header"><a href="#qualificacoes" className="link_iten">Qualificações</a></li>
                    <li className="iten_header"><a href="#servicos" className="link_iten">Serviços</a></li>
                    <li className="iten_header"><a href="#conhecimento" className="link_iten">Conhecimento</a></li>
                    <li className="iten_header"><a href="#projeto" className="link_iten">Projetos</a></li>
                    <li className="iten_header"><a href="#contato" className="link_iten">Contato</a></li>
                </ul>
            </nav>
            </div>
        </header>
    )
}