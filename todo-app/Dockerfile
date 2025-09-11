# ----- Build frontend -----
FROM node:20 AS build-frontend
WORKDIR /usr/src/frontend
COPY ./todo-frontend/package*.json ./
RUN npm ci
COPY ./todo-frontend .
RUN npm run build

# ----- Build backend -----
FROM node:20 AS build-backend
WORKDIR /usr/src/backend
COPY ./todo-backend/package*.json ./
RUN npm ci
COPY ./todo-backend .

# ----- Production stage -----
FROM nginx:1.25-alpine
# Copy frontend build
COPY --from=build-frontend /usr/src/frontend/dist /usr/share/nginx/html
# Copy backend code
COPY --from=build-backend /usr/src/backend /usr/src/backend
WORKDIR /usr/src/backend
EXPOSE 80 3000
CMD ["sh", "-c", "nginx -g 'daemon off;' & node server.js"]
