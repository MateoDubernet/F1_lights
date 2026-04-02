# Utilisation d'une image Node légère
FROM node:18-alpine

# Dossier de travail dans le conteneur
WORKDIR /app

# Copie des fichiers de dépendances
COPY package*.json ./

# Installation des dépendances (uniquement prod pour plus de légèreté)
RUN npm install --omit=dev

# Copie du reste du code source
COPY . .

# Port exposé par ton serveur Express (souvent 3000 ou 5000)
EXPOSE 3000

# Commande de lancement
CMD ["node", "index.js"]