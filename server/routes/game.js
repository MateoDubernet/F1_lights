const express = require('express');
const database = require('../database');

const router = express.Router();

// Mise à jour du score
router.patch('/updateScore', async (req, res) => {
  const { userId, bestScore } = req.body;
  if (!userId || bestScore === undefined)
    return res.status(400).json({ error: "ID utilisateur et meilleur score requis" });

  try {
    const [result] = await database.promise().query(
      'UPDATE users SET best_score = ? WHERE id = ?',
      [bestScore, userId]
    );

    if (result.affectedRows === 0) return res.status(404).json({ error: 'Utilisateur non trouvé' });

    res.status(200).json({ message: 'Meilleur score mis à jour avec succès' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur lors de la mise à jour du score' });
  }
});

module.exports = router;
