import './CampoTexto.css'

const CampoTexto = () => {
    return (
        <div className="campo-texto">
            <label>Nome</label>
            <input placeholder='Digite seu nome'/>

            <label>Cargo</label>
            <input placeholder='Digite seu cargo'/>

            <label>Imagem</label>
            <input placeholder='Informe o endereço de imagem'/>

            <label>Time</label>
            <input />
        </div>
    )
}

export default CampoTexto;