module.exports = {
  content: ['./src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'lg': {'max': '2550px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
