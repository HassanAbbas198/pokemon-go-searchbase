#!/bin/bash

echo "Initializing database..."

# Wait to ensure that SQL Server is up
sleep 20s

# IMPORTANT: Ensure that the password below matches the DB_PASSWORD in your .env file
# Note: If your password contains special characters, you might need to escape them or adjust as needed
DB_PASSWORD="MyP@ssword"

# Execute database initialization tasks
/opt/mssql-tools/bin/sqlcmd -S pokemon-db -U sa -P $DB_PASSWORD -d master -i /app/init-db.sql

echo "Database initialization complete."