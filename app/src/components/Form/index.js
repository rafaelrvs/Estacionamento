import React, { useState } from 'react';
import './Form.css';
import { aactiveServer } from '../Service/controllers/server';

const Form = () => {
  const [placaSelecionada, setPlacaSelecionada] = useState('');
  const [modeloSelecionado, setModeloSelecionado] = useState('');

  const handlerInputModel = (event) => {
    const valorinserido = event.target.value;
    setModeloSelecionado(valorinserido);
    event.preventDefault();
  };

  const handlerInputPlaca = (event) => {
    const valorinserido = event.target.value;
    setPlacaSelecionada(valorinserido);
    event.preventDefault();
  };

  const handlerSearch = (event) => {
   
    event.preventDefault();
  };
  const handlerInsertValue = (event) => {
    
    event.preventDefault();
  };
  
  const handlerCadastro = (event) => {
    event.preventDefault();

  };
  

  return (
    <div className="container__main__form">
      <div className="containerFormFundo"></div>
      <form id="form__container" onSubmit={handlerInsertValue}>
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
          <input id="pesquisa" type="submit" value="Pesquisar" onClick={handlerSearch} />
          <input id="cadastro" type="button" value="Cadastrar" onClick={handlerCadastro} />
        </div>
      </form>
    </div>
  );
};

export default Form;
