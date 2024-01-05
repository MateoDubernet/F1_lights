const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost", // ou l'adresse de votre serveur MySQL
  user: "root", // votre nom d'utilisateur MySQL
  password: "", // votre mot de passe MySQL
  database: "nom_de_votre_base_de_donnees", // le nom de votre base de données
});

connection.connect((error) => {
  if (error) {
    console.error("Erreur de connexion: " + error.stack);
    return;
  }

  console.log("Connecté avec succès à la base de données.");
});

module.exports = connection;
