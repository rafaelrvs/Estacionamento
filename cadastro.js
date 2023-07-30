import {EstacionamentoDeAutomovel} from "./EstacionamentoDeAutomovel.js";

const btnCadastro = document.querySelector("#btn-cadastro")


btnCadastro.addEventListener("click", () => {
  cadastrandoAutomovel()
});


function cadastrandoAutomovel(){
  
  const novoModelo = document.querySelector("#modelo-cadastro").value;
  const novoTempo = document.querySelector("#tempo-cadastro").value;
  const novaPlaca = document.querySelector("#placa-cadastro").value;
  const novoCliente = new EstacionamentoDeAutomovel();
  novoCliente.placa = novaPlaca
  novoCliente.modelo = novoModelo
  novoCliente.tempo = novoTempo
  // Converter o objeto em uma string JSON
  const clienteString = JSON.stringify(novoCliente);
  
  // Armazenar o objeto no localStorage
  localStorage.setItem("cliente", clienteString);
  console.log(localStorage)
}
