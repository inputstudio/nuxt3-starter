import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  files: ['**/*.vue'],
  rules: {
    'vue/html-self-closing': 'off',
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true,
      },
    ],
  },
}).prepend(eslintPluginPrettierRecommended);
