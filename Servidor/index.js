


const { Client } = require('pg');
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'Estacionamento',
  password: 'postgres@E',
  port: 5432, // Porta padrão do PostgreSQL
});

client.connect()
  .then(() => {
    console.log('Conexão bem-sucedida com o banco de dados');
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados', err);
  });



  client.query('SELECT cor FROM CarrosEstacionados')
  .then(result => {
    console.log('Resultado da consulta:', result.rows);
  })
  .catch(err => {
    console.error('Erro ao executar consulta', err);
  });

