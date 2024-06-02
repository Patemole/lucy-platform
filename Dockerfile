# Utilise l'image officielle de Python comme image de base pour le backend
FROM python:3.9-slim AS backend

# Définit le répertoire de travail dans le conteneur
WORKDIR /app

# Copie les fichiers requirements.txt
COPY back_socratic/requirements.txt .

# Installe les dépendances Python
RUN pip install --no-cache-dir -r requirements.txt

# Copie le reste de l'application serveur
COPY back_socratic/ .

# Commande pour démarrer les serveurs
CMD ["python", "airs/server_run.py"]

# Utilise l'image officielle de Node.js comme image de base pour le frontend
FROM node:14 AS frontend

# Définit le répertoire de travail dans le conteneur
WORKDIR /app

# Copie les fichiers package.json et package-lock.json
COPY web/test_app_modulaire_socratic/package*.json ./

# Installe les dépendances Node.js
RUN npm install

# Copie le reste de l'application front-end
COPY web/test_app_modulaire_socratic/ .

# Construire l'application front-end
RUN npm run build

# Utilise une image plus légère pour servir l'application
FROM nginx:alpine

# Copie les fichiers construits depuis l'étape de construction
COPY --from=frontend /app/build /usr/share/nginx/html

# Copie la configuration Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Expose le port utilisé par l'application
EXPOSE 80

# Démarre le serveur Nginx
CMD ["nginx", "-g", "daemon off;"]
