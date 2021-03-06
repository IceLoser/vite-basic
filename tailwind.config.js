const colors = require('tailwindcss/colors');
const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');
const lineClamp = require('@tailwindcss/line-clamp');
const aspectRatio = require('@tailwindcss/aspect-ratio');

module.exports = {
  darkMode: 'media',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: [
        'ui-sans-serif',
        'system-ui',
        ' -apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      serif: ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
      comfortaa: ['Comfortaa', 'cursive', 'Times New Roman', 'Times', 'serif'],
    },
    colors: {
      ...colors,
      primary: 'rgb(159, 120, 255)',
      blue: 'rgb(50, 202, 254)',
      'dark-bg': withOpacityValue('30 41 59'),
      'dark-primary': 'rgb(81, 74, 157)',
      'dark-blue': 'rgb(36, 198, 220)',
    },
    extend: {
      animation: {
        opacity: 'opacity .8s cubic-bezier(0.4, 0, 0.2, 1) 1 normal forwards',
      },
      keyframes: {
        opacity: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [typography, forms, lineClamp, aspectRatio],
};

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(${variable})`;
    }
    return `rgb(${variable} / ${opacityValue})`;
  };
}
