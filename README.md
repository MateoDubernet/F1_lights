# F1 Lights

## Description
### Mini-application web pour :
- Inscription / Connexion utilisateur
- Jeu de réaction
- Leaderboard des scores

## Prérequis
- Node.js >= 18
- Angular CLI >= 15
- MySQL
- npm

## Installation
1. Cloner le projet
git clone <url_du_projet>
cd F1_lights

2. Installer dépendances
### Backend
cd back-end
npm install

### Frontend
cd ../front-end
npm install

## Configuration
### Backend

1. Créer base MySQL f1_lights et table users :
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  best_score INT DEFAULT NULL
);


2. Configurer .env dans back-end :

DB_HOST=localhost
DB_USER=root
DB_PASS=ton_mot_de_passe
DB_NAME=f1_lights
DB_PORT=3306
PORT=3000

## Lancement
### Backend
cd back-end
npm start

### Frontend
cd front-end
ng serve

Frontend : http://localhost:4200
Backend : http://localhost:3000

## Utilisation

1. Inscription : nom d’utilisateur unique + mot de passe (confirmation requise)
2. Connexion : nom d’utilisateur + mot de passe
3. Jeu : cliquer sur “Start Game”, cliquer sur le carré au bon moment → score enregistré
4. Leaderboard : accéder à la page scores pour voir les meilleurs joueurs
5. Navigation : barre de navigation avec liens Game, Leaderboard, Déconnexion. Nom utilisateur affiché en gras

## Notes
Formulaire vérifie la disponibilité du nom d’utilisateur avant l’envoi
Meilleur score sauvegardé automatiquement
Backend doit tourner avant le frontend
CORS activé pour localhost:4200 → localhost:3000
