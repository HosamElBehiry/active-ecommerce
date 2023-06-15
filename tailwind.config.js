/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    screens: {
      'lg': { max: '1200px' },
      'md': { max: '991px' },
      'sm': { max: '768px' },
      'xs': { max: '570px' },
      '2xs': { max: '420px' },
    },
  },
  plugins: [],
}
