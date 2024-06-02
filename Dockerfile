# Utilise l'image officielle de Python comme image de base pour le backend
FROM python:3.9-slim AS backend

WORKDIR /app

COPY back_socratic/requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY back_socratic/ .

CMD ["python", "airs/server_run.py"]

# Utilise l'image officielle de Node.js comme image de base pour le frontend
FROM node:14 AS build

WORKDIR /app

COPY web/test_app_modulaire_socratic/package*.json ./

RUN npm install

COPY web/test_app_modulaire_socratic/ .

# Construire l'application frontend
RUN npm run build

# Utilise une image plus légère pour servir l'application
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Expose le port utilisé par Nginx
EXPOSE 80

# Démarre Nginx
CMD ["nginx", "-g", "daemon off;"]
