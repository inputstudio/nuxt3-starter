# Nuxt 3 Starter

Welcome to the [Input Studio](https://inputstudio.co) **Nuxt 3 Starter** — an opinionated template for building modern, high-performance web applications with [Nuxt 3](https://nuxt.com).  
This starter is tailored to our workflow at Input Studio and is not a generic boilerplate. For full flexibility, customize it to fit your needs!

> 📚 For more on Nuxt 3, see the [official documentation](https://nuxt.com/docs/getting-started/introduction).

## Features

- 🪁 **Tailwind CSS v4** — Utility-first CSS framework for rapid UI development.
- 🇬 **Nuxt Fonts** — Effortlessly manage and optimize web fonts.
- 🚀 **Nuxt Icon** — Use any icon from the [icones.js.org](https://icones.js.org/) collection.
- 🔍 **Nuxt SEO** — Automated SEO essentials: robots.txt, sitemap, link checker, and more.
- 🧰 **VueUse** — Essential Vue composition utilities for every project.
- 💾 **HTTP cache & compression** — Optimized static asset delivery.
- 🪛 **ESLint & Prettier** — Consistent code style with [Tailwind plugin](https://github.com/tailwindlabs/prettier-plugin-tailwindcss).
- 🤖 **MCP Server** — Enhance code understanding for AI tools like GitHub Copilot in VS Code [agent mode](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode).
- ⚙️ **VS Code Ready** — Editor settings and recommended extensions included.
- 🐋 **Production-Ready Dockerfile** — Multi-stage build for minimal, secure images.

## Getting Started

**Requirements:**  
- Node.js **v22+** (or use [Volta](https://volta.sh) for automatic version management)
- [pnpm](https://pnpm.io/) (recommended, but npm/yarn also work)

**Create a new project:**
```bash
npx nuxi init -t gh:inputstudio/nuxt3-starter <project-name>
cd <project-name>
pnpm install
pnpm dev
```

**Customize:**  
Search for `TODO` in your editor (or use the [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree) VS Code extension) to find areas to personalize.

## UI Frameworks

Tailwind CSS is included by default.  
You can add any UI library you like. Recommended options (all Tailwind-compatible):

- [Headless UI](https://nuxt.com/modules/headlessui)
- [Daisy UI](https://daisyui.com/docs/install/)
- [NuxtUI](https://ui.nuxt.com/)
- [Flowbite](https://flowbite.com/docs/getting-started/nuxt-js/)

## Production Build

To build for production:

```bash
pnpm build
```

For deployment guides, see the [Nuxt deployment docs](https://nuxt.com/docs/getting-started/deployment).

## 🐳 Docker

**Build your image:**
```bash
docker build -t myapp .
```

**Push to your registry:**
```bash
docker push myregistry.com/myapp
```

For more, see Docker's [Node.js guide](https://docs.docker.com/language/nodejs/) and [getting started docs](https://docs.docker.com/go/get-started-sharing/).

## References

- [Nuxt 3 Documentation](https://nuxt.com/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [VueUse](https://vueuse.org/)
