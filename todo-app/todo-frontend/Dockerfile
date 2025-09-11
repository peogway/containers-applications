# test stage
FROM node:20 AS test-stage
WORKDIR /usr/src/app
COPY . .
RUN npm ci
RUN npm test -- --run

# build stage depends on test stage
FROM node:20 AS build-stage
WORKDIR /usr/src/app
COPY . .
RUN npm ci
RUN npm run build

# serve stage
FROM nginx:1.25-alpine
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html

# fake copy to force test-stage to run
COPY --from=test-stage /usr/src/app/package.json /test-output/
