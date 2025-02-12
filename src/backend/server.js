const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const db = require('./db');
const app = express();

app.use(express.json());
app.use(cors());

// Rota para buscar perfis de um usuário
app.get('/profiles/:userId', (req, res) => {
  const { userId } = req.params;
  db.all('SELECT * FROM profiles WHERE user_id = ?', [userId], (err, rows) => {
    if (err) {
      return res.status(500).send('Erro ao buscar perfis');
    }
    res.json(rows); // Retorna todos os perfis do usuário
  });
});

// Rota para criar um novo perfil
app.post('/profiles', (req, res) => {
  const { userId, profile_name, profile_picture } = req.body;  // Alterado para 'profile_name' e 'profile_picture'
  db.run(
    'INSERT INTO profiles (user_id, profile_name, profile_picture) VALUES (?, ?, ?)',
    [userId, profile_name, profile_picture], // Usando 'profile_name' e 'profile_picture'
    function (err) {
      if (err) {
        return res.status(500).send('Erro ao criar perfil');
      }
      res.status(201).json({ id: this.lastID });
    }
  );
});

// Rota para deletar um perfil
app.delete('/profiles/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM profiles WHERE id = ?', [id], (err) => {
    if (err) {
      return res.status(500).send('Erro ao deletar perfil');
    }
    res.status(200).send('Perfil deletado com sucesso');
  });
});

// Rota para cadastro de usuários
app.post('/register', async (req, res) => {
  const { name, password, birthdate, email, plan, nostalgia } = req.body;

  if (!name || !password || !birthdate || !email) {
    return res.status(400).json({ error: 'Preencha todos os campos obrigatórios' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    db.run(
      'INSERT INTO users (name, password, birthdate, email, plan, nostalgia) VALUES (?, ?, ?, ?, ?, ?)',
      [name, hashedPassword, birthdate, email, plan, nostalgia],
      function (err) {
        if (err) {
          return res.status(500).json({ error: 'Erro ao registrar usuário' });
        }
        res.status(201).json({ message: 'Usuário registrado com sucesso', userId: this.lastID });
      }
    );
  } catch (error) {
    res.status(500).json({ error: 'Erro ao processar o cadastro' });
  }
});

// Rota para login de usuários
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'E-mail e senha são obrigatórios' });
  }

  db.get('SELECT * FROM users WHERE email = ?', [email], async (err, user) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao buscar usuário' });
    }
    if (!user) {
      return res.status(401).json({ error: 'Usuário ou senha incorretos' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Usuário ou senha incorretos' });
    }

    res.status(200).json({ message: 'Login bem-sucedido', userId: user.id });
  });
});

app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
