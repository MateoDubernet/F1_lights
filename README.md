# F1 Lights

## Contexte

### Description
Mini-application web pour :
- Inscription / Connexion utilisateur
- Jeu de réaction
- Leaderboard des scores

### Notes
- Backend doit tourner avant le frontend

---

## Prérequis

- Node.js >= 18
- npm
- Angular CLI >= 15
- MySQL

---

## Installation & Lancement
### 1. Cloner le projet
```bash
    git clone <url-du-repo>
    cd <nom-du-dossier>
```

- Ouvrir deux terminals, un pour le back et un autre pour le front.
- Une fois ouvert se mettre sur les dossiers back-end et front-end :
```bash
    cd ./back-end
```
```bash
    cd ./front-end
```

### 2. Installer les dépendances (back et front)
Dans les dossiers back-end et front-end :
```bash
    npm install
```
ou
```bash
    npm install --force
```

### 3. Configuration du Back
Dans le dossier back-end :
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

### 4. Lancer l’application
Dans le dossiers back-end :
```bash
    npm start
```

Dans le dossiers front-end :
```bash
    ng serve
```

---

## Fonctionnalités
1. Inscription : nom d’utilisateur unique + mot de passe (confirmation requise)
2. Connexion : nom d’utilisateur + mot de passe
3. Jeu : cliquer sur **Start Game**, cliquer sur le carré au bon moment → meilleur score enregistré
4. Leaderboard : accéder à la page scores pour voir les meilleurs joueurs
5. Navigation : barre de navigation avec liens Game, Leaderboard, Déconnexion. Nom utilisateur affiché en gras
