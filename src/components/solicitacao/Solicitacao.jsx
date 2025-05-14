
import NavBar from "../navbar/NavBar.jsx"
import styles from "./Solicitacao.module.scss"
import Home from "../../assets/solicitacoes/homeHeader2.png"
import Seta from "../../assets/solicitacoes/Vector-seta.png"
import Lixeira from "../../assets/solicitacoes/lixeira.png"
import Motivo from "../../assets/solicitacoes/motivo.png"
import { useState, useEffect } from "react";
import Api from "../../Services/Api.jsx";

function Solicitacao (){

  const [colaborador, setColaborador] = useState(""); // Estado para o campo colaborador
  const [empresa, setEmpresa] = useState(""); // Estado para o campo empresa
  const [nPrestacao, setnPrestacao] = useState(""); // Estado para o campo número de prestação
  const [descricao, setDescricao] = useState(""); // Estado para o campo  descrição
  const [data, setData] = useState(""); // Estado para o campo data
  const [motivo, setMotivo] = useState(""); // Estado para o campo motivo  //ESSE ESTADO É PARA QUEM TÁ FAZENDO AVANÇADO UTILIZANDO MODAL
  const [tipoReembolso, setTipoReembolso] = useState(""); // Estado para o campo tipo de reembolso
  const [centroCusto, setCentroCusto] = useState(""); // Estado para o campo centro de custo
  const [ordemInterna, setOrdemInterna] = useState(""); // Estado para o campo ordem interna
  const [divisao, setDivisao] = useState(""); // Estado para o campo divisão
  const [pep, setPep] = useState(""); // Estado para o campo pep
  const [moeda, setMoeda] = useState(""); // Estado para o campo moeda
  const [distanciaKm, setDistanciaKm] = useState(""); // Estado para o campo distância km
  const [valorKm, setValorKm] = useState(""); // Estado para o campo valor km
  const [valorFaturado, setValorFaturado] = useState(""); // Estado para o campo valor faturado
  const [despesa, setDespesa] = useState(""); // Estado para o campo despesa


  const [dadosReembolso, setDadosReembolsos] = useState([]);

  //função para capturar os valores dos estados

  const handleSubmit = () => {

    const objetoReembolso = {
      colaborador,
      empresa,
      nPrestacao,
      descricao,
      data,
      tipoReembolso,
      ordemInterna,
      centroCusto,
      divisao,
      pep,
      moeda,
      distanciaKm,
      valorKm,
      valorFaturado,
      despesa
    };
    setDadosReembolsos( dadosReembolso.concat(objetoReembolso) );
    limparCampos();
  };

  const limparCampos = () => {
    setColaborador(""),
    setEmpresa(""),
    setnPrestacao(""),
    setDescricao(""),
    setData(""),
    setMotivo(""),
    setTipoReembolso(""),
    setCentroCusto(""),
    setorOrdemInterna(""),
    setDivisao(""),
    setPep(""),
    setMoeda(""),
    setDistanciaKm(""),
    setValorKm(""),
    setValorFaturado(""),
    setDespesa("");
  }

  // função para enviar os dados para api

  const [foiEnviado, setFoiEnviado] = useState(false)//esse estado serve para saber se o formulário foi enviado.

const enviarParaAnalise = async () => {

  try{
    //const response = O resultado da resposta do servidor
    // await (esperar) = faz com que o codigo espere a resposta da api
    // post = é o metodo que serve para enviar algo para o servidor
    //      1º argumento é o caminho da rota, 2º argumento é o que será enviado
  
    const response = await Api.post("/refunds/new", dadosReembolso)
    console.log("Resposta da API", response);// mostra no console a resposta da API. Util para os desenvolvedores testarem.
    alert("Reembolso solicitado com Sucesso!")
    setFoiEnviado(true)
    
  }catch(error){  //caso de erro na hora de enviar, ele mostra no console.
    console.log("Erro ao enviar", error);// mostra o erro se algo der errado

  }
};

useEffect(()=> {
if(foiEnviado){
  setDadosReembolsos([]);
  setFoiEnviado(false)
}

}, [foiEnviado] );

    return (
        <div className={styles.layoutSolicitacao}>
        <NavBar/>

        <div className={styles.containerPrincipalSolicitacao}>

        <header className={styles.headerSolicitacao}>
            <img src={Home} alt="vetor home casinha" />
            <img src={Seta} alt="vetor seta" />
            <p>Reembolsos</p>
            <img src={Seta} alt="vetor seta" />
            <p>Solicitação Reembolsos</p>
        </header>


        <main className={styles.mainSolicitacao}>
        <form onSubmit={(e) => e.preventDefault() }  className={styles.formSolicitacao}>

            <div className={styles.grupo1}>

                <div className={styles.inputNome}>
                    <label htmlFor="nome">Nome Completo</label>
                    <input value={colaborador} name="colaborador" type="text" onChange={(e) => setColaborador(e.target.value) } />
                </div>
            

            <div className={styles.inputEmpresa}>
                <label htmlFor="empresa">Empresa</label>
                <input value={empresa} name="empresa" type="text" onChange={(e) => setEmpresa(e.target.value) } />
            </div>

            <div className={styles.inputPrestacao}>
                <label htmlFor="prestacao">Nº Prest. Contas</label>
                <input value={nPrestacao} type="number"  name="nPrestacao" id="" onChange={(e) => setnPrestacao(e.target.value)}/>
            </div>

            <div className={styles.inputMotivo}>
                <label htmlFor="descricao">Descriçao / Motivo do Reembolso</label>
                <textarea name="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} id=""></textarea>
            </div>
            </div>

            <div className={styles.barraVertical}></div>

            {/* aqui pra baixo eu copiei e colei */}
            
            <div className={styles.grupo2}> 

        <div className={styles.inputData}>
          <label htmlFor="date">Data</label>
          <input value={data} type="date" name="data" onChange={(e) => setData(e.target.value)} />
        </div>

        <div className={styles.despesas}>
          <label htmlFor="tipoReembolso"> Tipo de Despesa</label>
          <select value={tipoReembolso} name="tipoReembolso" onChange={(e) => setTipoReembolso(e.target.value)}>
            <option value="selecionar">Selecionar</option>
            <option value="alimentacao">Alimentação</option>
            <option value="combustivel">Combustível</option>
            <option value="conducao">Condução</option>
            <option value="estacionamento">Estacionamento</option>
            <option value="viagem adm">Viagem Admin.</option>
            <option value="viagem oper">Viagem Operacional</option>
            <option value="eventos">Eventos de representação</option>
          </select>
        </div>

        <div className={styles.centroDeCusto}>
          <label htmlFor="centroCusto">Centro de Custo</label>
          <select value={centroCusto} name="centroCusto" onChange={(e) => setCentroCusto(e.target.value)}>
            <option value="">Selecionar</option>
            <option value="FIN CONTROLES INTERNOS MTZ">
              1100109002 - FIN CONTROLES INTERNOS MTZ
            </option>
            <option value="FIN VICE-PRESIDENCIA FINANCAS MTZ">
              1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ
            </option>
            <option value="FIN CONTABILIDADE MTZ">
              1100110101 - FIN CONTABILIDADE MTZ
            </option>
          </select>
        </div>

        <div className={styles.ordem}>
          <label htmlFor="ordemInterna">Ord. Int.</label>
          <input value={ordemInterna} type="text" name="ordemInterna" onChange={(e) => setOrdemInterna(e.target.value)} />
        </div>

        <div className={styles.divisoes}>
          <label htmlFor="divisao">Div.</label>
          <input value={divisao} type="text" name="divisao" onChange={(e) => setDivisao(e.target.value)} />
        </div>

        <div className={styles.pep}>
          <label htmlFor="pep">PEP</label>
          <input value={pep} type="text" name="pep" onChange={(e) => setPep(e.target.value)} />
        </div>

        <div className={styles.moeda}>
          <label htmlFor="moeda">Moeda</label>
          <select value={moeda} name="moeda" onChange={(e) => setMoeda(e.target.value)}>
            <option value="">Selecionar</option>
            <option value="BRL">BRL</option>
            <option value="ARS">ARS</option>
            <option value="USD">USD</option>
          </select>
        </div>

        <div className={styles.distancia}>
          <label htmlFor="distanciaKm">Dist / Km</label>
          <input type="text" name="distanciaKm" value={distanciaKm} onChange={(e) => setDistanciaKm(e.target.value)} />
        </div>

        <div className={styles.valorKm}>
          <label htmlFor="valorKm">Valor / Km</label>
          <input type="text" name="valorKm" value={valorKm} onChange={(e) => setValorKm(e.target.value)} />
        </div>

        <div className={styles.valorFaturado}>
          <label htmlFor="valorFaturado">Val. Faturado</label>
          <input type="number" name="valorFaturado" value={valorFaturado} onChange={(e) => setValorFaturado(e.target.value)} />
        </div>

        <div className={styles.despesa}>
          <label htmlFor="despesa">Despesa</label>
          <input type="number" name="despesa" value={despesa} onChange={(e) => setDespesa(e.target.value)} />
        </div>

        <div className={styles.botoes}>
          <button type="submit" onClick={handleSubmit} className={styles.botaoSalvar}>+ Salvar</button>
          <button type="button" onClick={limparCampos} className={styles.botaoDeletar}>Del</button>
        </div>
      </div>

          </form>

          {/* table é a tag principal que vai definir a tabela */}
          {/* thred é a tag que agrupa o cabeçalho */}
          {/* tr é a linha da tabela */}
          {/* th é o título da tabela, um para cada título. Ex: Nome - idade - cor - fruta */}
          {/* tbody é a tag que agrupa o corpo da tabela */}
          {/* td é a tag que representa uma célula */}

        <div className={styles.tabelaSolicitacao}>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Colaborador(a)</th>
                <th>Empresa</th>
                <th>Nº Prest.</th>
                <th>Data</th>
                <th>Motivo</th>
                <th>Tipo de despesa</th>
                <th>Ctr. Custo</th>
                <th>Ord. Int.</th>
                <th>Div.</th>
                <th>PEP</th>
                <th>Moeda</th>
                <th>Dist. Km</th>
                <th>Val. Km</th>
                <th>Val. Faturado</th>
                <th>Despesa</th>
              </tr>
            </thead>

            <tbody>
              {dadosReembolso.map((item, index) => (
                <tr key={index}>
                  <td><img src={Lixeira} alt="ícone da lixeira" /></td>
                  <td>{item.colaborador}</td>
                  <td>{item.empresa}</td>
                  <td>{item.nPrestacao}</td>
                  <td>{item.data}</td>
                  <td><img src={Motivo} alt="ícone motivo" /></td>
                  <td>{item.tipoReembolso}</td>
                  <td>{item.centroCusto}</td>
                  <td>{item.ordemInterna}</td>
                  <td>{item.divisao}</td>
                  <td>{item.pep}</td>
                  <td>{item.moeda}</td>
                  <td>{item.distanciaKm}</td>
                  <td>{item.valorKm}</td>
                  <td>{item.valorFaturado}</td>
                  <td>{item.despesa}</td>
                </tr>
              ))}
            </tbody>
          </table>          
        </div>


          
          <button className={styles.botaoEnviarAnalise} onClick={enviarParaAnalise}>Enviar para análise</button>
        </main>  
        </div>
        

        </div> 
    );
}

export default Solicitacao;

//PASSO A PASSO

//1º ESTRUTURAMOS OS INPUTS

//2º GUARDAMOS CADA INPUT EM UM ESTADO, UTILIZANDO O HOOK USESTATE, SINTAXE: const [estado, setEstado] = useState("")

//3º PARA CADA VALUE="" DO INPUT, COLOCAR O ESTADO. EX: value="colaborador" E TAMBÉM UTILIZAMOS O EVENTO ONCHANGE, QUE É UM EVENTO NO REACT QUE DISPARA O QUANDO O VALOR DE UM CAMPO MUDA. EX: value="colaborador" onChange={(e) => setColaborador(e.target.value)}

//onchange: Esse é um evento do React que escuta qualquer mudança no campo (como digitar num input ou escolher uma opção num select).
//(e) => ... Aqui estamos usando uma arrow function que recebe o evento (e) como argumento. Esse 'e' representa o evento que foi disparado quando o valor do input mudou.
//e.target se refere ao próprio elemento input.
//.value é o valor digitado pelo usuário.

//Resumindo: Captura o novo valor e atualiza o estado colaborador com esse valor.

//4º CRIA A ESTRUTURA DA TABELA FORA DA TAG FORM, ELA RECEBERÁ OS DADOS ADICIONADOS NOS INPUTS

//5º ESSAS INFORMAÇÕES VÃO PRECISAR SER ARMAZENADAS EM ALGUM LUGAR, ENTÃO PRECISAMOS CRIAR UM ARRAY VAZIO PARA RECEBER ESSES DADOS.  const [dadosReembolso, setDadosReembolso] = useState([]);

//6º COM A ARRAY VAZIA, PRECISAMOS DE UMA FUNÇÃO PARA CAPTURAR OS VALORES DOS ESTADOS

//7º FUNÇÃO PARA CAPTURAR OS VALORES DOS ESTADOS (HANDLESUBMIT)
// Essa função captura os valores dos estados, coloca eles organizados em objetos que serão adicionados no array dadosReembolso para serem exibidos no map
// Função que é chamada quando o formulário é enviado
//Ela será ativada no botão enviar, e armazenada na tabela, que já vamos criar.

/* 8º map transformar cada item dessa lista em algo novo, sem mudar a lista original. O map é uma função que faz isso pra você!
dadosReembolso: é o array, a lista que vai mostrar.
item: é cada elemento da lista, um por um. 
index: é a posição do item na lista. Ex: 0, 1 ...
        
key={index} : é uma exigência do React para identificar cada elemento único na renderização (evita bugs e deixa o React mais rápido).
key:  é uma identificação única que o React usa pra saber qual item
index: número da posição do item
*/

//9º  PREVINIR O CARREGAMENTO DA PÁGINA AUTOMATICAMENTE
// onSubmit:  É um evento que dispara quando você clica no botão de “Enviar”
// (e) => e.preventDefault():Essa é uma função que bloqueia o comportamento padrão do formulário.

/* OBS: Em HTML puro, quando você envia um <form>, ele recarrega a página automaticamente.
Só que no React a gente não quer que isso aconteça, porque a gente controla tudo com JavaScript e hooks (useState, useEffect, etc).
Por isso, usamos e.preventDefault() pra impedir o recarregamento da página. */