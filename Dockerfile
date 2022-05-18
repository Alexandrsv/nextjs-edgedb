FROM node:16-alpine3.14

ARG EDGEDB_DSN=''
ARG EDGEDB_CLIENT_TLS_SECURITY=''

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

ENV DOCKER=true

COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

RUN npm i --only=production

COPY . /usr/src/app

RUN #unset EDGEDB_HOST EDGEDB_INSTANCE EDGEDB_CREDENTIALS EDGEDB_CREDENTIALS_FILE

RUN ping db

RUN npx edgeql-js
RUN npm run build
RUN npm run start
