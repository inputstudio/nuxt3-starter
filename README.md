# Nuxt 3 Starter

This is an opinionated starter template for [Nuxt 3](https://nuxt.com). It is based on the what we use and love at [Input Studio](https://inputstudio.co).

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

Yeah, yarn is better than npm. But you can still use npm if you want.

```bash
# Create a new Nuxt 3 project using this starter template:
npx nuxi init -t gh:inputstudio/nuxt3-starter <project-name>
# Go to the project directory:
cd <project-name>
# Install the dependencies:
yarn install
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
