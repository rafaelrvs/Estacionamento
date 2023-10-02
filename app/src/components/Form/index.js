import React, { useState } from "react";
import "./Form.css";
import { Usuario } from "../controller/Usuario";
const Form = () => {
  const [placaSelecionada, setPlacaSelecionada] = useState("");
  const [modeloSelecionado, setModeloSelecionado] = useState("");
  const listaVeiculo = ['']
  //Selecionando modelo do carro
  const handlerInputModel = (event) => {
    const valorinserido = event.target.value;
    setModeloSelecionado(valorinserido);
    event.preventDefault();
  };
  //selecionando placa do automovel
  const handlerInputPlaca = (event) => {
    const valorinserido = event.target.value;
    setPlacaSelecionada(valorinserido);
    event.preventDefault();
  };
  //consulta de altomovel
  const handlerSearch = (event) => {
    listaVeiculo.forEach((e) => {
     alert(e.toLowerCase());
    });
    event.preventDefault();
  };
  
  //cadastrando veiculo
  const handlerCadastro = (event) => {
    var dataAtual = new Date();
    // Obtenha a hora, minutos e segundos
    var horas = dataAtual.getHours();
    var minutos = dataAtual.getMinutes();
    var segundos = dataAtual.getSeconds();
  
    const timeNow = `${horas} + ${minutos} + ${segundos}`
    const automovelGuardado = new Usuario();
    automovelGuardado.setModelo = modeloSelecionado;
    automovelGuardado.setPlaca = placaSelecionada;
    automovelGuardado.setHota = timeNow;
    const valueToCar = (automovelGuardado.getPlaca(), automovelGuardado.getModelo(), automovelGuardado.getHora());
    listaVeiculo.push(valueToCar);
    
    
    event.preventDefault();
  };

  return (
    <div className="container__main__form">
      <div className="containerFormFundo"></div>
      <form id="form__container">
        <label htmlFor="modelo">Modelo</label>
        <input
          id="modelo"
          type="text"
          placeholder="Digite o modelo"
          value={modeloSelecionado}
          onChange={handlerInputModel}
          maxLength={30}
        />
        <div className="placaEmodelo">
          <label htmlFor="placa">Placa</label>
          <input
            id="placa"
            type="text"
            placeholder="Digite a placa"
            value={placaSelecionada}
            onChange={handlerInputPlaca}
            maxLength={7}
            required
          />
        </div>
        <div className="containerBtn">
          <input
            id="pesquisa"
            type="submit"
            value="Pesquisar"
            onClick={handlerSearch}
          />
          <input
            id="cadastro"
            type="button"
            value="Cadastrar"
            onClick={handlerCadastro}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
