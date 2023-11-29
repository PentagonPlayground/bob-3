/** @type {import('tailwindcss').Config} */

// CONFIG FOR STORYBOOK - NOT USED FOR PRODUCTION

import kevinConfig from './themes/kevin/tailwind.config.ts'
import websiteConfig from './themes/website/tailwind.config.ts'

export const config = {
    content: [
      './components/**/*.{tsx,ts}',
      './themes/**/*.{tsx,ts}',
    ],
    theme: {
      extend: {},
      colors: {
        ...kevinConfig.theme.extend.colors,
        ...websiteConfig.theme.extend.colors
      }
    },
    plugins: [],
  }

  export default config