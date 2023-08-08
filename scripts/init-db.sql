-- Ensure that the database name below matches the DB_NAME in your .env file
-- Note: Avoid using special characters or spaces in the database name
IF NOT EXISTS (SELECT name FROM sys.databases WHERE name = N'pokemon_go')
BEGIN
    CREATE DATABASE pokemon_go;
    PRINT 'Database created.';
END
ELSE
BEGIN
    PRINT 'Database already exists.';
END