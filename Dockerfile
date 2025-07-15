# ---- Build Stage ----
# Creates a temporary container to build your app
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files and install ALL dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your source code
COPY . .

# Run the build script to create the '/app/build' folder
RUN npm run build

# ---- Production Stage ----
# Creates the final, lightweight container using Nginx
FROM nginx:stable-alpine

# Copy only the built static files from the 'builder' stage
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 for the Nginx web server
EXPOSE 80

# Nginx starts automatically
