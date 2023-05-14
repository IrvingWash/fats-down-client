FROM node:18-alpine

WORKDIR /usr/src/app

ENV SERVER_URL=http://localhost:3000

COPY package*.json ./

RUN npm i

COPY . .
