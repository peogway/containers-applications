# build stage
FROM node:20 AS build-stage
WORKDIR /usr/src/app

# pass backend URL as build-time env
ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL

COPY . .
RUN npm ci
RUN npm run build

# serve stage
FROM nginx:1.25-alpine
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
