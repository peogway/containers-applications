FROM node:20

WORKDIR /usr/src/app

COPY . .

RUN npm install

# Nodemon for development
CMD ["npx", "nodemon", "index.js"]
