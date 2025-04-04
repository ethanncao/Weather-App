import { getWeather, processWeather } from "./API.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("weather-form");
  const input = document.getElementById("location-input");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    const location = input.value.trim();
    if (!location) return;

    const data = await getWeather(location);
    const weather = processWeather(data);

    console.log(`Location: ${weather.location}`);
    console.log(`Temperature: ${weather.temperature}F°`);
    console.log(`Conditions: ${weather.conditions}`);

    input.value = "";
  });
});
