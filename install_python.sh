#!/bin/bash
# Update package list and install prerequisites
apt-get update
apt-get install -y software-properties-common

# Add deadsnakes PPA (Personal Package Archive) for Python
add-apt-repository ppa:deadsnakes/ppa

# Install the specific version of Python
apt-get update
apt-get install -y python3.11 python3.11-venv python3.11-dev

# Create a symlink for python and pip if needed
ln -sf /usr/bin/python3.11 /usr/bin/python
ln -sf /usr/bin/pip3 /usr/bin/pip

# Install the Python dependencies
pip install -r backend/back_socratic/requirements.txt
