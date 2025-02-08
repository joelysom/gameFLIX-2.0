// src/backend/server.js

const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const db = require('./db');
const app = express();

// Middleware
app.use(express.json());  // Middleware para parsear o corpo das requisições em JSON
app.use(cors());  // Middleware para permitir requisições CORS (Cross-Origin Resource Sharing)

// Rota de Login
/**
 * Rota POST para realizar o login.
 * Verifica se o e-mail existe no banco de dados e se a senha é válida.
 * 
 * @param {string} req.body.email - E-mail do usuário
 * @param {string} req.body.password - Senha do usuário
 * @returns {Response} Resposta com status 200 para sucesso, 401 para falha de autenticação, ou 500 para erro no servidor
 */
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Verifica se o e-mail existe no banco de dados
  db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
    if (err) {
      return res.status(500).send('Erro no banco de dados');  // Erro no banco de dados
    }
    if (!row) {
      return res.status(401).send('Usuário não encontrado');  // E-mail não encontrado
    }

    // Compara a senha fornecida com a senha criptografada no banco
    bcrypt.compare(password, row.password, (err, result) => {
      if (err || !result) {
        return res.status(401).send('Senha incorreta');  // Senha incorreta
      }
      res.status(200).send('Login bem-sucedido');  // Login bem-sucedido
    });
  });
});

// Rota de Cadastro
/**
 * Rota POST para realizar o cadastro de um novo usuário.
 * Verifica se o e-mail já está cadastrado e criptografa a senha antes de salvar.
 * 
 * @param {string} req.body.name - Nome do usuário
 * @param {string} req.body.email - E-mail do usuário
 * @param {string} req.body.password - Senha do usuário
 * @param {string} req.body.birthdate - Data de nascimento do usuário
 * @param {string} req.body.plan - Plano escolhido pelo usuário
 * @param {string} req.body.nostalgia - Texto relacionado à nostalgia do usuário
 * @returns {Response} Resposta com status 201 para sucesso, 400 para e-mail já cadastrado, ou 500 para erro no servidor
 */
app.post('/register', (req, res) => {
  const { name, email, password, birthdate, plan, nostalgia } = req.body;

  // Verifica se o e-mail já existe
  db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
    if (err) {
      return res.status(500).send('Erro no banco de dados');  // Erro no banco de dados
    }
    if (row) {
      return res.status(400).send('E-mail já cadastrado');  // E-mail já registrado
    }

    // Criptografa a senha antes de salvar
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        return res.status(500).send('Erro ao criptografar a senha');  // Erro ao criptografar a senha
      }

      // Insere o novo usuário no banco de dados
      db.run(
        'INSERT INTO users (name, email, password, birthdate, plan, nostalgia) VALUES (?, ?, ?, ?, ?, ?)',
        [name, email, hashedPassword, birthdate, plan, nostalgia],
        function (err) {
          if (err) {
            return res.status(500).send('Erro ao cadastrar usuário');  // Erro ao inserir o usuário
          }
          res.status(201).send('Usuário cadastrado com sucesso');  // Cadastro bem-sucedido
        }
      );
    });
  });
});

// Iniciar o servidor
/**
 * Inicializa o servidor na porta 5000.
 */
app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
