// Expressão regular para placas no formato Mercosul: AAA1A23
let regexMercosul = /^[A-Z]{3}\d[A-Z]{1}\d{2}$/;

// Expressão regular para placas no formato cinza: AAA-1234
let regexCinza = /^[A-Z]{3}-\d{4}$/;



function login(){
}
function registerInit(){
  
  let placa = document.getElementById("placa-cadastro").value;
  let modelo = document.getElementById('modelo-cadastro').value;
  let tempo = document.getElementById('tempo-cadastro').value;
  if(validate(placa,modelo,tempo)){
    alert('ok')
    window.location.href='/index.html'
    
  }
  else{
    alert('placa invalida')
  }
 
}

function validate(placa, modelo,tempo) {
  
  
  
  if (placa.length==0 ||tempo.length==0|| modelo.length ==0) {
    alert('Por favor preencha todos os campos')
    if(placa){

      return false
    }
    
  }
  else{
    return true
  }
}

