import CampoTexto from '../CampoTexto/CampoTexto'
import './Formulario.css'

const Formulario = () => {
    return (
        <section>
            <form>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTextoexto label="Imagem" placeholder="Digite o endereço da imagem" />
            </form>
        </section>
    )
}

export default Formulario