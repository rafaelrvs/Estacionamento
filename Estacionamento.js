let modeloCadastro = document.getElementById('inputModelo-cadastro').value
let placaCadastro = document.getElementById('input-text-placa-cadastro').value
let timeCadastro = document.getElementById('time-cadastro').value
let listAuto = [];






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
    return false
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
    if(listAuto.includes(placa)){
      return true
    }
    else{
      alert("O automovel não esta estacionado ");
      return false
      
    }
 
  }
}
function estacionamentoAtivo(){


}
function register(){

  if(validateCadastroNull(modeloCadastro,placaCadastro)){
    alert('cadastro realizado')
  }
  
}

function validateCadastroNull(modeloCadastro, placaCadastro){
  if (modeloCadastro.length==0 || placaCadastro.length ==0) {
    alert('Por favor preencha todos os campos')
    
  }
  else{
    validateRegister();
    
   
  }
}
function validateRegister(placaCadastro){
  let mercosul = /^[A-Z]{3}\d{1}[A-Z]{1}\d{2}$|^[A-Z]{3}-\d{1}[A-Z]{1}\d{2}$/;
  let placa2 = /^[A-Z]{3}-?\d{4}$/;
  
  // Verifica se a placa corresponde à expressão regular
  if (mercosul.test(placaCadastro.toUpperCase())|| placa2.test(placaCadastro.toUpperCase())) {
    if(listAuto.includes(placaCadastro)){
      alert("O automovel já esta estacionado ");
      return false
    }
    else{
      return true
     
    }
  }
}