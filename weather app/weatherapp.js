let weather = {
    "apiKey": "e4ed5e7e1dd7787026f6d83b8aa48143",
    fetchWeather : function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metrics&appid=" 
        + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => console.log(data));
    },

    displayWeather: function(data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity} = data.main;
      const { speed } = data.wind;
      console.log(name,icon,description,temp,humidity,speed)
      document.querySelector("city").innerText = "Weather in" + name;
      document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon +"png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp +"ºC";
      document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText = "Wind Speed: " + speed + "km/h";
    }

};