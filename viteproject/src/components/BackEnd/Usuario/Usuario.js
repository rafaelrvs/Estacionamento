import express, { json } from 'express';

export class Usuario {
  constructor(placa, modelo, hora) {
    this.placa = placa;
    this.modelo = modelo;
    this.hora = hora;
    this.valueTotal = [placa, modelo, hora];
  }

  getPlaca() {
    return this.placa;
  }

  getModelo() {
    return this.modelo;
  }

  getHora() {
    return this.hora;
  }

  getValueTotal() {
    return this.valueTotal;
  }


  insertVeluAPi(id,placa,modelo){
    const app = express();

    // Middleware para permitir o uso de JSON no corpo das solicitações
    app.use(json());
    
    // Simulação de banco de dados para armazenar os veículos
    const veiculos = [];
    
    // Rota para listar todos os veículos
    app.get('/veiculos', (req, res) => {
      res.json(veiculos);
    });
    
    // Rota para adicionar um novo veículo
    
    
      app.post('/veiculos', (req, res) => {
        
       
       
        if (!id || !modelo || !placa) {
         
          return res.status(400).json({ error: 'Por favor, forneça ID, modelo e placa.' });
        }
      
          // Verifica se o ID já existe na lista de veículos
          if (veiculos.find(veiculo => veiculo.id === id)) {
            return res.status(400).json({ error: 'ID já existe. Escolha um ID único.' });
          }
        
        
      
        const novoVeiculo = { id, modelo, placa };
        veiculos.push(novoVeiculo);
      
        res.status(201).json(novoVeiculo);
      });
      
      // Inicializa o servidor na porta 3000
      const PORT = 3000;
      app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
      });
    
  }
}

