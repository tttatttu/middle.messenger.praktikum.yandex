FROM node:16

WORKDIR /app

COPY package.json ./
RUN npm install
COPY . /app
RUN npm run build

EXPOSE 8080
CMD node server.js
