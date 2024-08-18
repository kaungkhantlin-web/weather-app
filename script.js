$(document).ready(function () {
  // loaction , language

  let location = "paris";
  let language = "EN";
  $("#location").change(function () {
    location = $("#location").val();
    $(".city-name").text($("#location").val());

    getWeather();
  });

  $("#language").change(function () {
    language = $("#language").val();
    getWeather();
  });

  // get weather function
  function getWeather() {
    const settings = {
      async: true,
      crossDomain: true,
      url: `https://open-weather13.p.rapidapi.com/city/${location}/${language}`,
      method: "GET",
      headers: {
        "x-rapidapi-key": "69a12cc3famsh262de95524896e9p1abb41jsn0af8595564fb",
        "x-rapidapi-host": "open-weather13.p.rapidapi.com",
      },
    };

    $.ajax(settings).done(function (response) {
      const weather = response.weather[0];
      const temperature = response.main;
      const humidity = response.main;
      const wind = response.wind;
      const visibility = response.main;

      $(".weather").text(weather.description);
      $(".temperature").text(temperature.temp);
      $(".humidity").text(humidity.humidity);
      $(".wind").text(wind.speed);
      $(".visibility").text(visibility.visibility);
    });
  }
  getWeather();
});
