import { defineConfig } from 'windicss/helpers';
import formsPlugin from 'windicss/plugin/forms';

export default defineConfig({
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git']
  },
  darkMode: 'class',
  safelist: '',
  theme: {
    extend: {}
  },
  plugins: [formsPlugin],
  attributify: {
    prefix: 'w:'
  },
  transformCSS: 'pre'
});
