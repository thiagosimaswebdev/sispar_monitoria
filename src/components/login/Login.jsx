import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss"
import Logo from "../../assets/Tela Login/logo.png"
//import Reembolsos from "../reembolsos/Reembolsos";
//import Solicitacao from "../solicitacao/Solicitacao";
import api from "../../Services/Api";
import { useState } from "react";

function Login (){

    const navigate =  useNavigate()

    const irParaReembolsos = () => {
        navigate("/reembolsos")
    }

    const irParaSolicitacao =() => {
        navigate("/solicitacao")
    }

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const fazerLogin = async (e) => {
        e.prevenDefault()

        try{

            const resposta = await api.post("/colaborador/login", {
                "email": email,
                "senha": senha
            })
            console.log(resposta.data)

        }catch(error){
            console.log("Erro ao fazer Login: ", error)
            alert("Erro no login aqui ó!")
        }
    }

    return (
        <main>
                <section className={styles.containerNavio}>
                </section>

        <section className={styles.containerForm}>

            <img src={Logo} alt="Logo Winson Sons" />
            <h1>Boas vindas ao Novo Portao SISPAR</h1>
            <p>Sistema de Emissão de Boletos e Parcelamento</p>

            <form className={styles.formLogin}>
                
                <input value={email} type="email" name="email" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

                <input type="password" name="senha" id="senha" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)}  />

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