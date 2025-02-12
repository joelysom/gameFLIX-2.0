// src/backend/db.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database(path.join(__dirname, 'user_data.db'), (err) => {
  if (err) {
    console.error('Erro ao abrir o banco de dados', err);
  } else {
    console.log('Banco de dados aberto com sucesso');
  }
});

// Cria tabela de usuários
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

// Cria tabela de perfis dentro de uma conta
db.run(`
  CREATE TABLE IF NOT EXISTS profiles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    profile_name TEXT NOT NULL,
    profile_picture TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  )
`);

module.exports = db;
