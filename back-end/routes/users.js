const express = require('express');
const database = require('../database');

const router = express.Router();

// Leaderboard : récupère uniquement les utilisateurs avec un score, trié par meilleur score
router.get('/', async (req, res) => {
  try {
    const [results] = await database.promise().query(
      'SELECT username, best_score AS score FROM users WHERE best_score IS NOT NULL ORDER BY best_score ASC'
    );
    res.status(200).json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs' });
  }
});

// index.js
router.get('/usernames', (req, res) => {
  database.query("SELECT username FROM users", (err, results) => {
    if (err) return res.status(500).send("Erreur lors de la récupération des utilisateurs");
    const usernames = results.map(u => u.username);
    res.json(usernames);
  });
});


module.exports = router;
