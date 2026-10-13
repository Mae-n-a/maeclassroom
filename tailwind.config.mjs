/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        magenta: { DEFAULT: '#CB218C', dark: '#A31770' },
        orange: { DEFAULT: '#EF9400', text: '#B87200' },
        red: { DEFAULT: '#EA4445', text: '#C9302F' },
        tint: { DEFAULT: '#FDF4FA', border: '#F5D8EA', chip: '#FDEAF4', input: '#E8D6E2' },
        ink: '#191720',
        strong: '#3A3644',
        body: '#514D5C',
        muted: '#7A7684',
        subtle: '#9A96A3',
        hairline: '#EDE9EE',
        outline: '#E8E4E9',
        chip: '#F6F4F7',
      },
      fontFamily: {
        display: ['Quicksand', 'system-ui', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
        sans: ['"Nunito Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
};
