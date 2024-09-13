/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fbe9f5',
          100: '#f4bde0',
          200: '#ed91cb',
          300: '#e665b6',
          400: '#df3aa2',
          500: '#c52088',
          600: '#9a196a',
          700: '#6e124c',
          800: '#420b2d',
          900: '#16040f',
        },
        accent: {
          50: '#fff5e5',
          100: '#ffe2b3',
          200: '#ffce80',
          300: '#ffbb4d',
          400: '#ffa81a',
          500: '#e68e00',
          600: '#b36f00',
          700: '#804f00',
          800: '#4d2f00',
          900: '#1a1000',
        },
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
