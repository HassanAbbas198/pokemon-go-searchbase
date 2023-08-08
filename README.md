# Pokemon Go Searchbase CRUD Application

This project is a CRUD application developed for the purpose of simulating a Pokemon Go searchbase.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [API Documentation](#api-documentation)
- [Testing](#testing)

# Introduction

In this project, I have developed a CRUD application to interact with Pokemon data. This application allows users to perform CRUD operations. It leverages technologies such as MSSQL for the database and Nest for the backend implementation.

# Prerequisites

Make sure you have the following dependencies installed on your machine:

- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- Docker Compose: [Install Docker Compose](https://docs.docker.com/compose/install/)

# Setup

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```sh
    git clone https://github.com/HassanAbbas198/pokemon-go-searchbase.git
    ```

2. **Install dependencies**:
   ```sh
   cd pokemon-go-searchbase
   
   yarn
   ```

3. **Configure environment variables**:

   Create an `.env` file at the root level of the project and add the following environment variables. Alternatively, you can copy them from the `.env.example` file


    ```sh
    # Set the port for the application
    PORT=8080
    
    # Enable logging of request headers and data
    LOG_HEADERS=true
    LOG_REQUEST_DATA=true
    
    # Configure database connection
    DB_HOST=pokemon-db
    DB_PORT=1433
    DB_USER=sa
    DB_PASSWORD=
    DB_NAME=pokemon_db
    
    # IMPORTANT: The following settings should NOT be enabled in a production environment
    DB_AUTO_LOAD_ENTITIES=true
    DB_SYNCHRONIZE=true
    ```
   Make sure **DB_PASSWORD**, and **DB_NAME** you set in the `.env` match the values in `scripts/init-db.sh` and `scripts/init-db.sql` files respectively.
   
4. **Initializing the Database**:

    ```sh
    yarn docker:init-db
    ```
    
    > Note: This step is required only if you're setting up a local database. If your database is hosted remotely, you can proceed to the next step. 

4. **Running the Application**:

    ```sh
    yarn docker:dev
    ```

## API Documentation

Here are some of the sample API endpoints provided by the application:

- `GET /pokemon`: Retrieve a list of paginated Pokemon records.
- `GET /pokemon/:id`: Retrieve a list of all Pokemon records.
- `POST /pokemon` Create a new Pokemon record to the database.
- `PUT /pokemon/:id:` Update data for a specific Pokemon.
- `DELETE /pokemon/:id:` Delete a Pokemon record.

For detailed API documentation and examples, refer to the [Swagger API Documentation](http://localhost:8080/api-docs) after successfully running the app.

## Testing
To run unit tests, execute:

```
yarn test
```