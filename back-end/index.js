const express = require("express");
require("dotenv").config();
const bcrypt = require("bcrypt");

const db = require("./database"); // Importez le fichier de connexion

const app = express();
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

  db.query(
    "SELECT * FROM users WHERE username = ?",
    [username],
    async (err, results) => {
      if (err) throw err;

      if (results.length > 0) {
        const comparison = await bcrypt.compare(password, results[0].password);
        if (comparison) {
          req.session.userId = results[0].id; // ou un autre identifiant unique
          return res.redirect("/dashboard"); // Redirigez vers une page sécurisée
        }
      }
      res.redirect("/login"); // Redirigez vers la page de connexion en cas d'échec
    }
  );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
