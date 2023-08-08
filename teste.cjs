import { Client } from 'pg';

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'Estacionamento',
  password: 'postgres@E',
  port: 5432, // Porta padrão do PostgreSQL
});

client.connect(); // Conectar ao banco de dados

client.query('SELECT * FROM tabela', (err, result) => {
  if (err) {
    console.error('Erro ao executar consulta:', err);
    return;
  }
  console.log('Resultado da consulta:', result.rows);
  client.end(); // Encerrar a conexão após a consulta
});
