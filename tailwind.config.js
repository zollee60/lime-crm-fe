module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    zIndex: {
      'm1': -1
    },
    boxShadow:{
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      '4xl': '0 45px 70px -18px rgba(0, 0, 0, 0.4)',
      'base': '8px 8px 32px 2px rgba(0,0,0,0.85)'
    },
    extend: {
      colors: {
        'lime': '#C7EA46',
        'lime-dark': '#9BB636',
        'dialog': '#F3F3F3'
      },
      blur: ['hover', 'focus'],
      filter: ['hover', 'focus'],
      backdropFilter: ['hover', 'focus'],
      backdropBlur: ['hover', 'focus'],
      boxShadow: ['hover'],
      cursor: ['hover', 'focus'],
      border: ['hover', 'focus']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
