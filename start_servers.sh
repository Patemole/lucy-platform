#!/bin/bash
# Start the backend servers
python backend/back_socratic/airs/server_run.py &
# Start the frontend server
cd web/test_app_modulaire_socratic && npm start
