FROM node:11.15.0-alpine AS base
MAINTAINER Caian R. Ertl <hi@caian.org>

RUN addgroup -S alan && adduser -S alan -G alan
RUN mkdir -p /home/alan
RUN chown alan:alan /home/alan
USER alan
WORKDIR /home/alan

FROM base AS dependencies
COPY ["package.json", "package-lock.json", "./"]
RUN npm install --only=production

FROM dependencies AS run
COPY ["index.js", "./"]
COPY ["src/", "./src"]
ENTRYPOINT ["node", "index.js"]
