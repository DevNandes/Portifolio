import '../stylesheets/TextDestaques.css'

export const TextDestaques = (props) => {

    return(
        <div className={props.class}>
            <p className="numero"><span className="destaque_numero">+</span> {props.number}</p>
            <p className="destaque_descricao">{props.text}</p>
        </div>
    )
}