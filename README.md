# Nuxt 3 Starter

This is an minimal starter template for [Nuxt 3](https://nuxt.com). It is based on the what we use and love at [Input Studio](https://inputstudio.co).

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Features

- 👓 [Sass](https://sass-lang.com/)
- 🪁 [Tailwind CSS](https://tailwindcss.com)
- 🇬 [Google Fonts](https://google-fonts.nuxtjs.org/)
- 🚀 [Nuxt Icon](https://nuxt.com/modules/icon) (add any icons from [icones.js.org](https://icones.js.org/) collection)
- 🔍 [Nuxt SEO](https://nuxtseo.com/) (robots.txt, sitemap, link checker, etc.)
- 🧰 [VueUse](https://vueuse.org/) (a collection of essential utilities — trust me, you'll need it at somepoint)
- 💾 HTTP cache control and compression for static assets
- 🪛 Eslint and Prettier with [Tailwind plugin](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) (automatically sorts classes based on recommended class order)
- ⚙️ VS Code settings and recommended extensions
- 🐋 Optimized Dockerfile for production (includes a GitHub Actions workflow to build and publish your Docker image)
- 📦 Package manager agnostic (`nuxi` will ask you which package manager you want and it'll install dependencies accordingly)

## Setup

Make sure to have Node.js version 20 or higher installed on your machine. If it's not the case, you can install [volta](https://volta.sh).
Volta will automatically install the required versions of Node.js.

Now, you can run the following command to create a new Nuxt 3 project based on this template:

```bash
npx nuxi init -t gh:inputstudio/nuxt3-starter <project-name>
```

After that, make sure to go through the TODOs (search for `TODO` in your code editor) to customize the project to your needs. Enjoy ✨

## Which UI framework should I use?

This starter template uses Tailwind CSS by default. You can add any UI framework you want on top of it. Here are some that we use and recommend (they are all fully compatible with Tailwind):

- [Headless UI](https://nuxt.com/modules/headlessui)
- [Daisy UI](https://daisyui.com/docs/install/)
- [NuxtUI](https://ui.nuxt.com/)

Feel free to use any other UI framework you like 🙂.

## Production

To build the application for production, run the following command:

```bash
npm run build
```

This will generate a `dist` directory containing the production build. You can preview the production build locally by running:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Docker

Before you start, copy either the `Dockerfile.npm` or `Dockerfile.yarn` to `Dockerfile` in the root of your project. Depending on which package manager you want to use.

### Building and running your application

When you're ready, start your application by running:

```bash
docker compose up
```

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
