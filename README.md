# F1 Lights

## Contexte

### Description
Il s'agit d'un projet réaliser durant mon alternance, il à été réaliser en groupe dans le cadre d'un devoir maison.\
Le projet utilise Angular pour le frontend et Express.js pour le backend.

Cette application web est un mini-jeu de réaction avec sauvegardes des scores et création de compte.

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

### 3. Connexion à la base de données
- Dans le dossier back-end configurer le fichier .env avec les bonnes valeurs
- Charger le fichier : **f1_lights_bdd.sql** dans la base de données MYSQL

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
