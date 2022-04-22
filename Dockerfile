FROM node:18-alpine AS base
LABEL maintainer="Caian Ertl <hi@caian.org>"

RUN addgroup -S turing && adduser -S turing -G turing \
    && mkdir -p /home/turing \
    && chown turing:turing /home/turing
USER turing

# ...
FROM base AS package
WORKDIR /home/turing
COPY package.json .
COPY pnpm-lock.yaml .

# ...
FROM package as bin
USER root
RUN npm i -g pnpm@latest \
    && apk add --no-cache curl \
    && curl -sf https://gobinaries.com/tj/node-prune | sh
USER turing

# ...
FROM bin AS dev-deps
RUN pnpm i

# ...
FROM bin AS prod-deps
RUN NODE_ENV="production" pnpm i
RUN node-prune

# ...
FROM dev-deps AS build
COPY src src
COPY .babelrc.js .
RUN pnpm run build:js

# ...
FROM package AS run
COPY --from=prod-deps ["/home/turing/.pnpm-store", ".pnpm-store"]
COPY --from=prod-deps ["/home/turing/node_modules", "node_modules"]
COPY --from=build ["/home/turing/dist", "dist"]
ENTRYPOINT ["node", "dist"]
