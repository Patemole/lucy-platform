#!/bin/sh

# Démarrer chaque environnement en arrière-plan
npm run start:upenn &
npm run start:harvard &
npm run start:usyd &

# Attendre que tous les processus enfants se terminent
wait
