import '../stylesheets/ImageText.css'

export const ImageText = (props) =>{


    return(
            <div className="bloco_tech">
                <i className={props.class}></i>
                <p className="nome_tech">{props.name}</p>
            </div>
    )
}