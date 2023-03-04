import React, { useState } from 'react';
import '../stylesheets/SectionSobre.css'
import foto_perfil from '../imagens/foto_perfil.jpeg'
import flecha_direita from '../imagens/arrow-rigth.png'
import cv_raphael from '../document/Raphael_Fernandes_CV.pdf'

export const SectionSobre = () => {
    
    const [text, setText] = useState('Copiar email');

    const handleClick = () => {
      navigator.clipboard.writeText('raphaelfernandes1607@gmail.com');
      setText('Email copiado');
  
      setTimeout(() => {
        setText('Copiar email');
      }, 3000);
    };

    return(
        <section className="section_sobre" id="sobre">
            <img src={foto_perfil} className="foto_perfil" alt="Foto de Raphael Fernandes" />
            <div className="container_sobre">
                <p className="texto_destaque"><img src={flecha_direita} className="arrow"  alt='flecha para a direita ">>"'/> DESENVOLVEDOR</p>
                <h3 className="titulo_sobre">Desenvolvedor com experiências em JavaScript, CSS, HTML e ReactJS</h3>
                <p className="descricao_sobre">Meu nome é Raphael, tenho 18 anos e atuo na área de desenvolvimento a mais de 1 ano. Possuo experiência como Desenvolvedor</p>
                <p className="descricao_sobre">Logo a baixo tem o meu currículo com informações mais detalhadas sobre mim. Se preferir, podemos marcar uma reunião atráves do meu e-mail que está disponibilizado abaixo.</p>
                <div className="container_button">
                    <a href={cv_raphael} download="Raphael_Fernandes_CV" aria-label="Baixar curriculo de Raphael" className="link">
                        <button className="button_cv">Baixar CV <i className="fa-solid fa-download"></i></button>
                    </a>
                    <button className="button_email botaoCopiar" onClick={handleClick}>{text}</button>
                </div>
            </div>
        </section>
    )
}