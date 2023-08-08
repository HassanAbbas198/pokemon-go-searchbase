# Use the official Node.js image as the base image
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