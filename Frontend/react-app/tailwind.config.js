/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['sans-serif'],
      },
      colors: {
        'seo-yellow': '#FECB00',
        'seo-yltr': '#FFFAA6',
        'seo-blue': '#003755',
        'seo-bltr': '#00B9E4',
        seo: '#565A5C',
        'seo-orgltr': '#E0E1DD',
        'seo-medium': '#8E908F',
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
