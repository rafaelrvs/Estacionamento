let modeloCadastro = document.getElementById('inputModelo-cadastro').value
let placaCadastro = document.getElementById('input-text-placa-cadastro').value
let timeCadastro = document.getElementById('time-cadastro').value
let dataAtual = new Date();
let horaAtual = dataAtual.getHours();
let minutosAtuais = dataAtual.getMinutes();
let segundosAtuais = dataAtual.getSeconds();


let estadia = timeCadastro - dataAtual; 



function openApp() {
  let modelo = document.getElementById('inputModelo').value;
  let placa = document.getElementById('input-text-placa').value;  
  
  if(validate(modelo, placa)) {
    alert('ok')
  }
  
}

function validate(modelo, placa){
  if (modelo.length==0 || placa.length ==0) {
    alert('Por favor preencha todos os campos')
    
  }
  else{
    validarPlaca(placa) 
  }
  
  
}

function validarPlaca(placa) {
  // Expressão regular para validar o formato AAA-1234
  let mercosul = /^[A-Z]{3}\d{1}[A-Z]{1}\d{2}$|^[A-Z]{3}-\d{1}[A-Z]{1}\d{2}$/;
  let placa2 = /^[A-Z]{3}-?\d{4}$/;

  // Verifica se a placa corresponde à expressão regular
  if (mercosul.test(placa.toUpperCase())|| placa2.test(placa.toUpperCase())) {
     estacionamentoAtivo();
  }
  else{
    alert('placa invalida')
  }
}
function estacionamentoAtivo(){


  
}
function gerarNumeroRandomico() {
  return Math.random();
}
function register(){
  alert(estadia)


}