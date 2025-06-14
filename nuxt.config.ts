import tailwindcss from '@tailwindcss/vite';

const cacheTTL = 60 * 60 * 24 * 365; // 1 year – you can set this to whatever you want

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-06-14',
  devtools: { enabled: true },
  app: {
    head: {
      link: [{ rel: 'icon', href: '/favicon.ico' }],
    },
  },
  css: ['~/assets/css/main.css'],
  nitro: {
    compressPublicAssets: true,
    routeRules: {
      '/img/**': { headers: { 'cache-control': `public,max-age=${cacheTTL},s-maxage=${cacheTTL}` } },
      '/_nuxt/**': { headers: { 'cache-control': `public,max-age=${cacheTTL},s-maxage=${cacheTTL}` } },
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
      {
        apply: 'build',
        name: 'vite-plugin-ignore-sourcemap-warnings',
        configResolved(config) {
          const originalOnWarn = config.build.rollupOptions.onwarn;
          config.build.rollupOptions.onwarn = (warning, warn) => {
            if (warning.code === 'SOURCEMAP_BROKEN' && warning.plugin === '@tailwindcss/vite:generate:build') {
              return;
            }

            if (originalOnWarn) {
              originalOnWarn(warning, warn);
            } else {
              warn(warning);
            }
          };
        },
      },
    ],
  },
  modules: ['@nuxtjs/seo', '@nuxt/eslint', '@nuxt/icon', '@nuxt/fonts', '@vueuse/nuxt'],
  site: {
    // https://nuxtseo.com/
    url: 'https://example.com', // TODO: Your site's URL
    name: 'Welcome to Nuxt', // TODO: Your site's default meta title
    description: 'My awesome Nuxt project', // TODO: Your site's default meta description
    defaultLocale: 'en', // TODO: HTML lang attribute value
  },
});
