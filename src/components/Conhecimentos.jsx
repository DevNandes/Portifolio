import '../stylesheets/Conhecimentos.css'
import { ImageText } from './ImageText'

export const Conhecimentos = () => {

    return(
        <section className="section_tech" id="conhecimento">
            <h2 className="titulo_tech">Conhecimento</h2>
            <div className="container_tech">
                <ImageText class='fa-brands fa-html5' name='HTML 5'/>
                <ImageText class='fa-brands fa-css3-alt' name='Css 3' />
                <ImageText class='fa-brands fa-bootstrap' name='BootStrap' />
                <ImageText class='fa-brands fa-square-js' name='JavaScript' />
                <ImageText class='fa-brands fa-react' name='React' />
                <ImageText class='fa-brands fa-git' name='git' />
                <ImageText class='fa-brands fa-github' name='GitHub' />
                <ImageText class='fa-brands fa-sql' name='SQL' />
                <ImageText class='fa-brands fa-python' name='Python' />
            </div>
        </section>
    )
}