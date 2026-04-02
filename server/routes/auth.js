const express = require('express');
const bcrypt = require('bcrypt');
const database = require('../database');

const router = express.Router();

// Inscription
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ error: "Nom d'utilisateur et mot de passe requis" });

  try {
    const hashedPassword = await bcrypt.hash(password, 4);
    await database.promise().query(
      'INSERT INTO users (username, password) VALUES (?, ?)',
      [username, hashedPassword]
    );
    res.status(201).json({ message: 'Inscription réussie' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur lors de l\'inscription' });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ error: "Nom d'utilisateur et mot de passe requis" });

  try {
    const [results] = await database.promise().query(
      'SELECT * FROM users WHERE username = ?',
      [username]
    );

    if (results.length === 0) return res.status(404).json({ error: 'Utilisateur non trouvé' });

    const user = results[0];
    const match = await bcrypt.compare(password, user.password);

    if (match) res.status(200).json({ message: 'Connexion réussie', userId: user.id });
    else res.status(400).json({ error: 'Mot de passe incorrect' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur lors de la connexion' });
  }
});

module.exports = router;
