const https = require("https");

exports.post =  (req, res) => {
    const query = req.body.cityName;
    const apiKey = process.env.API_KEY;
    const unit = "metric"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=${unit}&appid=${apiKey}`;
    
https.get(url, function(response){
            response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const feelsLike = weatherData.main.feels_like;
            const humidity = weatherData.main.humidity;
            const windSpeed = weatherData.wind.speed;
            const windDirection = weatherData.wind.deg;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
            const cityName = weatherData.name;
            const visibility = weatherData.visibility;
            const weatherID = weatherData.weather[0].id;
            let weatherBg;

if (weatherID >= 200 && weatherID < 300){
    weatherBg = "thunderstorm";
} else if (weatherID >= 300 && weatherID < 400) {
    weatherBg = "drizzle";
} else if (weatherID >= 500 && weatherID < 600) {
    weatherBg = "rain";
} else if (weatherID >= 600 && weatherID < 700) {
    weatherBg = "snow" ;
} else if (weatherID >= 700 && weatherID < 800) {
    weatherBg = "atmosphere";
} else if (weatherID == 800) {
    weatherBg = "clear";
} else {
    weatherBg = "clouds"};
                
                res.render("weather", {
                    temp: temp,
                    weatherDescription: weatherDescription,
                    feelsLike: feelsLike,
                    humidity: humidity,
                    windSpeed: windSpeed,
                    windDirection: windDirection,
                    cityName: cityName,
                    visibility: visibility,
                    weatherBg: weatherBg
                  });
        });
    });
};


