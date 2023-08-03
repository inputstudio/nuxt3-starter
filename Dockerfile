FROM node:18-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install --frozen-lockfile && \
    yarn cache clean

COPY . .

RUN yarn build

FROM node:18-alpine

WORKDIR /app

COPY --from=0 /app/.output .

ENV HOST 0.0.0.0
ENV PORT 3000

EXPOSE 3000

CMD ["node", "server/index.mjs"]