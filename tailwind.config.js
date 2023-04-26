/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#59d3d4',
          DEFAULT: '#06bbbc',
          dark: '#008c8d',
        },
      },
    },
  },
  plugins: [
    require('prettier-plugin-tailwindcss'),
    require('flowbite/plugin')
  ],
}
