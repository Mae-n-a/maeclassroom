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
      },
    },
  },
	plugins: [
		require('flowbite/plugin')
	],
}
