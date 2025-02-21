import Fechar from "../../assets/Header NavBar/imagem-fechar-header.png"
import Perfil from "../../assets/Header NavBar/image.png"
import Home from "../../assets/Header NavBar/botão - Home.png"
import Solicitacao from "../../assets/Header NavBar/Botão - Reembolso.png"
import Pesquisa from "../../assets/Header NavBar/Botão - Pesquisa.png"
import Historico from "../../assets/Header NavBar/Botão - Histórico.png"
import Sair from "../../assets/Header NavBar/Botão - Sair.png"
import { useNavigate } from "react-router-dom"
import styles from "./NavBar.module.scss"

function NavBar(){

    const navigate = useNavigate();

    return(
        
       <div>
        
      <nav className={styles.navBarEstilo}>

            <button>
            <img src={Fechar} alt="Vetor de abrir e fechar" />
            </button>
            

            <section className={styles.sectionNavBar}>
                <img src={Perfil} alt="Vetor de perfil" />

                <div>

                    <button onClick={()=>{navigate("/reembolsos")}}><img src={Home} alt="Vetor de home" /></button>
                    <button onClick={()=>{navigate("/solicitacao")}}> <img src={Solicitacao} alt="Vetor solicitação" /></button>
                    <button className={styles.vetorPesquisa}><img src={Pesquisa} alt="Vetor pesquisa" /></button>
                    <button><img src={Historico} alt="Vetor historico" /></button>
                
                </div>
            </section>

            <button onClick={()=>{navigate("/")}} className={styles.botaoSair}>
                <img src={Sair} alt="Vetor Sair" />
            </button>
        </nav>

       </div>
    )
}

export default NavBar