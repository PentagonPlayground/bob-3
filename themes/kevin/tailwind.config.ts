/** @type {import('tailwindcss').Config} */

export const tailwindConfig = {
  content: ['./lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'k-primary': '#ff0000',
        'k-secondary': '#444',
      },
    },
  },
  plugins: [],
}

export default tailwindConfig
