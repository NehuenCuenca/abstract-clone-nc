const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      myIndigo: '#4C5FD5',
      myLigthPurple: '#dadbf1',
    },
    extend: {},
    // fontFamily: {
    //   'raleway': ['Raleway', 'sans-serif',]
    // },
    
  },
  plugins: [],
}