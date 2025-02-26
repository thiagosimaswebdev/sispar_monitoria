import Home from "../../assets/Header/homeHeader.png"
import Seta from "../../assets/Header/Vector.png"
import solicitar from "../../assets/Dashboard/Solicitar - Reembolso.png"
import analise from "../../assets/Dashboard/Análises.png"
import historico from "../../assets/Dashboard/Solicitar - Histórico.png"
import numeroAnalise from "../../assets/Dashboard/N-Análises.png"
import numeroSolicitacoes from "../../assets/Dashboard/N-Solicitados.png"
import numeroAprovados from "../../assets/Dashboard/N-Aprovados.png"
import numeroRejeitados from "../../assets/Dashboard/N-Rejeitados.png"
import sistemaAtualizado from "../../assets/Dashboard/Sistema-atualizado.png"
import NavBar from "../navbar/NavBar.jsx"
import styles from "./Reembolsos.module.scss"


function Reembolsos (){
    return (

        <div className={styles.layoutReembolso}>
             <NavBar/>
        
        <div>
        <header>
            <img src={Home} alt="Icone casa header" />
            <img src={Seta} alt="Icone seta header" />
            <p>Reembolsos</p>
        </header>     
        
                
        
        <main className={styles.mainReembolso}>
            <div className={styles.divSistema}>
              <h1>Sistema de Reembolso</h1>
              <p>Solicite novos pedidos de reembolso, visualize solicitações em análise e todo o histórico.</p>      
            </div>
        

            <section className={styles.containerCards}> 
            <article>
                <img src={solicitar} alt="" />
                <h3>Solicitar Reembolso</h3>
            </article>

            <article>
                <img src={analise} alt="" />
                <h3>Verificar Análises</h3>
            </article>

            <article>
                <img src={historico} alt="" />
                <h3>Histórico</h3>
            </article>
            </section>

            <section className={styles.containerStatus}> 
            <div>
                <img className={styles.imgSolicitacoes} src={numeroSolicitacoes} alt="" />
                <h4>182</h4>
                <p>Solicitações</p>
            </div>

            <div>
                <img  className={styles.imgEmAnalise} src={numeroAnalise} alt="" />
                <h4>74</h4>
                <p>Em análise</p>
            </div>

            <div>
                <img className={styles.imgAprovados} src={numeroAprovados} alt="" />
                <h4>195</h4>
                <p>aprovados</p>
            </div>

            <div>
                <img className={styles.imgRejeitados} src={numeroRejeitados} alt="" />
                <h4>41</h4>
                <p>Rejeitados</p>
            </div>

            </section>

            <div className={styles.sistAtualizado}>
                <img src={sistemaAtualizado} alt="Icone sistema atualizado" />
                <p>Sistema atualizado.</p>
            </div>

        </main>
        </div>
        </div>
        
    )
}

export default Reembolsos