# F1 Lights

## Contexte

### Description
Il s'agit d'un projet utilisant Angular pour le frontend et Express.js pour le backend, il a été réaliser en groupe durant mon alternance dans le cadre d'un devoir maison.\
Le projet est une application web consistant en un mini-jeu de réaction avec sauvegardes des scores et création de compte.

---

## Prérequis

- Node.js et npm installés
- Angular CLI installé globalement (`npm install -g @angular/cli`)
- MySQL

---

## Installation & Lancement

### 1. Cloner le projet
```bash
    git clone <url-du-repo>
    cd <nom-du-dossier>
```

### 2. Accéder aux différentes parties
- Ouvrir deux terminals, un pour la partie back-end et un autre pour la partie front-end.
- Se mettre sur les dossiers :
```bash
    cd ./back-end
```
```bash
    cd ./front-end
```

### 3. Installer les dépendances (back et front)
Dans les deux terminals lancer la command :
```bash
    npm install
```
ou
```bash
    npm install --force
```

### 4. Connexion à la base de données
- Dans le dossier back-end configurer le fichier .env avec les bonnes valeurs
- Charger le fichier : **f1_lights_bdd.sql** dans la base de données MYSQL

### 5. Lancer l’application
**Important :** Le backend doit être lancer avant le frontend.

Dans le terminal pour back-end :
```bash
    npm start
```

Dans le terminal pour front-end :
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
