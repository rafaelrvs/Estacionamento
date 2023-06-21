let modeloCadastro = document.getElementById('inputModelo-cadastro').value
let placaCadastro = document.getElementById('input-text-placa-cadastro').value
let timeCadastro = document.getElementById('time-cadastro').value
const{client} = require('pg')

const client = new Client({
  user:'postgres',
  host:'localhost',
  database:'Estacionamento',
  password:'*******',
  port:****,
});

clien.connect().then(()=>{
  console.log('conexão ok')
  return client.query('SELECT * FROM ')
})





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