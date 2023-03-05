import '../stylesheets/Destaques.css'
import { TextDestaques } from './TextDestaques'

export const Destaques = () => {

    return(
        <section className="section_destaque">
            <TextDestaques class='bloco_destaque bloco-left' text='Ano de experiência como desenvolvedor' number='01' />
            <TextDestaques class='bloco_destaque bloco-left' text='Projetos pessoais e educativos concluídos' number='07' />
            <TextDestaques class='bloco_destaque bloco-rigth' text='Formação front-end concluída' number='01' />
            <TextDestaques class='bloco_destaque bloco-rigth' text='Cursos front-end concluídos' number='05' />
        </section>
    )
}