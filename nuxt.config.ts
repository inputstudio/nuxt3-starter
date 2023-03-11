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
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: '@import "@/assets/scss/my-style.scss";', // Auto import scss files your Single-File Component (SFC)
        },
      },
    },
  },
  modules: ['@nuxtjs/device', '@nuxtjs/eslint-module', '@nuxtjs/google-fonts', 'nuxt-headlessui'],
  device: {
    refreshOnResize: true,
  },
  eslint: {
    lintOnStart: false,
    formatter: 'visualstudio',
  },
  googleFonts: {
    families: {
      Inter: true,
    },
    download: true,
    base64: false,
  },
});
