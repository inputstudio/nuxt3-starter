# Nuxt 3 Starter

This is an _minimal—opinionated_ starter template for [Nuxt 3](https://nuxt.com). It is based on the what we use and love at [Input Studio](https://inputstudio.co).

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Features

Don't worry, if you don't need something, you can remove it.

- 👓 [Sass](https://sass-lang.com/) and [Tailwind CSS](https://tailwindcss.com)
- ✨ [Headless UI components](https://headlessui.dev)
- 🇬 [Google Fonts module](https://google-fonts.nuxtjs.org/)
- 🪛 Eslint and Prettier with [Tailwind plugin](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) (automatically sorts classes based on recommended class order)
- ⚙️ VS Code settings and recommended extensions
- 🐋 Dockerfile optimized for production (also includes a GitHub Actions workflow to build and publish the Docker image)

## Setup

Make sure to have Node.js and Yarn (optional) installed. If it's not the case, you can install [volta](https://volta.sh).
Volta will automatically install the required versions of Node.js and Yarn.

Now, you can run the following command to create a new Nuxt 3 project based on this starter template:

```bash
# Create a new Nuxt 3 project using this starter template:
# You can remove `--gitInit` if you don't want to initialize a Git repository.
# You can remove `--packageManager yarn` if you want to use another package manager.
npx nuxi init --gitInit --packageManager yarn -t gh:inputstudio/nuxt3-starter <project-name>
```

After the project is created (dependencies are already installed), you can run the following commands:

```bash
# Go to the project directory:
cd <project-name>
# Start the development server:
yarn dev
```

## Production

```bash
# Build the application for production:
yarn build
# Preview production build:
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Docker

### Building and running your application

When you're ready, start your application by running:
`docker compose up --build`.

Your application will be available at http://localhost:3000.

### Deploying your application to the cloud

First, build your image, e.g.: `docker build -t myapp .`.
If your cloud uses a different CPU architecture than your development
machine (e.g., you are on a Mac M1 and your cloud provider is amd64),
you'll want to build the image for that platform, e.g.:
`docker build --platform=linux/amd64 -t myapp .`.

Then, push it to your registry, e.g. `docker push myregistry.com/myapp`.

Consult Docker's [getting started](https://docs.docker.com/go/get-started-sharing/)
docs for more detail on building and pushing.

### References

- [Docker's Node.js guide](https://docs.docker.com/language/nodejs/)
