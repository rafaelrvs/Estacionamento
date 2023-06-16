let listAuto = ['a','aaa1234'];

function openApp() {
  let modelo = document.getElementById('inputModelo').value;
  let placa = document.getElementById('input-text-placa').value;  
  
  if(validate(modelo, placa)) {
    listAuto.push(" Marca: "+modelo + " Placa: "+placa ); 
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
      estacionamentoAtivo()
    }
    else{
      alert("O automovel não esta estacionado ");
      
    }
    return true;
  } else {
    return false;
  }
}
function estacionamentoAtivo(){
 
}
