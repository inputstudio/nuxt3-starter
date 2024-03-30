# Nuxt 3 Starter

This is an minimal starter template for [Nuxt 3](https://nuxt.com). It is based on the what we use and love at [Input Studio](https://inputstudio.co).

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Features

Don't worry, if you don't need something, you can remove it.

- 👓 [Sass](https://sass-lang.com/) and [Tailwind CSS](https://tailwindcss.com)
- ✨ [Headless UI components](https://headlessui.dev)
- 🇬 [Google Fonts module](https://google-fonts.nuxtjs.org/)
- 🔍 [Nuxt SEO module](https://nuxtseo.com/) (robots.txt, sitemap, link checker, etc.)
- 🪛 Eslint and Prettier with [Tailwind plugin](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) (automatically sorts classes based on recommended class order)
- ⚙️ VS Code settings and recommended extensions
- 🐋 Dockerfile optimized for production (also includes a GitHub Actions workflow to build and publish the Docker image)
- 📦 Package manager agnostic (`nuxi` will ask you which package manager you want and it'll install dependencies accordingly)

⚠️ Prettier 3 is not yet supported by its VS Code extension, so you may need to disable it or use the Prettier 2. Nonetheless, the Prettier 3 CLI works fine. ⚠️

## Setup

Make sure to have Node.js version 20 or higher installed on your machine. If it's not the case, you can install [volta](https://volta.sh).
Volta will automatically install the required versions of Node.js.

Now, you can run the following command to create a new Nuxt 3 project based on this template:

```bash
npx nuxi init -t gh:inputstudio/nuxt3-starter <project-name>
```

After that, make sure to go through the TODOs (search for `TODO` in your code editor) to customize the project to your needs. Enjoy ✨

## Production

To build the application for production, run the following command:

```bash
yarn build
```

This will generate a `dist` directory containing the production build. You can preview the production build locally by running:

```bash
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
