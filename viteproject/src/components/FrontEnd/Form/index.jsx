//______________________ component responsible for the form
import { useState } from "react";
import "./Form.css";

import { Usuario } from "../../BackEnd/Usuario/Usuario";

const Form = () => {
 
 const [valueByEnteringOnPlate,setValueByEnteringOnPlate] = useState('')
 const [valueByEnteringOnModel,setValueByEnteringOnModel] = useState('')
 const [insertHours,SetInsertHours] = useState()
 const [listOfUSer,setListOfUSer] = useState([])
 const [Estacionamento,setEstacionamento] = useState('Estacionamento')
 
//______________________ inserindo valor da placa
const handlerInsertingPlate =(event)=>{
  const insertungIntoTheInputBoard = event.target.value;
  setValueByEnteringOnPlate(insertungIntoTheInputBoard);
  event.preventDefault();
  
  
} 
//______________________ inserindo valor do modelo
const handlerInsertingModel =(event)=>{
  const insertingModel = event.target.value;
    

  setValueByEnteringOnModel(insertingModel);
  event.preventDefault();
  
  
} 
//______________________ criando objeto
const handlerInsertingValue = (event)=>{
  event.preventDefault()
 createHours();
  // criando objeto
   const automovel = new Usuario(valueByEnteringOnPlate,valueByEnteringOnModel,insertHours)
  
    automovel.insertVeluAPi(1,valueByEnteringOnPlate,valueByEnteringOnModel)

  const userOfParking = [ `placa: ${automovel.getPlaca	}`+` Modelo do carro: ${automovel.modelo}`+ ` Horario ${automovel.getHora}`];
  setListOfUSer(userOfParking);
}

function handlerSearch(event) {
  listOfUSer.forEach(element => {
    // Divida a string em partes usando " " como delimitador
    const parts = element.split(" ");

    // Encontre a parte que contém a hora (supondo que seja a última parte)
    const quantidadeDeHoras = insertHours +  parts[parts.length - 1];
    const quantidadeDeHorasLimpa = quantidadeDeHoras.replace(/}/g, '')
    setEstacionamento(`O ${valueByEnteringOnModel}` + ` entou as : ${quantidadeDeHorasLimpa}`);
  });

  event.preventDefault();
}

// criação de horas
function createHours(){
  let currentDate = new Date();
  let dia = currentDate.getDate()
    let currentTime = currentDate.getHours();
  let currentMinutes = currentDate.getMinutes();
  let dateNow = ( "no dia "+dia +" as: "+  currentTime+":"+currentMinutes);
  SetInsertHours(dateNow);

}

  return (
    <div>
      <nav className="containerForm">
        <h1>
          {Estacionamento}
        </h1>
        <section>
          <nav id="shadow"></nav>
          <form action="" onSubmit={handlerInsertingValue}>
            <label htmlFor="placa" name="placa">
              Placa
            </label>
            <input type="text" name="placa" id="placa"  value={valueByEnteringOnPlate} onChange={handlerInsertingPlate}/>
            <label htmlFor="modelo">Modelo</label>
            <input type="text" name="modelo" id="modelo" value={valueByEnteringOnModel} onChange={handlerInsertingModel} />
            <nav className="container-btn">
              <input type="button" value="Consultar" onClick={handlerSearch} />
              <input type="submit" value="Cadastrar" />
            </nav>
          </form>
        </section>
      </nav>
    </div>
  );
};
export default Form;
