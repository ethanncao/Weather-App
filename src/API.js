export async function getWeather(location) {
  const apiKey = "D8V3YA6RN9KB6RXCMD6XA5YZ6";
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(
    location
  )}?unitGroup=us&key=${apiKey}&contentType=json`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error: ${response.statusText}`);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch weather:", error);
    return null;
  }
}

export function processWeather(data) {
  const location = data.resolvedAddress;
  const today = data.days[0];

  // returning an object that contains the location, temp, and conditions
  return {
    location,
    temperature: today.temp,
    conditions: today.conditions,
  };
}
