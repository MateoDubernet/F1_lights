const express = require("express");
const cors = require("cors");
require("dotenv").config();
const bcrypt = require("bcrypt");

const db = require("./database"); // Importez le fichier de connexion

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.post("/register", async (req, res) => {
  // Extrait les données d'inscription du corps de la requête
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .send("Le nom d'utilisateur et le mot de passe sont requis");
  }

  try {
    // Hacher le mot de passe avant de le stocker
    const hashedPassword = await bcrypt.hash(password, 4);
    // Insérer l'utilisateur dans la base de données
    db.query(
      "INSERT INTO users (username, password) VALUES (?, ?);",
      [username, hashedPassword],
      (err, results) => {
        if (err) {
          // Gérer les erreurs (comme un nom d'utilisateur déjà existant)
          console.log(err);
          return res.status(500).send("Erreur lors de l'inscription");
        }
        // Inscription réussie
        res.status(201).send("Inscription réussie");
      }
    );
  } catch (error) {
    res.status(500).send("Erreur lors de la création de l'utilisateur");
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Chercher l'utilisateur dans la base de données
  db.query(
    "SELECT * FROM users WHERE username = ?",
    [username],
    async (err, results) => {
      if (err) {
        return res
          .status(500)
          .send("Erreur lors de la recherche de l'utilisateur");
      }

      if (results.length > 0) {
        // Comparer les mots de passe
        const comparison = await bcrypt.compare(password, results[0].password);
        console.log(comparison);
        if (comparison) {
          return res.status(200).send("Connexion réussie");
        } else {
          return res.status(400).send("Mot de passe incorrect");
        }
      } else {
        return res.status(404).send("Utilisateur non trouvé");
      }
    }
  );
});

app.patch("/updateScore", (req, res) => {
  const { userId, bestScore } = req.body;

  // Vérifiez si les données nécessaires sont fournies
  if (!userId || bestScore === undefined) {
    return res
      .status(400)
      .send("L'identifiant de l'utilisateur et le meilleur score sont requis");
  }

  // Mise à jour du meilleur score de l'utilisateur dans la base de données
  db.query(
    "UPDATE users SET best_score = ? WHERE id = ?",
    [bestScore, userId],
    (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Erreur lors de la mise à jour du score");
      }

      if (results.affectedRows === 0) {
        return res.status(404).send("Utilisateur non trouvé");
      }

      res.status(200).send("Meilleur score mis à jour avec succès");
    }
  );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
