FROM node:16-alpine3.14

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

ENV DOCKER=true

COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

RUN npm install

COPY . /usr/src/app

RUN unset EDGEDB_HOST EDGEDB_INSTANCE EDGEDB_CREDENTIALS EDGEDB_CREDENTIALS_FILE

RUN #env;sleep 15
RUN #npx edgeql-js --dsn=edgedb://edgedb:1123581321@db:5656/edgedb --tls-security=insecure

RUN #npm run build

#ENTRYPOINT ["npm", "run", "start"]
#ENTRYPOINT ["sh", "-c", "sleep 2073600"]
#ENTRYPOINT ["sh", "-c"]
