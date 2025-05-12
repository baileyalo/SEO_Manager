/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['sans-serif'],
      },
      colors: {
        'reprisk-yellow': '#FECB00',
        'reprisk-yltr': '#FFFAA6',
        'reprisk-blue': '#003755',
        'reprisk-bltr': '#00B9E4',
        reprisk: '#565A5C',
        'reprisk-orgltr': '#E0E1DD',
        'reprisk-medium': '#8E908F',
        disabled: '#7D9AAA',
        'grey-medium': '#5a5a5a',
        'grey-dark': '#232323',
        background: '#E0E1DD',
        success: '#009B3A',
        warning: '#B9002D',
        invalid: '#B9002D',
        default: 'white'
      },
    },
  },
  plugins: [],
};
