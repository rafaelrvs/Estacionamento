//______________________ component responsible for the form
import { useState } from "react";
import "./Form.css";
import { Usuario } from "../../BackEnd/Usuario/Usuario";
const Form = () => {
 
 const [valueByEnteringOnPlate,setValueByEnteringOnPlate] = useState('')
 const [valueByEnteringOnModel,setValueByEnteringOnModel] = useState('')
 const [insertHours,SetInsertHours] = useState('')
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
  let currentDate = new Date();
  let currentTime = currentDate.getHours();
  let currentMinutes = currentDate.getMinutes();
  let dateNow = (currentDate +":"+ currentTime+":"+currentMinutes);
  SetInsertHours(dateNow);
  // criando objeto
  const userOfParking = [ `placa: ${valueByEnteringOnPlate}`+` Modelo do carro: ${valueByEnteringOnModel}`+ ` Horario ${insertHours}`];
  const user = new Usuario(userOfParking)
  
  setListOfUSer(userOfParking);
  event.preventDefault();
}

function handlerSearch(event) {
  listOfUSer.forEach(element => {
    // Divida a string em partes usando " " como delimitador
    const parts = element.split(" ");

    // Encontre a parte que contém a hora (supondo que seja a última parte)
    const quantidadeDeHoras = parts[parts.length - 1];

    setEstacionamento(`O ${valueByEnteringOnModel}` + ` entou as : ${quantidadeDeHoras}`);
  });

  event.preventDefault();
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
