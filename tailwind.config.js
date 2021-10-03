module.exports = {
  purge: [
    './public/**/*html',
  ],
  darkMode: false, 
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'grayButton': 'rgba(255, 255, 255, 0.7)',
      'grayDiv': '#1d1d1d'

    }),
    extend: {

      backgroundImage : theme => ({
        'hero' : 'url( ../img/bg.png)'
      })
    },
  },
  variants: {},
  plugins: [],
}