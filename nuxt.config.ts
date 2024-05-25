const cacheTTL = 60 * 60 * 24 * 365; // 1 year – you can set this to whatever you want

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [{ rel: 'icon', href: '/favicon.ico' }],
    },
  },
  css: ['@/assets/scss/main.scss'],
  nitro: {
    compressPublicAssets: true,
    routeRules: {
      '/img/**': { headers: { 'cache-control': `public,max-age=${cacheTTL},s-maxage=${cacheTTL}` } },
      '/_nuxt/**': { headers: { 'cache-control': `public,max-age=${cacheTTL},s-maxage=${cacheTTL}` } },
    },
  },
  modules: ['@nuxtjs/google-fonts', '@nuxtjs/seo', '@nuxtjs/tailwindcss', '@nuxt/eslint', 'nuxt-icon', '@vueuse/nuxt'],
  googleFonts: {
    // https://google-fonts.nuxtjs.org/getting-started/options
    families: {
      Inter: [100, 300, 400, 500, 600, 700],
    },
  },
  site: {
    // https://nuxtseo.com/
    url: 'https://example.com', // TODO: Your site's URL
    name: 'Welcome to Nuxt', // TODO: Your site's default meta title
    description: 'My awesome Nuxt project', // TODO: Your site's default meta description
    defaultLocale: 'en', // TODO: HTML lang attribute value
  },
});
