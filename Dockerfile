#
# Development
#
FROM node:18.16.0-bullseye as dev

# Create app folder as the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock to the container
COPY package.json ./
COPY yarn.lock ./

# Install the dependencies
RUN yarn

# Copy the rest source code into app folder
COPY . .


#
# Database initialization
#
FROM mcr.microsoft.com/mssql/server:2022-latest as dbinit

USER root

# Copy the initialization script into the container
COPY scripts/init-db.sh /app/init-db.sh
COPY scripts/init-db.sql /app/init-db.sql

# Create a config directory
RUN mkdir -p /usr/config
WORKDIR /usr/config

# Bundle config source
COPY --chown=root . /usr/config

# Make the script executable
RUN chmod +x scripts/init-db.sh

# Run the initialization script when the container starts
CMD ["scripts/init-db.sh"]