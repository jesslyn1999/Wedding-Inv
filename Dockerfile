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

# Set up SSH for GitHub authentication
ARG GITHUB_SSH_KEY_BASE64
RUN mkdir -p /root/.ssh \
    && echo "$GITHUB_SSH_KEY_BASE64" | base64 -d > /root/.ssh/id_rsa \
    && chmod 600 /root/.ssh/id_rsa \
    && ssh-keyscan github.com >> /root/.ssh/known_hosts

    
# Build the application for production
RUN npm run build

# Use a lightweight web server to serve the built React app
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3000"]

# Expose the port on which the app will run
EXPOSE 3000
