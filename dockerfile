# Use Node.js base image
FROM node:18.15.0

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code to the container
COPY . .

# Command to run the application
ENTRYPOINT ["node", "fetch.js"]