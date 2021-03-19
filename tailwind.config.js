const { urlencoded } = require("body-parser");

module.exports = {
  purge: {
    enabled: true,
    content: ["./views/**/*.ejs"],
  },
  
  darkMode: false, // or 'media' or 'class'


  theme: {
    extend: {
      backgroundImage: theme => ({
        'sky': "url('/images/red-sky.jpg')",
        'thermometer': "url('/images/thermometer.jpg')",
        'wind-sock': "url('/images/wind-sock.jpg')",
        'clouds': "url('/images/clouds.jpg')",
        'rain': "url('/images/rain.jpg')",
        'snow': "url('/images/snow.jpg')",
        'drizzle': "url('/images/drizzle.jpg')",
        'clear': "url('/images/clear.jpg')",
        'thunderstorm': "url('/images/thunderstorm.jpg')",
        'atmosphere': "url('/images/atmosphere.jpg')",
       })
    }
  },

  variants: {
    extend: {},
  },

  plugins: [
]
}
