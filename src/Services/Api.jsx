//importa a biblioteca axios, que é usada para fazer requisições HTTP.

import axios from "axios";

//Criando a nossa instancia do axios, chamada 'api'
const api = axios.create({
    baseURL: "http://localhost:5000", //Define a url base para todas as requisições feitas com essa instancia
})

export default api; //serve para ativar a const criada