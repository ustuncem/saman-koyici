/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#cd783c',
          100: '#f5e4d8',
          200: '#ebc9b1',
          300: '#e1ae8a',
          400: '#d79363',
          500: '#cd783c',
          600: '#a46030',
          700: '#7b4824',
          800: '#523018',
          900: '#140c06',
        },
        secondary: {
          DEFAULT: '#773b13',
          100: '#e4d8d0',
          200: '#c9b1a1',
          300: '#ad8971',
          400: '#926242',
          500: '#773b13',
          600: '#5f2f0f',
          700: '#47230b',
          800: '#301808',
          900: '#180c04',
        },
      },
      fontFamily: {
        primary: ['Dancing Script', 'sans-serif'],
        secondary: ['Poppins', 'sans-serif'],
        complementary: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
