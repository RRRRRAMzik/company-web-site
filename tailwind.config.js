module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'mainBlue':'#09a2ff', // for top bg
        'menuGray':'#000000b3', // for menu text
        'textBlue':'#3b99e0', // eg for "About Us"
        'bottomBlack':'#2b2f31', // for bottom
      },
      screens: {
        'ph': {'min': '350px', 'max': '800px'},
      }
    },
  },
  plugins: [],
}
