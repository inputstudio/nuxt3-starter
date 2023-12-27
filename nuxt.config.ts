// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Welcome to Nuxt',
      meta: [{ name: 'description', content: 'My awesome Nuxt project' }],
      link: [{ rel: 'icon', href: '/favicon.ico' }],
    },
  },
  css: ['@/assets/scss/main.scss'],
  modules: ['@nuxtjs/eslint-module', '@nuxtjs/google-fonts', 'nuxt-headlessui', '@nuxtjs/tailwindcss'],
  eslint: {
    lintOnStart: false,
    formatter: 'visualstudio',
  },
  headlessui: {
    // https://nuxt.com/modules/headlessui
    prefix: 'Headless',
  },
  googleFonts: {
    // https://google-fonts.nuxtjs.org/getting-started/options
    families: {
      Inter: [100, 300, 400, 500, 600, 700],
    },
  },
});
