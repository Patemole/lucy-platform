#!/bin/bash
# Met à jour la liste des paquets et installe les prérequis
apt-get update
apt-get install -y software-properties-common

# Ajoute le dépôt deadsnakes PPA pour Python
add-apt-repository ppa:deadsnakes/ppa

# Met à jour la liste des paquets et installe Python 3.11
apt-get update
apt-get install -y python3.11 python3.11-venv python3.11-dev

# Crée un lien symbolique pour python et pip si nécessaire
ln -sf /usr/bin/python3.11 /usr/bin/python
ln -sf /usr/bin/pip3 /usr/bin/pip

# Déplace le répertoire vers celui contenant requirements.txt
cd back_socratic

# Installe les dépendances Python
pip install -r requirements.txt
