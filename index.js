const btnLogin = document.querySelector("#btn")

btnLogin.addEventListener("click", () => {
  console.log(localStorage)
  const codigo = document.querySelector("#text-input").value
  if(validacao(codigo)){
    alert('existe')
  }
  else{
    alert('Não existe')
  }
})
function validacao(codigo){
  if(localStorage.getItem(codigo) ) {
    return true
  }
  else{
    return false
  }
}

