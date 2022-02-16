const colors = require('tailwindcss/colors');

console.log(colors);

module.exports = {
  darkMode: 'media',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        12: '42px',
        10: '34px',
        9: '30px',
        8.5: '29px',
        8: '28px',
        4: '14px',
        2: '7px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
    colors: {
      ...colors,
      primary: '#ca4b61',
      white: '#ffffff',
      blue: '#277BBF',
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      yellow: '#ffc82c',
      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontSize: {
      sm: ['12px', '16px'],
      base: ['14px', '20px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
    boxShadow: {
      sm: '0 1px 20px 1px rgb(0 0 0 / 0.05)',
    },
  },
  plugins: [],
};
