
function openApp() {
  let modelo = document.getElementById('#inputModelo').value;
  let placa = document.getElementById('#input-text-placa').value;  
  
  if(validate(modelo, placa)) {
    console.log(placa)

}
}


function validate(modelo, placa){
    if (modelo.length==0 || placa.length ==0) {
      alert('Por favor preencha todos os campos')
      return false
    }
  
}