const colors = require('tailwindcss/colors');

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
      primary: 'rgb(202, 75, 97)',
      'dark-bg': 'rgb(30, 41, 59)',
    },
  },
  plugins: [],
};
