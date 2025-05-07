require("dotenv").config();

const apiKey = process.env.OPENWEATHERMAP_API_KEY;
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const locationInput = document.getElementById("locationInput");
const searchBtn = document.getElementById("searchBtn");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");

searchBtn.addEventListener("click", function () {
  const location = locationInput.value.trim();
  if (location) {
    fetchWeather(location);
  } else {
    alert("Please enter a city name....");
  }
});

function fetchWeather(location) {
  const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      cityName.textContent = data.name;
      temperature.textContent = `${Math.round(data.main.temp)}°C`;
      description.textContent = data.weather[0].description;

      document.querySelector(".weather-info").style.display = "block";
    })
    .catch((error) => {
      console.error("Error fecthing weather data:", error);
    });
  // console.log(url)
}
