#!/bin/bash

echo "Initializing database..."

# IMPORTANT: Ensure that the password below matches the DB_PASSWORD in your .env file
# Note: If your password contains special characters, you might need to escape them or adjust as needed
DB_PASSWORD="MyP@ssword"

# Keep trying to execute a simple SQL query until the server is ready
until /opt/mssql-tools/bin/sqlcmd -S pokemon-db -U sa -P $DB_PASSWORD -d master -Q "SELECT 1;" &>/dev/null; do
    sleep 5s
done

# Execute database initialization tasks
/opt/mssql-tools/bin/sqlcmd -S pokemon-db -U sa -P $DB_PASSWORD -d master -i /app/init-db.sql

echo "Database initialization complete."