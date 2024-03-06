FROM node:18

WORKDIR /usr/src/app

ENV MYSQL_HOST db
ENV MYSQL_USER fullcycle
ENV MYSQL_PASSWORD secret
ENV MYSQL_DATABASE nodedb
ENV SERVER_PORT 3000
ENV DOCKERIZE_VERSION v0.7.0

RUN apt-get update \
    && apt-get install -y wget \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

EXPOSE ${SERVER_PORT}
