// src/backend/server.js
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const db = require('./db');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Rota de Login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
    if (err) {
      return res.status(500).send('Erro no banco de dados');
    }
    if (!row) {
      return res.status(401).send('Usuário não encontrado');
    }

    bcrypt.compare(password, row.password, (err, result) => {
      if (err || !result) {
        return res.status(401).send('Senha incorreta');
      }
      res.status(200).send('Login bem-sucedido');
    });
  });
});

// Rota de Cadastro
app.post('/register', (req, res) => {
  const { name, email, password, birthdate, plan, nostalgia } = req.body;

  // Verificar se o e-mail já existe
  db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
    if (err) {
      return res.status(500).send('Erro no banco de dados');
    }
    if (row) {
      return res.status(400).send('E-mail já cadastrado');
    }

    // Criptografar a senha antes de salvar
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        return res.status(500).send('Erro ao criptografar a senha');
      }

      // Inserir novo usuário no banco de dados
      db.run(
        'INSERT INTO users (name, email, password, birthdate, plan, nostalgia) VALUES (?, ?, ?, ?, ?, ?)',
        [name, email, hashedPassword, birthdate, plan, nostalgia],
        function (err) {
          if (err) {
            return res.status(500).send('Erro ao cadastrar usuário');
          }
          res.status(201).send('Usuário cadastrado com sucesso');
        }
      );
    });
  });
});

// Iniciar o servidor
app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
