import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss"
import Logo from "../../assets/Tela Login/logo.png"
//import Reembolsos from "../reembolsos/Reembolsos";
//import Solicitacao from "../solicitacao/Solicitacao";

function Login (){

    const navigate =  useNavigate()

    const irParaReembolsos = () => {
        navigate("/reembolsos")
    }

    const irParaSolicitacao =() => {
        navigate("/solicitacao")
    }

    return (
        <main>
                <section className={styles.containerNavio}>
                </section>

        <section className={styles.containerForm}>

            <img src={Logo} alt="Logo Winson Sons" />
            <h1>Boas vindas ao Novo Portao SISPAR</h1>
            <p>Sistema de Emissão de Boletos e Parcelamento</p>

            <form action="">
                
                <input type="email" name="email" id="email" placeholder="Email" />
                <input type="password" name="senha" id="senha" placeholder="Senha" />

                <a href="">Esqueci minha senha</a>

                <div>
                <button onClick={irParaReembolsos} className={styles.buttonEntrar}> Entrar</button>

                <button  onClick={irParaSolicitacao} className={styles.buttonCriarconta}>Criar contar </button>  
                </div>
            
            </form>
        </section>
        </main>

    )
    
}

export default Login;