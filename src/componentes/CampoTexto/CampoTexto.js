import './CampoTexto.css'

const CampoTexto = (props) => {
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder='Digite seu nome'/>
        </div>
    )
}

export default CampoTexto;