# F1 Lights - Mini-jeu de Réaction

## Présentation
Ce projet est une application web fullstack réalisée en groupe durant mon alternance. Il s'agit d'un mini-jeu de réflexes avec sauvegardes des scores et création de compte.

### Stack Technique
- **Angular**
- **Expressjs**
- **Docker**
---

## Installation et Lancement
### 1. Clonage du dépôt
```bash
    git clone https://github.com/MateoDubernet/F1_lights.git
```

### 2. Lancement (Docker)
**Prérequis :** [Docker Desktop](https://www.docker.com/products/docker-desktop) installé et lancé.

[!IMPORTANT]
Assurez-vous que les ports 80 et 3000 ne sont pas déjà utilisés par une autre application sur votre machine avant de lancer le conteneur.

```bash
    cd ./F1_lights
    docker-compose up --build
```

### 3. Accès
Ouvrir un navigateur web et aller à l'adresse: http://localhost

---

## Fonctionnalités
1. **Système d'Authentification** : Inscription avec vérification de mot de passe et connexion sécurisée.

2. **Le Jeu** : Cliquez sur Start Game, attendez l'extinction des feux et réagissez le plus vite possible.

3. **Leaderboard** : Sauvegarde automatique de votre meilleur temps et consultation du classement mondial des joueurs.

4. **Expérience Utilisateur** : Interface réactive avec barre de navigation dynamique (affiche l'utilisateur connecté).
