# Dockerfile for React frontend
FROM node:20.12.2

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Serwowanie aplikacji za pomocą serwera statycznego
RUN npm install -g serve
CMD ["serve", "-s", "build"]
