const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;
export function aactiveServer(){
  
  app.use(bodyParser.json());
  
  const veiculos = [
    {
      id: 1,
      modelo: '',
      placa: '',
      horario: '00-00-00',
    },
  ];
  
  app.get('/api/veiculos', (req, res) => {
    res.json(veiculos);
  });
  
  app.post('/api/veiculos', (req, res) => {
    const { modelo, placa, horario } = req.body;
  
    // Gerar um novo ID para o veículo
    const id = veiculos.length + 1;
  
    // Criar o novo veículo
    const novoVeiculo = { id, modelo, placa, horario };
  
    // Adicionar o veículo à lista
    veiculos.push(novoVeiculo);
  
    res.status(201).json(novoVeiculo);
  });
  
  app.listen(port, () => {
    console.log(`Servidor API está ouvindo na porta ${port}`);
  });

}  
