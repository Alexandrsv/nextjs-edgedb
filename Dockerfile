FROM node:16-alpine3.14

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

ENV DOCKER=true

COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

RUN npm i --only=production

COPY . /usr/src/app

RUN unset EDGEDB_HOST EDGEDB_INSTANCE EDGEDB_CREDENTIALS EDGEDB_CREDENTIALS_FILE

