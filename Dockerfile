# Use an official Node.js image as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application for production
RUN npm run build

# Use a lightweight web server to serve the built React app
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3000"]

# Expose the port on which the app will run
EXPOSE 3000
