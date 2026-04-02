const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'root',
  database: process.env.DB_NAME || 'f1_lights',
  port: process.env.DB_PORT || 3306,
});

connection.connect((error) => {
  if (error) {
    console.error("Erreur de connexion: " + error.stack);
    return;
  }

  console.log("Connecté avec succès à la base de données.");
});

module.exports = connection;
