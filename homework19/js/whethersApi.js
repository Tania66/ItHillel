const API_KEY = "bb24a3d0de0eaedfea58b35404bc8032";

export function fetchWeather() {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    })
    .then((data) => {
      return data;
    });
}

// export const fetchWeatherApi = async () => {
//   try {
//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`
//     );
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log("Error: ", error.message);
//   }
// };
