
import NavBar from "../navbar/NavBar.jsx"
import styles from "./Solicitacao.module.scss"
import Home from "../../assets/solicitacoes/homeHeader2.png"
import Seta from "../../assets/solicitacoes/Vector-seta.png"
function Solicitacao (){
    return (
        <div className={styles.layoutSolicitacao}>
        <NavBar/>

        <div className={styles.containerColicitacao}>

        <header className={styles.headerSolicitacao}>
            <img src={Home} alt="vetor home casinha" />
            <img src={Seta} alt="vetor seta" />
            <p>Reembolsos</p>
            <img src={Seta} alt="vetor seta" />
            <p>Solicitação Reembolsos</p>
        </header>

       
        <main className={styles.mainSolicitacao}>
        sfdfsdfsfdsf
        </main>  
        </div>
        

        </div> 
    );
}

export default Solicitacao