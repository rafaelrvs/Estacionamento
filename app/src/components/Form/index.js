import "./Form.css";
const Form =()=>{
  return(
    <div className="container__main__form">
      <div className="containerFormFundo">

      </div>
      <form id="form__container" action="">
        <label htmlFor="modelo">Modelo</label>
        <input id="modelo" type="text" placeholder="Digite o modelo" maxLength={30}/>
        <div className="placaEmodelo">
        <label htmlFor="placa">Placa</label>
        <input id="placa" type="text" placeholder="Digite a placa" maxLength={7} required/>
        </div>
        <div className="containerBtn">
           <input id="pesquisa" type="submit" value="Pesquisar"/>  
           <input id="cadastro" type="submit" value="Cadastrar"/>
        </div>
      </form>
    </div>
  )
}
export default Form