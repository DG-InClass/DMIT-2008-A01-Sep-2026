// open-weather.js
// 🚨 API keys should NOT be running in the browser
const { VITE_OPEN_WEATHER_API } = import.meta.env;

// Internal functions and constants to support the exported functions
const BASE_API_URL = 'https://api.openweathermap.org/data/2.5/';
const queryString = ({endpoint, city, country}) =>
    `${endpoint}?q=${city},${country}&units=metric&appid=${VITE_OPEN_WEATHER_API}`;

const fetchData = ({url, callback}) => {
    fetch(url).then(handleResponse).then(callback);
}

const handleResponse = (response) => response.json();

/**
 * Gets the current weather.
 * 
 * @param {Object} options - Options for the API call.
 * @param {string} options.city - The city name.
 * @param {string} options.country - The country code.
 * @param {Function} options.callback - Called with the weather data.
 * @return {void}
 */
export const getCurrentWeather = function({city, country, callback}) {
    const WEATHER = BASE_API_URL + 'weather/';
    const url = queryString({endpoint: WEATHER, city, country});
    fetchData({url, callback});
}

/**
 * Gets the 5-day forecast in 3-hour intervals
 * 
 * @param {Object} options - Options for the API call.
 * @param {string} options.city - The city name.
 * @param {string} options.country - The country code.
 * @param {Function} options.callback - Called with the Forecast data.
 * @returns {void}
 */
export const getForecast = function({city, country, callback}) {
    const FORECAST = BASE_API_URL + 'forecast/';
    const url = queryString({endpoint: FORECAST, city, country});
    fetchData({callback, url});
}
