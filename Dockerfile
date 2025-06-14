FROM node:22-alpine AS base

# https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine
RUN apk update && \
    apk add --no-cache libc6-compat

WORKDIR /app

# --- Build Stage ---
FROM base AS build

# Setup the environment for pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0

# Copy the package.json to install the correct version of pnpm
COPY package.json ./

RUN corepack enable && \
    corepack install

# Copy lockfile and workspace config
COPY pnpm-workspace.yaml ./
COPY pnpm-lock.yaml ./

# Install dependencies with cache
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

RUN pnpm build

# --- Runner Stage ---
FROM base AS runner

ENV NODE_ENV=production

USER node

# Copy build output
COPY --from=build --chown=node:node /app/.output .

EXPOSE 3000

CMD ["node", "./server/index.mjs"]