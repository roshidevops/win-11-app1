# ---- Build Stage ----
# Creates a temporary container to build your app
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files and install ALL dependencies (including dev dependencies)
COPY package*.json ./
RUN npm install

# Copy the rest of your source code
COPY . .

# Run the build script defined in your package.json
RUN npm run build

# ---- Production Stage ----
# Creates the final, lightweight container
FROM nginx:stable-alpine

# Copy the built static files from the 'builder' stage into the Nginx server directory
COPY --from=builder /app/build /usr/share/nginx/html

# Tell Docker the container is listening on port 3000
EXPOSE 3000

# The default Nginx command will start the server automatically
