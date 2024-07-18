const innerWeather = document.querySelector(".inner_weather");
const updateBtn = document.querySelector(".update_btn");
import { fetchWeather } from "./whethersApi.js";

function fetchApiWeather() {
  fetchWeather()
    .then(renderCityWeather)
    .catch((error) => console.error("Error:", error));
}

function renderCityWeather(data) {
  const { name, main, wind } = data;
  const temp = Math.round(data.main.temp - 273);
  const feelTemp = Math.round(data.main.feels_like - 273);
  const markup = `
  <div class="city-wrap">
    <h1 class="city_title">${name}</h1>
    <p class="description"><span class="city-span">Humidity:</span> ${main.humidity}&#65285;</p>
    <p class="description"><span class="city-span">Pressure:</span> ${main.pressure} hPA</p>
      <p class="description"><span class="city-span"> Wind:</span> ${wind.speed} km/h </p>
  </div>`;

  const markupWeather = data.weather
    .map(
      (item) =>
        `
<div class="city-weather-wrap">
<img class="icon_weather" alt=${item.main} src='https://openweathermap.org/img/wn/${item.icon}@2x.png'>
<p class="city_temp">${temp}&#8451;</p>
<p class="city-feel">Feel like: ${feelTemp}&#8451;</p>
<p class="city-desc">${item.description}</p>
</div>`
    )
    .join("");
  innerWeather.insertAdjacentHTML("beforeend", markup);
  innerWeather.insertAdjacentHTML("beforeend", markupWeather);
}

const onUpdate = () => {
  clearGalleryContainer();
  fetchApiWeather();
};

function clearGalleryContainer() {
  innerWeather.innerHTML = "";
}

fetchApiWeather();
updateBtn.addEventListener("click", onUpdate);
