FROM node:12.19.0-alpine AS base
MAINTAINER Caian R. Ertl <hi@caian.org>

RUN addgroup -S alan && adduser -S alan -G alan
RUN mkdir -p /home/alan
RUN chown alan:alan /home/alan
USER alan
WORKDIR /home/alan

FROM base AS build
COPY ["package.json", "package-lock.json", ".babelrc.js", "./"]
COPY ["src", "./src"]
RUN npm install
RUN npm run build

FROM base AS dependencies
COPY ["package.json", "package-lock.json", "./"]
RUN npm install --only=production

FROM dependencies AS run
COPY --from=build ["/home/alan/dist", "./dist"]
ENTRYPOINT ["npm", "start"]
