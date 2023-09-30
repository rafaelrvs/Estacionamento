const { Pool } = require('pg');
require('dotenv').config();

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
};

const pool = new Pool(dbConfig);

pool.query('SELECT * FROM Estacionamento', (error, results) => {
  if (error) {
    console.error('Erro ao executar a consulta:', error);
  } else {
    console.log('Resultados da consulta:');
    console.log(results.rows);
  }
});

pool.end((error) => {
  if (error) {
    console.error('Erro ao encerrar a pool de conexão:', error);
  } else {
    console.log('Pool de conexão encerrada');
  }
});
