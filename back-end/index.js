require('dotenv').config();
const express = require('express');
const cors = require('cors');
const database = require('./database'); // connexion MySQL

const authRoutes = require('./routes/auth');
const gameRoutes = require('./routes/game');
const usersRoutes = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/auth', authRoutes);
app.use('/game', gameRoutes);
app.use('/users', usersRoutes);

// Lancement serveur
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
