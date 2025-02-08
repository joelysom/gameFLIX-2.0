// src/backend/db.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Cria ou abre o banco de dados
const db = new sqlite3.Database(path.join(__dirname, 'user_data.db'), (err) => {
  if (err) {
    console.error('Erro ao abrir o banco de dados', err);
  } else {
    console.log('Banco de dados aberto com sucesso');
  }
});

// Função para criar a tabela de usuários, se não existir
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    birthdate TEXT,
    plan TEXT,
    nostalgia TEXT
  )
`);

module.exports = db;
